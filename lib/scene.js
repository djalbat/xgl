'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    OffsetMatrix = require('./matrix/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(offset, canvas, colourRenderer, textureRenderer) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.offset = offset;
    _this.canvas = canvas;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getOffsetVec3',
    value: function getOffsetVec3() {
      return this.offset;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'getColourShader',
    value: function getColourShader() {
      return this.colourRenderer;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
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
    value: function updateHandler(rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var offsetMatrix = OffsetMatrix.fromOffset(this.offset);

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
          offset = properties.offset,
          canvas = new Canvas(),
          colourRenderer = ColourShader.fromNothing(canvas),
          textureRenderer = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offset, canvas, colourRenderer, textureRenderer);


      childElements.forEach(function (childElement) {
        childElement.create(colourRenderer, textureRenderer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsIk9mZnNldE1hdHJpeCIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJTY2VuZSIsIm9mZnNldCIsImNhbnZhcyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsImNsZWFyIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiZnJvbU9mZnNldCIsImFzc2lnbkNvbnRleHQiLCJvblVwZGF0ZSIsInVwZGF0ZUhhbmRsZXIiLCJiaW5kIiwid2luZG93Iiwib25yZXNpemUiLCJmb3JjZVVwZGF0ZSIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiaW1hZ2VNYXAiLCJmcm9tTm90aGluZyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxVQUFSLENBRGY7QUFBQSxJ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QUNUQyxRQURTLEdBQ1lGLFVBRFosQ0FDVEUsUUFEUztBQUFBLFVBQ0NsQyxNQURELEdBQ1lnQyxVQURaLENBQ0NoQyxNQUREO0FBQUEsVUFFMUJDLE1BRjBCLEdBRWpCLElBQUlOLE1BQUosRUFGaUI7QUFBQSxVQUcxQk8sY0FIMEIsR0FHVEwsYUFBYXNDLFdBQWIsQ0FBeUJsQyxNQUF6QixDQUhTO0FBQUEsVUFJMUJFLGVBSjBCLEdBSVJMLGNBQWNxQyxXQUFkLENBQTBCbEMsTUFBMUIsQ0FKUTtBQUFBLFVBSzFCbUMsS0FMMEIsR0FLbEIzQyxRQUFRNEMsY0FBUixDQUF1QnRDLEtBQXZCLEVBQThCaUMsVUFBOUIsRUFBMENoQyxNQUExQyxFQUFrREMsTUFBbEQsRUFBMERDLGNBQTFELEVBQTBFQyxlQUExRSxDQUxrQjs7O0FBT2hDOEIsb0JBQWNLLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFDLE1BQWIsQ0FBb0J0QyxjQUFwQixFQUFvQ0MsZUFBcEM7QUFDRCxPQUZEOztBQUlBLFVBQUkrQixRQUFKLEVBQWM7QUFDWi9CLHdCQUFnQnNDLGFBQWhCLENBQThCUCxRQUE5QixFQUF3Q2pDLE1BQXhDO0FBQ0Q7O0FBRURDLHFCQUFld0MsYUFBZixDQUE2QnpDLE1BQTdCO0FBQ0FFLHNCQUFnQnVDLGFBQWhCLENBQThCekMsTUFBOUI7O0FBRUFBLGFBQU8wQyxrQkFBUDtBQUNBMUMsYUFBTzJDLG1CQUFQOztBQUVBUixZQUFNUyxVQUFOOztBQUVBLGFBQU9ULEtBQVA7QUFDRDs7OztFQXRHaUIzQyxPOztBQXlHcEJxRCxPQUFPQyxPQUFQLEdBQWlCaEQsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBPZmZzZXRNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9vZmZzZXQnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0LCBjYW52YXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRPZmZzZXRWZWMzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjb2xvdXJSZW5kZXJlclByb2dyYW0gPSB0aGlzLmNvbG91clJlbmRlcmVyLmdldFByb2dyYW0oKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtID0gdGhpcy50ZXh0dXJlUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyUmVuZGVyZXJQcm9ncmFtKTtcblxuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbSh0ZXh0dXJlUmVuZGVyZXJQcm9ncmFtKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlUmVuZGVyZXIsIG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihyb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldE1hdHJpeCA9IE9mZnNldE1hdHJpeC5mcm9tT2Zmc2V0KHRoaXMub2Zmc2V0KTtcblxuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIG9mZnNldCwgY2FudmFzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICBcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=