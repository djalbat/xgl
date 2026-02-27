"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColouredFacet;
    }
});
const _edge = /*#__PURE__*/ _interop_require_default(require("../edge"));
const _facet = /*#__PURE__*/ _interop_require_default(require("../facet"));
const _normal = /*#__PURE__*/ _interop_require_default(require("../normal"));
const _vertex = /*#__PURE__*/ _interop_require_default(require("../vertex"));
const _approximate = require("../../utilities/approximate");
const _vertices = require("../../utilities/vertices");
const _facet1 = require("../../utilities/facet");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ColouredFacet extends _facet.default {
    constructor(vertices, normal, edges, rgba){
        super(vertices, normal, edges);
        this.rgba = rgba;
    }
    getVertexColours() {
        const vertexColour = this.rgba, vertexColours = [
            vertexColour,
            vertexColour,
            vertexColour
        ];
        return vertexColours;
    }
    fromVerticesAndMarginOfError(vertices, marginOfError) {
        let colouredFacet = null;
        const area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
            const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
            colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
        }
        return colouredFacet;
    }
    clone() {
        let vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
        vertices = (0, _facet1.cloneVertices)(vertices);
        normal = (0, _facet1.cloneNormal)(normal);
        edges = (0, _facet1.cloneEdges)(edges);
        const colouredFacet = new ColouredFacet(vertices, normal, edges, this.rgba);
        return colouredFacet;
    }
    static fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
        let colouredFacet = null;
        const vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
        if (!areaApproximatelyEqualToZero) {
            const normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), rgba = [
                ...colour,
                1
            ]; ///
            colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
        }
        return colouredFacet;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuICAgIFxuICAgIHRoaXMucmdiYSA9IHJnYmE7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0aWNlcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBpZiAoIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8pIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHRoaXMucmdiYSk7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVDb2xvdXJBbmRNYXJnaW5PZkVycm9yKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91ciwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbIC4uLmNvbG91ciwgMSBdOyAgLy8vXG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb2xvdXJlZEZhY2V0IiwiRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwicmdiYSIsImdldFZlcnRleENvbG91cnMiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvciIsIm1hcmdpbk9mRXJyb3IiLCJjb2xvdXJlZEZhY2V0IiwiYXJlYSIsImNhbGN1bGF0ZUFyZWEiLCJhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJjYWxjdWxhdGVOb3JtYWwiLCJOb3JtYWwiLCJjYWxjdWxhdGVFZGdlcyIsIkVkZ2UiLCJjbG9uZSIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJjbG9uZVZlcnRpY2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZUVkZ2VzIiwiZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvciIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIiwiY29sb3VyIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBcUJBOzs7NkRBVEo7OERBQ0M7K0RBQ0M7K0RBQ0E7NkJBRXdCOzBCQUNlO3dCQUM2Qzs7Ozs7O0FBRXhGLE1BQU1BLHNCQUFzQkMsY0FBSztJQUM5QyxZQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxJQUFJLENBQUU7UUFDekMsS0FBSyxDQUFDSCxVQUFVQyxRQUFRQztRQUV4QixJQUFJLENBQUNDLElBQUksR0FBR0E7SUFDZDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZUFBZSxJQUFJLENBQUNGLElBQUksRUFDeEJHLGdCQUFnQjtZQUNkRDtZQUNBQTtZQUNBQTtTQUNEO1FBRVAsT0FBT0M7SUFDVDtJQUVBQyw2QkFBNkJQLFFBQVEsRUFBRVEsYUFBYSxFQUFFO1FBQ3BELElBQUlDLGdCQUFnQjtRQUVwQixNQUFNQyxPQUFPQyxJQUFBQSxxQkFBYSxFQUFDWCxXQUNyQlksK0JBQStCQyxJQUFBQSx1Q0FBMEIsRUFBQ0gsTUFBTUY7UUFFdEUsSUFBSSxDQUFDSSw4QkFBOEI7WUFDakMsTUFBTVgsU0FBU2EsSUFBQUEsdUJBQWUsRUFBQ2QsVUFBVWUsZUFBTSxHQUN6Q2IsUUFBUWMsSUFBQUEsc0JBQWMsRUFBQ2hCLFVBQVVpQixhQUFJO1lBRTNDUixnQkFBZ0IsSUFBSVgsY0FBY0UsVUFBVUMsUUFBUUMsT0FBTyxJQUFJLENBQUNDLElBQUk7UUFDdEU7UUFFQSxPQUFPTTtJQUNUO0lBRUFTLFFBQVE7UUFDTixJQUFJbEIsV0FBVyxJQUFJLENBQUNtQixXQUFXLElBQzNCbEIsU0FBUyxJQUFJLENBQUNtQixTQUFTLElBQ3ZCbEIsUUFBUSxJQUFJLENBQUNtQixRQUFRO1FBRXpCckIsV0FBV3NCLElBQUFBLHFCQUFhLEVBQUN0QjtRQUN6QkMsU0FBU3NCLElBQUFBLG1CQUFXLEVBQUN0QjtRQUNyQkMsUUFBUXNCLElBQUFBLGtCQUFVLEVBQUN0QjtRQUVuQixNQUFNTyxnQkFBZ0IsSUFBSVgsY0FBY0UsVUFBVUMsUUFBUUMsT0FBTyxJQUFJLENBQUNDLElBQUk7UUFFMUUsT0FBT007SUFDVDtJQUVBLE9BQU9nQixxREFBcURDLGdCQUFnQixFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRXBCLGFBQWEsRUFBRTtRQUMvRyxJQUFJQyxnQkFBZ0I7UUFFcEIsTUFBTVQsV0FBVzZCLElBQUFBLG1EQUF5QyxFQUFDSCxrQkFBa0JDLFlBQVlHLGVBQU0sR0FDekZwQixPQUFPQyxJQUFBQSxxQkFBYSxFQUFDWCxXQUNyQlksK0JBQStCQyxJQUFBQSx1Q0FBMEIsRUFBQ0gsTUFBTUY7UUFFdEUsSUFBSSxDQUFDSSw4QkFBOEI7WUFDakMsTUFBTVgsU0FBU2EsSUFBQUEsdUJBQWUsRUFBQ2QsVUFBVWUsZUFBTSxHQUN6Q2IsUUFBUWMsSUFBQUEsc0JBQWMsRUFBQ2hCLFVBQVVpQixhQUFJLEdBQ3JDZCxPQUFPO21CQUFLeUI7Z0JBQVE7YUFBRyxFQUFHLEdBQUc7WUFFbkNuQixnQkFBZ0IsSUFBSVgsY0FBY0UsVUFBVUMsUUFBUUMsT0FBT0M7UUFDN0Q7UUFFQSxPQUFPTTtJQUNUO0FBQ0YifQ==