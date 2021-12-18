"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _array = require("../utilities/array");
var _rotation = require("../utilities/rotation");
var _intersection = require("../utilities/intersection");
var _quaternion = require("../utilities/quaternion");
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
var VerticalLine = /*#__PURE__*/ function() {
    function VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
        _classCallCheck(this, VerticalLine);
        this.firstPositionComponent = firstPositionComponent;
        this.forwardsRotationQuaternion = forwardsRotationQuaternion;
        this.backwardsRotationQuaternion = backwardsRotationQuaternion;
    }
    _createClass(VerticalLine, [
        {
            key: "getFirstPositionComponent",
            value: function getFirstPositionComponent() {
                return this.firstPositionComponent;
            }
        },
        {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
                return this.forwardsRotationQuaternion;
            }
        },
        {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
                return this.backwardsRotationQuaternion;
            }
        },
        {
            key: "splitFacet",
            value: function splitFacet(facet, smallerFacets, marginOfError) {
                var _this = this;
                var edges = facet.getEdges(), intersections = edges.map(function(edge) {
                    var intersection = (0, _intersection).calculateIntersection(edge, _this.firstPositionComponent);
                    return intersection;
                });
                facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
        },
        {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
                var _this = this;
                var smallerFacets = [];
                facets.forEach(function(facet) {
                    facet.rotate(_this.forwardsRotationQuaternion);
                    _this.splitFacet(facet, smallerFacets, marginOfError);
                });
                smallerFacets.forEach(function(smallerFacet) {
                    return smallerFacet.rotate(_this.backwardsRotationQuaternion);
                });
                return smallerFacets;
            }
        }
    ], [
        {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
                var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion).calculateRotationAboutZAxisQuaternion(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), position = (0, _rotation).rotatePosition(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array).first(positionComponents), verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
                return verticalLine;
            }
        }
    ]);
    return VerticalLine;
}();
exports.default = VerticalLine;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWZXJ0aWNhbExpbmUiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJzcGxpdEZhY2V0IiwiZmFjZXQiLCJzbWFsbGVyRmFjZXRzIiwibWFyZ2luT2ZFcnJvciIsImVkZ2VzIiwiZ2V0RWRnZXMiLCJpbnRlcnNlY3Rpb25zIiwibWFwIiwiZWRnZSIsImludGVyc2VjdGlvbiIsInNwbGl0V2l0aEludGVyc2VjdGlvbnMiLCJzcGxpdEZhY2V0cyIsImZhY2V0cyIsImZvckVhY2giLCJyb3RhdGUiLCJzbWFsbGVyRmFjZXQiLCJmcm9tTWFza2luZ0VkZ2UiLCJtYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJwb3NpdGlvbiIsInBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRpY2FsTGluZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFvQixDQUFwQixNQUFvQjtBQUNYLEdBQXVCLENBQXZCLFNBQXVCO0FBQ2hCLEdBQTJCLENBQTNCLGFBQTJCO0FBQ2dFLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySUEsWUFBWSxpQkFBbEIsUUFBUTthQUFGQSxZQUFZLENBQ25CQyxzQkFBc0IsRUFBRUMsMEJBQTBCLEVBQUVDLDJCQUEyQjs4QkFEeEVILFlBQVk7UUFFN0IsSUFBSSxDQUFDQyxzQkFBc0IsR0FBR0Esc0JBQXNCO1FBQ3BELElBQUksQ0FBQ0MsMEJBQTBCLEdBQUdBLDBCQUEwQjtRQUM1RCxJQUFJLENBQUNDLDJCQUEyQixHQUFHQSwyQkFBMkI7O2lCQUo3Q0gsWUFBWTs7WUFPL0JJLEdBQXlCLEVBQXpCQSxDQUF5QjttQkFBekJBLFFBQVEsQ0FBUkEseUJBQXlCLEdBQUcsQ0FBQztnQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQ0gs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