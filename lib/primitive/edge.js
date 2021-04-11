"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
var Edge = function() {
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
                    endVertex = startVertex;
                    startVertex = Class;
                    Class = Edge;
                }
                var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = _vector.subtract3(endPosition, startPosition), edge = new Class(position, extent);
                return edge;
            }
        }
    ]);
    return Edge;
}();
exports.default = Edge;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IEVkZ2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFYyxPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsSUFBSTthQUFKLElBQUksQ0FDWCxRQUFRLEVBQUUsTUFBTTs4QkFEVCxJQUFJO2FBRWhCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLE1BQU0sR0FBRyxNQUFNOztpQkFISCxJQUFJOztZQU12QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXOzRCQUNHLFFBQVE7Ozs7WUFHdEIsR0FBUyxHQUFULFNBQVM7NEJBQVQsU0FBUzs0QkFDSyxNQUFNOzs7O1lBR3BCLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUs7b0JBQ0csUUFBUSxRQUFRLFFBQVEsQ0FBQyxLQUFLLElBQzlCLE1BQU0sUUFBUSxNQUFNLENBQUMsS0FBSyxJQUMxQixJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNO3VCQUUvQixJQUFJOzs7OztZQUdOLEdBQTJCLEdBQTNCLDJCQUEyQjs0QkFBM0IsMkJBQTJCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTO29CQUMxRCxTQUFTLEtBQUssU0FBUztvQkFDekIsU0FBUyxHQUFHLFdBQVc7b0JBQ3ZCLFdBQVcsR0FBRyxLQUFLO29CQUNuQixLQUFLLEdBQUcsSUFBSTs7b0JBR1IsYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQ3ZDLFdBQVcsR0FBRyxTQUFTLENBQUMsV0FBVyxJQUNuQyxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssSUFDOUIsTUFBTSxHQWxDVSxPQUFpQixXQWtDZCxXQUFXLEVBQUUsYUFBYSxHQUM3QyxJQUFJLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNO3VCQUVoQyxJQUFJOzs7O1dBbkNNLElBQUk7O2tCQUFKLElBQUkifQ==