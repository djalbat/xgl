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
                    var indexTuples = this.indexes, facets = indexTuples.reduce((function(facets1, indexTuple) {
                        var coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError), facet = colouredFacet; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrLCBoaWRkZW4sIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcih0cmFuc2Zvcm0sIGZhY2V0cywgbWFzaywgaGlkZGVuKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblxuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG5cbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGxldCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlczsgLy8vXG5cbiAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZVR1cGxlcy5tYXAoKGNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgICAgY29vcmRpbmF0ZVR1cGxlID0gc2NhbGUzKGNvb3JkaW5hdGVUdXBsZSwgbWFnbmlmaWNhdGlvbik7XG5cbiAgICAgIHJldHVybiBjb29yZGluYXRlVHVwbGU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgc3VwZXIubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgICBmYWNldCA9IGNvbG91cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVjLEdBQXNCLENBQXRCLE9BQXNCO0FBQ3RCLEdBQWdDLENBQWhDLFNBQWdDO0FBRXRDLEdBQXVCLENBQXZCLE1BQXVCO0FBQ3BCLEdBQW9CLENBQXBCLE9BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0Q4RCxjQUFhO0lBdERqRyxxQkFBcUI7Y0FBckIscUJBQXFCO2FBQXJCLHFCQUFxQixDQUM1QixTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNOzhCQUR0RCxxQkFBcUI7O2lFQUFyQixxQkFBcUIsYUFFaEMsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTTtjQUVoQyxXQUFXLEdBQUcsV0FBVztjQUV6QixPQUFPLEdBQUcsT0FBTztjQUVqQixNQUFNLEdBQUcsTUFBTTs7O2lCQVJILHFCQUFxQjs7WUFXeEMsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN0QixHQUFHLENBQUMsZ0JBQWdCLFFBQVEsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgs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