'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Offset = require('./scene/offset'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(offsetVec3, canvas, colourRenderer, textureRenderer) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.offsetVec3 = offsetVec3;
    _this.canvas = canvas;
    _this.colourRenderer = colourRenderer;
    _this.textureRenderer = textureRenderer;
    return _this;
  }

  _createClass(Scene, [{
    key: 'getOffsetVec3',
    value: function getOffsetVec3() {
      return this.offsetVec3;
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
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, projection, normal) {
      var colourRendererProgram = this.colourRenderer.getProgram(),
          textureRendererProgram = this.textureRenderer.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourRendererProgram);

      this.colourRenderer.bindBuffers(this.canvas);

      this.canvas.render(this.colourRenderer, offset, rotation, position, projection, normal);

      this.canvas.useProgram(textureRendererProgram);

      this.textureRenderer.bindBuffers(this.canvas);

      this.textureRenderer.activateTexture(this.canvas);

      this.canvas.render(this.textureRenderer, offset, rotation, position, projection, normal);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(rotation, position, projection, normal) {
      var offset = Offset.fromVec3(this.offsetVec3);

      this.drawElements(offset, rotation, position, projection, normal);
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
          offsetVec3 = offset,
          canvas = new Canvas(),
          colourRenderer = ColourShader.fromNothing(canvas),
          textureRenderer = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourRenderer, textureRenderer);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsIk9mZnNldCIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJTY2VuZSIsIm9mZnNldFZlYzMiLCJjYW52YXMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsIm9mZnNldCIsInJvdGF0aW9uIiwicG9zaXRpb24iLCJwcm9qZWN0aW9uIiwibm9ybWFsIiwiY29sb3VyUmVuZGVyZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInRleHR1cmVSZW5kZXJlclByb2dyYW0iLCJjbGVhciIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlciIsImFjdGl2YXRlVGV4dHVyZSIsImZyb21WZWMzIiwiZHJhd0VsZW1lbnRzIiwiYXNzaWduQ29udGV4dCIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImZvcmNlVXBkYXRlIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJpbWFnZU1hcCIsImZyb21Ob3RoaW5nIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlQnVmZmVycyIsImVuYWJsZURlcHRoVGVzdGluZyIsImVuYWJsZURlcHRoRnVuY3Rpb24iLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFVBQVIsQ0FEZjtBQUFBLElBRU1FLFNBQVNGLFFBQVEsZ0JB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QURTO0FBQUEsVUFDQ3hCLE1BREQsR0FDWXNCLFVBRFosQ0FDQ3RCLE1BREQ7QUFBQSxVQUUxQlgsVUFGMEIsR0FFYlcsTUFGYTtBQUFBLFVBRzFCVixNQUgwQixHQUdqQixJQUFJTixNQUFKLEVBSGlCO0FBQUEsVUFJMUJPLGNBSjBCLEdBSVRMLGFBQWF1QyxXQUFiLENBQXlCbkMsTUFBekIsQ0FKUztBQUFBLFVBSzFCRSxlQUwwQixHQUtSTCxjQUFjc0MsV0FBZCxDQUEwQm5DLE1BQTFCLENBTFE7QUFBQSxVQU0xQm9DLEtBTjBCLEdBTWxCNUMsUUFBUTZDLGNBQVIsQ0FBdUJ2QyxLQUF2QixFQUE4QmtDLFVBQTlCLEVBQTBDakMsVUFBMUMsRUFBc0RDLE1BQXRELEVBQThEQyxjQUE5RCxFQUE4RUMsZUFBOUUsQ0FOa0I7OztBQVFoQytCLG9CQUFjSyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CdkMsY0FBcEIsRUFBb0NDLGVBQXBDO0FBQ0QsT0FGRDs7QUFJQSxVQUFJZ0MsUUFBSixFQUFjO0FBQ1poQyx3QkFBZ0J1QyxhQUFoQixDQUE4QlAsUUFBOUIsRUFBd0NsQyxNQUF4QztBQUNEOztBQUVEQyxxQkFBZXlDLGFBQWYsQ0FBNkIxQyxNQUE3QjtBQUNBRSxzQkFBZ0J3QyxhQUFoQixDQUE4QjFDLE1BQTlCOztBQUVBQSxhQUFPMkMsa0JBQVA7QUFDQTNDLGFBQU80QyxtQkFBUDs7QUFFQVIsWUFBTVMsVUFBTjs7QUFFQSxhQUFPVCxLQUFQO0FBQ0Q7Ozs7RUF2R2lCNUMsTzs7QUEwR3BCc0QsT0FBT0MsT0FBUCxHQUFpQmpELEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9zY2VuZS9vZmZzZXQnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMub2Zmc2V0VmVjMyA9IG9mZnNldFZlYzM7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJSZW5kZXJlciA9IGNvbG91clJlbmRlcmVyO1xuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyID0gdGV4dHVyZVJlbmRlcmVyO1xuICB9XG4gIFxuICBnZXRPZmZzZXRWZWMzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldFZlYzM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJSZW5kZXJlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlUmVuZGVyZXI7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXJQcm9ncmFtID0gdGhpcy5jb2xvdXJSZW5kZXJlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSA9IHRoaXMudGV4dHVyZVJlbmRlcmVyLmdldFByb2dyYW0oKTtcblxuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VQcm9ncmFtKGNvbG91clJlbmRlcmVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clJlbmRlcmVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVJlbmRlcmVyUHJvZ3JhbSk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVJlbmRlcmVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIocm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBPZmZzZXQuZnJvbVZlYzModGhpcy5vZmZzZXRWZWMzKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG9mZnNldFZlYzMgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIFxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVSZW5kZXJlci5jcmVhdGVUZXh0dXJlKGltYWdlTWFwLCBjYW52YXMpO1xuICAgIH1cblxuICAgIGNvbG91clJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB0ZXh0dXJlUmVuZGVyZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==