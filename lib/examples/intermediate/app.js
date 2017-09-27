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

      console.log(height);
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

      this.colourShader.bind(this.canvas);

      this.colourShader.activateTexture(this.canvas);

      this.canvas.render(this.colourShader, normal, rotation, position, perspective);

      this.canvas.useShader(this.textureShader);

      this.textureShader.bind(this.canvas);

      this.textureShader.activateTexture(this.canvas);

      this.canvas.render(this.textureShader, normal, rotation, position, perspective);
    }
  }]);

  return App;
}();

module.exports = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbImFuZ2xlcyIsInJlcXVpcmUiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJBcHAiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiY29uc29sZSIsImxvZyIsInhBeGlzQW5nbGUiLCJnZXRYQXhpc0FuZ2xlIiwieUF4aXNBbmdsZSIsImdldFlBeGlzQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ6QW5nbGUiLCJ6Q29vcmRpbmF0ZSIsIk1hdGgiLCJtYXgiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwiZHJhd0VsZW1lbnRzIiwiY2xlYXIiLCJ1c2VTaGFkZXIiLCJhY3Rp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Z2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgfVxuXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgY29uc29sZS5sb2coaGVpZ2h0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy5jb2xvdXJTaGFkZXIpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYmluZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iXX0=