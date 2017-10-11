'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Zoom = require('./camera/zoom'),
    angles = require('./camera/angles'),
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
    key: 'addMouseEventHandlers',
    value: function addMouseEventHandlers() {
      var mouseEvents = MouseEvents.fromNothing(this.canvas);

      mouseEvents.addMouseUpEventHandler(angles.mouseUpEventHandler.bind(angles));

      mouseEvents.addMouseDownEventHandler(angles.mouseDownEventHandler.bind(angles));

      mouseEvents.addMouseMoveEventHandler(function (mouseCoordinates) {
        angles.mouseMoveEventHandler(mouseCoordinates);

        this.update();
      }.bind(this));

      mouseEvents.addMouseWheelEventHandler(function (delta) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTW91c2VFdmVudHMiLCJPZmZzZXRNYXRyaXgiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInpvb20iLCJvZmZzZXQiLCJ1cGRhdGVIYW5kbGVyIiwiY2FudmFzIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJ6QW5nbGUiLCJnZXRaQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsIm9mZnNldE1hdHJpeCIsImZyb21PZmZzZXQiLCJyb3RhdGlvbk1hdHJpeCIsImZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbk1hdHJpeCIsImZyb21EaXN0YW5jZSIsInByb2plY3Rpb25NYXRyaXgiLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWxNYXRyaXgiLCJmcm9tUm90YXRpb25NYXRyaXgiLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkTW91c2VFdmVudEhhbmRsZXJzIiwicHJvcGVydGllcyIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxPZmZzZXQiLCJmcm9tSW5pdGlhbFBvc2l0aW9uIiwiY2FtZXJhIiwiaW5pdGlhbGlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxXQUFSLENBQWhCO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxVQUFSLENBRGY7QUFBQSxJQUVNRSxPQUFPRixRQUFRLGVBQVIsQ0FGYjtBQUFBLElBR01HLFNBQVNILFFBQVEsaUJBQVIsQ0FIZjtBQUFBLElBSU1JLGNBQWNKLFFBQVEsc0JBQVIsQ0FKcEI7QUFBQSxJQUtNSyxlQUFlTCxRQUFRLGlCQUFSLENBTHJCO0FBQUEsSUFNTU0sZUFBZU4sUUFBUSxpQkFBUixDQU5yQjtBQUFBLElBT01PLGlCQUFpQlAsUUFBUSxtQkFBUixDQVB2QjtBQUFBLElBUU1RLGlCQUFpQlIsUUFBUSxtQkFBUixDQVJ2QjtBQUFBLElBU01TLG1CQUFtQlQsUUFBUSxxQkFBUixDQVR6Qjs7SUFXTVUsTTs7O0FBQ0osa0JBQVlDLElBQVosRUFBa0JDLE1BQWxCLEVBQTBCQyxhQUExQixFQUF5Q0MsTUFBekMsRUFBaUQ7QUFBQTs7QUFBQTs7QUFHL0MsVUFBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFOK0M7QUFPaEQ7Ozs7OEJBRVM7QUFDUixhQUFPLEtBQUtILElBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsYUFBTyxLQUFLQyxhQUFaO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0MsTUFBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU1DLGNBQWNYLFlBQVlZLFdBQVosQ0FBd0IsS0FBS0YsTUFBN0IsQ0FBcEI7O0FB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RCxPOztBQXFHckIrRCxPQUFPQyxPQUFQLEdBQWlCckQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vY2FtZXJhL2FuZ2xlcycpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpLFxuICAgICAgT2Zmc2V0TWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvb2Zmc2V0JyksXG4gICAgICBOb3JtYWxNYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uTWF0cml4ID0gcmVxdWlyZSgnLi9tYXRyaXgvcG9zaXRpb24nKSxcbiAgICAgIFByb2plY3Rpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wcm9qZWN0aW9uJyk7XG5cbmNsYXNzIENhbWVyYSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih6b29tLCBvZmZzZXQsIHVwZGF0ZUhhbmRsZXIsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIGdldFVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlSGFuZGxlcjtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGFkZE1vdXNlRXZlbnRIYW5kbGVycygpIHtcbiAgICBjb25zdCBtb3VzZUV2ZW50cyA9IE1vdXNlRXZlbnRzLmZyb21Ob3RoaW5nKHRoaXMuY2FudmFzKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlVXBFdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlVXBFdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlRG93bkV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VEb3duRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZU1vdmVFdmVudEhhbmRsZXIoZnVuY3Rpb24obW91c2VDb29yZGluYXRlcykge1xuICAgICAgYW5nbGVzLm1vdXNlTW92ZUV2ZW50SGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEV2ZW50SGFuZGxlcihmdW5jdGlvbihkZWx0YSkge1xuICAgICAgdGhpcy56b29tLm1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGUoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIC8vL1xuICB9XG5cbiAgb25VcGRhdGUodXBkYXRlSGFuZGxlcikge1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEFuZ2xlID0gYW5nbGVzLmdldFhBbmdsZSgpLFxuICAgICAgICAgIHlBbmdsZSA9IGFuZ2xlcy5nZXRZQW5nbGUoKSxcbiAgICAgICAgICB6QW5nbGUgPSBhbmdsZXMuZ2V0WkFuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgb2Zmc2V0TWF0cml4ID0gT2Zmc2V0TWF0cml4LmZyb21PZmZzZXQodGhpcy5vZmZzZXQpLFxuICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gUm90YXRpb25NYXRyaXguZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeCA9IFBvc2l0aW9uTWF0cml4LmZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeCA9IFByb2plY3Rpb25NYXRyaXguZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbE1hdHJpeCA9IE5vcm1hbE1hdHJpeC5mcm9tUm90YXRpb25NYXRyaXgocm90YXRpb25NYXRyaXgpO1xuICAgIFxuICAgIGlmICh0aGlzLnVwZGF0ZUhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbFBvc2l0aW9uLCBpbml0aWFsT2Zmc2V0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICBvZmZzZXQgPSBpbml0aWFsT2Zmc2V0LCAvLy9cbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksICAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEoem9vbSwgb2Zmc2V0LCB1cGRhdGVIYW5kbGVyLCBjYW52YXMpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19