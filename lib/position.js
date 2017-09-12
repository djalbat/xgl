'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXOffset = +0.0,
    defaultYOffset = +0.0,
    defaultZOffset = -6.0;

var Position = function () {
  function Position() {
    var xOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXOffset;
    var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYOffset;
    var zOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZOffset;

    _classCallCheck(this, Position);

    this.matrix = mat4.create();

    var offsetVector = [xOffset, yOffset, zOffset];

    mat4.translate(this.matrix, this.matrix, offsetVector);
  }

  _createClass(Position, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return Position;
}();

module.exports = Position;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9wb3NpdGlvbi5qcyJdLCJuYW1lcyI6WyJtYXQ0IiwicmVxdWlyZSIsImRlZmF1bHRYT2Zmc2V0IiwiZGVmYXVsdFlPZmZzZXQiLCJkZWZhdWx0Wk9mZnNldCIsIlBvc2l0aW9uIiwieE9mZnNldCIsInlPZmZzZXQiLCJ6T2Zmc2V0IiwibWF0cml4IiwiY3JlYXRlIiwib2Zmc2V0VmVjdG9yIiwidHJhbnNsYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0FBRWxDLElBQU1DLGlCQUFpQixDQUFDLEdBQXhCO0FBQUEsSUFDTUMsaUJBQWlCLENBQUMsR0FEeEI7QUFBQSxJQUVNQyxpQkFBaUIsQ0FBQyxHQUZ4Qjs7SUFJTUMsUTtBQUNKLHNCQUEwRjtBQUFBLFFBQTlFQyxPQUE4RSx1RUFBcEVKLGNBQW9FO0FBQUEsUUFBcERLLE9BQW9ELHVFQUExQ0osY0FBMEM7QUFBQSxRQUExQkssT0FBMEIsdUVBQWhCSixjQUFnQjs7QUFBQTs7QUFDeEYsU0FBS0ssTUFBTCxHQUFjVCxLQUFLVSxNQUFMLEVBQWQ7O0FBRUEsUUFBTUMsZUFBZSxDQUNuQkwsT0FEbUIsRUFFbkJDLE9BRm1CLEVBR25CQyxPQUhtQixDQUFyQjs7QUFNQVIsU0FBS1ksU0FBTCxDQUFlLEtBQUtILE1BQXBCLEVBQTRCLEtBQUtBLE1BQWpDLEVBQXlDRSxZQUF6QztBQUNEOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLRixNQUFaO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCVCxRQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WE9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0WU9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0Wk9mZnNldCA9IC02LjA7XG5cbmNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3IoeE9mZnNldCA9IGRlZmF1bHRYT2Zmc2V0LCB5T2Zmc2V0ID0gZGVmYXVsdFlPZmZzZXQsIHpPZmZzZXQgPSBkZWZhdWx0Wk9mZnNldCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0NC5jcmVhdGUoKTtcblxuICAgIGNvbnN0IG9mZnNldFZlY3RvciA9IFtcbiAgICAgIHhPZmZzZXQsXG4gICAgICB5T2Zmc2V0LFxuICAgICAgek9mZnNldFxuICAgIF07XG5cbiAgICBtYXQ0LnRyYW5zbGF0ZSh0aGlzLm1hdHJpeCwgdGhpcy5tYXRyaXgsIG9mZnNldFZlY3Rvcik7XG4gIH1cbiAgXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3NpdGlvbjtcbiJdfQ==