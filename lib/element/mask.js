'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../primitive/maskingFacet'),
    arrayUtilities = require('../utilities/array');

var push = arrayUtilities.push;

var Mask = function (_Element) {
  _inherits(Mask, _Element);

  function Mask() {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).apply(this, arguments));
  }

  _createClass(Mask, [{
    key: 'retrieveMaskingFacets',
    value: function retrieveMaskingFacets() {
      var childElements = this.getChildElements(),
          facets = retrieveFacets(childElements),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = MaskingFacet.fromFacet(facet);

        return maskingFacet;
      });

      return maskingFacets;
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var maskingFacets = this.retrieveMaskingFacets();

      _maskElement(element, maskingFacets);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var transforms = [],
          childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.applyTransforms(transforms);
      });

      childElements.forEach(function (childElement) {
        return childElement.applyMask();
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var mask = Element.fromProperties(Mask, properties);

      mask.initialise();

      return mask;
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;

function retrieveFacets(childElements) {
  var facets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  childElements.forEach(function (childElement) {
    var element = childElement,
        ///
    elementFacets = element.getFacets(),
        childElements = element.getChildElements();

    push(facets, elementFacets);

    retrieveFacets(childElements, facets);
  });

  return facets;
}

function _maskElement(element, maskingFacets) {
  var facets = element.getFacets();

  maskingFacets.forEach(function (maskingFacet) {
    var unmaskedFacets = [];

    facets.forEach(function (facet) {
      return maskingFacet.maskFacet(facet, unmaskedFacets);
    });

    facets = unmaskedFacets; ///
  });

  element.setFacets(facets);

  var childElements = element.getChildElements();

  childElements.forEach(function (childElement) {
    var element = childElement; ///

    _maskElement(element, maskingFacets);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsImVsZW1lbnQiLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJtYXNrRWxlbWVudCIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiYXBwbHlUcmFuc2Zvcm1zIiwiYXBwbHlNYXNrIiwicHJvcGVydGllcyIsIm1hc2siLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWxlbWVudEZhY2V0cyIsImdldEZhY2V0cyIsInVubWFza2VkRmFjZXRzIiwibWFza0ZhY2V0Iiwic2V0RmFjZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsMkJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7Ozs0Q0FDb0I7QUFDdEIsVUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsU0FBU0MsZUFBZUgsYUFBZixDQURmO0FBQUEsVUFFTUksZ0JBQWdCRixPQUFPRyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BDLFlBQU1DLGVBQWVYLGFBQWFZLFNBQWIsQ0FBdUJGLEtBQXZCLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUplLENBRnRCOztBQVFBLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXSyxPLEVBQVM7QUFDbkIsVUFBTUwsZ0JBQWdCLEtBQUtNLHFCQUFMLEVBQXRCOztBQUVBQyxtQkFBWUYsT0FBWixFQUFxQkwsYUFBckI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTVEsYUFBYSxFQUFuQjtBQUFBLFVBQ01aLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0Qjs7QUFHQUQsb0JBQWNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhQyxlQUFiLENBQTZCSCxVQUE3QixDQUFsQjtBQUFBLE9BQXRCOztBQUVBWixvQkFBY2EsT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFFLFNBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTUMsT0FBT3hCLFFBQVF5QixjQUFSLENBQXVCcEIsSUFBdkIsRUFBNkJrQixVQUE3QixDQUFiOztBQUVBQyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQWxDZ0J4QixPOztBQXFDbkIyQixPQUFPQyxPQUFQLEdBQWlCdkIsSUFBakI7O0FBRUEsU0FBU0ksY0FBVCxDQUF3QkgsYUFBeEIsRUFBb0Q7QUFBQSxNQUFiRSxNQUFhLHVFQUFKLEVBQUk7O0FBQ2xERixnQkFBY2EsT0FBZCxDQUFzQixVQUFDQyxZQUFELEVBQWtCO0FBQ3RDLFFBQU1MLFVBQVVLLFlBQWhCO0FBQUEsUUFBOEI7QUFDeEJTLG9CQUFnQmQsUUFBUWUsU0FBUixFQUR0QjtBQUFBLFFBRU14QixnQkFBZ0JTLFFBQVFSLGdCQUFSLEVBRnRCOztBQUlBSCxTQUFLSSxNQUFMLEVBQWFxQixhQUFiOztBQUVBcEIsbUJBQWVILGFBQWYsRUFBOEJFLE1BQTlCO0FBQ0QsR0FSRDs7QUFVQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsWUFBVCxDQUFxQkYsT0FBckIsRUFBOEJMLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlGLFNBQVNPLFFBQVFlLFNBQVIsRUFBYjs7QUFFQXBCLGdCQUFjUyxPQUFkLENBQXNCLFVBQUNOLFlBQUQsRUFBa0I7QUFDdEMsUUFBTWtCLGlCQUFpQixFQUF2Qjs7QUFFQXZCLFdBQU9XLE9BQVAsQ0FBZSxVQUFDUCxLQUFEO0FBQUEsYUFBV0MsYUFBYW1CLFNBQWIsQ0FBdUJwQixLQUF2QixFQUE4Qm1CLGNBQTlCLENBQVg7QUFBQSxLQUFmOztBQUVBdkIsYUFBU3VCLGNBQVQsQ0FMc0MsQ0FLWjtBQUMzQixHQU5EOztBQVFBaEIsVUFBUWtCLFNBQVIsQ0FBa0J6QixNQUFsQjs7QUFFQSxNQUFNRixnQkFBZ0JTLFFBQVFSLGdCQUFSLEVBQXRCOztBQUVBRCxnQkFBY2EsT0FBZCxDQUFzQixVQUFDQyxZQUFELEVBQWtCO0FBQ3RDLFFBQU1MLFVBQVVLLFlBQWhCLENBRHNDLENBQ1I7O0FBRTlCSCxpQkFBWUYsT0FBWixFQUFxQkwsYUFBckI7QUFDRCxHQUpEO0FBS0QiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2tpbmdGYWNldCA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3JtcykpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseU1hc2soKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMpO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIl19