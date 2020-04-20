"use strict";

var _element = _interopRequireDefault(require("../element"));

var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Mask = /*#__PURE__*/function (_Element) {
  _inherits(Mask, _Element);

  function Mask(hidden) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this));
    _this.hidden = hidden;
    return _this;
  }

  _createClass(Mask, [{
    key: "retrieveMaskingFacets",
    value: function retrieveMaskingFacets() {
      var childElements = this.getChildElements(),
          facets = retrieveFacets(childElements),
          maskingFacets = facets.map(function (facet) {
        var maskingFacet = _maskingFacet["default"].fromFacet(facet);

        return maskingFacet;
      });
      return maskingFacets;
    }
  }, {
    key: "maskElement",
    value: function maskElement(element) {
      var maskingFacets = this.retrieveMaskingFacets(),
          childElements = element.getChildElements();

      _maskElement(element, maskingFacets);

      childElements.forEach(function (childElement) {
        return _maskElement(childElement, maskingFacets);
      });
    }
  }, {
    key: "initialise",
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
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          mask = _element["default"].fromProperties(Mask, properties, hidden);

      mask.initialise();
      return mask;
    }
  }]);

  return Mask;
}(_element["default"]);

module.exports = Mask;

function retrieveFacets(childElements) {
  var facets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  childElements.forEach(function (childElement) {
    var element = childElement,
        ///
    elementFacets = element.getFacets(),
        childElements = element.getChildElements();
    (0, _array.push)(facets, elementFacets);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiXSwibmFtZXMiOlsiTWFzayIsImhpZGRlbiIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJNYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJlbGVtZW50IiwicmV0cmlldmVNYXNraW5nRmFjZXRzIiwibWFza0VsZW1lbnQiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwiYW1lbmRGYWNldHMiLCJwcm9wZXJ0aWVzIiwibWFzayIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiZWxlbWVudEZhY2V0cyIsImdldEZhY2V0cyIsInVubWFza2VkRmFjZXRzIiwibWFza0ZhY2V0Iiwic2V0RmFjZXRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxJOzs7QUFDSixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNsQjtBQUVBLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs0Q0FFdUI7QUFDdEIsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsTUFBTSxHQUFHQyxjQUFjLENBQUNILGFBQUQsQ0FEN0I7QUFBQSxVQUVNSSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxZQUFNQyxZQUFZLEdBQUdDLHlCQUFhQyxTQUFiLENBQXVCSCxLQUF2QixDQUFyQjs7QUFFQSxlQUFPQyxZQUFQO0FBQ0QsT0FKZSxDQUZ0QjtBQVFBLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXTSxPLEVBQVM7QUFDbkIsVUFBTU4sYUFBYSxHQUFHLEtBQUtPLHFCQUFMLEVBQXRCO0FBQUEsVUFDTVgsYUFBYSxHQUFHVSxPQUFPLENBQUNULGdCQUFSLEVBRHRCOztBQUdBVyxNQUFBQSxZQUFXLENBQUNGLE9BQUQsRUFBVU4sYUFBVixDQUFYOztBQUVBSixNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCRixZQUFXLENBQUNFLFlBQUQsRUFBZVYsYUFBZixDQUE3QjtBQUFBLE9BQXRCO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU1KLGFBQWEsR0FBRyxLQUFLQyxnQkFBTCxFQUF0QjtBQUVBRCxNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxZQUFZLENBQUNDLFlBQWIsQ0FBMEIsTUFBSSxDQUFDaEIsTUFBL0IsQ0FBbEI7QUFBQSxPQUF0QjtBQUVBQyxNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxZQUFZLENBQUNFLFdBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBQSwrQkFDTEEsVUFESyxDQUN4QmxCLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLG1DQUNmLEtBRGU7QUFBQSxVQUUxQm1CLElBRjBCLEdBRW5CQyxvQkFBUUMsY0FBUixDQUF1QnRCLElBQXZCLEVBQTZCbUIsVUFBN0IsRUFBeUNsQixNQUF6QyxDQUZtQjs7QUFJaENtQixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUEzQ2dCQyxtQjs7QUE4Q25CRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixJQUFqQjs7QUFFQSxTQUFTSyxjQUFULENBQXdCSCxhQUF4QixFQUFvRDtBQUFBLE1BQWJFLE1BQWEsdUVBQUosRUFBSTtBQUNsREYsRUFBQUEsYUFBYSxDQUFDYSxPQUFkLENBQXNCLFVBQUNDLFlBQUQsRUFBa0I7QUFDdEMsUUFBTUosT0FBTyxHQUFHSSxZQUFoQjtBQUFBLFFBQThCO0FBQ3hCVSxJQUFBQSxhQUFhLEdBQUdkLE9BQU8sQ0FBQ2UsU0FBUixFQUR0QjtBQUFBLFFBRU16QixhQUFhLEdBQUdVLE9BQU8sQ0FBQ1QsZ0JBQVIsRUFGdEI7QUFJQSxxQkFBS0MsTUFBTCxFQUFhc0IsYUFBYjtBQUVBckIsSUFBQUEsY0FBYyxDQUFDSCxhQUFELEVBQWdCRSxNQUFoQixDQUFkO0FBQ0QsR0FSRDtBQVVBLFNBQU9BLE1BQVA7QUFDRDs7QUFFRCxTQUFTVSxZQUFULENBQXFCRixPQUFyQixFQUE4Qk4sYUFBOUIsRUFBNkM7QUFDM0MsTUFBSUYsTUFBTSxHQUFHUSxPQUFPLENBQUNlLFNBQVIsRUFBYjtBQUVBckIsRUFBQUEsYUFBYSxDQUFDUyxPQUFkLENBQXNCLFVBQUNOLFlBQUQsRUFBa0I7QUFDdEMsUUFBTW1CLGNBQWMsR0FBRyxFQUF2QjtBQUVBeEIsSUFBQUEsTUFBTSxDQUFDVyxPQUFQLENBQWUsVUFBQ1AsS0FBRDtBQUFBLGFBQVdDLFlBQVksQ0FBQ29CLFNBQWIsQ0FBdUJyQixLQUF2QixFQUE4Qm9CLGNBQTlCLENBQVg7QUFBQSxLQUFmO0FBRUF4QixJQUFBQSxNQUFNLEdBQUd3QixjQUFULENBTHNDLENBS1o7QUFDM0IsR0FORDtBQVFBaEIsRUFBQUEsT0FBTyxDQUFDa0IsU0FBUixDQUFrQjFCLE1BQWxCO0FBRUEsTUFBTUYsYUFBYSxHQUFHVSxPQUFPLENBQUNULGdCQUFSLEVBQXRCO0FBRUFELEVBQUFBLGFBQWEsQ0FBQ2EsT0FBZCxDQUFzQixVQUFDQyxZQUFELEVBQWtCO0FBQ3RDLFFBQU1KLE9BQU8sR0FBR0ksWUFBaEIsQ0FEc0MsQ0FDUjs7QUFFOUJGLElBQUFBLFlBQVcsQ0FBQ0YsT0FBRCxFQUFVTixhQUFWLENBQVg7QUFDRCxHQUpEO0FBS0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBNYXNraW5nRmFjZXQgZnJvbSBcIi4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXRcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG4gIH1cblxuICByZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGZhY2V0cyA9IHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldHMgPSBmYWNldHMubWFwKChmYWNldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gICAgICAgICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldHM7ICAgICAgICAgIFxuICB9XG5cbiAgbWFza0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IG1hc2tpbmdGYWNldHMgPSB0aGlzLnJldHJpZXZlTWFza2luZ0ZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IG1hc2tFbGVtZW50KGNoaWxkRWxlbWVudCwgbWFza2luZ0ZhY2V0cykpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBtYXNrID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNYXNrLCBwcm9wZXJ0aWVzLCBoaWRkZW4pO1xuXG4gICAgbWFzay5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbWFzaztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2s7XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgcHVzaChmYWNldHMsIGVsZW1lbnRGYWNldHMpO1xuXG4gICAgcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZhY2V0cztcbn1cblxuZnVuY3Rpb24gbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cykge1xuICBsZXQgZmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKTtcblxuICBtYXNraW5nRmFjZXRzLmZvckVhY2goKG1hc2tpbmdGYWNldCkgPT4ge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IG1hc2tpbmdGYWNldC5tYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSk7XG5cbiAgICBmYWNldHMgPSB1bm1hc2tlZEZhY2V0czsgIC8vL1xuICB9KTtcblxuICBlbGVtZW50LnNldEZhY2V0cyhmYWNldHMpO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7IC8vL1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cyk7XG4gIH0pO1xufVxuIl19