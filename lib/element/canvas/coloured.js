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
            key: "magnify",
            value: function magnify(magnification) {
                var coordinateTuples = this.coordinates; ///
                coordinateTuples = coordinateTuples.map(function(coordinateTuple) {
                    coordinateTuple = (0, _vector).scale3(coordinateTuple, magnification);
                    return coordinateTuple;
                });
                this.coordinates = coordinateTuples; ///
                _get(_getPrototypeOf(ColouredCanvasElement.prototype), "magnify", this).call(this, magnification);
            }
        },
        {
            key: "createFacets",
            value: function createFacets(hidden) {
                hidden = _get(_getPrototypeOf(ColouredCanvasElement.prototype), "createFacets", this).call(this, hidden); ///
                if (!hidden) {
                    var indexTuples = this.indexes, facets = indexTuples.reduce((function(facets1, indexTuple) {
                        var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, this.colour), facet = colouredFacet; ///
                        if (facet !== null) {
                            (0, _array).add(facets1, facet);
                        }
                        return facets1;
                    }).bind(this), []);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGxldCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlczsgLy8vXG5cbiAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZVR1cGxlcy5tYXAoKGNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgICAgY29vcmRpbmF0ZVR1cGxlID0gc2NhbGUzKGNvb3JkaW5hdGVUdXBsZSwgbWFnbmlmaWNhdGlvbik7XG5cbiAgICAgIHJldHVybiBjb29yZGluYXRlVHVwbGU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgc3VwZXIubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4pIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmNvbG91ciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gY29sb3VyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgICB9LCBbXSk7XG5cbiAgICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gICAgfVxuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgY29sb3VyUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWMsR0FBc0IsQ0FBdEIsT0FBc0I7QUFDdEIsR0FBZ0MsQ0FBaEMsU0FBZ0M7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7QUFDcEIsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF3RDhELGNBQWE7SUF0RGpHLHFCQUFxQjtjQUFyQixxQkFBcUI7YUFBckIscUJBQXFCLENBQzVCLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU07OEJBRHRELHFCQUFxQjs7aUVBQXJCLHFCQUFxQixhQUVoQyxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNO2NBRWhDLFdBQVcsR0FBRyxXQUFXO2NBRXpCLE9BQU8sR0FBRyxPQUFPO2NBRWpCLE1BQU0sR0FBRyxNQUFNOzs7aUJBUkgscUJBQXFCOztZQVd4QyxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxnQkFBZ0IsUUFBUSxXQUFXLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUU1QyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLFVBQUUsZUFBZSxFQUFLLENBQUM7b0JBQzVELGVBQWUsT0FqQkUsT0FBb0IsU0FpQlosZUFBZSxFQUFFLGFBQWE7MkJBRWhELGVBQWU7Z0JBQ3hCLENBQUM7cUJBRUksV0FBVyxHQUFHLGdCQUFnQixDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztxQ0FwQnhCLHFCQUFxQixjQXNCaEMsT0FBTyxvQkFBQyxhQUFhO1lBQzdCLENBQUM7OztZQUVELEdBQVksR0FBWixZQUFZOzRCQUFaLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSx3QkExQlcscUJBQXFCLGNBMEJ2QixZQUFZLG9CQUFDLE1BQU0sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXpDLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztvQkFDWixHQUFLLENBQUMsV0FBVyxRQUFRLE9BQU8sRUFDMUIsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLFdBQUUsT0FBTSxFQUFFLFVBQVUsRUFBSyxDQUFDO3dCQUNuRCxHQUFLLENBQUMsZ0JBQWdCLFFBQVEsV0FBVyxFQUNuQyxhQUFhLEdBckNQLFNBQWdDLFNBcUNSLHVDQUF1QyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsT0FBTyxNQUFNLEdBQy9HLEtBQUssR0FBRyxhQUFhLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3dCQUVqQyxFQUFFLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO2dDQXRDZixNQUF1QixNQXVDdkIsT0FBTSxFQUFFLEtBQUs7d0JBQ25CLENBQUM7K0JBRU0sT0FBTTtvQkFDZixDQUFDO3lCQUVGLFNBQVMsQ0FBQyxNQUFNO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUyxDQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUUsQ0FBQztnQkFDMUMsR0FBSyxDQUFDLE1BQU0sUUFBUSxTQUFTO2dCQUU3QixjQUFjLENBQUMsU0FBUyxDQUFDLE1BQU07cUNBakRkLHFCQUFxQixjQW1EaEMsU0FBUyxvQkFBQyxjQUFjLEVBQUUsZUFBZTtZQUNqRCxDQUFDOzs7O1lBRU0sR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQXlCLENBQUM7b0JBQXhCLEdBQXFCLENBQXJCLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO3dCQUFXLGNBQWEsR0E1RDVGLE9BQXNCLFVBNER1RSxjQUFjLENBQTVCLEtBQW9HLENBQXBHLGNBQWE7b0JBQWdCLEtBQUs7b0JBQUUsVUFBVTtvQkFBRSxXQUFXO29CQUFFLE9BQU87b0JBQUUsTUFBTTtrQkFBNUUsTUFBb0csb0JBQW5CLGtCQUFrQjtZQUFHLENBQUM7OztXQXREM0wscUJBQXFCO0VBTmhCLE9BQXNCO2tCQU0zQixxQkFBcUIifQ==