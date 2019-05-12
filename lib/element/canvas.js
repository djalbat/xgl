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
    key: 'applyTransforms',
    value: function applyTransforms(transforms) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        return facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransforms(transforms);
      });
    }
  }, {
    key: 'applyMask',
    value: function applyMask() {
      if (this.mask) {
        var element = this; ///

        this.mask.maskElement(element);
      }

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyMask();
      });
    }
  }, {
    key: 'render',
    value: function render(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });
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
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          transform = composeTransform(size, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwidHJhbnNmb3JtVXRpbGl0aWVzIiwicHVzaCIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsInZlcnRleEluZGV4ZXMiLCJyZWR1Y2UiLCJmYWNldCIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsImFwcGx5VHJhbnNmb3JtcyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwiZWxlbWVudCIsIm1hc2tFbGVtZW50IiwiYXBwbHlNYXNrIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJyZW5kZXIiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzaXplIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUscUJBQXFCRixRQUFRLHdCQUFSLENBRjNCOztBQUlNLElBQUVHLElBQUYsR0FBV0YsY0FBWCxDQUFFRSxJQUFGO0FBQUEsSUFDRUMsZ0JBREYsR0FDdUJGLGtCQUR2QixDQUNFRSxnQkFE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QUEsVUFDN0RDLFFBRDZELEdBQ3hCSCxVQUR3QixDQUM3REcsUUFENkQ7QUFBQSxVQUNuREMsU0FEbUQsR0FDeEJKLFVBRHdCLENBQ25ESSxTQURtRDtBQUFBLDZCQUN4QkosVUFEd0IsQ0FDeEMxQixJQUR3QztBQUFBLFVBQ3hDQSxJQUR3QyxvQ0FDakMsSUFEaUM7QUFBQSxVQUVyRUYsU0FGcUUsR0FFekRGLGlCQUFpQmdDLElBQWpCLEVBQXVCQyxRQUF2QixFQUFpQ0MsU0FBakMsQ0FGeUQ7QUFBQSxVQUdyRUMsYUFIcUUsR0FHckR4QyxRQUFReUMsY0FBUixpQkFBdUJQLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQzVCLFNBQTFDLEVBQXFEQyxNQUFyRCxFQUE2REMsSUFBN0QsU0FBc0UyQixrQkFBdEUsRUFIcUQ7OztBQUszRSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUF6RnlCeEMsTzs7QUE0RjVCMEMsT0FBT0MsT0FBUCxHQUFpQnJDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuXG4gICAgdGhpcy5tYXNrID0gbWFzaztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleEluZGV4ZXMsIGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleEluZGV4ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoKHZlcnRleE5vcm1hbHMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCk7XG5cbiAgICAgIHB1c2godmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5mYWNldHMucmVkdWNlKCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpO1xuXG4gICAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybXModHJhbnNmb3Jtcykge1xuICAgIHRyYW5zZm9ybXMgPSBbdGhpcy50cmFuc2Zvcm0sIC4uLnRyYW5zZm9ybXNdOyAvLy9cblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3JtcykpO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3JtcykpO1xuICB9XG5cbiAgYXBwbHlNYXNrKCkge1xuICAgIGlmICh0aGlzLm1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgdGhpcy5tYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlNYXNrKCkpO1xuICB9XG5cbiAgcmVuZGVyKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGZhY2V0cyA9IFtdLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNpemUsIHBvc2l0aW9uLCByb3RhdGlvbnMsIG1hc2sgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2l6ZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19