'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = require('./line'),
    vec3 = require('./maths/vec3');

var subtract = vec3.subtract;

var LineInXYPlane = function (_Line) {
      _inherits(LineInXYPlane, _Line);

      function LineInXYPlane() {
            _classCallCheck(this, LineInXYPlane);

            return _possibleConstructorReturn(this, (LineInXYPlane.__proto__ || Object.getPrototypeOf(LineInXYPlane)).apply(this, arguments));
      }

      _createClass(LineInXYPlane, null, [{
            key: 'fromVertices',
            value: function fromVertices(startVertex, endVertex) {
                  var position = startVertex.slice(),
                      direction = subtract(endVertex, startVertex),
                      lineInXYPlane = new LineInXYPlane(position, direction);

                  return lineInXYPlane;
            }
      }]);

      return LineInXYPlane;
}(Line);

module.exports = LineInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9saW5lSW5YWVBsYW5lLmpzIl0sIm5hbWVzIjpbIkxpbmUiLCJyZXF1aXJlIiwidmVjMyIsInN1YnRyYWN0IiwiTGluZUluWFlQbGFuZSIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwicG9zaXRpb24iLCJzbGljZSIsImRpcmVjdGlvbiIsImxpbmVJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxjQUFSLENBRGI7O0lBR1FFLFEsR0FBYUQsSSxDQUFiQyxROztJQUVGQyxhOzs7Ozs7Ozs7Ozt5Q0FDZ0JDLFcsRUFBYUMsUyxFQUFXO0FBQzFDLHNCQUFNQyxXQUFXRixZQUFZRyxLQUFaLEVBQWpCO0FBQUEsc0JBQ01DLFlBQVlOLFNBQVNHLFNBQVQsRUFBb0JELFdBQXBCLENBRGxCO0FBQUEsc0JBRU1LLGdCQUFnQixJQUFJTixhQUFKLENBQWtCRyxRQUFsQixFQUE0QkUsU0FBNUIsQ0FGdEI7O0FBSUEseUJBQU9DLGFBQVA7QUFDRDs7OztFQVB5QlYsSTs7QUFVNUJXLE9BQU9DLE9BQVAsR0FBaUJSLGFBQWpCIiwiZmlsZSI6ImxpbmVJblhZUGxhbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IExpbmUgPSByZXF1aXJlKCcuL2xpbmUnKSxcbiAgICAgIHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKTtcblxuY29uc3QgeyBzdWJ0cmFjdCB9ID0gdmVjMztcblxuY2xhc3MgTGluZUluWFlQbGFuZSBleHRlbmRzIExpbmUge1xuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHN0YXJ0VmVydGV4LnNsaWNlKCksXG4gICAgICAgICAgZGlyZWN0aW9uID0gc3VidHJhY3QoZW5kVmVydGV4LCBzdGFydFZlcnRleCksXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IG5ldyBMaW5lSW5YWVBsYW5lKHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lSW5YWVBsYW5lO1xuIl19