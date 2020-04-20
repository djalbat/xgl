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
    ColourRenderer = require("../renderer/colour"),
    ImagesTextureRenderer = require("../renderer/texture/images"),
    ImageMapTextureRenderer = require("../renderer/texture/imageMap");

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
      var colourRenderer = ColourRenderer.fromNothing(canvas);

      if (this.images) {
        var imagesTextureRenderer = ImagesTextureRenderer.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
        textureRenderer = imagesTextureRenderer; ///
      }

      if (this.imageMap) {
        var imageMapTextureRenderer = ImageMapTextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
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
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);
      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIkltYWdlc1RleHR1cmVSZW5kZXJlciIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiUGFydCIsImltYWdlcyIsImltYWdlTWFwIiwiaW1hZ2VOYW1lcyIsImltYWdlVGlsaW5nIiwiaW1hZ2VNYXBKU09OIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJoaWRkZW4iLCJjYW52YXMiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsInJlbmRlciIsImZyb21Ob3RoaW5nIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwiYW1lbmRGYWNldHMiLCJhZGRGYWNldHMiLCJjcmVhdGVCdWZmZXJzIiwicHJvcGVydGllcyIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7QUFBQSxJQUNNQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUQ5QjtBQUFBLElBRU1FLHFCQUFxQixHQUFHRixPQUFPLENBQUMsNEJBQUQsQ0FGckM7QUFBQSxJQUdNRyx1QkFBdUIsR0FBR0gsT0FBTyxDQUFDLDhCQUFELENBSHZDOztJQUtNSSxJOzs7QUFDSixnQkFBWUMsTUFBWixFQUFv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QUR4RixDQUN4QjVCLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLG1DQUNmLElBRGU7QUFBQSxpQ0FDd0Y0QixVQUR4RixDQUNUM0IsUUFEUztBQUFBLFVBQ1RBLFFBRFMscUNBQ0UsSUFERjtBQUFBLGtDQUN3RjJCLFVBRHhGLENBQ1ExQixVQURSO0FBQUEsVUFDUUEsVUFEUixzQ0FDcUIsSUFEckI7QUFBQSxrQ0FDd0YwQixVQUR4RixDQUMyQnpCLFdBRDNCO0FBQUEsVUFDMkJBLFdBRDNCLHNDQUN5QyxLQUR6QztBQUFBLGtDQUN3RnlCLFVBRHhGLENBQ2dEeEIsWUFEaEQ7QUFBQSxVQUNnREEsWUFEaEQsc0NBQytELElBRC9EO0FBQUEsK0JBQ3dGd0IsVUFEeEYsQ0FDcUVyQixNQURyRTtBQUFBLFVBQ3FFQSxNQURyRSxtQ0FDOEUsS0FEOUU7QUFBQSxVQUUxQkYsY0FGMEIsR0FFVCxJQUZTO0FBQUEsVUFHMUJDLGVBSDBCLEdBR1IsSUFIUTtBQUFBLFVBSTFCdUIsSUFKMEIsR0FJbkJuQyxPQUFPLENBQUNvQyxjQUFSLENBQXVCL0IsSUFBdkIsRUFBNkI2QixVQUE3QixFQUF5QzVCLE1BQXpDLEVBQWlEQyxRQUFqRCxFQUEyREMsVUFBM0QsRUFBdUVDLFdBQXZFLEVBQW9GQyxZQUFwRixFQUFrR0MsY0FBbEcsRUFBa0hDLGVBQWxILEVBQW1JQyxNQUFuSSxDQUptQjtBQU1oQyxhQUFPc0IsSUFBUDtBQUNEOzs7O0VBOURnQm5DLE87O0FBaUVuQnFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpDLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKFwiLi4vZWxlbWVudFwiKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL2NvbG91clwiKSxcbiAgICAgIEltYWdlc1RleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiKSxcbiAgICAgIEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZShcIi4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXBcIik7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgJiYgdGhpcy5jb2xvdXJSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTsgIC8vL1xuXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgJiYgdGhpcy50ZXh0dXJlUmVuZGVyZXIucmVuZGVyKGNhbnZhcywgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGNvbG91clJlbmRlcmVyICYmIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIgJiYgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIl19