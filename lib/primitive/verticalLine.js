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
            value: function splitFacet(facet, smallerFacets) {
                var edges = facet.getEdges(), intersections = edges.map((function(edge) {
                    var intersection = (0, _intersection).calculateIntersection(edge, this.firstPositionComponent);
                    return intersection;
                }).bind(this));
                facet.splitWithIntersections(intersections, smallerFacets);
            }
        },
        {
            key: "splitFacets",
            value: function splitFacets(facets) {
                var smallerFacets = [];
                facets.forEach((function(facet) {
                    facet.rotate(this.forwardsRotationQuaternion);
                    this.splitFacet(facet, smallerFacets);
                }).bind(this));
                smallerFacets.forEach((function(smallerFacet) {
                    return smallerFacet.rotate(this.backwardsRotationQuaternion);
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQW9CLENBQXBCLE1BQW9CO0FBQ1gsR0FBdUIsQ0FBdkIsU0FBdUI7QUFDaEIsR0FBMkIsQ0FBM0IsYUFBMkI7QUFDZ0UsR0FBeUIsQ0FBekIsV0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJJLFlBQVk7YUFBWixZQUFZLENBQ25CLHNCQUFzQixFQUFFLDBCQUEwQixFQUFFLDJCQUEyQjs4QkFEeEUsWUFBWTthQUV4QixzQkFBc0IsR0FBRyxzQkFBc0I7YUFDL0MsMEJBQTBCLEdBQUcsMEJBQTBCO2FBQ3ZELDJCQUEyQixHQUFHLDJCQUEyQjs7aUJBSjdDLFlBQVk7O1lBTy9CLEdBQXlCLEdBQXpCLHlCQUF5Qjs0QkFBekIseUJBQXlCLEdBQUcsQ0FBQzs0QkFDZixzQkFBc0I7WUFDcEMsQ0FBQzs7O1lBRUQsR0FBNkIsR0FBN0IsNkJBQTZCOzRCQUE3Qiw2QkFBNkIsR0FBRyxDQUFDOzRCQUNuQiwwQkFBMEI7WUFDeEMsQ0FBQzs7O1lBRUQsR0FBOEIsR0FBOUIsOEJBQThCOzRCQUE5Qiw4QkFBOEIsR0FBRyxDQUFDOzRCQUNwQiwyQkFBMkI7WUFDekMsQ0FBQzs7O1lBRUQsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVSxDQUFDLEtBQUssRUFBRSxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsR0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxJQUN0QixhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsV0FBRSxJQUFJLEVBQUssQ0FBQztvQkFDbkMsR0FBSyxDQUFDLFlBQVksT0F6QlEsYUFBMkIsd0JBeUJWLElBQUksT0FBTyxzQkFBc0I7MkJBRXJFLFlBQVk7Z0JBQ3JCLENBQUM7Z0JBRVAsS0FBSyxDQUFDLHNCQUFzQixDQUFDLGFBQWEsRUFBRSxhQUFhO1lBQzNELENBQUM7OztZQUVELEdBQVcsR0FBWCxXQUFXOzRCQUFYLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDLGFBQWE7Z0JBRW5CLE1BQU0sQ0FBQyxPQUFPLFdBQUUsS0FBSyxFQUFLLENBQUM7b0JBQ3pCLEtBQUssQ0FBQyxNQUFNLE1BQU0sMEJBQTBCO3lCQUV2QyxVQUFVLENBQUMsS0FBSyxFQUFFLGFBQWE7Z0JBQ3RDLENBQUM7Z0JBRUQsYUFBYSxDQUFDLE9BQU8sV0FBRSxZQUFZOzJCQUFLLFlBQVksQ0FBQyxNQUFNLE1BQU0sMkJBQTJCOzt1QkFFckYsYUFBYTtZQUN0QixDQUFDOzs7O1lBRU0sR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQyxHQUFLLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLFdBQVcsSUFDN0MsNEJBQTRCLE9BaEQyRixXQUF5Qix3Q0FnRDNFLFdBQVcsR0FDaEYsa0JBQWtCLEdBQUcsNEJBQTRCLEVBQ2pELDBCQUEwQixPQWxENkYsV0FBeUIsc0NBa0QvRSxrQkFBa0IsR0FDbkYsMkJBQTJCLE9BbkQ0RixXQUF5Qix1Q0FtRDdFLGtCQUFrQixHQUNyRixRQUFRLE9BdERhLFNBQXVCLGlCQXNEbEIsbUJBQW1CLEVBQUUsa0JBQWtCLEdBQ2pFLGtCQUFrQixHQUFHLFFBQVEsRUFDN0Isc0JBQXNCLE9BekRWLE1BQW9CLFFBeURELGtCQUFrQixHQUNqRCxZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSwwQkFBMEIsRUFBRSwyQkFBMkI7dUJBRTlHLFlBQVk7WUFDckIsQ0FBQzs7O1dBeERrQixZQUFZOztrQkFBWixZQUFZIn0=