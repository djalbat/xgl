"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _array = require("../utilities/array");

var _rotation = require("../utilities/rotation");

var _intersection = require("../utilities/intersection");

var _quaternion = require("../utilities/quaternion");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VerticalLine = /*#__PURE__*/function () {
  function VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, VerticalLine);

    this.firstPositionComponent = firstPositionComponent;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(VerticalLine, [{
    key: "getFirstPositionComponent",
    value: function getFirstPositionComponent() {
      return this.firstPositionComponent;
    }
  }, {
    key: "getForwardsRotationQuaternion",
    value: function getForwardsRotationQuaternion() {
      return this.forwardsRotationQuaternion;
    }
  }, {
    key: "getBackwardsRotationQuaternion",
    value: function getBackwardsRotationQuaternion() {
      return this.backwardsRotationQuaternion;
    }
  }, {
    key: "splitFacet",
    value: function splitFacet(facet, smallerFacets) {
      var _this = this;

      var edges = facet.getEdges(),
          intersections = edges.map(function (edge) {
        var intersection = (0, _intersection.calculateIntersection)(edge, _this.firstPositionComponent);
        return intersection;
      });
      facet.splitWithIntersections(intersections, smallerFacets);
    }
  }, {
    key: "splitFacets",
    value: function splitFacets(facets) {
      var _this2 = this;

      var smallerFacets = [];
      facets.forEach(function (facet) {
        facet.rotate(_this2.forwardsRotationQuaternion);

        _this2.splitFacet(facet, smallerFacets);
      });
      smallerFacets.forEach(function (smallerFacet) {
        return smallerFacet.rotate(_this2.backwardsRotationQuaternion);
      });
      return smallerFacets;
    }
  }], [{
    key: "fromMaskingEdge",
    value: function fromMaskingEdge(maskingEdge) {
      var maskingEdgePosition = maskingEdge.getPosition(),
          rotationAboutZAxisQuaternion = (0, _quaternion.calculateRotationAboutZAxisQuaternion)(maskingEdge),
          rotationQuaternion = rotationAboutZAxisQuaternion,
          ///
      forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion),
          backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion),
          position = (0, _rotation.rotatePosition)(maskingEdgePosition, rotationQuaternion),
          positionComponents = position,
          ///
      firstPositionComponent = (0, _array.first)(positionComponents),
          verticalLine = new VerticalLine(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
      return verticalLine;
    }
  }]);

  return VerticalLine;
}();

