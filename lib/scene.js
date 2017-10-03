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
      xCoordinate = -24,
          yCoordinate = 0,
          zCoordinate = -Math.max(10, distance),
          ///
      perspective = Perspective.fromWidthAndHeight(width, height),
          rotation = Rotation.fromXAngleAndZAngle(xAngle, zAngle),
          position = Position.fromCoordinates(xCoordinate, yCoordinate, zCoordinate),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJ6b29tIiwicmVxdWlyZSIsImFuZ2xlcyIsIk5vcm1hbCIsIlJvdGF0aW9uIiwiUG9zaXRpb24iLCJQZXJzcGVjdGl2ZSIsIk1vdXNlRXZlbnRzIiwiU2NlbmUiLCJjYW52YXMiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsInJlbmRlciIsImRlbHRhIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwieEF4aXNBbmdsZSIsImdldFhBeGlzQW5nbGUiLCJ5QXhpc0FuZ2xlIiwiZ2V0WUF4aXNBbmdsZSIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInhBbmdsZSIsInpBbmdsZSIsInhDb29yZGluYXRlIiwieUNvb3JkaW5hdGUiLCJ6Q29vcmRpbmF0ZSIsIk1hdGgiLCJtYXgiLCJwZXJzcGVjdGl2ZSIsImZyb21XaWR0aEFuZEhlaWdodCIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbUNvb3JkaW5hdGVzIiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwiZHJhd0VsZW1lbnRzIiwiY2xlYXIiLCJ1c2VTaGFkZXIiLCJiaW5kQnVmZmVycyIsImFjdGl2YXRlVGV4dHVyZSIsInNjZW5lIiwid2luZG93Iiwib25yZXNpemUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLGdCQUFSLENBRGY7QUFBQSxJQUVNRSxTQUFTRixRQUFRLGdCQUFSLENBRmY7QUFBQSxJQUdNRyxXQUFXSCxRQUFRLGtCQUFSLENBSGpCO0FBQUEsSUFJTUksV0FBV0osUUFBUSxrQkFBUixDQUpqQjtBQUFBLElBS01LLGNBQWNMLFFBQVEscUJBQVIsQ0FMcEI7QUFBQSxJQU1NTSxjQUFjTixRQUFRLHFCQUFSLENBTnBCOztJQVFNTyxLO0FBQ0osaUJBQVlDLE1BQVosRUFBb0JDLFlBQXBCLEVBQWtDQyxhQUFsQyxFQUFpRDtBQUFBOztBQUMvQyxTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0Q7Ozs7NENBRXVCO0FBQ3RCLFVBQU1DLGNBQWNMLFlBQVlNLFdBQVosQ0FBd0IsS0FBS0osTUFBN0IsQ0FBcEI7QUFBQSxVQUNNSyxzQkFBc0IsS0FBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBRDVCO0FBQUEsVUFFTUMsd0JBQXdCLEtBQUtBLHFCQUFMLENBQTJCRCxJQUEzQixDQUFnQyxJQUFoQyxDQUY5QjtBQUFBLFVBR01FLHdCQUF3QixLQUFLQSxxQkFBTCxDQUEyQkYsSUFBM0IsQ0FBZ0MsSUFBaEMsQ0FIOUI7QUFBQSxVQUlNRyx5QkFBeUIsS0FBS0Esc0JBQUwsQ0FBNEJILElBQTVCLENBQWlDLElBQWpDLENBSi9COztBQU1BSCxrQkFBWU8sc0JBQVosQ0FBbUNMLG1CQUFuQztBQUNBRixrQkFBWVEsd0JBQVosQ0FBcUNKLHFCQUFyQztBQUNBSixrQkFBWVMsd0JBQVosQ0FBcUNKLHFC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QW5FO0FBQ0Q7Ozt5Q0FFMkJ2QyxNLEVBQVFDLFksRUFBY0MsYSxFQUFlO0FBQy9ELFVBQU1rRCxRQUFRLElBQUlyRCxLQUFKLENBQVVDLE1BQVYsRUFBa0JDLFlBQWxCLEVBQWdDQyxhQUFoQyxDQUFkOztBQUVBbUQsYUFBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCRixjQUFNN0IsTUFBTjs7QUFFQTZCLGNBQU1yQyxNQUFOLENBQWFkLFlBQWIsRUFBMkJDLGFBQTNCO0FBQ0QsT0FKRDs7QUFNQWtELFlBQU03QixNQUFOOztBQUVBNkIsWUFBTXJDLE1BQU4sQ0FBYWQsWUFBYixFQUEyQkMsYUFBM0I7O0FBRUFrRCxZQUFNRyxxQkFBTjtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFELEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB6b29tID0gcmVxdWlyZSgnLi9zY2VuZS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL3NjZW5lL2FuZ2xlcycpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9zY2VuZS9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3Bvc2l0aW9uJyksXG4gICAgICBQZXJzcGVjdGl2ZSA9IHJlcXVpcmUoJy4vc2NlbmUvcGVyc3BlY3RpdmUnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9zY2VuZS9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBTY2VuZSB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgfVxuXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKSxcbiAgICAgICAgICBtb3VzZVVwRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duRXZlbnRIYW5kbGVyID0gdGhpcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUV2ZW50SGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VVcEV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKG1vdXNlRG93bkV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlTW92ZUV2ZW50SGFuZGxlcik7XG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihtb3VzZVdoZWVsRXZlbnRIYW5kbGVyKTtcblxuICB9XG5cbiAgbW91c2VVcEV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG4gIH1cblxuICBtb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcykge1xuICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB6b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB4Q29vcmRpbmF0ZSA9IC0yNCxcbiAgICAgICAgICB5Q29vcmRpbmF0ZSA9IDAsXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtTWF0aC5tYXgoMTAsIGRpc3RhbmNlKSwgLy8vXG4gICAgICAgICAgcGVyc3BlY3RpdmUgPSBQZXJzcGVjdGl2ZS5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21Db29yZGluYXRlcyh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUsIHpDb29yZGluYXRlKSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcblxuICAgIHRoaXMuZHJhd0VsZW1lbnRzKG5vcm1hbCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSk7XG4gIH1cblxuICBkcmF3RWxlbWVudHMobm9ybWFsLCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuXG4gICAgdGhpcy5jYW52YXMudXNlU2hhZGVyKHRoaXMudGV4dHVyZVNoYWRlcik7XG5cbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNhbnZhcy5yZW5kZXIodGhpcy50ZXh0dXJlU2hhZGVyLCBub3JtYWwsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUpO1xuICB9XG5cbiAgc3RhdGljIGZyb21DYW52YXNBbmRTaGFkZXJzKGNhbnZhcywgY29sb3VyU2hhZGVyLCB0ZXh0dXJlU2hhZGVyKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY2VuZS5yZXNpemUoKTtcblxuICAgICAgc2NlbmUucmVuZGVyKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgfTtcblxuICAgIHNjZW5lLnJlc2l6ZSgpO1xuXG4gICAgc2NlbmUucmVuZGVyKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBzY2VuZS5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuIl19