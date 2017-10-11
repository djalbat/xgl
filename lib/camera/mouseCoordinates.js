'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MouseCoordinates = function () {
  function MouseCoordinates(x, y) {
    _classCallCheck(this, MouseCoordinates);

    this.x = x;
    this.y = y;
  }

  _createClass(MouseCoordinates, [{
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
    value: function plus(mouseCoordinates) {
      var x = mouseCoordinates.getX(),
          y = mouseCoordinates.getY();

      x = this.x + x;
      y = this.y + y;

      return new MouseCoordinates(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(mouseCoordinates) {
      var x = mouseCoordinates.getX(),
          y = mouseCoordinates.getY();

      x = this.x - x;
      y = this.y - y;

      return new MouseCoordinates(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new MouseCoordinates(x, y);
    }
  }]);

  return MouseCoordinates;
}();

module.exports = MouseCoordinates;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvbW91c2VDb29yZGluYXRlcy5qcyJdLCJuYW1lcyI6WyJNb3VzZUNvb3JkaW5hdGVzIiwieCIsInkiLCJtb3VzZUNvb3JkaW5hdGVzIiwiZ2V0WCIsImdldFkiLCJzY2FsYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGdCO0FBQ0osNEJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7OzsyQkFFTTtBQUNMLGFBQU8sS0FBS0QsQ0FBWjtBQUNEOzs7MkJBRU07QUFDTCxhQUFPLEtBQUtDLENBQVo7QUFDRDs7O3lCQUVJRCxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxnQixFQUFrQjtBQUNyQixVQUFJRixJQUFJRSxpQkFBaUJDLElBQWpCLEVBQVI7QUFBQSxVQUNJRixJQUFJQyxpQkFBaUJFLElBQWpCLEVBRFI7O0FBR0FKLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiO0FBQ0FDLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiOztBQUVBLGFBQU8sSUFBSUYsZ0JBQUosQ0FBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixDQUFQO0FBQ0Q7OzswQkFFS0MsZ0IsRUFBa0I7QUFDdEIsVUFBSUYsSUFBSUUsaUJBQWlCQyxJQUFqQixFQUFSO0FBQUEsVUFDSUYsSUFBSUMsaUJBQWlCRSxJQUFqQixFQURSOztBQUdBSixVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjtBQUNBQyxVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjs7QUFFQSxhQUFPLElBQUlGLGdCQUFKLENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsQ0FBUDtBQUNEOzs7aUNBRVlJLE0sRUFBUTtBQUNuQixVQUFNTCxJQUFJLEtBQUtBLENBQUwsR0FBU0ssTUFBbkI7QUFBQSxVQUNNSixJQUFJLEtBQUtBLENBQUwsR0FBU0ksTUFEbkI7O0FBR0EsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLENBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJSLGdCQUFqQiIsImZpbGUiOiJtb3VzZUNvb3JkaW5hdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNb3VzZUNvb3JkaW5hdGVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIHNldFgoeCkge1xuICAgIHRoaXMueCA9IHg7XG4gIH1cblxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IHggPSBtb3VzZUNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IG1vdXNlQ29vcmRpbmF0ZXMuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoeCwgeSk7XG4gIH1cblxuICBtaW51cyhtb3VzZUNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IHggPSBtb3VzZUNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IG1vdXNlQ29vcmRpbmF0ZXMuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IE1vdXNlQ29vcmRpbmF0ZXMoeCwgeSk7XG4gIH1cblxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBNb3VzZUNvb3JkaW5hdGVzKHgsIHkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VDb29yZGluYXRlcztcbiJdfQ==