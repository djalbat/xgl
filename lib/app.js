'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var angles = require('../../angles'),
    zoom = require('../../zoom'),
    Normal = require('../../normal'),
    Rotation = require('../../rotation'),
    Position = require('../../position'),
    Perspective = require('../../perspective'),
    MouseEvents = require('../../mouseEvents');

var App = function () {
  function App(colourShader, textureShader, canvas) {
    _classCallCheck(this, App);

    this.colourShader = colourShader;
    this.textureShader = textureShader;
    this.canvas = canvas;
  }

  _createClass(App, [{
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
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9hcHAuanMiXSwibmFtZXMiOlsiYW5nbGVzIiwicmVxdWlyZSIsInpvb20iLCJOb3JtYWwiLCJSb3RhdGlvbiIsIlBvc2l0aW9uIiwiUGVyc3BlY3RpdmUiLCJNb3VzZUV2ZW50cyIsIkFwcCIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJjYW52YXMiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwibW91c2VVcEV2ZW50SGFuZGxlciIsImJpbmQiLCJtb3VzZURvd25FdmVudEhhbmRsZXIiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJtb3VzZUNvb3JkaW5hdGVzIiwicmVuZGVyIiwiZGVsdGEiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJNYXRoIiwibWF4IiwicGVyc3BlY3RpdmUiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJtb2R1bGUiLCJleHBvcnRz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Q0FUakI7QUFBQSxVQVVNUSxXQUFXN0MsU0FBUzhDLGVBQVQsQ0FBeUJSLFdBQXpCLENBVmpCO0FBQUEsVUFXTVMsU0FBU2pELE9BQU9rRCxZQUFQLENBQW9CTCxRQUFwQixDQVhmOztBQWFBLFdBQUtNLFlBQUwsQ0FBa0JGLE1BQWxCLEVBQTBCSixRQUExQixFQUFvQ0UsUUFBcEMsRUFBOENKLFdBQTlDO0FBQ0Q7OztpQ0FFWU0sTSxFQUFRSixRLEVBQVVFLFEsRUFBVUosVyxFQUFhO0FBQ3BELFdBQUtuQyxNQUFMLENBQVk0QyxLQUFaOztBQUVBLFdBQUs1QyxNQUFMLENBQVk2QyxTQUFaLENBQXNCLEtBQUsvQyxZQUEzQjs7QUFFQSxXQUFLQSxZQUFMLENBQWtCZ0QsV0FBbEIsQ0FBOEIsS0FBSzlDLE1BQW5DOztBQUVBLFdBQUtGLFlBQUwsQ0FBa0JpRCxlQUFsQixDQUFrQyxLQUFLL0MsTUFBdkM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZYSxNQUFaLENBQW1CLEtBQUtmLFlBQXhCLEVBQXNDMkMsTUFBdEMsRUFBOENKLFFBQTlDLEVBQXdERSxRQUF4RCxFQUFrRUosV0FBbEU7O0FBRUEsV0FBS25DLE1BQUwsQ0FBWTZDLFNBQVosQ0FBc0IsS0FBSzlDLGFBQTNCOztBQUVBLFdBQUtBLGFBQUwsQ0FBbUIrQyxXQUFuQixDQUErQixLQUFLOUMsTUFBcEM7O0FBRUEsV0FBS0QsYUFBTCxDQUFtQmdELGVBQW5CLENBQW1DLEtBQUsvQyxNQUF4Qzs7QUFFQSxXQUFLQSxNQUFMLENBQVlhLE1BQVosQ0FBbUIsS0FBS2QsYUFBeEIsRUFBdUMwQyxNQUF2QyxFQUErQ0osUUFBL0MsRUFBeURFLFFBQXpELEVBQW1FSixXQUFuRTtBQUNEOzs7Ozs7QUFHSGEsT0FBT0MsT0FBUCxHQUFpQnBELEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYW5nbGVzID0gcmVxdWlyZSgnLi4vLi4vYW5nbGVzJyksXG4gICAgICB6b29tID0gcmVxdWlyZSgnLi4vLi4vem9vbScpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vLi4vbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4uLy4uL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4uLy4uL3BlcnNwZWN0aXZlJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlciwgY2FudmFzKSB7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VVcEV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcblxuICB9XG5cbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB6b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB6Q29vcmRpbmF0ZSA9IC1NYXRoLm1heCgxMCwgZGlzdGFuY2UpLCAvLy9cbiAgICAgICAgICBwZXJzcGVjdGl2ZSA9IFBlcnNwZWN0aXZlLmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB6QW5nbGUpLFxuICAgICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIl19