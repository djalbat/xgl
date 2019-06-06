'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Part = function (_Element) {
  _inherits(Part, _Element);

  function Part(images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer) {
    _classCallCheck(this, Part);

    var _this = _possibleConstructorReturn(this, (Part.__proto__ || Object.getPrototypeOf(Part)).call(this));

    _this.images = images;
    _this.imageMap = imageMap;
    _this.imageNames = imageNames;
    _this.imageMapJSON = imageMapJSON;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Part, [{
    key: 'render',
    value: function render(canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var _this2 = this;

      var colourRendererProgram = this.colourRenderer.getProgram();

      canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(canvas);

      canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      var count = this.colourRenderer.getCount(),
          start = 0,
          finish = count; ///

      canvas.drawElements(start, finish);

      if (this.textureRenderer !== null) {
        var textureRendererProgram = this.textureRenderer.getProgram();

        canvas.useProgram(textureRendererProgram);

        this.textureRenderer.bindBuffers(canvas);

        canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

        var textureOffsets = this.textureRenderer.getTextureOffsets();

        var _start = void 0,
            _finish = 0; ///

        textureOffsets.forEach(function (textureOffset, index) {
          _start = _finish; ///

          _finish += textureOffset; ///

          _this2.textureRenderer.useTexture(index, canvas);

          canvas.drawElements(_start, _finish);
        });
      }
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas) {
      var childElements = this.getChildElements(),
          colourRenderer = ColourRenderer.fromNothing(canvas);

      var textureRenderer = null;

      if (this.images) {
        textureRenderer = TextureRenderer.fromImagesAndImageNames(this.images, this.imageNames, canvas);
      }

      if (this.imageMap) {
        textureRenderer = TextureRenderer.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
      }

      childElements.forEach(function (childElement) {
        return childElement.applyTransformsAndMasks();
      });

      childElements.forEach(function (childElement) {
        return childElement.render(colourRenderer, textureRenderer);
      });

      colourRenderer.createBuffers(canvas);

      if (textureRenderer !== null) {
        textureRenderer.createBuffers(canvas);
      }

      this.colourRenderer = colourRenderer;

      this.textureRenderer = textureRenderer;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var images = properties.images,
          imageMap = properties.imageMap,
          imageNames = properties.imageNames,
          imageMapJSON = properties.imageMapJSON,
          colourRenderer = null,
          textureRenderer = null,
          part = Element.fromProperties(Part, properties, images, imageMap, imageNames, imageMapJSON, colourRenderer, textureRenderer);


      return part;
    }
  }]);

  return Part;
}(Element);

