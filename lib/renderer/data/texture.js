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
var add = _array.merge; ///
var TextureRendererData = /*#__PURE__*/ function(RendererData) {
    _inherits(TextureRendererData, RendererData);
    function TextureRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
        _classCallCheck(this, TextureRendererData);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TextureRendererData).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL3RleHR1cmUuanMiXSwibmFtZXMiOlsiUmVuZGVyZXJEYXRhIiwibWVyZ2UiLCJmbGF0dGVuIiwiYWRkIiwiVGV4dHVyZVJlbmRlcmVyRGF0YSIsImNvbnN0cnVjdG9yIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhIiwiZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJmcm9tTm90aGluZyIsInRleHR1cmVSZW5kZXJlckRhdGEiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWEsR0FBcUIsQ0FBckIsS0FBcUI7QUFFZixHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRELEdBQUssQ0FBQyxHQUFHLEdBRnNCLE1BQXVCLE9BRWxDLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVGLG1CQUFtQixpQkFBekIsUUFBUTtjQUFGLG1CQUFtQjthQUFuQixtQkFBbUIsQ0FDMUIsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsNEJBQTRCOzhCQURoRixtQkFBbUI7O2lFQUFuQixtQkFBbUIsYUFFOUIsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCO2NBRTFELDRCQUE0QixHQUFHLDRCQUE0Qjs7O2lCQUovQyxtQkFBbUI7O1lBT3RDLEdBQStCLEdBQS9CLCtCQUErQjttQkFBL0IsUUFBUSxDQUFSLCtCQUErQixHQUFHLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCO1lBQzFDLENBQUM7OztZQUVELEdBQWdDLEdBQWhDLGdDQUFnQzttQkFBaEMsUUFBUSxDQUFSLGdDQUFnQyxDQUFDLDZCQUE2QixFQUFFLENBQUM7Z0JBQy9ELEdBQUssQ0FBQyw0QkFBNEIsT0FoQlAsTUFBdUIsVUFnQkwsNkJBQTZCO2dCQUUxRSxHQUFHLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLDRCQUE0QjtZQUNyRSxDQUFDOzs7O1lBRU0sR0FBVyxHQUFYLFdBQVc7bUJBQWxCLFFBQVEsQ0FBRCxXQUFXLEdBQUcsQ0FBQztnQkFDcEIsR0FBSyxDQUFDLDRCQUE0QixHQUFHLENBQUMsQ0FBQyxFQUNqQyxtQkFBbUIsR0F6QkosS0FBcUIsU0F5QkQsV0FBVyxDQUFDLG1CQUFtQixFQUFFLDRCQUE0QjtnQkFFdEcsTUFBTSxDQUFDLG1CQUFtQjtZQUM1QixDQUFDOzs7V0F0QmtCLG1CQUFtQjtFQU5mLEtBQXFCO2tCQU16QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyRGF0YSBleHRlbmRzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoVGV4dHVyZVJlbmRlcmVyRGF0YSwgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVSZW5kZXJlckRhdGE7XG4gIH1cbn1cbiJdfQ==