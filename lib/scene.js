'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
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
      zCoordinate = -Math.max(10, distance),
          ///
      perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          normal = Normal.fromRotation(rotation);

      this.drawElements(normal, rotation, position, perspective);
    }
  }, {
    key: 'drawElements',
    value: function drawElements(normal, rotation, position, perspective) {
      this.canvas.clear();

      this.canvas.useShader(this.colourShader);

      this.colourShader.bindBuffers(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bindBuffers(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJ6b29tIiwicmVxdWlyZSIsImFuZ2xlcyIsIk5vcm1hbCIsIlJvdGF0aW9uIiwiUG9zaXRpb24iLCJQZXJzcGVjdGl2ZSIsIk1vdXNlRXZlbnRzIiwiU2NlbmUiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwieEF4aXNBbmdsZSIsImdldFhBeGlzQW5nbGUiLCJ5QXhpc0FuZ2xlIiwiZ2V0WUF4aXNBbmdsZSIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInhBbmdsZSIsInpBbmdsZSIsInpDb29yZGluYXRlIiwiTWF0aCIsIm1heCIsInBlcnNwZWN0aXZlIiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwicm90YXRpb24iLCJmcm9tWEFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJub3JtYWwiLCJmcm9tUm90YXRpb24iLCJkcmF3RWxlbWVudHMiLCJjbGVhciIsInVzZVNoYWRlciIsImJpbmRCdWZmZXJzIiwiYWN0aXZhdGVUZXh0dXJlIiwic2NlbmUiLCJ3aW5k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LGFBQWhDLENBQWQ7O0FBRUFpRCxhQUFPQyxRQUFQLEdBQWtCLFlBQVc7QUFDM0JGLGNBQU0zQixNQUFOOztBQUVBMkIsY0FBTW5DLE1BQU4sQ0FBYWQsWUFBYixFQUEyQkMsYUFBM0I7QUFDRCxPQUpEOztBQU1BZ0QsWUFBTTNCLE1BQU47O0FBRUEyQixZQUFNbkMsTUFBTixDQUFhZCxZQUFiLEVBQTJCQyxhQUEzQjs7QUFFQWdELFlBQU1HLHFCQUFOO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCeEQsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHpvb20gPSByZXF1aXJlKCcuL3NjZW5lL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vc2NlbmUvYW5nbGVzJyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuL3NjZW5lL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi9zY2VuZS9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG5cbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpLFxuICAgICAgICAgIG1vdXNlVXBFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25FdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VXaGVlbEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZVVwRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VEb3duRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VNb3ZlRXZlbnRIYW5kbGVyKTtcbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKG1vdXNlV2hlZWxFdmVudEhhbmRsZXIpO1xuXG4gIH1cblxuICBtb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKSB7XG4gICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMuY29sb3VyU2hhZGVyKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY29sb3VyU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy5jb2xvdXJTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNhbnZhc0FuZFNoYWRlcnMoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBTY2VuZShjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuXG4gICAgICBzY2VuZS5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcbiAgICB9O1xuXG4gICAgc2NlbmUucmVzaXplKCk7XG5cbiAgICBzY2VuZS5yZW5kZXIoY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKTtcblxuICAgIHNjZW5lLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=