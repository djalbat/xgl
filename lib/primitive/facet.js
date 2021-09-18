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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwibmFtZXMiOlsiRWRnZSIsIk5vcm1hbCIsIlZlcnRleCIsInB1c2giLCJwZXJtdXRlIiwiVkVSVElDRVNfTEVOR1RIIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uIiwiaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyIsImNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsImNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiRmFjZXQiLCJjb25zdHJ1Y3RvciIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidmVydGV4UG9zaXRpb25zIiwibWFwIiwidmVydGV4IiwiZ2V0UG9zaXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxzIiwibm9ybWFsRXh0ZW50IiwiZ2V0RXh0ZW50IiwidmVydGV4Tm9ybWFsIiwidmVydGV4Tm9ybWFscyIsImdldFZlcnRleEluZGV4ZXMiLCJpbmRleCIsInZlcnRleEluZGV4IiwidmVydGV4SW5kZXhlcyIsImlzTWFza2VkIiwibWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwiZ2V0TWFza2luZ0VkZ2VzIiwibWlkUG9pbnRQb3NpdGlvbiIsIm1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyIsIm1hc2tlZCIsInBsYWNlcyIsInJvdGF0ZSIsInJvdGF0aW9uUXVhdGVybmlvbiIsImZvckVhY2giLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybSIsInNwbGl0V2l0aEludGVyc2VjdGlvbnMiLCJpbnRlcnNlY3Rpb25zIiwic21hbGxlckZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJub25OdWxsSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMiLCJzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyIsIm51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNsaWNlIiwic3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMiLCJpbmRleFR1cGxlcyIsInNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyIsIm5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCIsInNtYWxsZXJGYWNldCIsImZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IiLCJpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMiLCJpbnRlcnNlY3Rpb24iLCJzdGFydFZlcnRleFBvc2l0aW9uSW5kZXgiLCJlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4Iiwic3RhcnRWZXJ0ZXhQb3NpdGlvbiIsImVuZFZlcnRleFBvc2l0aW9uIiwiaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24iLCJpbmRleFR1cGxlIiwicG9zaXRpb25zIiwiaW5kZXhlcyIsImZhY2V0Iiwic21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IiLCJwb3NpdGlvbiIsImZyb21Qb3NpdGlvbiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFSyxHQUFRLENBQVIsS0FBUTtBQUNOLEdBQVUsQ0FBVixPQUFVO0FBQ1YsR0FBVSxDQUFWLE9BQVU7QUFFQyxHQUFvQixDQUFwQixNQUFvQjtBQUNsQixHQUFjLENBQWQsVUFBYztBQUNFLEdBQW9CLENBQXBCLE1BQW9CO0FBQ2lCLEdBQXVCLENBQXZCLFNBQXVCO0FBSXpELEdBQTJC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RSxhQUFhLEVBQUUsQ0FBQztJQUN4RyxHQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLEtBQUssRUFBSyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUs7UUFFOUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRWhDLEdBQUssQ0FBQyxNQUFNLEdBbk1ILE9BQVUsU0FtTUcsWUFBWSxDQUFDLFFBQVE7UUFFM0MsTUFBTSxDQUFDLE1BQU07SUFDZixDQUFDLEdBQ0QsWUFBWSxHQUFHLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxRQUFRLEVBQUUsYUFBYTtJQUUvRSxNQUFNLENBQUMsWUFBWTtBQUNyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwdXNoLCBwZXJtdXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZU1pZFBvaW50UG9zaXRpb24sIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9taWRQb2ludFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMsXG4gICAgICAgICBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgsXG4gICAgICAgICBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgICB0aGlzLmVkZ2VzID0gZWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNlcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNlcztcbiAgfVxuXG4gIGdldE5vcm1hbCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWw7XG4gIH1cblxuICBnZXRFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5lZGdlcztcbiAgfVxuICBcbiAgZ2V0VmVydGV4UG9zaXRpb25zKCkge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9ucyA9IHRoaXMudmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXRQb3NpdGlvbigpKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4UG9zaXRpb25zO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhOb3JtYWxzKCkge1xuICAgIGNvbnN0IG5vcm1hbEV4dGVudCA9IHRoaXMubm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbCA9IG5vcm1hbEV4dGVudCwgIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgICB2ZXJ0ZXhOb3JtYWwsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Tm9ybWFscztcbiAgfVxuICBcbiAgZ2V0VmVydGV4SW5kZXhlcyhpbmRleCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ID0gaW5kZXggKiAzLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDAsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDEsXG4gICAgICAgICAgICB2ZXJ0ZXhJbmRleCArIDIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4SW5kZXhlcztcbiAgfVxuXG4gIGlzTWFza2VkKG1hc2tpbmdGYWNldCkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlcyA9IG1hc2tpbmdGYWNldC5nZXRNYXNraW5nRWRnZXMoKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uID0gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih0aGlzLnZlcnRpY2VzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICAgIG1hc2tlZCA9IG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlczsgIC8vL1xuICAgIFxuICAgIHJldHVybiBtYXNrZWQ7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSBwZXJtdXRlKHRoaXMudmVydGljZXMsIHBsYWNlcyk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgcm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcywgTm9ybWFsKTtcblxuICAgIHRoaXMuZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh0aGlzLnZlcnRpY2VzLCBFZGdlKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodmVydGV4KSA9PiB2ZXJ0ZXguYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIHB1c2godmVydGV4UG9zaXRpb25zLCBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgaW5kZXhUdXBsZXMuZm9yRWFjaCgoaW5kZXhUdXBsZSkgPT4ge1xuICAgICAgY29uc3QgcG9zaXRpb25zID0gdmVydGV4UG9zaXRpb25zLCAgLy8vXG4gICAgICAgICAgICBpbmRleGVzID0gaW5kZXhUdXBsZSwgIC8vL1xuICAgICAgICAgICAgZmFjZXQgPSB0aGlzLCBcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldCA9IHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBpZiAoc21hbGxlckZhY2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yKHBvc2l0aW9ucywgaW5kZXhlcywgZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgY29uc3QgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSBwb3NpdGlvbnNbaW5kZXhdO1xuICAgIFxuICAgICAgICAgIHBvc2l0aW9uID0gcG9zaXRpb24uc2xpY2UoKTsgLy8vXG4gICAgXG4gICAgICAgICAgY29uc3QgdmVydGV4ID0gVmVydGV4LmZyb21Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdmVydGV4O1xuICAgICAgICB9KSxcbiAgICAgICAgc21hbGxlckZhY2V0ID0gZmFjZXQuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgcmV0dXJuIHNtYWxsZXJGYWNldDtcbn1cbiJdfQ==