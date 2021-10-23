"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9kYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuLCBtZXJnZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gbWVyZ2U7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKSB7XG4gICAgdGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gdmVydGV4UG9zaXRpb25zRGF0YTtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNEYXRhID0gdmVydGV4Tm9ybWFsc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGFMZW5ndGggPSB0aGlzLnZlcnRleEluZGV4ZXNEYXRhLmxlbmd0aCxcbiAgICAgICAgICBjb3VudCA9IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cbiAgXG4gIGdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Tm9ybWFsc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleEluZGV4ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleEluZGV4ZXNEYXRhO1xuICB9XG5cbiAgYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBmbGF0dGVuKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhKTtcbiAgfVxuXG4gIGFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscykge1xuICAgIGNvbnN0IHZlcnRleE5vcm1hbHNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhOb3JtYWxzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHZlcnRleEluZGV4ZXM7ICAvLy9cblxuICAgIGFkZCh0aGlzLnZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IFtdLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gW10sXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gbmV3IENsYXNzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gcmVuZGVyZXJEYXRhO1xuICB9XG59XG4iXSwibmFtZXMiOlsiYWRkIiwiUmVuZGVyZXJEYXRhIiwidmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJnZXRDb3VudCIsInZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoIiwibGVuZ3RoIiwiY291bnQiLCJnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJnZXRWZXJ0ZXhJbmRleGVzRGF0YSIsImFkZFZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4SW5kZXhlcyIsInZlcnRleEluZGV4ZXMiLCJmcm9tTm90aGluZyIsIkNsYXNzIiwicmVtYWluaW5nQXJndW1lbnRzIiwicmVuZGVyZXJEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVtQixHQUFvQixDQUFwQixNQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxHQUFLLENBQUNBLEdBQUcsR0FGc0IsTUFBb0IsT0FFL0IsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRUZDLFlBQVksaUJBQWxCLFFBQVE7YUFBRkEsWUFBWSxDQUNuQkMsbUJBQW1CLEVBQUVDLGlCQUFpQixFQUFFQyxpQkFBaUI7OEJBRGxESCxZQUFZO1FBRTdCLElBQUksQ0FBQ0MsbUJBQW1CLEdBQUdBLG1CQUFtQjtRQUM5QyxJQUFJLENBQUNDLGlCQUFpQixHQUFHQSxpQkFBaUI7UUFDMUMsSUFBSSxDQUFDQyxpQkFBaUIsR0FBR0EsaUJBQWlCOztpQkFKekJILFlBQVk7O1lBTy9CSSxHQUFRLEVBQVJBLENBQVE7bUJBQVJBLFFBQVEsQ0FBUkEsUUFBUSxHQUFHLENBQUM7Z0JBQ1YsR0FBSyxDQUFDQyx1QkFBdUIsR0FBRyxJQUFJLENBQUNGLGlCQUFpQixDQUFDRyxNQUFNLEVBQ3ZEQyxLQUFLLEdBQUdGLHVCQUF1QixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFM0MsTUFBTSxDQUFDRSxLQUFLO1lBQ2QsQ0FBQzs7O1lBRURDLEdBQXNCLEVBQXRCQSxDQUFzQjttQkFBdEJBLFFBQVEsQ0FBUkEsc0JBQXNCLEdBQUcsQ0FBQztnQkFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQ1AsbUJBQW1CO1lBQ2pDLENBQUM7OztZQUVEUSxHQUFvQixFQUFwQkEsQ0FBb0I7bUJBQXBCQSxRQUFRLENBQVJBLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUNQLGlCQUFpQjtZQUMvQixDQUFDOzs7WUFFRFEsR0FBb0IsRUFBcEJBLENBQW9CO21CQUFwQkEsUUFBUSxDQUFSQSxvQkFBb0IsR0FBRyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDUCxpQkFBaUI7WUFDL0IsQ0FBQzs7O1lBRURRLEdBQWtCLEVBQWxCQSxDQUFrQjttQkFBbEJBLFFBQVEsQ0FBUkEsa0JBQWtCLENBQUNDLGVBQWUsRUFBRSxDQUFDO2dCQUNuQyxHQUFLLENBQUNYLG1CQUFtQixPQS9CRSxNQUFvQixVQStCWFcsZUFBZTtnQkFFbkRiLEdBQUcsQ0FBQyxJQUFJLENBQUNFLG1CQUFtQixFQUFFQSxtQkFBbUI7WUFDbkQsQ0FBQzs7O1lBRURZLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixHQUFLLENBQUNaLGlCQUFpQixPQXJDSSxNQUFvQixVQXFDYlksYUFBYTtnQkFFL0NmLEdBQUcsQ0FBQyxJQUFJLENBQUNHLGlCQUFpQixFQUFFQSxpQkFBaUI7WUFDL0MsQ0FBQzs7O1lBRURhLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixHQUFLLENBQUNiLGlCQUFpQixHQUFHYSxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU3Q2pCLEdBQUcsQ0FBQyxJQUFJLENBQUNJLGlCQUFpQixFQUFFQSxpQkFBaUI7WUFDL0MsQ0FBQzs7OztZQUVNYyxHQUFXLEVBQVhBLENBQVc7bUJBQWxCLFFBQVEsQ0FBREEsV0FBVyxDQUFDQyxLQUFLLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUdDLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEJBLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFDN0MsR0FBSyxDQUFDbEIsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLEVBQ3hCQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFDdEJDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUN0QmlCLFlBQVksY0FBT0YsS0FBSyxFQUFULENBQUM7b0JBQVNqQixtQkFBbUI7b0JBQUVDLGlCQUFpQjtvQkFBRUMsaUJBQWlCO2dCQUF1QixDQUFDLENBQTNGLE1BQTJGLG9CQUFuQmdCLGtCQUFrQjtnQkFFL0csTUFBTSxDQUFDQyxZQUFZO1lBQ3JCLENBQUM7OztXQW5Ea0JwQixZQUFZOztrQkFBWkEsWUFBWSJ9