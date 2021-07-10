"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
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
var Zoom = /*#__PURE__*/ function() {
    function Zoom(distance) {
        _classCallCheck(this, Zoom);
        this.distance = distance;
    }
    _createClass(Zoom, [
        {
            key: "getDistance",
            value: function getDistance() {
                return this.distance;
            }
        },
        {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
                this.distance -= mouseWheelDelta * _constants.DELTA_SCALAR;
                this.distance = Math.max(_constants.MINIMUM_DISTANCE, this.distance);
            }
        }
    ], [
        {
            key: "fromInitialDistance",
            value: function fromInitialDistance(initialDistance) {
                var distance = initialDistance, zoom = new Zoom(distance);
                return zoom;
            }
        }
    ]);
    return Zoom;
}();
exports.default = Zoom;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFTFRBX1NDQUxBUiwgTUlOSU1VTV9ESVNUQU5DRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbSB7XG4gIGNvbnN0cnVjdG9yKGRpc3RhbmNlKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICB9XG5cbiAgZ2V0RGlzdGFuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzdGFuY2U7XG4gIH1cblxuICB1cGRhdGVEaXN0YW5jZShtb3VzZVdoZWVsRGVsdGEpIHtcbiAgICB0aGlzLmRpc3RhbmNlIC09IG1vdXNlV2hlZWxEZWx0YSAqIERFTFRBX1NDQUxBUjtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heChNSU5JTVVNX0RJU1RBTkNFLCB0aGlzLmRpc3RhbmNlKTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Jbml0aWFsRGlzdGFuY2UoaW5pdGlhbERpc3RhbmNlKSB7XG4gICAgY29uc3QgZGlzdGFuY2UgPSBpbml0aWFsRGlzdGFuY2UsIC8vL1xuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSk7XG4gICAgXG4gICAgcmV0dXJuIHpvb207XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVtQyxHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFeEMsSUFBSTthQUFKLElBQUksQ0FDWCxRQUFROzhCQURELElBQUk7YUFFaEIsUUFBUSxHQUFHLFFBQVE7O2lCQUZQLElBQUk7O1lBS3ZCLEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsR0FBRyxDQUFDOzRCQUNELFFBQVE7WUFDdEIsQ0FBQzs7O1lBRUQsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUMxQixRQUFRLElBQUksZUFBZSxHQVpXLFVBQWM7cUJBY3BELFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQWRtQixVQUFjLHdCQWNULFFBQVE7WUFDMUQsQ0FBQzs7OztZQUVNLEdBQW1CLEdBQW5CLG1CQUFtQjs0QkFBbkIsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzNDLEdBQUssQ0FBQyxRQUFRLEdBQUcsZUFBZSxFQUMxQixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRO3VCQUV2QixJQUFJO1lBQ2IsQ0FBQzs7O1dBcEJrQixJQUFJOztrQkFBSixJQUFJIn0=