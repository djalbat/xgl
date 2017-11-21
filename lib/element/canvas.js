'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Facet = require('../facet'),
    Mask = require('../element/mask'),
    vectorUtilities = require('../utilities/vector'),
    transformUtilities = require('../utilities/transform');

var normalise3 = vectorUtilities.normalise3,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(facets, transform) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.facets = facets;

    _this.transform = transform;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements(),
          masking = false; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masking);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));
    }
  }, {
    key: 'calculateVertexPositions',
    value: function calculateVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var vertices = facet.getVertices();

        vertexPositions = vertices.reduce(function (vertexPositions, vertex) {
          var vertexPosition = vertex.slice(); ///

          vertexPositions.push(vertexPosition);

          return vertexPositions;
        }, vertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'calculateVertexNormals',
    value: function calculateVertexNormals() {
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
    value: function calculateVertexIndexes() {
      var vertexIndex = 0;

      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet) {
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);
        vertexIndexes.push(vertexIndex++);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties, vertices, indexes) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          facets = indexes.map(function (indexes) {
        ///
        var facet = Facet.fromVerticesAndIndexes(vertices, indexes);

        return facet;
      }),
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkZhY2V0IiwiTWFzayIsInZlY3RvclV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsIm5vcm1hbGlzZTMiLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwibWFza2luZyIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsIm1hc2siLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJiaW5kIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwidmVydGljZXMiLCJnZXRWZXJ0aWNlcyIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwic2xpY2UiLCJwdXNoIiwidmVydGV4Tm9ybWFscyIsIm5vcm1hbCIsImdldE5vcm1hbCIsInZlcnRleE5vcm1hbCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsIkNsYXNzIiwicHJvcGVydGllcyIsImluZGV4ZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJtYXAiLCJmcm9tVmVydGljZXNBbmRJbmRleGVzIiwiY2FudmFzRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLFFBQVFELFFBQVEsVUFBUixDQURkO0FBQUEsSUFFTUUsT0FBT0YsUUFBUSxpQkFBUixDQUZiO0FBQUEsSUFHTUcsa0JBQWtC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c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBub3JtYWxpc2UzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgIGZhY2V0LmFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNraW5nID0gZmFsc2U7IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNraW5nKTtcblxuICAgICAgaWYgKGNoaWxkRWxlbWVudCBpbnN0YW5jZW9mIE1hc2spIHtcbiAgICAgICAgY29uc3QgbWFzayA9IGNoaWxkRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSB7XG4gICAgICBjb25zdCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG5cbiAgICAgIHZlcnRleFBvc2l0aW9ucyA9IHZlcnRpY2VzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhQb3NpdGlvbnMsIHZlcnRleCkge1xuICAgICAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5zbGljZSgpOyAvLy9cblxuICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMucHVzaCh2ZXJ0ZXhQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgICAgIH0sIHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhOb3JtYWxzLCBmYWNldCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwgPSBub3JtYWxpc2UzKG5vcm1hbCk7XG5cbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGxldCB2ZXJ0ZXhJbmRleCA9IDA7XG5cbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleEluZGV4ZXMsIGZhY2V0KSB7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG4gICAgICB2ZXJ0ZXhJbmRleGVzLnB1c2godmVydGV4SW5kZXgrKyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB2ZXJ0aWNlcywgaW5kZXhlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBmYWNldHMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleGVzKSB7ICAvLy9cbiAgICAgICAgICAgIGNvbnN0IGZhY2V0ID0gRmFjZXQuZnJvbVZlcnRpY2VzQW5kSW5kZXhlcyh2ZXJ0aWNlcywgaW5kZXhlcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=