exports["default"] = VerticalLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsTGluZS5qcyJdLCJuYW1lcyI6WyJWZXJ0aWNhbExpbmUiLCJmaXJzdFBvc2l0aW9uQ29tcG9uZW50IiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJmYWNldCIsInNtYWxsZXJGYWNldHMiLCJlZGdlcyIsImdldEVkZ2VzIiwiaW50ZXJzZWN0aW9ucyIsIm1hcCIsImVkZ2UiLCJpbnRlcnNlY3Rpb24iLCJzcGxpdFdpdGhJbnRlcnNlY3Rpb25zIiwiZmFjZXRzIiwiZm9yRWFjaCIsInJvdGF0ZSIsInNwbGl0RmFjZXQiLCJzbWFsbGVyRmFjZXQiLCJtYXNraW5nRWRnZSIsIm1hc2tpbmdFZGdlUG9zaXRpb24iLCJnZXRQb3NpdGlvbiIsInJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJwb3NpdGlvbiIsInBvc2l0aW9uQ29tcG9uZW50cyIsInZlcnRpY2FsTGluZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFcUJBLFk7QUFDbkIsd0JBQVlDLHNCQUFaLEVBQW9DQywwQkFBcEMsRUFBZ0VDLDJCQUFoRSxFQUE2RjtBQUFBOztBQUMzRixTQUFLRixzQkFBTCxHQUE4QkEsc0JBQTlCO0FBQ0EsU0FBS0MsMEJBQUwsR0FBa0NBLDBCQUFsQztBQUNBLFNBQUtDLDJCQUFMLEdBQW1DQSwyQkFBbkM7QUFDRDs7OztnREFFMkI7QUFDMUIsYUFBTyxLQUFLRixzQkFBWjtBQUNEOzs7b0RBRStCO0FBQzlCLGFBQU8sS0FBS0MsMEJBQVo7QUFDRDs7O3FEQUVnQztBQUMvQixhQUFPLEtBQUtDLDJCQUFaO0FBQ0Q7OzsrQkFFVUMsSyxFQUFPQyxhLEVBQWU7QUFBQTs7QUFDL0IsVUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNHLFFBQU4sRUFBZDtBQUFBLFVBQ01DLGFBQWEsR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFVO0FBQ2xDLFlBQU1DLFlBQVksR0FBRyx5Q0FBc0JELElBQXRCLEVBQTRCLEtBQUksQ0FBQ1Qsc0JBQWpDLENBQXJCO0FBRUEsZUFBT1UsWUFBUDtBQUNELE9BSmUsQ0FEdEI7QUFPQVAsTUFBQUEsS0FBSyxDQUFDUSxzQkFBTixDQUE2QkosYUFBN0IsRUFBNENILGFBQTVDO0FBQ0Q7OztnQ0FFV1EsTSxFQUFRO0FBQUE7O0FBQ2xCLFVBQU1SLGFBQWEsR0FBRyxFQUF0QjtBQUVBUSxNQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxVQUFDVixLQUFELEVBQVc7QUFDeEJBLFFBQUFBLEtBQUssQ0FBQ1csTUFBTixDQUFhLE1BQUksQ0FBQ2IsMEJBQWxCOztBQUVBLFFBQUEsTUFBSSxDQUFDYyxVQUFMLENBQWdCWixLQUFoQixFQUF1QkMsYUFBdkI7QUFDRCxPQUpEO0FBTUFBLE1BQUFBLGFBQWEsQ0FBQ1MsT0FBZCxDQUFzQixVQUFDRyxZQUFEO0FBQUEsZUFBa0JBLFlBQVksQ0FBQ0YsTUFBYixDQUFvQixNQUFJLENBQUNaLDJCQUF6QixDQUFsQjtBQUFBLE9BQXRCO0FBRUEsYUFBT0UsYUFBUDtBQUNEOzs7b0NBRXNCYSxXLEVBQWE7QUFDbEMsVUFBTUMsbUJBQW1CLEdBQUdELFdBQVcsQ0FBQ0UsV0FBWixFQUE1QjtBQUFBLFVBQ01DLDRCQUE0QixHQUFHLHVEQUFzQ0gsV0FBdEMsQ0FEckM7QUFBQSxVQUVNSSxrQkFBa0IsR0FBR0QsNEJBRjNCO0FBQUEsVUFFMEQ7QUFDcERuQixNQUFBQSwwQkFBMEIsR0FBRyxxREFBb0NvQixrQkFBcEMsQ0FIbkM7QUFBQSxVQUlNbkIsMkJBQTJCLEdBQUcsc0RBQXFDbUIsa0JBQXJDLENBSnBDO0FBQUEsVUFLTUMsUUFBUSxHQUFHLDhCQUFlSixtQkFBZixFQUFvQ0csa0JBQXBDLENBTGpCO0FBQUEsVUFNTUUsa0JBQWtCLEdBQUdELFFBTjNCO0FBQUEsVUFNcUM7QUFDL0J0QixNQUFBQSxzQkFBc0IsR0FBRyxrQkFBTXVCLGtCQUFOLENBUC9CO0FBQUEsVUFRTUMsWUFBWSxHQUFHLElBQUl6QixZQUFKLENBQWlCQyxzQkFBakIsRUFBeUNDLDBCQUF6QyxFQUFxRUMsMkJBQXJFLENBUnJCO0FBVUEsYUFBT3NCLFlBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cykge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiJdfQ==