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
const _rotation = require("../utilities/rotation");
class Vertex {
    constructor(position){
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
    rotate(rotationQuaternion) {
        this.position = (0, _rotation.rotatePosition)(this.position, rotationQuaternion);
    }
    applyTransform(transform) {
        this.position = transform(this.position);
    }
    clone() {
        const position = this.position.slice(), vertex = new Vertex(position);
        return vertex;
    }
    static fromPosition(position) {
        const vertex = new Vertex(position);
        return vertex;
    }
    static fromCoordinateTuple(coordinateTuple) {
        const position = coordinateTuple.slice(), vertex = new Vertex(position);
        return vertex;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlcnRleCIsInBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJyb3RhdGUiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGVQb3NpdGlvbiIsImFwcGx5VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiY2xvbmUiLCJzbGljZSIsInZlcnRleCIsImZyb21Qb3NpdGlvbiIsImZyb21Db29yZGluYXRlVHVwbGUiLCJjb29yZGluYXRlVHVwbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7MEJBRlU7QUFFaEIsTUFBTUE7SUFDbkIsWUFBWUMsUUFBUSxDQUFFO1FBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtJQUNsQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNELFFBQVE7SUFDdEI7SUFFQUUsT0FBT0Msa0JBQWtCLEVBQUU7UUFDekIsSUFBSSxDQUFDSCxRQUFRLEdBQUdJLElBQUFBLHdCQUFjLEVBQUMsSUFBSSxDQUFDSixRQUFRLEVBQUVHO0lBQ2hEO0lBRUFFLGVBQWVDLFNBQVMsRUFBRTtRQUN4QixJQUFJLENBQUNOLFFBQVEsR0FBR00sVUFBVSxJQUFJLENBQUNOLFFBQVE7SUFDekM7SUFFQU8sUUFBUTtRQUNOLE1BQU1QLFdBQVcsSUFBSSxDQUFDQSxRQUFRLENBQUNRLEtBQUssSUFDOUJDLFNBQVMsSUFBSVYsT0FBT0M7UUFFMUIsT0FBT1M7SUFDVDtJQUVBLE9BQU9DLGFBQWFWLFFBQVEsRUFBRTtRQUM1QixNQUFNUyxTQUFTLElBQUlWLE9BQU9DO1FBRTFCLE9BQU9TO0lBQ1Q7SUFFQSxPQUFPRSxvQkFBb0JDLGVBQWUsRUFBRTtRQUMxQyxNQUFNWixXQUFXWSxnQkFBZ0JKLEtBQUssSUFDaENDLFNBQVMsSUFBSVYsT0FBT0M7UUFFMUIsT0FBT1M7SUFDVDtBQUNGIn0=