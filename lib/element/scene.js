'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Element = require('../element'),
    UserInput = require('../miscellaneous/userInput');

var asynchronousUtilities = necessary.asynchronousUtilities,
    forEach = asynchronousUtilities.forEach;

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene(canvas) {
    _classCallCheck(this, Scene);

    var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

    _this.canvas = canvas;
    return _this;
  }

  _createClass(Scene, [{
    key: 'onResize',
    value: function onResize(resizeHandler) {
      window.onresize = resizeHandler;
    }
  }, {
    key: 'resizeHandler',
    value: function resizeHandler() {
      var clientWidth = this.canvas.getClientWidth(),
          clientHeight = this.canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      this.canvas.resize(width, height);

      this.forceUpdate(this.canvas);
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }, {
    key: 'render',
    value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.childElements.forEach(function (childElement) {
        return childElement.render(_this2.canvas, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
    }
  }, {
    key: 'userInputHandler',
    value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
      this.userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this);

      this.assignContext();

      this.onResize(resizeHandler);

      this.onUpdate(updateHandler);

      forEach(childElements, function (childElement, next, done, context, index) {
        var childElementsLength = childElements.length,
            progress = (index + 1) / childElementsLength;

        childElement.initialise(canvas);

        defer(function () {
          update && update(progress); ///

          next();
        });
      }, function () {
        _this3.resizeHandler(); ///

        done && done(); ///
      });

      var userInput = UserInput.fromNothing(canvas),
          userInputHandler = this.userInputHandler.bind(this);

      userInput.addUserInputHandler(userInputHandler);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          done = properties.done,
          update = properties.update,
          scene = Element.fromProperties(Scene, properties, canvas);


      scene.initialise(canvas, update, done);

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;

function defer(callback) {
  setTimeout(callback, 0);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiVXNlcklucHV0IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsIlNjZW5lIiwiY2FudmFzIiwicmVzaXplSGFuZGxlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiZm9yY2VVcGRhdGUiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsInJlbmRlciIsImNsZWFyIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsInJlbGF0aXZlTW91c2VDb29yZGluYXRlcyIsIm1vdXNlV2hlZWxEZWx0YSIsInNoaWZ0S2V5RG93biIsInVzZXJJbnB1dFVwZGF0ZSIsInVwZGF0ZSIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwib25SZXNpemUiLCJvblVwZGF0ZSIsIm5leHQiLCJjb250ZXh0IiwiaW5kZXgiLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJpbml0aWFsaXNlIiwiZGVmZXIiLCJ1c2VySW5wdXQiLCJmcm9tTm90aGluZyIsInVzZXJJbnB1dEhhbmRsZXIiLCJhZGRVc2VySW5wdXRIYW5kbGVyIiwicHJvcGVydGllcyIsInNjZW5lIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFs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ZixJQUF0QixDQUEyQixJQUEzQixDQUR6Qjs7QUFHQWEsZ0JBQVVHLG1CQUFWLENBQThCRCxnQkFBOUI7QUFDRDs7O21DQUVxQkUsVSxFQUFZO0FBQUEsVUFDeEI3QyxNQUR3QixHQUNDNkMsVUFERCxDQUN4QjdDLE1BRHdCO0FBQUEsVUFDaEIwQixJQURnQixHQUNDbUIsVUFERCxDQUNoQm5CLElBRGdCO0FBQUEsVUFDVkQsTUFEVSxHQUNDb0IsVUFERCxDQUNWcEIsTUFEVTtBQUFBLFVBRTFCcUIsS0FGMEIsR0FFbEJuRCxRQUFRb0QsY0FBUixDQUF1QmhELEtBQXZCLEVBQThCOEMsVUFBOUIsRUFBMEM3QyxNQUExQyxDQUZrQjs7O0FBSWhDOEMsWUFBTVAsVUFBTixDQUFpQnZDLE1BQWpCLEVBQXlCeUIsTUFBekIsRUFBaUNDLElBQWpDOztBQUVBLGFBQU9vQixLQUFQO0FBQ0Q7Ozs7RUE3RWlCbkQsTzs7QUFnRnBCcUQsT0FBT0MsT0FBUCxHQUFpQmxELEtBQWpCOztBQUVBLFNBQVN5QyxLQUFULENBQWVVLFFBQWYsRUFBeUI7QUFDdkJDLGFBQVdELFFBQVgsRUFBcUIsQ0FBckI7QUFDRCIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBVc2VySW5wdXQgPSByZXF1aXJlKCcuLi9taXNjZWxsYW5lb3VzL3VzZXJJbnB1dCcpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVIYW5kbGVyO1xuICB9XG5cbiAgcmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpIHtcbiAgICB0aGlzLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikge1xuICAgIHRoaXMudXNlcklucHV0VXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIHVwZGF0ZUhhbmRsZXIgPSB0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZShyZXNpemVIYW5kbGVyKTtcblxuICAgIHRoaXMub25VcGRhdGUodXBkYXRlSGFuZGxlcik7XG5cbiAgICBmb3JFYWNoKGNoaWxkRWxlbWVudHMsIChjaGlsZEVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGlsZEVsZW1lbnRzTGVuZ3RoID0gY2hpbGRFbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBwcm9ncmVzcyA9ICggaW5kZXggKyAxICkgLyBjaGlsZEVsZW1lbnRzTGVuZ3RoO1xuXG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgICBkZWZlcigoKSA9PiB7XG4gICAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpOyAvLy9cblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcblxuICAgIGNvbnN0IHVzZXJJbnB1dCA9IFVzZXJJbnB1dC5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIHVzZXJJbnB1dEhhbmRsZXIgPSB0aGlzLnVzZXJJbnB1dEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHVzZXJJbnB1dC5hZGRVc2VySW5wdXRIYW5kbGVyKHVzZXJJbnB1dEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgZG9uZSwgdXBkYXRlIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG5cbmZ1bmN0aW9uIGRlZmVyKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufVxuIl19