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
    value: function create(colourShader, textureShader) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTm9ybWFsIiwiUm90YXRpb24iLCJQb3NpdGlvbiIsIlByb2plY3Rpb24iLCJNb3VzZUV2ZW50cyIsIkNhbWVyYSIsInpvb20iLCJjYW52YXMiLCJ1cGRhdGVIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyU2hhZGVyIiwidGV4dHVyZVNoYWRlciIsInhBeGlzQW5nbGUiLCJnZXRYQXhpc0FuZ2xlIiwieUF4aXNBbmdsZSIsImdldFlBeGlzQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInhBbmdsZSIsInlBbmdsZSIsInVuZGVmaW5lZCIsInpBbmdsZSIsInpDb29yZGluYXRlIiwicm90YXRpb24iLCJmcm9tWEFuZ2xlWUFuZ2xlQW5kWkFuZ2xlIiwicG9zaXRpb24iLCJmcm9tWkNvb3JkaW5hdGUiLCJwcm9qZWN0aW9uIiwiZnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsIiwiZnJvbVJvdGF0aW9uIiwib25VcGRhdGUiLCJmb3JjZVVwZGF0ZSIsImFkZE1vdXNlRXZlbnRIYW5kbGVycyIsInByb3BlcnRpZXMiLCJpbml0aWFsUG9zaXRpb24iLCJmcm9tSW5pdGlhbFBvc2l0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VUFBSSxLQUFLaEMsYUFBVCxFQUF3QjtBQUFHO0FBQ3pCLGFBQUtBLGFBQUwsQ0FBbUJnQyxRQUFuQixFQUE2QkUsUUFBN0IsRUFBdUNFLFVBQXZDLEVBQW1ERSxNQUFuRDtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLGFBQVE7QUFDTkUsa0JBQVUsS0FBS0EsUUFBTCxDQUFjbkMsSUFBZCxDQUFtQixJQUFuQixDQURKO0FBRU5vQyxxQkFBYSxLQUFLQSxXQUFMLENBQWlCcEMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUtxQyxxQkFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRUMsZUFBRixHQUFzQkQsVUFBdEIsQ0FBRUMsZUFBRjtBQUFBLFVBQ0E5QyxJQURBLEdBQ09SLEtBQUt1RCxtQkFBTCxDQUF5QkQsZUFBekIsQ0FEUDtBQUFBLFVBRUE3QyxNQUZBLEdBRVMsSUFBSVYsTUFBSixFQUZUO0FBQUEsVUFHQVcsYUFIQSxHQUdnQixJQUhoQjtBQUFBLFVBSUE4QyxNQUpBLEdBSVMsSUFBSWpELE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsTUFBakIsRUFBeUJDLGFBQXpCLENBSlQ7OztBQU1OOEMsYUFBT0MsVUFBUDs7QUFFQSxhQUFPRCxNQUFQO0FBQ0Q7Ozs7RUExRmtCM0QsTzs7QUE2RnJCNkQsT0FBT0MsT0FBUCxHQUFpQnBELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4vY2FtZXJhL25vcm1hbCcpLFxuICAgICAgUm90YXRpb24gPSByZXF1aXJlKCcuL2NhbWVyYS9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb24gPSByZXF1aXJlKCcuL2NhbWVyYS9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbiA9IHJlcXVpcmUoJy4vY2FtZXJhL3Byb2plY3Rpb24nKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIpIHtcbiAgICAvLy9cbiAgfVxuXG4gIG9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpIHtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG4gIFxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHhBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WEF4aXNBbmdsZSgpLFxuICAgICAgICAgIHlBeGlzQW5nbGUgPSBhbmdsZXMuZ2V0WUF4aXNBbmdsZSgpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCksXG4gICAgICAgICAgd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuY2FudmFzLmdldEhlaWdodCgpLFxuICAgICAgICAgIHhBbmdsZSA9IHhBeGlzQW5nbGUsICAvLy9cbiAgICAgICAgICB5QW5nbGUgPSB1bmRlZmluZWQsIC8vL1xuICAgICAgICAgIHpBbmdsZSA9IHlBeGlzQW5nbGUsIC8vL1xuICAgICAgICAgIHpDb29yZGluYXRlID0gLWRpc3RhbmNlLCAvLy9cbiAgICAgICAgICByb3RhdGlvbiA9IFJvdGF0aW9uLmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb24gPSBQb3NpdGlvbi5mcm9tWkNvb3JkaW5hdGUoekNvb3JkaW5hdGUpLFxuICAgICAgICAgIHByb2plY3Rpb24gPSBQcm9qZWN0aW9uLmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWwgPSBOb3JtYWwuZnJvbVJvdGF0aW9uKHJvdGF0aW9uKTtcbiAgICBcbiAgICBpZiAodGhpcy51cGRhdGVIYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcihyb3RhdGlvbiwgcG9zaXRpb24sIHByb2plY3Rpb24sIG5vcm1hbCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIHVwZGF0ZUhhbmRsZXIpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19