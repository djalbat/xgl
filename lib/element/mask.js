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
          maskingFacets = facets.map(MaskingFacet.fromFacet);

      return maskingFacets;
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer, transforms) {
      var childElements = this.getChildElements(),
          masking = true; ///

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms, masking);
      });
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(Mask, properties);
    }
  }]);

  return Mask;
}(Element);

module.exports = Mask;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjaGlsZEVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZnJvbUZhY2V0IiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwibWFza2luZyIsImZvckVhY2giLCJjcmVhdGUiLCJlbGVtZW50IiwiZ2V0TWFza2luZ0ZhY2V0cyIsIm1hc2tpbmdGYWNldCIsInVubWFza2VkRmFjZXRzIiwiZmFjZXQiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLFNBQVVGLGNBQWNHLE1BQWQsQ0FBcUIsVUFBU0QsTUFBVCxFQUFpQkUsWUFBakIsRUFBK0I7QUFDNUQsWUFBTUMscUJBQXFCRCxhQUFhRSxTQUFiLEVBQTNCOztBQUVBUixhQUFLSSxNQUFMLEVBQWFHLGtCQUFiOztBQUVBLGVBQU9ILE1BQVA7QUFDRCxPQU5TLEVBTVAsRUFOTyxDQURoQjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUEsU0FBUyxLQUFLSSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxnQkFBZ0JMLE9BQU9NLEdBQVAsQ0FBV1osYUFBYWEsU0FBeEIsQ0FEdEI7O0FBR0EsYUFBT0YsYUFBUDtBQUNEOzs7MkJBRU1HLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRCxVQUFNWixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNWSxVQUFVLElBRGhCLENBRGtELENBRTNCOztBQUV2QmIsb0JBQWNjLE9BQWQsQ0FBc0IsVUFBU1YsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFXLE1BQWIsQ0FBb0JMLGNBQXBCLEVBQW9DQyxlQUFwQyxFQUFxREMsVUFBckQsRUFBaUVDLE9BQWpFO0FBQ0QsT0FGRDtBQUdEOzs7Z0NBRVdHLE8sRUFBUztBQUNuQixVQUFJZCxTQUFTYyxRQUFRVixTQUFSLEVBQWI7O0FBRUEsVUFBTUMsZ0JBQWdCLEtBQUtVLGdCQUFMLEVBQXRCOztBQUVBVixvQkFBY08sT0FBZCxDQUFzQixVQUFTSSxZQUFULEVBQXVCO0FBQzNDLFlBQU1DLGlCQUFpQixFQUF2Qjs7QUFFQWpCLGVBQU9ZLE9BQVAsQ0FBZSxVQUFTTSxLQUFULEVBQWdCO0FBQzdCRix1QkFBYUcsU0FBYixDQUF1QkQsS0FBdkIsRUFBOEJELGNBQTlCO0FBQ0QsU0FGRDs7QUFJQWpCLGlCQUFTaUIsY0FBVCxDQVAyQyxDQU9qQjtBQUMzQixPQVJEOztBQVVBSCxjQUFRTSxTQUFSLENBQWtCcEIsTUFBbEI7QUFDRDs7O21DQUVxQnFCLFUsRUFBWTtBQUFFLGFBQU83QixRQUFROEIsY0FBUixDQUF1QnpCLElBQXZCLEVBQTZCd0IsVUFBN0IsQ0FBUDtBQUFrRDs7OztFQWhEckU3QixPOztBQW1EbkIrQixPQUFPQyxPQUFQLEdBQWlCM0IsSUFBakIiLCJmaWxlIjoibWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2tpbmdGYWNldCA9IHJlcXVpcmUoJy4uL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9ICBjaGlsZEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihmYWNldHMsIGNoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50RmFjZXRzID0gY2hpbGRFbGVtZW50LmdldEZhY2V0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdXNoKGZhY2V0cywgY2hpbGRFbGVtZW50RmFjZXRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG4gIFxuICBnZXRNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoTWFza2luZ0ZhY2V0LmZyb21GYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgbWFza2luZyA9IHRydWU7ICAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2luZyk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcbiAgICBcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5nZXRNYXNraW5nRmFjZXRzKCk7XG5cbiAgICBtYXNraW5nRmFjZXRzLmZvckVhY2goZnVuY3Rpb24obWFza2luZ0ZhY2V0KSB7XG4gICAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cyk7XG4gICAgICB9KTtcblxuICAgICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgICB9KTtcbiAgICBcbiAgICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuIl19