'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Coordinates2D = function () {
  function Coordinates2D(x, y) {
    _classCallCheck(this, Coordinates2D);

    this.x = x;
    this.y = y;
  }

  _createClass(Coordinates2D, [{
    key: 'getX',
    value: function getX() {
      return this.x;
    }
  }, {
    key: 'getY',
    value: function getY() {
      return this.y;
    }
  }, {
    key: 'setX',
    value: function setX(x) {
      this.x = x;
    }
  }, {
    key: 'setY',
    value: function setY(y) {
      this.y = y;
    }
  }, {
    key: 'plus',
    value: function plus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x + x;
      y = this.y + y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(coordinates2D) {
      var x = coordinates2D.getX(),
          y = coordinates2D.getY();

      x = this.x - x;
      y = this.y - y;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'dividedBy',
    value: function dividedBy(scalar) {
      var x = this.x / scalar,
          y = this.y / scalar;

      return new Coordinates2D(x, y);
    }
  }, {
    key: 'toString',
    value: function toString() {
      var x = this.getX(),
          y = this.getY(),
          string = x + ',' + y;

      return string;
    }
  }]);

  return Coordinates2D;
}();

module.exports = Coordinates2D;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvY29vcmRpbmF0ZXMyRC5qcyJdLCJuYW1lcyI6WyJDb29yZGluYXRlczJEIiwieCIsInkiLCJjb29yZGluYXRlczJEIiwiZ2V0WCIsImdldFkiLCJzY2FsYXIiLCJzdHJpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGE7QUFDSix5QkFBWUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQ2hCLFNBQUtELENBQUwsR0FBU0EsQ0FBVDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7OzJCQUVNO0FBQ0wsYUFBTyxLQUFLRCxDQUFaO0FBQ0Q7OzsyQkFFTTtBQUNMLGFBQU8sS0FBS0MsQ0FBWjtBQUNEOzs7eUJBRUlELEMsRUFBRztBQUNOLFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7eUJBRUlDLEMsRUFBRztBQUNOLFdBQUtBLENBQUwsR0FBU0EsQ0FBVDtBQUNEOzs7eUJBRUlDLGEsRUFBZTtBQUNsQixVQUFJRixJQUFJRSxjQUFjQyxJQUFkLEVBQVI7QUFBQSxVQUNJRixJQUFJQyxjQUFjRSxJQUFkLEVBRFI7O0FBR0FKLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiO0FBQ0FDLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiOztBQUVBLGFBQU8sSUFBSUYsYUFBSixDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLENBQVA7QUFDRDs7OzBCQUVLQyxhLEVBQWU7QUFDbkIsVUFBSUYsSUFBSUUsY0FBY0MsSUFBZCxFQUFSO0FBQUEsVUFDSUYsSUFBSUMsY0FBY0UsSUFBZCxFQURSOztBQUdBSixVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjtBQUNBQyxVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjs7QUFFQSxhQUFPLElBQUlGLGFBQUosQ0FBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixDQUFQO0FBQ0Q7OztpQ0FFWUksTSxFQUFRO0FBQ25CLFVBQU1MLElBQUksS0FBS0EsQ0FBTCxHQUFTSyxNQUFuQjtBQUFBLFVBQ01KLElBQUksS0FBS0EsQ0FBTCxHQUFTSSxNQURuQjs7QUFHQSxhQUFPLElBQUlOLGFBQUosQ0FBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixDQUFQO0FBQ0Q7Ozs4QkFFU0ksTSxFQUFRO0FBQ2hCLFVBQU1MLElBQUksS0FBS0EsQ0FBTCxHQUFTSyxNQUFuQjtBQUFBLFVBQ01KLElBQUksS0FBS0EsQ0FBTCxHQUFTSSxNQURuQjs7QUFHQSxhQUFPLElBQUlOLGFBQUosQ0FBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixDQUFQO0FBQ0Q7OzsrQkFFVTtBQUNULFVBQU1ELElBQUksS0FBS0csSUFBTCxFQUFWO0FBQUEsVUFDTUYsSUFBSSxLQUFLRyxJQUFMLEVBRFY7QUFBQSxVQUVNRSxTQUFZTixDQUFaLFNBQWlCQyxDQUZ2Qjs7QUFJQSxhQUFPSyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCVCxhQUFqQiIsImZpbGUiOiJjb29yZGluYXRlczJELmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb29yZGluYXRlczJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuICBcbiAgc2V0WCh4KSB7XG4gICAgdGhpcy54ID0geDtcbiAgfVxuICBcbiAgc2V0WSh5KSB7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHBsdXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggKyB4O1xuICAgIHkgPSB0aGlzLnkgKyB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgbWludXMoY29vcmRpbmF0ZXMyRCkge1xuICAgIGxldCB4ID0gY29vcmRpbmF0ZXMyRC5nZXRYKCksXG4gICAgICAgIHkgPSBjb29yZGluYXRlczJELmdldFkoKTtcblxuICAgIHggPSB0aGlzLnggLSB4O1xuICAgIHkgPSB0aGlzLnkgLSB5O1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG4gIFxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgZGl2aWRlZEJ5KHNjYWxhcikge1xuICAgIGNvbnN0IHggPSB0aGlzLnggLyBzY2FsYXIsXG4gICAgICAgICAgeSA9IHRoaXMueSAvIHNjYWxhcjtcblxuICAgIHJldHVybiBuZXcgQ29vcmRpbmF0ZXMyRCh4LCB5KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IHggPSB0aGlzLmdldFgoKSxcbiAgICAgICAgICB5ID0gdGhpcy5nZXRZKCksXG4gICAgICAgICAgc3RyaW5nID0gYCR7eH0sJHt5fWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29vcmRpbmF0ZXMyRDtcbiJdfQ==