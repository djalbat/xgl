'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../facet'),
    vec3 = require('../../maths/vec3'),
    CanvasElement = require('../../element/canvas'),
    arrayUtilities = require('../../utilities/array'),
    transformUtilities = require('../../utilities/transform');

var FacetInXYPlane = require('../../facetInXYPlane'),
    VerticalLineInXYPlane = require('../../verticalLineInXYPlane');

var first = arrayUtilities.first,
    normalise = vec3.normalise,
    composeTransform = transformUtilities.composeTransform;


var facets = calculateFacets(),
    colours = [[1, 0, 0, 1], [0, 1, 0, 1], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 1], [1, 0, 1, 1]];

var Triangle = function (_CanvasElement) {
  _inherits(Triangle, _CanvasElement);

  function Triangle(transform) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, transform));

    _this.facets = facets; ///
    _this.colours = colours; ///
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getColours',
    value: function getColours() {
      return this.colours;
    }
  }, {
    key: 'getInitialVertexPositions',
    value: function getInitialVertexPositions() {
      var initialVertexPositions = this.facets.reduce(function (initialVertexPositions, facet) {
        var vertices = facet.getVertices();

        initialVertexPositions = vertices.reduce(function (initialVertexPositions, vertex) {
          var initialVertexPosition = vertex.slice(); ///

          initialVertexPositions.push(initialVertexPosition);

          return initialVertexPositions;
        }, initialVertexPositions);

        return initialVertexPositions;
      }, []);

      return initialVertexPositions;
    }
  }, {
    key: 'calculateVertexIndexes',
    value: function calculateVertexIndexes(vertexPositions) {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes = [].concat(_toConsumableArray(vertexIndexes), [vertexIndex + 0, vertexIndex + 1, vertexIndex + 2]);

        vertexIndex += 3;

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            normals = [///
        normal, normal, normal];

        vertexNormals = normals.reduce(function (vertexNormals, normal) {
          var vertexNormal = normalise(normal);

          vertexNormals.push(vertexNormal);

          return vertexNormals;
        }, vertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexColours = this.facets.reduce(function (vertexColours, facet, index) {
        index = index % 6; ///

        var colour = this.colours[index],
            colours = [colour, colour, colour];

        vertexColours = colours.reduce(function (vertexColours, colour) {
          var vertexColour = colour; ///

          vertexColours.push(vertexColour);

          return vertexColours;
        }, vertexColours);

        return vertexColours;
      }.bind(this), []);

      return vertexColours;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);

      _get(Triangle.prototype.__proto__ || Object.getPrototypeOf(Triangle.prototype), 'create', this).call(this, colourRenderer, textureRenderer, transforms);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          Class = Triangle,
          canvasElement = CanvasElement.fromProperties.apply(CanvasElement, [Class, properties, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return Triangle;
}(CanvasElement);

module.exports = Triangle;

function calculateFacets() {
  var facetVertices = [[-2, 0, 0], /// [ 2, 0, 0 ],
  [+2, 0, 0], /// [ 0, 2, 0 ],
  [0, 2, 0]],
      maskFacetVertices = [[0, 1, 0], /// [ 1, 0, 1 ],
  [1, 0, 0], /// [ 0, 0, 1 ],
  [1, 1, 0]],
      facet = Facet.fromVertices(facetVertices),
      maskFacet = Facet.fromVertices(maskFacetVertices),
      maskFacetInXYPlane = FacetInXYPlane.fromFacet(maskFacet),
      linesInXYPlane = maskFacetInXYPlane.getLinesInXYPlane(),
      firstLineInXYPlane = first(linesInXYPlane),
      lineInXYPlane = firstLineInXYPlane,
      verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
      forwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getForwardsRotationAboutZAxisMatrix(),
      backwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getBackwardsRotationAboutZAxisMatrix();

  facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

  var facets = facet.splitWithVerticalLineInXYPlane(verticalLineInXYPlane);

  facets.forEach(function (facet) {
    facet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
  });

  // const forwardsTranslation = facetInXYPlane.getForwardsTranslation(),
  //       backwardsTranslation = facetInXYPlane.getBackwardsTranslation(),
  //       forwardsRotationQuaternion = facetInXYPlane.getForwardsRotationQuaternion(),
  //       backwardsRotationQuaternion = facetInXYPlane.getBackwardsRotationQuaternion();
  //
  // maskFacet.rotate(forwardsRotationQuaternion);
  // maskFacet.translate(forwardsTranslation);
  //
  // const lineInXYPlane = maskFacet.getLineInXYPlane(),
  //       verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
  //       forwardsRotationMatrix = verticalLineInXYPlane.getForwardsRotationMatrix();
  //
  // facetInXYPlane.rotate(forwardsRotationMatrix);
  //
  // const facetsInXYPlane = facetInXYPlane.possiblySplit(verticalLineInXYPlane),
  //       backwardsRotationMatrix = verticalLineInXYPlane.getBackwardsRotationMatrix();
  //
  // facetsInXYPlane.forEach(function (facetInXYPlane) {
  //   facetInXYPlane.rotate(backwardsRotationMatrix);
  // });
  //
  // const facets = facetsInXYPlane.map(function (facetInXYPlane) {
  //         const facet = Facet.fromFacetInXYPlane(facetInXYPlane);
  //
  //         facet.translate(backwardsTranslation);
  //         facet.rotate(backwardsRotationQuaternion);
  //
  //         return facet;
  //       });

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwiRmFjZXRJblhZUGxhbmUiLCJWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmaXJzdCIsIm5vcm1hbGlzZSIsImNvbXBvc2VUcmFuc2Zvcm0iLCJmYWNldHMiLCJjYWxjdWxhdGVGYWNldHMiLCJjb2xvdXJzIiwiVHJpYW5nbGUiLCJ0cmFuc2Zvcm0iLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJ2ZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwidmVydGV4IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsIm5vcm1hbHMiLCJ2ZXJ0ZXhOb3JtYWwiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXIiLCJiaW5kIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsIkNsYXNzIiwiY2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY2V0VmVydGljZXMiLCJtYXNrRmFjZXRWZXJ0aWNlcyIsImZyb21WZXJ0aWNlcyIsIm1hc2tGYWNldCIsIm1hc2tGYWNldEluWFlQbGFuZSIsImZyb21GYWNldCIsImxpbmVzSW5YWVBsYW5lIiwiZ2V0TGluZXNJblhZUGxhbmUiLCJmaXJzdExpbmVJblhZUGxhbmUiLCJsaW5lSW5YWVBsYW5lIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUxpbmVJblhZUGxhbmUiLCJmb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4IiwiZ2V0QmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4Iiwicm90YXRlQWJvdXRaQXhpcyIsInNwbGl0V2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSIsImZvckVhY2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsYUFBUixDQUFkO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxrQkFBUixDQURiO0FBQUEsSUFFTUUsZ0JBQWdCRixRQUFRLHNCQUFSLENBRnRCO0FBQUEsSUFHTUcsaUJBQWlCSCxRQUFRLHVCQUFSLENBSHZCO0FBQUEsSUFJTUkscUJBQXFCSixRQUFRLDJCQUFSLENBSjNCOztBQU1BLElBQU1LLGlCQUFpQkwsUUFBUSxzQkFBUixDQUF2QjtBQUFBLElBQ01NLHdCQUF3Qk4sUUFBUSw2QkFBUixDQUQ5Qjs7QUFHTSxJQUFFTyxLQUFGLEdBQVlKLGNBQVosQ0FBRUksS0FBRjtBQUFBLElBQ0VDLFNBREYsR0FDZ0JQLElBRGhCLENBQ0VPLFNBREY7QUFBQSxJQUVFQyxnQkFGRixHQUV1Qkwsa0JBRnZCLENBRUVLLGdCQUZGOzs7QUFJTixJQUFNQyxTQUFTQyxpQkFBZjtBQUFBLElB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QUFBQSxNQVlNRyxxQkFBcUIzRCxlQUFlNEQsU0FBZixDQUF5QkYsU0FBekIsQ0FaM0I7QUFBQSxNQWFNRyxpQkFBaUJGLG1CQUFtQkcsaUJBQW5CLEVBYnZCO0FBQUEsTUFjTUMscUJBQXFCN0QsTUFBTTJELGNBQU4sQ0FkM0I7QUFBQSxNQWVNRyxnQkFBZ0JELGtCQWZ0QjtBQUFBLE1BZ0JNRSx3QkFBd0JoRSxzQkFBc0JpRSxpQkFBdEIsQ0FBd0NGLGFBQXhDLENBaEI5QjtBQUFBLE1BaUJNRyxtQ0FBbUNGLHNCQUFzQkcsbUNBQXRCLEVBakJ6QztBQUFBLE1Ba0JNQyxvQ0FBb0NKLHNCQUFzQkssb0NBQXRCLEVBbEIxQzs7QUFvQkExRCxRQUFNMkQsZ0JBQU4sQ0FBdUJKLGdDQUF2Qjs7QUFFQSxNQUFNOUQsU0FBU08sTUFBTTRELDhCQUFOLENBQXFDUCxxQkFBckMsQ0FBZjs7QUFFQTVELFNBQU9vRSxPQUFQLENBQWUsVUFBUzdELEtBQVQsRUFBZ0I7QUFDN0JBLFVBQU0yRCxnQkFBTixDQUF1QkYsaUNBQXZCO0FBQ0QsR0FGRDs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQU9oRSxNQUFQO0FBQ0QiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWMzJyksXG4gICAgICBDYW52YXNFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vZWxlbWVudC9jYW52YXMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IEZhY2V0SW5YWVBsYW5lID0gcmVxdWlyZSgnLi4vLi4vZmFjZXRJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL3ZlcnRpY2FsTGluZUluWFlQbGFuZScpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgbm9ybWFsaXNlIH0gPSB2ZWMzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNvbnN0IGZhY2V0cyA9IGNhbGN1bGF0ZUZhY2V0cygpLFxuICAgICAgY29sb3VycyA9IFtcbiAgICAgICAgWyAxLCAwLCAwLCAxIF0sXG4gICAgICAgIFsgMCwgMSwgMCwgMSBdLFxuICAgICAgICBbIDAsIDAsIDEsIDEgXSxcblxuICAgICAgICBbIDEsIDEsIDAsIDEgXSxcbiAgICAgICAgWyAwLCAxLCAxLCAxIF0sXG4gICAgICAgIFsgMSwgMCwgMSwgMSBdLFxuICAgICAgXTtcblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzOyAvLy9cbiAgICB0aGlzLmNvbG91cnMgPSBjb2xvdXJzOyAvLy9cbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRDb2xvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cnM7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcblxuICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uID0gdmVydGV4LnNsaWNlKCk7IC8vL1xuXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChpbml0aWFsVmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgICAgfSwgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBsZXQgdmVydGV4SW5kZXggPSAwO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCkge1xuICAgICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFsgLi4udmVydGV4SW5kZXhlcywgdmVydGV4SW5kZXggKyAwLCB2ZXJ0ZXhJbmRleCArIDEsIHZlcnRleEluZGV4ICsgMiBdO1xuXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArPSAzO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgICBub3JtYWxzID0gWyAvLy9cbiAgICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICAgIG5vcm1hbFxuICAgICAgICAgICAgXTtcblxuICAgICAgdmVydGV4Tm9ybWFscyA9IG5vcm1hbHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIG5vcm1hbCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2Uobm9ybWFsKTtcblxuICAgICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcblxuICAgICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICAgIH0sIHZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VycyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCwgaW5kZXgpIHtcbiAgICAgIGluZGV4ID0gaW5kZXggJSA2OyAgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3Vyc1tpbmRleF0sXG4gICAgICAgICAgICBjb2xvdXJzID0gW1xuICAgICAgICAgICAgICBjb2xvdXIsXG4gICAgICAgICAgICAgIGNvbG91cixcbiAgICAgICAgICAgICAgY29sb3VyXG4gICAgICAgICAgICBdO1xuXG4gICAgICB2ZXJ0ZXhDb2xvdXJzID0gY29sb3Vycy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgY29sb3VyKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleENvbG91ciA9IGNvbG91cjsgIC8vL1xuXG4gICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuXG4gICAgICB9LCB2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIENsYXNzID0gVHJpYW5nbGUsXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpYW5nbGU7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZhY2V0cygpIHtcbiAgY29uc3QgZmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIC0yLCAwLCAwIF0sICAvLy8gWyAyLCAwLCAwIF0sXG4gICAgICAgICAgWyArMiwgMCwgMCBdLCAgLy8vIFsgMCwgMiwgMCBdLFxuICAgICAgICAgIFsgIDAsIDIsIDAgXSwgIC8vLyBbIDAsIDAsIDIgXSxcbiAgICAgICAgXSxcbiAgICAgICAgbWFza0ZhY2V0VmVydGljZXMgPSBbXG4gICAgICAgICAgWyAwLCAxLCAwIF0sICAvLy8gWyAxLCAwLCAxIF0sXG4gICAgICAgICAgWyAxLCAwLCAwIF0sICAvLy8gWyAwLCAwLCAxIF0sXG4gICAgICAgICAgWyAxLCAxLCAwIF0sICAvLy8gWyAwLCAxLCAxIF0sXG4gICAgICAgIF0sXG4gICAgICAgIGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZhY2V0VmVydGljZXMpLFxuICAgICAgICBtYXNrRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMobWFza0ZhY2V0VmVydGljZXMpLFxuICAgICAgICBtYXNrRmFjZXRJblhZUGxhbmUgPSBGYWNldEluWFlQbGFuZS5mcm9tRmFjZXQobWFza0ZhY2V0KSxcbiAgICAgICAgbGluZXNJblhZUGxhbmUgPSBtYXNrRmFjZXRJblhZUGxhbmUuZ2V0TGluZXNJblhZUGxhbmUoKSxcbiAgICAgICAgZmlyc3RMaW5lSW5YWVBsYW5lID0gZmlyc3QobGluZXNJblhZUGxhbmUpLFxuICAgICAgICBsaW5lSW5YWVBsYW5lID0gZmlyc3RMaW5lSW5YWVBsYW5lLFxuICAgICAgICB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmUuZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSksXG4gICAgICAgIGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCksXG4gICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5nZXRCYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKTtcblxuICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICBjb25zdCBmYWNldHMgPSBmYWNldC5zcGxpdFdpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUodmVydGljYWxMaW5lSW5YWVBsYW5lKTtcblxuICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgIGZhY2V0LnJvdGF0ZUFib3V0WkF4aXMoYmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcbiAgfSk7XG5cblxuICAvLyBjb25zdCBmb3J3YXJkc1RyYW5zbGF0aW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNUcmFuc2xhdGlvbigpLFxuICAvLyAgICAgICBiYWNrd2FyZHNUcmFuc2xhdGlvbiA9IGZhY2V0SW5YWVBsYW5lLmdldEJhY2t3YXJkc1RyYW5zbGF0aW9uKCksXG4gIC8vICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSxcbiAgLy8gICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCk7XG4gIC8vXG4gIC8vIG1hc2tGYWNldC5yb3RhdGUoZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAvLyBtYXNrRmFjZXQudHJhbnNsYXRlKGZvcndhcmRzVHJhbnNsYXRpb24pO1xuICAvL1xuICAvLyBjb25zdCBsaW5lSW5YWVBsYW5lID0gbWFza0ZhY2V0LmdldExpbmVJblhZUGxhbmUoKSxcbiAgLy8gICAgICAgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpLFxuICAvLyAgICAgICBmb3J3YXJkc1JvdGF0aW9uTWF0cml4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEZvcndhcmRzUm90YXRpb25NYXRyaXgoKTtcbiAgLy9cbiAgLy8gZmFjZXRJblhZUGxhbmUucm90YXRlKGZvcndhcmRzUm90YXRpb25NYXRyaXgpO1xuICAvL1xuICAvLyBjb25zdCBmYWNldHNJblhZUGxhbmUgPSBmYWNldEluWFlQbGFuZS5wb3NzaWJseVNwbGl0KHZlcnRpY2FsTGluZUluWFlQbGFuZSksXG4gIC8vICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uTWF0cml4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEJhY2t3YXJkc1JvdGF0aW9uTWF0cml4KCk7XG4gIC8vXG4gIC8vIGZhY2V0c0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uIChmYWNldEluWFlQbGFuZSkge1xuICAvLyAgIGZhY2V0SW5YWVBsYW5lLnJvdGF0ZShiYWNrd2FyZHNSb3RhdGlvbk1hdHJpeCk7XG4gIC8vIH0pO1xuICAvL1xuICAvLyBjb25zdCBmYWNldHMgPSBmYWNldHNJblhZUGxhbmUubWFwKGZ1bmN0aW9uIChmYWNldEluWFlQbGFuZSkge1xuICAvLyAgICAgICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbUZhY2V0SW5YWVBsYW5lKGZhY2V0SW5YWVBsYW5lKTtcbiAgLy9cbiAgLy8gICAgICAgICBmYWNldC50cmFuc2xhdGUoYmFja3dhcmRzVHJhbnNsYXRpb24pO1xuICAvLyAgICAgICAgIGZhY2V0LnJvdGF0ZShiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAvL1xuICAvLyAgICAgICAgIHJldHVybiBmYWNldDtcbiAgLy8gICAgICAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cbiJdfQ==