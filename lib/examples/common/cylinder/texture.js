'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cylinder = require('../cylinder'),
    TextureElement = require('../../../element/texture');

var initialVertexPositionData = cylinder.initialVertexPositionData;

var TextureCylinder = function (_TextureElement) {
  _inherits(TextureCylinder, _TextureElement);

  function TextureCylinder() {
    _classCallCheck(this, TextureCylinder);

    return _possibleConstructorReturn(this, (TextureCylinder.__proto__ || Object.getPrototypeOf(TextureCylinder)).apply(this, arguments));
  }

  _createClass(TextureCylinder, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return TextureElement.fromPropertiesAndInitialVertexPositionData(TextureCylinder, properties, initialVertexPositionData);
    }
  }]);

  return TextureCylinder;
}(TextureElement);

module.exports = TextureCylinder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb21tb24vY3lsaW5kZXIvdGV4dHVyZS5qcyJdLCJuYW1lcyI6WyJjeWxpbmRlciIsInJlcXVpcmUiLCJUZXh0dXJlRWxlbWVudCIsImluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEiLCJUZXh0dXJlQ3lsaW5kZXIiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXNBbmRJbml0aWFsVmVydGV4UG9zaXRpb25EYXRhIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXQyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FEdkI7O0lBR1FFLHlCLEdBQThCSCxRLENBQTlCRyx5Qjs7SUFFRkMsZTs7Ozs7Ozs7Ozs7bUNBQ2tCQyxVLEVBQVk7QUFBRSxhQUFPSCxlQUFlSSwwQ0FBZixDQUEwREYsZUFBMUQsRUFBMkVDLFVBQTNFLEVBQXVGRix5QkFBdkYsQ0FBUDtBQUEySDs7OztFQURuSUQsYzs7QUFJOUJLLE9BQU9DLE9BQVAsR0FBaUJKLGVBQWpCIiwiZmlsZSI6InRleHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN5bGluZGVyID0gcmVxdWlyZSgnLi4vY3lsaW5kZXInKSxcbiAgICAgIFRleHR1cmVFbGVtZW50ID0gcmVxdWlyZSgnLi4vLi4vLi4vZWxlbWVudC90ZXh0dXJlJyk7XG5cbmNvbnN0IHsgaW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YSB9ID0gY3lsaW5kZXI7XG5cbmNsYXNzIFRleHR1cmVDeWxpbmRlciBleHRlbmRzIFRleHR1cmVFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFRleHR1cmVFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kSW5pdGlhbFZlcnRleFBvc2l0aW9uRGF0YShUZXh0dXJlQ3lsaW5kZXIsIHByb3BlcnRpZXMsIGluaXRpYWxWZXJ0ZXhQb3NpdGlvbkRhdGEpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZUN5bGluZGVyO1xuIl19