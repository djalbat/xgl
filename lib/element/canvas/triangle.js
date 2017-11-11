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

var MaskingFacet = require('../../maskingFacet');

var normalise = vec3.normalise,
    composeTransform = transformUtilities.composeTransform;


var facets = calculateFacets(),
    colour = [1, 0, 0, 1];

var Triangle = function (_CanvasElement) {
  _inherits(Triangle, _CanvasElement);

  function Triangle(transform) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, transform));

    _this.facets = facets; ///
    _this.colour = colour; ///
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getColour',
    value: function getColour() {
      return this.colour;
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
            vertexNormal = normalise(normal);

        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'calculateVertexColours',
    value: function calculateVertexColours(vertexPositions) {
      var vertexColours = this.facets.reduce(function (vertexColours, facet) {
        var vertexColour = this.colour;

        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);
        vertexColours.push(vertexColour);

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
  var facetVertices = [[0, 0, 0], [5, 0, 0], [0, 5, 0]],
      maskingFacetVertices = [[2, 1, 0], [2, 2, 0], [1, 2, 0]],
      facet = Facet.fromVertices(facetVertices),
      maskingFacet = MaskingFacet.fromVertices(maskingFacetVertices),
      facets = maskingFacet.maskFacet(facet);

  return facets;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMzIiwiQ2FudmFzRWxlbWVudCIsInRyYW5zZm9ybVV0aWxpdGllcyIsIk1hc2tpbmdGYWNldCIsIm5vcm1hbGlzZSIsImNvbXBvc2VUcmFuc2Zvcm0iLCJmYWNldHMiLCJjYWxjdWxhdGVGYWNldHMiLCJjb2xvdXIiLCJUcmlhbmdsZSIsInRyYW5zZm9ybSIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMiLCJyZWR1Y2UiLCJmYWNldCIsInZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJ2ZXJ0ZXgiLCJpbml0aWFsVmVydGV4UG9zaXRpb24iLCJzbGljZSIsInB1c2giLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwibm9ybWFsIiwiZ2V0Tm9ybWFsIiwidmVydGV4Tm9ybWFsIiwidmVydGV4Q29sb3VycyIsInZlcnRleENvbG91ciIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiQ2xhc3MiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmFjZXRWZXJ0aWNlcyIsIm1hc2tpbmdGYWNldFZlcnRp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UUFBdkMsRUFBaURDLFNBQWpELENBRnFDO0FBQUEsVUFHakRDLEtBSGlELEdBR3pDdkMsUUFIeUM7QUFBQSxVQUlqRHdDLGFBSmlELEdBSWpDaEQsY0FBY2lELGNBQWQsdUJBQTZCRixLQUE3QixFQUFvQ1AsVUFBcEMsRUFBZ0QvQixTQUFoRCxTQUE4RGdDLGtCQUE5RCxFQUppQzs7O0FBTXZELGFBQU9PLGFBQVA7QUFDRDs7OztFQWxHb0JoRCxhOztBQXFHdkJrRCxPQUFPQyxPQUFQLEdBQWlCM0MsUUFBakI7O0FBRUEsU0FBU0YsZUFBVCxHQUEyQjtBQUN6QixNQUFNOEMsZ0JBQWdCLENBQ2QsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FEYyxFQUVkLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRmMsRUFHZCxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhjLENBQXRCO0FBQUEsTUFLTUMsdUJBQXVCLENBQ3JCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRHFCLEVBRXJCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRnFCLEVBR3JCLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSHFCLENBTDdCO0FBQUEsTUFVTXpDLFFBQVFmLE1BQU15RCxZQUFOLENBQW1CRixhQUFuQixDQVZkO0FBQUEsTUFXTUcsZUFBZXJELGFBQWFvRCxZQUFiLENBQTBCRCxvQkFBMUIsQ0FYckI7QUFBQSxNQVlNaEQsU0FBU2tELGFBQWFDLFNBQWIsQ0FBdUI1QyxLQUF2QixDQVpmOztBQWNBLFNBQU9QLE1BQVA7QUFDRCIsImZpbGUiOiJ0cmlhbmdsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9mYWNldCcpLFxuICAgICAgdmVjMyA9IHJlcXVpcmUoJy4uLy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi8uLi9tYXNraW5nRmFjZXQnKTtcblxuY29uc3QgeyBub3JtYWxpc2UgfSA9IHZlYzMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY29uc3QgZmFjZXRzID0gY2FsY3VsYXRlRmFjZXRzKCksXG4gICAgICBjb2xvdXIgPSBbIDEsIDAsIDAsIDEgXTtcblxuY2xhc3MgVHJpYW5nbGUgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzOyAvLy9cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjsgLy8vXG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGdldEluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuXG4gICAgICBpbml0aWFsVmVydGV4UG9zaXRpb25zID0gdmVydGljZXMucmVkdWNlKGZ1bmN0aW9uKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleCkge1xuICAgICAgICBjb25zdCBpbml0aWFsVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguc2xpY2UoKTsgLy8vXG5cbiAgICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucy5wdXNoKGluaXRpYWxWZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gICAgICB9LCBpbml0aWFsVmVydGV4UG9zaXRpb25zKTtcblxuICAgICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGxldCB2ZXJ0ZXhJbmRleCA9IDA7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0KSB7XG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gWyAuLi52ZXJ0ZXhJbmRleGVzLCB2ZXJ0ZXhJbmRleCArIDAsIHZlcnRleEluZGV4ICsgMSwgdmVydGV4SW5kZXggKyAyIF07XG5cbiAgICAgICAgICAgIHZlcnRleEluZGV4ICs9IDM7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZShub3JtYWwpO1xuXG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleENvbG91cnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91cjtcblxuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgICB9LmJpbmQodGhpcyksIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucyh0cmFuc2Zvcm1zKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleENvbG91cnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuXG4gICAgc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgQ2xhc3MgPSBUcmlhbmdsZSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmlhbmdsZTtcblxuZnVuY3Rpb24gY2FsY3VsYXRlRmFjZXRzKCkge1xuICBjb25zdCBmYWNldFZlcnRpY2VzID0gW1xuICAgICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICAgIFsgNSwgMCwgMCBdLFxuICAgICAgICAgIFsgMCwgNSwgMCBdLFxuICAgICAgICBdLFxuICAgICAgICBtYXNraW5nRmFjZXRWZXJ0aWNlcyA9IFtcbiAgICAgICAgICBbIDIsIDEsIDAgXSxcbiAgICAgICAgICBbIDIsIDIsIDAgXSxcbiAgICAgICAgICBbIDEsIDIsIDAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXMoZmFjZXRWZXJ0aWNlcyksXG4gICAgICAgIG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tVmVydGljZXMobWFza2luZ0ZhY2V0VmVydGljZXMpLFxuICAgICAgICBmYWNldHMgPSBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuIl19