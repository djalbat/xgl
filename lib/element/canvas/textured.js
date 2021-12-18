"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _canvas = _interopRequireDefault(require("../../element/canvas"));
var _textured = _interopRequireDefault(require("../../primitive/facet/textured"));
var _array = require("../../utilities/array");
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
var TexturedCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(TexturedCanvasElement, CanvasElement);
    function TexturedCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
        _classCallCheck(this, TexturedCanvasElement);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedCanvasElement).call(this, maskReference, transform, facets, masks));
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.imageName = imageName;
        _this.textureCoordinates = textureCoordinates;
        return _this;
    }
    _createClass(TexturedCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var _this = this;
                _get(_getPrototypeOf(TexturedCanvasElement.prototype), "createFacets", this).call(this, marginOfError);
                var indexTuples = this.indexes, facets1 = indexTuples.reduce(function(facets, indexTuple, index) {
                    var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet; ///
                    if (facet !== null) {
                        (0, _array).add(facets, facet);
                    }
                    return facets;
                }, []);
                this.setFacets(facets1);
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
                var _CanvasElement;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIl0sIm5hbWVzIjpbIlRleHR1cmVkQ2FudmFzRWxlbWVudCIsIm1hc2tSZWZlcmVuY2UiLCJ0cmFuc2Zvcm0iLCJmYWNldHMiLCJtYXNrcyIsImNvb3JkaW5hdGVzIiwiaW5kZXhlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImNyZWF0ZUZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJpbmRleFR1cGxlcyIsInJlZHVjZSIsImluZGV4VHVwbGUiLCJpbmRleCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiY29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXQiLCJmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yIiwiZmFjZXQiLCJzZXRGYWNldHMiLCJhZGRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImdldEZhY2V0cyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2FudmFzRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFYyxHQUFzQixDQUF0QixPQUFzQjtBQUN0QixHQUFnQyxDQUFoQyxTQUFnQztBQUV0QyxHQUF1QixDQUF2QixNQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0QkEscUJBQXFCLGlCQUEzQixRQUFRO2NBQUZBLHFCQUFxQjthQUFyQkEscUJBQXFCLENBQzVCQyxhQUFhLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxLQUFL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