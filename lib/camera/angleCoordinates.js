'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AngleCoordinates = function () {
  function AngleCoordinates(x, y) {
    _classCallCheck(this, AngleCoordinates);

    this.x = x;
    this.y = y;
  }

  _createClass(AngleCoordinates, [{
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
    value: function plus(angleCoordinates) {
      var x = angleCoordinates.getX(),
          y = angleCoordinates.getY();

      x = this.x + x;
      y = this.y + y;

      return new AngleCoordinates(x, y);
    }
  }, {
    key: 'minus',
    value: function minus(angleCoordinates) {
      var x = angleCoordinates.getX(),
          y = angleCoordinates.getY();

      x = this.x - x;
      y = this.y - y;

      return new AngleCoordinates(x, y);
    }
  }, {
    key: 'multipliedBy',
    value: function multipliedBy(scalar) {
      var x = this.x * scalar,
          y = this.y * scalar;

      return new AngleCoordinates(x, y);
    }
  }]);

  return AngleCoordinates;
}();

module.exports = AngleCoordinates;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvYW5nbGVDb29yZGluYXRlcy5qcyJdLCJuYW1lcyI6WyJBbmdsZUNvb3JkaW5hdGVzIiwieCIsInkiLCJhbmdsZUNvb3JkaW5hdGVzIiwiZ2V0WCIsImdldFkiLCJzY2FsYXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLGdCO0FBQ0osNEJBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUFBOztBQUNoQixTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7OzsyQkFFTTtBQUNMLGFBQU8sS0FBS0QsQ0FBWjtBQUNEOzs7MkJBRU07QUFDTCxhQUFPLEtBQUtDLENBQVo7QUFDRDs7O3lCQUVJRCxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxDLEVBQUc7QUFDTixXQUFLQSxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7O3lCQUVJQyxnQixFQUFrQjtBQUNyQixVQUFJRixJQUFJRSxpQkFBaUJDLElBQWpCLEVBQVI7QUFBQSxVQUNJRixJQUFJQyxpQkFBaUJFLElBQWpCLEVBRFI7O0FBR0FKLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiO0FBQ0FDLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiOztBQUVBLGFBQU8sSUFBSUYsZ0JBQUosQ0FBcUJDLENBQXJCLEVBQXdCQyxDQUF4QixDQUFQO0FBQ0Q7OzswQkFFS0MsZ0IsRUFBa0I7QUFDdEIsVUFBSUYsSUFBSUUsaUJBQWlCQyxJQUFqQixFQUFSO0FBQUEsVUFDSUYsSUFBSUMsaUJBQWlCRSxJQUFqQixFQURSOztBQUdBSixVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjtBQUNBQyxVQUFJLEtBQUtBLENBQUwsR0FBU0EsQ0FBYjs7QUFFQSxhQUFPLElBQUlGLGdCQUFKLENBQXFCQyxDQUFyQixFQUF3QkMsQ0FBeEIsQ0FBUDtBQUNEOzs7aUNBRVlJLE0sRUFBUTtBQUNuQixVQUFNTCxJQUFJLEtBQUtBLENBQUwsR0FBU0ssTUFBbkI7QUFBQSxVQUNNSixJQUFJLEtBQUtBLENBQUwsR0FBU0ksTUFEbkI7O0FBR0EsYUFBTyxJQUFJTixnQkFBSixDQUFxQkMsQ0FBckIsRUFBd0JDLENBQXhCLENBQVA7QUFDRDs7Ozs7O0FBR0hLLE9BQU9DLE9BQVAsR0FBaUJSLGdCQUFqQiIsImZpbGUiOiJhbmdsZUNvb3JkaW5hdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBBbmdsZUNvb3JkaW5hdGVzIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGdldFgoKSB7XG4gICAgcmV0dXJuIHRoaXMueDtcbiAgfVxuXG4gIGdldFkoKSB7XG4gICAgcmV0dXJuIHRoaXMueTtcbiAgfVxuXG4gIHNldFgoeCkge1xuICAgIHRoaXMueCA9IHg7XG4gIH1cblxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhhbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IHggPSBhbmdsZUNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IGFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IEFuZ2xlQ29vcmRpbmF0ZXMoeCwgeSk7XG4gIH1cblxuICBtaW51cyhhbmdsZUNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IHggPSBhbmdsZUNvb3JkaW5hdGVzLmdldFgoKSxcbiAgICAgICAgeSA9IGFuZ2xlQ29vcmRpbmF0ZXMuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IEFuZ2xlQ29vcmRpbmF0ZXMoeCwgeSk7XG4gIH1cblxuICBtdWx0aXBsaWVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAqIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55ICogc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBBbmdsZUNvb3JkaW5hdGVzKHgsIHkpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQW5nbGVDb29yZGluYXRlcztcbiJdfQ==