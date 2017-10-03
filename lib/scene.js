'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Offset = require('./scene/offset'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Perspective = require('./scene/perspective'),
    MouseEvents = require('./scene/mouseEvents');

var Scene = function () {
  function Scene(canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }

  _createClass(Scene, [{
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas),
          mouseUpEventHandler = this.mouseUpEventHandler.bind(this),
          mouseDownEventHandler = this.mouseDownEventHandler.bind(this),
          mouseMoveEventHandler = this.mouseMoveEventHandler.bind(this),
          mouseWheelEventHandler = this.mouseWheelEventHandler.bind(this);

      mouseEvents.addMouseUpEventHandler(mouseUpEventHandler);
      mouseEvents.addMouseDownEventHandler(mouseDownEventHandler);
      mouseEvents.addMouseMoveEventHandler(mouseMoveEventHandler);
      mouseEvents.addMouseWheelEventHandler(mouseWheelEventHandler);
    }
  }, {
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
    }
  }, {
    key: 'render',
    value: function render() {
      var xAxisAngle = angles.getXAxisAngle(),
          yAxisAngle = angles.getYAxisAngle(),
          distance = zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      zAngle = yAxisAngle,
          ///
      xCoordinate = -18,
          yCoordinate = -16,
          zCoordinate = -Math.max(10, distance),
          ///
      offset = Offset.fromXCoordinateAndYCoordinate(xCoordinate, yCoordinate),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          perspective = Perspective.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      this.drawElements(offset, rotation, position, perspective, normal);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(offset, rotation, position, perspective, normal) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, offset, rotation, position, perspective, normal);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, offset, rotation, position, perspective, normal);
    }
  }], [{
    key: 'fromCanvasAndShaders',
    value: function fromCanvasAndShaders(canvas, colourShader, textureShader) {
      var scene = new Scene(canvas, colourShader, textureShader);

      window.onresize = function () {
        scene.resize();

        scene.render(colourShader, textureShader);
      };

      scene.resize();

      scene.render(colourShader, textureShader);

      scene.addMouseEventHandlers();
    }
  }]);

  return Scene;
}();

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJ6b29tIiwicmVxdWlyZSIsImFuZ2xlcyIsIk9mZnNldCIsIk5vcm1hbCIsIlJvdGF0aW9uIiwiUG9zaXRpb24iLCJQZXJzcGVjdGl2ZSIsIk1vdXNlRXZlbnRzIiwiU2NlbmUiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwieEF4aXNBbmdsZSIsImdldFhBeGlzQW5nbGUiLCJ5QXhpc0FuZ2xlIiwiZ2V0WUF4aXNBbmdsZSIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInhBbmdsZSIsInpBbmdsZSIsInhDb29yZGluYXRlIiwieUNvb3JkaW5hdGUiLCJ6Q29vcmRpbmF0ZSIsIk1hdGgiLCJtYXgiLCJvZmZzZXQiLCJmcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwicGVyc3BlY3RpdmUiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWwiLCJmcm9tUm90YXRpb24iLCJkcmF3RWxlbWVudHMiLCJjbGVhciIsInVzZVNoYWRlciIsImJpbmRCdWZmZXJzIiwiYWN0aXZhdGVUZXh0dXJlIiwic2NlbmUiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLGNBQVIsQ0FBYjtBQUFBLElBQ01DLFNBQVNELFFBQVEsZ0JBQVIsQ0FEZjtBQUFBLElBRU1FLFNBQVNGLFFBQVEsZ0JBQVIsQ0FGZjtBQUFBLElBR01HLFNBQVNILFFBQVEsZ0JBQVIsQ0FIZjtBQUFBLElBSU1JLFdBQVdKLFFBQVEsa0JBQVIsQ0FKakI7QUFBQSxJQUtNSyxXQUFXTCxRQUFRLGtCQUFSLENBTGpCO0FBQUEsSUFNTU0sY0FBY04sUUFBUSxxQkFBUixDQU5wQjtBQUFBLElBT01PLGNBQWNQLFFBQVEscUJBQVIsQ0FQcEI7O0lBU01RLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0NDLGFBQWxDLEVBQWlEO0FBQUE7O0FBQy9DLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7Ozs0Q0FFdUI7QUFDdEIsVUFBTUMsY0FBY0wsWUFBWU0sV0FBWixDQUF3QixLQUFLSixNQUE3QixDQUFwQjtBQUFBLFVBQ01LLHNCQUFzQixLQUFLQSxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FENUI7QUFBQSxVQUVNQyx3QkFBd0IsS0FBS0EscUJBQUwsQ0FBMkJELElBQTNCLENBQWdDLElBQWhDLENBRjlCO0FBQUEsVUFHTUUsd0JBQXdCLEtBQUtBLHFCQUFMLENBQTJCRixJQUEzQixDQUFnQyxJQUFoQyxDQUg5QjtBQUFBLFVBSU1HLHlCQUF5QixLQUFLQSxzQkFBTCxDQUE0QkgsSUFBNUIsQ0FBaUMsSUFBakMsQ0FKL0I7O0FBTUFILGtCQUFZ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LEtBQUtwRCxNQUFwQzs7QUFFQSxXQUFLRSxhQUFMLENBQW1CbUQsZUFBbkIsQ0FBbUMsS0FBS3JELE1BQXhDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWWUsTUFBWixDQUFtQixLQUFLYixhQUF4QixFQUF1Q3FDLE1BQXZDLEVBQStDRSxRQUEvQyxFQUF5REUsUUFBekQsRUFBbUVFLFdBQW5FLEVBQWdGRSxNQUFoRjtBQUNEOzs7eUNBRTJCL0MsTSxFQUFRQyxZLEVBQWNDLGEsRUFBZTtBQUMvRCxVQUFNb0QsUUFBUSxJQUFJdkQsS0FBSixDQUFVQyxNQUFWLEVBQWtCQyxZQUFsQixFQUFnQ0MsYUFBaEMsQ0FBZDs7QUFFQXFELGFBQU9DLFFBQVAsR0FBa0IsWUFBVztBQUMzQkYsY0FBTS9CLE1BQU47O0FBRUErQixjQUFNdkMsTUFBTixDQUFhZCxZQUFiLEVBQTJCQyxhQUEzQjtBQUNELE9BSkQ7O0FBTUFvRCxZQUFNL0IsTUFBTjs7QUFFQStCLFlBQU12QyxNQUFOLENBQWFkLFlBQWIsRUFBMkJDLGFBQTNCOztBQUVBb0QsWUFBTUcscUJBQU47QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUI1RCxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgem9vbSA9IHJlcXVpcmUoJy4vc2NlbmUvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9zY2VuZS9hbmdsZXMnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vc2NlbmUvb2Zmc2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuL3NjZW5lL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi9zY2VuZS9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25FdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuXG4gIH1cblxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHhDb29yZGluYXRlID0gLTE4LFxuICAgICAgICAgIHlDb29yZGluYXRlID0gLTE2LFxuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIG9mZnNldCA9IE9mZnNldC5mcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2FudmFzQW5kU2hhZGVycyhjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcikge1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFNjZW5lKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcblxuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2NlbmUucmVzaXplKCk7XG5cbiAgICAgIHNjZW5lLnJlbmRlcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIH07XG5cbiAgICBzY2VuZS5yZXNpemUoKTtcblxuICAgIHNjZW5lLnJlbmRlcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuXG4gICAgc2NlbmUuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==