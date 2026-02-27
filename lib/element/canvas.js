"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CanvasElement;
    }
});
const _mask = /*#__PURE__*/ _interop_require_default(require("./mask"));
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _transform = require("../utilities/transform");
const _element1 = require("../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class CanvasElement extends _element.default {
    constructor(maskReference, transform, facets, masks){
        super();
        this.maskReference = maskReference;
        this.transform = transform;
        this.facets = facets;
        this.masks = masks;
    }
    getMaskReference() {
        return this.maskReference;
    }
    getTransform() {
        return this.transform;
    }
    getFacets() {
        return this.facets;
    }
    getMasks() {
        return this.masks;
    }
    setFacets(facets) {
        this.facets = facets;
    }
    applyMask(masks, marginOfError) {
        if (this.maskReference !== null) {
            const mask = masks.find((mask)=>{
                const reference = mask.getReference();
                if (reference === this.maskReference) {
                    return true;
                }
            }) || null; ///
            if (mask !== null) {
                const element = this; ///
                mask.maskElement(element, marginOfError);
            }
        }
    }
    applyTransform(transform) {
        const childElements = this.getChildElements();
        this.facets.forEach((facet)=>{
            facet.applyTransform(transform);
        });
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
        masks = [
            ...masks,
            ...this.masks
        ]; ///
        const childElements = this.getChildElements();
        childElements.forEach((childElement)=>{
            childElement.maskFacets(masks, marginOfError);
        });
        this.applyTransform(this.transform); ///
        this.applyMask(masks, marginOfError);
    }
    addFacets(colourRenderer, textureRenderer) {
        const childElements = this.getChildElements();
        childElements.forEach((childElement)=>{
            childElement.addFacets(colourRenderer, textureRenderer);
        });
    }
    static fromProperties(Class, properties, ...remainingArguments) {
        const { childElements, scale = null, position = null, rotations = null, maskReference = null } = properties, transform = (0, _transform.composeTransform)(scale, position, rotations), facets = [], masks = (0, _element1.elementsFromChildElements)(childElements, _mask.default), canvasElement = _element.default.fromProperties(Class, properties, maskReference, transform, facets, masks, ...remainingArguments);
        return canvasElement;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NhbnZhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tcG9zZVRyYW5zZm9ybSB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWFza1JlZmVyZW5jZSA9IG1hc2tSZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5tYXNrcyA9IG1hc2tzO1xuICB9XG5cbiAgZ2V0TWFza1JlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrUmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRNYXNrcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNrcztcbiAgfVxuXG4gIHNldEZhY2V0cyhmYWNldHMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgfVxuXG4gIGFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGlmICh0aGlzLm1hc2tSZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1hc2sgPSBtYXNrcy5maW5kKChtYXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG1hc2suZ2V0UmVmZXJlbmNlKCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gdGhpcy5tYXNrUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgICBpZiAobWFzayAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgICAgbWFzay5tYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbWFza3MgPSBbIC4uLm1hc2tzLCAuLi50aGlzLm1hc2tzIF07IC8vL1xuXG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICAgIGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0odGhpcy50cmFuc2Zvcm0pOyAgLy8vXG5cbiAgICB0aGlzLmFwcGx5TWFzayhtYXNrcywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBhZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikge1xuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgICBjaGlsZEVsZW1lbnQuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBtYXNrUmVmZXJlbmNlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2FudmFzRWxlbWVudCIsIkVsZW1lbnQiLCJtYXNrUmVmZXJlbmNlIiwidHJhbnNmb3JtIiwiZmFjZXRzIiwibWFza3MiLCJnZXRNYXNrUmVmZXJlbmNlIiwiZ2V0VHJhbnNmb3JtIiwiZ2V0RmFjZXRzIiwiZ2V0TWFza3MiLCJzZXRGYWNldHMiLCJhcHBseU1hc2siLCJtYXJnaW5PZkVycm9yIiwibWFzayIsImZpbmQiLCJyZWZlcmVuY2UiLCJnZXRSZWZlcmVuY2UiLCJlbGVtZW50IiwibWFza0VsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImNoaWxkRWxlbWVudHMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImZhY2V0IiwiY2hpbGRFbGVtZW50IiwiY3JlYXRlRmFjZXRzIiwibWFza0ZhY2V0cyIsImFkZEZhY2V0cyIsImNvbG91clJlbmRlcmVyIiwidGV4dHVyZVJlbmRlcmVyIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJzY2FsZSIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29tcG9zZVRyYW5zZm9ybSIsImVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMiLCJNYXNrIiwiY2FudmFzRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFxQkE7Ozs2REFOSjtnRUFDRzsyQkFFYTswQkFDUzs7Ozs7O0FBRTNCLE1BQU1BLHNCQUFzQkMsZ0JBQU87SUFDaEQsWUFBWUMsYUFBYSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxDQUFFO1FBQ25ELEtBQUs7UUFFTCxJQUFJLENBQUNILGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUdB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