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
var add = _array.merge; ///
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
                add(this.vertexPositionsData, vertexPositionsData);
            }
        },
        {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
                var vertexNormalsData = (0, _array.flatten)(vertexNormals);
                add(this.vertexNormalsData, vertexNormalsData);
            }
        },
        {
            key: "addVertexIndexes",
            value: function addVertexIndexes(vertexIndexes) {
                var vertexIndexesData = vertexIndexes; ///
                add(this.vertexIndexesData, vertexIndexesData);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVuZGVyZXJEYXRhIiwiYWRkIiwibWVyZ2UiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldENvdW50IiwidmVydGV4SW5kZXhlc0RhdGFMZW5ndGgiLCJsZW5ndGgiLCJjb3VudCIsImdldFZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwiZmxhdHRlbiIsImFkZFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4SW5kZXhlcyIsInZlcnRleEluZGV4ZXMiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVuZGVyZXJEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBTUMsTUFBTUMsWUFBSyxFQUFHLEdBQUc7QUFFUixJQUFBLEFBQU1GLDZCQUFOO2FBQU1BLGFBQ1BHLG1CQUFtQixFQUFFQyxpQkFBaUIsRUFBRUMsaUJBQWlCO2dDQURsREw7UUFFakIsSUFBSSxDQUFDRyxtQkFBbUIsR0FBR0E7UUFDM0IsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7UUFDekIsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0E7O2tCQUpSTDs7WUFPbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywwQkFBMEIsSUFBSSxDQUFDRixpQkFBaUIsQ0FBQ0csTUFBTSxFQUN2REMsUUFBUUYseUJBQTBCLEdBQUc7Z0JBRTNDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNQLG1CQUFtQjtZQUNqQzs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ1AsaUJBQWlCO1lBQy9COzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDUCxpQkFBaUI7WUFDL0I7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxlQUFlO2dCQUNoQyxJQUFNWCxzQkFBc0JZLElBQUFBLGNBQU8sRUFBQ0Q7Z0JBRXBDYixJQUFJLElBQUksQ0FBQ0UsbUJBQW1CLEVBQUVBO1lBQ2hDOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsYUFBYTtnQkFDNUIsSUFBTWIsb0JBQW9CVyxJQUFBQSxjQUFPLEVBQUNFO2dCQUVsQ2hCLElBQUksSUFBSSxDQUFDRyxpQkFBaUIsRUFBRUE7WUFDOUI7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxhQUFhO2dCQUM1QixJQUFNZCxvQkFBb0JjLGVBQWdCLEdBQUc7Z0JBRTdDbEIsSUFBSSxJQUFJLENBQUNJLGlCQUFpQixFQUFFQTtZQUM5Qjs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZQyxLQUFLO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCO2dCQUFEO2dCQUM1QyxJQUFNbkIsc0JBQXNCLEVBQUUsRUFDeEJDLG9CQUFvQixFQUFFLEVBQ3RCQyxvQkFBb0IsRUFBRSxFQUN0QmtCLGVBQWUsV0FBSUYsT0FBSjtvQkFBVWxCO29CQUFxQkM7b0JBQW1CQztpQkFBeUMsQ0FBM0YsT0FBcUUscUJBQUdpQjtnQkFFN0YsT0FBT0M7WUFDVDs7O1dBbkRtQnZCIn0=