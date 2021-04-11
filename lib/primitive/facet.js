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
var Facet = function() {
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
                var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = _midPoint.calculateMidPointPosition(this.vertices), midPointPositionToOneSideOfMaskingEdges = _midPoint.isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges; ///
                return masked;
            }
        },
        {
            key: "permute",
            value: function permute(places) {
                this.vertices = _array.permute(this.vertices, places);
                this.normal = _facet.calculateNormal(this.vertices, _normal.default);
                this.edges = _facet.calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.vertices.forEach(function(vertex) {
                    return vertex.rotate(rotationQuaternion);
                });
                this.normal = _facet.calculateNormal(this.vertices, _normal.default);
                this.edges = _facet.calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.vertices.forEach(function(vertex) {
                    return vertex.applyTransform(transform);
                });
                this.normal = _facet.calculateNormal(this.vertices, _normal.default);
                this.edges = _facet.calculateEdges(this.vertices, _edge.default);
            }
        },
        {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets) {
                var nonNullIntersections = _intersection.calculateNonNullIntersections(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
                switch(nonNullIntersectionsLength){
                    case 2:
                        this.splitWithTwoNonNullIntersections(intersections, smallerFacets);
                        break;
                    case 1:
                        this.splitWithOneNonNullIntersection(intersections, smallerFacets);
                        break;
                    case 0:
                        this.splitWithNoNonNullIntersections(intersections, smallerFacets);
                        break;
                }
            }
        },
        {
            key: "splitWithTwoNonNullIntersections",
            value: function splitWithTwoNonNullIntersections(intersections, smallerFacets) {
                var nullIntersectionIndex = _intersection.calculateNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = _array.permute(intersections, places);
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
                this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
            }
        },
        {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets) {
                var nonNullIntersectionIndex = _intersection.calculateNonNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
                intersections = _array.permute(intersections, places);
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
                this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets);
            }
        },
        {
            key: "splitWithNoNonNullIntersections",
            value: function splitWithNoNonNullIntersections(intersections, smallerFacets) {
                var smallerFacet = this.fromVertices(this.vertices); ///
                smallerFacets.push(smallerFacet);
            }
        },
        {
            key: "splitWithIndexTuplesAndIntersections",
            value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets) {
                var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                    var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = _intersection.calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
                    return intermediateVertexPosition;
                });
                _array.push(vertexPositions, intermediateVertexPositions);
                indexTuples.forEach((function(indexTuple) {
                    var positions = vertexPositions, indexes = indexTuple, facet = this, smallerFacet = smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet);
                    if (smallerFacet !== null) {
                        smallerFacets.push(smallerFacet);
                    }
                }).bind(this));
            }
        }
    ]);
    return Facet;
}();
exports.default = Facet;
function smallerFacetFromPositionsIndexesAndFacet(positions, indexes, facet) {
    var vertices = indexes.map(function(index) {
        var position = positions[index];
        position = position.slice(); ///
        var vertex = _vertex.default.fromPosition(position);
        return vertex;
    }), smallerFacet = facet.fromVertices(vertices);
    return smallerFacet;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cyk7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlcyh0aGlzLnZlcnRpY2VzKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNBbmRGYWNldChwb3NpdGlvbnMsIGluZGV4ZXMsIGZhY2V0KTtcblxuICAgICAgaWYgKHNtYWxsZXJGYWNldCAhPT0gbnVsbCkge1xuICAgICAgICBzbWFsbGVyRmFjZXRzLnB1c2goc21hbGxlckZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbWFsbGVyRmFjZXRGcm9tUG9zaXRpb25zSW5kZXhlc0FuZEZhY2V0KHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzKHZlcnRpY2VzKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRUssS0FBUTtJQUNOLE9BQVU7SUFDVixPQUFVO0lBRUMsTUFBb0I7SUFDbEIsVUFBYztJQUNFLE1BQW9CO0lBQ2lCLFNBQXVCO0lBSXpELGFBQTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpELEtBQUs7YUFBTCxLQUFLLENBQ1osUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLOzhCQURoQixLQUFLO2FBRWpCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLE1BQU0sR0FBRyxNQUFNO2FBQ2YsS0FBSyxHQUFHLEtBQUs7O2lCQUpELEtBQUs7O1lBT3hCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVc7NEJBQ0csUUFBUTs7OztZQUd0QixHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTOzRCQUNLLE1BQU07Ozs7WUFHcEIsR0FBUSxHQUFSLFFBQVE7NEJBQVIsUUFBUTs0QkFDTSxLQUFLOzs7O1lBR25CLEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCO29CQUNWLGVBQWUsUUFBUSxRQUFRLENBQUMsR0FBRyxVQUFFLE1BQU07MkJBQUssTUFBTSxDQUFDLFdBQVc7O3VCQUVqRSxlQUFlOzs7O1lBR3hCLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdC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