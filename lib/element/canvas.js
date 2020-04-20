"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Element = require("../element"),
    transformUtilities = require("../utilities/transform");

var composeTransform = transformUtilities.composeTransform;

var CanvasElement = /*#__PURE__*/function (_Element) {
  _inherits(CanvasElement, _Element);

  function CanvasElement(transform, facets, mask, hidden) {
    var _this;

    _classCallCheck(this, CanvasElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CanvasElement).call(this));
    _this.transform = transform;
    _this.facets = facets;
    _this.mask = mask;
    _this.hidden = hidden;
    return _this;
  }

  _createClass(CanvasElement, [{
    key: "getTransform",
    value: function getTransform() {
      return this.transform;
    }
  }, {
    key: "getFacets",
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: "getMask",
    value: function getMask() {
      return this.mask;
    }
  }, {
    key: "setFacets",
    value: function setFacets(facets) {
      this.facets = facets;
    }
  }, {
    key: "applyMask",
    value: function applyMask(mask) {
      if (mask) {
        var element = this; ///

        mask.maskElement(element);
      }
    }
  }, {
    key: "applyTransform",
    value: function applyTransform(transform) {
      var childElements = this.getChildElements();
      this.facets.forEach(function (facet) {
        return facet.applyTransform(transform);
      });
      childElements.forEach(function (childElement) {
        return childElement.applyTransform(transform);
      });
    }
  }, {
    key: "createFacets",
    value: function createFacets(hidden) {
      var childElements = this.getChildElements();
      hidden = hidden || this.hidden; ///

      childElements.forEach(function (childElement) {
        return childElement.createFacets(hidden);
      });
      return hidden;
    }
  }, {
    key: "amendFacets",
    value: function amendFacets() {
      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
      this.applyTransform(this.transform);
      this.applyMask(this.mask);
    }
  }, {
    key: "addFacets",
    value: function addFacets(colourRenderer, textureRenderer) {
      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var _properties$scale = properties.scale,
          scale = _properties$scale === void 0 ? null : _properties$scale,
          _properties$rotations = properties.rotations,
          rotations = _properties$rotations === void 0 ? null : _properties$rotations,
          _properties$position = properties.position,
          position = _properties$position === void 0 ? null : _properties$position,
          _properties$mask = properties.mask,
          mask = _properties$mask === void 0 ? null : _properties$mask,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          transform = composeTransform(scale, rotations, position),
          facets = [],
          canvasElement = Element.fromProperties.apply(Element, [Class, properties, transform, facets, mask, hidden].concat(remainingArguments));
      return canvasElement;
    }
  }]);

  return CanvasElement;
}(Element);

module.exports = CanvasElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsInRyYW5zZm9ybVV0aWxpdGllcyIsImNvbXBvc2VUcmFuc2Zvcm0iLCJDYW52YXNFbGVtZW50IiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImVsZW1lbnQiLCJtYXNrRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImZhY2V0IiwiYXBwbHlUcmFuc2Zvcm0iLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsImFwcGx5TWFzayIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiYWRkRmFjZXRzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwic2NhbGUiLCJyb3RhdGlvbnMiLCJwb3NpdGlvbiIsImNhbnZhc0VsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0IsR0FBR0QsT0FBTyxDQUFDLHdCQUFELENBRGxDOztJQUdRRSxnQixHQUFxQkQsa0IsQ0FBckJDLGdCOztJQUVGQyxhOzs7QUFDSix5QkFBWUMsU0FBWixFQUF1QkMsTUFBdkIsRUFBK0JDLElBQS9CLEVBQXFDQyxNQUFyQyxFQUE2QztBQUFBOztBQUFBOztBQUMzQztBQUVBLFVBQUtILFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBRUEsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBUDJDO0FBUTVDOzs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLSCxTQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFB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LE87O0FBK0U1QitCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVCLGFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKSxcbiAgICAgIHRyYW5zZm9ybVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCIpO1xuXG5jb25zdCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSA9IHRyYW5zZm9ybVV0aWxpdGllcztcblxuY2xhc3MgQ2FudmFzRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFzayA9IG1hc2s7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFzaygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrO1xuICB9XG5cbiAgc2V0RmFjZXRzKGZhY2V0cykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICB9XG5cbiAgYXBwbHlNYXNrKG1hc2spIHtcbiAgICBpZiAobWFzaykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBtYXNrLm1hc2tFbGVtZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIHRoaXMuZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiBmYWNldC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgaGlkZGVuID0gaGlkZGVuIHx8IHRoaXMuaGlkZGVuOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKGhpZGRlbikpO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIGFtZW5kRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYW1lbmRGYWNldHMoKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTtcblxuICAgIHRoaXMuYXBwbHlNYXNrKHRoaXMubWFzayk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBzY2FsZSA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwsIHBvc2l0aW9uID0gbnVsbCwgbWFzayA9IG51bGwsIGhpZGRlbiA9IGZhbHNlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHJvdGF0aW9ucywgcG9zaXRpb24pLFxuICAgICAgICAgIGZhY2V0cyA9IFtdLFxuICAgICAgICAgIGNhbnZhc0VsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGNhbnZhc0VsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW52YXNFbGVtZW50O1xuIl19