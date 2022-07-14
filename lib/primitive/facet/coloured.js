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
var _edge = /*#__PURE__*/ _interopRequireDefault(require("../edge"));
var _facet = /*#__PURE__*/ _interopRequireDefault(require("../facet"));
var _normal = /*#__PURE__*/ _interopRequireDefault(require("../normal"));
var _vertex = /*#__PURE__*/ _interopRequireDefault(require("../vertex"));
var _approximate = require("../../utilities/approximate");
var _vertices = require("../../utilities/vertices");
var _facet1 = require("../../utilities/facet");
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
var ColouredFacet = /*#__PURE__*/ function(Facet) {
    _inherits(ColouredFacet, Facet);
    var _super = _createSuper(ColouredFacet);
    function ColouredFacet(vertices, normal, edges, rgba) {
        _classCallCheck(this, ColouredFacet);
        var _this;
        _this = _super.call(this, vertices, normal, edges);
        _this.rgba = rgba;
        return _this;
    }
    _createClass(ColouredFacet, [
        {
            key: "getVertexColours",
            value: function getVertexColours() {
                var vertexColour = this.rgba, vertexColours = [
                    vertexColour,
                    vertexColour,
                    vertexColour, 
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
                    var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ29sb3VyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJyZ2JhIiwiZ2V0VmVydGV4Q29sb3VycyIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yIiwibWFyZ2luT2ZFcnJvciIsImNvbG91cmVkRmFjZXQiLCJhcmVhIiwiY2FsY3VsYXRlQXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImNhbGN1bGF0ZU5vcm1hbCIsIk5vcm1hbCIsImNhbGN1bGF0ZUVkZ2VzIiwiRWRnZSIsImNsb25lIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNsb25lVmVydGljZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lRWRnZXMiLCJmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJjb2xvdXIiLCJ2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSIsIlZlcnRleCIsIkZhY2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFXUUEsYUFBYTs7O3lEQVRqQixTQUFTOzBEQUNSLFVBQVU7MkRBQ1QsV0FBVzsyREFDWCxXQUFXOzJCQUVhLDZCQUE2Qjt3QkFDZCwwQkFBMEI7c0JBQ21CLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0csSUFBQSxBQUFNQSxhQUFhLGlCQUFuQjs7O2FBQU1BLGFBQWEsQ0FDcEJDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUk7OztrQ0FDakNILFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUU7UUFFL0IsTUFBS0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7Ozs7O1lBR25CQyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLEdBQUc7Z0JBQ2pCLElBQU1DLFlBQVksR0FBRyxJQUFJ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