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
      var scene = Element.fromProperties(Scene, properties),
          canvas = scene.getCanvas();

      canvas.enableDepthTesting(); ///

      scene.initialise();

      return scene;
    }
  }]);

  return Scene;
}(Element);

module.exports = Scene;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3NjZW5lLmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiU2NlbmUiLCJjYW52YXMiLCJnZXRDYW52YXMiLCJjbGllbnRXaWR0aCIsImdldENsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiZ2V0Q2xpZW50SGVpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZXNpemUiLCJmb3JjZVVwZGF0ZSIsIm9mZnNldE1hdHJpeCIsInJvdGF0aW9uTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsTWF0cml4IiwiY2xlYXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsInJlbmRlciIsImFzc2lnbkNvbnRleHQiLCJnZXRDaGlsZEVsZW1lbnRzIiwiaW5pdGlhbGlzZSIsIm9uVXBkYXRlIiwidXBkYXRlSGFuZGxlciIsImJpbmQiLCJ3aW5kb3ciLCJvbnJlc2l6ZSIsInByb3BlcnRpZXMiLCJzY2VuZSIsImZyb21Qcm9wZXJ0aWVzIiwiZW5hYmxlRGVwdGhUZXN0aW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7O0lBRU1DLEs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsVUFBTUMsU0FBUyxLQUFLQyxTQUFMLEVBQWY7QUFBQSxVQUNNQyxjQUFjRixPQUFPRyxjQUFQLEVBRHBCO0FBQUEsVUFFTUMsZUFBZUosT0FBT0ssZUFBUCxFQUZyQjtBQUFBLFVBR01DLFFBQVFKLFdBSGQ7QUFBQSxVQUc0QjtBQUN0QkssZUFBU0gsWUFKZixDQURPLENBS3VCOztBQUU5QkosYUFBT1EsTUFBUCxDQUFjRixLQUFkLEVBQXFCQyxNQUFyQjs7QUFFQSxXQUFLRSxXQUFMO0FBQ0Q7OzsyQkFFTUMsWSxFQUFjQyxjLEVBQWdCQyxjLEVBQWdCQyxnQixFQUFrQkMsWSxFQUFjO0FBQ25GLFVBQU1kLFNBQVMsS0FBS0MsU0FBTCxFQUFmOztBQUVBRCxhQUFPZSxLQUFQLEdBSG1GLENBR25FOztBQUVoQixXQUFLQyxhQUFMLENBQW1CQyxPQUFuQixDQUEyQixVQUFTQyxZQUFULEVBQXVCO0FBQ2hEQSxxQkFBYUMsTUFBYixDQUFvQlQsWUFBcEIsRUFBa0NDLGNBQWxDLEVBQWtEQyxjQUFsRCxFQUFrRUMsZ0JBQWxFLEVBQW9GQyxZQUFwRjtBQUNELE9BRkQ7QUFHRDs7O2tDQUVhSixZLEVBQWNDLGMsRUFBZ0JDLGMsRUFBZ0JDLGdCLEVBQWtCQyxZLEVBQWM7QUFDMUYsV0FBS0ssTUFBTCxDQUFZVCxZQUFaLEVBQTBCQyxjQUExQixFQUEwQ0MsY0FBMUMsRUFBMERDLGdCQUExRCxFQUE0RUMsWUFBNUU7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS00sYUFBTDs7QUFFQSxVQUFNSixnQkFBZ0IsS0FBS0ssZ0JBQUwsRUFBdEI7O0FBRUFMLG9CQUFjQyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NBLHFCQUFhSSxVQUFiO0FBQ0QsT0FGRDs7QUFJQSxXQUFLQyxRQUFMLENBQWMsS0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBZDs7QUFFQUMsYUFBT0MsUUFBUCxHQUFrQixLQUFLbkIsTUFBTCxDQUFZaUIsSUFBWixDQUFpQixJQUFqQixDQUFsQjs7QUFFQSxXQUFLakIsTUFBTDtBQUNEOzs7bUNBRXFCb0IsVSxFQUFZO0FBQ2hDLFVBQU1DLFFBQVFoQyxRQUFRaUMsY0FBUixDQUF1Qi9CLEtBQXZCLEVBQThCNkIsVUFBOUIsQ0FBZDtBQUFBLFVBQ001QixTQUFTNkIsTUFBTTVCLFNBQU4sRUFEZjs7QUFHQUQsYUFBTytCLGtCQUFQLEdBSmdDLENBSUY7O0FBRTlCRixZQUFNUCxVQUFOOztBQUVBLGFBQU9PLEtBQVA7QUFDRDs7OztFQXBEaUJoQyxPOztBQXVEcEJtQyxPQUFPQyxPQUFQLEdBQWlCbEMsS0FBakIiLCJmaWxlIjoic2NlbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIHJlc2l6ZSgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmdldENhbnZhcygpLFxuICAgICAgICAgIGNsaWVudFdpZHRoID0gY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gY2FudmFzLmdldENsaWVudEhlaWdodCgpLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGgsICAvLy9cbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIGNhbnZhcy5yZXNpemUod2lkdGgsIGhlaWdodCk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZ2V0Q2FudmFzKCk7XG5cbiAgICBjYW52YXMuY2xlYXIoKTsgLy8vXG5cbiAgICB0aGlzLmNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkRWxlbWVudC5yZW5kZXIob2Zmc2V0TWF0cml4LCByb3RhdGlvbk1hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIG5vcm1hbE1hdHJpeCk7XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVIYW5kbGVyKG9mZnNldE1hdHJpeCwgcm90YXRpb25NYXRyaXgsIHBvc2l0aW9uTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBub3JtYWxNYXRyaXgpIHtcbiAgICB0aGlzLnJlbmRlcihvZmZzZXRNYXRyaXgsIHJvdGF0aW9uTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgbm9ybWFsTWF0cml4KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICBjaGlsZEVsZW1lbnQuaW5pdGlhbGlzZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vblVwZGF0ZSh0aGlzLnVwZGF0ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgc2NlbmUgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNjZW5lLCBwcm9wZXJ0aWVzKSxcbiAgICAgICAgICBjYW52YXMgPSBzY2VuZS5nZXRDYW52YXMoKTtcblxuICAgIGNhbnZhcy5lbmFibGVEZXB0aFRlc3RpbmcoKTsgIC8vL1xuXG4gICAgc2NlbmUuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHNjZW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2NlbmU7XG4iXX0=