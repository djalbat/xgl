'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    ColourRenderer = require('../renderer/colour'),
    TextureRenderer = require('../renderer/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(colourRenderer, textureRenderer, canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourRenderer',
    value: function getColourRenderer() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureRenderer',
    value: function getTextureRenderer() {
      return this.textureRenderer;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = function () {
        this.resize();

        this.forceUpdate();
      }.bind(this);

      this.resize();

      this.forceUpdate();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = properties.canvas,
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas),
          transforms = [];


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer, transforms);
      });

      if (imageMap) {
        textureRenderer.createTexture(imageMap, canvas);
      }

      colourRenderer.createBuffers(canvas);
      textureRenderer.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ29sb3VyUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJTY2VuZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsImNsZWFyIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiYXNzaWduQ29udGV4dCIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvcmNlVXBkYXRlIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJpbWFnZU1hcCIsImZyb21Ob3RoaW5nIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsInRyYW5zZm9ybXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxZQUFSLENBQWhCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBRHZCO0FBQUEsSUFFTUUsa0JBQWtCRixR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SjBCLEdBSWxCdkMsUUFBUXdDLGNBQVIsQ0FBdUJwQyxLQUF2QixFQUE4QitCLFVBQTlCLEVBQTBDOUIsY0FBMUMsRUFBMERDLGVBQTFELEVBQTJFQyxNQUEzRSxDQUprQjtBQUFBLFVBSzFCa0MsVUFMMEIsR0FLYixFQUxhOzs7QUFPaENMLG9CQUFjTSxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CdkMsY0FBcEIsRUFBb0NDLGVBQXBDLEVBQXFEbUMsVUFBckQ7QUFDRCxPQUZEOztBQUlBLFVBQUlKLFFBQUosRUFBYztBQUNaL0Isd0JBQWdCdUMsYUFBaEIsQ0FBOEJSLFFBQTlCLEVBQXdDOUIsTUFBeEM7QUFDRDs7QUFFREYscUJBQWV5QyxhQUFmLENBQTZCdkMsTUFBN0I7QUFDQUQsc0JBQWdCd0MsYUFBaEIsQ0FBOEJ2QyxNQUE5Qjs7QUFFQUEsYUFBT3dDLGtCQUFQO0FBQ0F4QyxhQUFPeUMsbUJBQVA7O0FBRUFULFlBQU1VLFVBQU47O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7O0VBaEdpQnZDLE87O0FBbUdwQmtELE9BQU9DLE9BQVAsR0FBaUIvQyxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIENvbG91clJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuLi9yZW5kZXJlci90ZXh0dXJlJyk7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgY2FudmFzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gQ29sb3VyUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIsIGNhbnZhcyksXG4gICAgICAgICAgdHJhbnNmb3JtcyA9IFtdO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCB0cmFuc2Zvcm1zKTtcbiAgICB9KTtcblxuICAgIGlmIChpbWFnZU1hcCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjYW52YXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7XG4gICAgY2FudmFzLmVuYWJsZURlcHRoRnVuY3Rpb24oKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIl19