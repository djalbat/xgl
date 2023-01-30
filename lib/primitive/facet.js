"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Facet;
    }
});
var _edge = /*#__PURE__*/ _interopRequireDefault(require("./edge"));
var _normal = /*#__PURE__*/ _interopRequireDefault(require("./normal"));
var _vertex = /*#__PURE__*/ _interopRequireDefault(require("./vertex"));
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
                    vertexNormal
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
                    vertexIndex + 2
                ];
                return vertexIndexes;
            }
        },
        {
            key: "isMasked",
            value: function isMasked(maskingFacet) {
                var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges; ///
                return masked;
            }
        },
        {
            key: "permute",
            value: function permute(places) {
                this.vertices = (0, _array.permute)(this.vertices, places);
                this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
                this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
        },
        {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.vertices.forEach(function(vertex) {
                    return vertex.rotate(rotationQuaternion);
                });
                this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
                this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.vertices.forEach(function(vertex) {
                    return vertex.applyTransform(transform);
                });
                this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
                this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
        },
        {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
                var nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
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
                var nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = (0, _array.permute)(intersections, places);
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
                    ]
                ];
                this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
        },
        {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
                var nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = (0, _array.permute)(intersections, places);
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
                    ]
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
                    var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
                    return intermediateVertexPosition;
                });
                (0, _array.push)(vertexPositions, intermediateVertexPositions);
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
function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
    var vertices = indexes.map(function(index) {
        var position = positions[index];
        position = position.slice(); ///
        var vertex = _vertex.default.fromPosition(position);
        return vertex;
    }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
    return smallerFacet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdLCJuYW1lcyI6WyJGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4IiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsImNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24iLCJtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBlcm11dGUiLCJwbGFjZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJOb3JtYWwiLCJjYWxjdWxhdGVFZGdlcyIsIkVkZ2UiLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyIsIm51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInNsaWNlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJwdXNoIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zIiwiaW50ZXJzZWN0aW9uIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4IiwiZW5kVmVydGV4UG9zaXRpb25JbmRleCIsInN0YXJ0VmVydGV4UG9zaXRpb24iLCJlbmRWZXJ0ZXhQb3NpdGlvbiIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IiLCJwb3NpdGlvbiIsIlZlcnRleCIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7eURBYko7MkRBQ0U7MkRBQ0E7cUJBRVc7eUJBQ0U7cUJBQ2dCO3dCQUNxQzs0QkFJbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSxzQkFrTGxCLEFBbExZO2FBQU1BLE1BQ1BDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLOzhCQURoQkg7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7aUJBSklIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQjtnQkFDbkIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxHQUFHLENBQUMsU0FBQ0M7MkJBQVdBLE9BQU9DLFdBQVc7O2dCQUV4RSxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQjtnQkFDakIsSUFBTUMsZUFBZSxJQUFJLENBQUNYLE1BQU0sQ0FBQ1ksU0FBUyxJQUNwQ0MsZUFBZUYsY0FDZkcsZ0JBQWdCO29CQUNkRDtvQkFDQUE7b0JBQ0FBO2lCQUNEO2dCQUVQLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxLQUFLLEVBQUU7Z0JBQ3RCLElBQU1DLGNBQWNELFFBQVEsR0FDdEJFLGdCQUFnQjtvQkFDZEQsY0FBYztvQkFDZEEsY0FBYztvQkFDZEEsY0FBYztpQkFDZjtnQkFFUCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFlBQVksRUFBRTtnQkFDckIsSUFBTUMsZUFBZUQsYUFBYUUsZUFBZSxJQUMzQ0MsbUJBQW1CQyxJQUFBQSxtQ0FBeUIsRUFBQyxJQUFJLENBQUN6QixRQUFRLEdBQzFEMEIsMENBQTBDQyxJQUFBQSxtREFBeUMsRUFBQ0gsa0JBQWtCRixlQUN0R00sU0FBU0YseUNBQTBDLEdBQUc7Z0JBRTVELE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsTUFBTSxFQUFFO2dCQUNkLElBQUksQ0FBQzlCLFFBQVEsR0FBRzZCLElBQUFBLGNBQU8sRUFBQyxJQUFJLENBQUM3QixRQUFRLEVBQUU4QjtnQkFFdkMsSUFBSSxDQUFDN0IsTUFBTSxHQUFHOEIsSUFBQUEsc0JBQWUsRUFBQyxJQUFJLENBQUMvQixRQUFRLEVBQUVnQyxlQUFNO2dCQUVuRCxJQUFJLENBQUM5QixLQUFLLEdBQUcrQixJQUFBQSxxQkFBYyxFQUFDLElBQUksQ0FBQ2pDLFFBQVEsRUFBRWtDLGFBQUk7WUFDakQ7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0Msa0JBQWtCLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQ3FDLE9BQU8sQ0FBQyxTQUFDNUI7MkJBQVdBLE9BQU8wQixNQUFNLENBQUNDOztnQkFFaEQsSUFBSSxDQUFDbkMsTUFBTSxHQUFHOEIsSUFBQUEsc0JBQWUsRUFBQyxJQUFJLENBQUMvQixRQUFRLEVBQUVnQyxlQUFNO2dCQUVuRCxJQUFJLENBQUM5QixLQUFLLEdBQUcrQixJQUFBQSxxQkFBYyxFQUFDLElBQUksQ0FBQ2pDLFFBQVEsRUFBRWtDLGFBQUk7WUFDakQ7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFJLENBQUN2QyxRQUFRLENBQUNxQyxPQUFPLENBQUMsU0FBQzVCOzJCQUFXQSxPQUFPNkIsY0FBYyxDQUFDQzs7Z0JBRXhELElBQUksQ0FBQ3RDLE1BQU0sR0FBRzhCLElBQUFBLHNCQUFlLEVBQUMsSUFBSSxDQUFDL0IsUUFBUSxFQUFFZ0MsZUFBTTtnQkFFbkQsSUFBSSxDQUFDOUIsS0FBSyxHQUFHK0IsSUFBQUEscUJBQWMsRUFBQyxJQUFJLENBQUNqQyxRQUFRLEVBQUVrQyxhQUFJO1lBQ2pEOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QkMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRTtnQkFDbEUsSUFBTUMsdUJBQXVCQyxJQUFBQSwyQ0FBNkIsRUFBQ0osZ0JBQ3JESyw2QkFBNkJGLHFCQUFxQkcsTUFBTTtnQkFFOUQsT0FBUUQ7b0JBQ04sS0FBSzt3QkFDSCxJQUFJLENBQUNFLGdDQUFnQyxDQUFDUCxlQUFlQyxlQUFlQzt3QkFDcEUsS0FBTTtvQkFFUixLQUFLO3dCQUNILElBQUksQ0FBQ00sK0JBQStCLENBQUNSLGVBQWVDLGVBQWVDO3dCQUNuRSxLQUFNO29CQUVSLEtBQUs7d0JBQ0gsSUFBSSxDQUFDTywrQkFBK0IsQ0FBQ1QsZUFBZUMsZUFBZUM7d0JBQ25FLEtBQU07Z0JBQ1Y7WUFDRjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQ0FBaUNQLGFBQWEsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7Z0JBQzVFLElBQU1RLHdCQUF3QkMsSUFBQUEsNENBQThCLEVBQUNYLGdCQUN2RFgsU0FBUyxBQUFDdUIsQ0FBQUEsMEJBQWUsR0FBR0YscUJBQW9CLElBQUtFLDBCQUFlO2dCQUUxRVosZ0JBQWdCWixJQUFBQSxjQUFPLEVBQUNZLGVBQWVYO2dCQUV2Q1csZ0JBQWdCQSxjQUFjYSxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUUzQyxJQUFJLENBQUN6QixPQUFPLENBQUNDO2dCQUViLElBQU15Qiw2QkFBNkI7b0JBQUU7b0JBQUc7aUJBQUcsRUFDckNDLDJCQUEyQjtvQkFBRTtvQkFBRztpQkFBRyxFQUNuQ0MsY0FBYztvQkFFWjt3QkFBRTt3QkFBRzt3QkFBRztxQkFBRztvQkFDWDt3QkFBRTt3QkFBRzt3QkFBRztxQkFBRztvQkFDWDt3QkFBRTt3QkFBRzt3QkFBRztxQkFBRztpQkFFWjtnQkFFUCxJQUFJLENBQUNDLG9DQUFvQyxDQUFDSCw0QkFBNEJDLDBCQUEwQkMsYUFBYWhCLGVBQWVDLGVBQWVDO1lBQzdJOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ1IsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRTtnQkFDM0UsSUFBTWdCLDJCQUEyQkMsSUFBQUEsK0NBQWlDLEVBQUNuQixnQkFDN0RYLFNBQVMsQUFBQ3VCLENBQUFBLDBCQUFlLEdBQUdNLHdCQUF1QixJQUFLTiwwQkFBZTtnQkFFN0VaLGdCQUFnQlosSUFBQUEsY0FBTyxFQUFDWSxlQUFlWDtnQkFFdkNXLGdCQUFnQkEsY0FBY2EsS0FBSyxDQUFDLEdBQUcsSUFBSyxHQUFHO2dCQUUvQyxJQUFJLENBQUN6QixPQUFPLENBQUNDO2dCQUViLElBQU15Qiw2QkFBNkI7b0JBQUU7aUJBQUcsRUFDbENDLDJCQUEyQjtvQkFBRTtpQkFBRyxFQUNoQ0MsY0FBYztvQkFFWjt3QkFBRTt3QkFBRzt3QkFBRztxQkFBRztvQkFDWDt3QkFBRTt3QkFBRzt3QkFBRztxQkFBRztpQkFFWjtnQkFFUCxJQUFJLENBQUNDLG9DQUFvQyxDQUFDSCw0QkFBNEJDLDBCQUEwQkMsYUFBYWhCLGVBQWVDLGVBQWVDO1lBQzdJOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ1QsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRTtnQkFDM0UsSUFBTWtCLGVBQWUsSUFBSSxDQUFDQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUM5RCxRQUFRLEVBQUUyQyxnQkFBaUIsR0FBRztnQkFFMUZELGNBQWNxQixJQUFJLENBQUNGO1lBQ3JCOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLHFDQUFxQ0gsMEJBQTBCLEVBQUVDLHdCQUF3QixFQUFFQyxXQUFXLEVBQUVoQixhQUFhLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxFQUFFOztnQkFDbkosSUFBTXBDLGtCQUFrQixJQUFJLENBQUNELGtCQUFrQixJQUN6QzBELDhCQUE4QnZCLGNBQWNqQyxHQUFHLENBQUMsU0FBQ3lELGNBQWNoRCxPQUFVO29CQUN2RSxJQUFNaUQsMkJBQTJCWCwwQkFBMEIsQ0FBQ3RDLE1BQU0sRUFDNURrRCx5QkFBeUJYLHdCQUF3QixDQUFDdkMsTUFBTSxFQUN4RG1ELHNCQUFzQjdELGVBQWUsQ0FBQzJELHlCQUF5QixFQUMvREcsb0JBQW9COUQsZUFBZSxDQUFDNEQsdUJBQXVCLEVBQzNERyw2QkFBNkJDLElBQUFBLGlEQUFtQyxFQUFDSCxxQkFBcUJDLG1CQUFtQko7b0JBRS9HLE9BQU9LO2dCQUNUO2dCQUVOUCxJQUFBQSxXQUFJLEVBQUN4RCxpQkFBaUJ5RDtnQkFFdEJQLFlBQVlwQixPQUFPLENBQUMsU0FBQ21DLFlBQWU7b0JBQ2xDLElBQU1DLFlBQVlsRSxpQkFDWm1FLFVBQVVGLFlBQ1ZHLGVBQ0FkLGVBQWVlLHNEQUFzREgsV0FBV0MsU0FBU0MsT0FBT2hDO29CQUV0RyxJQUFJa0IsaUJBQWlCLElBQUksRUFBRTt3QkFDekJuQixjQUFjcUIsSUFBSSxDQUFDRjtvQkFDckIsQ0FBQztnQkFDSDtZQUNGOzs7V0EvS21COUQ7O0FBa0xyQixTQUFTNkUsc0RBQXNESCxTQUFTLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFaEMsYUFBYSxFQUFFO0lBQ3ZHLElBQU0zQyxXQUFXMEUsUUFBUWxFLEdBQUcsQ0FBQyxTQUFDUyxPQUFVO1FBQ2hDLElBQUk0RCxXQUFXSixTQUFTLENBQUN4RCxNQUFNO1FBRS9CNEQsV0FBV0EsU0FBU3ZCLEtBQUssSUFBSSxHQUFHO1FBRWhDLElBQU03QyxTQUFTcUUsZUFBTSxDQUFDQyxZQUFZLENBQUNGO1FBRW5DLE9BQU9wRTtJQUNULElBQ0FvRCxlQUFlYyxNQUFNYiw0QkFBNEIsQ0FBQzlELFVBQVUyQztJQUVsRSxPQUFPa0I7QUFDVCJ9