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
                var _this = this, _this1 = this;
                var smallerFacets = [];
                facets.forEach(function(facet) {
                    facet.rotate(_this.forwardsRotationQuaternion);
                    _this.splitFacet(facet, smallerFacets, marginOfError);
                });
                smallerFacets.forEach(function(smallerFacet) {
                    return smallerFacet.rotate(_this1.backwardsRotationQuaternion);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvdmVydGljYWxMaW5lLmpzIl0sIm5hbWVzIjpbImZpcnN0Iiwicm90YXRlUG9zaXRpb24iLCJjYWxjdWxhdGVJbnRlcnNlY3Rpb24iLCJjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJWZXJ0aWNhbExpbmUiLCJjb25zdHJ1Y3RvciIsImZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImdldEZpcnN0UG9zaXRpb25Db21wb25lbnQiLCJnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsInNwbGl0RmFjZXQiLCJmYWNldCIsInNtYWxsZXJGYWNldHMiLCJtYXJnaW5PZkVycm9yIiwiZWRnZXMiLCJnZXRFZGdlcyIsImludGVyc2VjdGlvbnMiLCJtYXAiLCJlZGdlIiwiaW50ZXJzZWN0aW9uIiwic3BsaXRXaXRoSW50ZXJzZWN0aW9ucyIsInNwbGl0RmFjZXRzIiwiZmFjZXRzIiwiZm9yRWFjaCIsInJvdGF0ZSIsInNtYWxsZXJGYWNldCIsImZyb21NYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlIiwibWFza2luZ0VkZ2VQb3NpdGlvbiIsImdldFBvc2l0aW9uIiwicm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsInBvc2l0aW9uIiwicG9zaXRpb25Db21wb25lbnRzIiwidmVydGljYWxMaW5lIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQW9CLENBQXBCLE1BQW9CO0FBQ1gsR0FBdUIsQ0FBdkIsU0FBdUI7QUFDaEIsR0FBMkIsQ0FBM0Is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XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlUG9zaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3JvdGF0aW9uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVJbnRlcnNlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlUm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExpbmUge1xuICBjb25zdHJ1Y3RvcihmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3RQb3NpdGlvbkNvbXBvbmVudDtcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGaXJzdFBvc2l0aW9uQ29tcG9uZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gIH1cbiAgXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIHNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBlZGdlcyA9IGZhY2V0LmdldEVkZ2VzKCksXG4gICAgICAgICAgaW50ZXJzZWN0aW9ucyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlSW50ZXJzZWN0aW9uKGVkZ2UsIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICBmYWNldC5zcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICB9XG5cbiAgc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3Qgc21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0KSA9PiB7XG4gICAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICAgIHRoaXMuc3BsaXRGYWNldChmYWNldCwgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG4gICAgfSk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goKHNtYWxsZXJGYWNldCkgPT4gc21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikpO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VQb3NpdGlvbiA9IG1hc2tpbmdFZGdlLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sICAvLy9cbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgcG9zaXRpb24gPSByb3RhdGVQb3NpdGlvbihtYXNraW5nRWRnZVBvc2l0aW9uLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uQ29tcG9uZW50cyA9IHBvc2l0aW9uLCAvLy9cbiAgICAgICAgICBmaXJzdFBvc2l0aW9uQ29tcG9uZW50ID0gZmlyc3QocG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmUgPSBuZXcgVmVydGljYWxMaW5lKGZpcnN0UG9zaXRpb25Db21wb25lbnQsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgfVxufVxuIl19