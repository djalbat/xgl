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
const _edge = /*#__PURE__*/ _interop_require_default(require("./edge"));
const _normal = /*#__PURE__*/ _interop_require_default(require("./normal"));
const _vertex = /*#__PURE__*/ _interop_require_default(require("./vertex"));
const _array = require("../utilities/array");
const _constants = require("../constants");
const _facet = require("../utilities/facet");
const _midPoint = require("../utilities/midPoint");
const _intersection = require("../utilities/intersection");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Facet {
    constructor(vertices, normal, edges){
        this.vertices = vertices;
        this.normal = normal;
        this.edges = edges;
    }
    getVertices() {
        return this.vertices;
    }
    getNormal() {
        return this.normal;
    }
    getEdges() {
        return this.edges;
    }
    getVertexPositions() {
        const vertexPositions = this.vertices.map((vertex)=>{
            const vertexPosition = vertex.getPosition();
            return vertexPosition;
        });
        return vertexPositions;
    }
    getVertexNormals() {
        const normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
            vertexNormal,
            vertexNormal,
            vertexNormal
        ];
        return vertexNormals;
    }
    getVertexIndexes(index) {
        const vertexIndex = index * 3, vertexIndexes = [
            vertexIndex + 0,
            vertexIndex + 1,
            vertexIndex + 2
        ];
        return vertexIndexes;
    }
    isMasked(maskingFacet) {
        const maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint.calculateMidPointPosition)(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint.isMidPointPositionToOneSideOfMaskingEdges)(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges; ///
        return masked;
    }
    permute(places) {
        this.vertices = (0, _array.permute)(this.vertices, places);
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
    }
    rotate(rotationQuaternion) {
        this.vertices.forEach((vertex)=>{
            vertex.rotate(rotationQuaternion);
        });
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
    }
    applyTransform(transform) {
        this.vertices.forEach((vertex)=>{
            vertex.applyTransform(transform);
        });
        this.normal = (0, _facet.calculateNormal)(this.vertices, _normal.default);
        this.edges = (0, _facet.calculateEdges)(this.vertices, _edge.default);
    }
    splitWithIntersections(intersections, smallerFacets, marginOfError) {
        const nonNullIntersections = (0, _intersection.calculateNonNullIntersections)(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
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
    splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
        const nullIntersectionIndex = (0, _intersection.calculateNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
        intersections = (0, _array.permute)(intersections, places);
        intersections = intersections.slice(1); ///
        this.permute(places);
        const startVertexPositionIndexes = [
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
    splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
        const nonNullIntersectionIndex = (0, _intersection.calculateNonNullIntersectionIndex)(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
        intersections = (0, _array.permute)(intersections, places);
        intersections = intersections.slice(0, 1); ///
        this.permute(places);
        const startVertexPositionIndexes = [
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
    splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
        const smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError); ///
        smallerFacets.push(smallerFacet);
    }
    splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
        const vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map((intersection, index)=>{
            const startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection.calculateIntermediateVertexPosition)(startVertexPosition, endVertexPosition, intersection);
            return intermediateVertexPosition;
        });
        (0, _array.add)(vertexPositions, intermediateVertexPositions);
        indexTuples.forEach((indexTuple)=>{
            const positions = vertexPositions, indexes = indexTuple, facet = this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
            if (smallerFacet !== null) {
                smallerFacets.push(smallerFacet);
            }
        });
    }
}
function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
    const vertices = indexes.map((index)=>{
        let position = positions[index];
        position = position.slice(); ///
        const vertex = _vertex.default.fromPosition(position);
        return vertex;
    }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
    return smallerFacet;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuL2VkZ2VcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBhZGQsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4ge1xuICAgICAgY29uc3QgdmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXguZ2V0UG9zaXRpb24oKTtcblxuICAgICAgcmV0dXJuIHZlcnRleFBvc2l0aW9uO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHtcbiAgICAgIHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCkgPT4ge1xuICAgICAgdmVydGV4LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgbm9uTnVsbEludGVyc2VjdGlvbnMgPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCA9IG5vbk51bGxJbnRlcnNlY3Rpb25zLmxlbmd0aDtcblxuICAgIHN3aXRjaCAobm9uTnVsbEludGVyc2VjdGlvbnNMZW5ndGgpIHtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDEgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDAgOlxuICAgICAgICB0aGlzLnNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRXaXRoVHdvTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgxKTsgLy8vXG5cbiAgICB0aGlzLnBlcm11dGUocGxhY2VzKTtcblxuICAgIGNvbnN0IHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAxLCAyIF0sXG4gICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzID0gWyAyLCAwIF0sXG4gICAgICAgICAgaW5kZXhUdXBsZXMgPSBbXG5cbiAgICAgICAgICAgIFsgMCwgMSwgMyBdLFxuICAgICAgICAgICAgWyAzLCA0LCAwIF0sXG4gICAgICAgICAgICBbIDMsIDIsIDQgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uSW5kZXggPSBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucyksXG4gICAgICAgICAgcGxhY2VzID0gKFZFUlRJQ0VTX0xFTkdUSCAtIG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCkgJSBWRVJUSUNFU19MRU5HVEg7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gcGVybXV0ZShpbnRlcnNlY3Rpb25zLCBwbGFjZXMpO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IGludGVyc2VjdGlvbnMuc2xpY2UoMCwgMSk7ICAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDAgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAzLCAyIF0sXG4gICAgICAgICAgICBbIDMsIDEsIDIgXSxcblxuICAgICAgICAgIF07XG5cbiAgICB0aGlzLnNwbGl0V2l0aEluZGV4VHVwbGVzQW5kSW50ZXJzZWN0aW9ucyhzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcywgZW5kVmVydGV4UG9zaXRpb25JbmRleGVzLCBpbmRleFR1cGxlcywgaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdFdpdGhOb05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXQgPSB0aGlzLmZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodGhpcy52ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcik7ICAvLy9cblxuICAgIHNtYWxsZXJGYWNldHMucHVzaChzbWFsbGVyRmFjZXQpO1xuICB9XG5cbiAgc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbnMgPSBpbnRlcnNlY3Rpb25zLm1hcCgoaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4UG9zaXRpb25JbmRleCA9IGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW3N0YXJ0VmVydGV4UG9zaXRpb25JbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleFBvc2l0aW9uc1tlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uID0gY2FsY3VsYXRlSW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24oc3RhcnRWZXJ0ZXhQb3NpdGlvbiwgZW5kVmVydGV4UG9zaXRpb24sIGludGVyc2VjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIl0sIm5hbWVzIjpbIkZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZXJ0ZXhQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwiZ2V0VmVydGV4Tm9ybWFscyIsIm5vcm1hbEV4dGVudCIsImdldEV4dGVudCIsInZlcnRleE5vcm1hbCIsInZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiaW5kZXgiLCJ2ZXJ0ZXhJbmRleCIsInZlcnRleEluZGV4ZXMiLCJpc01hc2tlZCIsIm1hc2tpbmdGYWNldCIsIm1hc2tpbmdFZGdlcyIsImdldE1hc2tpbmdFZGdlcyIsIm1pZFBvaW50UG9zaXRpb24iLCJjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uIiwibWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzIiwiaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMiLCJtYXNrZWQiLCJwZXJtdXRlIiwicGxhY2VzIiwiY2FsY3VsYXRlTm9ybWFsIiwiTm9ybWFsIiwiY2FsY3VsYXRlRWRnZXMiLCJFZGdlIiwicm90YXRlIiwicm90YXRpb25RdWF0ZXJuaW9uIiwiZm9yRWFjaCIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwic3BsaXRXaXRoSW50ZXJzZWN0aW9ucyIsImludGVyc2VjdGlvbnMiLCJzbWFsbGVyRmFjZXRzIiwibWFyZ2luT2ZFcnJvciIsIm5vbk51bGxJbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbnMiLCJub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zIiwic3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbiIsInNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMiLCJudWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJWRVJUSUNFU19MRU5HVEgiLCJzbGljZSIsInN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzIiwiZW5kVmVydGV4UG9zaXRpb25JbmRleGVzIiwiaW5kZXhUdXBsZXMiLCJzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMiLCJub25OdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9uSW5kZXgiLCJzbWFsbGVyRmFjZXQiLCJmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yIiwicHVzaCIsImludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyIsImludGVyc2VjdGlvbiIsInN0YXJ0VmVydGV4UG9zaXRpb25JbmRleCIsImVuZFZlcnRleFBvc2l0aW9uSW5kZXgiLCJzdGFydFZlcnRleFBvc2l0aW9uIiwiZW5kVmVydGV4UG9zaXRpb24iLCJpbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbiIsImNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uIiwiYWRkIiwiaW5kZXhUdXBsZSIsInBvc2l0aW9ucyIsImluZGV4ZXMiLCJmYWNldCIsInNtYWxsZXJGYWNldEZyb21Qb3NpdGlvbnNJbmRleGVzRmFjZXRBbmRNYXJnaW5PZkVycm9yIiwicG9zaXRpb24iLCJWZXJ0ZXgiLCJmcm9tUG9zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBcUJBOzs7NkRBYko7K0RBQ0U7K0RBQ0E7dUJBRVU7MkJBQ0c7dUJBQ2dCOzBCQUNxQzs4QkFJbEM7Ozs7OztBQUVwQyxNQUFNQTtJQUNuQixZQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxDQUFFO1FBQ25DLElBQUksQ0FBQ0YsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO0lBQ3BCO0lBRUFJLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxxQkFBcUI7UUFDbkIsTUFBTUMsa0JBQWtCLElBQUksQ0FBQ1AsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQ0M7WUFDekMs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