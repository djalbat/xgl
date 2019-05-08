'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    Mask = require('../element/mask'),
    arrayUtilities = require('../utilities/array'),
    transformUtilities = require('../utilities/transform');

var push = arrayUtilities.push,
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
    key: 'render',
    value: function render(textureRenderer, colourRenderer) {
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
    value: function initialise(textureRenderer, colourRenderer, transforms, masked) {
      transforms = [this.transform].concat(_toConsumableArray(transforms)); ///

      this.facets.forEach(function (facet) {
        facet.applyTransforms(transforms);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        var masked = false; ///

        childElement.initialise(textureRenderer, colourRenderer, transforms, masked);

        if (childElement instanceof Mask) {
          var mask = childElement,
              ///
          element = this; ///

          mask.maskElement(element);
        }
      }.bind(this));

      if (!masked) {
        this.render(textureRenderer, colourRenderer);
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var facets = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      for (var _len = arguments.length, remainingArguments = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        remainingArguments[_key - 3] = arguments[_key];
      }

      var width = properties.width,
          height = properties.height,
          depth = properties.depth,
          position = properties.position,
          rotations = properties.rotations,
          transform = composeTransform(width, height, depth, position, rotations),
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, facets, transform].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIk1hc2siLCJhcnJheVV0aWxpdGllcyIsInRyYW5zZm9ybVV0aWxpdGllcyIsInB1c2giLCJjb21wb3NlVHJhbnNmb3JtIiwiQ2FudmFzRWxlbWVudCIsImZhY2V0cyIsInRyYW5zZm9ybSIsInRleHR1cmVSZW5kZXJlciIsImNvbG91clJlbmRlcmVyIiwidmVydGV4UG9zaXRpb25zIiwicmVkdWNlIiwiZmFjZXQiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwidmVydGV4SW5kZXhlcyIsImluZGV4IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsInRyYW5zZm9ybXMiLCJtYXNrZWQiLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm1zIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJpbml0aWFsaXNlIiwibWFzayIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImJpbmQiLCJyZW5kZXIiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ3aWR0aCIsImhlaWdodCIsImRlcHRoIiwicG9zaXRpb24iLCJyb3RhdGlvbnMiLCJjYW52YXNFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxpQkFBUixDQURiO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCO0FBQUEsSUFHTUcscUJBQXFCSCxRQUFRLHdCQUFSLENBSDNCOztBQUtN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S0FEbUUsR0FDckJGLFVBRHFCLENBQ25FRSxLQURtRTtBQUFBLFVBQzVEQyxNQUQ0RCxHQUNyQkgsVUFEcUIsQ0FDNURHLE1BRDREO0FBQUEsVUFDcERDLEtBRG9ELEdBQ3JCSixVQURxQixDQUNwREksS0FEb0Q7QUFBQSxVQUM3Q0MsUUFENkMsR0FDckJMLFVBRHFCLENBQzdDSyxRQUQ2QztBQUFBLFVBQ25DQyxTQURtQyxHQUNyQk4sVUFEcUIsQ0FDbkNNLFNBRG1DO0FBQUEsVUFFckVuQyxTQUZxRSxHQUV6REgsaUJBQWlCa0MsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsUUFBdkMsRUFBaURDLFNBQWpELENBRnlEO0FBQUEsVUFHckVDLGFBSHFFLEdBR3JEN0MsUUFBUThDLGNBQVIsaUJBQXVCVCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMEM5QixNQUExQyxFQUFrREMsU0FBbEQsU0FBZ0U4QixrQkFBaEUsRUFIcUQ7OztBQUszRSxhQUFPTSxhQUFQO0FBQ0Q7Ozs7RUE5RnlCN0MsTzs7QUFpRzVCK0MsT0FBT0MsT0FBUCxHQUFpQnpDLGFBQWpCIiwiZmlsZSI6ImNhbnZhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICBcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgcmVuZGVyKHRleHR1cmVSZW5kZXJlciwgY29sb3VyUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9ucygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4UG9zaXRpb25zLCBmYWNldCkge1xuICAgICAgY29uc3QgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFscygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzID0gdGhpcy5mYWNldHMucmVkdWNlKGZ1bmN0aW9uKHZlcnRleE5vcm1hbHMsIGZhY2V0KSB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgICBcbiAgICAgIHB1c2godmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcblxuICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gIH1cblxuICBnZXRWZXJ0ZXhJbmRleGVzKCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSB0aGlzLmZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24odmVydGV4SW5kZXhlcywgZmFjZXQsIGluZGV4KSB7XG4gICAgICBjb25zdCBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KTtcbiAgICAgIFxuICAgICAgcHVzaCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuXG4gICAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGluaXRpYWxpc2UodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgdHJhbnNmb3JtcyA9IFt0aGlzLnRyYW5zZm9ybSwgLi4udHJhbnNmb3Jtc107IC8vL1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm1zKHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY29uc3QgbWFza2VkID0gZmFsc2U7IC8vL1xuXG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSh0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpO1xuXG4gICAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgTWFzaykge1xuICAgICAgICBjb25zdCBtYXNrID0gY2hpbGRFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBpZiAoIW1hc2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXIodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlcik7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBmYWNldHMgPSBbXSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBkZXB0aCwgcG9zaXRpb24sIHJvdGF0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHdpZHRoLCBoZWlnaHQsIGRlcHRoLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgZmFjZXRzLCB0cmFuc2Zvcm0sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=