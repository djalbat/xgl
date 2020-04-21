"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

var _colour = _interopRequireDefault(require("../renderer/colour"));

var _images = _interopRequireDefault(require("../renderer/texture/images"));

var _imageMap = _interopRequireDefault(require("../renderer/texture/imageMap"));

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

var Part = /*#__PURE__*/function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    var _this;

    _classCallCheck(this, Part);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Part).call(this));
    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageTiling = imageTiling;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    _this.hidden = hidden;
    return _this;
  }

  _createClass(Part, [{
    key: "render",
    value: function render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
    }
  }, {
    key: "initialise",
    value: function initialise(canvas) {
      var _this2 = this;

      var textureRenderer = null;

      var colourRenderer = _colour["default"].fromNothing(canvas);

      if (this.images) {
        var imagesTextureRenderer = _images["default"].fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);

        textureRenderer = imagesTextureRenderer; ///
      }

      if (this.imageMap) {
        var imageMapTextureRenderer = _imageMap["default"].fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);

        textureRenderer = imageMapTextureRenderer; ///
      }

      var childElements = this.getChildElements();
      childElements.forEach(function (childElement) {
        return childElement.createFacets(_this2.hidden);
      });
      childElements.forEach(function (childElement) {
        return childElement.amendFacets();
      });
      childElements.forEach(function (childElement) {
        return childElement.addFacets(colourRenderer, textureRenderer);
      });
      colourRenderer && colourRenderer.createBuffers(canvas); ///

      textureRenderer && textureRenderer.createBuffers(canvas); ///

      this.colourRenderer = colourRenderer;
      this.textureRenderer = textureRenderer;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var _properties$images = properties.images,
          images = _properties$images === void 0 ? null : _properties$images,
          _properties$imageMap = properties.imageMap,
          imageMap = _properties$imageMap === void 0 ? null : _properties$imageMap,
          _properties$imageName = properties.imageNames,
          imageNames = _properties$imageName === void 0 ? null : _properties$imageName,
          _properties$imageTili = properties.imageTiling,
          imageTiling = _properties$imageTili === void 0 ? false : _properties$imageTili,
          _properties$imageMapJ = properties.imageMapJSON,
          imageMapJSON = _properties$imageMapJ === void 0 ? null : _properties$imageMapJ,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === void 0 ? false : _properties$hidden,
          colourRenderer = null,
          textureRenderer = null,
          part = _element["default"].fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);

      return part;
    }
  }]);

  return Part;
}(_element["default"]);

exports["default"] = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiUGFydCIsImltYWdlcyIsImltYWdlTWFwIiwiaW1hZ2VOYW1lcyIsImltYWdlVGlsaW5nIiwiaW1hZ2VNYXBKU09OIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJoaWRkZW4iLCJjYW52YXMiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsInJlbmRlciIsIkNvbG91clJlbmRlcmVyIiwiZnJvbU5vdGhpbmciLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJJbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nIiwiaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTiIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZUZhY2V0cyIsImFtZW5kRmFjZXRzIiwiYWRkRmFjZXRzIiwiY3JlYXRlQnVmZmVycyIsInByb3BlcnRpZXMiLCJwYXJ0IiwiRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7QUFDbkIsZ0JBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxVQUE5QixFQUEwQ0MsV0FBMUMsRUFBdURDLFlBQXZELEVBQXFFQyxjQUFyRSxFQUFxRkMsZUFBckYsRUFBc0dDLE1BQXRHLEVBQThHO0FBQUE7O0FBQUE7O0FBQzVHO0FBRUEsVUFBS1AsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFL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QzJCNUIsV0FEM0I7QUFBQSxVQUMyQkEsV0FEM0Isc0NBQ3lDLEtBRHpDO0FBQUEsa0NBQ3dGNEIsVUFEeEYsQ0FDZ0QzQixZQURoRDtBQUFBLFVBQ2dEQSxZQURoRCxzQ0FDK0QsSUFEL0Q7QUFBQSwrQkFDd0YyQixVQUR4RixDQUNxRXhCLE1BRHJFO0FBQUEsVUFDcUVBLE1BRHJFLG1DQUM4RSxLQUQ5RTtBQUFBLFVBRTFCRixjQUYwQixHQUVULElBRlM7QUFBQSxVQUcxQkMsZUFIMEIsR0FHUixJQUhRO0FBQUEsVUFJMUIwQixJQUowQixHQUluQkMsb0JBQVFDLGNBQVIsQ0FBdUJuQyxJQUF2QixFQUE2QmdDLFVBQTdCLEVBQXlDL0IsTUFBekMsRUFBaURDLFFBQWpELEVBQTJEQyxVQUEzRCxFQUF1RUMsV0FBdkUsRUFBb0ZDLFlBQXBGLEVBQWtHQyxjQUFsRyxFQUFrSEMsZUFBbEgsRUFBbUlDLE1BQW5JLENBSm1COztBQU1oQyxhQUFPeUIsSUFBUDtBQUNEOzs7O0VBOUQrQkMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGNvbG91clJlbmRlcmVyICYmIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIgJiYgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cbiJdfQ==