'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pan = function () {
  function Pan(offset) {
    _classCallCheck(this, Pan);

    this.offset = offset;
  }

  _createClass(Pan, [{
    key: 'getOffset',
    value: function getOffset() {
      return this.offset;
    }
  }], [{
    key: 'fromInitialOffset',
    value: function fromInitialOffset(initialOffset) {
      var offset = initialOffset,
          pan = new Pan(offset);

      return pan;
    }
  }]);

  return Pan;
}();

module.exports = Pan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jYW1lcmEvcGFuLmpzIl0sIm5hbWVzIjpbIlBhbiIsIm9mZnNldCIsImluaXRpYWxPZmZzZXQiLCJwYW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0lBRU1BLEc7QUFDSixlQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztzQ0FFd0JDLGEsRUFBZTtBQUN0QyxVQUFNRCxTQUFTQyxhQUFmO0FBQUEsVUFDTUMsTUFBTSxJQUFJSCxHQUFKLENBQVFDLE1BQVIsQ0FEWjs7QUFHQSxhQUFPRSxHQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTCxHQUFqQiIsImZpbGUiOiJwYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFBhbiB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xuICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbE9mZnNldChpbml0aWFsT2Zmc2V0KSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gaW5pdGlhbE9mZnNldCxcbiAgICAgICAgICBwYW4gPSBuZXcgUGFuKG9mZnNldCk7XG4gICAgXG4gICAgcmV0dXJuIHBhbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhbjtcbiJdfQ==