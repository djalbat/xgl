"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColouredCanvasElement;
    }
});
const _canvas = /*#__PURE__*/ _interop_require_default(require("../../element/canvas"));
const _coloured = /*#__PURE__*/ _interop_require_default(require("../../primitive/facet/coloured"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ColouredCanvasElement extends _canvas.default {
    constructor(maskReference, transform, facets, masks, coordinates, indexes, colour){
        super(maskReference, transform, facets, masks);
        this.coordinates = coordinates;
        this.indexes = indexes;
        this.colour = colour;
    }
    createFacets(marginOfError) {
        super.createFacets(marginOfError);
        const indexTuples = this.indexes, facets = indexTuples.reduce((facets, indexTuple)=>{
            const coordinateTuples = this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, this.colour, marginOfError), facet = colouredFacet; ///
            if (facet !== null) {
                facets.push(facet);
            }
            return facets;
        }, []);
        this.setFacets(facets);
    }
    addFacets(colourRenderer, textureRenderer) {
        const facets = this.getFacets();
        colourRenderer.addFacets(facets);
        super.addFacets(colourRenderer, textureRenderer);
    }
    static fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments) {
        return _canvas.default.fromProperties(Class, properties, coordinates, indexes, colour, ...remainingArguments);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy9jb2xvdXJlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENhbnZhc0VsZW1lbnQgZnJvbSBcIi4uLy4uL2VsZW1lbnQvY2FudmFzXCI7XG5pbXBvcnQgQ29sb3VyZWRGYWNldCBmcm9tIFwiLi4vLi4vcHJpbWl0aXZlL2ZhY2V0L2NvbG91cmVkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJlZENhbnZhc0VsZW1lbnQiLCJDYW52YXNFbGVtZW50IiwibWFza1JlZmVyZW5jZSIsInRyYW5zZm9ybSIsImZhY2V0cyIsIm1hc2tzIiwiY29vcmRpbmF0ZXMiLCJpbmRleGVzIiwiY29sb3VyIiwiY3JlYXRlRmFjZXRzIiwibWFyZ2luT2ZFcnJvciIsImluZGV4VHVwbGVzIiwicmVkdWNlIiwiaW5kZXhUdXBsZSIsImNvb3JkaW5hdGVUdXBsZXMiLCJjb2xvdXJlZEZhY2V0IiwiQ29sb3VyZWRGYWNldCIsImZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IiLCJmYWNldCIsInB1c2giLCJzZXRGYWNldHMiLCJhZGRGYWNldHMiLCJjb2xvdXJSZW5kZXJlciIsInRleHR1cmVSZW5kZXJlciIsImdldEZhY2V0cyIsImZyb21Qcm9wZXJ0aWVzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFLQTs7O2VBQXFCQTs7OytEQUhLO2lFQUNBOzs7Ozs7QUFFWCxNQUFNQSw4QkFBOEJDLGVBQWE7SUFDOUQsWUFBWUMsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxDQUFFO1FBQ2pGLEtBQUssQ0FBQ04sZUFBZUMsV0FBV0MsUUFBUUM7UUFFeEMsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtJQUNoQjtJQUVBQyxhQUFhQyxhQUFhLEVBQUU7UUFDMUIsS0FBSyxDQUFDRCxhQUFhQztRQUVuQixNQUFNQyxjQUFjLElBQUksQ0FBQ0osT0FBTyxFQUMxQkgsU0FBU08sWUFBWUMsTUFBTSxDQUFDLENBQUNSLFFBQVFTO1lBQ25DLE1BQU1DLG1CQUFtQixJQUFJLENBQUNSLFdBQVcsRUFDbkNTLGdCQUFnQkMsaUJBQWEsQ0FBQ0Msb0RBQW9ELENBQUNILGtCQUFrQkQsWUFBWSxJQUFJLENBQUNMLE1BQU0sRUFBRUUsZ0JBQzlIUSxRQUFRSCxlQUFnQixHQUFHO1lBRWpDLElBQUlHLFVBQVUsTUFBTTtnQkFDbEJkLE9BQU9lLElBQUksQ0FBQ0Q7WUFDZDtZQUVBLE9BQU9kO1FBQ1QsR0FBRyxFQUFFO1FBRVgsSUFBSSxDQUFDZ0IsU0FBUyxDQUFDaEI7SUFDakI7SUFFQWlCLFVBQVVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ3pDLE1BQU1uQixTQUFTLElBQUksQ0FBQ29CLFNBQVM7UUFFN0JGLGVBQWVELFNBQVMsQ0FBQ2pCO1FBRXpCLEtBQUssQ0FBQ2lCLFVBQVVDLGdCQUFnQkM7SUFDbEM7SUFFQSxPQUFPRSxlQUFlQyxLQUFLLEVBQUVDLFVBQVUsRUFBRXJCLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR29CLGtCQUFrQixFQUFFO1FBQUUsT0FBTzNCLGVBQWEsQ0FBQ3dCLGNBQWMsQ0FBQ0MsT0FBT0MsWUFBWXJCLGFBQWFDLFNBQVNDLFdBQVdvQjtJQUFxQjtBQUMvTSJ9