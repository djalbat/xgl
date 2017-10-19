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
          scene = Element.fromProperties(Scene, properties, colourRenderer, textureRenderer, canvas);


      var transforms = [],
          childCanvasElements = childElements.filter(function (childElement) {
        var childElementCanvasElement = childElement.isCanvasElement();

        return childElementCanvasElement;
      });

      childCanvasElements.forEach(function (childCanvasElement) {
        childCanvasElement.create(colourRenderer, textureRenderer, transforms);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiQ29sb3VyUmVuZGVyZXIiLCJUZXh0dXJlUmVuZGVyZXIiLCJTY2VuZSIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiY2FudmFzIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0TWF0cml4Iiwicm90YXRpb25NYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJub3JtYWxNYXRyaXgiLCJjb2xvdXJSZW5kZXJlclByb2dyYW0iLCJnZXRQcm9ncmFtIiwidGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSIsImNsZWFyIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiYXNzaWduQ29udGV4dCIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvcmNlVXBkYXRlIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJpbWFnZU1hcCIsImZyb21Ob3RoaW5nIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsInRyYW5zZm9ybXMiLCJjaGlsZENhbnZhc0VsZW1lbnRzIiwiZmlsdGVyIiwiY2hpbGRFbGVtZW50IiwiY2hpbGRFbGVtZW50Q2FudmFzRWxlbWVudCIsImlzQ2FudmFzRWxlbWVudCIsImZvckVhY2giLCJjaGlsZENhbnZhc0VsZW1lbnQiLCJjcmVhdGUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlQnVmZmVycyIsImVuYWJsZURlcHRoVGVzdGluZyIsImVuYWJsZURlcHRoRnVuY3Rpb24iLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7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LFdBQWYsQ0FBMkIvQixNQUEzQixDQUZTO0FBQUEsVUFHMUJELGVBSDBCLEdBR1JILGdCQUFnQm1DLFdBQWhCLENBQTRCL0IsTUFBNUIsQ0FIUTtBQUFBLFVBSTFCZ0MsS0FKMEIsR0FJbEJ2QyxRQUFRd0MsY0FBUixDQUF1QnBDLEtBQXZCLEVBQThCK0IsVUFBOUIsRUFBMEM5QixjQUExQyxFQUEwREMsZUFBMUQsRUFBMkVDLE1BQTNFLENBSmtCOzs7QUFNaEMsVUFBTWtDLGFBQWEsRUFBbkI7QUFBQSxVQUNNQyxzQkFBc0JOLGNBQWNPLE1BQWQsQ0FBcUIsVUFBU0MsWUFBVCxFQUF1QjtBQUNoRSxZQUFNQyw0QkFBNEJELGFBQWFFLGVBQWIsRUFBbEM7O0FBRUEsZUFBT0QseUJBQVA7QUFDRCxPQUpxQixDQUQ1Qjs7QUFPQUgsMEJBQW9CSyxPQUFwQixDQUE0QixVQUFTQyxrQkFBVCxFQUE2QjtBQUN2REEsMkJBQW1CQyxNQUFuQixDQUEwQjVDLGNBQTFCLEVBQTBDQyxlQUExQyxFQUEyRG1DLFVBQTNEO0FBQ0QsT0FGRDs7QUFJQSxVQUFJSixRQUFKLEVBQWM7QUFDWi9CLHdCQUFnQjRDLGFBQWhCLENBQThCYixRQUE5QixFQUF3QzlCLE1BQXhDO0FBQ0Q7O0FBRURGLHFCQUFlOEMsYUFBZixDQUE2QjVDLE1BQTdCO0FBQ0FELHNCQUFnQjZDLGFBQWhCLENBQThCNUMsTUFBOUI7O0FBRUFBLGFBQU82QyxrQkFBUDtBQUNBN0MsYUFBTzhDLG1CQUFQOztBQUVBZCxZQUFNZSxVQUFOOztBQUVBLGFBQU9mLEtBQVA7QUFDRDs7OztFQXRHaUJ2QyxPOztBQXlHcEJ1RCxPQUFPQyxPQUFQLEdBQWlCcEQsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4uL3JlbmRlcmVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVJlbmRlcmVyID0gcmVxdWlyZSgnLi4vcmVuZGVyZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clJlbmRlcmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVJlbmRlcmVyO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNvbG91clJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMuY29sb3VyUmVuZGVyZXIuZ2V0UHJvZ3JhbSgpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlclByb2dyYW0gPSB0aGlzLnRleHR1cmVSZW5kZXJlci5nZXRQcm9ncmFtKCk7XG5cbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlUHJvZ3JhbShjb2xvdXJSZW5kZXJlclByb2dyYW0pO1xuXG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKHRleHR1cmVSZW5kZXJlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVSZW5kZXJlciwgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLnJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcblxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIGNhbnZhcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IENvbG91clJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyLCBjYW52YXMpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtcyA9IFtdLFxuICAgICAgICAgIGNoaWxkQ2FudmFzRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudENhbnZhc0VsZW1lbnQgPSBjaGlsZEVsZW1lbnQuaXNDYW52YXNFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjaGlsZEVsZW1lbnRDYW52YXNFbGVtZW50O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIGNoaWxkQ2FudmFzRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZENhbnZhc0VsZW1lbnQpIHtcbiAgICAgIGNoaWxkQ2FudmFzRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlciwgdHJhbnNmb3Jtcyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==