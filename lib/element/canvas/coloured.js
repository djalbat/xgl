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
var _canvas = /*#__PURE__*/ _interop_require_default(require("../../element/canvas"));
var _coloured = /*#__PURE__*/ _interop_require_default(require("../../primitive/facet/coloured"));
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
var ColouredCanvasElement = /*#__PURE__*/ function(CanvasElement) {
    _inherits(ColouredCanvasElement, CanvasElement);
    var _super = _create_super(ColouredCanvasElement);
    function ColouredCanvasElement(maskReference, transform, facets, masks, coordinates, indexes, colour) {
        _class_call_check(this, ColouredCanvasElement);
        var _this;
        _this = _super.call(this, maskReference, transform, facets, masks);
        _this.coordinates = coordinates;
        _this.indexes = indexes;
        _this.colour = colour;
        return _this;
    }
    _create_class(ColouredCanvasElement, [
        {
            key: "createFacets",
            value: function createFacets(marginOfError) {
                var _this = this;
                _get(_get_prototype_of(ColouredCanvasElement.prototype), "createFacets", this).call(this, marginOfError);
                var indexTuples = this.indexes, facets = indexTuples.reduce(function(facets, indexTuple) {
                    var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet; ///
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
                colourRenderer.addFacets(facets);
                _get(_get_prototype_of(ColouredCanvasElement.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
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
                ].concat(_to_consumable_array(remainingArguments)));
            }
        }
    ]);
    return ColouredCanvasElement;
}(_canvas.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJjb29yZGluYXRlcyIsImluZGV4ZXMiLCJjb2xvdXIiLCJjcmVhdGVGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiaW5kZXhUdXBsZXMiLCJyZWR1Y2UiLCJpbmRleFR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImNvbG91cmVkRmFjZXQiLCJDb2xvdXJlZEZhY2V0IiwiZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvciIsImZhY2V0IiwicHVzaCIsInNldEZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZ2V0RmFjZXRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJDYW52YXNFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUtxQkE7Ozs2REFISzsrREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEsc0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsc0JBQ1BDLGFBQWEsRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLE1BQU07Z0NBRDlEUDs7a0NBRVhDLGVBQWVDLFdBQVdDLFFBQVFDO1FBRXhDLE1BQUtDLFdBQVcsR0FBR0E7UUFDbkIsTUFBS0MsT0FBTyxHQUFHQTtRQUNmLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFOR1A7O1lBU25CUSxLQUFBQTttQkFBQUEsU0FBQUEsYUFBYUMsYUFBYTs7Z0JBQ3hCLHVCQVZpQlQsa0NBVVhRLGdCQUFOLElBQUssYUFBY0M7Z0JBRW5CLElBQU1DLGNBQWMsSUFBSSxDQUFDSixPQUFPLEVBQzFCSCxTQUFTTyxZQUFZQyxNQUFNLENBQUMsU0FBQ1IsUUFBUVM7b0JBQ25DLElBQU1DLG1CQUFtQixNQUFLUixXQUFXLEVBQ25DUyxnQkFBZ0JDLGlCQUFhLENBQUNDLG9EQUFvRCxDQUFDSCxrQkFBa0JELFlBQVksTUFBS0wsTUFBTSxFQUFFRSxnQkFDOUhRLFFBQVFILGVBQWdCLEdBQUc7b0JBRWpDLElBQUlHLFVBQVUsTUFBTTt3QkFDbEJkLE9BQU9lLElBQUksQ0FBQ0Q7b0JBQ2Q7b0JBRUEsT0FBT2Q7Z0JBQ1QsR0FBRyxFQUFFO2dCQUVYLElBQUksQ0FBQ2dCLFNBQVMsQ0FBQ2hCO1lBQ2pCOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3ZDLElBQU1uQixTQUFTLElBQUksQ0FBQ29CLFNBQVM7Z0JBRTdCRixlQUFlRCxTQUFTLENBQUNqQjtnQkFFekIsdUJBakNpQkgsa0NBaUNYb0IsYUFBTixJQUFLLGFBQVdDLGdCQUFnQkM7WUFDbEM7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsS0FBSyxFQUFFQyxVQUFVLEVBQUVyQixXQUFXLEVBQUVDLE9BQU8sRUFBRUMsTUFBTTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR29CLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFBV0M7Z0JBQVAsT0FBT0EsQ0FBQUEsaUJBQUFBLGVBQWEsRUFBQ0osY0FBYyxDQUE1QkksTUFBQUEsZ0JBQUFBO29CQUE2Qkg7b0JBQU9DO29CQUFZckI7b0JBQWFDO29CQUFTQztpQkFBOEIsQ0FBcEdxQixPQUE4RSxxQkFBR0Q7WUFBcUI7OztXQXBDMUwzQjtFQUE4QjRCLGVBQWEifQ==