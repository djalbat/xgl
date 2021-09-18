"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _canvas = _interopRequireDefault(require("../../element/canvas"));
var _textured = _interopRequireDefault(require("../../primitive/facet/textured"));
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
var TexturedCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(TexturedCanvasElement, CanvasElement);
    function TexturedCanvasElement(transform, facets, mask, hidden, coordinates, indexes, imageName, textureCoordinates) {
        _classCallCheck(this, TexturedCanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedCanvasElement).call(this, transform, facets, mask, hidden));
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.imageName = imageName;
        _this.textureCoordinates = textureCoordinates;
        return _this;
    }
    _createClass(TexturedCanvasElement, [
        {
            key: "magnify",
            value: function magnify(magnification) {
                var coordinateTuples = this.coordinates; ///
                coordinateTuples = coordinateTuples.map(function(coordinateTuple) {
                    coordinateTuple = (0, _vector).scale3(coordinateTuple, magnification);
                    return coordinateTuple;
                });
                this.coordinates = coordinateTuples; ///
                _get(_getPrototypeOf(TexturedCanvasElement.prototype), "magnify", this).call(this, magnification);
            }
        },
        {
            key: "createFacets",
            value: function createFacets(hidden, marginOfError) {
                hidden = _get(_getPrototypeOf(TexturedCanvasElement.prototype), "createFacets", this).call(this, hidden, marginOfError); ///
                if (!hidden) {
                    var _this = this;
                    var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple, index) {
                        var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet; ///
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
                textureRenderer.addFacets(facets);
                _get(_getPrototypeOf(TexturedCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
        }
    ], [
        {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++){
                    remainingArguments[_key - 6] = arguments[_key];
                }
                return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                    Class,
                    properties,
                    coordinates,
                    indexes,
                    imageName,
                    textureCoordinates
                ].concat(_toConsumableArray(remainingArguments)));
            }
        }
    ]);
    return TexturedCanvasElement;
}(_canvas.default);
exports.default = TexturedCanvasElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwiVGV4dHVyZWRGYWNldCIsImFkZCIsInNjYWxlMyIsIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsImNvbnN0cnVjdG9yIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFzayIsImhpZGRlbiIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsIm1hZ25pZnkiLCJtYWduaWZpY2F0aW9uIiwiY29vcmRpbmF0ZVR1cGxlcyIsIm1hcCIsImNvb3JkaW5hdGVUdXBsZSIsImNyZWF0ZUZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJpbmRleFR1cGxlcyIsInJlZHVjZSIsImluZGV4VHVwbGUiLCJpbmRleCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldCIsImZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsInNldEZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRWMsR0FBc0IsQ0FBdEIsT0FBc0I7QUFDdEIsR0FBZ0MsQ0FBaEMsU0FBZ0M7QUFFdEMsR0FBdUIsQ0FBdkIsTUFBdUI7QUFDcEIsR0FBb0IsQ0FBcEIsT0FBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyRHFG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QXJCLElBQXFCLEdBQXJCLFNBQXFCLENBQXJCLE1BQXFCLEVBQWxCLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFyQixJQUFxQjtnQkFBRCxDQUFDO2dCQUFJLE1BQU0sRUFBQyxjQUFhLEdBL0RuSCxPQUFzQixVQStEOEYsY0FBYyxDQUE1QixLQUEySCxDQUEzSCxjQUFhLEVBQWIsQ0FBQztvQkFBNEIsS0FBSztvQkFBRSxVQUFVO29CQUFFLFdBQVc7b0JBQUUsT0FBTztvQkFBRSxTQUFTO29CQUFFLGtCQUFrQjtnQkFBdUIsQ0FBQyxDQUEzSCxNQUEySCxvQkFBbkIsa0JBQWtCO1lBQUcsQ0FBQzs7O1dBekR6TyxxQkFBcUI7RUFOaEIsT0FBc0I7a0JBTTNCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBUZXh0dXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbiwgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodHJhbnNmb3JtLCBmYWNldHMsIG1hc2ssIGhpZGRlbik7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIG1hZ25pZnkobWFnbmlmaWNhdGlvbikge1xuICAgIGxldCBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlczsgLy8vXG5cbiAgICBjb29yZGluYXRlVHVwbGVzID0gY29vcmRpbmF0ZVR1cGxlcy5tYXAoKGNvb3JkaW5hdGVUdXBsZSkgPT4ge1xuICAgICAgY29vcmRpbmF0ZVR1cGxlID0gc2NhbGUzKGNvb3JkaW5hdGVUdXBsZSwgbWFnbmlmaWNhdGlvbik7XG5cbiAgICAgIHJldHVybiBjb29yZGluYXRlVHVwbGU7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZVR1cGxlczsgIC8vL1xuXG4gICAgc3VwZXIubWFnbmlmeShtYWduaWZpY2F0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhoaWRkZW4sIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBoaWRkZW4gPSBzdXBlci5jcmVhdGVGYWNldHMoaGlkZGVuLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgYWRkKGZhY2V0cywgZmFjZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgICB9XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdfQ==