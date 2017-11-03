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
      maskFacetVertices = [[-0.5, 1.25, 0], /// [ 1, 0, 1 ],
  [+0.5, 0.25, 0], /// [ 0, 0, 1 ],
  [+0.5, 1.25, 0]],
      facet = Facet.fromVertices(facetVertices),
      maskFacet = Facet.fromVertices(maskFacetVertices),
      maskFacetInXYPlane = FacetInXYPlane.fromFacet(maskFacet),
      linesInXYPlane = maskFacetInXYPlane.getLinesInXYPlane();

  var facets = [facet];

  linesInXYPlane.forEach(function (lineInXYPlane, index) {
    var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
        forwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getForwardsRotationAboutZAxisMatrix(),
        backwardsRotationAboutZAxisMatrix = verticalLineInXYPlane.getBackwardsRotationAboutZAxisMatrix();

    facets = facets.reduce(function (facets, facet, index) {
      facet.rotateAboutZAxis(forwardsRotationAboutZAxisMatrix);

      var splitFacets = facet.possiblySplitWithVerticalLineInXYPlane(verticalLineInXYPlane);

      splitFacets.forEach(function (splitFacet) {
        splitFacet.rotateAboutZAxis(backwardsRotationAboutZAxisMatrix);
      });

      facets = facets.concat(splitFacets);

      return facets;
    }, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwiRmFjZXRJblhZUGxhbmUiLCJWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmaXJzdCIsIm5vcm1hbGlzZSIsImNvbXBvc2VUcmFuc2Zvcm0iLCJmYWNldHMiLCJjYWxjdWxhdGVGYWNldHMiLCJjb2xvdXJzIiwiVHJpYW5nbGUiLCJ0cmFuc2Zvcm0iLCJpbml0aWFsVmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJ2ZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwidmVydGV4IiwiaW5pdGlhbFZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsIm5vcm1hbHMiLCJ2ZXJ0ZXhOb3JtYWwiLCJ2ZXJ0ZXhDb2xvdXJzIiwiaW5kZXgiLCJjb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXIiLCJiaW5kIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsIkNsYXNzIiwiY2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImZhY2V0VmVydGljZXMiLCJtYXNrRmFjZXRWZXJ0aWNlcyIsImZyb21WZXJ0aWNlcyIsIm1hc2tGYWNldCIsIm1hc2tGYWNldEluWFlQbGFuZSIsImZyb21GYWNldCIsImxpbmVzSW5YWVBsYW5lIiwiZ2V0TGluZXNJblhZUGxhbmUiLCJmb3JFYWNoIiwibGluZUluWFlQbGFuZSIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsImZyb21MaW5lSW5YWVBsYW5lIiwiZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgiLCJnZXRGb3J3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsImdldEJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCIsInJvdGF0ZUFib3V0WkF4aXMiLCJzcGxpdEZhY2V0cyIsInBvc3NpYmx5U3BsaXRXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lIiwic3BsaXRGYWNldCIsImNvbmNhdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxhQUFSLENBQWQ7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGtCQUFSLENBRGI7QUFBQSxJQUVNRSxnQkFBZ0JGLFFBQVEsc0JBQVIsQ0FGdEI7QUFBQSxJQUdNRyxpQkFBaUJILFFBQVEsdUJBQVIsQ0FIdkI7QUFBQSxJQUlNSSxxQkFBcUJKLFFBQVEsMkJBQVIsQ0FKM0I7O0FBTUEsSUFBTUssaUJBQWlCTCxRQUFRLHNCQUFSLENBQXZCO0FBQUEsSUFDTU0sd0JBQXdCTixRQUFRLDZCQUFSLENBRDlCOztBQUdNLElBQUVPLEtBQUYsR0FBWUosY0FBWixDQUFFSSxLQUFGO0FBQUEsSUFDRUMsU0FERixHQUNnQlAsSUFEaEIsQ0FDRU8sU0FERjtBQUFBLElBRUVDLGdCQUZGLEdBRXVCTCxrQkFGdkIsQ0FFRUssZ0JBRkY7OztBQUlOLElB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c0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0JyksXG4gICAgICB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCBGYWNldEluWFlQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0SW5YWVBsYW5lJyksXG4gICAgICBWZXJ0aWNhbExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuLi8uLi92ZXJ0aWNhbExpbmVJblhZUGxhbmUnKTtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vcm1hbGlzZSB9ID0gdmVjMyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jb25zdCBmYWNldHMgPSBjYWxjdWxhdGVGYWNldHMoKSxcbiAgICAgIGNvbG91cnMgPSBbXG4gICAgICAgIFsgMSwgMCwgMCwgMSBdLFxuICAgICAgICBbIDAsIDEsIDAsIDEgXSxcbiAgICAgICAgWyAwLCAwLCAxLCAxIF0sXG5cbiAgICAgICAgWyAxLCAxLCAwLCAxIF0sXG4gICAgICAgIFsgMCwgMSwgMSwgMSBdLFxuICAgICAgICBbIDEsIDAsIDEsIDEgXSxcbiAgICAgIF07XG5cbmNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKHRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0czsgLy8vXG4gICAgdGhpcy5jb2xvdXJzID0gY29sb3VyczsgLy8vXG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0Q29sb3VycygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJzO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG5cbiAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgdmVydGV4KSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5zbGljZSgpOyAvLy9cblxuICAgICAgICBpbml0aWFsVmVydGV4UG9zaXRpb25zLnB1c2goaW5pdGlhbFZlcnRleFBvc2l0aW9uKTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgICAgIH0sIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gaW5pdGlhbFZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgbGV0IHZlcnRleEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4SW5kZXhlcywgZmFjZXQpIHtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbIC4uLnZlcnRleEluZGV4ZXMsIHZlcnRleEluZGV4ICsgMCwgdmVydGV4SW5kZXggKyAxLCB2ZXJ0ZXhJbmRleCArIDIgXTtcblxuICAgICAgICAgICAgdmVydGV4SW5kZXggKz0gMztcblxuICAgICAgICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgICAgbm9ybWFscyA9IFsgLy8vXG4gICAgICAgICAgICAgIG5vcm1hbCxcbiAgICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgICBub3JtYWxcbiAgICAgICAgICAgIF07XG5cbiAgICAgIHZlcnRleE5vcm1hbHMgPSBub3JtYWxzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBub3JtYWwpIHtcbiAgICAgICAgY29uc3QgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlKG5vcm1hbCk7XG5cbiAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgICB9LCB2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgZmFjZXQsIGluZGV4KSB7XG4gICAgICBpbmRleCA9IGluZGV4ICUgNjsgIC8vL1xuICAgICAgXG4gICAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91cnNbaW5kZXhdLFxuICAgICAgICAgICAgY29sb3VycyA9IFtcbiAgICAgICAgICAgICAgY29sb3VyLFxuICAgICAgICAgICAgICBjb2xvdXIsXG4gICAgICAgICAgICAgIGNvbG91clxuICAgICAgICAgICAgXTtcblxuICAgICAgdmVydGV4Q29sb3VycyA9IGNvbG91cnMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleENvbG91cnMsIGNvbG91cikge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSBjb2xvdXI7ICAvLy9cblxuICAgICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcblxuICAgICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcblxuICAgICAgfSwgdmVydGV4Q29sb3Vycyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgIH0uYmluZCh0aGlzKSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG5cbiAgICBzdXBlci5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBDbGFzcyA9IFRyaWFuZ2xlLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWFuZ2xlO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVGYWNldHMoKSB7XG4gIGNvbnN0IGZhY2V0VmVydGljZXMgPSBbXG4gICAgICAgICAgWyAtMiwgMCwgMCBdLCAgLy8vIFsgMiwgMCwgMCBdLFxuICAgICAgICAgIFsgKzIsIDAsIDAgXSwgIC8vLyBbIDAsIDIsIDAgXSxcbiAgICAgICAgICBbICAwLCAyLCAwIF0sICAvLy8gWyAwLCAwLCAyIF0sXG4gICAgICAgIF0sXG4gICAgICAgIG1hc2tGYWNldFZlcnRpY2VzID0gW1xuICAgICAgICAgIFsgLTAuNSwgMS4yNSwgMCBdLCAgLy8vIFsgMSwgMCwgMSBdLFxuICAgICAgICAgIFsgKzAuNSwgMC4yNSwgMCBdLCAgLy8vIFsgMCwgMCwgMSBdLFxuICAgICAgICAgIFsgKzAuNSwgMS4yNSwgMCBdLCAgLy8vIFsgMCwgMSwgMSBdLFxuICAgICAgICBdLFxuICAgICAgICBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyhmYWNldFZlcnRpY2VzKSxcbiAgICAgICAgbWFza0ZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKG1hc2tGYWNldFZlcnRpY2VzKSxcbiAgICAgICAgbWFza0ZhY2V0SW5YWVBsYW5lID0gRmFjZXRJblhZUGxhbmUuZnJvbUZhY2V0KG1hc2tGYWNldCksXG4gICAgICAgIGxpbmVzSW5YWVBsYW5lID0gbWFza0ZhY2V0SW5YWVBsYW5lLmdldExpbmVzSW5YWVBsYW5lKCk7XG5cbiAgbGV0IGZhY2V0cyA9IFtcbiAgICBmYWNldFxuICBdO1xuXG4gIGxpbmVzSW5YWVBsYW5lLmZvckVhY2goZnVuY3Rpb24obGluZUluWFlQbGFuZSwgaW5kZXgpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmUuZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuZ2V0Rm9yd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXgoKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvbkFib3V0WkF4aXNNYXRyaXggPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuZ2V0QmFja3dhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KCk7XG5cbiAgICBmYWNldHMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKGZhY2V0cywgZmFjZXQsIGluZGV4KSB7XG4gICAgICBmYWNldC5yb3RhdGVBYm91dFpBeGlzKGZvcndhcmRzUm90YXRpb25BYm91dFpBeGlzTWF0cml4KTtcblxuICAgICAgY29uc3Qgc3BsaXRGYWNldHMgPSBmYWNldC5wb3NzaWJseVNwbGl0V2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpO1xuXG4gICAgICBzcGxpdEZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHNwbGl0RmFjZXQpIHtcbiAgICAgICAgc3BsaXRGYWNldC5yb3RhdGVBYm91dFpBeGlzKGJhY2t3YXJkc1JvdGF0aW9uQWJvdXRaQXhpc01hdHJpeCk7XG4gICAgICB9KTtcblxuICAgICAgZmFjZXRzID0gZmFjZXRzLmNvbmNhdChzcGxpdEZhY2V0cyk7XG5cbiAgICAgIHJldHVybiBmYWNldHM7XG4gICAgfSwgW10pO1xuICB9KTtcblxuXG5cblxuICAvLyBjb25zdCBmb3J3YXJkc1RyYW5zbGF0aW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNUcmFuc2xhdGlvbigpLFxuICAvLyAgICAgICBiYWNrd2FyZHNUcmFuc2xhdGlvbiA9IGZhY2V0SW5YWVBsYW5lLmdldEJhY2t3YXJkc1RyYW5zbGF0aW9uKCksXG4gIC8vICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSxcbiAgLy8gICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZmFjZXRJblhZUGxhbmUuZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCk7XG4gIC8vXG4gIC8vIG1hc2tGYWNldC5yb3RhdGUoZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAvLyBtYXNrRmFjZXQudHJhbnNsYXRlKGZvcndhcmRzVHJhbnNsYXRpb24pO1xuICAvL1xuICAvLyBjb25zdCBsaW5lSW5YWVBsYW5lID0gbWFza0ZhY2V0LmdldExpbmVJblhZUGxhbmUoKSxcbiAgLy8gICAgICAgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpLFxuICAvLyAgICAgICBmb3J3YXJkc1JvdGF0aW9uTWF0cml4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEZvcndhcmRzUm90YXRpb25NYXRyaXgoKTtcbiAgLy9cbiAgLy8gZmFjZXRJblhZUGxhbmUucm90YXRlKGZvcndhcmRzUm90YXRpb25NYXRyaXgpO1xuICAvL1xuICAvLyBjb25zdCBmYWNldHNJblhZUGxhbmUgPSBmYWNldEluWFlQbGFuZS5wb3NzaWJseVNwbGl0KHZlcnRpY2FsTGluZUluWFlQbGFuZSksXG4gIC8vICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uTWF0cml4ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLmdldEJhY2t3YXJkc1JvdGF0aW9uTWF0cml4KCk7XG4gIC8vXG4gIC8vIGZhY2V0c0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uIChmYWNldEluWFlQbGFuZSkge1xuICAvLyAgIGZhY2V0SW5YWVBsYW5lLnJvdGF0ZShiYWNrd2FyZHNSb3RhdGlvbk1hdHJpeCk7XG4gIC8vIH0pO1xuICAvL1xuICAvLyBjb25zdCBmYWNldHMgPSBmYWNldHNJblhZUGxhbmUubWFwKGZ1bmN0aW9uIChmYWNldEluWFlQbGFuZSkge1xuICAvLyAgICAgICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbUZhY2V0SW5YWVBsYW5lKGZhY2V0SW5YWVBsYW5lKTtcbiAgLy9cbiAgLy8gICAgICAgICBmYWNldC50cmFuc2xhdGUoYmFja3dhcmRzVHJhbnNsYXRpb24pO1xuICAvLyAgICAgICAgIGZhY2V0LnJvdGF0ZShiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAvL1xuICAvLyAgICAgICAgIHJldHVybiBmYWNldDtcbiAgLy8gICAgICAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cbiJdfQ==