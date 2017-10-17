'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    ColourElement = require('../../../element/colour');

var initialVertexPositionData = plane.initialVertexPositionData;

var ColourPlane = function (_ColourElement) {
  _inherits(ColourPlane, _ColourElement);

  function ColourPlane() {
    _classCallCheck(this, ColourPlane);

    return _possibleConstructorReturn(this, (ColourPlane.__proto__ || Object.getPrototypeOf(ColourPlane)).apply(this, arguments));
  }

  _createClass(ColourPlane, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return ColourElement.fromPropertiesAndInitialVertexPositionData(ColourPlane, properties, initialVertexPositionData);
    }
  }]);

  return ColourPlane;
}(ColourElement);

module.exports = ColourPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvY29sb3VyLmpzIl0sIm5hbWVzIjpbInBsYW5lIiwicmVxdWlyZSIsIkNvbG91ckVsZW1lbnQiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiQ29sb3VyUGxhbmUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSx5QkFBUixDQUR0Qjs7SUFHUUUseUIsR0FBOEJILEssQ0FBOUJHLHlCOztJQUVGQyxXOzs7Ozs7Ozs7OzttQ0FDa0JDLFUsRUFBWTtBQUFFLGFBQU9ILGNBQWNJLDBDQUFkLENBQXlERixXQUF6RCxFQUFzRUMsVUFBdEUsRUFBa0ZGLHlCQUFsRixDQUFQO0FBQXNIOzs7O0VBRGxJRCxhOztBQUkxQkssT0FBT0MsT0FBUCxHQUFpQkosV0FBakIiLCJmaWxlIjoiY29sb3VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBDb2xvdXJFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC9jb2xvdXInKTtcblxuY29uc3QgeyBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIH0gPSBwbGFuZTtcblxuY2xhc3MgQ29sb3VyUGxhbmUgZXh0ZW5kcyBDb2xvdXJFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENvbG91ckVsZW1lbnQuZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKENvbG91clBsYW5lLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91clBsYW5lO1xuIl19