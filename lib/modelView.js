'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tb2RlbFZpZXcuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJkZWZhdWx0WE9mZnNldCIsImRlZmF1bHRZT2Zmc2V0IiwiZGVmYXVsdFpPZmZzZXQiLCJNb2RlbFZpZXciLCJ4T2Zmc2V0IiwieU9mZnNldCIsInpPZmZzZXQiLCJtYXRyaXgiLCJjcmVhdGUiLCJvZmZzZXRWZWN0b3IiLCJ0cmFuc2xhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7O0FBRUEsSUFBTUMsaUJBQWlCLENBQUMsR0FBeEI7QUFBQSxJQUNNQyxpQkFBaUIsQ0FBQyxHQUR4QjtBQUFBLElBRU1DLGlCQUFpQixDQUFDLEdBRnhCOztJQUlNQyxTO0FBQ0osdUJBQTBGO0FBQUEsUUFBOUVDLE9BQThFLHVFQUFwRUosY0FBb0U7QUFBQSxRQUFwREssT0FBb0QsdUVBQTFDSixjQUEwQztBQUFBLFFBQTFCSyxPQUEwQix1RUFBaEJKLGNBQWdCOztBQUFBOztBQUN4RixTQUFLSyxNQUFMLEdBQWNULEtBQUtVLE1BQUwsRUFBZDs7QUFFQSxRQUFNQyxlQUFlLENBQ25CTCxPQURtQixFQUVuQkMsT0FGbUIsRUFHbkJDLE9BSG1CLENBQXJCOztBQU1BUixTQUFLWSxTQUFMLENBQWUsS0FBS0gsTUFBcEIsRUFBNEIsS0FBS0EsTUFBakMsRUFBeUNFLFlBQXpDO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLE1BQVo7QUFDRDs7Ozs7O0FBR0hJLE9BQU9DLE9BQVAsR0FBaUJULFNBQWpCIiwiZmlsZSI6Im1vZGVsVmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgbWF0NCA9IHJlcXVpcmUoJ2dsLW1hdDQnKTtcblxuY29uc3QgZGVmYXVsdFhPZmZzZXQgPSArMC4wLFxuICAgICAgZGVmYXVsdFlPZmZzZXQgPSArMC4wLFxuICAgICAgZGVmYXVsdFpPZmZzZXQgPSAtNi4wO1xuXG5jbGFzcyBNb2RlbFZpZXcge1xuICBjb25zdHJ1Y3Rvcih4T2Zmc2V0ID0gZGVmYXVsdFhPZmZzZXQsIHlPZmZzZXQgPSBkZWZhdWx0WU9mZnNldCwgek9mZnNldCA9IGRlZmF1bHRaT2Zmc2V0KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXQ0LmNyZWF0ZSgpO1xuXG4gICAgY29uc3Qgb2Zmc2V0VmVjdG9yID0gW1xuICAgICAgeE9mZnNldCxcbiAgICAgIHlPZmZzZXQsXG4gICAgICB6T2Zmc2V0XG4gICAgXTtcblxuICAgIG1hdDQudHJhbnNsYXRlKHRoaXMubWF0cml4LCB0aGlzLm1hdHJpeCwgb2Zmc2V0VmVjdG9yKTtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsVmlldztcbiJdfQ==