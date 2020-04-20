"use strict";

var _masking = _interopRequireDefault(require("./edge/masking"));

var _verticalLine = _interopRequireDefault(require("./verticalLine"));

var _vertices = require("../utilities/vertices");

var _array = require("../utilities/array");

var _constants = require("../constants");

var _quaternion = require("../utilities/quaternion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MaskingFacet = /*#__PURE__*/function () {
  function MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    this.maskingEdges = maskingEdges;
    this.verticalLines = verticalLines;
    this.forwardsRotationQuaternion = forwardsRotationQuaternion;
    this.backwardsRotationQuaternion = backwardsRotationQuaternion;
  }

  _createClass(MaskingFacet, [{
    key: "getMaskingEdges",
    value: function getMaskingEdges() {
      return this.maskingEdges;
    }
  }, {
    key: "getVerticalLines",
    value: function getVerticalLines() {
      return this.verticalLines;
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
    key: "maskFacet",
    value: function maskFacet(facet, unmaskedFacets) {
      var _this = this;

      var unmaskedFacet = facet.clone(); ///

      facet.rotate(this.forwardsRotationQuaternion);
      var maskingFacet = this,
          ///
      smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];
      (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function (smallerFacet) {
        var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
        return smallerFacetMasked;
      });
      var maskedSmallerFacetsLength = maskedSmallerFacets.length;

      if (maskedSmallerFacetsLength === 0) {
        unmaskedFacets.push(unmaskedFacet);
      } else {
        unmaskedSmallerFacets.forEach(function (unmaskedSmallerFacet) {
          unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
        });
        (0, _array.push)(unmaskedFacets, unmaskedSmallerFacets);
      }
    }
  }, {
    key: "splitFacet",
    value: function splitFacet(facet) {
      var facets = [facet],
          smallerFacets = facets; ///

      this.verticalLines.forEach(function (verticalLine) {
        smallerFacets = verticalLine.splitFacets(facets);
        facets = smallerFacets; ///
      });
      return smallerFacets;
    }
  }], [{
    key: "fromFacet",
    value: function fromFacet(facet) {
      var facetNormal = facet.getNormal(),
          facetVertices = facet.getVertices(),
          normal = facetNormal,
          ///
      arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal),
          rotationQuaternion = arbitraryRotationQuaternion,
          ///
      vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion),
          maskingEdges = calculateMaskingEdges(vertices),
          verticalLines = maskingEdges.map(function (maskingEdge) {
        var verticalLine = _verticalLine["default"].fromMaskingEdge(maskingEdge);

        return verticalLine;
      }),
          forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion),
          backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion),
          maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
      return maskingFacet;
    }
  }]);

  return MaskingFacet;
}();

module.exports = MaskingFacet;

