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
        var vertexColour = [Math.random(1), Math.random(1), Math.random(1), 1]; ///this.colour;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy90cmlhbmdsZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJNYXNrIiwidmVjdG9yVXRpbGl0aWVzIiwiQ29sb3VyZWRDYW52YXNFbGVtZW50Iiwibm9ybWFsaXNlMyIsImRlZmF1bHRWZXJ0aWNlcyIsIlRyaWFuZ2xlIiwidHJhbnNmb3JtIiwiY29sb3VyIiwiZmFjZXRzIiwiaW5pdGlhbFZlcnRleFBvc2l0aW9ucyIsInJlZHVjZSIsImZhY2V0IiwidmVydGljZXMiLCJnZXRWZXJ0aWNlcyIsInZlcnRleCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbiIsInNsaWNlIiwicHVzaCIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJub3JtYWwiLCJnZXROb3JtYWwiLCJ2ZXJ0ZXhOb3JtYWwiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhDb2xvdXJzIiwidmVydGV4Q29sb3VyIiwiTWF0aCIsInJhbmRvbSIsImJpbmQiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGUiLCJtYXNrIiwiZWxlbWVudCIsIm1hc2tFbGVtZW50IiwiY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zIiwiY2FsY3VsYXRlVmVydGV4SW5kZXhlcyIsImNhbGN1bGF0ZVZlcnRleE5vcm1hbHMiLCJjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwicHJvcGVydGllcyIsImZyb21WZXJ0aWNlcyIsInRyaWFuZ2xlIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoi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LHFCQUFlaUIsZ0JBQWYsQ0FBZ0M1QixhQUFoQztBQUNBVyxxQkFBZWtCLGdCQUFmLENBQWdDdkIsYUFBaEM7QUFDRDs7O21DQUVxQndCLFUsRUFBWTtBQUFBLGlDQUNPQSxVQURQLENBQ3hCckMsUUFEd0I7QUFBQSxVQUN4QkEsUUFEd0Isd0NBQ2JSLGVBRGE7QUFBQSxVQUUxQk8sS0FGMEIsR0FFbEJiLE1BQU1vRCxZQUFOLENBQW1CdEMsUUFBbkIsQ0FGa0I7QUFBQSxVQUcxQkosTUFIMEIsR0FHakIsQ0FDUEcsS0FETyxDQUhpQjtBQUFBLFVBTTFCd0MsUUFOMEIsR0FNZmpELHNCQUFzQmtELGNBQXRCLENBQXFDL0MsUUFBckMsRUFBK0M0QyxVQUEvQyxFQUEyRHpDLE1BQTNELENBTmU7OztBQVFoQyxhQUFPMkMsUUFBUDtBQUNEOzs7O0VBdEhvQmpELHFCOztBQXlIdkJtRCxPQUFPQyxPQUFQLEdBQWlCakQsUUFBakIiLCJmaWxlIjoidHJpYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vLi4vZmFjZXQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi8uLi9lbGVtZW50L21hc2snKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIENvbG91cmVkQ2FudmFzRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkJyk7XG5cbmNvbnN0IHsgbm9ybWFsaXNlMyB9ID0gdmVjdG9yVXRpbGl0aWVzO1xuXG5jb25zdCBkZWZhdWx0VmVydGljZXMgPSBbXG4gIFsgMCwgMCwgMCBdLFxuICBbIDEsIDAsIDAgXSxcbiAgWyAwLCAxLCAwIF1cbl07XG5cbmNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQ29sb3VyZWRDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBjb2xvdXIsIGZhY2V0cykge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgY29sb3VyKTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBnZXRJbml0aWFsVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oaW5pdGlhbFZlcnRleFBvc2l0aW9ucywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcblxuICAgICAgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbihpbml0aWFsVmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbFZlcnRleFBvc2l0aW9uID0gdmVydGV4LnNsaWNlKCk7IC8vL1xuXG4gICAgICAgIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbnMucHVzaChpbml0aWFsVmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgICAgfSwgaW5pdGlhbFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiBpbml0aWFsVmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4Tm9ybWFscyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbGlzZTMobm9ybWFsKTtcblxuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleEluZGV4ZXModmVydGV4UG9zaXRpb25zKSB7XG4gICAgbGV0IHZlcnRleEluZGV4ID0gMDtcblxuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4SW5kZXhlcywgZmFjZXQpIHtcbiAgICAgIHZlcnRleEluZGV4ZXMgPSBbIC4uLnZlcnRleEluZGV4ZXMsIHZlcnRleEluZGV4ICsgMCwgdmVydGV4SW5kZXggKyAxLCB2ZXJ0ZXhJbmRleCArIDIgXTtcblxuICAgICAgdmVydGV4SW5kZXggKz0gMztcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Q29sb3VycywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IHZlcnRleENvbG91ciA9IFtNYXRoLnJhbmRvbSgxKSwgTWF0aC5yYW5kb20oMSksIE1hdGgucmFuZG9tKDEpLCAxXTsgLy8vdGhpcy5jb2xvdXI7XG5cbiAgICAgIHZlcnRleENvbG91cnMucHVzaCh2ZXJ0ZXhDb2xvdXIpO1xuICAgICAgdmVydGV4Q29sb3Vycy5wdXNoKHZlcnRleENvbG91cik7XG4gICAgICB2ZXJ0ZXhDb2xvdXJzLnB1c2godmVydGV4Q29sb3VyKTtcblxuICAgICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gICAgfS5iaW5kKHRoaXMpLCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKSB7XG4gICAgLy8gc3VwZXIuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuXG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcblxuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIE1hc2spIHtcbiAgICAgICAgY29uc3QgbWFzayA9IGNoaWxkRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhQb3NpdGlvbnModHJhbnNmb3JtcyksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IHRoaXMuY2FsY3VsYXRlVmVydGV4SW5kZXhlcyh2ZXJ0ZXhQb3NpdGlvbnMpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSB0aGlzLmNhbGN1bGF0ZVZlcnRleE5vcm1hbHModmVydGV4UG9zaXRpb25zKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gdGhpcy5jYWxjdWxhdGVWZXJ0ZXhDb2xvdXJzKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICBjb2xvdXJSZW5kZXJlci5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIGNvbG91clJlbmRlcmVyLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgY29sb3VyUmVuZGVyZXIuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyA9IGRlZmF1bHRWZXJ0aWNlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgZmFjZXRzID0gW1xuICAgICAgICAgICAgZmFjZXRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHRyaWFuZ2xlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFRyaWFuZ2xlLCBwcm9wZXJ0aWVzLCBmYWNldHMpO1xuXG4gICAgcmV0dXJuIHRyaWFuZ2xlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJpYW5nbGU7XG4iXX0=