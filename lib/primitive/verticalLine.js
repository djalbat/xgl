"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VerticalLine;
    }
});
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
                    var intersection = (0, _intersection.calculateIntersection)(edge, _this.firstPositionComponent);
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
                    smallerFacet.rotate(_this.backwardsRotationQuaternion);
                });
                return smallerFacets;
            }
        }
    ], [
        {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
                var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array.first)(positionComponents), verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
                return verticalLine;
            }
        }
    ]);
    return VerticalLine;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJWZXJ0aWNhbExpbmUiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJzcGxpdEZhY2V0IiwiZmFjZXQiLCJzbWFsbGVyRmFjZXRzIiwibWFyZ2luT2ZFcnJvciIsImVkZ2VzIiwiZ2V0RWRnZXMiLCJpbnRlcnNlY3Rpb25zIiwibWFwIiwiZWRnZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbiIsInNwbGl0V2l0aEludGVyc2VjdGlvbnMiLCJzcGxpdEZhY2V0cyIsImZhY2V0cyIsImZvckVhY2giLCJyb3RhdGUiLCJzbWFsbGVyRmFjZXQiLCJmcm9tTWFza2luZ0VkZ2UiLCJtYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24iLCJjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uIiwicm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJwb3NpdGlvbiIsInJvdGF0ZVBvc2l0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwiZmlyc3QiLCJ2ZXJ0aWNhbExpbmUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O3FCQUxDO3dCQUNTOzRCQUNPOzBCQUMyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEgsSUFBQSxBQUFNQSw2QkFBTjthQUFNQSxhQUNQQyxzQkFBc0IsRUFBRUMsMEJBQTBCLEVBQUVDLDJCQUEyQjs4QkFEeEVIO1FBRWpCLElBQUksQ0FBQ0Msc0JBQXNCLEdBQUdBO1FBQzlCLElBQUksQ0FBQ0MsMEJBQTBCLEdBQUdBO1FBQ2xDLElBQUksQ0FBQ0MsMkJBQTJCLEdBQUdBOztpQkFKbEJIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QjtnQkFDMUIsT0FBTyxJQUFJLENBQUNILHNCQUFzQjtZQUNwQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQ0FBZ0M7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDSCwwQkFBMEI7WUFDeEM7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDO2dCQUMvQixPQUFPLElBQUksQ0FBQ0gsMkJBQTJCO1lBQ3pDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUU7O2dCQUM5QyxJQUFNQyxRQUFRSCxNQUFNSSxRQUFRLElBQ3RCQyxnQkFBZ0JGLE1BQU1HLEdBQUcsQ0FBQyxTQUFDQyxNQUFTO29CQUNsQyxJQUFNQyxlQUFlQyxJQUFBQSxtQ0FBcUIsRUFBQ0YsTUFBTSxNQUFLZCxzQkFBc0I7b0JBRTVFLE9BQU9lO2dCQUNUO2dCQUVOUixNQUFNVSxzQkFBc0IsQ0FBQ0wsZUFBZUosZUFBZUM7WUFDN0Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUMsTUFBTSxFQUFFVixhQUFhLEVBQUU7O2dCQUNqQyxJQUFNRCxnQkFBZ0IsRUFBRTtnQkFFeEJXLE9BQU9DLE9BQU8sQ0FBQyxTQUFDYixPQUFVO29CQUN4QkEsTUFBTWMsTUFBTSxDQUFDLE1BQUtwQiwwQkFBMEI7b0JBRTVDLE1BQUtLLFVBQVUsQ0FBQ0MsT0FBT0MsZUFBZUM7Z0JBQ3hDO2dCQUVBRCxjQUFjWSxPQUFPLENBQUMsU0FBQ0UsY0FBaUI7b0JBQ3RDQSxhQUFhRCxNQUFNLENBQUMsTUFBS25CLDJCQUEyQjtnQkFDdEQ7Z0JBRUEsT0FBT007WUFDVDs7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JDLFdBQVcsRUFBRTtnQkFDbEMsSUFBTUMsc0JBQXNCRCxZQUFZRSxXQUFXLElBQzdDQywrQkFBK0JDLElBQUFBLGlEQUFxQyxFQUFDSixjQUNyRUsscUJBQXFCRiw4QkFDckIxQiw2QkFBNkI2QixJQUFBQSwrQ0FBbUMsRUFBQ0QscUJBQ2pFM0IsOEJBQThCNkIsSUFBQUEsZ0RBQW9DLEVBQUNGLHFCQUNuRUcsV0FBV0MsSUFBQUEsd0JBQWMsRUFBQ1IscUJBQXFCSSxxQkFDL0NLLHFCQUFxQkYsVUFDckJoQyx5QkFBeUJtQyxJQUFBQSxZQUFLLEVBQUNELHFCQUMvQkUsZUFBZSxJQXZESnJDLGFBdURxQkMsd0JBQXdCQyw0QkFBNEJDO2dCQUUxRixPQUFPa0M7WUFDVDs7O1dBMURtQnJDIn0=