function calculateMaskingEdges(vertices) {
  var maskingEdges = vertices.map(function (vertex, index) {
    var startIndex = index,
        endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH,
        startVertex = vertices[startIndex],
        endVertex = vertices[endIndex],
        maskingEdge = _masking["default"].fromStartVertexAndEndVertex(startVertex, endVertex);

    return maskingEdge;
  });
  return maskingEdges;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmdGYWNldC5qcyJdLCJuYW1lcyI6WyJNYXNraW5nRmFjZXQiLCJtYXNraW5nRWRnZXMiLCJ2ZXJ0aWNhbExpbmVzIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJmYWNldCIsInVubWFza2VkRmFjZXRzIiwidW5tYXNrZWRGYWNldCIsImNsb25lIiwicm90YXRlIiwibWFza2luZ0ZhY2V0Iiwic21hbGxlckZhY2V0cyIsInNwbGl0RmFjZXQiLCJtYXNrZWRTbWFsbGVyRmFjZXRzIiwidW5tYXNrZWRTbWFsbGVyRmFjZXRzIiwic21hbGxlckZhY2V0Iiwic21hbGxlckZhY2V0TWFza2VkIiwiaXNNYXNrZWQiLCJtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoIiwibGVuZ3RoIiwicHVzaCIsImZvckVhY2giLCJ1bm1hc2tlZFNtYWxsZXJGYWNldCIsImZhY2V0cyIsInZlcnRpY2FsTGluZSIsInNwbGl0RmFjZXRzIiwiZmFjZXROb3JtYWwiLCJnZXROb3JtYWwiLCJmYWNldFZlcnRpY2VzIiwiZ2V0VmVydGljZXMiLCJub3JtYWwiLCJhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ2ZXJ0aWNlcyIsImNhbGN1bGF0ZU1hc2tpbmdFZGdlcyIsIm1hcCIsIm1hc2tpbmdFZGdlIiwiVmVydGljYWxMaW5lIiwiZnJvbU1hc2tpbmdFZGdlIiwibW9kdWxlIiwiZXhwb3J0cyIsInZlcnRleCIsImluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4IiwiVkVSVElDRVNfTEVOR1RIIiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJNYXNraW5nRWRnZSIsImZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFZ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QixDQUFyQjs7QUFFQSxlQUFPWixZQUFQO0FBQ0QsT0FKZSxDQVB0QjtBQUFBLFVBWU1yQiwwQkFBMEIsR0FBRyxxREFBb0M2QixrQkFBcEMsQ0FabkM7QUFBQSxVQWFNNUIsMkJBQTJCLEdBQUcsc0RBQXFDNEIsa0JBQXJDLENBYnBDO0FBQUEsVUFjTXRCLFlBQVksR0FBRyxJQUFJVixZQUFKLENBQWlCQyxZQUFqQixFQUErQkMsYUFBL0IsRUFBOENDLDBCQUE5QyxFQUEwRUMsMkJBQTFFLENBZHJCO0FBZ0JBLGFBQU9NLFlBQVA7QUFDRDs7Ozs7O0FBR0g2QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QyxZQUFqQjs7QUFFQSxTQUFTa0MscUJBQVQsQ0FBK0JELFFBQS9CLEVBQXlDO0FBQ3ZDLE1BQU1oQyxZQUFZLEdBQUdnQyxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDTSxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDN0MsUUFBTUMsVUFBVSxHQUFHRCxLQUFuQjtBQUFBLFFBQ01FLFFBQVEsR0FBRyxDQUFDRCxVQUFVLEdBQUcsQ0FBZCxJQUFtQkUsMEJBRHBDO0FBQUEsUUFFTUMsV0FBVyxHQUFHYixRQUFRLENBQUNVLFVBQUQsQ0FGNUI7QUFBQSxRQUdNSSxTQUFTLEdBQUdkLFFBQVEsQ0FBQ1csUUFBRCxDQUgxQjtBQUFBLFFBSU1SLFdBQVcsR0FBR1ksb0JBQVlDLDJCQUFaLENBQXdDSCxXQUF4QyxFQUFxREMsU0FBckQsQ0FKcEI7O0FBTUEsV0FBT1gsV0FBUDtBQUNELEdBUmMsQ0FBckI7QUFVQSxTQUFPbkMsWUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXNraW5nRWRnZSBmcm9tIFwiLi9lZGdlL21hc2tpbmdcIjtcbmltcG9ydCBWZXJ0aWNhbExpbmUgZnJvbSBcIi4vdmVydGljYWxMaW5lXCI7XG5cbmltcG9ydCB7IHJvdGF0ZVZlcnRpY2VzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgcHVzaCwgc2VwYXJhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBwdXNoKHVubWFza2VkRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMpO1xuICAgIH1cbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICB0aGlzLnZlcnRpY2FsTGluZXMuZm9yRWFjaCgodmVydGljYWxMaW5lKSA9PiB7XG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgZmFjZXROb3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKSxcbiAgICAgICAgICBmYWNldFZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgICBub3JtYWwgPSBmYWNldE5vcm1hbCwgLy8vXG4gICAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCksXG4gICAgICAgICAgcm90YXRpb25RdWF0ZXJuaW9uID0gYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKGZhY2V0VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0VkZ2VzID0gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICB2ZXJ0aWNhbExpbmVzID0gbWFza2luZ0VkZ2VzLm1hcCgobWFza2luZ0VkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsTGluZSA9IFZlcnRpY2FsTGluZS5mcm9tTWFza2luZ0VkZ2UobWFza2luZ0VkZ2UpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdmVydGljYWxMaW5lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFza2luZ0ZhY2V0O1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiJdfQ==