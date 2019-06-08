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

  function CanvasElement(transform, facets, mask) {
    _classCallCheck(this, CanvasElement);

    var _this = _possibleConstructorReturn(this, (CanvasElement.__proto__ || Object.getPrototypeOf(CanvasElement)).call(this));

    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;
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
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var scale = properties.scale,
          position = properties.position,
          rotations = properties.rotations,
          _properties$mask = properties.mask,
          mask = _properties$mask === undefined ? null : _properties$mask,
          transform = composeTransform(scale, position, rotations),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask].concat(remainingArguments));


      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJmYWNldCIsImFwcGx5VHJhbnNmb3JtIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsImFwcGx5TWFzayIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwicmVuZGVyIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2NhbGUiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMscUJBQXFCRCxRQUFRLHdCQUFSLENBRDNCOztJQUdRRSxnQixHQUFxQkQsa0IsQ0FBckJDLGdCOztJQUVGQyxhOzs7QUFDSix5QkFBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0JDLElBQS9CLEVBQXFDO0FBQUE7O0FBQUE7O0FBR25DLFVBQUtGLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBTG1DO0FBTXBDOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLRixTQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OzhCQUVTRCxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs4QkFFU0MsSSxFQUFNO0FBQ2QsVUFBSUEsSUFBSixFQUFVO0FBQ1IsWUFBTUMsVUFBVSxJQUFoQixDQURRLENBQ2M7O0FBRXRCRCxhQUFLRSxXQUFMLENBQWlCRCxPQUFqQjtBQUNEO0FBQ0Y7OzttQ0FFY0gsUyxFQUFXO0FBQ3hCLFdBQUtDLE1BQUwsQ0FBWUksT0FBWixDQUFvQixVQUFDQyxLQUFEO0FBQUEsZUFBV0EsTUFBTUMsY0FBTixDQUFxQlAsU0FBckIsQ0FBWDtBQUFBLE9BQXBCOztBQUVBLFVBQU1RLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNILE9BQWQsQ0FBc0IsVUFBQ0ssWUFBRDtBQUFBLGVBQWtCQSxhQUFhSCxjQUFiLENBQTRCUCxTQUE1QixDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsVUFBTVEsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCOztBQUVBRCxvQkFBY0gsT0FBZCxDQUFzQixVQUFDSyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFDLHVCQUFiLEVBQWxCO0FBQUEsT0FBdEI7O0FBRUEsV0FBS0osY0FBTCxDQUFvQixLQUFLUCxTQUF6Qjs7QUFFQSxXQUFLWSxTQUFMLENBQWUsS0FBS1YsSUFBcEI7QUFDRDs7OzJCQUVNVyxjLEVBQWdCQyxlLEVBQWlCO0FBQ3RDLFVBQU1OLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNILE9BQWQsQ0FBc0IsVUFBQ0ssWUFBRDtBQUFBLGVBQWtCQSxhQUFhSyxNQUFiLENBQW9CRixjQUFwQixFQUFvQ0MsZUFBcEMsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCRSxLLEVBQU9DLFUsRUFBbUM7QUFBQSx3Q0FBcEJDLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBQUEsVUFDdERDLEtBRHNELEdBQ1ZGLFVBRFUsQ0FDdERFLEtBRHNEO0FBQUEsVUFDL0NDLFFBRCtDLEdBQ1ZILFVBRFUsQ0FDL0NHLFFBRCtDO0FBQUEsVUFDckNDLFNBRHFDLEdBQ1ZKLFVBRFUsQ0FDckNJLFNBRHFDO0FBQUEsNkJBQ1ZKLFVBRFUsQ0FDMUJmLElBRDBCO0FBQUEsVUFDMUJBLElBRDBCLG9DQUNuQixJQURtQjtBQUFBLFVBRXhERixTQUZ3RCxHQUU1Q0YsaUJBQWlCcUIsS0FBakIsRUFBd0JDLFFBQXhCLEVBQWtDQyxTQUFsQyxDQUY0QztBQUFBLFVBR3hEcEIsTUFId0QsR0FHL0MsRUFIK0M7QUFBQSxVQUl4RHFCLGFBSndELEdBSXhDM0IsUUFBUTRCLGNBQVIsaUJBQXVCUCxLQUF2QixFQUE4QkMsVUFBOUIsRUFBMENqQixTQUExQyxFQUFxREMsTUFBckQsRUFBNkRDLElBQTdELFNBQXNFZ0Isa0JBQXRFLEVBSndDOzs7QUFNOUQsYUFBT0ksYUFBUDtBQUNEOzs7O0VBaEV5QjNCLE87O0FBbUU1QjZCLE9BQU9DLE9BQVAsR0FBaUIxQixhQUFqQiIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICB0cmFuc2Zvcm1VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdHJhbnNmb3JtJyk7XG5cbmNvbnN0IHsgY29tcG9zZVRyYW5zZm9ybSB9ID0gdHJhbnNmb3JtVXRpbGl0aWVzO1xuXG5jbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldE1hc2soKSB7XG4gICAgcmV0dXJuIHRoaXMubWFzaztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrKSB7XG4gICAgaWYgKG1hc2spIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpKTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pO1xuXG4gICAgdGhpcy5hcHBseU1hc2sodGhpcy5tYXNrKTtcbiAgfVxuXG4gIHJlbmRlcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zLCBtYXNrID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBjYW52YXNFbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FudmFzRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbnZhc0VsZW1lbnQ7XG4iXX0=