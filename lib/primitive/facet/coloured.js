"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColouredFacet;
    }
});
var _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
var _facet = /*#__PURE__*/ _interop_require_default(require("../facet"));
var _normal = /*#__PURE__*/ _interop_require_default(require("../normal"));
var _vertex = /*#__PURE__*/ _interop_require_default(require("../vertex"));
var _approximate = require("../../utilities/approximate");
var _vertices = require("../../utilities/vertices");
var _facet1 = require("../../utilities/facet");
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
var ColouredFacet = /*#__PURE__*/ function(Facet) {
    _inherits(ColouredFacet, Facet);
    var _super = _create_super(ColouredFacet);
    function ColouredFacet(vertices, normal, edges, rgba) {
        _class_call_check(this, ColouredFacet);
        var _this;
        _this = _super.call(this, vertices, normal, edges);
        _this.rgba = rgba;
        return _this;
    }
    _create_class(ColouredFacet, [
        {
            key: "getVertexColours",
            value: function getVertexColours() {
                var vertexColour = this.rgba, vertexColours = [
                    vertexColour,
                    vertexColour,
                    vertexColour
                ];
                return vertexColours;
            }
        },
        {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
                var colouredFacet = null;
                var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                    colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
                }
                return colouredFacet;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = (0, _facet1.cloneVertices)(vertices);
                normal = (0, _facet1.cloneNormal)(normal);
                edges = (0, _facet1.cloneEdges)(edges);
                var colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
                return colouredFacet;
            }
        }
    ], [
        {
            key: "fromCoordinateTuplesIndexTupleColourAndMarginOfError",
            value: function fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
                var colouredFacet = null;
                var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = _to_consumable_array(colour).concat([
                        1
                    ]); ///
                    colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
                }
                return colouredFacet;
            }
        }
    ]);
    return ColouredFacet;
}(_facet.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsInJnYmEiLCJnZXRWZXJ0ZXhDb2xvdXJzIiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJtYXJnaW5PZkVycm9yIiwiY29sb3VyZWRGYWNldCIsImFyZWEiLCJjYWxjdWxhdGVBcmVhIiwiYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiY2FsY3VsYXRlTm9ybWFsIiwiTm9ybWFsIiwiY2FsY3VsYXRlRWRnZXMiLCJFZGdlIiwiY2xvbmUiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiY2xvbmVWZXJ0aWNlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVFZGdlcyIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsImNvbG91ciIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiVmVydGV4IiwiRmFjZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJEQVRKOzREQUNDOzZEQUNDOzZEQUNBOzJCQUV3Qjt3QkFDZTtzQkFDNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhGLElBQUEsQUFBTUEsOEJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUEsY0FDUEMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtnQ0FEdEJKOztrQ0FFWEMsVUFBVUMsUUFBUUM7UUFFeEIsTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUpLSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0YsSUFBSSxFQUN4QkcsZ0JBQWdCO29CQUNkRDtvQkFDQUE7b0JBQ0FBO2lCQUNEO2dCQUVQLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCUCxRQUFRLEVBQUVRLGFBQWE7Z0JBQ2xELElBQUlDLGdCQUFnQjtnQkFFcEIsSUFBTUMsT0FBT0MsSUFBQUEscUJBQWEsRUFBQ1gsV0FDckJZLCtCQUErQkMsSUFBQUEsdUNBQTBCLEVBQUNILE1BQU1GO2dCQUV0RSxJQUFJLENBQUNJLDhCQUE4QjtvQkFDakMsSUFBTVgsU0FBU2EsSUFBQUEsdUJBQWUsRUFBQ2QsVUFBVWUsZUFBTSxHQUN6Q2IsUUFBUWMsSUFBQUEsc0JBQWMsRUFBQ2hCLFVBQVVpQixhQUFJO29CQUUzQ1IsZ0JBQWdCLElBNUJEVixjQTRCbUJDLFVBQVVDLFFBQVFDLE9BQU8sSUFBSSxDQUFDQyxJQUFJO2dCQUN0RTtnQkFFQSxPQUFPTTtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlsQixXQUFXLElBQUksQ0FBQ21CLFdBQVcsSUFDM0JsQixTQUFTLElBQUksQ0FBQ21CLFNBQVMsSUFDdkJsQixRQUFRLElBQUksQ0FBQ21CLFFBQVE7Z0JBRXpCckIsV0FBV3NCLElBQUFBLHFCQUFhLEVBQUN0QjtnQkFDekJDLFNBQVNzQixJQUFBQSxtQkFBVyxFQUFDdEI7Z0JBQ3JCQyxRQUFRc0IsSUFBQUEsa0JBQVUsRUFBQ3RCO2dCQUVuQixJQUFNTyxnQkFBZ0IsSUEzQ0xWLGNBMkN1QkMsVUFBVUMsUUFBUUMsT0FBTyxJQUFJLENBQUNDLElBQUk7Z0JBRTFFLE9BQU9NO1lBQ1Q7Ozs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLHFEQUFxREMsZ0JBQWdCLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFcEIsYUFBYTtnQkFDN0csSUFBSUMsZ0JBQWdCO2dCQUVwQixJQUFNVCxXQUFXNkIsSUFBQUEsbURBQXlDLEVBQUNILGtCQUFrQkMsWUFBWUcsZUFBTSxHQUN6RnBCLE9BQU9DLElBQUFBLHFCQUFhLEVBQUNYLFdBQ3JCWSwrQkFBK0JDLElBQUFBLHVDQUEwQixFQUFDSCxNQUFNRjtnQkFFdEUsSUFBSSxDQUFDSSw4QkFBOEI7b0JBQ2pDLElBQU1YLFNBQVNhLElBQUFBLHVCQUFlLEVBQUNkLFVBQVVlLGVBQU0sR0FDekNiLFFBQVFjLElBQUFBLHNCQUFjLEVBQUNoQixVQUFVaUIsYUFBSSxHQUNyQ2QsT0FBTyxBQUFFLHFCQUFHeUIsZUFBTDt3QkFBYTtxQkFBRyxHQUFHLEdBQUc7b0JBRW5DbkIsZ0JBQWdCLElBNUREVixjQTREbUJDLFVBQVVDLFFBQVFDLE9BQU9DO2dCQUM3RDtnQkFFQSxPQUFPTTtZQUNUOzs7V0FoRW1CVjtFQUFzQmdDLGNBQUsifQ==