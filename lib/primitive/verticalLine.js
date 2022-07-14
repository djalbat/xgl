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
                    return smallerFacet.rotate(_this.backwardsRotationQuaternion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lIiwiZmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCIsImdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwic3BsaXRGYWNldCIsImZhY2V0Iiwic21hbGxlckZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJlZGdlcyIsImdldEVkZ2VzIiwiaW50ZXJzZWN0aW9ucyIsIm1hcCIsImVkZ2UiLCJpbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwic3BsaXRGYWNldHMiLCJmYWNldHMiLCJmb3JFYWNoIiwicm90YXRlIiwic21hbGxlckZhY2V0IiwiZnJvbU1hc2tpbmdFZGdlIiwibWFza2luZ0VkZ2UiLCJtYXNraW5nRWRnZVBvc2l0aW9uIiwiZ2V0UG9zaXRpb24iLCJyb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uIiwiY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicG9zaXRpb24iLCJyb3RhdGVQb3NpdGlvbiIsInBvc2l0aW9uQ29tcG9uZW50cyIsImZpcnN0IiwidmVydGljYWxMaW5lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFPUUEsWUFBWTs7O3FCQUxYLG9CQUFvQjt3QkFDWCx1QkFBdUI7NEJBQ2hCLDJCQUEyQjswQkFDZ0UseUJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzSSxJQUFBLEFBQU1BLFlBQVksaUJBQWxCO2FBQU1BLFlBQVksQ0FDbkJDLHNCQUFzQixFQUFFQywwQkFBMEIsRUFBRUMsMkJBQTJCOztRQUN6RixJQUFJLENBQUNGLHNCQUFzQixHQUFH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