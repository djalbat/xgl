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

  function Mask(hidden) {
    _classCallCheck(this, Mask);

    var _this = _possibleConstructorReturn(this, (Mask.__proto__ || Object.getPrototypeOf(Mask)).call(this));

    _this.hidden = hidden;
    return _this;
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
      var _this2 = this;

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        return childElement.createFacets(_this2.hidden);
      });

      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          mask = Element.fromProperties(Mask, properties, hidden);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L21hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiaGlkZGVuIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsImVsZW1lbnQiLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsInByb3BlcnRpZXMiLCJtYXNrIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxlQUFlRCxRQUFRLDJCQUFSLENBRHJCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG9CQUFSLENBRnZCOztJQUlRRyxJLEdBQVNELGMsQ0FBVEMsSTs7SUFFRkMsSTs7O0FBQ0osZ0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBSGtCO0FBSW5COzs7OzRDQUV1QjtBQUN0QixVQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNQyxTQUFTQyxlQUFlSCxhQUFmLENBRGY7QUFBQSxVQUVNSSxnQkFBZ0JGLE9BQU9HLEdBQVAsQ0FBVyxVQUFDQyxLQUFELEVBQVc7QUFDcEMsWUFBTUMsZUFBZVosYUFBYWEsU0FBYixDQUF1QkYsS0FBdkIsQ0FBckI7O0FBRUEsZUFBT0MsWUFBUDtBQUNELE9BSmUsQ0FGdEI7O0FBUUEsYUFBT0gsYUFBUDtBQUNEOzs7Z0NBRVdLLE8sRUFBUztBQUNuQixVQUFNTCxnQkFBZ0IsS0FBS00scUJBQUwsRUFBdEI7QUFBQSxVQUNNVixnQkFBZ0JTLFFBQVFSLGdCQUFSLEVBRHRCOztBQUdBVSxtQkFBWUYsT0FBWixFQUFxQkwsYUFBckI7O0FBRUFKLG9CQUFjWSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkYsYUFBWUUsWUFBWixFQUEwQlQsYUFBMUIsQ0FBbEI7QUFBQSxPQUF0QjtBQUNEOzs7aUNBRVk7QUFBQTs7QUFDWCxVQUFNSixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjWSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUMsWUFBYixDQUEwQixPQUFLZixNQUEvQixDQUFsQjtBQUFBLE9BQXRCOztBQUVBQyxvQkFBY1ksT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFFLFdBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBQSwrQkFDTEEsVUFESyxDQUN4QmpCLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLHNDQUNmLEtBRGU7QUFBQSxVQUUxQmtCLElBRjBCLEdBRW5CeEIsUUFBUXlCLGNBQVIsQ0FBdUJwQixJQUF2QixFQUE2QmtCLFVBQTdCLEVBQXlDakIsTUFBekMsQ0FGbUI7OztBQUloQ2tCLFdBQUtFLFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBM0NnQnhCLE87O0FBOENuQjJCLE9BQU9DLE9BQVAsR0FBaUJ2QixJQUFqQjs7QUFFQSxTQUFTSyxjQUFULENBQXdCSCxhQUF4QixFQUFvRDtBQUFBLE1BQWJFLE1BQWEsdUVBQUosRUFBSTs7QUFDbERGLGdCQUFjWSxPQUFkLENBQXNCLFVBQUNDLFlBQUQsRUFBa0I7QUFDdEMsUUFBTUosVUFBVUksWUFBaEI7QUFBQSxRQUE4QjtBQUN4QlMsb0JBQWdCYixRQUFRYyxTQUFSLEVBRHRCO0FBQUEsUUFFTXZCLGdCQUFnQlMsUUFBUVIsZ0JBQVIsRUFGdEI7O0FBSUFKLFNBQUtLLE1BQUwsRUFBYW9CLGFBQWI7O0FBRUFuQixtQkFBZUgsYUFBZixFQUE4QkUsTUFBOUI7QUFDRCxHQVJEOztBQVVBLFNBQU9BLE1BQVA7QUFDRDs7QUFFRCxTQUFTUyxZQUFULENBQXFCRixPQUFyQixFQUE4QkwsYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUYsU0FBU08sUUFBUWMsU0FBUixFQUFiOztBQUVBbkIsZ0JBQWNRLE9BQWQsQ0FBc0IsVUFBQ0wsWUFBRCxFQUFrQjtBQUN0QyxRQUFNaUIsaUJBQWlCLEVBQXZCOztBQUVBdEIsV0FBT1UsT0FBUCxDQUFlLFVBQUNOLEtBQUQ7QUFBQSxhQUFXQyxhQUFha0IsU0FBYixDQUF1Qm5CLEtBQXZCLEVBQThCa0IsY0FBOUIsQ0FBWDtBQUFBLEtBQWY7O0FBRUF0QixhQUFTc0IsY0FBVCxDQUxzQyxDQUtaO0FBQzNCLEdBTkQ7O0FBUUFmLFVBQVFpQixTQUFSLENBQWtCeEIsTUFBbEI7O0FBRUEsTUFBTUYsZ0JBQWdCUyxRQUFRUixnQkFBUixFQUF0Qjs7QUFFQUQsZ0JBQWNZLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QyxRQUFNSixVQUFVSSxZQUFoQixDQURzQyxDQUNSOztBQUU5QkYsaUJBQVlGLE9BQVosRUFBcUJMLGFBQXJCO0FBQ0QsR0FKRDtBQUtEIiwiZmlsZSI6Im1hc2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBNYXNraW5nRmFjZXQgPSByZXF1aXJlKCcuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNrIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGhpZGRlbikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50KSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzKSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKHRoaXMuaGlkZGVuKSk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFtZW5kRmFjZXRzKCkpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMsIGhpZGRlbik7XG5cbiAgICBtYXNrLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFzaztcblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcbiAgfSk7XG59XG4iXX0=