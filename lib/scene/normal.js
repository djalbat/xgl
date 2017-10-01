'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mat4 = require('gl-mat4'); ///

var Normal = function () {
  function Normal(matrix) {
    _classCallCheck(this, Normal);

    this.matrix = matrix;
  }

  _createClass(Normal, [{
    key: 'getMatrix',
    value: function getMatrix() {
      return this.matrix;
    }
  }], [{
    key: 'fromRotation',
    value: function fromRotation(rotation) {
      var matrix = mat4.create(),
          rotationMatrix = rotation.getMatrix();

      mat4.invert(matrix, rotationMatrix);
      mat4.transpose(matrix, matrix);

      var normal = new Normal(matrix);

      return normal;
    }
  }]);

  return Normal;
}();

module.exports = Normal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zY2VuZS9ub3JtYWwuanMiXSwibmFtZXMiOlsibWF0NCIsInJlcXVpcmUiLCJOb3JtYWwiLCJtYXRyaXgiLCJyb3RhdGlvbiIsImNyZWF0ZSIsInJvdGF0aW9uTWF0cml4IiwiZ2V0TWF0cml4IiwiaW52ZXJ0IiwidHJhbnNwb3NlIiwibm9ybWFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiLEMsQ0FBa0M7O0lBRTVCQyxNO0FBQ0osa0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O2lDQUVtQkMsUSxFQUFVO0FBQzVCLFVBQU1ELFNBQVNILEtBQUtLLE1BQUwsRUFBZjtBQUFBLFVBQ01DLGlCQUFpQkYsU0FBU0csU0FBVCxFQUR2Qjs7QUFHQVAsV0FBS1EsTUFBTCxDQUFZTCxNQUFaLEVBQW9CRyxjQUFwQjtBQUNBTixXQUFLUyxTQUFMLENBQWVOLE1BQWYsRUFBdUJBLE1BQXZCOztBQUVBLFVBQU1PLFNBQVMsSUFBSVIsTUFBSixDQUFXQyxNQUFYLENBQWY7O0FBRUEsYUFBT08sTUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlYsTUFBakIiLCJmaWxlIjoibm9ybWFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBtYXQ0ID0gcmVxdWlyZSgnZ2wtbWF0NCcpOyAgLy8vXG5cbmNsYXNzIE5vcm1hbCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG4gIFxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvdGF0aW9uKHJvdGF0aW9uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0NC5jcmVhdGUoKSxcbiAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uLmdldE1hdHJpeCgpO1xuXG4gICAgbWF0NC5pbnZlcnQobWF0cml4LCByb3RhdGlvbk1hdHJpeCk7ICAgIFxuICAgIG1hdDQudHJhbnNwb3NlKG1hdHJpeCwgbWF0cml4KTtcbiAgICBcbiAgICBjb25zdCBub3JtYWwgPSBuZXcgTm9ybWFsKG1hdHJpeCk7XG4gICAgXG4gICAgcmV0dXJuIG5vcm1hbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vcm1hbDtcbiJdfQ==