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
    transformUtilities = require('../../utilities/transform');

var FacetInXYPlane = require('../../facetInXYPlane');

var normalise = vec3.normalise,
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
  var facetVertices = [[0, 0, 0], [2, 0, 0], [0, 2, 0]],
      maskFacetVertices = [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
      facet = Facet.fromVertices(facetVertices),
      maskFacet = Facet.fromVertices(maskFacetVertices),
      maskFacetInXYPlane = FacetInXYPlane.fromFacet(maskFacet),
      facets = maskFacetInXYPlane.maskFacet(facet);

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybVV0aWxpdGllcyIsIkZhY2V0SW5YWVBsYW5lIiwibm9ybWFsaXNlIiwiY29tcG9zZVRyYW5zZm9ybSIsImZhY2V0cyIsImNhbGN1bGF0ZUZhY2V0cyIsImNvbG91cnMiLCJUcmlhbmdsZSIsInRyYW5zZm9ybSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJyZWR1Y2UiLCJmYWNldCIsInZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJ2ZXJ0ZXgiLCJpbml0aWFsVmVydGV4UG9zaXRpb24iLCJzbGljZSIsInB1c2giLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwibm9ybWFsIiwiZ2V0Tm9ybWFsIiwibm9ybWFscyIsInZlcnRleE5vcm1hbCIsInZlcnRleENvbG91cnMiLCJpbmRleCIsImNvbG91ciIsInZlcnRleENvbG91ciIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiQ2xhc3MiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjZXRWZXJ0aWNlcyIsIm1hc2tGYWNldFZlcnRpY2VzIiwiZnJvbVZlcnRpY2VzIiwibWFza0ZhY2V0IiwibWFza0ZhY2V0SW5YWVBsYW5lIiwiZnJvbUZhY2V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLGFBQVIsQ0FBZDtBQUFBLElBQ01DLE9BQU9ELFFBQVEsa0JBQVIsQ0FEYjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxzQkFBUixDQUZ0QjtBQUFBLElBR01HLHFCQUFxQkgsUUFBUSwyQkFBUixDQUgzQjs7QUFLQSxJQUFNSSxpQkFBaUJKLFFBQVEsc0JBQVIsQ0FBdkI7O0FBRU0sSUFBRUssU0FBRixHQUFnQkosSUFBaEIsQ0FBRUksU0FBRjtBQUFBLElBQ0VDLGdCQURGLEdBQ3VCSCxrQkFEdkIsQ0FDRUcsZ0JBREY7OztBQUdOLElBQU1DLFNBQVNDLGlCQUFmO0FBQUEsSUFDTUMsVUFBVSxDQUNSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQURRLEVBRVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FIUSxFQUtSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUxRLEVBTVIsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBTlEsRUFPUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FQUSxDQURoQjs7SUFXTUMsUTs7O0FBQ0osb0JBQVlDLFNBQVosRUFBdUI7QUFBQTs7QUFBQSxvSEFDZkEsU0FEZTs7QUFHckIsVUFBS0osTUFBTCxHQUFjQSxNQUFkLENBSHFCLENBR0M7QUFDdEIsVUFBS0UsT0FBTCxHQUFlQSxPQUFmLENBSnFCLENBSUc7QUFKSDtBQUt0Qjs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0Ys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aUQsZ0JBQWdCLENBQ2QsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEYyxFQUVkLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRmMsRUFHZCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhjLENBQXRCO0FBQUEsTUFLTUMsb0JBQW9CLENBQ2xCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRGtCLEVBRWxCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRmtCLEVBR2xCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSGtCLENBTDFCO0FBQUEsTUFVTTVDLFFBQVFmLE1BQU00RCxZQUFOLENBQW1CRixhQUFuQixDQVZkO0FBQUEsTUFXTUcsWUFBWTdELE1BQU00RCxZQUFOLENBQW1CRCxpQkFBbkIsQ0FYbEI7QUFBQSxNQVlNRyxxQkFBcUJ6RCxlQUFlMEQsU0FBZixDQUF5QkYsU0FBekIsQ0FaM0I7QUFBQSxNQWFNckQsU0FBU3NELG1CQUFtQkQsU0FBbkIsQ0FBNkI5QyxLQUE3QixDQWJmOztBQWVBLFNBQU9QLE1BQVA7QUFDRCIsImZpbGUiOiJ0cmlhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCBGYWNldEluWFlQbGFuZSA9IHJlcXVpcmUoJy4uLy4uL2ZhY2V0SW5YWVBsYW5lJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlIH0gPSB2ZWMzLFxuICAgICAgeyBjb21wb3NlVHJhbnNmb3JtIH0gPSB0cmFuc2Zvcm1VdGlsaXRpZXM7XG5cbmNvbnN0IGZhY2V0cyA9IGNhbGN1bGF0ZUZhY2V0cygpLFxuICAgICAgY29sb3VycyA9IFtcbiAgICAgICAgWyAxLCAwLCAwLCAxIF0sXG4gICAgICAgIFsgMCwgMSwgMCwgMSBdLFxuICAgICAgICBbIDAsIDAsIDEsIDEgXSxcblxuICAgICAgICBbIDEsIDEsIDAsIDEgXSxcbiAgICAgICAgWyAwLCAxLCAxLCAxIF0sXG4gICAgICAgIFsgMSwgMCwgMSwgMSBdLFxuICAgICAgXTtcblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzOyAvLy9cbiAgICB0aGlzLmNvbG91cnMgPSBjb2xvdXJzOyAvLy9cbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRDb2xvdXJzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cnM7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcblxuICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uID0gdmVydGV4LnNsaWNlKCk7IC8vL1xuXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChpbml0aWFsVmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgICAgfSwgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBsZXQgdmVydGV4SW5kZXggPSAwO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCkge1xuICAgICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFsgLi4udmVydGV4SW5kZXhlcywgdmVydGV4SW5kZXggKyAwLCB2ZXJ0ZXhJbmRleCArIDEsIHZlcnRleEluZGV4ICsgMiBdO1xuXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArPSAzO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgICBub3JtYWxzID0gWyAvLy9cbiAgICAgICAgICAgICAgbm9ybWFsLFxuICAgICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICAgIG5vcm1hbFxuICAgICAgICAgICAgXTtcblxuICAgICAgdmVydGV4Tm9ybWFscyA9IG5vcm1hbHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIG5vcm1hbCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2Uobm9ybWFsKTtcblxuICAgICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcblxuICAgICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICAgIH0sIHZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VycyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhDb2xvdXJzLCBmYWNldCwgaW5kZXgpIHtcbiAgICAgIGluZGV4ID0gaW5kZXggJSA2OyAgLy8vXG4gICAgICBcbiAgICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3Vyc1tpbmRleF0sXG4gICAgICAgICAgICBjb2xvdXJzID0gW1xuICAgICAgICAgICAgICBjb2xvdXIsXG4gICAgICAgICAgICAgIGNvbG91cixcbiAgICAgICAgICAgICAgY29sb3VyXG4gICAgICAgICAgICBdO1xuXG4gICAgICB2ZXJ0ZXhDb2xvdXJzID0gY29sb3Vycy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgY29sb3VyKSB7XG4gICAgICAgIGNvbnN0IHZlcnRleENvbG91ciA9IGNvbG91cjsgIC8vL1xuXG4gICAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuXG4gICAgICB9LCB2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcblxuICAgIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIENsYXNzID0gVHJpYW5nbGUsXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpYW5nbGU7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUZhY2V0cygpIHtcbiAgY29uc3QgZmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgICBbIDIsIDAsIDAgXSxcbiAgICAgICAgICBbIDAsIDIsIDAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgbWFza0ZhY2V0VmVydGljZXMgPSBbXG4gICAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgICAgWyAxLCAxLCAwIF0sXG4gICAgICAgICAgWyAwLCAxLCAwIF0sXG4gICAgICAgIF0sXG4gICAgICAgIGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzKGZhY2V0VmVydGljZXMpLFxuICAgICAgICBtYXNrRmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMobWFza0ZhY2V0VmVydGljZXMpLFxuICAgICAgICBtYXNrRmFjZXRJblhZUGxhbmUgPSBGYWNldEluWFlQbGFuZS5mcm9tRmFjZXQobWFza0ZhY2V0KSxcbiAgICAgICAgZmFjZXRzID0gbWFza0ZhY2V0SW5YWVBsYW5lLm1hc2tGYWNldChmYWNldCk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cbiJdfQ==