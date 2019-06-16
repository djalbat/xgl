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
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var _this2 = this;

      this.canvas.clear();

      this.childElements.forEach(function (childElement) {
        return childElement.render(_this2.canvas, offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
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
          update && update(progress);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsIlNjZW5lIiwiY2FudmFzIiwicmVzaXplSGFuZGxlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVzaXplIiwiZm9yY2VVcGRhdGUiLCJvZmZzZXRNYXRyaXgiLCJyb3RhdGlvbk1hdHJpeCIsInBvc2l0aW9uTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbE1hdHJpeCIsInJlbmRlciIsImNsZWFyIiwiY2hpbGRFbGVtZW50cyIsImNoaWxkRWxlbWVudCIsInVwZGF0ZSIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJhc3NpZ25Db250ZXh0Iiwib25SZXNpemUiLCJvblVwZGF0ZSIsIm5leHQiLCJjb250ZXh0IiwiaW5kZXgiLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwicHJvZ3Jlc3MiLCJpbml0aWFsaXNlIiwiZGVmZXIiLCJwcm9wZXJ0aWVzIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztBQUVBLElBQU1DLFVBQVVELFFBQVEsWUFBUixDQUFoQjs7QUFFTSxJQUFFRSxxQkFBRixHQUE0QkgsU0FBNUIsQ0FBRUcscUJBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NELHFCQURkLENBQ0VDLE9BREY7O0lBR0FDLEs7OztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FB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YUFBV0QsUUFBWCxFQUFxQixDQUFyQjtBQUNEIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY29uc3QgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSGFuZGxlcjtcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIHRoaXMub25SZXNpemUocmVzaXplSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uVXBkYXRlKHVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgZm9yRWFjaChjaGlsZEVsZW1lbnRzLCAoY2hpbGRFbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50c0xlbmd0aCA9IGNoaWxkRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gY2hpbGRFbGVtZW50c0xlbmd0aDtcblxuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgICAgZGVmZXIoKCkgPT4ge1xuICAgICAgICB1cGRhdGUgJiYgdXBkYXRlKHByb2dyZXNzKTtcblxuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcbiAgICB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZUhhbmRsZXIoKTsgLy8vXG5cbiAgICAgIGRvbmUgJiYgZG9uZSgpOyAvLy9cbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIHVwZGF0ZSwgZG9uZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cbiJdfQ==