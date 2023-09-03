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
var _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
var _normal = /*#__PURE__*/ _interop_require_default(require("./normal"));
var _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _facet = require("../utilities/facet");
var _midPoint = require("../utilities/midPoint");
var _intersection = require("../utilities/intersection");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Facet = /*#__PURE__*/ function() {
    function Facet(vertices, normal, edges) {
        _class_call_check(this, Facet);
        this.vertices = vertices;
        this.normal = normal;
        this.edges = edges;
    }
    _create_class(Facet, [
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
                    var vertexPosition = vertex.getPosition();
                    return vertexPosition;
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
                    vertex.rotate(rotationQuaternion);
                });
                this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
                this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.vertices.forEach(function(vertex) {
                    vertex.applyTransform(transform);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uID0gdmVydGV4LmdldFBvc2l0aW9uKCk7XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbjtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB7XG4gICAgICB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIHNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGggPSBub25OdWxsSW50ZXJzZWN0aW9ucy5sZW5ndGg7XG5cbiAgICBzd2l0Y2ggKG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoKSB7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAwIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMSk7IC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSwgMiBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMiwgMCBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDEsIDMgXSxcbiAgICAgICAgICAgIFsgMywgNCwgMCBdLFxuICAgICAgICAgICAgWyAzLCAyLCA0IF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDAsIDEpOyAgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAwIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMywgMiBdLFxuICAgICAgICAgICAgWyAzLCAxLCAyIF0sXG5cbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5zcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0ID0gdGhpcy5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHRoaXMudmVydGljZXMsIG1hcmdpbk9mRXJyb3IpOyAgLy8vXG5cbiAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgfVxuXG4gIHNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zID0gaW50ZXJzZWN0aW9ucy5tYXAoKGludGVyc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCA9IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXggPSBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbZW5kVmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiA9IGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zKTtcblxuICAgIGluZGV4VHVwbGVzLmZvckVhY2goKGluZGV4VHVwbGUpID0+IHtcbiAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHZlcnRleFBvc2l0aW9ucywgIC8vL1xuICAgICAgICAgICAgaW5kZXhlcyA9IGluZGV4VHVwbGUsICAvLy9cbiAgICAgICAgICAgIGZhY2V0ID0gdGhpcywgXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXQgPSBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0ZhY2V0QW5kTWFyZ2luT2ZFcnJvcihwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gIGNvbnN0IHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoKGluZGV4KSA9PiB7XG4gICAgICAgICAgbGV0IHBvc2l0aW9uID0gcG9zaXRpb25zW2luZGV4XTtcbiAgICBcbiAgICAgICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uLnNsaWNlKCk7IC8vL1xuICAgIFxuICAgICAgICAgIGNvbnN0IHZlcnRleCA9IFZlcnRleC5mcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSksXG4gICAgICAgIHNtYWxsZXJGYWNldCA9IGZhY2V0LmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBzbWFsbGVyRmFjZXQ7XG59XG4iXSwibmFtZXMiOlsiRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImdldFZlcnRleFBvc2l0aW9ucyIsInZlcnRleFBvc2l0aW9ucyIsIm1hcCIsInZlcnRleCIsInZlcnRleFBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsImNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24iLCJtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBlcm11dGUiLCJwbGFjZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJOb3JtYWwiLCJjYWxjdWxhdGVFZGdlcyIsIkVkZ2UiLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJmb3JFYWNoIiwiYXBwbHlUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiaW50ZXJzZWN0aW9ucyIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwibm9uTnVsbEludGVyc2VjdGlvbnMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyIsIm51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInNsaWNlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJwdXNoIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb25zIiwiaW50ZXJzZWN0aW9uIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4IiwiZW5kVmVydGV4UG9zaXRpb25JbmRleCIsInN0YXJ0VmVydGV4UG9zaXRpb24iLCJlbmRWZXJ0ZXhQb3NpdGlvbiIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IiLCJwb3NpdGlvbiIsIlZlcnRleCIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7MkRBYko7NkRBQ0U7NkRBQ0E7cUJBRVc7eUJBQ0U7cUJBQ2dCO3dCQUNxQzs0QkFJbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsSUFBQSxBQUFNQSxzQkEwTGxCLEFBMUxZO2FBQU1BLE1BQ1BDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLO2dDQURoQkg7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBSklIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxL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