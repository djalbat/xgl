'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = require('./canvas'),
    Zoom = require('./scene/zoom'),
    angles = require('./scene/angles'),
    Normal = require('./scene/normal'),
    Rotation = require('./scene/rotation'),
    Position = require('./scene/position'),
    Projection = require('./scene/projection'),
    MouseEvents = require('./scene/mouseEvents');

var Camera = function () {
  function Camera(zoom, canvas, callback) {
    _classCallCheck(this, Camera);

    this.zoom = zoom;
    this.canvas = canvas;
    this.callback = callback;
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
    key: 'getCallback',
    value: function getCallback() {
      return this.callback;
    }
  }, {
    key: 'setCallback',
    value: function setCallback(callback) {
      this.callback = callback;
    }
  }, {
    key: 'registerCallback',
    value: function registerCallback(callback) {
      this.setCallback(callback);
    }
  }, {
    key: 'create',
    value: function create() {}
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

      if (this.callback) {
        ///
        this.callback(rotation, position, projection, normal);
      }
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        registerCallback: this.registerCallback.bind(this),
        addMouseEventHandlers: this.addMouseEventHandlers.bind(this)
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var initialPosition = properties.initialPosition,
          initialDistance = -initialPosition[2],
          zoom = Zoom.fromInitialDistance(initialDistance),
          canvas = new Canvas(),
          callback = null,
          camera = new Camera(zoom, canvas, callback);


      return camera;
    }
  }]);

  return Camera;
}();

