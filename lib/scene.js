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

  function Scene(offsetVec3, canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.offsetVec3 = offsetVec3;
    _this.canvas = canvas;
    _this.colourShader = colourShader;
    _this.textureShader = textureShader;
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
      return this.colourShader;
    }
  }, {
    key: 'getTextureShader',
    value: function getTextureShader() {
      return this.textureShader;
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
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, projection, normal);
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
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = Element.fromProperties(Scene, properties, offsetVec3, canvas, colourShader, textureShader);


      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      colourShader.createBuffers(canvas);
      textureShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsIk9mZnNldCIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJTY2VuZSIsIm9mZnNldFZlYzMiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInByb2plY3Rpb24iLCJub3JtYWwiLCJjbGVhciIsInVzZVNoYWRlciIsImJpbmRCdWZmZXJzIiwiYWN0aXZhdGVUZXh0dXJlIiwicmVuZGVyIiwiZnJvbVZlYzMiLCJkcmF3RWxlbWVudHMiLCJhc3NpZ25Db250ZXh0Iiwib25VcGRhdGUiLCJ1cGRhdGVIYW5kbGVyIiwiYmluZCIsIndpbmRvdyIsIm9ucmVzaXplIiwiZm9yY2VVcGRhdGUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwiZnJvbU5vdGhpbmciLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVCdWZmZXJzIiwiZW5hYmxlRGVwdGhUZXN0aW5nIiwiZW5hYmxlRGVwdGhGdW5jdGlvbiIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsV0FBUixDQUFoQjtBQUFBLElBQ01DLFNBQVNELFFBQVEsVUFBUixDQURmO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxnQkFBUixDQUZmO0FBQUEsSUFHTUcsZUFBZUgsUUFBUSxpQkFBUixDQUhyQjtBQUFBLElBSU1JLGdCQUFnQkosUUFBUSxr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QUhpQjtBQUFBLFVBSTFCTyxZQUowQixHQUlYTCxhQUFhb0MsV0FBYixDQUF5QmhDLE1BQXpCLENBSlc7QUFBQSxVQUsxQkUsYUFMMEIsR0FLVkwsY0FBY21DLFdBQWQsQ0FBMEJoQyxNQUExQixDQUxVO0FBQUEsVUFNMUJpQyxLQU4wQixHQU1sQnpDLFFBQVEwQyxjQUFSLENBQXVCcEMsS0FBdkIsRUFBOEIrQixVQUE5QixFQUEwQzlCLFVBQTFDLEVBQXNEQyxNQUF0RCxFQUE4REMsWUFBOUQsRUFBNEVDLGFBQTVFLENBTmtCOzs7QUFRaEM0QixvQkFBY0ssT0FBZCxDQUFzQixVQUFTQyxZQUFULEVBQXVCO0FBQzNDQSxxQkFBYUMsTUFBYixDQUFvQnBDLFlBQXBCLEVBQWtDQyxhQUFsQztBQUNELE9BRkQ7O0FBSUEsVUFBSTZCLFFBQUosRUFBYztBQUNaN0Isc0JBQWNvQyxhQUFkLENBQTRCUCxRQUE1QixFQUFzQy9CLE1BQXRDO0FBQ0Q7O0FBRURDLG1CQUFhc0MsYUFBYixDQUEyQnZDLE1BQTNCO0FBQ0FFLG9CQUFjcUMsYUFBZCxDQUE0QnZDLE1BQTVCOztBQUVBQSxhQUFPd0Msa0JBQVA7QUFDQXhDLGFBQU95QyxtQkFBUDs7QUFFQVIsWUFBTVMsVUFBTjs7QUFFQSxhQUFPVCxLQUFQO0FBQ0Q7Ozs7RUF0R2lCekMsTzs7QUF5R3BCbUQsT0FBT0MsT0FBUCxHQUFpQjlDLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9zY2VuZS9vZmZzZXQnKSxcbiAgICAgIENvbG91clNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL2NvbG91cicpLFxuICAgICAgVGV4dHVyZVNoYWRlciA9IHJlcXVpcmUoJy4vc2hhZGVyL3RleHR1cmUnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vZmZzZXRWZWMzID0gb2Zmc2V0VmVjMztcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG4gIFxuICBnZXRPZmZzZXRWZWMzKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldFZlYzM7XG4gIH1cbiAgXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENvbG91clNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXJTaGFkZXI7XG4gIH1cbiAgXG4gIGdldFRleHR1cmVTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZVNoYWRlcjtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICBcbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIocm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBPZmZzZXQuZnJvbVZlYzModGhpcy5vZmZzZXRWZWMzKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCwgb2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIG9mZnNldFZlYzMgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gQ29sb3VyU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIG9mZnNldFZlYzMsIGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICBcbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICBjb2xvdXJTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==