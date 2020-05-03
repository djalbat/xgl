"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _buffers = _interopRequireDefault(require("../../renderer/buffers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var textureCoordinateComponents = 2;

var TextureRendererBuffers = /*#__PURE__*/function (_RendererBuffers) {
  _inherits(TextureRendererBuffers, _RendererBuffers);

  var _super = _createSuper(TextureRendererBuffers);

  function TextureRendererBuffers(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
    var _this;

    _classCallCheck(this, TextureRendererBuffers);

    _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
    _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
    return _this;
  }

  _createClass(TextureRendererBuffers, [{
    key: "createTextureCoordinatesBuffer",
    value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
      this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
    }
  }, {
    key: "bindTextureCoordinatesBuffer",
    value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
      canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
    }
  }, {
    key: "createBuffers",
    value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
      _get(_getPrototypeOf(TextureRendererBuffers.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);

      this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
    }
  }, {
    key: "bindBuffers",
    value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
      _get(_getPrototypeOf(TextureRendererBuffers.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);

      this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
    }
  }], [{
    key: "fromNothing",
    value: function fromNothing() {
      var textureCoordinatesBuffer = null,
          ///
      textureRendererBuffers = _buffers["default"].fromNothing(TextureRendererBuffers, textureCoordinatesBuffer);

      return textureRendererBuffers;
    }
  }]);

  return TextureRendererBuffers;
}(_buffers["default"]);

exports["default"] = TextureRendererBuffers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmUuanMiXSwibmFtZXMiOlsidGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzIiwiVGV4dHVyZVJlbmRlcmVyQnVmZmVycyIsInZlcnRleFBvc2l0aW9uc0J1ZmZlciIsInZlcnRleE5vcm1hbHNCdWZmZXIiLCJ2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciIsInRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsInRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJjYW52YXMiLCJjcmVhdGVCdWZmZXIiLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZEJ1ZmZlciIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlciIsInRleHR1cmVSZW5kZXJlckJ1ZmZlcnMiLCJSZW5kZXJlckJ1ZmZlcnMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsMkJBQTJCLEdBQUcsQ0FBcEM7O0lBRXFCQyxzQjs7Ozs7QUFDbkIsa0NBQVlDLHFCQUFaLEVBQW1DQyxtQkFBbkMsRUFBd0RDLDBCQUF4RCxFQUFvRkMsd0JBQXBGLEVBQThHO0FBQUE7O0FBQUE7O0FBQzVHLDhCQUFNSCxxQkFBTixFQUE2QkMsbUJBQTdCLEVBQWtEQywwQkFBbEQ7QUFFQSxVQUFLQyx3QkFBTCxHQUFnQ0Esd0JBQWhDO0FBSDRHO0FBSTdHOzs7O21EQUU4QkMsc0IsRUFBd0JDLE0sRUFBUTtBQUM3RCxXQUFLRix3QkFBTCxHQUFnQ0UsTUFBTSxDQUFDQyxZQUFQLENBQW9CRixzQkFBcEIsQ0FBaEM7QUFDRDs7O2lEQUU0Qkcsa0MsRUFBb0NGLE0sRUFBUTtBQUN2RUEsTUFBQUEsTUFBTSxDQUFDRyxVQUFQLENBQWtCLEtBQUtMLHdCQUF2QixFQUFpREksa0NBQWpELEVBQXFGVCwyQkFBckY7QUFDRDs7O2tDQUVhVyxtQixFQUFxQkMsaUIsRUFBbUJDLGlCLEVBQW1CUCxzQixFQUF3QkMsTSxFQUFRO0FBQ3ZHLGdHQUFvQkksbUJBQXBCLEVBQXlDQyxpQkFBekMsRUFBNERDLGlCQUE1RCxFQUErRU4sTUFBL0U7O0FBRUEsV0FBS08sOEJBQUwsQ0FBb0NSLHNCQUFwQyxFQUE0REMsTUFBNUQ7QUFDRDs7O2dDQUVXUSw2QixFQUErQkMsK0IsRUFBaUNQLGtDLEVBQW9DRixNLEVBQVE7QUFDdEgsOEZBQWtCUSw2QkFBbEIsRUFBaURDLCtCQUFqRCxFQUFrRlQsTUFBbEY7O0FBRUEsV0FBS1UsNEJBQUwsQ0FBa0NSLGtDQUFsQyxFQUFzRUYsTUFBdEU7QUFDRDs7O2tDQUVvQjtBQUNuQixVQUFNRix3QkFBd0IsR0FBRyxJQUFqQztBQUFBLFVBQXdDO0FBQ2xDYSxNQUFBQSxzQkFBc0IsR0FBR0Msb0JBQWdCQyxXQUFoQixDQUE0Qm5CLHNCQUE1QixFQUFvREksd0JBQXBELENBRC9COztBQUdBLGFBQU9hLHNCQUFQO0FBQ0Q7Ozs7RUFoQ2lEQyxtQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi8uLi9yZW5kZXJlci9idWZmZXJzXCI7XG5cbmNvbnN0IHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyA9IDI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgZXh0ZW5kcyBSZW5kZXJlckJ1ZmZlcnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNCdWZmZXIsIHZlcnRleE5vcm1hbHNCdWZmZXIsIHZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyO1xuICB9XG5cbiAgY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gY2FudmFzLmNyZWF0ZUJ1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIGJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgY2FudmFzLmJpbmRCdWZmZXIodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQ29tcG9uZW50cyk7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIGNhbnZhcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIHN1cGVyLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuXG4gICAgdGhpcy5iaW5kVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyQnVmZmVycywgdGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyQnVmZmVycztcbiAgfVxufVxuIl19