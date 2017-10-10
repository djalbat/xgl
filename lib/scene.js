'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    Zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Offset = require('./scene/offset'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Projection = require('./scene/projection'),
    ColourShader = require('./shader/colour'),
    TextureShader = require('./shader/texture'),
    MouseEvents = require('./scene/mouseEvents');

var Scene = function () {
  function Scene(zoom, offsetVec3, canvas, colourShader, textureShader) {
    _classCallCheck(this, Scene);

    this.zoom = zoom;
    this.offsetVec3 = offsetVec3;
    this.canvas = canvas;
    this.colourShader = colourShader;
    this.textureShader = textureShader;
  }

  _createClass(Scene, [{
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
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
        this.zoom.mouseWheelEventHandler(delta);

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
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          xAngle = xAxisAngle,
          ///
      yAngle = undefined,
          ///
      zAngle = yAxisAngle,
          ///
      zCoordinate = -distance,
          ///
      offset = Offset.fromVec3(this.offsetVec3),
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
          projection = Projection.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      this.drawElements(offset, rotation, position, projection, normal);
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var childElements = properties.childElements,
          imageMap = properties.imageMap,
          offset = properties.offset,
          initialPosition = properties.initialPosition,
          initialDistance = -initialPosition[2],
          offsetVec3 = offset,
          zoom = Zoom.fromInitialDistance(initialDistance),
          canvas = new Canvas(),
          colourShader = ColourShader.fromNothing(canvas),
          textureShader = TextureShader.fromNothing(canvas),
          scene = new Scene(zoom, offsetVec3, canvas, colourShader, textureShader);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zY2VuZS5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJyZXF1aXJlIiwiWm9vbSIsImFuZ2xlcyIsIk9mZnNldCIsIk5vcm1hbCIsIlJvdGF0aW9uIiwiUG9zaXRpb24iLCJQcm9qZWN0aW9uIiwiQ29sb3VyU2hhZGVyIiwiVGV4dHVyZVNoYWRlciIsIk1vdXNlRXZlbnRzIiwiU2NlbmUiLCJ6b29tIiwib2Zmc2V0VmVjMyIsImNhbnZhcyIsImNvbG91clNoYWRlciIsInRleHR1cmVTaGFkZXIiLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsInJlbmRlciIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsImdldFdpZHRoIiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwieUFuZ2xlIiwidW5kZWZpbmVkIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJvZmZzZXQiLCJmcm9tVmVjMyIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwicHJvamVjdGlvbiIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsImRyYXdFbGVtZW50cyIsImNsZWFyIiwidXNlU2hhZGVyIiwiYmluZEJ1ZmZlcnMiLCJhY3RpdmF0ZVRleHR1cmUiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImltYWdlTWFwIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsInNjZW5lIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImNyZWF0ZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVCdWZmZXJzIiwiZW5hYmxlRGVwdGhUZXN0aW5nIiwiZW5hYmxlRGVwdGhGdW5jdGlvbiIsIndpbmRvdyIsIm9ucmVzaXplIiwiYWRkTW91c2VFdmVudEhhbmRsZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxjQUFSLENBRGI7QUFBQSxJQUVNRSxTQUFTRixRQUFRLGdCQUFSLENBRmY7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLGdCQUFSLENBSGY7QUFBQSxJQUlNSSxTQUFTSixRQUFRLGdCQUFSLENBSmY7QUFBQSxJQUtNSyxXQUFXTCxRQUFRLGtCQUFSLENBTGpCO0FBQUEsSUFNTU0sV0FBV04sUUFBUSxrQkFBUixDQU5qQjtBQUFBLElBT01PLGFBQWFQLFFBQVEsb0JBQVIsQ0FQbkI7QUFBQSxJQVFNUSxlQUFlUixRQUFRLGlCQUFSLENBUnJCO0FBQUEsSUFTTVMsZ0JBQWdCVCxRQUFRLGtCQUFSLENBVHRCO0FBQUEsSUFVTVUsY0FBY1YsUUFBUSxxQkFBUixDQVZwQjs7SUFZTVcsSztBQUNKLGlCQUFZQyxJQUFaLEVBQWtCQyxVQUFsQixFQUE4QkMsTUFBOUIsRUFBc0NDLFlBQXRDLEVBQW9EQyxhQUFwRCxFQUFtRTtBQUFBOztBQUNqRSxTQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQSxV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QmdCLFlBTjBCLEdBTVhQLGFBQWFVLFdBQWIsQ0FBeUJKLE1BQXpCLENBTlc7QUFBQSxVQU8xQkUsYUFQMEIsR0FPVlAsY0FBY1MsV0FBZCxDQUEwQkosTUFBMUIsQ0FQVTtBQUFBLFVBUTFCMEQsS0FSMEIsR0FRbEIsSUFBSTdELEtBQUosQ0FBVUMsSUFBVixFQUFnQkMsVUFBaEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxZQUFwQyxFQUFrREMsYUFBbEQsQ0FSa0I7OztBQVVoQ21ELG9CQUFjTSxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhQyxNQUFiLENBQW9CNUQsWUFBcEIsRUFBa0NDLGFBQWxDO0FBQ0QsT0FGRDs7QUFJQSxVQUFJb0QsUUFBSixFQUFjO0FBQ1pwRCxzQkFBYzRELGFBQWQsQ0FBNEJSLFFBQTVCLEVBQXNDdEQsTUFBdEM7QUFDRDs7QUFFREUsb0JBQWM2RCxhQUFkLENBQTRCL0QsTUFBNUI7QUFDQUMsbUJBQWE4RCxhQUFiLENBQTJCL0QsTUFBM0I7O0FBRUFBLGFBQU9nRSxrQkFBUDtBQUNBaEUsYUFBT2lFLG1CQUFQOztBQUVBQyxhQUFPQyxRQUFQLEdBQWtCLFlBQVc7QUFDM0JULGNBQU1uQyxNQUFOO0FBQ0FtQyxjQUFNN0MsTUFBTjtBQUNELE9BSEQ7O0FBS0E2QyxZQUFNbkMsTUFBTjtBQUNBbUMsWUFBTTdDLE1BQU47O0FBRUE2QyxZQUFNVSxxQkFBTjs7QUFFQSxhQUFPVixLQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCekUsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9zY2VuZS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL3NjZW5lL2FuZ2xlcycpLFxuICAgICAgT2Zmc2V0ID0gcmVxdWlyZSgnLi9zY2VuZS9vZmZzZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vc2NlbmUvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcHJvamVjdGlvbicpLFxuICAgICAgQ29sb3VyU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlU2hhZGVyID0gcmVxdWlyZSgnLi9zaGFkZXIvdGV4dHVyZScpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIFNjZW5lIHtcbiAgY29uc3RydWN0b3Ioem9vbSwgb2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMub2Zmc2V0VmVjMyA9IG9mZnNldFZlYzM7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvdXJTaGFkZXIgPSBjb2xvdXJTaGFkZXI7XG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyID0gdGV4dHVyZVNoYWRlcjtcbiAgfVxuICBcbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0T2Zmc2V0VmVjMygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRWZWMzO1xuICB9XG4gIFxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBnZXRDb2xvdXJTaGFkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyU2hhZGVyO1xuICB9XG4gIFxuICBnZXRUZXh0dXJlU2hhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVTaGFkZXI7XG4gIH1cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMucmVuZGVyKCk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihmdW5jdGlvbihkZWx0YSkge1xuICAgICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgeUFuZ2xlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB6Q29vcmRpbmF0ZSA9IC1kaXN0YW5jZSwgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gT2Zmc2V0LmZyb21WZWMzKHRoaXMub2Zmc2V0VmVjMyksXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpLFxuICAgICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uID0gUHJvamVjdGlvbi5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG5cbiAgICB0aGlzLmRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLmNvbG91clNoYWRlcik7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmNvbG91clNoYWRlci5hY3RpdmF0ZVRleHR1cmUodGhpcy5jYW52YXMpO1xuXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMuY29sb3VyU2hhZGVyLCBvZmZzZXQsIHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcblxuICAgIHRoaXMuY2FudmFzLnVzZVNoYWRlcih0aGlzLnRleHR1cmVTaGFkZXIpO1xuICAgIFxuICAgIHRoaXMudGV4dHVyZVNoYWRlci5iaW5kQnVmZmVycyh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlU2hhZGVyLmFjdGl2YXRlVGV4dHVyZSh0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgdGhpcy5jYW52YXMucmVuZGVyKHRoaXMudGV4dHVyZVNoYWRlciwgb2Zmc2V0LCByb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cywgaW1hZ2VNYXAsIG9mZnNldCwgaW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGluaXRpYWxEaXN0YW5jZSA9IC1pbml0aWFsUG9zaXRpb25bMl0sIC8vL1xuICAgICAgICAgIG9mZnNldFZlYzMgPSBvZmZzZXQsICAvLy9cbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLFxuICAgICAgICAgIGNvbG91clNoYWRlciA9IENvbG91clNoYWRlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVTaGFkZXIgPSBUZXh0dXJlU2hhZGVyLmZyb21Ob3RoaW5nKGNhbnZhcyksXG4gICAgICAgICAgc2NlbmUgPSBuZXcgU2NlbmUoem9vbSwgb2Zmc2V0VmVjMywgY2FudmFzLCBjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpO1xuICAgIH0pO1xuXG4gICAgaWYgKGltYWdlTWFwKSB7XG4gICAgICB0ZXh0dXJlU2hhZGVyLmNyZWF0ZVRleHR1cmUoaW1hZ2VNYXAsIGNhbnZhcyk7XG4gICAgfVxuXG4gICAgdGV4dHVyZVNoYWRlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgY29sb3VyU2hhZGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTtcbiAgICBjYW52YXMuZW5hYmxlRGVwdGhGdW5jdGlvbigpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICBzY2VuZS5yZXNpemUoKTtcbiAgICAgIHNjZW5lLnJlbmRlcigpO1xuICAgIH07XG5cbiAgICBzY2VuZS5yZXNpemUoKTtcbiAgICBzY2VuZS5yZW5kZXIoKTtcblxuICAgIHNjZW5lLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=