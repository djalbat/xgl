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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdLCJuYW1lcyI6WyJGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4IiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsImNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24iLCJtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBlcm11dGUiLCJwbGFjZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJOb3JtYWwiLCJjYWxjdWxhdGVFZGdlcyIsIkVkZ2UiLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyIsIm51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInNsaWNlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJwdXNoIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zIiwiaW50ZXJzZWN0aW9uIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4IiwiZW5kVmVydGV4UG9zaXRpb25JbmRleCIsInN0YXJ0VmVydGV4UG9zaXRpb24iLCJlbmRWZXJ0ZXhQb3NpdGlvbiIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IiLCJwb3NpdGlvbiIsIlZlcnRleCIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFSyxHQUFRLENBQVIsS0FBUTtBQUNOLEdBQVUsQ0FBVixPQUFVO0FBQ1YsR0FBVSxDQUFWLE9BQVU7QUFFQyxHQUFvQixDQUFwQixNQUFvQjtBQUNsQixHQUFjLENBQWQsVUFBYztBQUNFLEdBQW9CLENBQXBCLE1BQW9CO0FBQ2lCLEdBQXVCLENBQXZCLFNBQXVCO0FBSXpELEdBQTJCLENBQTNCLGFBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpEQSxLQUFLLGlCQUFYLFFBQVE7YUFBRkEsS0FBSyxDQUNaQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSzs7UUFDakMsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07UUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7Ozs7WUFHcEJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDSCxRQUFRO1lBQ3RCLENBQUM7OztZQUVESSxHQUFTLEVBQVRBLENBQVM7bUJBQVRBLFFBQVEsQ0FBUkEsU0FBUyxHQUFHLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLElB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