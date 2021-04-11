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
var ColouredFacet = function(Facet) {
    _inherits(ColouredFacet, _facet.default);
    function ColouredFacet(vertices, normal, edges, rgba) {
        _classCallCheck(this, ColouredFacet);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ColouredFacet).call(this, vertices, normal, edges));
        _this.rgba = rgba;
        return _this;
    }
    _createClass(ColouredFacet, [
        {
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = _facet1.cloneVertices(vertices);
                normal = _facet1.cloneNormal(normal);
                edges = _facet1.cloneEdges(edges);
                var rgba = this.rgba, colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
                return colouredFacet;
            }
        },
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
                var area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
                    var rgba = this.rgba, normal = _facet1.calculateNormal(vertices, _normal.default), edges = _facet1.calculateEdges(vertices, _edge.default);
                    colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
                }
                return colouredFacet;
            }
        }
    ], [
        {
            key: "fromCoordinateTuplesIndexTupleAndColour",
            value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
                var colouredFacet = null;
                var vertices = _vertices.verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = _facet1.calculateArea(vertices), areaApproximatelyEqualToZero = _approximate.isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
                    var normal = _facet1.calculateNormal(vertices, _normal.default), edges = _facet1.calculateEdges(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5yZ2JhLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRUssS0FBUztJQUNSLE1BQVU7SUFDVCxPQUFXO0lBQ1gsT0FBVztJQUVhLFlBQTZCO0lBQ2QsU0FBMEI7SUFDbUIsT0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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