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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9pbnRlcm1lZGlhdGUvYXBwLmpzIl0sIm5hbWVzIjpbImFuZ2xlcyIsInJlcXVpcmUiLCJ6b29tIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlBlcnNwZWN0aXZlIiwiTW91c2VFdmVudHMiLCJBcHAiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwieEF4aXNBbmdsZSIsImdldFhBeGlzQW5nbGUiLCJ5QXhpc0FuZ2xlIiwiZ2V0WUF4aXNBbmdsZSIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInhBbmdsZSIsInpBbmdsZSIsInpDb29yZGluYXRlIiwiTWF0aCIsIm1heCIsInBlcnNwZWN0aXZlIiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwicm90YXRpb24iLCJmcm9tWEFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJub3JtYWwiLCJmcm9tUm90YXRpb24iLCJkcmF3RWxlbWVudHMiLCJjbGVhciIsInVzZVNoYWRlciIsImJpbmRCdWZmZXJzIiwiYWN0aXZh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VCxDQUE2QlIsTUFBN0IsRUFBcUNDLE1BQXJDLENBVGpCO0FBQUEsVUFVTVEsV0FBVzdDLFNBQVM4QyxlQUFULENBQXlCUixXQUF6QixDQVZqQjtBQUFBLFVBV01TLFNBQVNqRCxPQUFPa0QsWUFBUCxDQUFvQkwsUUFBcEIsQ0FYZjs7QUFhQSxXQUFLTSxZQUFMLENBQWtCRixNQUFsQixFQUEwQkosUUFBMUIsRUFBb0NFLFFBQXBDLEVBQThDSixXQUE5QztBQUNEOzs7aUNBRVlNLE0sRUFBUUosUSxFQUFVRSxRLEVBQVVKLFcsRUFBYTtBQUNwRCxXQUFLbkMsTUFBTCxDQUFZNEMsS0FBWjs7QUFFQSxXQUFLNUMsTUFBTCxDQUFZNkMsU0FBWixDQUFzQixLQUFLL0MsWUFBM0I7O0FBRUEsV0FBS0EsWUFBTCxDQUFrQmdELFdBQWxCLENBQThCLEtBQUs5QyxNQUFuQzs7QUFFQSxXQUFLRixZQUFMLENBQWtCaUQsZUFBbEIsQ0FBa0MsS0FBSy9DLE1BQXZDOztBQUVBLFdBQUtBLE1BQUwsQ0FBWWEsTUFBWixDQUFtQixLQUFLZixZQUF4QixFQUFzQzJDLE1BQXRDLEVBQThDSixRQUE5QyxFQUF3REUsUUFBeEQsRUFBa0VKLFdBQWxFOztBQUVBLFdBQUtuQyxNQUFMLENBQVk2QyxTQUFaLENBQXNCLEtBQUs5QyxhQUEzQjs7QUFFQSxXQUFLQSxhQUFMLENBQW1CK0MsV0FBbkIsQ0FBK0IsS0FBSzlDLE1BQXBDOztBQUVBLFdBQUtELGFBQUwsQ0FBbUJnRCxlQUFuQixDQUFtQyxLQUFLL0MsTUFBeEM7O0FBRUEsV0FBS0EsTUFBTCxDQUFZYSxNQUFaLENBQW1CLEtBQUtkLGFBQXhCLEVBQXVDMEMsTUFBdkMsRUFBK0NKLFFBQS9DLEVBQXlERSxRQUF6RCxFQUFtRUosV0FBbkU7QUFDRDs7Ozs7O0FBR0hhLE9BQU9DLE9BQVAsR0FBaUJwRCxHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGFuZ2xlcyA9IHJlcXVpcmUoJy4uLy4uL2FuZ2xlcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4uLy4uL3pvb20nKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuLi8uLi9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuLi8uLi9wb3NpdGlvbicpLFxuICAgICAgUGVyc3BlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9wZXJzcGVjdGl2ZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3Rvcihjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcykge1xuICAgIHRoaXMuY29sb3VyU2hhZGVyID0gY29sb3VyU2hhZGVyO1xuICAgIHRoaXMudGV4dHVyZVNoYWRlciA9IHRleHR1cmVTaGFkZXI7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyksXG4gICAgICAgICAgbW91c2VVcEV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkV2ZW50SGFuZGxlciA9IHRoaXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZVdoZWVsRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlVXBFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihtb3VzZURvd25FdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZU1vdmVFdmVudEhhbmRsZXIpO1xuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIobW91c2VXaGVlbEV2ZW50SGFuZGxlcik7XG5cbiAgfVxuXG4gIG1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuICB9XG5cbiAgbW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB6b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy5jb2xvdXJTaGFkZXIpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jb2xvdXJTaGFkZXIuYWN0aXZhdGVUZXh0dXJlKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLmNvbG91clNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLnRleHR1cmVTaGFkZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmJpbmRCdWZmZXJzKHRoaXMuY2FudmFzKTtcblxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgbm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==