module.exports = Camera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwicmVxdWlyZSIsIlpvb20iLCJhbmdsZXMiLCJOb3JtYWwiLCJSb3RhdGlvbiIsIlBvc2l0aW9uIiwiUHJvamVjdGlvbiIsIk1vdXNlRXZlbnRzIiwiQ2FtZXJhIiwiem9vbSIsImNhbnZhcyIsImNhbGxiYWNrIiwic2V0Q2FsbGJhY2siLCJtb3VzZUV2ZW50cyIsImZyb21Ob3RoaW5nIiwiYWRkTW91c2VVcEV2ZW50SGFuZGxlciIsIm1vdXNlVXBFdmVudEhhbmRsZXIiLCJiaW5kIiwiYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyIiwibW91c2VEb3duRXZlbnRIYW5kbGVyIiwiYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyIiwibW91c2VDb29yZGluYXRlcyIsIm1vdXNlTW92ZUV2ZW50SGFuZGxlciIsInVwZGF0ZSIsImFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJkZWx0YSIsIm1vdXNlV2hlZWxFdmVudEhhbmRsZXIiLCJ4QXhpc0FuZ2xlIiwiZ2V0WEF4aXNBbmdsZSIsInlBeGlzQW5nbGUiLCJnZXRZQXhpc0FuZ2xlIiwiZGlzdGFuY2UiLCJnZXREaXN0YW5jZSIsIndpZHRoIiwiZ2V0V2lkdGgiLCJoZWlnaHQiLCJnZXRIZWlnaHQiLCJ4QW5nbGUiLCJ5QW5nbGUiLCJ1bmRlZmluZWQiLCJ6QW5nbGUiLCJ6Q29vcmRpbmF0ZSIsInJvdGF0aW9uIiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uIiwiZnJvbVpDb29yZGluYXRlIiwicHJvamVjdGlvbiIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbCIsImZyb21Sb3RhdGlvbiIsInJlZ2lzdGVyQ2FsbGJhY2siLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiaW5pdGlhbERpc3RhbmNlIiwiZnJvbUluaXRpYWxEaXN0YW5jZSIsImNhbWVyYSIsIm1vZHVs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QixRQUFkLEVBQXdCRSxRQUF4QixFQUFrQ0UsVUFBbEMsRUFBOENFLE1BQTlDO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQ2QsYUFBUTtBQUNORSwwQkFBa0IsS0FBS0EsZ0JBQUwsQ0FBc0JqQyxJQUF0QixDQUEyQixJQUEzQixDQURaO0FBRU5rQywrQkFBdUIsS0FBS0EscUJBQUwsQ0FBMkJsQyxJQUEzQixDQUFnQyxJQUFoQztBQUZqQixPQUFSO0FBSUQ7OzttQ0FFcUJtQyxVLEVBQVk7QUFDMUIsVUFBRUMsZUFBRixHQUFzQkQsVUFBdEIsQ0FBRUMsZUFBRjtBQUFBLFVBQ0FDLGVBREEsR0FDa0IsQ0FBQ0QsZ0JBQWdCLENBQWhCLENBRG5CO0FBQUEsVUFFQTVDLElBRkEsR0FFT1IsS0FBS3NELG1CQUFMLENBQXlCRCxlQUF6QixDQUZQO0FBQUEsVUFHQTVDLE1BSEEsR0FHUyxJQUFJWCxNQUFKLEVBSFQ7QUFBQSxVQUlBWSxRQUpBLEdBSVcsSUFKWDtBQUFBLFVBS0E2QyxNQUxBLEdBS1MsSUFBSWhELE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsTUFBakIsRUFBeUJDLFFBQXpCLENBTFQ7OztBQU9OLGFBQU82QyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCbEQsTUFBakIiLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuL2NhbnZhcycpLFxuICAgICAgWm9vbSA9IHJlcXVpcmUoJy4vc2NlbmUvem9vbScpLFxuICAgICAgYW5nbGVzID0gcmVxdWlyZSgnLi9zY2VuZS9hbmdsZXMnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vc2NlbmUvbm9ybWFsJyksXG4gICAgICBSb3RhdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcm90YXRpb24nKSxcbiAgICAgIFBvc2l0aW9uID0gcmVxdWlyZSgnLi9zY2VuZS9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbiA9IHJlcXVpcmUoJy4vc2NlbmUvcHJvamVjdGlvbicpLFxuICAgICAgTW91c2VFdmVudHMgPSByZXF1aXJlKCcuL3NjZW5lL21vdXNlRXZlbnRzJyk7XG5cbmNsYXNzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgY2FsbGJhY2spIHtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIGdldFpvb20oKSB7XG4gICAgcmV0dXJuIHRoaXMuem9vbTtcbiAgfVxuXG4gIGdldENhbnZhcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW52YXM7XG4gIH1cbiAgXG4gIGdldENhbGxiYWNrKCkge1xuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrO1xuICB9XG4gIFxuICBzZXRDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuICBcbiAgcmVnaXN0ZXJDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIHRoaXMuc2V0Q2FsbGJhY2soY2FsbGJhY2spO1xuICB9XG5cbiAgY3JlYXRlKCkge31cblxuICBhZGRNb3VzZUV2ZW50SGFuZGxlcnMoKSB7XG4gICAgY29uc3QgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZyh0aGlzLmNhbnZhcyk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVVwRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZVVwRXZlbnRIYW5kbGVyLmJpbmQoYW5nbGVzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZURvd25FdmVudEhhbmRsZXIoYW5nbGVzLm1vdXNlRG93bkV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VNb3ZlRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKG1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGFuZ2xlcy5tb3VzZU1vdmVFdmVudEhhbmRsZXIobW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZnVuY3Rpb24oZGVsdGEpIHtcbiAgICAgIHRoaXMuem9vbS5tb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGRlbHRhKTtcblxuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeEF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRYQXhpc0FuZ2xlKCksXG4gICAgICAgICAgeUF4aXNBbmdsZSA9IGFuZ2xlcy5nZXRZQXhpc0FuZ2xlKCksXG4gICAgICAgICAgZGlzdGFuY2UgPSB0aGlzLnpvb20uZ2V0RGlzdGFuY2UoKSxcbiAgICAgICAgICB3aWR0aCA9IHRoaXMuY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgeEFuZ2xlID0geEF4aXNBbmdsZSwgIC8vL1xuICAgICAgICAgIHlBbmdsZSA9IHVuZGVmaW5lZCwgLy8vXG4gICAgICAgICAgekFuZ2xlID0geUF4aXNBbmdsZSwgLy8vXG4gICAgICAgICAgekNvb3JkaW5hdGUgPSAtZGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHJvdGF0aW9uID0gUm90YXRpb24uZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSh4QW5nbGUsIHlBbmdsZSwgekFuZ2xlKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IFBvc2l0aW9uLmZyb21aQ29vcmRpbmF0ZSh6Q29vcmRpbmF0ZSksXG4gICAgICAgICAgcHJvamVjdGlvbiA9IFByb2plY3Rpb24uZnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbCA9IE5vcm1hbC5mcm9tUm90YXRpb24ocm90YXRpb24pO1xuICAgIFxuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7ICAvLy9cbiAgICAgIHRoaXMuY2FsbGJhY2socm90YXRpb24sIHBvc2l0aW9uLCBwcm9qZWN0aW9uLCBub3JtYWwpO1xuICAgIH1cbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICByZWdpc3RlckNhbGxiYWNrOiB0aGlzLnJlZ2lzdGVyQ2FsbGJhY2suYmluZCh0aGlzKSxcbiAgICAgIGFkZE1vdXNlRXZlbnRIYW5kbGVyczogdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxQb3NpdGlvbiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBpbml0aWFsRGlzdGFuY2UgPSAtaW5pdGlhbFBvc2l0aW9uWzJdLCAvLy9cbiAgICAgICAgICB6b29tID0gWm9vbS5mcm9tSW5pdGlhbERpc3RhbmNlKGluaXRpYWxEaXN0YW5jZSksXG4gICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcygpLCAgLy8vXG4gICAgICAgICAgY2FsbGJhY2sgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBjYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDYW1lcmE7XG4iXX0=