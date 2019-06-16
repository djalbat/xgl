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

  function Part(hidden, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.hidden = hidden;

    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageTiling = imageTiling;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.colourRenderer && this.colourRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///

      this.textureRenderer && this.textureRenderer.render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix); ///
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      if (this.hidden) {
        return;
      }

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
        return childElement.createFacets();
      });

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
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
      var _properties$hidden = properties.hidden,
          hidden = _properties$hidden === undefined ? false : _properties$hidden,
          _properties$images = properties.images,
          images = _properties$images === undefined ? null : _properties$images,
          _properties$imageMap = properties.imageMap,
          imageMap = _properties$imageMap === undefined ? null : _properties$imageMap,
          _properties$imageName = properties.imageNames,
          imageNames = _properties$imageName === undefined ? null : _properties$imageName,
          _properties$imageTili = properties.imageTiling,
          imageTiling = _properties$imageTili === undefined ? false : _properties$imageTili,
          _properties$imageMapJ = properties.imageMapJSON,
          imageMapJSON = _properties$imageMapJ === undefined ? null : _properties$imageMapJ,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, hidden, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIkltYWdlc1RleHR1cmVSZW5kZXJlciIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiUGFydCIsImhpZGRlbiIsImltYWdlcyIsImltYWdlTWFwIiwiaW1hZ2VOYW1lcyIsImltYWdlVGlsaW5nIiwiaW1hZ2VNYXBKU09OIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJjYW52YXMiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsInJlbmRlciIsImZyb21Ob3RoaW5nIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiY2hpbGRFbGVtZW50cyIsImdldENoaWxkRWxlbWVudHMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwiYXBwbHlUcmFuc2Zvcm1zQW5kTWFza3MiLCJhZGRGYWNldHMiLCJjcmVhdGVCdWZmZXJzIiwicHJvcGVydGllcyIsInBhcnQiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsd0JBQXdCRixRQUFRLDRCQUFSLENBRjlCO0FBQUEsSUFHTUcsMEJBQTBCSCxRQUFRLDhCQUFSLENBSGhDOztJQUtNSSxJOzs7QUFDSixnQkFBWUMsTUFBWixFQUFvQkMsTUFBcEIsRUFBNEJDLFFBQTVCLEVBQXNDQyxVQUF0QyxFQUFrREMsV0FBbEQsRUFBK0RDLFlBQS9ELEVBQTZFQyxjQUE3RSxFQUE2RkMsZUFBN0YsRUFBOEc7QUFBQTs7QUFBQTs7QUFHNUcsVUFBS1AsTUFBTCxHQUFjQSxNQUFkOztBQUVBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQVg0RztBQVk3Rzs7OzsyQkFFTUMsTSxFQUFRQyxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDM0YsV0FBS1AsY0FBTCxJQUF1QixLQUFLQSxjQUFMLENBQW9CUSxNQUFwQixDQUEyQk4sTUFBM0IsRUFBbUNDLFlBQW5DLEVBQWlEQyxjQUFqRCxFQUFpRUMsY0FBakUsRUFBaUZDLGdCQUFqRixFQUFtR0MsWUFBbkcsQ0FBdkIsQ0FEMkYsQ0FDK0M7O0FBRTFJLFdBQUtOLGVBQUwsSUFBd0IsS0FBS0EsZUFBTCxDQUFxQk8sTUFBckIsQ0FBNEJOLE1BQTVCLEVBQW9DQyxZQUFwQyxFQUFrREMsY0FBbEQsRUFBa0VDLGNBQWxFLEVBQWtGQyxnQkFBbEYsRUFBb0dDLFlBQXBHLENBQXhCLENBSDJGLENBR2lEO0FBQzdJOzs7K0JBRVVMLE0sRUFBUTtBQUNqQixVQUFJLEtBQUtSLE1BQVQsRUFBaUI7QUFDZjtBQUNEOztBQUVELFVBQUlPLGtCQUFrQixJQUF0Qjs7QUFFQSxVQUFNRCxpQkFBaUJWLGVBQWVtQixXQUFmLENBQTJCUCxNQUEzQixDQUF2Qjs7QUFFQSxVQUFJLEtBQUtQLE1BQVQsRUFBaUI7QUFDZixZQUFNZSx3QkFBd0JuQixzQkFBc0JvQixrQ0FBdEIsQ0FBeUQsS0FBS2hCLE1BQTlELEVBQXNFLEtBQUtFLFVBQTNFLEVBQXVGLEtBQUtDLFdBQTVGLEVBQXlHSSxNQUF6RyxDQUE5Qjs7QUFFQUQsMEJBQWtCUyxxQkFBbEIsQ0FIZSxDQUcyQjtBQUMzQzs7QUFFRCxVQUFJLEtBQUtkLFFBQVQsRUFBbUI7QUFDakIsWUFBTWdCLDBCQUEwQnBCLHdCQUF3QnFCLDJCQUF4QixDQUFvRCxLQUFLakIsUUFBekQsRUFBbUUsS0FBS0csWUFBeEUsRUFBc0ZHLE1BQXRGLENBQWhDOztBQUVBRCwwQkFBa0JXLHVCQUFsQixDQUhpQixDQUcyQjtBQUM3Qzs7QUFFRCxVQUFNRSxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7O0FBRUFELG9CQUFjRSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUMsWUFBYixFQUFsQjtBQUFBLE9BQXRCOztBQUVBSixvQkFBY0UsT0FBZCxDQUFzQixVQUFDQyxZQUFEO0FBQUEsZUFBa0JBLGFBQWFFLHVCQUFiLEVBQWxCO0FBQUEsT0FBdEI7O0FBRUFMLG9CQUFjRSxPQUFkLENBQXNCLFVBQUNDLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYUcsU0FBYixDQUF1QnBCLGNBQXZCLEVBQXVDQyxlQUF2QyxDQUFsQjtBQUFBLE9BQXRCOztBQUVBRCx3QkFBa0JBLGVBQWVxQixhQUFmLENBQTZCbkIsTUFBN0IsQ0FBbEIsQ0E3QmlCLENBNkJ1Qzs7QUFFeERELHlCQUFtQkEsZ0JBQWdCb0IsYUFBaEIsQ0FBOEJuQixNQUE5QixDQUFuQixDQS9CaUIsQ0ErQnlDOztBQUUxRCxXQUFLRixjQUFMLEdBQXNCQSxjQUF0Qjs7QUFFQSxXQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7bUNBRXFCcUIsVSxFQUFZO0FBQUEsK0JBQ3VGQSxVQUR2RixDQUN4QjVCLE1BRHdCO0FBQUEsVUFDeEJBLE1BRHdCLHNDQUNmLEtBRGU7QUFBQSwrQkFDdUY0QixVQUR2RixDQUNSM0IsTUFEUTtBQUFBLFVBQ1JBLE1BRFEsc0NBQ0MsSUFERDtBQUFBLGlDQUN1RjJCLFVBRHZGLENBQ08xQixRQURQO0FBQUEsVUFDT0EsUUFEUCx3Q0FDa0IsSUFEbEI7QUFBQSxrQ0FDdUYwQixVQUR2RixDQUN3QnpCLFVBRHhCO0FBQUEsVUFDd0JBLFVBRHhCLHlDQUNxQyxJQURyQztBQUFBLGtDQUN1RnlCLFVBRHZGLENBQzJDeEIsV0FEM0M7QUFBQSxVQUMyQ0EsV0FEM0MseUNBQ3lELEtBRHpEO0FBQUEsa0NBQ3VGd0IsVUFEdkYsQ0FDZ0V2QixZQURoRTtBQUFBLFVBQ2dFQSxZQURoRSx5Q0FDK0UsSUFEL0U7QUFBQSxVQUUxQkMsY0FGMEIsR0FFVCxJQUZTO0FBQUEsVUFHMUJDLGVBSDBCLEdBR1IsSUFIUTtBQUFBLFVBSTFCc0IsSUFKMEIsR0FJbkJuQyxRQUFRb0MsY0FBUixDQUF1Qi9CLElBQXZCLEVBQTZCNkIsVUFBN0IsRUFBeUM1QixNQUF6QyxFQUFpREMsTUFBakQsRUFBeURDLFFBQXpELEVBQW1FQyxVQUFuRSxFQUErRUMsV0FBL0UsRUFBNEZDLFlBQTVGLEVBQTBHQyxjQUExRyxFQUEwSEMsZUFBMUgsQ0FKbUI7OztBQU1oQyxhQUFPc0IsSUFBUDtBQUNEOzs7O0VBbEVnQm5DLE87O0FBcUVuQnFDLE9BQU9DLE9BQVAsR0FBaUJqQyxJQUFqQiIsImZpbGUiOiJwYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgQ29sb3VyUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci9jb2xvdXInKSxcbiAgICAgIEltYWdlc1RleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VzJyksXG4gICAgICBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL3RleHR1cmUvaW1hZ2VNYXAnKTtcblxuY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihoaWRkZW4sIGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlVGlsaW5nLCBpbWFnZU1hcEpTT04sIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5oaWRkZW4gPSBoaWRkZW47XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlVGlsaW5nID0gaW1hZ2VUaWxpbmc7XG4gICAgdGhpcy5pbWFnZU1hcEpTT04gPSBpbWFnZU1hcEpTT047XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICByZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciAmJiB0aGlzLmNvbG91clJlbmRlcmVyLnJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpOyAgLy8vXG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciAmJiB0aGlzLnRleHR1cmVSZW5kZXJlci5yZW5kZXIoY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTsgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBpZiAodGhpcy5oaWRkZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGlmICh0aGlzLmltYWdlcykge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXApIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybXNBbmRNYXNrcygpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpKTtcblxuICAgIGNvbG91clJlbmRlcmVyICYmIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIgJiYgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTsgLy8vXG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBoaWRkZW4gPSBmYWxzZSwgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHBhcnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcnQsIHByb3BlcnRpZXMsIGhpZGRlbiwgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG5cbiAgICByZXR1cm4gcGFydDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnQ7XG4iXX0=