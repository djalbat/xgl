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
            key: "fromCoordinateTuplesIndexTupleAndColour",
            value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
                var colouredFacet = null;
                var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZENvbG91cihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgcmdiYSA9IFsgLi4uY29sb3VyLCAxIF07ICAvLy9cblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRUssR0FBUyxDQUFULEtBQVM7QUFDUixHQUFVLENBQVYsTUFBVTtBQUNULEdBQVcsQ0FBWCxPQUFXO0FBQ1gsR0FBVyxDQUFYLE9BQVc7QUFFYSxHQUE2QixDQUE3QixZQUE2QjtBQUNkLEdB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