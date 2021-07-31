"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _edge = _interopRequireDefault(require("../edge"));
var _facet = _interopRequireDefault(require("../facet"));
var _normal = _interopRequireDefault(require("../normal"));
var _vertex = _interopRequireDefault(require("../vertex"));
var _approximate = require("../../utilities/approximate");
var _vertices = require("../../utilities/vertices");
var _facet1 = require("../../utilities/facet");
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
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ColouredFacet = /*#__PURE__*/ function(Facet) {
    _inherits(ColouredFacet, Facet);
    function ColouredFacet(vertices, normal, edges, rgba) {
        _classCallCheck(this, ColouredFacet);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet).call(this, vertices, normal, edges));
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
            key: "fromVertices",
            value: function fromVertices(vertices) {
                var colouredFacet = null;
                var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
                    var rgba = this.rgba, normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                    colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
                }
                return colouredFacet;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = (0, _facet1).cloneVertices(vertices);
                normal = (0, _facet1).cloneNormal(normal);
                edges = (0, _facet1).cloneEdges(edges);
                var rgba = this.rgba, colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
                return colouredFacet;
            }
        }
    ], [
        {
            key: "fromCoordinateTuplesIndexTupleColourAndMagnification",
            value: function fromCoordinateTuplesIndexTupleColourAndMagnification(coordinateTuples, indexTuple, colour, magnification) {
                var colouredFacet = null;
                var vertices = (0, _vertices).verticesFromCoordinateTuplesIndexTupleAndMagnification(coordinateTuples, indexTuple, magnification, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
                    var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
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
exports.default = ColouredFacet;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kTWFnbmlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYWduaWZpY2F0aW9uKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFnbmlmaWNhdGlvbikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRNYWduaWZpY2F0aW9uKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIG1hZ25pZmljYXRpb24sIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDUixHQUFVLENBQVYsTUFBVTtB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