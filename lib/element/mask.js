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
      var maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

      _maskElement(element, maskingFacets);

      childElements.forEach(function (childElement) {
        return _maskElement(childElement, maskingFacets);
      });
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.createFacets();
      });

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsImVsZW1lbnQiLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsInByb3BlcnRpZXMiLCJtYXNrIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLDJCQUFSLENBRHJCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxJLEdBQVNELGMsQ0FBVEMsSTs7SUFFRkMsSTs7Ozs7Ozs7Ozs7NENBQ29CO0FBQ3RCLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLFNBQVNDLGVBQWVILGFBQWYsQ0FEZjtBQUFBLFVBRU1JLGdCQUFnQkYsT0FBT0csR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxZQUFNQyxlQUFlWCxhQUFhWSxTQUFiLENBQXVCRixLQUF2QixDQUFyQjs7QUFFQSxlQUFPQyxZQUFQO0FBQ0QsT0FKZSxDQUZ0Qjs7QUFRQSxhQUFPSCxhQUFQO0FBQ0Q7OztnQ0FFV0ssTyxFQUFTO0FBQ25CLFVBQU1MLGdCQUFnQixLQUFLTSxxQkFBTCxFQUF0QjtBQUFBLFVBQ01WLGdCQUFnQlMsUUFBUVIsZ0JBQVIsRUFEdEI7O0FBR0FVLG1CQUFZRixPQUFaLEVBQXFCTCxhQUFyQjs7QUFFQUosb0JBQWNZLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCRixhQUFZRSxZQUFaLEVBQTBCVCxhQUExQixDQUFsQjtBQUFBLE9BQXRCO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1KLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0Qjs7QUFFQUQsb0JBQWNZLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhQyxZQUFiLEVBQWxCO0FBQUEsT0FBdEI7O0FBRUFkLG9CQUFjWSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUUsdUJBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTUMsT0FBT3ZCLFFBQVF3QixjQUFSLENBQXVCbkIsSUFBdkIsRUFBNkJpQixVQUE3QixDQUFiOztBQUVBQyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXBDZ0J2QixPOztBQXVDbkIwQixPQUFPQyxPQUFQLEdBQWlCdEIsSUFBakI7O0FBRUEsU0FBU0ksY0FBVCxDQUF3QkgsYUFBeEIsRUFBb0Q7QUFBQSxNQUFiRSxNQUFhLHVFQUFKLEVBQUk7O0FBQ2xERixnQkFBY1ksT0FBZCxDQUFzQixVQUFDQyxZQUFELEVBQWtCO0FBQ3RDLFFBQU1KLFVBQVVJLFlBQWhCO0FBQUEsUUFBOEI7QUFDeEJTLG9CQUFnQmIsUUFBUWMsU0FBUixFQUR0QjtBQUFBLFFBRU12QixnQkFBZ0JTLFFBQVFSLGdCQUFSLEVBRnRCOztBQUlBSCxTQUFLSSxNQUFMLEVBQWFvQixhQUFiOztBQUVBbkIsbUJBQWVILGFBQWYsRUFBOEJFLE1BQTlCO0FBQ0QsR0FSRDs7QUFVQSxTQUFPQSxNQUFQO0FBQ0Q7O0FBRUQsU0FBU1MsWUFBVCxDQUFxQkYsT0FBckIsRUFBOEJMLGFBQTlCLEVBQTZDO0FBQzNDLE1BQUlGLFNBQVNPLFFBQVFjLFNBQVIsRUFBYjs7QUFFQW5CLGdCQUFjUSxPQUFkLENBQXNCLFVBQUNMLFlBQUQsRUFBa0I7QUFDdEMsUUFBTWlCLGlCQUFpQixFQUF2Qjs7QUFFQXRCLFdBQU9VLE9BQVAsQ0FBZSxVQUFDTixLQUFEO0FBQUEsYUFBV0MsYUFBYWtCLFNBQWIsQ0FBdUJuQixLQUF2QixFQUE4QmtCLGNBQTlCLENBQVg7QUFBQSxLQUFmOztBQUVBdEIsYUFBU3NCLGNBQVQsQ0FMc0MsQ0FLWjtBQUMzQixHQU5EOztBQVFBZixVQUFRaUIsU0FBUixDQUFrQnhCLE1BQWxCOztBQUVBLE1BQU1GLGdCQUFnQlMsUUFBUVIsZ0JBQVIsRUFBdEI7O0FBRUFELGdCQUFjWSxPQUFkLENBQXNCLFVBQUNDLFlBQUQsRUFBa0I7QUFDdEMsUUFBTUosVUFBVUksWUFBaEIsQ0FEc0MsQ0FDUjs7QUFFOUJGLGlCQUFZRixPQUFaLEVBQXFCTCxhQUFyQjtBQUNELEdBSkQ7QUFLRCIsImZpbGUiOiJtYXNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgTWFza2luZ0ZhY2V0ID0gcmVxdWlyZSgnLi4vcHJpbWl0aXZlL21hc2tpbmdGYWNldCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBwdXNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMpO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIl19