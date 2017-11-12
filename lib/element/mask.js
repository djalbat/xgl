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
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });
    }
  }, {
    key: 'maskElement',
    value: function maskElement(element) {
      var facets = element.getFacets();

      var maskingFacets = this.getMaskingFacets();

      maskingFacets.forEach(function (maskingFacet) {
        var maskedFacets = [];

        facets.forEach(function (facet) {
          maskingFacet.maskFacet(facet, maskedFacets);
        });

        facets = maskedFacets; ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjaGlsZEVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZnJvbUZhY2V0IiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ0cmFuc2Zvcm1zIiwiZm9yRWFjaCIsImNyZWF0ZSIsImVsZW1lbnQiLCJnZXRNYXNraW5nRmFjZXRzIiwibWFza2luZ0ZhY2V0IiwibWFza2VkRmFjZXRzIiwiZmFjZXQiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGVBQWVELFFBQVEsaUJBQVIsQ0FEckI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsb0JBQVIsQ0FGdkI7O0lBS1FHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7Ozs7Ozs7OztnQ0FDUTtBQUNWLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLFNBQVVGLGNBQWNHLE1BQWQsQ0FBcUIsVUFBU0QsTUFBVCxFQUFpQkUsWUFBakIsRUFBK0I7QUFDNUQsWUFBTUMscUJBQXFCRCxhQUFhRSxTQUFiLEVBQTNCOztBQUVBUixhQUFLSSxNQUFMLEVBQWFHLGtCQUFiOztBQUVBLGVBQU9ILE1BQVA7QUFDRCxPQU5TLEVBTVAsRUFOTyxDQURoQjs7QUFTQSxhQUFPQSxNQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUEsU0FBUyxLQUFLSSxTQUFMLEVBQWY7QUFBQSxVQUNNQyxnQkFBZ0JMLE9BQU9NLEdBQVAsQ0FBV1osYUFBYWEsU0FBeEIsQ0FEdEI7O0FBR0EsYUFBT0YsYUFBUDtBQUNEOzs7MkJBRU1HLGMsRUFBZ0JDLGUsRUFBaUJDLFUsRUFBWTtBQUNsRCxVQUFNWixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjYSxPQUFkLENBQXNCLFVBQVNULFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhVSxNQUFiLENBQW9CSixjQUFwQixFQUFvQ0MsZUFBcEMsRUFBcURDLFVBQXJEO0FBQ0QsT0FGRDtBQUdEOzs7Z0NBRVdHLE8sRUFBUztBQUNuQixVQUFJYixTQUFTYSxRQUFRVCxTQUFSLEVBQWI7O0FBRUEsVUFBTUMsZ0JBQWdCLEtBQUtTLGdCQUFMLEVBQXRCOztBQUVBVCxvQkFBY00sT0FBZCxDQUFzQixVQUFTSSxZQUFULEVBQXVCO0FBQzNDLFlBQU1DLGVBQWUsRUFBckI7O0FBRUFoQixlQUFPVyxPQUFQLENBQWUsVUFBU00sS0FBVCxFQUFnQjtBQUM3QkYsdUJBQWFHLFNBQWIsQ0FBdUJELEtBQXZCLEVBQThCRCxZQUE5QjtBQUNELFNBRkQ7O0FBSUFoQixpQkFBU2dCLFlBQVQsQ0FQMkMsQ0FPbkI7QUFDekIsT0FSRDs7QUFVQUgsY0FBUU0sU0FBUixDQUFrQm5CLE1BQWxCO0FBQ0Q7OzttQ0FFcUJvQixVLEVBQVk7QUFBRSxhQUFPNUIsUUFBUTZCLGNBQVIsQ0FBdUJ4QixJQUF2QixFQUE2QnVCLFVBQTdCLENBQVA7QUFBa0Q7Ozs7RUEvQ3JFNUIsTzs7QUFrRG5COEIsT0FBT0MsT0FBUCxHQUFpQjFCLElBQWpCIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9ICBjaGlsZEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihmYWNldHMsIGNoaWxkRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50RmFjZXRzID0gY2hpbGRFbGVtZW50LmdldEZhY2V0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwdXNoKGZhY2V0cywgY2hpbGRFbGVtZW50RmFjZXRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG4gIFxuICBnZXRNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoTWFza2luZ0ZhY2V0LmZyb21GYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIHRyYW5zZm9ybXMpO1xuICAgIH0pO1xuICB9XG4gIFxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG4gICAgXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMuZ2V0TWFza2luZ0ZhY2V0cygpO1xuXG4gICAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKG1hc2tpbmdGYWNldCkge1xuICAgICAgY29uc3QgbWFza2VkRmFjZXRzID0gW107XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICAgIG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIG1hc2tlZEZhY2V0cyk7XG4gICAgICB9KTtcblxuICAgICAgZmFjZXRzID0gbWFza2VkRmFjZXRzOyAgLy8vXG4gICAgfSk7XG4gICAgXG4gICAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFzaztcbiJdfQ==