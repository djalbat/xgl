'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Zoom = require('./camera/zoom'),
    angles = require('./camera/angles'),
    Normal = require('./camera/normal'),
    Rotation = require('./camera/rotation'),
    Position = require('./camera/position'),
    Projection = require('./camera/projection'),
    MouseEvents = require('./camera/mouseEvents');

var Camera = function (_Element) {
  _inherits(Camera, _Element);

  function Camera(zoom, canvas, updateHandler) {
    _classCallCheck(this, Camera);

    var _this = _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).call(this));

    _this.zoom = zoom;
    _this.canvas = canvas;
    _this.updateHandler = updateHandler;
    return _this;
  }

  _createClass(Camera, [{
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
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
          rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromDistance(distance),
          projection = Projection.fromWidthAndHeight(width, height),
          normal = Normal.fromRotation(rotation);

      if (this.updateHandler) {
        ///
        this.updateHandler(rotation, position, projection, normal);
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
          zoom = Zoom.fromInitialPosition(initialPosition),
          canvas = new Canvas(),
          updateHandler = null,
          camera = new Camera(zoom, canvas, updateHandler);


      camera.initialise();

      return camera;
    }
  }]);

  return Camera;
}(Element);

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlByb2plY3Rpb24iLCJNb3VzZUV2ZW50cyIsIkNhbWVyYSIsInpvb20iLCJjYW52YXMiLCJ1cGRhdGVIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJ6QW5nbGUiLCJnZXRaQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbURpc3RhbmNlIiwicHJvamVjdGlvbiIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsIm9uVXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRpYWxQb3NpdGlvbiIsImNhbWVyYSIsImluaXRpYWxpc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0s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VSxLQUFLQSxRQUFMLENBQWNoQyxJQUFkLENBQW1CLElBQW5CLENBREo7QUFFTmlDLHFCQUFhLEtBQUtBLFdBQUwsQ0FBaUJqQyxJQUFqQixDQUFzQixJQUF0QjtBQUZQLE9BQVI7QUFJRDs7O2lDQUVZO0FBQ1gsV0FBS2tDLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUMxQixVQUFFQyxlQUFGLEdBQXNCRCxVQUF0QixDQUFFQyxlQUFGO0FBQUEsVUFDQTNDLElBREEsR0FDT1IsS0FBS29ELG1CQUFMLENBQXlCRCxlQUF6QixDQURQO0FBQUEsVUFFQTFDLE1BRkEsR0FFUyxJQUFJVixNQUFKLEVBRlQ7QUFBQSxVQUdBVyxhQUhBLEdBR2dCLElBSGhCO0FBQUEsVUFJQTJDLE1BSkEsR0FJUyxJQUFJOUMsTUFBSixDQUFXQyxJQUFYLEVBQWlCQyxNQUFqQixFQUF5QkMsYUFBekIsQ0FKVDs7O0FBTU4yQyxhQUFPQyxVQUFQOztBQUVBLGFBQU9ELE1BQVA7QUFDRDs7OztFQXZGa0J4RCxPOztBQTBGckIwRCxPQUFPQyxPQUFQLEdBQWlCakQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vY2FtZXJhL3pvb20nKSxcbiAgICAgIGFuZ2xlcyA9IHJlcXVpcmUoJy4vY2FtZXJhL2FuZ2xlcycpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9jYW1lcmEvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3JvdGF0aW9uJyksXG4gICAgICBQb3NpdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uID0gcmVxdWlyZSgnLi9jYW1lcmEvcHJvamVjdGlvbicpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL2NhbWVyYS9tb3VzZUV2ZW50cycpO1xuXG5jbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioem9vbSwgY2FudmFzLCB1cGRhdGVIYW5kbGVyKSB7XG4gICAgc3VwZXIoKTtcbiAgICBcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gIH1cblxuICBnZXRab29tKCkge1xuICAgIHJldHVybiB0aGlzLnpvb207XG4gIH1cblxuICBnZXRDYW52YXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FudmFzO1xuICB9XG4gIFxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3JlYXRlKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHhBbmdsZSA9IGFuZ2xlcy5nZXRYQW5nbGUoKSxcbiAgICAgICAgICB5QW5nbGUgPSBhbmdsZXMuZ2V0WUFuZ2xlKCksXG4gICAgICAgICAgekFuZ2xlID0gYW5nbGVzLmdldFpBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21EaXN0YW5jZShkaXN0YW5jZSksXG4gICAgICAgICAgcHJvamVjdGlvbiA9IFByb2plY3Rpb24uZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuICAgIFxuICAgIGlmICh0aGlzLnVwZGF0ZUhhbmRsZXIpIHsgIC8vL1xuICAgICAgdGhpcy51cGRhdGVIYW5kbGVyKHJvdGF0aW9uLCBwb3NpdGlvbiwgcHJvamVjdGlvbiwgbm9ybWFsKTtcbiAgICB9XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgb25VcGRhdGU6IHRoaXMub25VcGRhdGUuYmluZCh0aGlzKSxcbiAgICAgIGZvcmNlVXBkYXRlOiB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuICBcbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFkZE1vdXNlRXZlbnRIYW5kbGVycygpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLCAgLy8vXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IG51bGwsICAvLy9cbiAgICAgICAgICBjYW1lcmEgPSBuZXcgQ2FtZXJhKHpvb20sIGNhbnZhcywgdXBkYXRlSGFuZGxlcik7XG4gICAgXG4gICAgY2FtZXJhLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=