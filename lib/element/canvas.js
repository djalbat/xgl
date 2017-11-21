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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkZhY2V0IiwiTWFzayIsInZlY3RvclV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsIm5vcm1hbGlzZTMiLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidHJhbnNmb3JtcyIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwibWFzayIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImJpbmQiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJyZWR1Y2UiLCJ2ZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwidmVydGV4IiwidmVydGV4UG9zaXRpb24iLCJzbGljZSIsInB1c2giLCJ2ZXJ0ZXhOb3JtYWxzIiwibm9ybWFsIiwiZ2V0Tm9ybWFsIiwidmVydGV4Tm9ybWFsIiwidmVydGV4SW5kZXgiLCJ2ZXJ0ZXhJbmRleGVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiaW5kZXhlcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVwdGgiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsIm1hcCIsImZyb21WZXJ0aWNlc0FuZEluZGV4ZXMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxPQUFPRixRQUFRLGlCQUFSLENBRmI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEscUJB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O0FBQ0QsT0FOcUIsRUFNbkIsRUFObUIsQ0FBdEI7O0FBUUEsYUFBT0EsYUFBUDtBQUNEOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBWWIsUSxFQUFVYyxPLEVBQWdDO0FBQUEsd0NBQXBCQyxrQkFBb0I7QUFBcEJBLDBCQUFvQjtBQUFBOztBQUFBLFVBQ3pFQyxLQUR5RSxHQUMzQkgsVUFEMkIsQ0FDekVHLEtBRHlFO0FBQUEsVUFDbEVDLE1BRGtFLEdBQzNCSixVQUQyQixDQUNsRUksTUFEa0U7QUFBQSxVQUMxREMsS0FEMEQsR0FDM0JMLFVBRDJCLENBQzFESyxLQUQwRDtBQUFBLFVBQ25EQyxRQURtRCxHQUMzQk4sVUFEMkIsQ0FDbkRNLFFBRG1EO0FBQUEsVUFDekNDLFNBRHlDLEdBQzNCUCxVQUQyQixDQUN6Q08sU0FEeUM7QUFBQSxVQUUzRXRDLE1BRjJFLEdBRWxFZ0MsUUFBUU8sR0FBUixDQUFZLFVBQVNQLE9BQVQsRUFBa0I7QUFDckMsWUFBTTFCLFFBQVFiLE1BQU0rQyxzQkFBTixDQUE2QnRCLFFBQTdCLEVBQXVDYyxPQUF2QyxDQUFkOztBQUVBLGVBQU8xQixLQUFQO0FBQ0QsT0FKUSxDQUZrRTtBQUFBLFVBTzNFTCxTQVAyRSxHQU8vREgsaUJBQWlCb0MsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELENBUCtEO0FBQUEsVUFRM0VHLGFBUjJFLEdBUTNEbEQsUUFBUW1ELGNBQVIsaUJBQXVCWixLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEMvQixNQUExQyxFQUFrREMsU0FBbEQsU0FBZ0VnQyxrQkFBaEUsRUFSMkQ7OztBQVVqRixhQUFPUSxhQUFQO0FBQ0Q7Ozs7RUFwR3lCbEQsTzs7QUF1RzVCb0QsT0FBT0MsT0FBUCxHQUFpQjdDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIHZlY3RvclV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZWN0b3InKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBub3JtYWxpc2UzIH0gPSB2ZWN0b3JVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgIGZhY2V0LmFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG5cbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBNYXNrKSB7XG4gICAgICAgIGNvbnN0IG1hc2sgPSBjaGlsZEVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSB2ZXJ0aWNlcy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCB2ZXJ0ZXgpIHtcbiAgICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguc2xpY2UoKTsgLy8vXG5cbiAgICAgICAgdmVydGV4UG9zaXRpb25zLnB1c2godmVydGV4UG9zaXRpb24pO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgICB9LCB2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBjYWxjdWxhdGVWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4Tm9ybWFscywgZmFjZXQpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsaXNlMyhub3JtYWwpO1xuXG4gICAgICB2ZXJ0ZXhOb3JtYWxzLnB1c2godmVydGV4Tm9ybWFsKTtcbiAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh2ZXJ0ZXhOb3JtYWwpO1xuICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHZlcnRleE5vcm1hbCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG5cbiAgY2FsY3VsYXRlVmVydGV4SW5kZXhlcygpIHtcbiAgICBsZXQgdmVydGV4SW5kZXggPSAwO1xuXG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZShmdW5jdGlvbih2ZXJ0ZXhJbmRleGVzLCBmYWNldCkge1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuICAgICAgdmVydGV4SW5kZXhlcy5wdXNoKHZlcnRleEluZGV4KyspO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdmVydGljZXMsIGluZGV4ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXhlcykge1xuICAgICAgICAgICAgY29uc3QgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXNBbmRJbmRleGVzKHZlcnRpY2VzLCBpbmRleGVzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0od2lkdGgsIGhlaWdodCwgZGVwdGgsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMsIHRyYW5zZm9ybSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==