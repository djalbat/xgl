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
        var progress = index / childElementsLength;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJyZXNpemVIYW5kbGVyIiwid2luZG93Iiwib25yZXNpemUiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwicmVuZGVyIiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInVwZGF0ZSIsImRvbmUiLCJnZXRDaGlsZEVsZW1lbnRzIiwiYmluZCIsInVwZGF0ZUhhbmRsZXIiLCJjaGlsZEVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwiYXNzaWduQ29udGV4dCIsIm9uUmVzaXplIiwib25VcGRhdGUiLCJpbmRleCIsInByb2dyZXNzIiwiaW5pdGlhbGlzZSIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEs7OztBQUNKLGlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQUE7O0FBR2xCLFVBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUhrQjtBQUluQjs7Ozs2QkFFUUMsYSxFQUFlO0FBQ3RCQyxhQUFPQyxRQUFQLEdBQWtCRixhQUFsQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNRyxjQUFjLEtBQUtKLE1BQUwsQ0FBWUssY0FBWixFQUFwQjtBQUFBLFVBQ01DLGVBQWUsS0FBS04sTUFBTCxDQUFZTyxlQUFaLEVBRHJCO0FBQUEsVUFFTUMsUUFBUUosV0FGZDtBQUFBLFVBRTRCO0FBQ3RCSyxlQUFTSCxZQUhmLENBRGMsQ0FJZ0I7O0FBRTlCLFdBQUtOLE1BQUwsQ0FBWVUsTUFBWixDQUFtQkYsS0FBbkIsRUFBMEJDLE1BQTFCOztBQUVBLFdBQUtFLFdBQUwsQ0FBaUIsS0FBS1gsTUFBdEI7QUFDRDs7O2tDQUVhWSxZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDMUYsV0FBS0MsTUFBTCxDQUFZTCxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsY0FBMUMsRUFBMERDLGdCQUExRCxFQUE0RUMsWUFBNUU7QUFDRDs7OzJCQUVNSixZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFBQTs7QUFDbkYsV0FBS2hCLE1BQUwsQ0FBWWtCLEtBQVo7O0FBRUEsV0FBS0MsYUFBTCxDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBQ0MsWUFBRDtBQUFBLGVBQWtCQSxhQUFhSixNQUFiLENBQW9CLE9BQUtqQixNQUF6QixFQUFpQ1ksWUFBakMsRUFBK0NDLGNBQS9DLEVBQStEQyxjQUEvRCxFQUErRUMsZ0JBQS9FLEVBQWlHQyxZQUFqRyxDQUFsQjtBQUFBLE9BQTNCO0FBQ0Q7OzsrQkFFVWhCLE0sRUFBUXNCLE0sRUFBUUMsSSxFQUFNO0FBQy9CLFVBQU1KLGdCQUFnQixLQUFLSyxnQkFBTCxFQUF0QjtBQUFBLFVBQ012QixnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQndCLElBQW5CLENBQXdCLElBQXhCLENBRHRCO0FBQUEsVUFFTUMsZ0JBQWdCLEtBQUtBLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLENBRnRCO0FBQUEsVUFHTUUsc0JBQXNCUixjQUFjUyxNQUgxQzs7QUFLQSxXQUFLQyxhQUFMOztBQUVBLFdBQUtDLFFBQUwsQ0FBYzdCLGFBQWQ7O0FBRUEsV0FBSzhCLFFBQUwsQ0FBY0wsYUFBZDs7QUFFQVAsb0JBQWNDLE9BQWQsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFlVyxLQUFmLEVBQXlCO0FBQzdDLFlBQU1DLFdBQVdELFFBQVFMLG1CQUF6Qjs7QUFFQU4scUJBQWFhLFVBQWIsQ0FBd0JsQyxNQUF4Qjs7QUFFQXNCLGtCQUFVQSxPQUFPVyxRQUFQLENBQVY7QUFDRCxPQU5EOztBQVFBLFdBQUtoQyxhQUFMLEdBcEIrQixDQW9CVDs7QUFFdEJzQixjQUFRQSxNQUFSLENBdEIrQixDQXNCZjtBQUNqQjs7O21DQUVxQlksVSxFQUFZO0FBQUEsVUFDeEJuQyxNQUR3QixHQUNDbUMsVUFERCxDQUN4Qm5DLE1BRHdCO0FBQUEsVUFDaEJzQixNQURnQixHQUNDYSxVQURELENBQ2hCYixNQURnQjtBQUFBLFVBQ1JDLElBRFEsR0FDQ1ksVUFERCxDQUNSWixJQURRO0FBQUEsVUFFMUJhLEtBRjBCLEdBRWxCdkMsUUFBUXdDLGNBQVIsQ0FBdUJ0QyxLQUF2QixFQUE4Qm9DLFVBQTlCLEVBQTBDbkMsTUFBMUMsQ0FGa0I7OztBQUloQ29DLFlBQU1GLFVBQU4sQ0FBaUJsQyxNQUFqQixFQUF5QnNCLE1BQXpCLEVBQWlDQyxJQUFqQzs7QUFFQSxhQUFPYSxLQUFQO0FBQ0Q7Ozs7RUFoRWlCdkMsTzs7QUFtRXBCeUMsT0FBT0MsT0FBUCxHQUFpQnhDLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyKSB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gcmVzaXplSGFuZGxlcjtcbiAgfVxuXG4gIHJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgY29uc3QgY2xpZW50V2lkdGggPSB0aGlzLmNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IHRoaXMuY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUodGhpcy5jYW52YXMpO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyKCk7XG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQucmVuZGVyKHRoaXMuY2FudmFzLCBvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSk7XG4gIH1cblxuICBpbml0aWFsaXNlKGNhbnZhcywgdXBkYXRlLCBkb25lKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpLFxuICAgICAgICAgIHJlc2l6ZUhhbmRsZXIgPSB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICB1cGRhdGVIYW5kbGVyID0gdGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50c0xlbmd0aCA9IGNoaWxkRWxlbWVudHMubGVuZ3RoO1xuXG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICB0aGlzLm9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh1cGRhdGVIYW5kbGVyKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBpbmRleCAvIGNoaWxkRWxlbWVudHNMZW5ndGg7XG5cbiAgICAgIGNoaWxkRWxlbWVudC5pbml0aWFsaXNlKGNhbnZhcyk7XG5cbiAgICAgIHVwZGF0ZSAmJiB1cGRhdGUocHJvZ3Jlc3MpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZXNpemVIYW5kbGVyKCk7IC8vL1xuXG4gICAgZG9uZSAmJiBkb25lKCk7IC8vL1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGNhbnZhcywgdXBkYXRlLCBkb25lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgY2FudmFzKTtcblxuICAgIHNjZW5lLmluaXRpYWxpc2UoY2FudmFzLCB1cGRhdGUsIGRvbmUpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=