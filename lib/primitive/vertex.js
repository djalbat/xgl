"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Vertex;
    }
});
var _rotation = require("../utilities/rotation");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Vertex = /*#__PURE__*/ function() {
    function Vertex(position) {
        _class_call_check(this, Vertex);
        this.position = position;
    }
    _create_class(Vertex, [
        {
            key: "getPosition",
            value: function getPosition() {
                return this.position;
            }
        },
        {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
                this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlcnRleCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVQb3NpdGlvbiIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiY2xvbmUiLCJzbGljZSIsInZlcnRleCIsImZyb21Qb3NpdGlvbiIsImZyb21Db29yZGluYXRlVHVwbGUiLCJjb29yZGluYXRlVHVwbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3dCQUZVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHVCQUFELEFBQUw7YUFBTUEsT0FDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0Msa0JBQWtCO2dCQUN2QixJQUFJLENBQUNILFFBQVEsR0FBR0ksSUFBQUEsd0JBQWMsRUFBQyxJQUFJLENBQUNKLFFBQVEsRUFBRUc7WUFDaEQ7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUztnQkFDdEIsSUFBSSxDQUFDTixRQUFRLEdBQUdNLFVBQVUsSUFBSSxDQUFDTixRQUFRO1lBQ3pDOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1QLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNRLEtBQUssSUFDOUJDLFNBQVMsSUFuQkVWLE9BbUJTQztnQkFFMUIsT0FBT1M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhVixRQUFRO2dCQUMxQixJQUFNUyxTQUFTLElBekJFVixPQXlCU0M7Z0JBRTFCLE9BQU9TO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWU7Z0JBQ3hDLElBQU1aLFdBQVdZLGdCQUFnQkosS0FBSyxJQUNoQ0MsU0FBUyxJQWhDRVYsT0FnQ1NDO2dCQUUxQixPQUFPUztZQUNUOzs7V0FuQ21CViJ9