'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = require('./canvas'),
    Element = require('./element'),
    ColourRenderer = require('./renderer/colour'),
    TextureRenderer = require('./renderer/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(canvas, colourRenderer, textureRenderer) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.canvas = canvas;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
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
          canvas = new Canvas(),
          colourRenderer = ColourRenderer.fromNothing(canvas),
          textureRenderer = TextureRenderer.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, canvas, colourRenderer, textureRenderer);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkNvbG91clJlbmRlcmVyIiwiVGV4dHVyZVJlbmRlcmVyIiwiU2NlbmUiLCJjYW52YXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiY29sb3VyUmVuZGVyZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInRleHR1cmVSZW5kZXJlclByb2dyYW0iLCJjbGVhciIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImFjdGl2YXRlVGV4dHVyZSIsImFzc2lnbkNvbnRleHQiLCJvblVwZGF0ZSIsInVwZGF0ZUhhbmRsZXIiLCJiaW5kIiwid2luZG93Iiwib25yZXNpemUiLCJmb3JjZVVwZGF0ZSIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiaW1hZ2VNYXAiLCJmcm9tTm90aGluZyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxVQUFSLENBQWY7QUFBQSxJQUNNQyxVQUFVRCxRQUFRLFdBQVIsQ0FEaEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxrQkFBa0JILFFBQVEsb0JBQVIsQ0FIeEI7O0lBS01JLEs7OztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CQyxjQUFwQixFQUFvQ0MsZUFBcEMsRUFBcUQ7QUFBQTs7QUFBQTs7QUFHbkQsVUFBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUxtRDtBQU1wRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLGFBQU8sS0FBS0MsY0FBWjtBQUNEOzs7eUNBRW9CO0FBQ25CLGFBQU8sS0FBS0MsZUFBWjtBQUNEOzs7NkJBRVE7QUFDUCxVQUFNQyxjQUFjLEtBQUtILE1BQUwsQ0FBWUksY0FBWixFQUFwQjtBQUFBLFVBQ01DLGVBQWUsS0FBS0wsTUFBTCxDQUFZTSxlQUFaLEVBRHJCO0FBQUEsVUFFTUMsUUFBUUosV0FGZDtBQUFBLFVBRTRCO0FBQ3RCSyxlQUFTSCxZQUhmLENBRE8sQ0FJdUI7O0FBRTlCLFdBQUtMLE1BQUwsQ0FBWVMsTUFBWixDQUFtQkYsS0FBbkIsRUFBMEJDLE1BQTFCO0FBQ0Q7OzsyQkFFTUUsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1DLHdCQUF3QixLQUFLZCxjQUFMLENBQW9CZSxVQUFwQixFQUE5QjtBQUFBLFVBQ01DLHlCQUF5QixLQUFLZixlQUFMLENBQXFCYyxVQUFyQixFQUQvQjs7QUFHQSxXQUFLaEIsTUFBTCxDQUFZa0IsS0FBWjs7QUFFQSxXQUFLbEIsTUFBTCxDQUFZbUIsVUFBWixDQUF1QkoscUJBQXZCOztBQUVBLFdBQUtkLGNBQUwsQ0FBb0JtQixXQUFwQixDQUFnQyxLQUFLcEIsTUFBckM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZcUIsTUFBWixDQUFtQixLQUFLcEIsY0FBeEIsRUFBd0NTLFlBQXhDLEVBQXNEQyxjQUF0RCxFQUFzRUMsY0FBdEUsRUFBc0ZDLGdCQUF0RixFQUF3R0MsWUFBeEc7O0FBRUEsV0FBS2QsTUFBTCxDQUFZbUIsVUFBWixDQUF1QkYsc0JBQXZCOztBQUVBLFdBQUtmLGVBQUwsQ0FBcUJrQixXQUFyQixDQUFpQyxLQUFLcEIsTUFBdEM7O0FBRUEsV0FBS0UsZUFBTCxDQUFxQm9CLGVBQXJCLENBQXFDLEtBQUt0QixNQUExQzs7QUFFQSxXQUFLQSxNQUFMLENBQVlxQixNQUFaLENBQW1CLEtBQUtuQixlQUF4QixFQUF5Q1EsWUFBekMsRUFBdURDLGNBQXZELEVBQXVFQyxjQUF2RSxFQUF1RkMsZ0JBQXZGLEVBQXlHQyxZQUF6RztBQUNEOzs7a0NBRWFKLFksRUFBY0MsYyxFQUFnQkMsYyxFQUFnQkMsZ0IsRUFBa0JDLFksRUFBYztBQUMxRixXQUFLTyxNQUFMLENBQVlYLFlBQVosRUFBMEJDLGNBQTFCLEVBQTBDQyxjQUExQyxFQUEwREMsZ0JBQTFELEVBQTRFQyxZQUE1RTtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLUyxhQUFMOztBQUVBLFdBQUtDLFFBQUwsQ0FBYyxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFkOztBQUVBQyxhQUFPQyxRQUFQLEdBQWtCLFlBQVc7QUFDM0IsYUFBS25CLE1BQUw7O0FBRUEsYUFBS29CLFdBQUw7QUFDRCxPQUppQixDQUloQkgsSUFKZ0IsQ0FJWCxJQUpXLENBQWxCOztBQU1BLFdBQUtqQixNQUFMOztBQUVBLFdBQUtvQixXQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUFBLFVBQ3hCQyxhQUR3QixHQUNJRCxVQURKLENBQ3hCQyxhQUR3QjtBQUFBLFVBQ1RDLFFBRFMsR0FDSUYsVUFESixDQUNURSxRQURTO0FBQUEsVUFFMUJoQyxNQUYwQixHQUVqQixJQUFJTixNQUFKLEVBRmlCO0FBQUEsVUFHMUJPLGNBSDBCLEdBR1RKLGVBQWVvQyxXQUFmLENBQTJCakMsTUFBM0IsQ0FIUztBQUFBLFVBSTFCRSxlQUowQixHQUlSSixnQkFBZ0JtQyxXQUFoQixDQUE0QmpDLE1BQTVCLENBSlE7QUFBQSxVQUsxQmtDLEtBTDBCLEdBS2xCdEMsUUFBUXVDLGNBQVIsQ0FBdUJwQyxLQUF2QixFQUE4QitCLFVBQTlCLEVBQTBDOUIsTUFBMUMsRUFBa0RDLGNBQWxELEVBQWtFQyxlQUFsRSxDQUxrQjs7O0FBT2hDNkIsb0JBQWNLLE9BQWQsQ0FBc0IsVUFBU0MsWUFBVCxFQUF1QjtBQUMzQ0EscUJBQWFDLE1BQWIsQ0FBb0JyQyxjQUFwQixFQUFvQ0MsZUFBcEM7QUFDRCxPQUZEOztBQUlBLFVBQUk4QixRQUFKLEVBQWM7QUFDWjlCLHdCQUFnQnFDLGFBQWhCLENBQThCUCxRQUE5QixFQUF3Q2hDLE1BQXhDO0FBQ0Q7O0FBRURDLHFCQUFldUMsYUFBZixDQUE2QnhDLE1BQTdCO0FBQ0FFLHNCQUFnQnNDLGFBQWhCLENBQThCeEMsTUFBOUI7O0FBRUFBLGFBQU95QyxrQkFBUDtBQUNBekMsYUFBTzBDLG1CQUFQOztBQUVBUixZQUFNUyxVQUFOOztBQUVBLGFBQU9ULEtBQVA7QUFDRDs7OztFQS9GaUJ0QyxPOztBQWtHcEJnRCxPQUFPQyxPQUFQLEdBQWlCOUMsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDb2xvdXJSZW5kZXJlciA9IHJlcXVpcmUoJy4vcmVuZGVyZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlUmVuZGVyZXIgPSByZXF1aXJlKCcuL3JlbmRlcmVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29sb3VyUmVuZGVyZXIgPSBjb2xvdXJSZW5kZXJlcjtcbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyUmVuZGVyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVSZW5kZXJlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgICBcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=