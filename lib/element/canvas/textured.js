"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedCanvasElement;
    }
});
var _canvas = /*#__PURE__*/ _interopRequireDefault(require("../../element/canvas"));
var _textured = /*#__PURE__*/ _interopRequireDefault(require("../../primitive/facet/textured"));
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
var TexturedCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(TexturedCanvasElement, CanvasElement);
    var _super = _createSuper(TexturedCanvasElement);
    function TexturedCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
        _classCallCheck(this, TexturedCanvasElement);
        var _this;
        _this = _super.call(this, maskReference, transform, facets, masks);
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
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple, index) {
                    var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRDYW52YXNFbGVtZW50IGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKTtcblxuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB0aGlzLmluZGV4ZXMgPSBpbmRleGVzO1xuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBzdXBlci5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjb25zdCBpbmRleFR1cGxlcyA9IHRoaXMuaW5kZXhlcywgIC8vL1xuICAgICAgICBmYWNldHMgPSBpbmRleFR1cGxlcy5yZWR1Y2UoKGZhY2V0cywgaW5kZXhUdXBsZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNbaW5kZXhdLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBUZXh0dXJlZEZhY2V0LmZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIHRoaXMuaW1hZ2VOYW1lLCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICAgICAgICAgIGZhY2V0ID0gdGV4dHVyZWRGYWNldDsgIC8vL1xuXG4gICAgICAgICAgaWYgKGZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIHRleHR1cmVSZW5kZXJlci5hZGRGYWNldHMoZmFjZXRzKTtcblxuICAgIHN1cGVyLmFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTsgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJjcmVhdGVGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiaW5kZXhUdXBsZXMiLCJyZWR1Y2UiLCJpbmRleFR1cGxlIiwiaW5kZXgiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiVGV4dHVyZWRGYWNldCIsImZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsImFkZCIsInNldEZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDYW52YXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEscUJBQXFCOzs7MkRBTGhCLHNCQUFzQjs2REFDdEIsZ0NBQWdDO3FCQUV0Qyx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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