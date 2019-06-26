'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    ImagesTextureRenderer = require('../renderer/texture/images'),
    ImageMapTextureRenderer = require('../renderer/texture/imageMap');

var Part = function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

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
    key: 'render',
    value: function render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix); ///
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$images = properties.images,
          images = _properties$images === undefined ? null : _properties$images,
          _properties$imageMap = properties.imageMap,
          imageMap = _properties$imageMap === undefined ? null : _properties$imageMap,
          _properties$imageName = properties.imageNames,
          imageNames = _properties$imageName === undefined ? null : _properties$imageName,
          _properties$imageTili = properties.imageTiling,
          imageTiling = _properties$imageTili === undefined ? false : _properties$imageTili,
          _properties$imageMapJ = properties.imageMapJSON,
          imageMapJSON = _properties$imageMapJ === undefined ? null : _properties$imageMapJ,
          _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer, hidden);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIkltYWdlc1RleHR1cmVSZW5kZXJlciIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiUGFydCIsImltYWdlcyIsImltYWdlTWFwIiwiaW1hZ2VOYW1lcyIsImltYWdlVGlsaW5nIiwiaW1hZ2VNYXBKU09OIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJoaWRkZW4iLCJjYW52YXMiLCJvZmZzZXRNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwicmVuZGVyIiwiZnJvbU5vdGhpbmciLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nIiwiaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04iLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGVGYWNldHMiLCJhbWVuZEZhY2V0cyIsImFkZEZhY2V0cyIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwicGFydCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSx3QkFBd0JGLFFBQVEsNEJBQVIsQ0FGOUI7QUFBQSxJQUdNRywwQkFBMEJILFFBQVEsOEJBQVIsQ0FIaEM7O0lBS01JLEk7OztBQUNKLGdCQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QkMsVUFBOUIsRUFBMENDLFdB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eUNBQ3FCLElBRHJCO0FBQUEsa0NBQ3dGMEIsVUFEeEYsQ0FDMkJ6QixXQUQzQjtBQUFBLFVBQzJCQSxXQUQzQix5Q0FDeUMsS0FEekM7QUFBQSxrQ0FDd0Z5QixVQUR4RixDQUNnRHhCLFlBRGhEO0FBQUEsVUFDZ0RBLFlBRGhELHlDQUMrRCxJQUQvRDtBQUFBLCtCQUN3RndCLFVBRHhGLENBQ3FFckIsTUFEckU7QUFBQSxVQUNxRUEsTUFEckUsc0NBQzhFLEtBRDlFO0FBQUEsVUFFMUJGLGNBRjBCLEdBRVQsSUFGUztBQUFBLFVBRzFCQyxlQUgwQixHQUdSLElBSFE7QUFBQSxVQUkxQnVCLElBSjBCLEdBSW5CbkMsUUFBUW9DLGNBQVIsQ0FBdUIvQixJQUF2QixFQUE2QjZCLFVBQTdCLEVBQXlDNUIsTUFBekMsRUFBaURDLFFBQWpELEVBQTJEQyxVQUEzRCxFQUF1RUMsV0FBdkUsRUFBb0ZDLFlBQXBGLEVBQWtHQyxjQUFsRyxFQUFrSEMsZUFBbEgsRUFBbUlDLE1BQW5JLENBSm1COzs7QUFNaEMsYUFBT3NCLElBQVA7QUFDRDs7OztFQTlEZ0JuQyxPOztBQWlFbkJxQyxPQUFPQyxPQUFQLEdBQWlCakMsSUFBakIiLCJmaWxlIjoicGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcycpLFxuICAgICAgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwJyk7XG5cbmNsYXNzIFBhcnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgaGlkZGVuKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmhpZGRlbiA9IGhpZGRlbjtcbiAgfVxuICBcbiAgcmVuZGVyKGNhbnZhcywgb2Zmc2V0TWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7ICAvLy9cbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgbGV0IHRleHR1cmVSZW5kZXJlciA9IG51bGw7XG5cbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyk7XG5cbiAgICBpZiAodGhpcy5pbWFnZXMpIHtcbiAgICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IEltYWdlc1RleHR1cmVSZW5kZXJlci5mcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKHRoaXMuaW1hZ2VzLCB0aGlzLmltYWdlTmFtZXMsIHRoaXMuaW1hZ2VUaWxpbmcsIGNhbnZhcyk7XG5cbiAgICAgIHRleHR1cmVSZW5kZXJlciA9IGltYWdlc1RleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmltYWdlTWFwKSB7XG4gICAgICBjb25zdCBpbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7ICAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyh0aGlzLmhpZGRlbikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hbWVuZEZhY2V0cygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGNvbG91clJlbmRlcmVyICYmIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIgJiYgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgPSBudWxsLCBpbWFnZU1hcCA9IG51bGwsIGltYWdlTmFtZXMgPSBudWxsLCBpbWFnZVRpbGluZyA9IGZhbHNlLCBpbWFnZU1hcEpTT04gPSBudWxsLCBoaWRkZW4gPSBmYWxzZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBoaWRkZW4pO1xuXG4gICAgcmV0dXJuIHBhcnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0O1xuIl19