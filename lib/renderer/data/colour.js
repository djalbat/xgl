"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourRendererData;
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
var ColourRendererData = /*#__PURE__*/ function(RendererData) {
    _inherits(ColourRendererData, RendererData);
    var _super = _createSuper(ColourRendererData);
    function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
        _classCallCheck(this, ColourRendererData);
        var _this;
        _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
        _this.vertexColoursData = vertexColoursData;
        return _this;
    }
    _createClass(ColourRendererData, [
        {
            key: "getVertexColoursData",
            value: function getVertexColoursData() {
                return this.vertexColoursData;
            }
        },
        {
            key: "addVertexColours",
            value: function addVertexColours(vertexColours) {
                var vertexColoursData = (0, _array.flatten)(vertexColours);
                add(this.vertexColoursData, vertexColoursData);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData, vertexColoursData);
                return colourRendererData;
            }
        }
    ]);
    return ColourRendererData;
}(_data.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb2xvdXJSZW5kZXJlckRhdGEiLCJhZGQiLCJtZXJnZSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImFkZFZlcnRleENvbG91cnMiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZmxhdHRlbiIsImZyb21Ob3RoaW5nIiwiY29sb3VyUmVuZGVyZXJEYXRhIiwiUmVuZGVyZXJEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsa0JBQWtCOzs7eURBTmQscUJBQXFCO3FCQUVmLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFNQyxHQUFHLEdBQUdDLE1BQUssTUFBQSxBQUFDLEVBQUUsR0FBRztBQUVSLElBQUEsQUFBTUYsa0JBQWtCLGlCQUF4Qjs7O2FBQU1BLGtCQUFrQixDQUN6QkcsbUJBQW1CLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCOzs7a0NBQ2hGSCxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQixFQUFFO1FBRWpFLE1BQUtDLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzs7Ozs7WUFHN0NDLEdBQW9CLEVBQXBCQSxzQkFBb0I7bUJBQXBCQSxTQUFBQSxvQkFBb0IsR0FBRztnQkFDckIsT0FBTyxJQUFJLENBQUNELGlCQUFpQixDQUFDO2FBQy9COzs7WUFFREUsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxhQUFhLEVBQUU7Z0JBQzlCLElBQU1ILGlCQUFpQixHQUFHSSxJQUFBQSxNQUFPLFFBQUEsRUFBQ0QsYUFBYSxDQUFDLEFBQUM7Z0JBRWpEUixHQUFHLENBQUMsSUFBSSxDQUFDSyxpQkFBaUIsRUFBRUEsaUJBQWlCLENBQUMsQ0FBQzthQUNoRDs7OztZQUVNSyxHQUFXLEVBQVhBLGFBQVc7bUJBQWxCLFNBQU9BLFdBQVcsR0FBRztnQkFDbkIsSUFBTUwsaUJBQWlCLEdBQUcsRUFBRSxFQUN0Qk0sa0JBQWtCLEdBQUdDLEtBQVksUUFBQSxDQUFDRixXQUFXLENBQUNYLGtCQUFrQixFQUFFTSxpQkFBaUIsQ0FBQyxBQUFDO2dCQUUzRixPQUFPTSxrQkFBa0IsQ0FBQzthQUMzQjs7OztDQUNGLENBdkIrQ0MsS0FBWSxRQUFBLENBdUIzRCJ9