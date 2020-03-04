'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require('../element'),
    MaskingFacet = require('../primitive/maskingFacet'),
    arrayUtilities = require('../utilities/array');

var push = arrayUtilities.push;

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
        var maskingFacet = MaskingFacet.fromFacet(facet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2suanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJNYXNraW5nRmFjZXQiLCJhcnJheVV0aWxpdGllcyIsInB1c2giLCJNYXNrIiwiaGlkZGVuIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmYWNldHMiLCJyZXRyaWV2ZUZhY2V0cyIsIm1hc2tpbmdGYWNldHMiLCJtYXAiLCJmYWNldCIsIm1hc2tpbmdGYWNldCIsImZyb21GYWNldCIsImVsZW1lbnQiLCJyZXRyaWV2ZU1hc2tpbmdGYWNldHMiLCJtYXNrRWxlbWVudCIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsInByb3BlcnRpZXMiLCJtYXNrIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsImVsZW1lbnRGYWNldHMiLCJnZXRGYWNldHMiLCJ1bm1hc2tlZEZhY2V0cyIsIm1hc2tGYWNldCIsInNldEZhY2V0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxPQUFPLENBQUMsWUFBRCxDQUF2QjtBQUFBLElBQ01DLFlBQVksR0FBR0QsT0FBTyxDQUFDLDJCQUFELENBRDVCO0FBQUEsSUFFTUUsY0FBYyxHQUFHRixPQUFPLENBQUMsb0JBQUQsQ0FGOUI7O0lBSVFHLEksR0FBU0QsYyxDQUFUQyxJOztJQUVGQyxJOzs7QUFDSixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUFBOztBQUNsQjtBQUVBLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs0Q0FFdUI7QUFDdEIsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsTUFBTSxHQUFHQyxjQUFjLENBQUNILGFBQUQsQ0FEN0I7QUFBQSxVQUVNSSxhQUFhLEdBQUdGLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVB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QUNSOztBQUU5QkYsSUFBQUEsWUFBVyxDQUFDRixPQUFELEVBQVVMLGFBQVYsQ0FBWDtBQUNELEdBSkQ7QUFLRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIE1hc2tpbmdGYWNldCA9IHJlcXVpcmUoJy4uL3ByaW1pdGl2ZS9tYXNraW5nRmFjZXQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaGlkZGVuID0gaGlkZGVuO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMpKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHModGhpcy5oaWRkZW4pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaGlkZGVuID0gZmFsc2UgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgaGlkZGVuKTtcblxuICAgIG1hc2suaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNrO1xuXG5mdW5jdGlvbiByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMgPSBbXSkge1xuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQsIC8vL1xuICAgICAgICAgIGVsZW1lbnRGYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHB1c2goZmFjZXRzLCBlbGVtZW50RmFjZXRzKTtcblxuICAgIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyk7XG4gIH0pO1xuXG4gIHJldHVybiBmYWNldHM7XG59XG5cbmZ1bmN0aW9uIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpIHtcbiAgbGV0IGZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCk7XG5cbiAgbWFza2luZ0ZhY2V0cy5mb3JFYWNoKChtYXNraW5nRmFjZXQpID0+IHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBtYXNraW5nRmFjZXQubWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykpO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMpO1xuICB9KTtcbn1cbiJdfQ==