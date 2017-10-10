'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var create = mat4.create,
    invert = mat4.invert,
    transpose = mat4.transpose;

var Normal = function () {
  function Normal(mat4) {
    _classCallCheck(this, Normal);

    this.mat4 = mat4;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.mat4;
    }
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var mat4 = create(),
          rotationMatrix = rotation.getMatrix(),
          normal = new Normal(mat4);

      invert(mat4, rotationMatrix);

      transpose(mat4, mat4);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9ub3JtYWwuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJjcmVhdGUiLCJpbnZlcnQiLCJ0cmFuc3Bvc2UiLCJOb3JtYWwiLCJyb3RhdGlvbiIsInJvdGF0aW9uTWF0cml4IiwiZ2V0TWF0cml4Iiwibm9ybWFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0lBRTFCQyxNLEdBQThCRixJLENBQTlCRSxNO0lBQVFDLE0sR0FBc0JILEksQ0FBdEJHLE07SUFBUUMsUyxHQUFjSixJLENBQWRJLFM7O0lBRWxCQyxNO0FBQ0osa0JBQVlMLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLElBQVo7QUFDRDs7O2lDQUVtQk0sUSxFQUFVO0FBQzVCLFVBQU1OLE9BQU9FLFFBQWI7QUFBQSxVQUNNSyxpQkFBaUJELFNBQVNFLFNBQVQsRUFEdkI7QUFBQSxVQUVNQyxTQUFTLElBQUlKLE1BQUosQ0FBV0wsSUFBWCxDQUZmOztBQUlBRyxhQUFPSCxJQUFQLEVBQWFPLGNBQWI7O0FBRUFILGdCQUFVSixJQUFWLEVBQWdCQSxJQUFoQjs7QUFFQSxhQUFPUyxNQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCTixNQUFqQiIsImZpbGUiOiJub3JtYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG1hdDQgPSByZXF1aXJlKCdnbC1tYXQ0Jyk7ICAvLy9cblxuY29uc3QgeyBjcmVhdGUsIGludmVydCwgdHJhbnNwb3NlIH0gPSBtYXQ0O1xuXG5jbGFzcyBOb3JtYWwge1xuICBjb25zdHJ1Y3RvcihtYXQ0KSB7XG4gICAgdGhpcy5tYXQ0ID0gbWF0NDtcbiAgfVxuICBcbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdDQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUm90YXRpb24ocm90YXRpb24pIHtcbiAgICBjb25zdCBtYXQ0ID0gY3JlYXRlKCksXG4gICAgICAgICAgcm90YXRpb25NYXRyaXggPSByb3RhdGlvbi5nZXRNYXRyaXgoKSxcbiAgICAgICAgICBub3JtYWwgPSBuZXcgTm9ybWFsKG1hdDQpO1xuXG4gICAgaW52ZXJ0KG1hdDQsIHJvdGF0aW9uTWF0cml4KTtcbiAgICBcbiAgICB0cmFuc3Bvc2UobWF0NCwgbWF0NCk7XG4gICAgXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcbiJdfQ==