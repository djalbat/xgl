"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextureRendererData;
    }
});
var _data = /*#__PURE__*/ _interopRequireDefault(require("../../renderer/data"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
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
                var vertexTextureCoordinatesData = (0, _array.flatten)(vertexTextureCoordinateTuples);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckRhdGEgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2RhdGFcIjtcblxuaW1wb3J0IHsgbWVyZ2UsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuXG4gICAgdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IGZsYXR0ZW4odmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7IFxuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBbXSxcbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXJEYXRhID0gUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKFRleHR1cmVSZW5kZXJlckRhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlRleHR1cmVSZW5kZXJlckRhdGEiLCJhZGQiLCJtZXJnZSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImdldFZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZmxhdHRlbiIsImZyb21Ob3RoaW5nIiwidGV4dHVyZVJlbmRlcmVyRGF0YSIsIlJlbmRlcmVyRGF0YSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBUVFBLG1CQUFtQjs7O3lEQU5mLHFCQUFxQjtxQkFFZix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBTUMsR0FBRyxHQUFHQyxNQUFLLE1BQUEsQUFBQyxFQUFFLEdBQUc7QUFFUixJQUFBLEFBQU1GLG1CQUFtQixpQkFBekI7OzthQUFNQSxtQkFBbUIsQ0FDMUJHLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLDRCQUE0Qjs7O2tDQUMzRkgsbUJBQW1CLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRTtRQUVqRSxNQUFLQyw0QkFBNEIsR0FBR0EsNEJBQTRCLENBQUM7Ozs7O1lBR25FQyxHQUErQixFQUEvQkEsaUNBQStCO21CQUEvQkEsU0FBQUEsK0JBQStCLEdBQUc7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDRCw0QkFBNEIsQ0FBQzthQUMxQzs7O1lBRURFLEdBQWdDLEVBQWhDQSxrQ0FBZ0M7bUJBQWhDQSxTQUFBQSxnQ0FBZ0MsQ0FBQ0MsNkJBQTZCLEVBQUU7Z0JBQzlELElBQU1ILDRCQUE0QixHQUFHSSxJQUFBQSxNQUFPLFFBQUEsRUFBQ0QsNkJBQTZCLENBQUMsQUFBQztnQkFFNUVSLEdBQUcsQ0FBQyxJQUFJLENBQUNLLDRCQUE0QixFQUFFQSw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3RFOzs7O1lBRU1LLEdBQVcsRUFBWEEsYUFBVzttQkFBbEIsU0FBT0EsV0FBVyxHQUFHO2dCQUNuQixJQUFNTCw0QkFBNEIsR0FBRyxFQUFFLEVBQ2pDTSxtQkFBbUIsR0FBR0MsS0FBWSxRQUFBLENBQUNGLFdBQVcsQ0FBQ1gsbUJBQW1CLEVBQUVNLDRCQUE0QixDQUFDLEFBQUM7Z0JBRXhHLE9BQU9NLG1CQUFtQixDQUFDO2FBQzVCOzs7O0NBQ0YsQ0F2QmdEQyxLQUFZLFFBQUEsQ0F1QjVEIn0=