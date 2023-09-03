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
var _data = /*#__PURE__*/ _interop_require_default(require("../../renderer/data"));
var _array = require("../../utilities/array");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var add = _array.merge; ///
var ColourRendererData = /*#__PURE__*/ function(RendererData) {
    _inherits(ColourRendererData, RendererData);
    var _super = _create_super(ColourRendererData);
    function ColourRendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
        _class_call_check(this, ColourRendererData);
        var _this;
        _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
        _this.vertexColoursData = vertexColoursData;
        return _this;
    }
    _create_class(ColourRendererData, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci9kYXRhL2NvbG91ci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvZGF0YVwiO1xuXG5pbXBvcnQgeyBtZXJnZSwgZmxhdHRlbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSkge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG5cbiAgICB0aGlzLnZlcnRleENvbG91cnNEYXRhID0gdmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleENvbG91cnNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBmbGF0dGVuKHZlcnRleENvbG91cnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4Q29sb3Vyc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHsgXG4gICAgY29uc3QgdmVydGV4Q29sb3Vyc0RhdGEgPSBbXSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbG91clJlbmRlcmVyRGF0YSIsImFkZCIsIm1lcmdlIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJ2ZXJ0ZXhDb2xvdXJzRGF0YSIsImdldFZlcnRleENvbG91cnNEYXRhIiwiYWRkVmVydGV4Q29sb3VycyIsInZlcnRleENvbG91cnMiLCJmbGF0dGVuIiwiZnJvbU5vdGhpbmciLCJjb2xvdXJSZW5kZXJlckRhdGEiLCJSZW5kZXJlckRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzJEQU5JO3FCQUVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1DLE1BQU1DLFlBQUssRUFBRyxHQUFHO0FBRVIsSUFBQSxBQUFNRixtQ0FBTjtjQUFNQTsrQkFBQUE7YUFBQUEsbUJBQ1BHLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjtnQ0FEckVOOztrQ0FFWEcscUJBQXFCQyxtQkFBbUJDO1FBRTlDLE1BQUtDLGlCQUFpQixHQUFHQTs7O2tCQUpSTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsaUJBQWlCO1lBQy9COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYTtnQkFDNUIsSUFBTUgsb0JBQW9CSSxJQUFBQSxjQUFPLEVBQUNEO2dCQUVsQ1IsSUFBSSxJQUFJLENBQUNLLGlCQUFpQixFQUFFQTtZQUM5Qjs7OztZQUVPSyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNTCxvQkFBb0IsRUFBRSxFQUN0Qk0scUJBQXFCQyxhQUFZLENBQUNGLFdBQVcsQ0FuQmxDWCxvQkFtQnVETTtnQkFFeEUsT0FBT007WUFDVDs7O1dBdEJtQlo7RUFBMkJhLGFBQVkifQ==