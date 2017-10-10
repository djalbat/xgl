'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element'),
    Canvas = require('./canvas'),
    Zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Projection = require('./scene/projection'),
    MouseEvents = require('./scene/mouseEvents');

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
    key: 'context',
    value: function context() {
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
          initialDistance = -initialPosition[2],
          zoom = Zoom.fromInitialDistance(initialDistance),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlByb2plY3Rpb24iLCJNb3VzZUV2ZW50cyIsIkNhbWVyYSIsInpvb20iLCJjYW52YXMiLCJ1cGRhdGVIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwieEF4aXNBbmdsZSIsImdldFhBeGlzQW5nbGUiLCJ5QXhpc0FuZ2xlIiwiZ2V0WUF4aXNBbmdsZSIsImRpc3RhbmNlIiwiZ2V0RGlzdGFuY2UiLCJ3aWR0aCIsImdldFdpZHRoIiwiaGVpZ2h0IiwiZ2V0SGVpZ2h0IiwieEFuZ2xlIiwieUFuZ2xlIiwidW5kZWZpbmVkIiwiekFuZ2xlIiwiekNvb3JkaW5hdGUiLCJyb3RhdGlvbiIsImZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUiLCJwb3NpdGlvbiIsImZyb21aQ29vcmRpbmF0ZSIsInByb2plY3Rpb24iLCJmcm9tV2lkdGhBbmRIZWlnaHQiLCJub3JtYWwiLCJmcm9tUm90YXRpb24iLCJvblVwZGF0ZSIsImZvcmNlVXBkYXRlIiwiYWRkTW91c2VFdmVudEhhbmRsZXJzIiwicHJvcGVydGllcyIsImluaXRpYWxQb3NpdGlvbiIsImluaXRpYWxEaXN0YW5jZSIsImZyb21Jbml0aWFsRGlzdGFuY2UiLCJjYW1lcmEi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QjhCLFFBQW5CLEVBQTZCRSxRQUE3QixFQUF1Q0UsVUFBdkMsRUFBbURFLE1BQW5EO0FBQ0Q7QUFDRjs7OzhCQUVTO0FBQ1IsYUFBUTtBQUNORSxrQkFBVSxLQUFLQSxRQUFMLENBQWNqQyxJQUFkLENBQW1CLElBQW5CLENBREo7QUFFTmtDLHFCQUFhLEtBQUtBLFdBQUwsQ0FBaUJsQyxJQUFqQixDQUFzQixJQUF0QjtBQUZQLE9BQVI7QUFJRDs7O2lDQUVZO0FBQ1gsV0FBS21DLHFCQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUMxQixVQUFFQyxlQUFGLEdBQXNCRCxVQUF0QixDQUFFQyxlQUFGO0FBQUEsVUFDQUMsZUFEQSxHQUNrQixDQUFDRCxnQkFBZ0IsQ0FBaEIsQ0FEbkI7QUFBQSxVQUVBNUMsSUFGQSxHQUVPUixLQUFLc0QsbUJBQUwsQ0FBeUJELGVBQXpCLENBRlA7QUFBQSxVQUdBNUMsTUFIQSxHQUdTLElBQUlWLE1BQUosRUFIVDtBQUFBLFVBSUFXLGFBSkEsR0FJZ0IsSUFKaEI7QUFBQSxVQUtBNkMsTUFMQSxHQUtTLElBQUloRCxNQUFKLENBQVdDLElBQVgsRUFBaUJDLE1BQWpCLEVBQXlCQyxhQUF6QixDQUxUOzs7QUFPTjZDLGFBQU9DLFVBQVA7O0FBRUEsYUFBT0QsTUFBUDtBQUNEOzs7O0VBdkZrQjFELE87O0FBMEZyQjRELE9BQU9DLE9BQVAsR0FBaUJuRCxNQUFqQiIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4vY2FudmFzJyksXG4gICAgICBab29tID0gcmVxdWlyZSgnLi9zY2VuZS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL3NjZW5lL2FuZ2xlcycpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi9zY2VuZS9ub3JtYWwnKSxcbiAgICAgIFJvdGF0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL3NjZW5lL3Bvc2l0aW9uJyksXG4gICAgICBQcm9qZWN0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9wcm9qZWN0aW9uJyksXG4gICAgICBNb3VzZUV2ZW50cyA9IHJlcXVpcmUoJy4vc2NlbmUvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB5QW5nbGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLWRpc3RhbmNlLCAvLy9cbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBQcm9qZWN0aW9uLmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICBcbiAgICBpZiAodGhpcy51cGRhdGVIYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcihyb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gICAgfVxuICB9XG5cbiAgY29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgaW5pdGlhbERpc3RhbmNlID0gLWluaXRpYWxQb3NpdGlvblsyXSwgLy8vXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxEaXN0YW5jZShpbml0aWFsRGlzdGFuY2UpLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIHVwZGF0ZUhhbmRsZXIpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19