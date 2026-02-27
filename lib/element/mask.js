"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Mask;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _maskingFacet = /*#__PURE__*/ _interop_require_default(require("../primitive/maskingFacet"));
const _array = require("../utilities/array");
const _transform = require("../utilities/transform");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Mask extends _element.default {
    constructor(reference, transform){
        super();
        this.reference = reference;
        this.transform = transform;
    }
    getReference() {
        return this.reference;
    }
    getTransform() {
        return this.transform;
    }
    retrieveMaskingFacets() {
        const childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map((facet)=>{
            const maskingFacet = _maskingFacet.default.fromFacet(facet);
            return maskingFacet;
        });
        return maskingFacets;
    }
    maskElement(element, marginOfError) {
        const maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
        maskElement(element, maskingFacets, marginOfError);
        childElements.forEach((childElement)=>{
            maskElement(childElement, maskingFacets, marginOfError);
        });
    }
    applyTransform(transform) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement)=>{
            childElement.applyTransform(transform);
        });
    }
    createFacets(marginOfError) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement)=>{
            childElement.createFacets(marginOfError);
        });
    }
    maskFacets(masks, marginOfError) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement)=>{
            childElement.maskFacets(masks, marginOfError);
        });
        this.applyTransform(this.transform); ///
    }
    addFacets(colourRenderer, textureRenderer) {}
    static fromProperties(properties) {
        const { reference, scale = null, position = null, rotations = null } = properties, transform = (0, _transform.composeTransform)(scale, position, rotations), mask = _element.default.fromProperties(Mask, properties, reference, transform);
        return mask;
    }
}
function retrieveFacets(childElements, facets = []) {
    childElements.forEach((childElement)=>{
        const element = childElement, elementFacets = element.getFacets(), childElements = element.getChildElements();
        (0, _array.add)(facets, elementFacets);
        retrieveFacets(childElements, facets);
    });
    return facets;
}
function maskElement(element, maskingFacets, marginOfError) {
    let facets = element.getFacets();
    maskingFacets.forEach((maskingFacet)=>{
        const unmaskedFacets = [];
        facets.forEach((facet)=>{
            maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
        });
        facets = unmaskedFacets; ///
    });
    element.setFacets(facets);
    const childElements = element.getChildElements();
    childElements.forEach((childElement)=>{
        const element = childElement; ///
        maskElement(element, maskingFacets, marginOfError);
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21hc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7Y29tcG9zZVRyYW5zZm9ybX0gZnJvbSBcIi4uL3V0aWxpdGllcy90cmFuc2Zvcm1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFzayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIHRyYW5zZm9ybSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtO1xuICB9XG5cbiAgcmV0cmlldmVNYXNraW5nRmFjZXRzKCkge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBmYWNldHMgPSByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXRzID0gZmFjZXRzLm1hcCgoZmFjZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICAgICAgICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXRzOyAgICAgICAgICBcbiAgfVxuXG4gIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBtYXNraW5nRmFjZXRzID0gdGhpcy5yZXRyaWV2ZU1hc2tpbmdGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBtYXNrRWxlbWVudChjaGlsZEVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgICAgY2hpbGRFbGVtZW50Lm1hc2tGYWNldHMobWFza3MsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7fVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyByZWZlcmVuY2UsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRyYW5zZm9ybSA9IGNvbXBvc2VUcmFuc2Zvcm0oc2NhbGUsIHBvc2l0aW9uLCByb3RhdGlvbnMpLFxuICAgICAgICAgIG1hc2sgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1hc2ssIHByb3BlcnRpZXMsIHJlZmVyZW5jZSwgdHJhbnNmb3JtKTtcblxuICAgIHJldHVybiBtYXNrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlRmFjZXRzKGNoaWxkRWxlbWVudHMsIGZhY2V0cyA9IFtdKSB7XG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudCwgLy8vXG4gICAgICAgICAgZWxlbWVudEZhY2V0cyA9IGVsZW1lbnQuZ2V0RmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgYWRkKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgZmFjZXRzID0gdW5tYXNrZWRGYWNldHM7ICAvLy9cbiAgfSk7XG5cbiAgZWxlbWVudC5zZXRGYWNldHMoZmFjZXRzKTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAvLy9cblxuICAgIG1hc2tFbGVtZW50KGVsZW1lbnQsIG1hc2tpbmdGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJNYXNrIiwiRWxlbWVudCIsInJlZmVyZW5jZSIsInRyYW5zZm9ybSIsImdldFJlZmVyZW5jZSIsImdldFRyYW5zZm9ybSIsInJldHJpZXZlTWFza2luZ0ZhY2V0cyIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZmFjZXRzIiwicmV0cmlldmVGYWNldHMiLCJtYXNraW5nRmFjZXRzIiwibWFwIiwiZmFjZXQiLCJtYXNraW5nRmFjZXQiLCJNYXNraW5nRmFjZXQiLCJmcm9tRmFjZXQiLCJtYXNrRWxlbWVudCIsImVsZW1lbnQiLCJtYXJnaW5PZkVycm9yIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGx5VHJhbnNmb3JtIiwiY3JlYXRlRmFjZXRzIiwibWFza0ZhY2V0cyIsIm1hc2tzIiwiYWRkRmFjZXRzIiwiY29sb3VyUmVuZGVyZXIiLCJ0ZXh0dXJlUmVuZGVyZXIiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29tcG9zZVRyYW5zZm9ybSIsIm1hc2siLCJlbGVtZW50RmFjZXRzIiwiZ2V0RmFjZXRzIiwiYWRkIiwidW5tYXNrZWRGYWNldHMiLCJtYXNrRmFjZXQiLCJzZXRGYWNldHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7Z0VBTkQ7cUVBQ0s7dUJBRUw7MkJBQ1c7Ozs7OztBQUVoQixNQUFNQSxhQUFhQyxnQkFBTztJQUN2QyxZQUFZQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUNoQyxLQUFLO1FBRUwsSUFBSSxDQUFDRCxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLHdCQUF3QjtRQUN0QixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0IsSUFDckNDLFNBQVNDLGVBQWVILGdCQUN4QkksZ0JBQWdCRixPQUFPRyxHQUFHLENBQUMsQ0FBQ0M7WUFDMUIsTUFBTUMsZUFBZUMscUJBQVksQ0FBQ0MsU0FBUyxDQUFDSDtZQUU1QyxPQUFPQztRQUNUO1FBRU4sT0FBT0g7SUFDVDtJQUVBTSxZQUFZQyxPQUFPLEVBQUVDLGFBQWEsRUFBRTtRQUNsQyxNQUFNUixnQkFBZ0IsSUFBSSxDQUFDTCxxQkFBcUIsSUFDMUNDLGdCQUFnQlcsUUFBUVYsZ0JBQWdCO1FBRTlDUyxZQUFZQyxTQUFTUCxlQUFlUTtRQUVwQ1osY0FBY2EsT0FBTyxDQUFDLENBQUNDO1lBQ3JCSixZQUFZSSxjQUFjVixlQUFlUTtRQUMzQztJQUNGO0lBRUFHLGVBQWVuQixTQUFTLEVBQUU7UUFDeEIsTUFBTUksZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDRCxjQUFjYSxPQUFPLENBQUMsQ0FBQ0M7WUFDckJBLGFBQWFDLGNBQWMsQ0FBQ25CO1FBQzlCO0lBQ0Y7SUFFQW9CLGFBQWFKLGFBQWEsRUFBRTtRQUMxQixNQUFNWixnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0I7UUFFM0NELGNBQWNhLE9BQU8sQ0FBQyxDQUFDQztZQUNyQkEsYUFBYUUsWUFBWSxDQUFDSjtRQUM1QjtJQUNGO0lBRUFLLFdBQVdDLEtBQUssRUFBRU4sYUFBYSxFQUFFO1FBQy9CLE1BQU1aLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQjtRQUUzQ0QsY0FBY2EsT0FBTyxDQUFDLENBQUNDO1lBQ3JCQSxhQUFhRyxVQUFVLENBQUNDLE9BQU9OO1FBQ2pDO1FBRUEsSUFBSSxDQUFDRyxjQUFjLENBQUMsSUFBSSxDQUFDbkIsU0FBUyxHQUFJLEdBQUc7SUFDM0M7SUFFQXVCLFVBQVVDLGNBQWMsRUFBRUMsZUFBZSxFQUFFLENBQUM7SUFFNUMsT0FBT0MsZUFBZUMsVUFBVSxFQUFFO1FBQ2hDLE1BQU0sRUFBRTVCLFNBQVMsRUFBRTZCLFFBQVEsSUFBSSxFQUFFQyxXQUFXLElBQUksRUFBRUMsWUFBWSxJQUFJLEVBQUUsR0FBR0gsWUFDakUzQixZQUFZK0IsSUFBQUEsMkJBQWdCLEVBQUNILE9BQU9DLFVBQVVDLFlBQzlDRSxPQUFPbEMsZ0JBQU8sQ0FBQzRCLGNBQWMsQ0FBQzdCLE1BQU04QixZQUFZNUIsV0FBV0M7UUFFakUsT0FBT2dDO0lBQ1Q7QUFDRjtBQUVBLFNBQVN6QixlQUFlSCxhQUFhLEVBQUVFLFNBQVMsRUFBRTtJQUNoREYsY0FBY2EsT0FBTyxDQUFDLENBQUNDO1FBQ3JCLE1BQU1ILFVBQVVHLGNBQ1ZlLGdCQUFnQmxCLFFBQVFtQixTQUFTLElBQ2pDOUIsZ0JBQWdCVyxRQUFRVixnQkFBZ0I7UUFFOUM4QixJQUFBQSxVQUFHLEVBQUM3QixRQUFRMkI7UUFFWjFCLGVBQWVILGVBQWVFO0lBQ2hDO0lBRUEsT0FBT0E7QUFDVDtBQUVBLFNBQVNRLFlBQVlDLE9BQU8sRUFBRVAsYUFBYSxFQUFFUSxhQUFhO0lBQ3hELElBQUlWLFNBQVNTLFFBQVFtQixTQUFTO0lBRTlCMUIsY0FBY1MsT0FBTyxDQUFDLENBQUNOO1FBQ3JCLE1BQU15QixpQkFBaUIsRUFBRTtRQUV6QjlCLE9BQU9XLE9BQU8sQ0FBQyxDQUFDUDtZQUNkQyxhQUFhMEIsU0FBUyxDQUFDM0IsT0FBTzBCLGdCQUFnQnBCO1FBQ2hEO1FBRUFWLFNBQVM4QixnQkFBaUIsR0FBRztJQUMvQjtJQUVBckIsUUFBUXVCLFNBQVMsQ0FBQ2hDO0lBRWxCLE1BQU1GLGdCQUFnQlcsUUFBUVYsZ0JBQWdCO0lBRTlDRCxjQUFjYSxPQUFPLENBQUMsQ0FBQ0M7UUFDckIsTUFBTUgsVUFBVUcsY0FBYyxHQUFHO1FBRWpDSixZQUFZQyxTQUFTUCxlQUFlUTtJQUN0QztBQUNGIn0=