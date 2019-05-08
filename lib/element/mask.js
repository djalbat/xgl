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
    key: 'getFacets',
    value: function getFacets() {
      var childElements = this.getChildElements(),
          facets = childElements.reduce(function (facets, childElement) {
        var childElementFacets = childElement.getFacets();

        push(facets, childElementFacets);

        return facets;
      }, []);

      return facets;
    }
  }, {
    key: 'getMaskingFacets',
    value: function getMaskingFacets() {
      var facets = this.getFacets(),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = MaskingFacet.fromFacet(facet);

        return maskingFacet;
      });

      return maskingFacets;
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var facets = element.getFacets();

      var maskingFacets = this.getMaskingFacets();

      maskingFacets.forEach(function (maskingFacet) {
        var unmaskedFacets = [];

        facets.forEach(function (facet) {
          maskingFacet.maskFacet(facet, unmaskedFacets);
        });

        facets = unmaskedFacets; ///
      });

      element.setFacets(facets);
    }
  }, {
    key: 'initialise',
    value: function initialise(textureRenderer, colourRenderer, transforms, masked) {
      var childElements = this.getChildElements();

      masked = true; ///

      childElements.forEach(function (childElement) {
        childElement.initialise(textureRenderer, colourRenderer, transforms, masked);
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Mask, properties);
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjaGlsZEVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJlbGVtZW50IiwiZ2V0TWFza2luZ0ZhY2V0cyIsImZvckVhY2giLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyIsInRleHR1cmVSZW5kZXJlciIsImNvbG91clJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImluaXRpYWxpc2UiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLFNBQVVGLGNBQWNHLE1BQWQsQ0FBcUIsVUFBU0QsTUFBVCxFQUFpQkUsWUFBakIsRUFBK0I7QUFDNUQsWUFBTUMscUJBQXFCRCxhQUFhRSxTQUFiLEVBQTNCOztBQUVBUixhQUFLSSxNQUFMLEVBQWFHLGtCQUFiOztBQUVBLGVBQU9ILE1BQVA7QUFDRCxPQU5TLEVBTVAsRUFOTyxDQURoQjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUEsU0FBUyxLQUFLSSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxnQkFBZ0JMLE9BQU9NLEdBQVAsQ0FBVyxVQUFTQyxLQUFULEVBQWdCO0FBQ3pDLFlBQU1DLGVBQWVkLGFBQWFlLFNBQWIsQ0FBdUJGLEtBQXZCLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUplLENBRHRCOztBQU9BLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXSyxPLEVBQVM7QUFDbkIsVUFBSVYsU0FBU1UsUUFBUU4sU0FBUixFQUFiOztBQUVBLFVBQU1DLGdCQUFnQixLQUFLTSxnQkFBTCxFQUF0Qjs7QUFFQU4sb0JBQWNPLE9BQWQsQ0FBc0IsVUFBU0osWUFBVCxFQUF1QjtBQUMzQyxZQUFNSyxpQkFBaUIsRUFBdkI7O0FBRUFiLGVBQU9ZLE9BQVAsQ0FBZSxVQUFTTCxLQUFULEVBQWdCO0FBQzdCQyx1QkFBYU0sU0FBYixDQUF1QlAsS0FBdkIsRUFBOEJNLGNBQTlCO0FBQ0QsU0FGRDs7QUFJQWIsaUJBQVNhLGNBQVQsQ0FQMkMsQ0FPakI7QUFDM0IsT0FSRDs7QUFVQUgsY0FBUUssU0FBUixDQUFrQmYsTUFBbEI7QUFDRDs7OytCQUVVZ0IsZSxFQUFpQkMsYyxFQUFnQkMsVSxFQUFZQyxNLEVBQVE7QUFDOUQsVUFBTXJCLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQW9CLGVBQVMsSUFBVCxDQUg4RCxDQUc5Qzs7QUFFaEJyQixvQkFBY2MsT0FBZCxDQUFzQixVQUFTVixZQUFULEVBQXVCO0FBQzNDQSxxQkFBYWtCLFVBQWIsQ0FBd0JKLGVBQXhCLEVBQXlDQyxjQUF6QyxFQUF5REMsVUFBekQsRUFBcUVDLE1BQXJFO0FBQ0QsT0FGRDtBQUdEOzs7bUNBRXFCRSxVLEVBQVk7QUFBRSxhQUFPN0IsUUFBUThCLGNBQVIsQ0FBdUJ6QixJQUF2QixFQUE2QndCLFVBQTdCLENBQVA7QUFBa0Q7Ozs7RUFyRHJFN0IsTzs7QUF3RG5CK0IsT0FBT0MsT0FBUCxHQUFpQjNCLElBQWpCIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0RmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSAgY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudEZhY2V0cyA9IGNoaWxkRWxlbWVudC5nZXRGYWNldHMoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHVzaChmYWNldHMsIGNoaWxkRWxlbWVudEZhY2V0cyk7XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuICBcbiAgZ2V0TWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMuZ2V0TWFza2luZ0ZhY2V0cygpO1xuXG4gICAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKG1hc2tpbmdGYWNldCkge1xuICAgICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgICAgZmFjZXRzLmZvckVhY2goZnVuY3Rpb24oZmFjZXQpIHtcbiAgICAgICAgbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpO1xuICAgICAgfSk7XG5cbiAgICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gICAgfSk7XG4gICAgXG4gICAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza2VkID0gdHJ1ZTsgIC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFzaztcbiJdfQ==