'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
    composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;

    _this.facets = facets;

    _this.mask = mask;
    return _this;
  }

  _createClass(CanvasElement, [{
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
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      ///
    }
  }, {
    key: 'getVertexPositions',
    value: function getVertexPositions() {
      var vertexPositions = this.facets.reduce(function (vertexPositions, facet) {
        var facetVertexPositions = facet.getVertexPositions();

        push(vertexPositions, facetVertexPositions);

        return vertexPositions;
      }, []);

      return vertexPositions;
    }
  }, {
    key: 'getVertexNormals',
    value: function getVertexNormals() {
      var vertexNormals = this.facets.reduce(function (vertexNormals, facet) {
        var facetVertexNormals = facet.getVertexNormals();

        push(vertexNormals, facetVertexNormals);

        return vertexNormals;
      }, []);

      return vertexNormals;
    }
  }, {
    key: 'getVertexIndexes',
    value: function getVertexIndexes() {
      var vertexIndexes = this.facets.reduce(function (vertexIndexes, facet, index) {
        var facetVertexIndexes = facet.getVertexIndexes(index);

        push(vertexIndexes, facetVertexIndexes);

        return vertexIndexes;
      }, []);

      return vertexIndexes;
    }
  }, {
    key: 'initialise',
    value: function initialise(colourRenderer, textureRenderer, transforms, masking) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.initialise(colourRenderer, textureRenderer, transforms, masking);
      });

      this.facets.forEach(function (facet) {
        return facet.applyTransforms(transforms);
      });

      if (this.mask) {
        var element = this; ///

        this.mask.maskElement(element);
      }

      if (!masking) {
        this.render(colourRenderer, textureRenderer);
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var facets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var size = properties.size,
          position = properties.position,
          rotations = properties.rotations,
          mask = properties.mask,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInRyYW5zZm9ybXMiLCJtYXNraW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiaW5pdGlhbGlzZSIsImFwcGx5VHJhbnNmb3JtcyIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsInJlbmRlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNpemUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0FBSU0sSUFBRUcsSUFBRixHQUFXRixjQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxnQkFERixHQUN1QkYsa0JBRHZC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RHdDLEdBQy9CMkIsVUFEK0IsQ0FDeEMzQixJQUR3QztBQUFBLFVBRXJFRixTQUZxRSxHQUV6REYsaUJBQWlCaUMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDQyxTQUFqQyxDQUZ5RDtBQUFBLFVBR3JFQyxhQUhxRSxHQUdyRHpDLFFBQVEwQyxjQUFSLGlCQUF1QlAsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDN0IsU0FBMUMsRUFBcURDLE1BQXJELEVBQTZEQyxJQUE3RCxTQUFzRTRCLGtCQUF0RSxFQUhxRDs7O0FBSzNFLGFBQU9JLGFBQVA7QUFDRDs7OztFQXJGeUJ6QyxPOztBQXdGNUIyQyxPQUFPQyxPQUFQLEdBQWlCdEMsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG5cbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpO1xuICAgICAgXG4gICAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleE5vcm1hbHMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleEluZGV4ZXMsIGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBpbml0aWFsaXNlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tpbmcpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSk7XG5cbiAgICBpZiAodGhpcy5tYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIHRoaXMubWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIW1hc2tpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzID0gW10sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucywgbWFzayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==