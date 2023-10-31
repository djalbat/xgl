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
var _canvas = /*#__PURE__*/ _interop_require_default(require("../../element/canvas"));
var _textured = /*#__PURE__*/ _interop_require_default(require("../../primitive/facet/textured"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var TexturedCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(TexturedCanvasElement, CanvasElement);
    var _super = _create_super(TexturedCanvasElement);
    function TexturedCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
        _class_call_check(this, TexturedCanvasElement);
        var _this;
        _this = _super.call(this, maskReference, transform, facets, masks);
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.imageName = imageName;
        _this.textureCoordinates = textureCoordinates;
        return _this;
    }
    _create_class(TexturedCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var _this = this;
                _get(_get_prototype_of(TexturedCanvasElement.prototype), "createFacets", this).call(this, marginOfError);
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple, index) {
                    var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet; ///
                    if (facet !== null) {
                        facets.push(facet);
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
                _get(_get_prototype_of(TexturedCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
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
                ].concat(_to_consumable_array(remainingArguments)));
            }
        }
    ]);
    return TexturedCanvasElement;
}(_canvas.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgVGV4dHVyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcyk7XG5cbiAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgdGhpcy5pbmRleGVzID0gaW5kZXhlcztcbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgc3VwZXIuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgY29uc3QgaW5kZXhUdXBsZXMgPSB0aGlzLmluZGV4ZXMsICAvLy9cbiAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzW2luZGV4XSwgLy8vXG4gICAgICAgICAgICAgICAgICBjb29yZGluYXRlVHVwbGVzID0gdGhpcy5jb29yZGluYXRlcywgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gVGV4dHVyZWRGYWNldC5mcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCB0aGlzLmltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgICAgICAgICBmYWNldCA9IHRleHR1cmVkRmFjZXQ7ICAvLy9cblxuICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZmFjZXRzLnB1c2goZmFjZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgIH0sIFtdKTtcblxuICAgIHRoaXMuc2V0RmFjZXRzKGZhY2V0cyk7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCk7XG5cbiAgICB0ZXh0dXJlUmVuZGVyZXIuYWRkRmFjZXRzKGZhY2V0cyk7XG5cbiAgICBzdXBlci5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0dXJlZENhbnZhc0VsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJjcmVhdGVGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiaW5kZXhUdXBsZXMiLCJyZWR1Y2UiLCJpbmRleFR1cGxlIiwiaW5kZXgiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiVGV4dHVyZWRGYWNldCIsImZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsInB1c2giLCJzZXRGYWNldHMiLCJhZGRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImdldEZhY2V0cyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiQ2FudmFzRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7NkRBSEs7K0RBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BOytCQUFBQTthQUFBQSxzQkFDUEMsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxrQkFBa0I7Z0NBRHJGUjs7a0NBRVhDLGVBQWVDLFdBQVdDLFFBQVFDO1FBRXhDLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsT0FBTyxHQUFHQTtRQUNmLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0Msa0JBQWtCLEdBQUdBOzs7a0JBUFRSOztZQVVuQlMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLGFBQWE7O2dCQUN4Qix1QkFYaUJWLGtDQVdYUyxnQkFBTixJQUFLLGFBQWNDO2dCQUVuQixJQUFNQyxjQUFjLElBQUksQ0FBQ0wsT0FBTyxFQUM1QkgsU0FBU1EsWUFBWUMsTUFBTSxDQUFDLFNBQUNULFFBQVFVLFlBQVlDO29CQUM3QyxJQUFNQyxnQ0FBZ0MsTUFBS1Asa0JBQWtCLENBQUNNLE1BQU0sRUFDOURFLG1CQUFtQixNQUFLWCxXQUFXLEVBQ25DWSxnQkFBZ0JDLGlCQUFhLENBQUNDLCtFQUErRSxDQUFDSiwrQkFBK0JDLGtCQUFrQkgsWUFBWSxNQUFLTixTQUFTLEVBQUVHLGdCQUMzTFUsUUFBUUgsZUFBZ0IsR0FBRztvQkFFbkMsSUFBSUcsVUFBVSxNQUFNO3dCQUNsQmpCLE9BQU9rQixJQUFJLENBQUNEO29CQUNkO29CQUVBLE9BQU9qQjtnQkFDVCxHQUFHLEVBQUU7Z0JBRVQsSUFBSSxDQUFDbUIsU0FBUyxDQUFDbkI7WUFDakI7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLGNBQWMsRUFBRUMsZUFBZTtnQkFDdkMsSUFBTXRCLFNBQVMsSUFBSSxDQUFDdUIsU0FBUztnQkFFN0JELGdCQUFnQkYsU0FBUyxDQUFDcEI7Z0JBRTFCLHVCQW5DaUJILGtDQW1DWHVCLGFBQU4sSUFBSyxhQUFXQyxnQkFBZ0JDO1lBQ2xDOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLEtBQUssRUFBRUMsVUFBVSxFQUFFeEIsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsa0JBQWtCO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHc0IscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUEsT0FBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjtnQkFBRDtvQkFBWUM7Z0JBQVAsT0FBT0EsQ0FBQUEsaUJBQUFBLGVBQWEsRUFBQ0osY0FBYyxDQUE1QkksTUFBQUEsZ0JBQUFBO29CQUE2Qkg7b0JBQU9DO29CQUFZeEI7b0JBQWFDO29CQUFTQztvQkFBV0M7aUJBQTBDLENBQTNIdUIsT0FBcUcscUJBQUdEO1lBQXFCOzs7V0F0Q3hPOUI7RUFBOEIrQixlQUFhIn0=