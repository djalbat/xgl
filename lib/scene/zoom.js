'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIAL_DISTANCE = 100;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS96b29tLmpzIl0sIm5hbWVzIjpbIklOSVRJQUxfRElTVEFOQ0UiLCJab29tIiwiZGlzdGFuY2UiLCJkZWx0YSIsInpvb20iLCJmcm9tTm90aGluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBekI7O0lBRU1DLEk7QUFDSixnQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O2tDQUVhO0FBQ1osYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OzsyQ0FFc0JDLEssRUFBTztBQUM1QixXQUFLRCxRQUFMLElBQWlCQyxLQUFqQjtBQUNEOzs7a0NBRW9CO0FBQ25CLFVBQU1ELFdBQVdGLGdCQUFqQjtBQUFBLFVBQ01JLE9BQU8sSUFBSUgsSUFBSixDQUFTQyxRQUFULENBRGI7O0FBR0EsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQSxPQUFPSCxLQUFLSSxXQUFMLEVBQWI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJILElBQWpCIiwiZmlsZSI6Inpvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElOSVRJQUxfRElTVEFOQ0UgPSAxMDA7XG4gICAgXG5jbGFzcyBab29tIHtcbiAgY29uc3RydWN0b3IoZGlzdGFuY2UpIHtcbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2U7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIG1vdXNlV2hlZWxFdmVudEhhbmRsZXIoZGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlICs9IGRlbHRhO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBJTklUSUFMX0RJU1RBTkNFLFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cblxuY29uc3Qgem9vbSA9IFpvb20uZnJvbU5vdGhpbmcoKTtcblxubW9kdWxlLmV4cG9ydHMgPSB6b29tO1xuIl19