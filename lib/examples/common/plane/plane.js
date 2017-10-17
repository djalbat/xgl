'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var plane = require('../plane'),
    TextureElement = require('../../../element/texture');

var initialVertexPositionData = plane.initialVertexPositionData;

var TexturePlane = function (_TextureElement) {
  _inherits(TexturePlane, _TextureElement);

  function TexturePlane() {
    _classCallCheck(this, TexturePlane);

    return _possibleConstructorReturn(this, (TexturePlane.__proto__ || Object.getPrototypeOf(TexturePlane)).apply(this, arguments));
  }

  _createClass(TexturePlane, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TextureElement.fromPropertiesAndInitialVertexPositionData(TexturePlane, properties, initialVertexPositionData);
    }
  }]);

  return TexturePlane;
}(TextureElement);

module.exports = TexturePlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vcGxhbmUvcGxhbmUuanMiXSwibmFtZXMiOlsicGxhbmUiLCJyZXF1aXJlIiwiVGV4dHVyZUVsZW1lbnQiLCJpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwiVGV4dHVyZVBsYW5lIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7O0lBR1FFLHlCLEdBQThCSCxLLENBQTlCRyx5Qjs7SUFFRkMsWTs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBRSxhQUFPSCxlQUFlSSwwQ0FBZixDQUEwREYsWUFBMUQsRUFBd0VDLFVBQXhFLEVBQW9GRix5QkFBcEYsQ0FBUDtBQUF3SDs7OztFQURuSUQsYzs7QUFJM0JLLE9BQU9DLE9BQVAsR0FBaUJKLFlBQWpCIiwiZmlsZSI6InBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwbGFuZSA9IHJlcXVpcmUoJy4uL3BsYW5lJyksXG4gICAgICBUZXh0dXJlRWxlbWVudCA9IHJlcXVpcmUoJy4uLy4uLy4uL2VsZW1lbnQvdGV4dHVyZScpO1xuXG5jb25zdCB7IGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEgfSA9IHBsYW5lO1xuXG5jbGFzcyBUZXh0dXJlUGxhbmUgZXh0ZW5kcyBUZXh0dXJlRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBUZXh0dXJlRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZEluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEoVGV4dHVyZVBsYW5lLCBwcm9wZXJ0aWVzLCBpbml0aWFsVmVydGV4UG9zaXRpb25EYXRhKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVQbGFuZTtcbiJdfQ==