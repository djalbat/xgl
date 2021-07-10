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
                    endVertex = startVertex;
                    startVertex = Class;
                    Class = Edge;
                }
                var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector).subtract3(endPosition, startPosition), edge = new Class(position, extent);
                return edge;
            }
        }
    ]);
    return Edge;
}();
exports.default = Edge;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvZWRnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDtcbiAgICAgIHN0YXJ0VmVydGV4ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IEVkZ2U7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBzdGFydFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGVuZFBvc2l0aW9uID0gZW5kVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcG9zaXRpb24gPSBzdGFydFBvc2l0aW9uLnNsaWNlKCksIC8vL1xuICAgICAgICAgIGV4dGVudCA9IHN1YnRyYWN0MyhlbmRQb3NpdGlvbiwgc3RhcnRQb3NpdGlvbiksXG4gICAgICAgICAgZWRnZSA9IG5ldyBDbGFzcyhwb3NpdGlvbiwgZXh0ZW50KTtcblxuICAgIHJldHVybiBlZGdlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFYyxHQUFpQixDQUFqQixPQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdEIsSUFBSTthQUFKLElBQUksQ0FDWCxRQUFRLEVBQUUsTUFBTTs4QkFEVCxJQUFJO2FBRWhCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLE1BQU0sR0FBRyxNQUFNOztpQkFISCxJQUFJOztZQU12QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzs0QkFDRCxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsR0FBRyxDQUFDOzRCQUNDLE1BQU07WUFDcEIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBSyxDQUFDLFFBQVEsUUFBUSxRQUFRLENBQUMsS0FBSyxJQUM5QixNQUFNLFFBQVEsTUFBTSxDQUFDLEtBQUssSUFDMUIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU07dUJBRS9CLElBQUk7WUFDYixDQUFDOzs7O1lBRU0sR0FBMkIsR0FBM0IsMkJBQTJCOzRCQUEzQiwyQkFBMkIsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDO2dCQUNqRSxFQUFFLEVBQUUsU0FBUyxLQUFLLFNBQVMsRUFBRSxDQUFDO29CQUM1QixTQUFTLEdBQUcsV0FBVztvQkFDdkIsV0FBVyxHQUFHLEtBQUs7b0JBQ25CLEtBQUssR0FBRyxJQUFJO2dCQUNkLENBQUM7Z0JBRUQsR0FBSyxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsV0FBVyxJQUN2QyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsSUFDbkMsUUFBUSxHQUFHLGFBQWEsQ0FBQyxLQUFLLElBQzlCLE1BQU0sT0FsQ1UsT0FBaUIsWUFrQ2QsV0FBVyxFQUFFLGFBQWEsR0FDN0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU07dUJBRWhDLElBQUk7WUFDYixDQUFDOzs7V0FwQ2tCLElBQUk7O2tCQUFKLElBQUkifQ==