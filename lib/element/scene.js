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
      height = clientHeight,
          ///
      render = this.render.bind(this);

      this.canvas.resize(width, height);

      this.forceUpdate(width, height, render);
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
      var width = this.canvas.getWidth(),
          height = this.canvas.getHeight(),
          render = this.render.bind(this);

      this.userInputUpdate(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, render);
    }
  }, {
    key: 'initialise',
    value: function initialise(canvas, update, done) {
      var _this3 = this;

      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this);

      this.assignContext();

      this.onResize(resizeHandler);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIm5lY2Vzc2FyeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiVXNlcklucHV0IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZm9yRWFjaCIsIlNjZW5lIiwiY2FudmFzIiwicmVzaXplSGFuZGxlciIsIndpbmRvdyIsIm9ucmVzaXplIiwiY2xpZW50V2lkdGgiLCJnZXRDbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldENsaWVudEhlaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwicmVuZGVyIiwiYmluZCIsInJlc2l6ZSIsImZvcmNlVXBkYXRlIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJjbGVhciIsImNoaWxkRWxlbWVudHMiLCJjaGlsZEVsZW1lbnQiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJnZXRXaWR0aCIsImdldEhlaWdodCIsInVzZXJJbnB1dFVwZGF0ZSIsInVwZGF0ZSIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYXNzaWduQ29udGV4dCIsIm9uUmVzaXplIiwibmV4dCIsImNvbnRleHQiLCJpbmRleCIsImNoaWxkRWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJwcm9ncmVzcyIsImluaXRpYWxpc2UiLCJkZWZlciIsInVzZXJJbnB1dCIsImZyb21Ob3RoaW5nIiwidXNlcklucHV0SGFuZGxlciIsImFkZFVzZXJJbnB1dEhhbmRsZXIiLCJwcm9wZXJ0aWVzIiwic2NlbmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWUMsUUFBUSxXQUFSLENBQWxCOztB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LENBQXNCaEMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FEekI7O0FBR0E4QixnQkFBVUcsbUJBQVYsQ0FBOEJELGdCQUE5QjtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBQSxVQUN4QjdDLE1BRHdCLEdBQ0M2QyxVQURELENBQ3hCN0MsTUFEd0I7QUFBQSxVQUNoQjZCLElBRGdCLEdBQ0NnQixVQURELENBQ2hCaEIsSUFEZ0I7QUFBQSxVQUNWRCxNQURVLEdBQ0NpQixVQURELENBQ1ZqQixNQURVO0FBQUEsVUFFMUJrQixLQUYwQixHQUVsQm5ELFFBQVFvRCxjQUFSLENBQXVCaEQsS0FBdkIsRUFBOEI4QyxVQUE5QixFQUEwQzdDLE1BQTFDLENBRmtCOzs7QUFJaEM4QyxZQUFNUCxVQUFOLENBQWlCdkMsTUFBakIsRUFBeUI0QixNQUF6QixFQUFpQ0MsSUFBakM7O0FBRUEsYUFBT2lCLEtBQVA7QUFDRDs7OztFQTNFaUJuRCxPOztBQThFcEJxRCxPQUFPQyxPQUFQLEdBQWlCbEQsS0FBakI7O0FBRUEsU0FBU3lDLEtBQVQsQ0FBZVUsUUFBZixFQUF5QjtBQUN2QkMsYUFBV0QsUUFBWCxFQUFxQixDQUFyQjtBQUNEIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIFVzZXJJbnB1dCA9IHJlcXVpcmUoJy4uL21pc2NlbGxhbmVvdXMvdXNlcklucHV0Jyk7XG5cbmNvbnN0IHsgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUhhbmRsZXI7XG4gIH1cblxuICByZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0LCAgLy8vXG4gICAgICAgICAgcmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUod2lkdGgsIGhlaWdodCwgcmVuZGVyKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMuY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5yZW5kZXIodGhpcy5jYW52YXMsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpKTtcbiAgfVxuXG4gIHVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgICByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51c2VySW5wdXRVcGRhdGUocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93biwgd2lkdGgsIGhlaWdodCwgcmVuZGVyKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgcmVzaXplSGFuZGxlciA9IHRoaXMucmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgZm9yRWFjaChjaGlsZEVsZW1lbnRzLCAoY2hpbGRFbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50c0xlbmd0aCA9IGNoaWxkRWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoIGluZGV4ICsgMSApIC8gY2hpbGRFbGVtZW50c0xlbmd0aDtcblxuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgICAgZGVmZXIoKCkgPT4ge1xuICAgICAgICB1cGRhdGUgJiYgdXBkYXRlKHByb2dyZXNzKTsgLy8vXG5cbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSk7XG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgICBkb25lICYmIGRvbmUoKTsgLy8vXG4gICAgfSk7XG5cbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoY2FudmFzKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB1c2VySW5wdXQuYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGRvbmUsIHVwZGF0ZSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzY2VuZSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2NlbmUsIHByb3BlcnRpZXMsIGNhbnZhcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKTtcblxuICAgIHJldHVybiBzY2VuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNjZW5lO1xuXG5mdW5jdGlvbiBkZWZlcihjYWxsYmFjaykge1xuICBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbn1cbiJdfQ==