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
                var edges = facet.getEdges(), intersections = edges.map((function(edge) {
                    var intersection = (0, _intersection).calculateIntersection(edge, this.firstPositionComponent);
                    return intersection;
                }).bind(this));
                facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
        },
        {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
                var smallerFacets = [];
                facets.forEach((function(facet) {
                    facet.rotate(this.forwardsRotationQuaternion);
                    this.splitFacet(facet, smallerFacets, marginOfError);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIl0sIm5hbWVzIjpbImZpcnN0Iiwicm90YXRlUG9zaXRpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJWZXJ0aWNhbExpbmUiLCJjb25zdHJ1Y3RvciIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImdldEZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsInNwbGl0RmFjZXQiLCJmYWNldCIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiZWRnZXMiLCJnZXRFZGdlcyIsImludGVyc2VjdGlvbnMiLCJtYXAiLCJlZGdlIiwiaW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoSW50ZXJzZWN0aW9ucyIsInNwbGl0RmFjZXRzIiwiZmFjZXRzIiwiZm9yRWFjaCIsInJvdGF0ZSIsInNtYWxsZXJGYWNldCIsImZyb21NYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlIiwibWFza2luZ0VkZ2VQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwicm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsInBvc2l0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwidmVydGljYWxMaW5lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQW9CLENBQXBCLE1BQW9CO0FBQ1gsR0FBdUIsQ0FBdkIsU0FBdUI7QUFDaEIsR0FBMkIsQ0FBM0Is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LFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUludGVyc2VjdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvaW50ZXJzZWN0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGluZSB7XG4gIGNvbnN0cnVjdG9yKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZpcnN0UG9zaXRpb25Db21wb25lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgfVxuICBcbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IGVkZ2VzID0gZmFjZXQuZ2V0RWRnZXMoKSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb25zID0gZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBjYWxjdWxhdGVJbnRlcnNlY3Rpb24oZWRnZSwgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbjtcbiAgICAgICAgICB9KTtcblxuICAgIGZhY2V0LnNwbGl0V2l0aEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gIH1cblxuICBzcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgICAgdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICB9KTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaCgoc21hbGxlckZhY2V0KSA9PiBzbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpIHtcbiAgICBjb25zdCBtYXNraW5nRWRnZVBvc2l0aW9uID0gbWFza2luZ0VkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbihtYXNraW5nRWRnZSksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgIC8vL1xuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHJvdGF0ZVBvc2l0aW9uKG1hc2tpbmdFZGdlUG9zaXRpb24sIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb25Db21wb25lbnRzID0gcG9zaXRpb24sIC8vL1xuICAgICAgICAgIGZpcnN0UG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChwb3NpdGlvbkNvbXBvbmVudHMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZSA9IG5ldyBWZXJ0aWNhbExpbmUoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICB9XG59XG4iXX0=