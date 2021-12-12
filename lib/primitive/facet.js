"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _edge = _interopRequireDefault(require("./edge"));
var _normal = _interopRequireDefault(require("./normal"));
var _vertex = _interopRequireDefault(require("./vertex"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _facet = require("../utilities/facet");
var _midPoint = require("../utilities/midPoint");
var _intersection = require("../utilities/intersection");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Facet = /*#__PURE__*/ function() {
    function Facet(vertices, normal, edges) {
        _classCallCheck(this, Facet);
        this.vertices = vertices;
        this.normal = normal;
        this.edges = edges;
    }
    _createClass(Facet, [
        {
            key: "getVertices",
            value: function getVertices() {
                return this.vertices;
            }
        },
        {
            key: "getNormal",
            value: function getNormal() {
                return this.normal;
            }
        },
        {
            key: "getEdges",
            value: function getEdges() {
                return this.edges;
            }
        },
        {
            key: "getVertexPositions",
            value: function getVertexPositions() {
                var vertexPositions = this.vertices.map(function(vertex) {
                    return vertex.getPosition();
                });
                return vertexPositions;
            }
        },
        {
            key: "getVertexNormals",
            value: function getVertexNormals() {
                var normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
                    vertexNormal,
                    vertexNormal,
                    vertexNormal, 
                ];
                return vertexNormals;
            }
        },
        {
            key: "getVertexIndexes",
            value: function getVertexIndexes(index) {
                var vertexIndex = index * 3, vertexIndexes = [
                    vertexIndex + 0,
                    vertexIndex + 1,
                    vertexIndex + 2, 
                ];
                return vertexIndexes;
            }
        },
        {
            key: "isMasked",
            value: function isMasked(maskingFacet) {
                var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint).calculateMidPointPosition(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint).isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges; ///
                return masked;
            }
        },
        {
            key: "permute",
            value: function permute(places) {
                this.vertices = (0, _array).permute(this.vertices, places);
                this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
                this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.vertices.forEach(function(vertex) {
                    return vertex.rotate(rotationQuaternion);
                });
                this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
                this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.vertices.forEach(function(vertex) {
                    return vertex.applyTransform(transform);
                });
                this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
                this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
                var nonNullIntersections = (0, _intersection).calculateNonNullIntersections(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
                switch(nonNullIntersectionsLength){
                    case 2:
                        this.splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError);
                        break;
                    case 1:
                        this.splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError);
                        break;
                    case 0:
                        this.splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError);
                        break;
                }
            }
        },
        {
            key: "splitWithTwoNonNullIntersections",
            value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
                var nullIntersectionIndex = (0, _intersection).calculateNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = (0, _array).permute(intersections, places);
                intersections = intersections.slice(1); ///
                this.permute(places);
                var startVertexPositionIndexes = [
                    1,
                    2
                ], endVertexPositionIndexes = [
                    2,
                    0
                ], indexTuples = [
                    [
                        0,
                        1,
                        3
                    ],
                    [
                        3,
                        4,
                        0
                    ],
                    [
                        3,
                        2,
                        4
                    ], 
                ];
                this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
        },
        {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
                var nonNullIntersectionIndex = (0, _intersection).calculateNonNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = (0, _array).permute(intersections, places);
                intersections = intersections.slice(0, 1); ///
                this.permute(places);
                var startVertexPositionIndexes = [
                    0
                ], endVertexPositionIndexes = [
                    1
                ], indexTuples = [
                    [
                        0,
                        3,
                        2
                    ],
                    [
                        3,
                        1,
                        2
                    ], 
                ];
                this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
        },
        {
            key: "splitWithNoNonNullIntersections",
            value: function splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
                var smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError); ///
                smallerFacets.push(smallerFacet);
            }
        },
        {
            key: "splitWithIndexTuplesAndIntersections",
            value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
                var _this = this;
                var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                    var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection).calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
                    return intermediateVertexPosition;
                });
                (0, _array).push(vertexPositions, intermediateVertexPositions);
                indexTuples.forEach(function(indexTuple) {
                    var positions = vertexPositions, indexes = indexTuple, facet = _this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
                    if (smallerFacet !== null) {
                        smallerFacets.push(smallerFacet);
                    }
                });
            }
        }
    ]);
    return Facet;
}();
exports.default = Facet;
function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
    var vertices = indexes.map(function(index) {
        var position = positions[index];
        position = position.slice(); ///
        var vertex = _vertex.default.fromPosition(position);
        return vertex;
    }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
    return smallerFacet;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdLCJuYW1lcyI6WyJGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4IiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBlcm11dGUiLCJwbGFjZXMiLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zIiwic3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMiLCJudWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJzbGljZSIsInN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzIiwiZW5kVmVydGV4UG9zaXRpb25JbmRleGVzIiwiaW5kZXhUdXBsZXMiLCJzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMiLCJub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJzbWFsbGVyRmFjZXQiLCJmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yIiwicHVzaCIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyIsImludGVyc2VjdGlvbiIsInN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCIsImVuZFZlcnRleFBvc2l0aW9uSW5kZXgiLCJzdGFydFZlcnRleFBvc2l0aW9uIiwiZW5kVmVydGV4UG9zaXRpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiIsImluZGV4VHVwbGUiLCJwb3NpdGlvbnMiLCJpbmRleGVzIiwiZmFjZXQiLCJzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5k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