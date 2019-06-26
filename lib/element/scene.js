'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var necessary = require('necessary');

var Element = require('../element');

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
    value: function updateHandler(offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      this.render(offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.childElements.forEach(function (childElement) {
        return childElement.render(_this2.canvas, offsetMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
      });
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
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var canvas = properties.canvas,
          update = properties.update,
          done = properties.done,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsIlNjZW5lIiwiY2FudmFzIiwicmVzaXplSGFuZGxlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiZm9yY2VVcGRhdGUiLCJvZmZzZXRNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwicmVuZGVyIiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50IiwidXBkYXRlIiwiZG9uZSIsImdldENoaWxkRWxlbWVudHMiLCJiaW5kIiwidXBkYXRlSGFuZGxlciIsImFzc2lnbkNvbnRleHQiLCJvblJlc2l6ZSIsIm9uVXBkYXRlIiwibmV4dCIsImNvbnRleHQiLCJpbmRleCIsImNoaWxkRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJwcm9ncmVzcyIsImluaXRpYWxpc2UiLCJkZWZlciIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhbGxiYWNrIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxZQUFSLENBQWhCOztBQUVNLElBQUVFLHFCQUFGLEdBQTRCSCxTQUE1QixDQUFFRyxxQkFBRjtBQUFBLElBQ0VDLE9BREYsR0FDY0QscUJBRGQsQ0FDRUMsT0FERjs7SUFHQUMsSzs7O0FBQ0osaUJBQVlDLE1BQVosRUFBb0I7QUFBQTs7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LEVBQXlCO0FBQ3ZCQyxhQUFXRCxRQUFYLEVBQXFCLENBQXJCO0FBQ0QiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jb25zdCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmb3JFYWNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHtcbiAgICB3aW5kb3cub25yZXNpemUgPSByZXNpemVIYW5kbGVyO1xuICB9XG5cbiAgcmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgdGhpcy5jYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSh0aGlzLmNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldE1hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGZvckVhY2goY2hpbGRFbGVtZW50cywgKGNoaWxkRWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkRWxlbWVudHNMZW5ndGggPSBjaGlsZEVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb2dyZXNzID0gKCBpbmRleCArIDEgKSAvIGNoaWxkRWxlbWVudHNMZW5ndGg7XG5cbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICAgIGRlZmVyKCgpID0+IHtcbiAgICAgICAgdXBkYXRlICYmIHVwZGF0ZShwcm9ncmVzcyk7IC8vL1xuXG4gICAgICAgIG5leHQoKTtcbiAgICAgIH0pO1xuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMucmVzaXplSGFuZGxlcigpOyAvLy9cblxuICAgICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgdXBkYXRlLCBkb25lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG5cbmZ1bmN0aW9uIGRlZmVyKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xufVxuIl19