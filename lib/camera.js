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
      rotation = Rotation.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          position = Position.fromZCoordinate(zCoordinate),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlByb2plY3Rpb24iLCJNb3VzZUV2ZW50cyIsIkNhbWVyYSIsInpvb20iLCJjYW52YXMiLCJ1cGRhdGVIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ5QW5nbGUiLCJ1bmRlZmluZWQiLCJ6QW5nbGUiLCJ6Q29vcmRpbmF0ZSIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwicHJvamVjdGlvbiIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsIm9uVXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRpYWxQ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O0FBY0EsVUFBSSxLQUFLaEMsYUFBVCxFQUF3QjtBQUFHO0FBQ3pCLGFBQUtBLGFBQUwsQ0FBbUJnQyxRQUFuQixFQUE2QkUsUUFBN0IsRUFBdUNFLFVBQXZDLEVBQW1ERSxNQUFuRDtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLGFBQVE7QUFDTkUsa0JBQVUsS0FBS0EsUUFBTCxDQUFjbkMsSUFBZCxDQUFtQixJQUFuQixDQURKO0FBRU5vQyxxQkFBYSxLQUFLQSxXQUFMLENBQWlCcEMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUtxQyxxQkFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRUMsZUFBRixHQUFzQkQsVUFBdEIsQ0FBRUMsZUFBRjtBQUFBLFVBQ0E5QyxJQURBLEdBQ09SLEtBQUt1RCxtQkFBTCxDQUF5QkQsZUFBekIsQ0FEUDtBQUFBLFVBRUE3QyxNQUZBLEdBRVMsSUFBSVYsTUFBSixFQUZUO0FBQUEsVUFHQVcsYUFIQSxHQUdnQixJQUhoQjtBQUFBLFVBSUE4QyxNQUpBLEdBSVMsSUFBSWpELE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsTUFBakIsRUFBeUJDLGFBQXpCLENBSlQ7OztBQU1OOEMsYUFBT0MsVUFBUDs7QUFFQSxhQUFPRCxNQUFQO0FBQ0Q7Ozs7RUExRmtCM0QsTzs7QUE2RnJCNkQsT0FBT0MsT0FBUCxHQUFpQnBELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vY2FtZXJhL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL2NhbWVyYS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL2NhbWVyYS9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3Byb2plY3Rpb24nKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB4QXhpc0FuZ2xlID0gYW5nbGVzLmdldFhBeGlzQW5nbGUoKSxcbiAgICAgICAgICB5QXhpc0FuZ2xlID0gYW5nbGVzLmdldFlBeGlzQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICB4QW5nbGUgPSB4QXhpc0FuZ2xlLCAgLy8vXG4gICAgICAgICAgeUFuZ2xlID0gdW5kZWZpbmVkLCAvLy9cbiAgICAgICAgICB6QW5nbGUgPSB5QXhpc0FuZ2xlLCAvLy9cbiAgICAgICAgICB6Q29vcmRpbmF0ZSA9IC1kaXN0YW5jZSwgLy8vXG4gICAgICAgICAgcm90YXRpb24gPSBSb3RhdGlvbi5mcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlKHhBbmdsZSwgeUFuZ2xlLCB6QW5nbGUpLFxuICAgICAgICAgIHBvc2l0aW9uID0gUG9zaXRpb24uZnJvbVpDb29yZGluYXRlKHpDb29yZGluYXRlKSxcbiAgICAgICAgICBwcm9qZWN0aW9uID0gUHJvamVjdGlvbi5mcm9tV2lkdGhBbmRIZWlnaHQod2lkdGgsIGhlaWdodCksXG4gICAgICAgICAgbm9ybWFsID0gTm9ybWFsLmZyb21Sb3RhdGlvbihyb3RhdGlvbik7XG4gICAgXG4gICAgaWYgKHRoaXMudXBkYXRlSGFuZGxlcikgeyAgLy8vXG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXIocm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBvblVwZGF0ZTogdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpLFxuICAgICAgZm9yY2VVcGRhdGU6IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG4gIFxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYWRkTW91c2VFdmVudEhhbmRsZXJzKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHpvb20gPSBab29tLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKCksICAvLy9cbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGNhbWVyYSA9IG5ldyBDYW1lcmEoem9vbSwgY2FudmFzLCB1cGRhdGVIYW5kbGVyKTtcbiAgICBcbiAgICBjYW1lcmEuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGNhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENhbWVyYTtcbiJdfQ==