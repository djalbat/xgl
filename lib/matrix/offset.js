'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Matrix = require('../matrix'),
    matrixUtilities = require('../utilities/matrix');

var identity4 = matrixUtilities.identity4,
    translate4 = matrixUtilities.translate4;

var OffsetMatrix = function (_Matrix) {
  _inherits(OffsetMatrix, _Matrix);

  function OffsetMatrix() {
    _classCallCheck(this, OffsetMatrix);

    return _possibleConstructorReturn(this, (OffsetMatrix.__proto__ || Object.getPrototypeOf(OffsetMatrix)).apply(this, arguments));
  }

  _createClass(OffsetMatrix, null, [{
    key: 'fromOffset',
    value: function fromOffset(offset) {
      var matrix = identity4();

      matrix = translate4(matrix, offset);

      var offsetMatrix = new OffsetMatrix(matrix);

      return offsetMatrix;
    }
  }]);

  return OffsetMatrix;
}(Matrix);

module.exports = OffsetMatrix;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9tYXRyaXgvb2Zmc2V0LmpzIl0sIm5hbWVzIjpbIk1hdHJpeCIsInJlcXVpcmUiLCJtYXRyaXhVdGlsaXRpZXMiLCJpZGVudGl0eTQiLCJ0cmFuc2xhdGU0IiwiT2Zmc2V0TWF0cml4Iiwib2Zmc2V0IiwibWF0cml4Iiwib2Zmc2V0TWF0cml4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLGtCQUFrQkQsUUFBUSxxQkFBUixDQUR4Qjs7SUFHUUUsUyxHQUEwQkQsZSxDQUExQkMsUztJQUFXQyxVLEdBQWVGLGUsQ0FBZkUsVTs7SUFFYkMsWTs7Ozs7Ozs7Ozs7K0JBQ2NDLE0sRUFBUTtBQUN4QixVQUFJQyxTQUFTSixXQUFiOztBQUVBSSxlQUFTSCxXQUFXRyxNQUFYLEVBQW1CRCxNQUFuQixDQUFUOztBQUVBLFVBQU1FLGVBQWUsSUFBSUgsWUFBSixDQUFpQkUsTUFBakIsQ0FBckI7O0FBRUEsYUFBT0MsWUFBUDtBQUNEOzs7O0VBVHdCUixNOztBQVkzQlMsT0FBT0MsT0FBUCxHQUFpQkwsWUFBakIiLCJmaWxlIjoib2Zmc2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBNYXRyaXggPSByZXF1aXJlKCcuLi9tYXRyaXgnKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyBpZGVudGl0eTQsIHRyYW5zbGF0ZTQgfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY2xhc3MgT2Zmc2V0TWF0cml4IGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGZyb21PZmZzZXQob2Zmc2V0KSB7XG4gICAgbGV0IG1hdHJpeCA9IGlkZW50aXR5NCgpO1xuXG4gICAgbWF0cml4ID0gdHJhbnNsYXRlNChtYXRyaXgsIG9mZnNldCk7XG5cbiAgICBjb25zdCBvZmZzZXRNYXRyaXggPSBuZXcgT2Zmc2V0TWF0cml4KG1hdHJpeCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0TWF0cml4O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0TWF0cml4O1xuIl19