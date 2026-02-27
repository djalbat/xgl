"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Edge;
    }
});
const _vector = require("../maths/vector");
class Edge {
    constructor(position, extent){
        this.position = position;
        this.extent = extent;
    }
    getPosition() {
        return this.position;
    }
    getExtent() {
        return this.extent;
    }
    clone() {
        const position = this.position.slice(), extent = this.extent.slice(), edge = new Edge(position, extent);
        return edge;
    }
    static fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
        if (endVertex === undefined) {
            endVertex = startVertex; ///
            startVertex = Class; ///
            Class = Edge; ///
        }
        const startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector.subtract3)(endPosition, startPosition), edge = new Class(position, extent);
        return edge;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDsgIC8vL1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBFZGdlOyAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFZGdlIiwicG9zaXRpb24iLCJleHRlbnQiLCJnZXRQb3NpdGlvbiIsImdldEV4dGVudCIsImNsb25lIiwic2xpY2UiLCJlZGdlIiwiZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4IiwiQ2xhc3MiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsInVuZGVmaW5lZCIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsInN1YnRyYWN0MyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozt3QkFGSztBQUVYLE1BQU1BO0lBQ25CLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxDQUFFO1FBQzVCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0YsTUFBTTtJQUNwQjtJQUVBRyxRQUFRO1FBQ04sTUFBTUosV0FBVyxJQUFJLENBQUNBLFFBQVEsQ0FBQ0ssS0FBSyxJQUM5QkosU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0ksS0FBSyxJQUMxQkMsT0FBTyxJQUFJUCxLQUFLQyxVQUFVQztRQUVoQyxPQUFPSztJQUNUO0lBRUEsT0FBT0MsNEJBQTRCQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFO1FBQ2hFLElBQUlBLGNBQWNDLFdBQVc7WUFDM0JELFlBQVlELGFBQWMsR0FBRztZQUM3QkEsY0FBY0QsT0FBUSxHQUFHO1lBQ3pCQSxRQUFRVCxNQUFNLEdBQUc7UUFDbkI7UUFFQSxNQUFNYSxnQkFBZ0JILFlBQVlQLFdBQVcsSUFDdkNXLGNBQWNILFVBQVVSLFdBQVcsSUFDbkNGLFdBQVdZLGNBQWNQLEtBQUssSUFDOUJKLFNBQVNhLElBQUFBLGlCQUFTLEVBQUNELGFBQWFELGdCQUNoQ04sT0FBTyxJQUFJRSxNQUFNUixVQUFVQztRQUVqQyxPQUFPSztJQUNUO0FBQ0YifQ==