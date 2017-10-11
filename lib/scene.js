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
      var colourShaderProgram = this.colourShader.getProgram(),
          textureShaderProgram = this.textureShader.getProgram();

      this.canvas.clear();

      this.canvas.useProgram(colourShaderProgram);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, projection, normal);

      this.canvas.useProgram(textureShaderProgram);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwicmVxdWlyZSIsIkNhbnZhcyIsIk9mZnNldCIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJTY2VuZSIsIm9mZnNldFZlYzMiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwib2Zmc2V0Iiwicm90YXRpb24iLCJwb3NpdGlvbiIsInByb2plY3Rpb24iLCJub3JtYWwiLCJjb2xvdXJTaGFkZXJQcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInRleHR1cmVTaGFkZXJQcm9ncmFtIiwiY2xlYXIiLCJ1c2VQcm9ncmFtIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJyZW5kZXIiLCJmcm9tVmVjMyIsImRyYXdFbGVtZW50cyIsImFzc2lnbkNvbnRleHQiLCJvblVwZGF0ZSIsInVwZGF0ZUhhbmRsZXIiLCJiaW5kIiwid2luZG93Iiwib25yZXNpemUiLCJmb3JjZVVwZGF0ZSIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiaW1hZ2VNYXAiLCJmcm9tTm90aGluZyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJmb3JFYWNoIiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZUJ1ZmZlcnMiLCJlbmFibGVEZXB0aFRlc3RpbmciLCJlbmFibGVEZXB0aEZ1bmN0aW9uIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxVQUFSLENBRGY7QUFBQSxJQUVNRSxTQUFTRixRQUFRLGdCQUFSLENBRmY7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QyxhQUR3QjtBQUFBLFVBQ1RDLFFBRFMsR0FDWUYsVUFEWixDQUNURSxRQURTO0FBQUEsVUFDQ3hCLE1BREQsR0FDWXNCLFVBRFosQ0FDQ3RCLE1BREQ7QUFBQSxVQUUxQlgsVUFGMEIsR0FFYlcsTUFGYTtBQUFBLFVBRzFCVixNQUgwQixHQUdqQixJQUFJTixNQUFKLEVBSGlCO0FBQUEsVUFJMUJPLFlBSjBCLEdBSVhMLGFBQWF1QyxXQUFiLENBQXlCbkMsTUFBekIsQ0FKVztBQUFBLFVBSzFCRSxhQUwwQixHQUtWTCxjQUFjc0MsV0FBZCxDQUEwQm5DLE1BQTFCLENBTFU7QUFBQSxVQU0xQm9DLEtBTjBCLEdBTWxCNUMsUUFBUTZDLGNBQVIsQ0FBdUJ2QyxLQUF2QixFQUE4QmtDLFVBQTlCLEVBQTBDakMsVUFBMUMsRUFBc0RDLE1BQXRELEVBQThEQyxZQUE5RCxFQUE0RUMsYUFBNUUsQ0FOa0I7OztBQVFoQytCLG9CQUFjSyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CdkMsWUFBcEIsRUFBa0NDLGFBQWxDO0FBQ0QsT0FGRDs7QUFJQSxVQUFJZ0MsUUFBSixFQUFjO0FBQ1poQyxzQkFBY3VDLGFBQWQsQ0FBNEJQLFFBQTVCLEVBQXNDbEMsTUFBdEM7QUFDRDs7QUFFREMsbUJBQWF5QyxhQUFiLENBQTJCMUMsTUFBM0I7QUFDQUUsb0JBQWN3QyxhQUFkLENBQTRCMUMsTUFBNUI7O0FBRUFBLGFBQU8yQyxrQkFBUDtBQUNBM0MsYUFBTzRDLG1CQUFQOztBQUVBUixZQUFNUyxVQUFOOztBQUVBLGFBQU9ULEtBQVA7QUFDRDs7OztFQXpHaUI1QyxPOztBQTRHcEJzRCxPQUFPQyxPQUFQLEdBQWlCakQsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBPZmZzZXQgPSByZXF1aXJlKCcuL3NjZW5lL29mZnNldCcpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9mZnNldFZlYzMgPSBvZmZzZXRWZWMzO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gIH1cbiAgXG4gIGdldE9mZnNldFZlYzMoKSB7XG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0VmVjMztcbiAgfVxuICBcbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgZ2V0Q29sb3VyU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91clNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZVNoYWRlcigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCkge1xuICAgIGNvbnN0IGNvbG91clNoYWRlclByb2dyYW0gPSB0aGlzLmNvbG91clNoYWRlci5nZXRQcm9ncmFtKCksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlclByb2dyYW0gPSB0aGlzLnRleHR1cmVTaGFkZXIuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0oY29sb3VyU2hhZGVyUHJvZ3JhbSk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVByb2dyYW0odGV4dHVyZVNoYWRlclByb2dyYW0pO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21WZWMzKHRoaXMub2Zmc2V0VmVjMyk7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXNpemUoKTtcblxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIG9mZnNldCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBvZmZzZXRWZWMzID0gb2Zmc2V0LCAgLy8vXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXIgPSBUZXh0dXJlU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzLCBvZmZzZXRWZWMzLCBjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgY29sb3VyU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=