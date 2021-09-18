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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwiQ29sb3VyZWRGYWNldCIsImFkZCIsInNjYWxlMyIsIkNvbG91cmVkQ2FudmFzRWxlbWVudCIsImNvbnN0cnVjdG9yIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImNvbG91ciIsIm1hZ25pZnkiLCJtYWduaWZpY2F0aW9uIiwiY29vcmRpbmF0ZVR1cGxlcyIsIm1hcCIsImNvb3JkaW5hdGVUdXBsZSIsImNyZWF0ZUZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJpbmRleFR1cGxlcyIsInJlZHVjZSIsImluZGV4VHVwbGUiLCJjb2xvdXJlZEZhY2V0IiwiZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvciIsImZhY2V0Iiwic2V0RmFjZXRzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJnZXRGYWNldHMiLCJmcm9tUHJvcGVydGllcyIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYyxHQUFzQixDQUF0QixPQUFzQjtBQUN0QixHQUFnQyxDQUFoQyxTQUFnQztBQUV0QyxHQUF1QixDQUF2QixNQUF1QjtBQUNwQixHQUFvQixDQUFwQixPQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdEOEQsY0FBYTtJQXREakcscUJBQXFCLGlCQUEzQixRQUFRO2NBQUYscUJBQXFCO2FBQXJCLHFCQUFxQixDQUM1QixTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFB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QUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUFJLE1BQU0sRUFBQyxjQUFhLEdBNUQ1RixPQUFzQixVQTREdUUsY0FBYyxDQUE1QixLQUFvRyxDQUFwRyxjQUFhLEVBQWIsQ0FBQztvQkFBNEIsS0FBSztvQkFBRSxVQUFVO29CQUFFLFdBQVc7b0JBQUUsT0FBTztvQkFBRSxNQUFNO2dCQUF1QixDQUFDLENBQXBHLE1BQW9HLG9CQUFuQixrQkFBa0I7WUFBRyxDQUFDOzs7V0F0RDNMLHFCQUFxQjtFQU5oQixPQUFzQjtrQkFNM0IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBtYWduaWZ5KG1hZ25pZmljYXRpb24pIHtcbiAgICBsZXQgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXM7IC8vL1xuXG4gICAgY29vcmRpbmF0ZVR1cGxlcyA9IGNvb3JkaW5hdGVUdXBsZXMubWFwKChjb29yZGluYXRlVHVwbGUpID0+IHtcbiAgICAgIGNvb3JkaW5hdGVUdXBsZSA9IHNjYWxlMyhjb29yZGluYXRlVHVwbGUsIG1hZ25pZmljYXRpb24pO1xuXG4gICAgICByZXR1cm4gY29vcmRpbmF0ZVR1cGxlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgIHN1cGVyLm1hZ25pZnkobWFnbmlmaWNhdGlvbik7XG4gIH1cblxuICBjcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgaGlkZGVuID0gc3VwZXIuY3JlYXRlRmFjZXRzKGhpZGRlbiwgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIGlmICghaGlkZGVuKSB7XG4gICAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gQ29sb3VyZWRGYWNldC5mcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuY29sb3VyLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYWRkKGZhY2V0cywgZmFjZXQpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICBjb2xvdXJSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGNvbG91ciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iXX0=