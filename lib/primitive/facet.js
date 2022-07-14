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
                    ], 
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdLCJuYW1lcyI6WyJGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4IiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsImNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24iLCJtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBlcm11dGUiLCJwbGFjZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJOb3JtYWwiLCJjYWxjdWxhdGVFZGdlcyIsIkVkZ2UiLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyIsIm51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInNsaWNlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJwdXNoIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zIiwiaW50ZXJzZWN0aW9uIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4IiwiZW5kVmVydGV4UG9zaXRpb25JbmRleCIsInN0YXJ0VmVydGV4UG9zaXRpb24iLCJlbmRWZXJ0ZXhQb3NpdGlvbiIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IiLCJwb3NpdGlvbiIsIlZlcnRleCIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBZVFBLEtBQUs7Ozt5REFiVCxRQUFROzJEQUNOLFVBQVU7MkRBQ1YsVUFBVTtxQkFFQyxvQkFBb0I7eUJBQ2xCLGNBQWM7cUJBQ0Usb0JBQW9CO3dCQUNpQix1QkFBdUI7NEJBSXpELDJCQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFBLEFBQU1BLEtBQUssaUJBa0x2QixBQWxMWTthQUFNQSxLQUFLLENBQ1pDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLOztRQUNqQyxJQUFJLENBQUNGLFFBQVEsR0FBR0EsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURJLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUM7YUFDcEI7OztZQUVESSxHQUFRLEVBQVJBLFVBQVE7bUJBQVJBLFNB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