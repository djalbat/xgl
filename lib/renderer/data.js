"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var add = _array.merge; ///
var RendererData = /*#__PURE__*/ function() {
    function RendererData(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
        _classCallCheck(this, RendererData);
        this.vertexPositionsData = vertexPositionsData;
        this.vertexNormalsData = vertexNormalsData;
        this.vertexIndexesData = vertexIndexesData;
    }
    _createClass(RendererData, [
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
                var vertexPositionsData = (0, _array).flatten(vertexPositions);
                add(this.vertexPositionsData, vertexPositionsData);
            }
        },
        {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
                var vertexNormalsData = (0, _array).flatten(vertexNormals);
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
                ].concat(_toConsumableArray(remainingArguments)));
                return rendererData;
            }
        }
    ]);
    return RendererData;
}();
exports.default = RendererData;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYWRkIiwibWVyZ2UiLCJSZW5kZXJlckRhdGEiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwidmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldENvdW50IiwidmVydGV4SW5kZXhlc0RhdGFMZW5ndGgiLCJsZW5ndGgiLCJjb3VudCIsImdldFZlcnRleFBvc2l0aW9uc0RhdGEiLCJnZXRWZXJ0ZXhOb3JtYWxzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwiYWRkVmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwiZmxhdHRlbiIsImFkZFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4SW5kZXhlcyIsInZlcnRleEluZGV4ZXMiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVuZGVyZXJEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsR0FBSyxDQUFDQSxHQUFHLEdBQUdDLE1BQUssT0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFRkMsWUFBWSxpQkFBbEIsUUFBUTthQUFGQSxZQUFZLENBQ25CQyxtQkFBbUIsRUFBRUMsaUJBQWlCLEVBQUVDLGlCQUFpQjs7UUFDbkUsSUFBSSxDQUFDRixtQkFBbUIsR0FBR0EsbUJBQW1CO1FBQzlDLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUdBLGlCQUFpQjtRQUMxQyxJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7Ozs7WUFHNUNDLEdBQVEsRUFBUkEsQ0FBUTttQkFBUkEsUUFBUSxDQUFSQSxRQUFRLEdBQUcsQ0FBQztnQkFDVixHQUFLLENBQUNDLHVCQUF1QixHQUFHLElBQUksQ0FBQ0YsaUJBQWlCLENBQUNHLE1BQU0sRUFDdkRDLEtBQUssR0FBR0YsdUJBQXVCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUUzQyxNQUFNLENBQUNFLEtBQUs7WUFDZCxDQUFDOzs7WUFFREMsR0FBc0IsRUFBdEJBLENBQXNCO21CQUF0QkEsUUFBUSxDQUFSQSxzQkFBc0IsR0FBRyxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDUCxtQkFBbUI7WUFDakMsQ0FBQzs7O1lBRURRLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQ1AsaUJBQWlCO1lBQy9CLENBQUM7OztZQUVEUSxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUNQLGlCQUFpQjtZQUMvQixDQUFDOzs7WUFFRFEsR0FBa0IsRUFBbEJBLENBQWtCO21CQUFsQkEsUUFBUSxDQUFSQSxrQkFBa0IsQ0FBQ0MsZUFBZSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQ1gsbUJBQW1CLE9BQUdZLE1BQU8sVUFBQ0QsZUFBZTtnQkFFbkRkLEdBQUcsQ0FBQyxJQUFJLENBQUNHLG1CQUFtQixFQUFFQSxtQkFBbUI7WUFDbkQsQ0FBQzs7O1lBRURhLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixHQUFLLENBQUNiLGlCQUFpQixPQUFHVyxNQUFPLFVBQUNFLGFBQWE7Z0JBRS9DakIsR0FBRyxDQUFDLElBQUksQ0FBQ0ksaUJBQWlCLEVBQUVBLGlCQUFpQjtZQUMvQyxDQUFDOzs7WUFFRGMsR0FBZ0IsRUFBaEJBLENBQWdCO21CQUFoQkEsUUFBUSxDQUFSQSxnQkFBZ0IsQ0FBQ0MsYUFBYSxFQUFFLENBQUM7Z0JBQy9CLEdBQUssQ0FBQ2QsaUJBQWlCLEdBQUdjLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRTdDbkIsR0FBRyxDQUFDLElBQUksQ0FBQ0ssaUJBQWlCLEVBQUVBLGlCQUFpQjtZQUMvQyxDQUFDOzs7O1lBRU1lLEdBQVcsRUFBWEEsQ0FBVzttQkFBbEIsUUFBUSxDQUFEQSxXQUFXLENBQUNDLEtBQUssRUFBeUIsQ0FBQztnQkFBeEIsR0FBR0MsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7b0JBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUM3QyxHQUFLLENBQUNuQixtQkFBbUIsR0FBRyxDQUFDLENBQUMsRUFDeEJDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUN0QkMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLEVBQ3RCa0IsWUFBWSxjQUFPRixLQUFLLEVBQVQsQ0FBQztvQkFBU2xCLG1CQUFtQjtvQkFBRUMsaUJBQWlCO29CQUFFQyxpQkFBaUI7Z0JBQXVCLENBQUMsQ0FBM0YsTUFBMkYsb0JBQW5CaUIsa0JBQWtCO2dCQUUvRyxNQUFNLENBQUNDLFlBQVk7WUFDckIsQ0FBQzs7Ozs7a0JBbkRrQnJCLFlBQVkifQ==