'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var defaultXOffset = +0.0,
    defaultYOffset = +0.0,
    defaultZOffset = -6.0;

var ModelView = function () {
  function ModelView() {
    var xOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultXOffset;
    var yOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultYOffset;
    var zOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultZOffset;

    _classCallCheck(this, ModelView);

    this.matrix = mat4.create();

    var offsetVector = [xOffset, yOffset, zOffset];

    mat4.translate(this.matrix, this.matrix, offsetVector);
  }

  _createClass(ModelView, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }]);

  return ModelView;
}();

module.exports = ModelView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tb2RlbFZpZXcuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJkZWZhdWx0WE9mZnNldCIsImRlZmF1bHRZT2Zmc2V0IiwiZGVmYXVsdFpPZmZzZXQiLCJNb2RlbFZpZXciLCJ4T2Zmc2V0IiwieU9mZnNldCIsInpPZmZzZXQiLCJtYXRyaXgiLCJjcmVhdGUiLCJvZmZzZXRWZWN0b3IiLCJ0cmFuc2xhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWIsQyxDQUFrQzs7QUFFbEMsSUFBTUMsaUJBQWlCLENBQUMsR0FBeEI7QUFBQSxJQUNNQyxpQkFBaUIsQ0FBQyxHQUR4QjtBQUFBLElBRU1DLGlCQUFpQixDQUFDLEdBRnhCOztJQUlNQyxTO0FBQ0osdUJBQTBGO0FBQUEsUUFBOUVDLE9BQThFLHVFQUFwRUosY0FBb0U7QUFBQSxRQUFwREssT0FBb0QsdUVBQTFDSixjQUEwQztBQUFBLFFBQTFCSyxPQUEwQix1RUFBaEJKLGNBQWdCOztBQUFBOztBQUN4RixTQUFLSyxNQUFMLEdBQWNULEtBQUtVLE1BQUwsRUFBZDs7QUFFQSxRQUFNQyxlQUFlLENBQ25CTCxPQURtQixFQUVuQkMsT0FGbUIsRUFHbkJDLE9BSG1CLENBQXJCOztBQU1BUixTQUFLWSxTQUFMLENBQWUsS0FBS0gsTUFBcEIsRUFBNEIsS0FBS0EsTUFBakMsRUFBeUNFLFlBQXpDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE1BQVo7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJULFNBQWpCIiwiZmlsZSI6Im1vZGVsVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTsgIC8vL1xuXG5jb25zdCBkZWZhdWx0WE9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0WU9mZnNldCA9ICswLjAsXG4gICAgICBkZWZhdWx0Wk9mZnNldCA9IC02LjA7XG5cbmNsYXNzIE1vZGVsVmlldyB7XG4gIGNvbnN0cnVjdG9yKHhPZmZzZXQgPSBkZWZhdWx0WE9mZnNldCwgeU9mZnNldCA9IGRlZmF1bHRZT2Zmc2V0LCB6T2Zmc2V0ID0gZGVmYXVsdFpPZmZzZXQpIHtcbiAgICB0aGlzLm1hdHJpeCA9IG1hdDQuY3JlYXRlKCk7XG5cbiAgICBjb25zdCBvZmZzZXRWZWN0b3IgPSBbXG4gICAgICB4T2Zmc2V0LFxuICAgICAgeU9mZnNldCxcbiAgICAgIHpPZmZzZXRcbiAgICBdO1xuXG4gICAgbWF0NC50cmFuc2xhdGUodGhpcy5tYXRyaXgsIHRoaXMubWF0cml4LCBvZmZzZXRWZWN0b3IpO1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kZWxWaWV3O1xuIl19