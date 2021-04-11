"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _canvas = _interopRequireDefault(require("../../element/canvas"));
var _coloured = _interopRequireDefault(require("../../primitive/facet/coloured"));
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
var ColouredCanvasElement = function(CanvasElement) {
    _inherits(ColouredCanvasElement, _canvas.default);
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
            value: function createFacets(hidden) {
                hidden = _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, hidden); ///
                if (!hidden) {
                    var indexTuples = this.indexes, facets = indexTuples.map((function(indexTuple) {
                        var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, this.colour), facet = colouredFacet; ///
                        return facet;
                    }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMubWFwKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRWMsT0FBc0I7SUFDdEIsU0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQytDLGNBQWE7SUFwQ2pHLHFCQUFxQixZQUFTLGFBQWE7Y0FBM0MscUJBQXFCLEVBSGhCLE9BQXNCO2FBRzNCLHFCQUFxQixDQUM1QixTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNOzhCQUR0RCxxQkFBcUI7O2lFQUFyQixxQkFBcUIsYUFFaEMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTTtjQUVoQyxXQUFXLEdBQUcsV0FBVztjQUV6QixPQUFPLEdBQUcsT0FBTztjQUVqQixNQUFNLEdBQUcsTUFBTTs7O2lCQVJILHFCQUFxQjs7WUFXeEMsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLE1BQU07Z0JBQ2pCLE1BQU0sd0JBWlcscUJBQXFCLGNBWXZCLFlBQVksb0JBQUMsTUFBTSxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQkFFcEMsTUFBTTt3QkFDSCxXQUFXLFFBQVEsT0FBTyxFQUMxQixNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsV0FBRSxVQUFVOzRCQUM1QixnQkFBZ0IsUUFBUSxXQUFXLEVBQ25DLGFBQWEsR0FwQlAsU0FBZ0MsU0FvQlIsdUNBQXVDLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxPQUFPLE1BQU0sR0FDL0csS0FBSyxHQUFHLGFBQWEsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7K0JBRTFCLEtBQUs7O3lCQUdmLFNBQVMsQ0FBQyxNQUFNOzs7OztZQUl6QixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsY0FBYyxFQUFFLGVBQWU7b0JBQ2pDLE1BQU0sUUFBUSxTQUFTO2dCQUU3QixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU07cUNBL0JkLHFCQUFxQixjQWlDaEMsU0FBUyxvQkFBQyxjQUFjLEVBQUUsZUFBZTs7Ozs7WUFHMUMsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNO3dCQUFFLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCLGtCQUFrQixhQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQjtvQkFBbEIsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCOzt3QkFBVyxjQUFhLEdBdkM1RixPQUFzQixVQXVDdUUsY0FBYyxDQUE1QixLQUFvRyxDQUFwRyxjQUFhO29CQUFnQixLQUFLO29CQUFFLFVBQVU7b0JBQUUsV0FBVztvQkFBRSxPQUFPO29CQUFFLE1BQU07a0JBQTVFLE1BQW9HLG9CQUFuQixrQkFBa0I7Ozs7V0FwQ3ZMLHFCQUFxQjtFQUhoQixPQUFzQjtrQkFHM0IscUJBQXFCIn0=