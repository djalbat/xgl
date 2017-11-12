'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../../facet'),
    Mask = require('../../element/mask'),
    vectorUtilities = require('../../utilities/vector'),
    ColouredCanvasElement = require('../../element/canvas/coloured');

var normalise3 = vectorUtilities.normalise3;


var defaultVertices = [[0, 0, 0], [1, 0, 0], [0, 1, 0]];

var Triangle = function (_ColouredCanvasElemen) {
  _inherits(Triangle, _ColouredCanvasElemen);

  function Triangle(transform, colour, facets) {
    _classCallCheck(this, Triangle);

    var _this = _possibleConstructorReturn(this, (Triangle.__proto__ || Object.getPrototypeOf(Triangle)).call(this, transform, colour));

    _this.facets = facets;
    return _this;
  }

  _createClass(Triangle, [{
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
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
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals(vertexPositions) {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var normal = facet.getNormal(),
            vertexNormal = normalise3(normal);

        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);
        vertexNormals.push(vertexNormal);

        return vertexNormals;
      }, []);

      return vertexNormals;
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
      // super.create(colourRenderer, textureRenderer, transforms);

      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));

      var vertexPositions = this.calculateVertexPositions(transforms),
          vertexIndexes = this.calculateVertexIndexes(vertexPositions),
          vertexNormals = this.calculateVertexNormals(vertexPositions),
          vertexColours = this.calculateVertexColours(vertexPositions);

      colourRenderer.addVertexPositions(vertexPositions);
      colourRenderer.addVertexIndexes(vertexIndexes);
      colourRenderer.addVertexNormals(vertexNormals);
      colourRenderer.addVertexColours(vertexColours);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$vertices = properties.vertices,
          vertices = _properties$vertices === undefined ? defaultVertices : _properties$vertices,
          facet = Facet.fromVertices(vertices),
          facets = [facet],
          triangle = ColouredCanvasElement.fromProperties(Triangle, properties, facets);


      return triangle;
    }
  }]);

  return Triangle;
}(ColouredCanvasElement);

module.exports = Triangle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJNYXNrIiwidmVjdG9yVXRpbGl0aWVzIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50Iiwibm9ybWFsaXNlMyIsImRlZmF1bHRWZXJ0aWNlcyIsIlRyaWFuZ2xlIiwidHJhbnNmb3JtIiwiY29sb3VyIiwiZmFjZXRzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsInJlZHVjZSIsImZhY2V0IiwidmVydGljZXMiLCJnZXRWZXJ0aWNlcyIsInZlcnRleCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbiIsInNsaWNlIiwicHVzaCIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJub3JtYWwiLCJnZXROb3JtYWwiLCJ2ZXJ0ZXhOb3JtYWwiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhDb2xvdXJzIiwidmVydGV4Q29sb3VyIiwiYmluZCIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJjYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzIiwiY2FsY3VsYXRlVmVydGV4Tm9ybWFscyIsImNhbGN1bGF0ZVZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJwcm9wZXJ0aWVzIiwiZnJvbVZlcnRpY2VzIiwidHJpYW5nbGUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7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d0Isd0NBQ2JSLGVBRGE7QUFBQSxVQUUxQk8sS0FGMEIsR0FFbEJiLE1BQU1rRCxZQUFOLENBQW1CcEMsUUFBbkIsQ0FGa0I7QUFBQSxVQUcxQkosTUFIMEIsR0FHakIsQ0FDUEcsS0FETyxDQUhpQjtBQUFBLFVBTTFCc0MsUUFOMEIsR0FNZi9DLHNCQUFzQmdELGNBQXRCLENBQXFDN0MsUUFBckMsRUFBK0MwQyxVQUEvQyxFQUEyRHZDLE1BQTNELENBTmU7OztBQVFoQyxhQUFPeUMsUUFBUDtBQUNEOzs7O0VBdEhvQi9DLHFCOztBQXlIdkJpRCxPQUFPQyxPQUFQLEdBQWlCL0MsUUFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L21hc2snKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0VmVydGljZXMgPSBbXG4gIFsgMCwgMCwgMCBdLFxuICBbIDEsIDAsIDAgXSxcbiAgWyAwLCAxLCAwIF1cbl07XG5cbmNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBjb2xvdXIsIGZhY2V0cykge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgY29sb3VyKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcblxuICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uID0gdmVydGV4LnNsaWNlKCk7IC8vL1xuXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChpbml0aWFsVmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgICAgfSwgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZTMobm9ybWFsKTtcblxuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgbGV0IHZlcnRleEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4SW5kZXhlcywgZmFjZXQpIHtcbiAgICAgIHZlcnRleEluZGV4ZXMgPSBbIC4uLnZlcnRleEluZGV4ZXMsIHZlcnRleEluZGV4ICsgMCwgdmVydGV4SW5kZXggKyAxLCB2ZXJ0ZXhJbmRleCArIDIgXTtcblxuICAgICAgdmVydGV4SW5kZXggKz0gMztcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyO1xuXG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICAgIH0uYmluZCh0aGlzKSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIC8vIHN1cGVyLmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKHRyYW5zZm9ybXMpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKHZlcnRleFBvc2l0aW9ucyksXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4Q29sb3Vycyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgdmVydGljZXMgPSBkZWZhdWx0VmVydGljZXMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0cyA9IFtcbiAgICAgICAgICAgIGZhY2V0XG4gICAgICAgICAgXSxcbiAgICAgICAgICB0cmlhbmdsZSA9IENvbG91cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUcmlhbmdsZSwgcHJvcGVydGllcywgZmFjZXRzKTtcblxuICAgIHJldHVybiB0cmlhbmdsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyaWFuZ2xlO1xuIl19