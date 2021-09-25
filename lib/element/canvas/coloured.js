"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _canvas = _interopRequireDefault(require("../../element/canvas"));
var _coloured = _interopRequireDefault(require("../../primitive/facet/coloured"));
var _array = require("../../utilities/array");
var _vector = require("../../maths/vector");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var _CanvasElement;
var ColouredCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(ColouredCanvasElement, CanvasElement);
    function ColouredCanvasElement(transform, facets, mask, hidden, coordinates, indexes, colour) {
        _classCallCheck(this, ColouredCanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredCanvasElement).call(this, transform, facets, mask, hidden));
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.colour = colour;
        return _this;
    }
    _createClass(ColouredCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(hidden, marginOfError) {
                hidden = _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, hidden, marginOfError); ///
                if (!hidden) {
                    var _this = this;
                    var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple) {
                        var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet; ///
                        if (facet !== null) {
                            (0, _array).add(facets, facet);
                        }
                        return facets;
                    }, []);
                    this.setFacets(facets);
                }
            }
        },
        {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
                var facets = this.getFacets();
                colourRenderer.addFacets(facets);
                _get(_getPrototypeOf(ColouredCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++){
                    remainingArguments[_key - 5] = arguments[_key];
                }
                return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                    Class,
                    properties,
                    coordinates,
                    indexes,
                    colour
                ].concat(_toConsumableArray(remainingArguments)));
            }
        }
    ]);
    return ColouredCanvasElement;
}(_canvas.default);
exports.default = ColouredCanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwiQ29sb3VyZWRGYWNldCIsImFkZCIsInNjYWxlMyIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImNvbnN0cnVjdG9yIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsImNyZWF0ZUZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJpbmRleFR1cGxlcyIsInJlZHVjZSIsImluZGV4VHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiY29sb3VyZWRGYWNldCIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsInNldEZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWMsR0FBc0IsQ0FBdEIsT0FBc0I7QUFDdEIsR0FBZ0MsQ0FBaEMsU0FBZ0M7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7QUFDcEIsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQzhELGNBQWE7SUF4Q2pHLHFCQUFxQixpQkFBM0IsUUFBUTtjQUFGLHFCQUFxQjthQUFyQixxQkFBcUIsQ0FDNUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTTs4QkFEdEQscUJBQXFCOztpRUFBckIscUJBQXFCLGFBRWhDLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU07Y0FFaEMsV0FBVyxHQUFHLFdBQVc7Y0FFekIsT0FBTyxHQUFHLE9BQU87Y0FFakIsTUFBTSxHQUFHLE1BQU07OztpQkFSSCxxQkFBcUI7O1lBV3hDLEdBQVksRUFBWixDQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLHdCQVpXLHFCQUFxQixhQVl2QixDQUFZLGVBQWxCLElBQUssYUFBYyxNQUFNLEVBQUUsYUFBYSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFeEQsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDOztvQkFDWixHQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQzFCLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBUCxNQUFNLEVBQUUsVUFBVSxFQUFLLENBQUM7d0JBQ25ELEdBQUssQ0FBQyxnQkFBZ0IsU0FBUSxXQUFXLEVBQ25DLGFBQWEsR0F2QlAsU0FBZ0MsU0F1QlIsb0RBQW9ELENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxRQUFPLE1BQU0sRUFBRSxhQUFhLEdBQzNJLEtBQUssR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUVqQyxFQUFFLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO2dDQXhCZixNQUF1QixNQXlCdkIsTUFBTSxFQUFFLEtBQUs7d0JBQ25CLENBQUM7d0JBRUQsTUFBTSxDQUFDLE1BQU07b0JBQ2YsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFFWCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Z0JBQ3ZCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFTLEVBQVQsQ0FBUzttQkFBVCxRQUFRLENBQVIsU0FBUyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsQ0FBQztnQkFDMUMsR0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUztnQkFFN0IsY0FBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNO3FDQW5DZCxxQkFBcUIsYUFxQ2hDLENBQVMsWUFBZixJQUFLLGFBQVcsY0FBYyxFQUFFLGVBQWU7WUFDakQsQ0FBQzs7OztZQUVNLEdBQWMsRUFBZCxDQUFjO21CQUFyQixRQUFRLENBQUQsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUcsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQixrQkFBa0IsR0FBckIsR0FBcUIsT0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsR0FBckIsQ0FBQztvQkFBRSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQztnQkFBSSxNQUFNLEVBQUMsY0FBYSxHQTlDNUYsT0FBc0IsVUE4Q3VFLGNBQWMsQ0FBNUIsS0FBb0csQ0FBcEcsY0FBYSxFQUFiLENBQUM7b0JBQTRCLEtBQUs7b0JBQUUsVUFBVTtvQkFBRSxXQUFXO29CQUFFLE9BQU87b0JBQUUsTUFBTTtnQkFBdUIsQ0FBQyxDQUFwRyxNQUFvRyxvQkFBbkIsa0JBQWtCO1lBQUcsQ0FBQzs7O1dBeEMzTCxxQkFBcUI7RUFOaEIsT0FBc0I7a0JBTTNCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBDb2xvdXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcblxuICAgIHRoaXMuY29sb3VyID0gY29sb3VyO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGhpZGRlbiA9IHN1cGVyLmNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBpZiAoIWhpZGRlbikge1xuICAgICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl19