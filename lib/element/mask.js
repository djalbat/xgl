'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    MaskingFacet = require('../maskingFacet'),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsImVsZW1lbnQiLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJtYXNrRWxlbWVudCIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiYXBwbHlUcmFuc2Zvcm1zIiwicHJvcGVydGllcyIsIm1hc2siLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWxlbWVudEZhY2V0cyIsImdldEZhY2V0cyIsInVubWFza2VkRmFjZXRzIiwibWFza0ZhY2V0Iiwic2V0RmFjZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7Ozs0Q0FDb0I7QUFDdEIsVUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsU0FBU0MsZUFBZUgsYUFBZixDQURmO0FBQUEsVUFFTUksZ0JBQWdCRixPQUFPRyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BDLFlBQU1DLGVBQWVYLGFBQWFZLFNBQWIsQ0FBdUJGLEtBQXZCLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUplLENBRnRCOztBQVFBLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXSyxPLEVBQVM7QUFDbkIsVUFBTUwsZ0JBQWdCLEtBQUtNLHFCQUFMLEVBQXRCOztBQUVBQyxtQkFBWUYsT0FBWixFQUFxQkwsYUFBckI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTVEsYUFBYSxFQUFuQjtBQUFBLFVBQ01aLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0Qjs7QUFHQUQsb0JBQWNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhQyxlQUFiLENBQTZCSCxVQUE3QixDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7OzttQ0FFcUJJLFUsRUFBWTtBQUNoQyxVQUFNQyxPQUFPdkIsUUFBUXdCLGNBQVIsQ0FBdUJuQixJQUF2QixFQUE2QmlCLFVBQTdCLENBQWI7O0FBRUFDLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBaENnQnZCLE87O0FBbUNuQjBCLE9BQU9DLE9BQVAsR0FBaUJ0QixJQUFqQjs7QUFFQSxTQUFTSSxjQUFULENBQXdCSCxhQUF4QixFQUFvRDtBQUFBLE1BQWJFLE1BQWEsdUVBQUosRUFBSTs7QUFDbERGLGdCQUFjYSxPQUFkLENBQXNCLFVBQUNDLFlBQUQsRUFBa0I7QUFDdEMsUUFBTUwsVUFBVUssWUFBaEI7QUFBQSxRQUE4QjtBQUN4QlEsb0JBQWdCYixRQUFRYyxTQUFSLEVBRHRCO0FBQUEsUUFFTXZCLGdCQUFnQlMsUUFBUVIsZ0JBQVIsRUFGdEI7O0FBSUFILFNBQUtJLE1BQUwsRUFBYW9CLGFBQWI7O0FBRUFuQixtQkFBZUgsYUFBZixFQUE4QkUsTUFBOUI7QUFDRCxHQVJEOztBQVVBLFNBQU9BLE1BQVA7QUFDRDs7QUFFRCxTQUFTUyxZQUFULENBQXFCRixPQUFyQixFQUE4QkwsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUYsU0FBU08sUUFBUWMsU0FBUixFQUFiOztBQUVBbkIsZ0JBQWNTLE9BQWQsQ0FBc0IsVUFBQ04sWUFBRCxFQUFrQjtBQUN0QyxRQUFNaUIsaUJBQWlCLEVBQXZCOztBQUVBdEIsV0FBT1csT0FBUCxDQUFlLFVBQUNQLEtBQUQ7QUFBQSxhQUFXQyxhQUFha0IsU0FBYixDQUF1Qm5CLEtBQXZCLEVBQThCa0IsY0FBOUIsQ0FBWDtBQUFBLEtBQWY7O0FBRUF0QixhQUFTc0IsY0FBVCxDQUxzQyxDQUtaO0FBQzNCLEdBTkQ7O0FBUUFmLFVBQVFpQixTQUFSLENBQWtCeEIsTUFBbEI7O0FBRUEsTUFBTUYsZ0JBQWdCUyxRQUFRUixnQkFBUixFQUF0Qjs7QUFFQUQsZ0JBQWNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QyxRQUFNTCxVQUFVSyxZQUFoQixDQURzQyxDQUNSOztBQUU5QkgsaUJBQVlGLE9BQVosRUFBcUJMLGFBQXJCO0FBQ0QsR0FKRDtBQUtEIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1zID0gW10sXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXModHJhbnNmb3JtcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiJdfQ==