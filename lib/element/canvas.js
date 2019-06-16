'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    transformUtilities = require('../utilities/transform');

var composeTransform = transformUtilities.composeTransform;

var CanvasElement = function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask, hidden) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;

    _this.hidden = hidden;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: 'getTransform',
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: 'getFacets',
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: 'getMask',
    value: function getMask() {
      return this.mask;
    }
  }, {
    key: 'isHidden',
    value: function isHidden() {
      return this.hidden;
    }
  }, {
    key: 'setFacets',
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: 'applyMask',
    value: function applyMask(mask) {
      if (mask) {
        var element = this; ///

        mask.maskElement(element);
      }
    }
  }, {
    key: 'applyTransform',
    value: function applyTransform(transform) {
      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: 'applyTransformsAndMasks',
    value: function applyTransformsAndMasks() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      this.applyTransform(this.transform);

      this.applyMask(this.mask);
    }
  }, {
    key: 'createFacets',
    value: function createFacets() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.createFacets();
      });
    }
  }, {
    key: 'addFacets',
    value: function addFacets(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var scale = properties.scale,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsImFwcGx5TWFzayIsImNyZWF0ZUZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2NhbGUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdRRSxnQixHQUFxQkQsa0IsQ0FBckJDLGdCOztJQUVGQyxhOzs7QUFDSix5QkFBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0JDLElBQS9CLEVBQXFDQyxNQUFyQyxFQUE2QztBQUFBOztBQUFBOztBQUczQyxVQUFLSCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFQMkM7QUFRNUM7Ozs7bUNBRWM7QUFDYixhQUFPLEtBQUtILFNBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtDLE1BQVo7QUFDRDs7OzhCQUVTRixNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs4QkFFU0MsSSxFQUFNO0FBQ2QsVUFBSUEsSUFBSixFQUFVO0FBQ1IsWUFBTUUsVUFBVSxJQUFoQixDQURRLENBQ2M7O0FBRXRCRixhQUFLRyxXQUFMLENBQWlCRCxPQUFqQjtBQUNEO0FBQ0Y7OzttQ0FFY0osUyxFQUFXO0FBQ3hCLFdBQUtDLE1BQUwsQ0FBWUssT0FBWixDQUFvQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsTUFBTUMsY0FBTixDQUFxQlIsU0FBckIsQ0FBWDtBQUFBLE9BQXBCOztBQUVBLFVBQU1TLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNILE9BQWQsQ0FBc0IsVUFBQ0ssWUFBRDtBQUFBLGVBQWtCQSxhQUFhSCxjQUFiLENBQTRCUixTQUE1QixDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTVMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBRCxvQkFBY0gsT0FBZCxDQUFzQixVQUFDSyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLHVCQUFiLEVBQWxCO0FBQUEsT0FBdEI7O0FBRUEsV0FBS0osY0FBTCxDQUFvQixLQUFLUixTQUF6Qjs7QUFFQSxXQUFLYSxTQUFMLENBQWUsS0FBS1gsSUFBcEI7QUFDRDs7O21DQUVjO0FBQ2IsVUFBTU8sZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBRCxvQkFBY0gsT0FBZCxDQUFzQixVQUFDSyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFHLFlBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7OEJBRVNDLGMsRUFBZ0JDLGUsRUFBaUI7QUFDekMsVUFBTVAsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBRCxvQkFBY0gsT0FBZCxDQUFzQixVQUFDSyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFNLFNBQWIsQ0FBdUJGLGNBQXZCLEVBQXVDQyxlQUF2QyxDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7OzttQ0FFcUJFLEssRUFBT0MsVSxFQUFtQztBQUFBLHdDQUFwQkMsa0JBQW9CO0FBQXBCQSwwQkFBb0I7QUFBQTs7QUFBQSxVQUN0REMsS0FEc0QsR0FDTUYsVUFETixDQUN0REUsS0FEc0Q7QUFBQSxVQUMvQ0MsUUFEK0MsR0FDTUgsVUFETixDQUMvQ0csUUFEK0M7QUFBQSxVQUNyQ0MsU0FEcUMsR0FDTUosVUFETixDQUNyQ0ksU0FEcUM7QUFBQSw2QkFDTUosVUFETixDQUMxQmpCLElBRDBCO0FBQUEsVUFDMUJBLElBRDBCLG9DQUNuQixJQURtQjtBQUFBLCtCQUNNaUIsVUFETixDQUNiaEIsTUFEYTtBQUFBLFVBQ2JBLE1BRGEsc0NBQ0osS0FESTtBQUFBLFVBRXhESCxTQUZ3RCxHQUU1Q0YsaUJBQWlCdUIsS0FBakIsRUFBd0JDLFFBQXhCLEVBQWtDQyxTQUFsQyxDQUY0QztBQUFBLFVBR3hEdEIsTUFId0QsR0FHL0MsRUFIK0M7QUFBQSxVQUl4RHVCLGFBSndELEdBSXhDN0IsUUFBUThCLGNBQVIsaUJBQXVCUCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMENuQixTQUExQyxFQUFxREMsTUFBckQsRUFBNkRDLElBQTdELEVBQW1FQyxNQUFuRSxTQUE4RWlCLGtCQUE5RSxFQUp3Qzs7O0FBTTlELGFBQU9JLGFBQVA7QUFDRDs7OztFQTVFeUI3QixPOztBQStFNUIrQixPQUFPQyxPQUFQLEdBQWlCNUIsYUFBakIiLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgdHJhbnNmb3JtVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RyYW5zZm9ybScpO1xuXG5jb25zdCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlkZGVuO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2spIHtcbiAgICBpZiAobWFzaykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7XG5cbiAgICB0aGlzLmFwcGx5TWFzayh0aGlzLm1hc2spO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKCkpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMsIG1hc2sgPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FudmFzRWxlbWVudDtcbiJdfQ==