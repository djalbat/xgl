'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Scene = function (_Element) {
  _inherits(Scene, _Element);

  function Scene() {
    _classCallCheck(this, Scene);

    return _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).apply(this, arguments));
  }

  _createClass(Scene, [{
    key: 'resize',
    value: function resize() {
      var canvas = this.getCanvas(),
          clientWidth = canvas.getClientWidth(),
          clientHeight = canvas.getClientHeight(),
          width = clientWidth,
          ///
      height = clientHeight; ///

      canvas.resize(width, height);

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      var canvas = this.getCanvas();

      canvas.clear(); ///

      this.childElements.forEach(function (childElement) {
        childElement.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
      });
    }
  }, {
    key: 'updateHandler',
    value: function updateHandler(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix) {
      this.render(offsetMatrix, rotationMatrix, positionMatrix, projectionMatrix, normalMatrix);
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      var childElements = this.getChildElements();

      childElements.forEach(function (childElement) {
        childElement.initialise();
      });

      this.onUpdate(this.updateHandler.bind(this));

      window.onresize = this.resize.bind(this);

      this.resize();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var scene = Element.fromProperties(Scene, properties);

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJnZXRDYW52YXMiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInJlbmRlciIsImFzc2lnbkNvbnRleHQiLCJnZXRDaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsU0FBUyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxjQUFjRixPQUFPRyxjQUFQLEVBRHBCO0FBQUEsVUFFTUMsZUFBZUosT0FBT0ssZUFBUCxFQUZyQjtBQUFBLFVBR01DLFFBQVFKLFdBSGQ7QUFBQSxVQUc0QjtBQUN0QkssZUFBU0gsWUFKZixDQURPLENBS3VCOztBQUU5QkosYUFBT1EsTUFBUCxDQUFjRixLQUFkLEVBQXFCQyxNQUFyQjs7QUFFQSxXQUFLRSxXQUFMO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1kLFNBQVMsS0FBS0MsU0FBTCxFQUFmOztBQUVBRCxhQUFPZSxLQUFQLEdBSG1GLENBR25FOztBQUVoQixXQUFLQyxhQUFMLENBQW1CQyxPQUFuQixDQUEyQixVQUFTQyxZQUFULEVBQXVCO0FBQ2hEQSxxQkFBYUMsTUFBYixDQUFvQlQsWUFBcEIsRUFBa0NDLGNBQWxDLEVBQWtEQyxjQUFsRCxFQUFrRUMsZ0JBQWxFLEVBQW9GQyxZQUFwRjtBQUNELE9BRkQ7QUFHRDs7O2tDQUVhSixZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDMUYsV0FBS0ssTUFBTCxDQUFZVCxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsY0FBMUMsRUFBMERDLGdCQUExRCxFQUE0RUMsWUFBNUU7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS00sYUFBTDs7QUFFQSxVQUFNSixnQkFBZ0IsS0FBS0ssZ0JBQUwsRUFBdEI7O0FBRUFMLG9CQUFjQyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhSSxVQUFiO0FBQ0QsT0FGRDs7QUFJQSxXQUFLQyxRQUFMLENBQWMsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBZDs7QUFFQUMsYUFBT0MsUUFBUCxHQUFrQixLQUFLbkIsTUFBTCxDQUFZaUIsSUFBWixDQUFpQixJQUFqQixDQUFsQjs7QUFFQSxXQUFLakIsTUFBTDtBQUNEOzs7bUNBRXFCb0IsVSxFQUFZO0FBQ2hDLFVBQU1DLFFBQVFoQyxRQUFRaUMsY0FBUixDQUF1Qi9CLEtBQXZCLEVBQThCNkIsVUFBOUIsQ0FBZDs7QUFFQUMsWUFBTVAsVUFBTjs7QUFFQSxhQUFPTyxLQUFQO0FBQ0Q7Ozs7RUFqRGlCaEMsTzs7QUFvRHBCa0MsT0FBT0MsT0FBUCxHQUFpQmpDLEtBQWpCIiwiZmlsZSI6InNjZW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTY2VuZSBleHRlbmRzIEVsZW1lbnQge1xuICByZXNpemUoKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5nZXRDYW52YXMoKSxcbiAgICAgICAgICBjbGllbnRXaWR0aCA9IGNhbnZhcy5nZXRDbGllbnRXaWR0aCgpLFxuICAgICAgICAgIGNsaWVudEhlaWdodCA9IGNhbnZhcy5nZXRDbGllbnRIZWlnaHQoKSxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoLCAgLy8vXG4gICAgICAgICAgaGVpZ2h0ID0gY2xpZW50SGVpZ2h0OyAgLy8vXG5cbiAgICBjYW52YXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdldENhbnZhcygpO1xuXG4gICAgY2FudmFzLmNsZWFyKCk7IC8vL1xuXG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQucmVuZGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSGFuZGxlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KSB7XG4gICAgdGhpcy5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgY2hpbGRFbGVtZW50LmluaXRpYWxpc2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMub25VcGRhdGUodGhpcy51cGRhdGVIYW5kbGVyLmJpbmQodGhpcykpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcyk7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY2VuZTtcbiJdfQ==