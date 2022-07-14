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
var _vector = require("../maths/vector");
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
var Edge = /*#__PURE__*/ function() {
    function Edge(position, extent) {
        _classCallCheck(this, Edge);
        this.position = position;
        this.extent = extent;
    }
    _createClass(Edge, [
        {
            key: "getPosition",
            value: function getPosition() {
                return this.position;
            }
        },
        {
            key: "getExtent",
            value: function getExtent() {
                return this.extent;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var position = this.position.slice(), extent = this.extent.slice(), edge = new Edge(position, extent);
                return edge;
            }
        }
    ], [
        {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
                if (endVertex === undefined) {
                    endVertex = startVertex; ///
                    startVertex = Class; ///
                    Class = Edge; ///
                }
                var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector.subtract3)(endPosition, startPosition), edge = new Class(position, extent);
                return edge;
            }
        }
    ]);
    return Edge;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDsgIC8vL1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBFZGdlOyAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRWRnZSIsInBvc2l0aW9uIiwiZXh0ZW50IiwiZ2V0UG9zaXRpb24iLCJnZXRFeHRlbnQiLCJjbG9uZSIsInNsaWNlIiwiZWRnZSIsImZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleCIsIkNsYXNzIiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJ1bmRlZmluZWQiLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zaXRpb24iLCJzdWJ0cmFjdDMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQUlRQSxJQUFJOzs7c0JBRkMsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QixJQUFBLEFBQU1BLElBQUksaUJBQVY7YUFBTUEsSUFBSSxDQUNYQyxRQUFRLEVBQUVDLE1BQU07O1FBQzFCLElBQUksQ0FBQ0QsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU0sQ0FBQzs7OztZQUd2QkMsR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURHLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLE9BQU8sSUFBSSxDQUFDRixNQUFNLENBQUM7YUFDcEI7OztZQUVERyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssR0FBRztnQkFDTixJQUFNSixRQUFRLEdBQUcsSUFBSSxDQUFDQSxRQUFRLENBQUNLLEtBQUssRUFBRSxFQUNoQ0osTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDSSxLQUFLLEVBQUUsRUFDNUJDLElBQUksR0FBRyxJQUFJUCxJQUFJLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxDQUFDLEFBQUM7Z0JBRXhDLE9BQU9LLElBQUksQ0FBQzthQUNiOzs7O1lBRU1DLEdBQTJCLEVBQTNCQSw2QkFBMkI7bUJBQWxDLFNBQU9BLDJCQUEyQixDQUFDQyxLQUFLLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFO2dCQUNoRSxJQUFJQSxTQUFTLEtBQUtDLFNBQVMsRUFBRTtvQkFDM0JELFNBQVMsR0FBR0QsV0FBVyxDQUFDLENBQUUsR0FBRztvQkFDN0JBLFdBQVcsR0FBR0QsS0FBSyxDQUFDLENBQUUsR0FBRztvQkFDekJBLEtBQUssR0FBR1QsSUFBSSxDQUFDLENBQUMsR0FBRztpQkFDbEI7Z0JBRUQsSUFBTWEsYUFBYSxHQUFHSCxXQUFXLENBQUNQLFdBQVcsRUFBRSxFQUN6Q1csV0FBVyxHQUFHSCxTQUFTLENBQUNSLFdBQVcsRUFBRSxFQUNyQ0YsUUFBUSxHQUFHWSxhQUFhLENBQUNQLEtBQUssRUFBRSxFQUNoQ0osTUFBTSxHQUFHYSxJQUFBQSxPQUFTLFVBQUEsRUFBQ0QsV0FBVyxFQUFFRCxhQUFhLENBQUMsRUFDOUNOLElBQUksR0FBRyxJQUFJRSxLQUFLLENBQUNSLFFBQVEsRUFBRUMsTUFBTSxDQUFDLEFBQUM7Z0JBRXpDLE9BQU9LLElBQUksQ0FBQzthQUNiOzs7O0NBQ0YsRUFBQSJ9