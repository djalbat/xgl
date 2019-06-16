'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

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
      var childElements = this.getChildElements(),
          resizeHandler = this.resizeHandler.bind(this),
          updateHandler = this.updateHandler.bind(this),
          childElementsLength = childElements.length;

      this.assignContext();

      this.onResize(resizeHandler);

      this.onUpdate(updateHandler);

      childElements.forEach(function (childElement, index) {
        var progress = (index + 1) / childElementsLength;

        childElement.initialise(canvas);

        update && update(progress);
      });

      this.resizeHandler(); ///

      done && done(); ///
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJyZXNpemVIYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInVwZGF0ZSIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiYXNzaWduQ29udGV4dCIsIm9uUmVzaXplIiwib25VcGRhdGUiLCJpbmRleCIsInByb2dyZXNzIiwiaW5pdGlhbGlzZSIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEs7OztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs2QkFFUUMsYSxFQUFlO0FBQ3RCQyxhQUFPQyxRQUFQLEdBQWtCRixhQUFsQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxjQUFjLEtBQUtKLE1BQUwsQ0FBWUssY0FBWixFQUFwQjtBQUFBLFVBQ01DLGVBQWUsS0FBS04sTUFBTCxDQUFZTyxlQUFaLEVBRHJCO0FBQUEsVUFFTUMsUUFBUUosV0FGZDtBQUFBLFVBRTRCO0FBQ3RCSyxlQUFTSCxZQUhmLENBRGMsQ0FJZ0I7O0FBRTlCLFdBQUtOLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkYsS0FBbkIsRUFBMEJDLE1BQTFCOztBQUVBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1gsTUFBdEI7QUFDRDs7O2tDQUVhWSxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDMUYsV0FBS0MsTUFBTCxDQUFZTCxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsY0FBMUMsRUFBMERDLGdCQUExRCxFQUE0RUMsWUFBNUU7QUFDRDs7OzJCQUVNSixZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFBQTs7QUFDbkYsV0FBS2hCLE1BQUwsQ0FBWWtCLEtBQVo7O0FBRUEsV0FBS0MsYUFBTCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhSixNQUFiLENBQW9CLE9BQUtqQixNQUF6QixFQUFpQ1ksWUFBakMsRUFBK0NDLGNBQS9DLEVBQStEQyxjQUEvRCxFQUErRUMsZ0JBQS9FLEVBQWlHQyxZQUFqRyxDQUFsQjtBQUFBLE9BQTNCO0FBQ0Q7OzsrQkFFVWhCLE0sRUFBUXNCLE0sRUFBUUMsSSxFQUFNO0FBQy9CLFVBQU1KLGdCQUFnQixLQUFLSyxnQkFBTCxFQUF0QjtBQUFBLFVBQ012QixnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQndCLElBQW5CLENBQXdCLElBQXhCLENBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBRnRCO0FBQUEsVUFHTUUsc0JBQXNCUixjQUFjUyxNQUgxQzs7QUFLQSxXQUFLQyxhQUFMOztBQUVBLFdBQUtDLFFBQUwsQ0FBYzdCLGFBQWQ7O0FBRUEsV0FBSzhCLFFBQUwsQ0FBY0wsYUFBZDs7QUFFQVAsb0JBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFlVyxLQUFmLEVBQXlCO0FBQzdDLFlBQU1DLFdBQVcsQ0FBRUQsUUFBUSxDQUFWLElBQWdCTCxtQkFBakM7O0FBRUFOLHFCQUFhYSxVQUFiLENBQXdCbEMsTUFBeEI7O0FBRUFzQixrQkFBVUEsT0FBT1csUUFBUCxDQUFWO0FBQ0QsT0FORDs7QUFRQSxXQUFLaEMsYUFBTCxHQXBCK0IsQ0FvQlQ7O0FBRXRCc0IsY0FBUUEsTUFBUixDQXRCK0IsQ0FzQmY7QUFDakI7OzttQ0FFcUJZLFUsRUFBWTtBQUFBLFVBQ3hCbkMsTUFEd0IsR0FDQ21DLFVBREQsQ0FDeEJuQyxNQUR3QjtBQUFBLFVBQ2hCc0IsTUFEZ0IsR0FDQ2EsVUFERCxDQUNoQmIsTUFEZ0I7QUFBQSxVQUNSQyxJQURRLEdBQ0NZLFVBREQsQ0FDUlosSUFEUTtBQUFBLFVBRTFCYSxLQUYwQixHQUVsQnZDLFFBQVF3QyxjQUFSLENBQXVCdEMsS0FBdkIsRUFBOEJvQyxVQUE5QixFQUEwQ25DLE1BQTFDLENBRmtCOzs7QUFJaENvQyxZQUFNRixVQUFOLENBQWlCbEMsTUFBakIsRUFBeUJzQixNQUF6QixFQUFpQ0MsSUFBakM7O0FBRUEsYUFBT2EsS0FBUDtBQUNEOzs7O0VBaEVpQnZDLE87O0FBbUVwQnlDLE9BQU9DLE9BQVAsR0FBaUJ4QyxLQUFqQiIsImZpbGUiOiJzY2VuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU2NlbmUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9IHJlc2l6ZUhhbmRsZXI7XG4gIH1cblxuICByZXNpemVIYW5kbGVyKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50V2lkdGgoKSxcbiAgICAgICAgICBjbGllbnRIZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICB0aGlzLmNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKHRoaXMuY2FudmFzKTtcbiAgfVxuXG4gIHVwZGF0ZUhhbmRsZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGVhcigpO1xuXG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LnJlbmRlcih0aGlzLmNhbnZhcywgb2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIHVwZGF0ZSwgZG9uZSkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICByZXNpemVIYW5kbGVyID0gdGhpcy5yZXNpemVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgdXBkYXRlSGFuZGxlciA9IHRoaXMudXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHNMZW5ndGggPSBjaGlsZEVsZW1lbnRzLmxlbmd0aDtcblxuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgdGhpcy5vblJlc2l6ZShyZXNpemVIYW5kbGVyKTtcblxuICAgIHRoaXMub25VcGRhdGUodXBkYXRlSGFuZGxlcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gKCBpbmRleCArIDEgKSAvIGNoaWxkRWxlbWVudHNMZW5ndGg7XG5cbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgdXBkYXRlLCBkb25lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=