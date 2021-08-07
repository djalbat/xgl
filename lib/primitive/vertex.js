"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _vector = require("../maths/vector");
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
var Vertex = /*#__PURE__*/ function() {
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
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.position = (0, _rotation).rotatePosition(this.position, rotationQuaternion);
            }
        },
        {
            key: "applyTransform",
            value: function applyTransform(transform) {
                this.position = transform(this.position);
            }
        },
        {
            key: "clone",
            value: function clone() {
                var position = this.position.slice(), vertex = new Vertex(position);
                return vertex;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVcsR0FBaUIsQ0FBakIsT0FBaUI7QUFDVCxHQUF1QixDQUF2QixTQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakMsTUFBTTthQUFOLE1BQU0sQ0FDYixRQUFROzhCQURELE1BQU07YUFFbEIsUUFBUSxHQUFHLFFBQVE7O2lCQUZQLE1BQU07O1lBS3pCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsR0FBRyxDQUFDOzRCQUNELFFBQVE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBTSxHQUFOLE1BQU07NEJBQU4sTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7cUJBQ3JCLFFBQVEsT0FaYyxTQUF1QixzQkFZZCxRQUFRLEVBQUUsa0JBQWtCO1lBQ2xFLENBQUM7OztZQUVELEdBQWMsR0FBZCxjQUFjOzRCQUFkLGNBQWMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDcEIsUUFBUSxHQUFHLFNBQVMsTUFBTSxRQUFRO1lBQ3pDLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssR0FBRyxDQUFDO2dCQUNQLEdBQUssQ0FBQyxRQUFRLFFBQVEsUUFBUSxDQUFDLEtBQUssSUFDOUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUTt1QkFFM0IsTUFBTTtZQUNmLENBQUM7Ozs7WUFFTSxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO3VCQUUzQixNQUFNO1lBQ2YsQ0FBQzs7O1lBRU0sR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDM0MsR0FBSyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxJQUNoQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRO3VCQUUzQixNQUFNO1lBQ2YsQ0FBQzs7O1dBbkNrQixNQUFNOztrQkFBTixNQUFNIn0=