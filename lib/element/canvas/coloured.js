"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColouredCanvasElement;
    }
});
var _canvas = /*#__PURE__*/ _interopRequireDefault(require("../../element/canvas"));
var _coloured = /*#__PURE__*/ _interopRequireDefault(require("../../primitive/facet/coloured"));
var _array = require("../../utilities/array");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
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
var ColouredCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(ColouredCanvasElement, CanvasElement);
    var _super = _createSuper(ColouredCanvasElement);
    function ColouredCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, colour) {
        _classCallCheck(this, ColouredCanvasElement);
        var _this;
        _this = _super.call(this, maskReference, transform, facets, masks);
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.colour = colour;
        return _this;
    }
    _createClass(ColouredCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var _this = this;
                _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, marginOfError);
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple) {
                    var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet; ///
                    if (facet !== null) {
                        (0, _array.add)(facets, facet);
                    }
                    return facets;
                }, []);
                this.setFacets(facets);
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
                var _CanvasElement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgY29sb3VyZWRGYWNldCA9IENvbG91cmVkRmFjZXQuZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjcmVhdGVGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiaW5kZXhUdXBsZXMiLCJyZWR1Y2UiLCJpbmRleFR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImNvbG91cmVkRmFjZXQiLCJDb2xvdXJlZEZhY2V0IiwiZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvciIsImZhY2V0IiwiYWRkIiwic2V0RmFjZXRzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJnZXRGYWNldHMiLCJmcm9tUHJvcGVydGllcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkNhbnZhc0VsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQU9RQSxxQkFBcUI7OzsyREFMaEIsc0JBQXNCOzZEQUN0QixnQ0FBZ0M7cUJBRXRDLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLHFCQUFxQixpQkFBM0I7OzthQUFNQSxxQkFBcUIsQ0FDNUJDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE1BQU07OztrQ0FDekVOLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRTtRQUUvQyxNQUFLQyxXQUFXLEdBQUdBLFdBQVcsQ0FBQztRQUMvQixNQUFLQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQztRQUN2QixNQUFLQyxNQUFNLEdBQUdBLE1BQU0sQ0FBQzs7Ozs7WUFHdkJDLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxDQUFDQyxhQUFhLEVBQUU7O2dCQUMxQixxQkFWaUJULHFCQUFxQixhQVVoQ1EsY0FBWSxFQUFsQixJQUFLLENBQUEsWUFBY0MsYUFBYSxFQUFFO2dCQUVsQyxJQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDSixPQUFPLEVBQzFCSCxNQUFNLEdBQUdPLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLFNBQUNSLE1BQU0sRUFBRVMsVUFBVSxFQUFLO29CQUNsRCxJQUFNQyxnQkFBZ0IsR0FBRyxNQUFLUixXQUFXLEVBQ25DUyxhQUFhLEdBQUdDLFNBQWEsUUFBQSxDQUFDQyxvREFBb0QsQ0FBQ0gsZ0JBQWdCLEVBQUVELFVBQVUsRUFBRSxNQUFLTCxNQUFNLEVBQUVFLGFBQWEsQ0FBQyxFQUM1SVEsS0FBSyxHQUFHSCxhQUFhLEFBQUMsRUFBRSxHQUFHO29CQUVqQyxJQUFJRyxLQUFLLEtBQUssSUFBSSxFQUFFO3dCQUNsQkMsSUFBQUEsTUFBRyxJQUFBLEVBQUNmLE1BQU0sRUFBRWMsS0FBSyxDQUFDLENBQUM7cUJBQ3BCO29CQUVELE9BQU9kLE1BQU0sQ0FBQztpQkFDZixFQUFFLEVBQUUsQ0FBQyxBQUFDO2dCQUViLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ2hCLE1BQU0sQ0FBQyxDQUFDO2FBQ3hCOzs7WUFFRGlCLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxDQUFDQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtnQkFDekMsSUFBTW5CLE1BQU0sR0FBRyxJQUFJLENBQUNvQixTQUFTLEVBQUUsQUFBQztnQkFFaENGLGNBQWMsQ0FBQ0QsU0FBUyxDQUFDakIsTUFBTSxDQUFDLENBQUM7Z0JBRWpDLHFCQWpDaUJILHFCQUFxQixhQWlDaENvQixXQUFTLEVBQWYsSUFBSyxDQUFBLFlBQVdDLGNBQWMsRUFBRUMsZUFBZSxFQUFFO2FBQ2xEOzs7O1lBRU1FLEdBQWMsRUFBZEEsZ0JBQWM7bUJBQXJCLFNBQU9BLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFQyxVQUFVLEVBQUVyQixXQUFXLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUF5QjtnQkFBdkIsSUFBQSxJQUFBLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQXJCLEFBQUdvQixrQkFBa0IsR0FBckIsVUFBQSxJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFBLENBQUEsRUFBckIsSUFBcUIsR0FBckIsQ0FBcUIsRUFBckIsSUFBcUIsR0FBckIsSUFBcUIsRUFBckIsSUFBcUIsRUFBQSxDQUFyQjtvQkFBQSxBQUFHQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQUFBckIsQ0FBQSxJQUFxQixDQUFBLENBQUE7aUJBQUE7b0JBQVdDLGNBQWE7Z0JBQXBCLE9BQU9BLENBQUFBLGNBQWEsR0FBYkEsT0FBYSxRQUFBLEVBQUNKLGNBQWMsQ0FBNUJJLEtBQW9HLENBQXBHQSxjQUFhLEVBQWJBO29CQUE2QkgsS0FBSztvQkFBRUMsVUFBVTtvQkFBRXJCLFdBQVc7b0JBQUVDLE9BQU87b0JBQUVDLE1BQU07aUJBQXdCLENBQXBHcUIsTUFBb0csQ0FBdEIsbUJBQUdELGtCQUFrQixDQUFsQkEsQ0FBbUIsQ0FBQSxDQUFDO2FBQUU7Ozs7Q0FDL00sQ0FyQ2tEQyxPQUFhLFFBQUEsQ0FxQy9EIn0=