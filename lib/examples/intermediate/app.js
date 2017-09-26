'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var angles = require('../../angles'),
    zoom = require('../../zoom'),
    Normal = require('../../normal'),
    Rotation = require('../../rotation'),
    Position = require('../../position'),
    Perspective = require('../../perspective');

var App = function () {
  function App(canvas, colourCube, colourShader, textureCube, textureShader) {
    _classCallCheck(this, App);

    this.canvas = canvas;
    this.colourCube = colourCube;
    this.colourShader = colourShader;
    this.textureCube = textureCube;
    this.textureShader = textureShader;
  }

  _createClass(App, [{
    key: 'mouseUpEventHandler',
    value: function mouseUpEventHandler(mouseCoordinates) {
      angles.mouseUpEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseDownEventHandler',
    value: function mouseDownEventHandler(mouseCoordinates) {
      angles.mouseDownEventHandler(mouseCoordinates);
    }
  }, {
    key: 'mouseMoveEventHandler',
    value: function mouseMoveEventHandler(mouseCoordinates) {
      angles.mouseMoveEventHandler(mouseCoordinates);

      this.render();
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      zoom.mouseWheelEventHandler(delta);

      this.render();
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

      console.log(height);
    }
  }, {
    key: 'render',
    value: function render() {
      var colourCubeCount = this.colourCube.getCount(),
          textureCubeCount = this.textureCube.getCount(),
          xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      zAngle = yAxisAngle,
          ///
      zCoordinate = -Math.max(10, distance),
          ///
      perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          normal = Normal.fromRotation(rotation);

      this.canvas.clear();

      this.colourCube.bind(this.colourShader, this.canvas);

      this.canvas.useShader(this.colourShader);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.drawElements(colourCubeCount);

      this.textureCube.bind(this.textureShader, this.canvas);

      this.canvas.useShader(this.textureShader);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);

      this.canvas.drawElements(textureCubeCount);
    }
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbImFuZ2xlcyIsInJlcXVpcmUiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiQXBwIiwiY2FudmFzIiwiY29sb3VyQ3ViZSIsImNvbG91clNoYWRlciIsInRleHR1cmVDdWJlIiwidGV4dHVyZVNoYWRlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwicmVuZGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiY29uc29sZSIsImxvZyIsImNvbG91ckN1YmVDb3VudCIsImdldENvdW50IiwidGV4dHVyZUN1YmVDb3VudCIsInhBeGlzQW5nbGUiLCJnZXRYQXhpc0FuZ2xlIiwieUF4aXNBbmdsZSIsImdldFlBeGlzQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ6QW5nbGUiLCJ6Q29vcmRpbmF0ZSIsIk1hdGgiLCJtYXgiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwiY2xlYXIiLCJiaW5kIiwidXNlU2hhZGVyIiwiYWN0aXZhdGVUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFB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Q0FBWVMsTUFBWixDQUFtQixLQUFLUCxZQUF4QixFQUFzQ3lDLE1BQXRDLEVBQThDSixRQUE5QyxFQUF3REUsUUFBeEQsRUFBa0VKLFdBQWxFOztBQUVBLFdBQUtyQyxNQUFMLENBQVlpRCxZQUFaLENBQXlCNUIsZUFBekI7O0FBRUEsV0FBS2xCLFdBQUwsQ0FBaUIyQyxJQUFqQixDQUFzQixLQUFLMUMsYUFBM0IsRUFBMEMsS0FBS0osTUFBL0M7O0FBRUEsV0FBS0EsTUFBTCxDQUFZK0MsU0FBWixDQUFzQixLQUFLM0MsYUFBM0I7O0FBRUEsV0FBS0EsYUFBTCxDQUFtQjRDLGVBQW5CLENBQW1DLEtBQUtoRCxNQUF4Qzs7QUFFQSxXQUFLQSxNQUFMLENBQVlTLE1BQVosQ0FBbUIsS0FBS0wsYUFBeEIsRUFBdUN1QyxNQUF2QyxFQUErQ0osUUFBL0MsRUFBeURFLFFBQXpELEVBQW1FSixXQUFuRTs7QUFFQSxXQUFLckMsTUFBTCxDQUFZaUQsWUFBWixDQUF5QjFCLGdCQUF6QjtBQUNEOzs7Ozs7QUFHSDJCLE9BQU9DLE9BQVAsR0FBaUJwRCxHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFuZ2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcihjYW52YXMsIGNvbG91ckN1YmUsIGNvbG91clNoYWRlciwgdGV4dHVyZUN1YmUsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91ckN1YmUgPSBjb2xvdXJDdWJlO1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZUN1YmUgPSB0ZXh0dXJlQ3ViZTtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICBjb25zb2xlLmxvZyhoZWlnaHQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY29sb3VyQ3ViZUNvdW50ID0gdGhpcy5jb2xvdXJDdWJlLmdldENvdW50KCksXG4gICAgICAgICAgdGV4dHVyZUN1YmVDb3VudCA9IHRoaXMudGV4dHVyZUN1YmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY29sb3VyQ3ViZS5iaW5kKHRoaXMuY29sb3VyU2hhZGVyLCB0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy5jb2xvdXJTaGFkZXIpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcblxuICAgIHRoaXMuY2FudmFzLmRyYXdFbGVtZW50cyhjb2xvdXJDdWJlQ291bnQpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ3ViZS5iaW5kKHRoaXMudGV4dHVyZVNoYWRlciwgdGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5kcmF3RWxlbWVudHModGV4dHVyZUN1YmVDb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbiJdfQ==