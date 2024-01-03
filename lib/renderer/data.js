"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RendererData;
    }
});
var _array = require("../utilities/array");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
var RendererData = /*#__PURE__*/ function() {
    function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
        _class_call_check(this, RendererData);
        this.vertexPositionsData = vertexPositionsData;
        this.vertexNormalsData = vertexNormalsData;
        this.vertexIndexesData = vertexIndexesData;
    }
    _create_class(RendererData, [
        {
            key: "getCount",
            value: function getCount() {
                var vertexIndexesDataLength = this.vertexIndexesData.length, count = vertexIndexesDataLength; ///
                return count;
            }
        },
        {
            key: "getVertexPositionsData",
            value: function getVertexPositionsData() {
                return this.vertexPositionsData;
            }
        },
        {
            key: "getVertexNormalsData",
            value: function getVertexNormalsData() {
                return this.vertexNormalsData;
            }
        },
        {
            key: "getVertexIndexesData",
            value: function getVertexIndexesData() {
                return this.vertexIndexesData;
            }
        },
        {
            key: "addVertexPositions",
            value: function addVertexPositions(vertexPositions) {
                var vertexPositionsData = (0, _array.flatten)(vertexPositions);
                (0, _array.add)(this.vertexPositionsData, vertexPositionsData);
            }
        },
        {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
                var vertexNormalsData = (0, _array.flatten)(vertexNormals);
                (0, _array.add)(this.vertexNormalsData, vertexNormalsData);
            }
        },
        {
            key: "addVertexIndexes",
            value: function addVertexIndexes(vertexIndexes) {
                var vertexIndexesData = vertexIndexes; ///
                (0, _array.add)(this.vertexIndexesData, vertexIndexesData);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(Class) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var vertexPositionsData = [], vertexNormalsData = [], vertexIndexesData = [], rendererData = _construct(Class, [
                    vertexPositionsData,
                    vertexNormalsData,
                    vertexIndexesData
                ].concat(_to_consumable_array(remainingArguments)));
                return rendererData;
            }
        }
    ]);
    return RendererData;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhZGQsIGZsYXR0ZW4gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlbmRlcmVyRGF0YSIsInZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsInZlcnRleEluZGV4ZXNEYXRhIiwiZ2V0Q291bnQiLCJ2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aCIsImxlbmd0aCIsImNvdW50IiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsImdldFZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4SW5kZXhlc0RhdGEiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJmbGF0dGVuIiwiYWRkIiwiYWRkVmVydGV4Tm9ybWFscyIsInZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhJbmRleGVzIiwidmVydGV4SW5kZXhlcyIsImZyb21Ob3RoaW5nIiwiQ2xhc3MiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJyZW5kZXJlckRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FCQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQSxhQUNQQyxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjtnQ0FEbERIO1FBRWpCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBO1FBQzNCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBO1FBQ3pCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBOztrQkFKUkg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ0YsaUJBQWlCLENBQUNHLE1BQU0sRUFDdkRDLFFBQVFGLHlCQUEwQixHQUFHO2dCQUUzQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxtQkFBbUI7WUFDakM7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLGlCQUFpQjtZQUMvQjs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsaUJBQWlCO1lBQy9COzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsZUFBZTtnQkFDaEMsSUFBTVgsc0JBQXNCWSxJQUFBQSxjQUFPLEVBQUNEO2dCQUVwQ0UsSUFBQUEsVUFBRyxFQUFDLElBQUksQ0FBQ2IsbUJBQW1CLEVBQUVBO1lBQ2hDOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYTtnQkFDNUIsSUFBTWQsb0JBQW9CVyxJQUFBQSxjQUFPLEVBQUNHO2dCQUVsQ0YsSUFBQUEsVUFBRyxFQUFDLElBQUksQ0FBQ1osaUJBQWlCLEVBQUVBO1lBQzlCOzs7WUFFQWUsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYTtnQkFDNUIsSUFBTWYsb0JBQW9CZSxlQUFnQixHQUFHO2dCQUU3Q0osSUFBQUEsVUFBRyxFQUFDLElBQUksQ0FBQ1gsaUJBQWlCLEVBQUVBO1lBQzlCOzs7O1lBRU9nQixLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7Z0JBQzdDLElBQU1wQixzQkFBc0IsRUFBRSxFQUN4QkMsb0JBQW9CLEVBQUUsRUFDdEJDLG9CQUFvQixFQUFFLEVBQ3RCbUIsZUFBZSxXQUFJRixPQUFKO29CQUFVbkI7b0JBQXFCQztvQkFBbUJDO2lCQUF5QyxDQUEzRixPQUFxRSxxQkFBR2tCO2dCQUU3RixPQUFPQztZQUNUOzs7V0FuRG1CdEIifQ==