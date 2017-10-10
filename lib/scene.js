'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Offset = require('./scene/offset'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Perspective = require('./scene/perspective'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture'),
    MouseEvents = require('./scene/mouseEvents');

var Scene = function () {
  function Scene(canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }

  _createClass(Scene, [{
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
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.render(); ///
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
        zoom.mouseWheelEventHandler(delta);

        this.render();
      }.bind(this));
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
      xCoordinate = 0,
          ///-18,
      yCoordinate = -0,
          ///-16,
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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(canvas, colourShader, textureShader);


      childElements.forEach(function (childElement) {
        childElement.create(colourShader, textureShader);
      });

      if (imageMap) {
        textureShader.createTexture(imageMap, canvas);
      }

      textureShader.createBuffers(canvas);
      colourShader.createBuffers(canvas);

      canvas.enableDepthTesting();
      canvas.enableDepthFunction();

      window.onresize = function () {
        scene.resize();
        scene.render();
      };

      scene.resize();
      scene.render();

      scene.addMouseEventHandlers();

      return scene;
    }
  }]);

  return Scene;
}();

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJyZXF1aXJlIiwiem9vbSIsImFuZ2xlcyIsIk9mZnNldCIsIk5vcm1hbCIsIlJvdGF0aW9uIiwiUG9zaXRpb24iLCJQZXJzcGVjdGl2ZSIsIkNvbG91clNoYWRlciIsIlRleHR1cmVTaGFkZXIiLCJNb3VzZUV2ZW50cyIsIlNjZW5lIiwiY2FudmFzIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsIm1vdXNlRXZlbnRzIiwiZnJvbU5vdGhpbmciLCJhZGRNb3VzZVVwRXZlbnRIYW5kbGVyIiwibW91c2VVcEV2ZW50SGFuZGxlciIsImJpbmQiLCJhZGRNb3VzZURvd25FdmVudEhhbmRsZXIiLCJtb3VzZURvd25FdmVudEhhbmRsZXIiLCJhZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJtb3VzZUNvb3JkaW5hdGVzIiwibW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwicmVuZGVyIiwiYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImNsaWVudFdpZHRoIiwiZ2V0Q2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJnZXRDbGllbnRIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInJlc2l6ZSIsInhBeGlzQW5nbGUiLCJnZXRYQXhpc0FuZ2xlIiwieUF4aXNBbmdsZSIsImdldFlBeGlzQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwiZ2V0V2lkdGgiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ6QW5nbGUiLCJ4Q29vcmRpbmF0ZSIsInlDb29yZGluYXRlIiwiekNvb3JkaW5hdGUiLCJNYXRoIiwibWF4Iiwib2Zmc2V0IiwiZnJvbVhDb29yZGluYXRlQW5kWUNvb3JkaW5hdGUiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsInBlcnNwZWN0aXZlIiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwiZHJhd0VsZW1lbnRzIiwiY2xlYXIiLCJ1c2VTaGFkZXIiLCJiaW5kQnVmZmVycyIsImFjdGl2YXRlVGV4dHVyZSIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiaW1hZ2VNYXAiLCJzY2VuZSIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJjcmVhdGUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlQnVmZmVycyIsImVuYWJsZURlcHRoVGVzdGluZyIsImVuYWJsZURlcHRoRnVuY3Rpb24iLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFVBQVIsQ0FBZjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsY0FBUixDQURiO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxnQkFBUixDQUZmO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxnQkFBUixDQUhmO0FBQUEsSUFJTUksU0FBU0osUUFBUSxnQkFBUixDQUpmO0FBQUEsSUFLTUssV0FBV0wsUUFBUSxrQkFBUixDQUxqQjtBQUFBLElBTU1NLFdBQVdOLFFBQVEsa0JBQVIsQ0FOakI7QUFBQSxJQU9NTyxjQUFjUCxRQUFRLHFCQUFSLENBUHBCO0FBQUEsSUFRTVEsZUFBZVIsUUFBUSxpQkFBUixDQVJyQjtBQUFBLElBU01TLGdCQUFnQlQsUUFBUSxrQkFBUixDQVR0QjtBQUFBLElBVU1VLGNBQWNWLFFBQVEscUJBQVIsQ0FWcEI7O0lBWU1XLEs7QUFDSixpQkFBWUMsTUFBWixFQUFvQkMsWUFBcEIsRUFBa0NDLGFBQWxDLEVBQWlEO0FBQUE7O0FBQy9DLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0YsTUFB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ZCxDQUE0QjlELE1BQTVCO0FBQ0FDLG1CQUFhNkQsYUFBYixDQUEyQjlELE1BQTNCOztBQUVBQSxhQUFPK0Qsa0JBQVA7QUFDQS9ELGFBQU9nRSxtQkFBUDs7QUFFQUMsYUFBT0MsUUFBUCxHQUFrQixZQUFXO0FBQzNCVCxjQUFNbEMsTUFBTjtBQUNBa0MsY0FBTTVDLE1BQU47QUFDRCxPQUhEOztBQUtBNEMsWUFBTWxDLE1BQU47QUFDQWtDLFlBQU01QyxNQUFOOztBQUVBNEMsWUFBTVUscUJBQU47O0FBRUEsYUFBT1YsS0FBUDtBQUNEOzs7Ozs7QUFHSFcsT0FBT0MsT0FBUCxHQUFpQnRFLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgem9vbSA9IHJlcXVpcmUoJy4vc2NlbmUvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9zY2VuZS9hbmdsZXMnKSxcbiAgICAgIE9mZnNldCA9IHJlcXVpcmUoJy4vc2NlbmUvb2Zmc2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuL3NjZW5lL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcG9zaXRpb24nKSxcbiAgICAgIFBlcnNwZWN0aXZlID0gcmVxdWlyZSgnLi9zY2VuZS9wZXJzcGVjdGl2ZScpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3IoY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLmNvbG91clNoYWRlciA9IGNvbG91clNoYWRlcjtcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIgPSB0ZXh0dXJlU2hhZGVyO1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyU2hhZGVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVTaGFkZXI7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihmdW5jdGlvbihkZWx0YSkge1xuICAgICAgem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgcmVzaXplKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB6b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB4Q29vcmRpbmF0ZSA9IDAsICAvLy8tMTgsXG4gICAgICAgICAgeUNvb3JkaW5hdGUgPSAtMCwgLy8vLTE2LFxuICAgICAgICAgIHpDb29yZGluYXRlID0gLU1hdGgubWF4KDEwLCBkaXN0YW5jZSksIC8vL1xuICAgICAgICAgIG9mZnNldCA9IE9mZnNldC5mcm9tWENvb3JkaW5hdGVBbmRZQ29vcmRpbmF0ZSh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHBlcnNwZWN0aXZlID0gUGVyc3BlY3RpdmUuZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuXG4gICAgdGhpcy5kcmF3RWxlbWVudHMob2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHBlcnNwZWN0aXZlLCBub3JtYWwpO1xuICB9XG5cbiAgZHJhd0VsZW1lbnRzKG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcGVyc3BlY3RpdmUsIG5vcm1hbCk7XG5cbiAgICB0aGlzLmNhbnZhcy51c2VTaGFkZXIodGhpcy50ZXh0dXJlU2hhZGVyKTtcbiAgICBcbiAgICB0aGlzLnRleHR1cmVTaGFkZXIuYmluZEJ1ZmZlcnModGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuICAgIFxuICAgIHRoaXMuY2FudmFzLnJlbmRlcih0aGlzLnRleHR1cmVTaGFkZXIsIG9mZnNldCwgcm90YXRpb24sIHBvc2l0aW9uLCBwZXJzcGVjdGl2ZSwgbm9ybWFsKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzLCBpbWFnZU1hcCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICAgICAgY29sb3VyU2hhZGVyID0gQ29sb3VyU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZVNoYWRlciA9IFRleHR1cmVTaGFkZXIuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICBzY2VuZSA9IG5ldyBTY2VuZShjYW52YXMsIGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuY3JlYXRlKGNvbG91clNoYWRlciwgdGV4dHVyZVNoYWRlcik7XG4gICAgfSk7XG5cbiAgICBpZiAoaW1hZ2VNYXApIHtcbiAgICAgIHRleHR1cmVTaGFkZXIuY3JlYXRlVGV4dHVyZShpbWFnZU1hcCwgY2FudmFzKTtcbiAgICB9XG5cbiAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICBjb2xvdXJTaGFkZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY2FudmFzLmVuYWJsZURlcHRoVGVzdGluZygpO1xuICAgIGNhbnZhcy5lbmFibGVEZXB0aEZ1bmN0aW9uKCk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgICAgc2NlbmUucmVuZGVyKCk7XG4gICAgfTtcblxuICAgIHNjZW5lLnJlc2l6ZSgpO1xuICAgIHNjZW5lLnJlbmRlcigpO1xuXG4gICAgc2NlbmUuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==