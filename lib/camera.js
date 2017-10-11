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
    NormalMatrix = require('./matrix/normal'),
    RotationMatrix = require('./matrix/rotation'),
    PositionMatrix = require('./matrix/position'),
    ProjectionMatrix = require('./matrix/projection');

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
          rotationMatrix = RotationMatrix.fromXAngleYAngleAndZAngle(xAngle, yAngle, zAngle),
          positionMatrix = PositionMatrix.fromDistance(distance),
          projectionMatrix = ProjectionMatrix.fromWidthAndHeight(width, height),
          normalMatrix = NormalMatrix.fromRotationMatrix(rotationMatrix);

      if (this.updateHandler) {
        ///
        this.updateHandler(rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jYW1lcmEuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsInJlcXVpcmUiLCJDYW52YXMiLCJab29tIiwiYW5nbGVzIiwiTW91c2VFdmVudHMiLCJOb3JtYWxNYXRyaXgiLCJSb3RhdGlvbk1hdHJpeCIsIlBvc2l0aW9uTWF0cml4IiwiUHJvamVjdGlvbk1hdHJpeCIsIkNhbWVyYSIsInpvb20iLCJjYW52YXMiLCJ1cGRhdGVIYW5kbGVyIiwibW91c2VFdmVudHMiLCJmcm9tTm90aGluZyIsImFkZE1vdXNlVXBFdmVudEhhbmRsZXIiLCJtb3VzZVVwRXZlbnRIYW5kbGVyIiwiYmluZCIsImFkZE1vdXNlRG93bkV2ZW50SGFuZGxlciIsIm1vdXNlRG93bkV2ZW50SGFuZGxlciIsImFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlciIsIm1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZU1vdmVFdmVudEhhbmRsZXIiLCJ1cGRhdGUiLCJhZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiZGVsdGEiLCJtb3VzZVdoZWVsRXZlbnRIYW5kbGVyIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJ4QW5nbGUiLCJnZXRYQW5nbGUiLCJ5QW5nbGUiLCJnZXRZQW5nbGUiLCJ6QW5nbGUiLCJnZXRaQW5nbGUiLCJkaXN0YW5jZSIsImdldERpc3RhbmNlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsInJvdGF0aW9uTWF0cml4IiwiZnJvbVhBbmdsZVlBbmdsZUFuZFpBbmdsZSIsInBvc2l0aW9uTWF0cml4IiwiZnJvbURpc3RhbmNlIiwicHJvamVjdGlvbk1hdHJpeCIsImZyb21XaWR0aEFuZEhlaWdodCIsIm5vcm1hbE1hdHJpeCIsImZyb21Sb3RhdGlvbk1hdHJpeCIsIm9uVXBkYXRlIiwiZm9yY2VVcGRhdGUiLCJhZGRNb3VzZUV2ZW50SGFuZGxlcnMiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRp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RSxjQUFuQyxFQUFtREUsZ0JBQW5ELEVBQXFFRSxZQUFyRTtBQUNEO0FBQ0Y7OztvQ0FFZTtBQUNkLGFBQVE7QUFDTkUsa0JBQVUsS0FBS0EsUUFBTCxDQUFjaEMsSUFBZCxDQUFtQixJQUFuQixDQURKO0FBRU5pQyxxQkFBYSxLQUFLQSxXQUFMLENBQWlCakMsSUFBakIsQ0FBc0IsSUFBdEI7QUFGUCxPQUFSO0FBSUQ7OztpQ0FFWTtBQUNYLFdBQUtrQyxxQkFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDMUIsVUFBRUMsZUFBRixHQUFzQkQsVUFBdEIsQ0FBRUMsZUFBRjtBQUFBLFVBQ0EzQyxJQURBLEdBQ09SLEtBQUtvRCxtQkFBTCxDQUF5QkQsZUFBekIsQ0FEUDtBQUFBLFVBRUExQyxNQUZBLEdBRVMsSUFBSVYsTUFBSixFQUZUO0FBQUEsVUFHQVcsYUFIQSxHQUdnQixJQUhoQjtBQUFBLFVBSUEyQyxNQUpBLEdBSVMsSUFBSTlDLE1BQUosQ0FBV0MsSUFBWCxFQUFpQkMsTUFBakIsRUFBeUJDLGFBQXpCLENBSlQ7OztBQU1OMkMsYUFBT0MsVUFBUDs7QUFFQSxhQUFPRCxNQUFQO0FBQ0Q7Ozs7RUF2RmtCeEQsTzs7QUEwRnJCMEQsT0FBT0MsT0FBUCxHQUFpQmpELE1BQWpCIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgQ2FudmFzID0gcmVxdWlyZSgnLi9jYW52YXMnKSxcbiAgICAgIFpvb20gPSByZXF1aXJlKCcuL2NhbWVyYS96b29tJyksXG4gICAgICBhbmdsZXMgPSByZXF1aXJlKCcuL2NhbWVyYS9hbmdsZXMnKSxcbiAgICAgIE1vdXNlRXZlbnRzID0gcmVxdWlyZSgnLi9jYW1lcmEvbW91c2VFdmVudHMnKSxcbiAgICAgIE5vcm1hbE1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L25vcm1hbCcpLFxuICAgICAgUm90YXRpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9yb3RhdGlvbicpLFxuICAgICAgUG9zaXRpb25NYXRyaXggPSByZXF1aXJlKCcuL21hdHJpeC9wb3NpdGlvbicpLFxuICAgICAgUHJvamVjdGlvbk1hdHJpeCA9IHJlcXVpcmUoJy4vbWF0cml4L3Byb2plY3Rpb24nKTtcblxuY2xhc3MgQ2FtZXJhIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHpvb20sIGNhbnZhcywgdXBkYXRlSGFuZGxlcikge1xuICAgIHN1cGVyKCk7XG4gICAgXG4gICAgdGhpcy56b29tID0gem9vbTtcbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZ2V0Q2FudmFzKCkge1xuICAgIHJldHVybiB0aGlzLmNhbnZhcztcbiAgfVxuICBcbiAgYWRkTW91c2VFdmVudEhhbmRsZXJzKCkge1xuICAgIGNvbnN0IG1vdXNlRXZlbnRzID0gTW91c2VFdmVudHMuZnJvbU5vdGhpbmcodGhpcy5jYW52YXMpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VVcEV2ZW50SGFuZGxlcihhbmdsZXMubW91c2VVcEV2ZW50SGFuZGxlci5iaW5kKGFuZ2xlcykpO1xuXG4gICAgbW91c2VFdmVudHMuYWRkTW91c2VEb3duRXZlbnRIYW5kbGVyKGFuZ2xlcy5tb3VzZURvd25FdmVudEhhbmRsZXIuYmluZChhbmdsZXMpKTtcblxuICAgIG1vdXNlRXZlbnRzLmFkZE1vdXNlTW92ZUV2ZW50SGFuZGxlcihmdW5jdGlvbihtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgICBhbmdsZXMubW91c2VNb3ZlRXZlbnRIYW5kbGVyKG1vdXNlQ29vcmRpbmF0ZXMpO1xuXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICBtb3VzZUV2ZW50cy5hZGRNb3VzZVdoZWVsRXZlbnRIYW5kbGVyKGZ1bmN0aW9uKGRlbHRhKSB7XG4gICAgICB0aGlzLnpvb20ubW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSk7XG5cbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGNyZWF0ZShjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgLy8vXG4gIH1cblxuICBvblVwZGF0ZSh1cGRhdGVIYW5kbGVyKSB7XG4gICAgdGhpcy51cGRhdGVIYW5kbGVyID0gdXBkYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB4QW5nbGUgPSBhbmdsZXMuZ2V0WEFuZ2xlKCksXG4gICAgICAgICAgeUFuZ2xlID0gYW5nbGVzLmdldFlBbmdsZSgpLFxuICAgICAgICAgIHpBbmdsZSA9IGFuZ2xlcy5nZXRaQW5nbGUoKSxcbiAgICAgICAgICBkaXN0YW5jZSA9IHRoaXMuem9vbS5nZXREaXN0YW5jZSgpLFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IFJvdGF0aW9uTWF0cml4LmZyb21YQW5nbGVZQW5nbGVBbmRaQW5nbGUoeEFuZ2xlLCB5QW5nbGUsIHpBbmdsZSksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBQb3NpdGlvbk1hdHJpeC5mcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBQcm9qZWN0aW9uTWF0cml4LmZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxNYXRyaXggPSBOb3JtYWxNYXRyaXguZnJvbVJvdGF0aW9uTWF0cml4KHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICBpZiAodGhpcy51cGRhdGVIYW5kbGVyKSB7ICAvLy9cbiAgICAgIHRoaXMudXBkYXRlSGFuZGxlcihyb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIG9uVXBkYXRlOiB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyksXG4gICAgICBmb3JjZVVwZGF0ZTogdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hZGRNb3VzZUV2ZW50SGFuZGxlcnMoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgem9vbSA9IFpvb20uZnJvbUluaXRpYWxQb3NpdGlvbihpbml0aWFsUG9zaXRpb24pLFxuICAgICAgICAgIGNhbnZhcyA9IG5ldyBDYW52YXMoKSwgIC8vL1xuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgY2FtZXJhID0gbmV3IENhbWVyYSh6b29tLCBjYW52YXMsIHVwZGF0ZUhhbmRsZXIpO1xuICAgIFxuICAgIGNhbWVyYS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FtZXJhO1xuIl19