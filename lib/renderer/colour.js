"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourRenderer;
    }
});
const _renderer = /*#__PURE__*/ _interop_require_wildcard(require("../renderer"));
const _colour = /*#__PURE__*/ _interop_require_default(require("../renderer/data/colour"));
const _vertexShader = /*#__PURE__*/ _interop_require_default(require("./source/colour/vertexShader"));
const _fragmentShader = /*#__PURE__*/ _interop_require_default(require("./source/colour/fragmentShader"));
const _colour1 = /*#__PURE__*/ _interop_require_default(require("../renderer/buffers/colour"));
const _uniform = /*#__PURE__*/ _interop_require_default(require("./locations/colour/uniform"));
const _attribute = /*#__PURE__*/ _interop_require_default(require("./locations/colour/attribute"));
const _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
class ColourRenderer extends _renderer.default {
    getVertexColourAttributeLocation() {
        const attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
        return vertexColourAttributeLocation;
    }
    createBuffers(canvas) {
        const facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
        facets.forEach((facet, index)=>{
            const colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
            (0, _array.add)(vertexIndexes, facetVertexIndexes);
            (0, _array.add)(vertexNormals, facetVertexNormals);
            (0, _array.add)(vertexPositions, facetVertexPositions);
            (0, _array.add)(vertexColours, colouredFacetVertexColours);
        });
        const rendererData = this.getRendererData();
        rendererData.addVertexIndexes(vertexIndexes);
        rendererData.addVertexNormals(vertexNormals);
        rendererData.addVertexColours(vertexColours);
        rendererData.addVertexPositions(vertexPositions);
        const rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
        rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
    }
    bindBuffers(canvas) {
        const rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
        rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
    }
    render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
        const program = this.getProgram();
        canvas.useProgram(program);
        this.bindBuffers(canvas);
        const renderer = this; ///
        canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
        const count = this.getCount(), start = 0, finish = count; ///
        canvas.drawElements(start, finish);
    }
    static fromNothing(canvas) {
        const facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        return colourRenderer;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9jb2xvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91clJlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuICBnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICBjb25zdCBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0aGlzLmdldEF0dHJpYnV0ZUxvY2F0aW9ucygpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZXR1cm4gdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzID0gY29sb3VyZWRGYWNldC5nZXRWZXJ0ZXhDb2xvdXJzKCk7XG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4Q29sb3VycywgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleENvbG91cnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleENvbG91cnNEYXRhKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCk7XG4gICAgXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gdGhpcy5nZXRQcm9ncmFtKCk7XG5cbiAgICBjYW52YXMudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHRoaXMuYmluZEJ1ZmZlcnMoY2FudmFzKTtcblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpczsgIC8vL1xuXG4gICAgY2FudmFzLnJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG5cbiAgICBjb25zdCBjb3VudCA9IHRoaXMuZ2V0Q291bnQoKSxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IENvbG91clJlbmRlcmVyRGF0YS5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyQnVmZmVycyA9IENvbG91clJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGNvbG91clVuaWZvcm1Mb2NhdGlvbnMgPSBDb2xvdXJVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyQXR0cmlidXRlTG9jYXRpb25zID0gQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgcmVuZGVyZXJEYXRhID0gY29sb3VyUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gY29sb3VyUmVuZGVyZXJCdWZmZXJzLCAgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IGNvbG91clVuaWZvcm1Mb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMsICAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG5ldyBDb2xvdXJSZW5kZXJlcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJSZW5kZXJlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbG91clJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiY3JlYXRlQnVmZmVycyIsImNhbnZhcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Q29sb3VycyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwiY29sb3VyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyIsImdldFZlcnRleENvbG91cnMiLCJhZGQiLCJyZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleENvbG91cnMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJyZW5kZXJlckJ1ZmZlcnMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhQb3NpdGlvbnNEYXRhIiwiZ2V0VmVydGV4UG9zaXRpb25zRGF0YSIsInZlcnRleE5vcm1hbHNEYXRhIiwiZ2V0VmVydGV4Tm9ybWFsc0RhdGEiLCJ2ZXJ0ZXhJbmRleGVzRGF0YSIsImdldFZlcnRleEluZGV4ZXNEYXRhIiwidmVydGV4Q29sb3Vyc0RhdGEiLCJnZXRWZXJ0ZXhDb2xvdXJzRGF0YSIsImJpbmRCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJwcm9ncmFtIiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsImZyb21Ob3RoaW5nIiwiY3JlYXRlUHJvZ3JhbSIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY29sb3VyUmVuZGVyZXJEYXRhIiwiQ29sb3VyUmVuZGVyZXJEYXRhIiwiY29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiQ29sb3VyUmVuZGVyZXJCdWZmZXJzIiwiY29sb3VyVW5pZm9ybUxvY2F0aW9ucyIsIkNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJmcm9tUHJvZ3JhbSIsImNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsIkNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJjb2xvdXJSZW5kZXJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7OztrRUFYQTsrREFDVTtxRUFDQTt1RUFDRTtnRUFDQztnRUFDQztrRUFDRTt1QkFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0wsTUFBTUEsdUJBQXVCQyxpQkFBUTtJQUNsREMsbUNBQW1DO1FBQ2pDLE1BQU1DLHFCQUFxQixJQUFJLENBQUNDLHFCQUFxQixJQUMvQ0MsZ0NBQWdDRixtQkFBbUJELGdDQUFnQztRQUV6RixPQUFPRztJQUNUO0lBRUFDLGNBQWNDLE1BQU0sRUFBRTtRQUNwQixNQUFNQyxTQUFTLElBQUksQ0FBQ0MsU0FBUyxJQUN2QkMsZ0JBQWdCLEVBQUUsRUFDbEJDLGdCQUFnQixFQUFFLEVBQ2xCQyxrQkFBa0IsRUFBRSxFQUNwQkMsZ0JBQWdCLEVBQUU7UUFFeEJMLE9BQU9NLE9BQU8sQ0FBQyxDQUFDQyxPQUFPQztZQUNyQixNQUFNQyxnQkFBZ0JGLE9BQ2hCRyxxQkFBcUJILE1BQU1JLGdCQUFnQixDQUFDSCxRQUM1Q0kscUJBQXFCTCxNQUFNTSxnQkFBZ0IsSUFDM0NDLHVCQUF1QlAsTUFBTVEsa0JBQWtCLElBQy9DQyw2QkFBNkJQLGNBQWNRLGdC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