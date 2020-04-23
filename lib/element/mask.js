"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _maskingFacet = _interopRequireDefault(require("../primitive/maskingFacet"));

var _array = require("../utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Mask = /*#__PURE__*/function (_Element) {
  _inherits(Mask, _Element);

  var _super = _createSuper(Mask);

  function Mask(hidden) {
    var _this;

    _classCallCheck(this, Mask);

    _this = _super.call(this);
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

exports["default"] = Mask;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiXSwibmFtZXMiOlsiTWFzayIsImhpZGRlbiIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJNYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJlbGVtZW50IiwicmV0cmlldmVNYXNraW5nRmFjZXRzIiwibWFza0VsZW1lbnQiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwiYW1lbmRGYWNldHMiLCJwcm9wZXJ0aWVzIiwibWFzayIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJlbGVtZW50RmFjZXRzIiwiZ2V0RmFjZXRzIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7OztBQUNuQixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNsQjtBQUVBLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs0Q0FFdUI7QUFDdEIsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsTUFBTSxHQUFHQyxjQUFjLENBQUNILGFBQUQsQ0FEN0I7QUFBQSxVQUVNSSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUNwQyxZQUFNQyxZQUFZLEdBQUdDLHlCQUFhQyxTQUFiLENBQXVCSCxLQUF2QixDQUFyQjs7QUFFQSxlQUFPQyxZQUFQO0FBQ0QsT0FKZSxDQUZ0QjtBQVFBLGFBQU9ILGFBQVA7QUFDRDs7O2dDQUVXTSxPLEVBQVM7QUFDbkIsVUFBTU4sYUFBYSxHQUFHLEtBQUtPLHFCQUFMLEVBQXRCO0FBQUEsVUFDTVgsYUFBYSxHQUFHVSxPQUFPLENBQUNULGdCQUFSLEVBRHRCOztBQUdBVyxNQUFBQSxZQUFXLENBQUNGLE9BQUQsRUFBVU4sYUFBVixDQUFYOztBQUVBSixNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCRixZQUFXLENBQUNFLFlBQUQsRUFBZVYsYUFBZixDQUE3QjtBQUFBLE9BQXRCO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFVBQU1KLGFBQWEsR0FBRyxLQUFLQyxnQkFBTCxFQUF0QjtBQUVBRCxNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxZQUFZLENBQUNDLFlBQWIsQ0FBMEIsTUFBSSxDQUFDaEIsTUFBL0IsQ0FBbEI7QUFBQSxPQUF0QjtBQUVBQyxNQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxZQUFZLENBQUNFLFdBQWIsRUFBbEI7QUFBQSxPQUF0QjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFBQSwrQkFDTEEsVUFESyxDQUN4QmxCLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLG1DQUNmLEtBRGU7QUFBQSxVQUUxQm1CLElBRjBCLEdBRW5CQyxvQkFBUUMsY0FBUixDQUF1QnRCLElBQXZCLEVBQTZCbUIsVUFBN0IsRUFBeUNsQixNQUF6QyxDQUZtQjs7QUFJaENtQixNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUEzQytCQyxtQjs7OztBQThDbEMsU0FBU2hCLGNBQVQsQ0FBd0JILGFBQXhCLEVBQW9EO0FBQUEsTUFBYkUsTUFBYSx1RUFBSixFQUFJO0FBQ2xERixFQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QyxRQUFNSixPQUFPLEdBQUdJLFlBQWhCO0FBQUEsUUFBOEI7QUFDeEJRLElBQUFBLGFBQWEsR0FBR1osT0FBTyxDQUFDYSxTQUFSLEVBRHRCO0FBQUEsUUFFTXZCLGFBQWEsR0FBR1UsT0FBTyxDQUFDVCxnQkFBUixFQUZ0QjtBQUlBLHFCQUFLQyxNQUFMLEVBQWFvQixhQUFiO0FBRUFuQixJQUFBQSxjQUFjLENBQUNILGFBQUQsRUFBZ0JFLE1BQWhCLENBQWQ7QUFDRCxHQVJEO0FBVUEsU0FBT0EsTUFBUDtBQUNEOztBQUVELFNBQVNVLFlBQVQsQ0FBcUJGLE9BQXJCLEVBQThCTixhQUE5QixFQUE2QztBQUMzQyxNQUFJRixNQUFNLEdBQUdRLE9BQU8sQ0FBQ2EsU0FBUixFQUFiO0FBRUFuQixFQUFBQSxhQUFhLENBQUNTLE9BQWQsQ0FBc0IsVUFBQ04sWUFBRCxFQUFrQjtBQUN0QyxRQUFNaUIsY0FBYyxHQUFHLEVBQXZCO0FBRUF0QixJQUFBQSxNQUFNLENBQUNXLE9BQVAsQ0FBZSxVQUFDUCxLQUFEO0FBQUEsYUFBV0MsWUFBWSxDQUFDa0IsU0FBYixDQUF1Qm5CLEtBQXZCLEVBQThCa0IsY0FBOUIsQ0FBWDtBQUFBLEtBQWY7QUFFQXRCLElBQUFBLE1BQU0sR0FBR3NCLGNBQVQsQ0FMc0MsQ0FLWjtBQUMzQixHQU5EO0FBUUFkLEVBQUFBLE9BQU8sQ0FBQ2dCLFNBQVIsQ0FBa0J4QixNQUFsQjtBQUVBLE1BQU1GLGFBQWEsR0FBR1UsT0FBTyxDQUFDVCxnQkFBUixFQUF0QjtBQUVBRCxFQUFBQSxhQUFhLENBQUNhLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFrQjtBQUN0QyxRQUFNSixPQUFPLEdBQUdJLFlBQWhCLENBRHNDLENBQ1I7O0FBRTlCRixJQUFBQSxZQUFXLENBQUNGLE9BQUQsRUFBVU4sYUFBVixDQUFYO0FBQ0QsR0FKRDtBQUtEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcbiAgfSk7XG59XG4iXX0=