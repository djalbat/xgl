"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _rotation = require("../utilities/rotation");
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
var Vertex = function() {
    function Vertex(position) {
        _classCallCheck(this, Vertex);
        this.position = position;
    }
    _createClass(Vertex, [
        {
            key: "getPosition",
            value: function getPosition() {
                return this.position;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var position = this.position.slice(), vertex = new Vertex(position);
                return vertex;
            }
        },
        {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.position = _rotation.rotatePosition(this.position, rotationQuaternion);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.position = transform(this.position);
            }
        }
    ], [
        {
            key: "fromPosition",
            value: function fromPosition(position) {
                var vertex = new Vertex(position);
                return vertex;
            }
        },
        {
            key: "fromCoordinateTuple",
            value: function fromCoordinateTuple(coordinateTuple) {
                var position = coordinateTuple.slice(), vertex = new Vertex(position);
                return vertex;
            }
        }
    ]);
    return Vertex;
}();
exports.default = Vertex;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXggPSBuZXcgVmVydGV4KHBvc2l0aW9uKTtcblxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKHRoaXMucG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdHJhbnNmb3JtKHRoaXMucG9zaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRW1CLFNBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVqQyxNQUFNO2FBQU4sTUFBTSxDQUNiLFFBQVE7OEJBREQsTUFBTTthQUVsQixRQUFRLEdBQUcsUUFBUTs7aUJBRlAsTUFBTTs7WUFLekIsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVzs0QkFDRyxRQUFROzs7O1lBR3RCLEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUs7b0JBQ0csUUFBUSxRQUFRLFFBQVEsQ0FBQyxLQUFLLElBQzlCLE1BQU0sT0FBTyxNQUFNLENBQUMsUUFBUTt1QkFFM0IsTUFBTTs7OztZQUdmLEdBQU0sR0FBTixNQUFNOzRCQUFOLE1BQU0sQ0FBQyxrQkFBa0I7cUJBQ2xCLFFBQVEsR0FuQmMsU0FBdUIscUJBbUJkLFFBQVEsRUFBRSxrQkFBa0I7Ozs7WUFHbEUsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFNBQVM7cUJBQ2pCLFFBQVEsR0FBRyxTQUFTLE1BQU0sUUFBUTs7Ozs7WUFHbEMsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLFFBQVE7b0JBQ3BCLE1BQU0sT0FBTyxNQUFNLENBQUMsUUFBUTt1QkFFM0IsTUFBTTs7OztZQUdSLEdBQW1CLEdBQW5CLG1CQUFtQjs0QkFBbkIsbUJBQW1CLENBQUMsZUFBZTtvQkFDbEMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxLQUFLLElBQ2hDLE1BQU0sT0FBTyxNQUFNLENBQUMsUUFBUTt1QkFFM0IsTUFBTTs7OztXQWxDSSxNQUFNOztrQkFBTixNQUFNIn0=