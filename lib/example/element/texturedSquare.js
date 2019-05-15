'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var TexturedCanvasElement = jiggle.TexturedCanvasElement;


var coordinates = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0]],
    indexes = [[0, 1, 2], [2, 3, 0]],
    defaultImageName = "gravel.jpg",
    defaultTextureCoordinates = [[[0, 0], [1, 0], [1, 1]], [[1, 1], [0, 1], [0, 0]]];

var TexturedSquare = function (_TexturedCanvasElemen) {
  _inherits(TexturedSquare, _TexturedCanvasElemen);

  function TexturedSquare() {
    _classCallCheck(this, TexturedSquare);

    return _possibleConstructorReturn(this, (TexturedSquare.__proto__ || Object.getPrototypeOf(TexturedSquare)).apply(this, arguments));
  }

  _createClass(TexturedSquare, null, [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$imageName = properties.imageName,
          imageName = _properties$imageName === undefined ? defaultImageName : _properties$imageName,
          _properties$textureCo = properties.textureCoordinates,
          textureCoordinates = _properties$textureCo === undefined ? defaultTextureCoordinates : _properties$textureCo,
          texturedSquare = TexturedCanvasElement.fromProperties(TexturedSquare, properties, coordinates, indexes, imageName, textureCoordinates);


      return texturedSquare;
    }
  }]);

  return TexturedSquare;
}(TexturedCanvasElement);

module.exports = TexturedSquare;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvdGV4dHVyZWRTcXVhcmUuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImRlZmF1bHRJbWFnZU5hbWUiLCJkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRTcXVhcmUiLCJwcm9wZXJ0aWVzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVzIiwidGV4dHVyZWRTcXVhcmUiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxnQkFBUixDQUFmOztJQUVRQyxxQixHQUEwQkYsTSxDQUExQkUscUI7OztBQUVSLElBQU1DLGNBQWMsQ0FFWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUZZLEVBR1osQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FIWSxFQUlaLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBSlksRUFLWixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUxZLENBQXBCO0FBQUEsSUFRTUMsVUFBVSxDQUVSLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBRlEsRUFHUixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUhRLENBUmhCO0FBQUEsSUFjTUMsbUJBQW1CLFlBZHpCO0FBQUEsSUFlTUMsNEJBQTRCLENBRTFCLENBQUUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFGLEVBQVksQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUFaLEVBQXNCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBdEIsQ0FGMEIsRUFHMUIsQ0FBRSxDQUFFLENBQUYsRUFBSyxDQUFMLENBQUYsRUFBWSxDQUFFLENBQUYsRUFBSyxDQUFMLENBQVosRUFBc0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxDQUF0QixDQUgwQixDQWZsQzs7SUFzQk1DLGM7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQUEsa0NBQ3lEQSxVQUR6RCxDQUN4QkMsU0FEd0I7QUFBQSxVQUN4QkEsU0FEd0IseUNBQ1pKLGdCQURZO0FBQUEsa0NBQ3lERyxVQUR6RCxDQUNNRSxrQkFETjtBQUFBLFVBQ01BLGtCQUROLHlDQUMyQkoseUJBRDNCO0FBQUEsVUFFMUJLLGNBRjBCLEdBRVRULHNCQUFzQlUsY0FBdEIsQ0FBcUNMLGNBQXJDLEVBQXFEQyxVQUFyRCxFQUFpRUwsV0FBakUsRUFBOEVDLE9BQTlFLEVBQXVGSyxTQUF2RixFQUFrR0Msa0JBQWxHLENBRlM7OztBQUloQyxhQUFPQyxjQUFQO0FBQ0Q7Ozs7RUFOMEJULHFCOztBQVM3QlcsT0FBT0MsT0FBUCxHQUFpQlAsY0FBakIiLCJmaWxlIjoidGV4dHVyZWRTcXVhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGppZ2dsZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7XG5cbmNvbnN0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gPSBqaWdnbGU7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgMCwgMCwgMCBdLFxuICAgICAgICBbIDEsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAxLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgaW5kZXhlcyA9IFtcblxuICAgICAgICBbIDAsIDEsIDIgXSxcbiAgICAgICAgWyAyLCAzLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBkZWZhdWx0SW1hZ2VOYW1lID0gXCJncmF2ZWwuanBnXCIsXG4gICAgICBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgWyAwLCAwIF0sIFsgMSwgMCBdLCBbIDEsIDEgXSBdLFxuICAgICAgICBbIFsgMSwgMSBdLCBbIDAsIDEgXSwgWyAwLCAwIF0gXSxcblxuICAgICAgXTtcblxuY2xhc3MgVGV4dHVyZWRTcXVhcmUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFNxdWFyZSA9IFRleHR1cmVkQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhUZXh0dXJlZFNxdWFyZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFNxdWFyZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkU3F1YXJlO1xuIl19