module.exports = Part;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3BhcnQuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDb2xvdXJSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsIlBhcnQiLCJpbWFnZXMiLCJpbWFnZU1hcCIsImltYWdlTmFtZXMiLCJpbWFnZU1hcEpTT04iLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNhbnZhcyIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiY29sb3VyUmVuZGVyZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsInRleHR1cmVSZW5kZXJlclByb2dyYW0iLCJ0ZXh0dXJlT2Zmc2V0cyIsImdldFRleHR1cmVPZmZzZXRzIiwiZm9yRWFjaCIsInRleHR1cmVPZmZzZXQiLCJpbmRleCIsInVzZVRleHR1cmUiLCJjaGlsZEVsZW1lbnRzIiwiZ2V0Q2hpbGRFbGVtZW50cyIsImZyb21Ob3RoaW5nIiwiZnJvbUltYWdlc0FuZEltYWdlTmFtZXMiLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04iLCJjaGlsZEVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybXNBbmRNYXNrcyIsImNyZWF0ZUJ1ZmZlcnMiLCJwcm9wZXJ0aWVzIiwicGFydCIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEscUJBQVIsQ0FGeEI7O0lBSU1HLEk7OztBQUNKLGdC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QXNCLFVBQUNTLFlBQUQ7QUFBQSxlQUFrQkEsYUFBYWxCLE1BQWIsQ0FBb0JaLGNBQXBCLEVBQW9DQyxlQUFwQyxDQUFsQjtBQUFBLE9BQXRCOztBQUVBRCxxQkFBZWdDLGFBQWYsQ0FBNkI5QixNQUE3Qjs7QUFFQSxVQUFJRCxvQkFBb0IsSUFBeEIsRUFBOEI7QUFDNUJBLHdCQUFnQitCLGFBQWhCLENBQThCOUIsTUFBOUI7QUFDRDs7QUFFRCxXQUFLRixjQUFMLEdBQXNCQSxjQUF0Qjs7QUFFQSxXQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNEOzs7bUNBRXFCZ0MsVSxFQUFZO0FBQUEsVUFDeEJyQyxNQUR3QixHQUN1QnFDLFVBRHZCLENBQ3hCckMsTUFEd0I7QUFBQSxVQUNoQkMsUUFEZ0IsR0FDdUJvQyxVQUR2QixDQUNoQnBDLFFBRGdCO0FBQUEsVUFDTkMsVUFETSxHQUN1Qm1DLFVBRHZCLENBQ05uQyxVQURNO0FBQUEsVUFDTUMsWUFETixHQUN1QmtDLFVBRHZCLENBQ01sQyxZQUROO0FBQUEsVUFFMUJDLGNBRjBCLEdBRVQsSUFGUztBQUFBLFVBRzFCQyxlQUgwQixHQUdSLElBSFE7QUFBQSxVQUkxQmlDLElBSjBCLEdBSW5CM0MsUUFBUTRDLGNBQVIsQ0FBdUJ4QyxJQUF2QixFQUE2QnNDLFVBQTdCLEVBQXlDckMsTUFBekMsRUFBaURDLFFBQWpELEVBQTJEQyxVQUEzRCxFQUF1RUMsWUFBdkUsRUFBcUZDLGNBQXJGLEVBQXFHQyxlQUFyRyxDQUptQjs7O0FBTWhDLGFBQU9pQyxJQUFQO0FBQ0Q7Ozs7RUF6RmdCM0MsTzs7QUE0Rm5CNkMsT0FBT0MsT0FBUCxHQUFpQjFDLElBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBQYXJ0IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGltYWdlcywgaW1hZ2VNYXAsIGltYWdlTmFtZXMsIGltYWdlTWFwSlNPTiwgY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmltYWdlcyA9IGltYWdlcztcbiAgICB0aGlzLmltYWdlTWFwID0gaW1hZ2VNYXA7XG4gICAgdGhpcy5pbWFnZU5hbWVzID0gaW1hZ2VOYW1lcztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIHJlbmRlcihjYW52YXMsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG5cbiAgICBpZiAodGhpcy50ZXh0dXJlUmVuZGVyZXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICAgIGNhbnZhcy51c2VQcm9ncmFtKHRleHR1cmVSZW5kZXJlclByb2dyYW0pO1xuXG4gICAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgICBjYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgICAgY29uc3QgdGV4dHVyZU9mZnNldHMgPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRUZXh0dXJlT2Zmc2V0cygpO1xuXG4gICAgICBsZXQgc3RhcnQsXG4gICAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgICB0ZXh0dXJlT2Zmc2V0cy5mb3JFYWNoKCh0ZXh0dXJlT2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgICBzdGFydCA9IGZpbmlzaDsgLy8vXG5cbiAgICAgICAgZmluaXNoICs9IHRleHR1cmVPZmZzZXQ7ICAvLy9cblxuICAgICAgICB0aGlzLnRleHR1cmVSZW5kZXJlci51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKTtcblxuICAgIGxldCB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMuaW1hZ2VzKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlc0FuZEltYWdlTmFtZXModGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgY2FudmFzKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTih0aGlzLmltYWdlTWFwLCB0aGlzLmltYWdlTWFwSlNPTiwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3Jtc0FuZE1hc2tzKCkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgaWYgKHRleHR1cmVSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZU1hcEpTT04gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gbnVsbCwgLy8vXG4gICAgICAgICAgcGFydCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFydCwgcHJvcGVydGllcywgaW1hZ2VzLCBpbWFnZU1hcCwgaW1hZ2VOYW1lcywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydDtcbiJdfQ==