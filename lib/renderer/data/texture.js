"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _data = _interopRequireDefault(require("../../renderer/data"));
var _array = require("../../utilities/array");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var add = _array.merge; ///
var TextureRendererData = /*#__PURE__*/ function(RendererData) {
    _inherits(TextureRendererData, RendererData);
    var _super = _createSuper(TextureRendererData);
    function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
        _classCallCheck(this, TextureRendererData);
        var _this;
        _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
        _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
        return _this;
    }
    _createClass(TextureRendererData, [
        {
            key: "getVertexTextureCoordinatesData",
            value: function getVertexTextureCoordinatesData() {
                return this.vertexTextureCoordinatesData;
            }
        },
        {
            key: "addVertexTextureCoordinateTuples",
            value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
                var vertexTextureCoordinatesData = (0, _array).flatten(vertexTextureCoordinateTuples);
                add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var vertexTextureCoordinatesData = [], textureRendererData = _data.default.fromNothing(TextureRendererData, vertexTextureCoordinatesData);
                return textureRendererData;
            }
        }
    ]);
    return TextureRendererData;
}(_data.default);
exports.default = TextureRendererData;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYWRkIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZnJvbU5vdGhpbmciLCJ0ZXh0dXJlUmVuZGVyZXJEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVhLEdBQXFCLENBQXJCLEtBQXFCO0FBRWYsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsR0FBSyxDQUFDQSxHQUFHLEdBRnNCLE1BQXVCLE9BRWxDLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVGQyxtQkFBbUIsaUJBQXpCLFFBQVE7Y0FBRkEsbUJBQW1COzhCQUFuQkEsbUJBQW1CO2FBQW5CQSxtQkFBbUIsQ0FDMUJDLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLDRCQUE0Qjs4QkFEaEZKLG1CQUFtQjs7a0NBRTlCQyxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjtjQUUxREMsNEJBQTRCLEdBQUdBLDRCQUE0Qjs7O2lCQUovQ0osbUJBQW1COztZQU90Q0ssR0FBK0IsRUFBL0JBLENBQStCO21CQUEvQkEsUUFBUSxDQUFSQSwrQkFBK0IsR0FBRyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDRCw0QkFBNEI7WUFDMUMsQ0FBQzs7O1lBRURFLEdBQWdDLEVBQWhDQSxDQUFnQzttQkFBaENBLFFBQVEsQ0FBUkEsZ0NBQWdDLENBQUNDLDZCQUE2QixFQUFFLENBQUM7Z0JBQy9ELEdBQUssQ0FBQ0gsNEJBQTRCLE9BaEJQLE1BQXVCLFVBZ0JMRyw2QkFBNkI7Z0JBRTFFUixHQUFHLENBQUMsSUFBSSxDQUFDSyw0QkFBNEIsRUFBRUEsNEJBQTRCO1lBQ3JFLENBQUM7Ozs7WUFFTUksR0FBVyxFQUFYQSxDQUFXO21CQUFsQixRQUFRLENBQURBLFdBQVcsR0FBRyxDQUFDO2dCQUNwQixHQUFLLENBQUNKLDRCQUE0QixHQUFHLENBQUMsQ0FBQyxFQUNqQ0ssbUJBQW1CLEdBekJKLEtBQXFCLFNBeUJERCxXQUFXLENBQUNSLG1CQUFtQixFQUFFSSw0QkFBNEI7Z0JBRXRHLE1BQU0sQ0FBQ0ssbUJBQW1CO1lBQzVCLENBQUM7OztXQXRCa0JULG1CQUFtQjtFQU5mLEtBQXFCO2tCQU16QkEsbUJBQW1CIn0=