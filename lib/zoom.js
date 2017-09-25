'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIAL_DISTANCE = 10;

var Zoom = function () {
  function Zoom(distance) {
    _classCallCheck(this, Zoom);

    this.distance = distance;
  }

  _createClass(Zoom, [{
    key: 'getDistance',
    value: function getDistance() {
      return this.distance;
    }
  }, {
    key: 'mouseWheelEventHandler',
    value: function mouseWheelEventHandler(delta) {
      this.distance += delta;
    }
  }], [{
    key: 'fromNothing',
    value: function fromNothing() {
      var distance = INITIAL_DISTANCE,
          zoom = new Zoom(distance);

      return zoom;
    }
  }]);

  return Zoom;
}();

var zoom = Zoom.fromNothing();

module.exports = zoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi96b29tLmpzIl0sIm5hbWVzIjpbIklOSVRJQUxfRElTVEFOQ0UiLCJab29tIiwiZGlzdGFuY2UiLCJkZWx0YSIsInpvb20iLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsRUFBekI7O0lBRU1DLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OzsyQ0FFc0JDLEssRUFBTztBQUM1QixXQUFLRCxRQUFMLElBQWlCQyxLQUFqQjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1ELFdBQVdGLGdCQUFqQjtBQUFBLFVBQ01JLE9BQU8sSUFBSUgsSUFBSixDQUFTQyxRQUFULENBRGI7O0FBR0EsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQSxPQUFPSCxLQUFLSSxXQUFMLEVBQWI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILElBQWpCIiwiZmlsZSI6Inpvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElOSVRJQUxfRElTVEFOQ0UgPSAxMDtcbiAgICBcbmNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSkge1xuICAgIHRoaXMuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgfVxuXG4gIGdldERpc3RhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlO1xuICB9XG5cbiAgbW91c2VXaGVlbEV2ZW50SGFuZGxlcihkZWx0YSkge1xuICAgIHRoaXMuZGlzdGFuY2UgKz0gZGVsdGE7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBkaXN0YW5jZSA9IElOSVRJQUxfRElTVEFOQ0UsXG4gICAgICAgICAgem9vbSA9IG5ldyBab29tKGRpc3RhbmNlKTtcbiAgICBcbiAgICByZXR1cm4gem9vbTtcbiAgfVxufVxuXG5jb25zdCB6b29tID0gWm9vbS5mcm9tTm90aGluZygpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHpvb207XG4iXX0=