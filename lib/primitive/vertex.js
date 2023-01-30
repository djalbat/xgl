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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGV4LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWZXJ0ZXgiLCJwb3NpdGlvbiIsImdldFBvc2l0aW9uIiwicm90YXRlIiwicm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlUG9zaXRpb24iLCJhcHBseVRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImNsb25lIiwic2xpY2UiLCJ2ZXJ0ZXgiLCJmcm9tUG9zaXRpb24iLCJmcm9tQ29vcmRpbmF0ZVR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozt3QkFGVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxRQUFROzhCQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2lCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGtCQUFrQixFQUFFO2dCQUN6QixJQUFJLENBQUNILFFBQVEsR0FBR0ksSUFBQUEsd0JBQWMsRUFBQyxJQUFJLENBQUNKLFFBQVEsRUFBRUc7WUFDaEQ7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFO2dCQUN4QixJQUFJLENBQUNOLFFBQVEsR0FBR00sVUFBVSxJQUFJLENBQUNOLFFBQVE7WUFDekM7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUTtnQkFDTixJQUFNUCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDUSxLQUFLLElBQzlCQyxTQUFTLElBbkJFVixPQW1CU0M7Z0JBRTFCLE9BQU9TO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYVYsUUFBUSxFQUFFO2dCQUM1QixJQUFNUyxTQUFTLElBekJFVixPQXlCU0M7Z0JBRTFCLE9BQU9TO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JDLGVBQWUsRUFBRTtnQkFDMUMsSUFBTVosV0FBV1ksZ0JBQWdCSixLQUFLLElBQ2hDQyxTQUFTLElBaENFVixPQWdDU0M7Z0JBRTFCLE9BQU9TO1lBQ1Q7OztXQW5DbUJWIn0=