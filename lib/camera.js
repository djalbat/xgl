'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Zoom = require('./camera/zoom'),
    angles = require('./camera/angles'),
    keyEvents = require('./camera/keyEvents'),
    MouseEvents = require('./camera/mouseEvents'),
    OffsetMatrix = require('./matrix/offset'),
    NormalMatrix = require('./matrix/normal'),
    RotationMatrix = require('./matrix/rotation'),
    PositionMatrix = require('./matrix/position'),
    ProjectionMatrix = require('./matrix/projection');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(zoom, offset, updateHandler, canvas) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.zoom = zoom;
    _this.offset = offset;
    _this.updateHandler = updateHandler;
    _this.canvas = canvas;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }, {
    key: 'getUpdateHandler',
    value: function getUpdateHandler() {
      return this.updateHandler;
    }
  }, {
    key: 'getCanvas',
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: 'addKeyEventHandlers',
    value: function addKeyEventHandlers() {
      keyEvents.addCtrlKeyHandler(function (keyDown) {
        debugger;
      });

      keyEvents.addShiftKeyHandler(function (keyDown) {
        debugger;
      });
    }
  }, {
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpHandler(angles.mouseUpHandler.bind(angles));

      mouseEvents.addMouseDownHandler(angles.mouseDownHandler.bind(angles));

      mouseEvents.addMouseMoveHandler(function (mouseCoordinates) {
        angles.mouseMoveHandler(mouseCoordinates);

        this.update();
      }.bind(this));

      mouseEvents.addMouseWheelHandler(function (delta) {
        this.zoom.mouseWheelEventHandler(delta);

        this.update();
      }.bind(this));
    }
  }, {
    key: 'create',
    value: function create(colourRenderer, textureRenderer) {
      ///
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate(updateHandler) {
      this.updateHandler = updateHandler;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.update();
    }
  }, {
    key: 'update',
    value: function update() {
      var xAngle = angles.getXAngle(),
          yAngle = angles.getYAngle(),
          zAngle = angles.getZAngle(),
          distance = this.zoom.getDistance(),
          width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          offsetMatrix = OffsetMatrix.fromOffset(this.offset),
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

      if (this.updateHandler) {
        ///
        this.updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        onUpdate: this.onUpdate.bind(this),
        forceUpdate: this.forceUpdate.bind(this)
      };
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.addKeyEventHandlers();
      this.addMouseEventHandlers();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialPosition = properties.initialPosition,
          initialOffset = properties.initialOffset,
          zoom = Zoom.fromInitialPosition(initialPosition),
          offset = initialOffset,
          canvas = new Canvas(),
          updateHandler = null,
          camera = new Camera(zoom, offset, updateHandler, canvas);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwia2V5RXZlbnRzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInpvb20iLCJvZmZzZXQiLCJ1cGRhdGVIYW5kbGVyIiwiY2FudmFzIiwiYWRkQ3RybEtleUhhbmRsZXIiLCJrZXlEb3duIiwiYWRkU2hpZnRLZXlIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBIYW5kbGVyIiwibW91c2VVcEhhbmRsZXIiLCJiaW5kIiwiYWRkTW91c2VEb3duSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJhZGRNb3VzZU1vdmVIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsSGFuZGxlciIsImRlbHRhIiwibW91c2VXaGVlbEV2ZW50SGFuZGxlciIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwieEFuZ2xlIiwiZ2V0WEFuZ2xlIiwieUFuZ2xlIiwiZ2V0WUFuZ2xlIiwiekFuZ2xlIiwiZ2V0WkFuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJvZmZzZXRNYXRyaXgiLCJmcm9tT2Zmc2V0Iiwicm90YXRpb25NYXRyaXgiLCJmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb25NYXRyaXgiLCJmcm9tRGlzdGFuY2UiLCJwcm9qZWN0aW9uTWF0cml4IiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsTWF0cml4IiwiZnJvbVJvdGF0aW9uTWF0cml4Iiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZEtleUV2ZW50SGFuZGxlcnMiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbE9mZnNldCIsImZyb21Jbml0aWFsUG9zaXRpb24iLCJjYW1lcmEiLCJpbml0aWFsaXNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFdBQVIsQ0FBaEI7QUFBQSxJQUNNQyxTQUFTRCxRQUFRLFVBQVIsQ0FEZjtBQUFBLElBRU1FLE9BQU9GLFFBQVEsZUFBUixDQUZiO0FBQUEsSUFHTUcsU0FBU0gsUUFBUSxpQkFBUixDQUhmO0FBQUEsSUFJTUksWUFBWUosUUFBUSxvQkFBUixDQUpsQjtBQUFBLElBS01LLGNBQWNMLFFBQVEsc0JBQVIsQ0FMcEI7QUFBQSxJQU1NTSxlQUFlTixRQUFRLGlCQUFSLENBTnJCO0FBQUEsSUFPTU8sZUFBZVAsUUFBUSxpQkFBUixDQVByQjtBQUFBLElBUU1RLGlCQUFpQlIsUUFBUSxtQkFBUixDQVJ2QjtBQUFBLElBU01TLGlCQUFpQlQsUUFBUSxtQkFBUixDQVR2QjtBQUFBLElBVU1VLG1CQUFtQlYsUUFBUSxxQkFBUixDQVZ6Qjs7SUFZTVcsTTs7O0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCQyxhQUExQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFBQTs7QUFBQTs7QUFHL0MsVUFBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFOK0M7QUFPaEQ7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtILElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFB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TUFIMEIsR0FHakJrRCxhQUhpQjtBQUFBLFVBSTFCaEQsTUFKMEIsR0FJakIsSUFBSWQsTUFBSixFQUppQjtBQUFBLFVBSzFCYSxhQUwwQixHQUtWLElBTFU7QUFBQSxVQU0xQm1ELE1BTjBCLEdBTWpCLElBQUl0RCxNQUFKLENBQVdDLElBQVgsRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixFQUF3Q0MsTUFBeEMsQ0FOaUI7OztBQVFoQ2tELGFBQU9DLFVBQVA7O0FBRUEsYUFBT0QsTUFBUDtBQUNEOzs7O0VBN0drQmxFLE87O0FBZ0hyQm9FLE9BQU9DLE9BQVAsR0FBaUJ6RCxNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9jYW1lcmEvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9jYW1lcmEvYW5nbGVzJyksXG4gICAgICBrZXlFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9rZXlFdmVudHMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIE9mZnNldE1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L29mZnNldCcpLFxuICAgICAgTm9ybWFsTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcHJvamVjdGlvbicpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioem9vbSwgb2Zmc2V0LCB1cGRhdGVIYW5kbGVyLCBjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuICAgIFxuICAgIHRoaXMuem9vbSA9IHpvb207XG4gICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXQ7XG4gIH1cblxuICBnZXRVcGRhdGVIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG5cbiAgYWRkS2V5RXZlbnRIYW5kbGVycygpIHtcbiAgICBrZXlFdmVudHMuYWRkQ3RybEtleUhhbmRsZXIoZnVuY3Rpb24oa2V5RG93bikge1xuICAgICAgZGVidWdnZXJcbiAgICB9KTtcblxuICAgIGtleUV2ZW50cy5hZGRTaGlmdEtleUhhbmRsZXIoZnVuY3Rpb24oa2V5RG93bikge1xuICAgICAgZGVidWdnZXJcbiAgICB9KTtcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEhhbmRsZXIoYW5nbGVzLm1vdXNlVXBIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25IYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25IYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsSGFuZGxlcihmdW5jdGlvbihkZWx0YSkge1xuICAgICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIC8vL1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSBhbmdsZXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gT2Zmc2V0TWF0cml4LmZyb21PZmZzZXQodGhpcy5vZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gUm90YXRpb25NYXRyaXguZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IFBvc2l0aW9uTWF0cml4LmZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IFByb2plY3Rpb25NYXRyaXguZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IE5vcm1hbE1hdHJpeC5mcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLnVwZGF0ZUhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkS2V5RXZlbnRIYW5kbGVycygpO1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbFBvc2l0aW9uLCBpbml0aWFsT2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksICAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEoem9vbSwgb2Zmc2V0LCB1cGRhdGVIYW5kbGVyLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19