'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    translate = mat4.translate;

var Offset = function () {
  function Offset(mat4) {
    _classCallCheck(this, Offset);

    this.mat4 = mat4;
  }

  _createClass(Offset, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromVec3',
    value: function fromVec3(vec3) {
      var mat4 = create(),
          offset = new Offset(mat4);

      translate(mat4, mat4, vec3);

      return offset;
    }
  }]);

  return Offset;
}();

module.exports = Offset;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9vZmZzZXQuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJ0cmFuc2xhdGUiLCJPZmZzZXQiLCJ2ZWMzIiwib2Zmc2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0lBRTFCQyxNLEdBQXNCRixJLENBQXRCRSxNO0lBQVFDLFMsR0FBY0gsSSxDQUFkRyxTOztJQUVWQyxNO0FBQ0osa0JBQVlKLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVlSyxJLEVBQU07QUFDcEIsVUFBTUwsT0FBT0UsUUFBYjtBQUFBLFVBQ01JLFNBQVMsSUFBSUYsTUFBSixDQUFXSixJQUFYLENBRGY7O0FBR0FHLGdCQUFVSCxJQUFWLEVBQWdCQSxJQUFoQixFQUFzQkssSUFBdEI7O0FBRUEsYUFBT0MsTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQkosTUFBakIiLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNvbnN0IHsgY3JlYXRlLCB0cmFuc2xhdGUgfSA9IG1hdDQ7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKG1hdDQpIHtcbiAgICB0aGlzLm1hdDQgPSBtYXQ0O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0NDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVjMyh2ZWMzKSB7XG4gICAgY29uc3QgbWF0NCA9IGNyZWF0ZSgpLFxuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQobWF0NCk7XG5cbiAgICB0cmFuc2xhdGUobWF0NCwgbWF0NCwgdmVjMyk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIl19