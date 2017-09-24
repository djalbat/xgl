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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb29yZGluYXRlczJELmpzIl0sIm5hbWVzIjpbIkNvb3JkaW5hdGVzMkQiLCJ4IiwieSIsImNvb3JkaW5hdGVzMkQiLCJnZXRYIiwiZ2V0WSIsInNjYWxhciIsInN0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYTtBQUNKLHlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozs7MkJBRU07QUFDTCxhQUFPLEtBQUtELENBQVo7QUFDRDs7OzJCQUVNO0FBQ0wsYUFBTyxLQUFLQyxDQUFaO0FBQ0Q7Ozt5QkFFSUQsQyxFQUFHO0FBQ04sV0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozt5QkFFSUMsQyxFQUFHO0FBQ04sV0FBS0EsQ0FBTCxHQUFTQSxDQUFUO0FBQ0Q7Ozt5QkFFSUMsYSxFQUFlO0FBQ2xCLFVBQUlGLElBQUlFLGNBQWNDLElBQWQsRUFBUjtBQUFBLFVBQ0lGLElBQUlDLGNBQWNFLElBQWQsRUFEUjs7QUFHQUosVUFBSSxLQUFLQSxDQUFMLEdBQVNBLENBQWI7QUFDQUMsVUFBSSxLQUFLQSxDQUFMLEdBQVNBLENBQWI7O0FBRUEsYUFBTyxJQUFJRixhQUFKLENBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsQ0FBUDtBQUNEOzs7MEJBRUtDLGEsRUFBZTtBQUNuQixVQUFJRixJQUFJRSxjQUFjQyxJQUFkLEVBQVI7QUFBQSxVQUNJRixJQUFJQyxjQUFjRSxJQUFkLEVBRFI7O0FBR0FKLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiO0FBQ0FDLFVBQUksS0FBS0EsQ0FBTCxHQUFTQSxDQUFiOztBQUVBLGFBQU8sSUFBSUYsYUFBSixDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLENBQVA7QUFDRDs7O2lDQUVZSSxNLEVBQVE7QUFDbkIsVUFBTUwsSUFBSSxLQUFLQSxDQUFMLEdBQVNLLE1BQW5CO0FBQUEsVUFDTUosSUFBSSxLQUFLQSxDQUFMLEdBQVNJLE1BRG5COztBQUdBLGFBQU8sSUFBSU4sYUFBSixDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLENBQVA7QUFDRDs7OzhCQUVTSSxNLEVBQVE7QUFDaEIsVUFBTUwsSUFBSSxLQUFLQSxDQUFMLEdBQVNLLE1BQW5CO0FBQUEsVUFDTUosSUFBSSxLQUFLQSxDQUFMLEdBQVNJLE1BRG5COztBQUdBLGFBQU8sSUFBSU4sYUFBSixDQUFrQkMsQ0FBbEIsRUFBcUJDLENBQXJCLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsVUFBTUQsSUFBSSxLQUFLRyxJQUFMLEVBQVY7QUFBQSxVQUNNRixJQUFJLEtBQUtHLElBQUwsRUFEVjtBQUFBLFVBRU1FLFNBQVlOLENBQVosU0FBaUJDLENBRnZCOztBQUlBLGFBQU9LLE1BQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJULGFBQWpCIiwiZmlsZSI6ImNvb3JkaW5hdGVzMkQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIENvb3JkaW5hdGVzMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgZ2V0WCgpIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG5cbiAgZ2V0WSgpIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG4gIFxuICBzZXRYKHgpIHtcbiAgICB0aGlzLnggPSB4O1xuICB9XG4gIFxuICBzZXRZKHkpIHtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG5cbiAgcGx1cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCArIHg7XG4gICAgeSA9IHRoaXMueSArIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBtaW51cyhjb29yZGluYXRlczJEKSB7XG4gICAgbGV0IHggPSBjb29yZGluYXRlczJELmdldFgoKSxcbiAgICAgICAgeSA9IGNvb3JkaW5hdGVzMkQuZ2V0WSgpO1xuXG4gICAgeCA9IHRoaXMueCAtIHg7XG4gICAgeSA9IHRoaXMueSAtIHk7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cbiAgXG4gIG11bHRpcGxpZWRCeShzY2FsYXIpIHtcbiAgICBjb25zdCB4ID0gdGhpcy54ICogc2NhbGFyLFxuICAgICAgICAgIHkgPSB0aGlzLnkgKiBzY2FsYXI7XG5cbiAgICByZXR1cm4gbmV3IENvb3JkaW5hdGVzMkQoeCwgeSk7XG4gIH1cblxuICBkaXZpZGVkQnkoc2NhbGFyKSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAvIHNjYWxhcixcbiAgICAgICAgICB5ID0gdGhpcy55IC8gc2NhbGFyO1xuXG4gICAgcmV0dXJuIG5ldyBDb29yZGluYXRlczJEKHgsIHkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgeCA9IHRoaXMuZ2V0WCgpLFxuICAgICAgICAgIHkgPSB0aGlzLmdldFkoKSxcbiAgICAgICAgICBzdHJpbmcgPSBgJHt4fSwke3l9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb29yZGluYXRlczJEO1xuIl19