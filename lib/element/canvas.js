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
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsInZlcnRleE5vcm1hbHMiLCJyZWR1Y2UiLCJmYWNldCIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhJbmRleGVzIiwiaW5kZXgiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwidmVydGV4UG9zaXRpb25zIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsInRyYW5zZm9ybXMiLCJtYXNraW5nIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiaW5pdGlhbGlzZSIsImFwcGx5VHJhbnNmb3JtcyIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsInJlbmRlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNpemUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxxQkFBcUJGLFFBQVEsd0JBQVIsQ0FGM0I7O0FBSU0sSUFBRUcsSUFBRixHQUFXRixjQUFYLENBQUVFLElBQUY7QUFBQSxJQUNFQyxnQkFERixHQUN1QkYsa0JBRHZC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LEdBQy9CMkIsVUFEK0IsQ0FDeEMzQixJQUR3QztBQUFBLFVBRXJFRixTQUZxRSxHQUV6REYsaUJBQWlCaUMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDQyxTQUFqQyxDQUZ5RDtBQUFBLFVBR3JFQyxhQUhxRSxHQUdyRHpDLFFBQVEwQyxjQUFSLGlCQUF1QlAsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDN0IsU0FBMUMsRUFBcURDLE1BQXJELEVBQTZEQyxJQUE3RCxTQUFzRTRCLGtCQUF0RSxFQUhxRDs7O0FBSzNFLGFBQU9JLGFBQVA7QUFDRDs7OztFQXJGeUJ6QyxPOztBQXdGNUIyQyxPQUFPQyxPQUFQLEdBQWlCdEMsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy90cmFuc2Zvcm0nKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG5cbiAgICB0aGlzLm1hc2sgPSBtYXNrO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3QgdmVydGV4Tm9ybWFscyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4Tm9ybWFscywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuXG4gIGdldFZlcnRleEluZGV4ZXMoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IHRoaXMuZmFjZXRzLnJlZHVjZSgodmVydGV4SW5kZXhlcywgZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleFBvc2l0aW9ucywgZmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCk7XG5cbiAgICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMsIG1hc2tpbmcpIHtcbiAgICB0cmFuc2Zvcm1zID0gW3RoaXMudHJhbnNmb3JtLCAuLi50cmFuc2Zvcm1zXTsgLy8vXG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZykpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3Jtcyh0cmFuc2Zvcm1zKSk7XG5cbiAgICBpZiAodGhpcy5tYXNrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIHRoaXMubWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoIW1hc2tpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzID0gW10sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucywgbWFzayB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==