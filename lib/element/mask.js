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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjaGlsZEVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJlbGVtZW50IiwiZ2V0TWFza2luZ0ZhY2V0cyIsImZvckVhY2giLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyIsInRleHR1cmVSZW5kZXJlciIsImNvbG91clJlbmRlcmVyIiwidHJhbnNmb3JtcyIsIm1hc2tlZCIsImluaXRpYWxpc2UiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLFNBQVVGLGNBQWNHLE1BQWQsQ0FBcUIsVUFBQ0QsTUFBRCxFQUFTRSxZQUFULEVBQTBCO0FBQ3ZELFlBQU1DLHFCQUFxQkQsYUFBYUUsU0FBYixFQUEzQjs7QUFFQVIsYUFBS0ksTUFBTCxFQUFhRyxrQkFBYjs7QUFFQSxlQUFPSCxNQUFQO0FBQ0QsT0FOUyxFQU1QLEVBTk8sQ0FEaEI7O0FBU0EsYUFBT0EsTUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1BLFNBQVMsS0FBS0ksU0FBTCxFQUFmO0FBQUEsVUFDTUMsZ0JBQWdCTCxPQUFPTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BDLFlBQU1DLGVBQWVkLGFBQWFlLFNBQWIsQ0FBdUJGLEtBQXZCLENBQXJCOztBQUVBLGVBQU9DLFlBQVA7QUFDRCxPQUplLENBRHRCOztBQU9BLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXSyxPLEVBQVM7QUFDbkIsVUFBSVYsU0FBU1UsUUFBUU4sU0FBUixFQUFiOztBQUVBLFVBQU1DLGdCQUFnQixLQUFLTSxnQkFBTCxFQUF0Qjs7QUFFQU4sb0JBQWNPLE9BQWQsQ0FBc0IsVUFBQ0osWUFBRCxFQUFrQjtBQUN0QyxZQUFNSyxpQkFBaUIsRUFBdkI7O0FBRUFiLGVBQU9ZLE9BQVAsQ0FBZSxVQUFDTCxLQUFELEVBQVc7QUFDeEJDLHVCQUFhTSxTQUFiLENBQXVCUCxLQUF2QixFQUE4Qk0sY0FBOUI7QUFDRCxTQUZEOztBQUlBYixpQkFBU2EsY0FBVCxDQVBzQyxDQU9aO0FBQzNCLE9BUkQ7O0FBVUFILGNBQVFLLFNBQVIsQ0FBa0JmLE1BQWxCO0FBQ0Q7OzsrQkFFVWdCLGUsRUFBaUJDLGMsRUFBZ0JDLFUsRUFBWUMsTSxFQUFRO0FBQzlELFVBQU1yQixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFvQixlQUFTLElBQVQsQ0FIOEQsQ0FHOUM7O0FBRWhCckIsb0JBQWNjLE9BQWQsQ0FBc0IsVUFBQ1YsWUFBRCxFQUFrQjtBQUN0Q0EscUJBQWFrQixVQUFiLENBQXdCSixlQUF4QixFQUF5Q0MsY0FBekMsRUFBeURDLFVBQXpELEVBQXFFQyxNQUFyRTtBQUNELE9BRkQ7QUFHRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBTzdCLFFBQVE4QixjQUFSLENBQXVCekIsSUFBdkIsRUFBNkJ3QixVQUE3QixDQUFQO0FBQWtEOzs7O0VBckRyRTdCLE87O0FBd0RuQitCLE9BQU9DLE9BQVAsR0FBaUIzQixJQUFqQiIsImZpbGUiOiJtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vbWFza2luZ0ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gIGNoaWxkRWxlbWVudHMucmVkdWNlKChmYWNldHMsIGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50RmFjZXRzID0gY2hpbGRFbGVtZW50LmdldEZhY2V0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdXNoKGZhY2V0cywgY2hpbGRFbGVtZW50RmFjZXRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG4gIFxuICBnZXRNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMuZ2V0TWFza2luZ0ZhY2V0cygpO1xuXG4gICAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cyk7XG4gICAgICB9KTtcblxuICAgICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgICB9KTtcbiAgICBcbiAgICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh0ZXh0dXJlUmVuZGVyZXIsIGNvbG91clJlbmRlcmVyLCB0cmFuc2Zvcm1zLCBtYXNrZWQpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UodGV4dHVyZVJlbmRlcmVyLCBjb2xvdXJSZW5kZXJlciwgdHJhbnNmb3JtcywgbWFza2VkKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFzaztcbiJdfQ==