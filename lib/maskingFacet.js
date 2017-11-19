'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    rotationUtilities = require('./utilities/rotation'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane');

var dilute = arrayUtilities.dilute,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateRotationQuaternion = rotationUtilities.calculateRotationQuaternion,
    calculateForwardsRotationQuaternion = rotationUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = rotationUtilities.calculateBackwardsRotationQuaternion;

var MaskingFacet = function (_Facet) {
  _inherits(MaskingFacet, _Facet);

  function MaskingFacet(vertices, normal, rotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    var _this = _possibleConstructorReturn(this, (MaskingFacet.__proto__ || Object.getPrototypeOf(MaskingFacet)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;
    return _this;
  }

  _createClass(MaskingFacet, [{
    key: 'getRotationQuaternion',
    value: function getRotationQuaternion() {
      return this.rotationQuaternion;
    }
  }, {
    key: 'getLinesInXYPlane',
    value: function getLinesInXYPlane() {
      var verticesLength = 3,
          ///
      linesInXYPlane = this.vertices.map(function (vertex, index) {
        var startIndex = index,
            endIndex = (startIndex + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            lineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

        return lineInXYPlane;
      }.bind(this));

      return linesInXYPlane;
    }
  }, {
    key: 'maskFacet',
    value: function maskFacet(facet, unmaskedFacets) {
      var forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

      facet.rotate(forwardsRotationQuaternion);

      var smallerFacets = this.splitFacet(facet);

      this.diluteSmallerFacets(smallerFacets, unmaskedFacets);

      smallerFacets.forEach(function (smallerFacet) {
        smallerFacet.rotate(backwardsRotationQuaternion);
      });
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var linesInXYPlane = this.getLinesInXYPlane();

      var facets = [facet],
          smallerFacets = facets; ///

      linesInXYPlane.forEach(function (lineInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

        smallerFacets = verticalLineInXYPlane.splitFacets(facets);

        facets = smallerFacets; ///
      });

      return smallerFacets;
    }
  }, {
    key: 'diluteSmallerFacets',
    value: function diluteSmallerFacets(smallerFacets, unmaskedFacets) {
      var linesInXYPlane = this.getLinesInXYPlane();

      dilute(smallerFacets, unmaskedFacets, function (smallerFacet) {
        var smallerFacetOutsideLinesInXYPlane = smallerFacet.isOutsideLinesInXYPlane(linesInXYPlane),
            smallerFacetUnmasked = smallerFacetOutsideLinesInXYPlane; ///

        return smallerFacetUnmasked;
      });
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      normal = calculateNormal(vertices);

      var maskingFacet = new MaskingFacet(vertices, normal, rotationQuaternion);

      return maskingFacet;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var facet = Facet.fromVertices(vertices),
          maskingFacet = MaskingFacet.fromFacet(facet);

      return maskingFacet;
    }
  }]);

  return MaskingFacet;
}(Facet);

module.exports = MaskingFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNraW5nRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJyb3RhdGlvblV0aWxpdGllcyIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsImRpbHV0ZSIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJNYXNraW5nRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXNJblhZUGxhbmUiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsInVubWFza2VkRmFjZXRzIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGUiLCJzbWFsbGVyRmFjZXRzIiwic3BsaXRGYWNldCIsImRpbHV0ZVNtYWxsZXJGYWNldHMiLCJmb3JFYWNoIiwic21hbGxlckZhY2V0IiwiZ2V0TGluZXNJblhZUGxhbmUiLCJmYWNldHMiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmcm9tTGluZUluWFlQbGFuZSIsInNwbGl0RmFjZXRzIiwic21hbGxlckZhY2V0T3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwiaXNPdXRzaWRlTGluZXNJblhZUGxhbmUiLCJzbWFsbGVyRmFjZXRVbm1hc2tlZCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza2lu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YUFBT0EsYUFBUDtBQUNEOzs7d0NBRW1CQSxhLEVBQWVKLGMsRUFBZ0I7QUFDakQsVUFBTVosaUJBQWlCLEtBQUtxQixpQkFBTCxFQUF2Qjs7QUFFQWhDLGFBQU8yQixhQUFQLEVBQXNCSixjQUF0QixFQUFzQyxVQUFTUSxZQUFULEVBQXVCO0FBQzNELFlBQU1NLG9DQUFvQ04sYUFBYU8sdUJBQWIsQ0FBcUMzQixjQUFyQyxDQUExQztBQUFBLFlBQ000Qix1QkFBdUJGLGlDQUQ3QixDQUQyRCxDQUVLOztBQUVoRSxlQUFPRSxvQkFBUDtBQUNELE9BTEQ7QUFNRDs7OzhCQUVnQmpCLEssRUFBTztBQUN0QixVQUFJZCxTQUFTYyxNQUFNa0IsU0FBTixFQUFiOztBQUVBLFVBQU0vQixxQkFBcUJOLDRCQUE0QkssTUFBNUIsQ0FBM0I7O0FBRUEsVUFBSUQsV0FBV2UsTUFBTW1CLFdBQU4sRUFBZjs7QUFFQWxDLGlCQUFXTCxlQUFlSyxRQUFmLEVBQXlCRSxrQkFBekIsQ0FBWDs7QUFFQUQsZUFBU1AsZ0JBQWdCTSxRQUFoQixDQUFUOztBQUVBLFVBQU1tQyxlQUFlLElBQUlwQyxZQUFKLENBQWlCQyxRQUFqQixFQUEyQkMsTUFBM0IsRUFBbUNDLGtCQUFuQyxDQUFyQjs7QUFFQSxhQUFPaUMsWUFBUDtBQUNEOzs7aUNBRW1CbkMsUSxFQUFVO0FBQzVCLFVBQU1lLFFBQVE3QixNQUFNMkIsWUFBTixDQUFtQmIsUUFBbkIsQ0FBZDtBQUFBLFVBQ01tQyxlQUFlcEMsYUFBYXFDLFNBQWIsQ0FBdUJyQixLQUF2QixDQURyQjs7QUFHQSxhQUFPb0IsWUFBUDtBQUNEOzs7O0VBNUZ3QmpELEs7O0FBK0YzQm1ELE9BQU9DLE9BQVAsR0FBaUJ2QyxZQUFqQiIsImZpbGUiOiJtYXNraW5nRmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi9mYWNldCcpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpLFxuICAgICAgVmVydGljYWxMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi92ZXJ0aWNhbExpbmVJblhZUGxhbmUnKTtcblxuY29uc3QgeyBkaWx1dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0ZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRMaW5lc0luWFlQbGFuZSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsIC8vL1xuICAgICAgICAgIGxpbmVzSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgdmVydGljZXNMZW5ndGgsXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHRoaXMudmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBMaW5lSW5YWVBsYW5lLmZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBsaW5lc0luWFlQbGFuZTtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgZmFjZXQucm90YXRlKGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpO1xuXG4gICAgdGhpcy5kaWx1dGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIHVubWFza2VkRmFjZXRzKTtcblxuICAgIHNtYWxsZXJGYWNldHMuZm9yRWFjaChmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIHNtYWxsZXJGYWNldC5yb3RhdGUoYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpO1xuXG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIGxpbmVzSW5YWVBsYW5lLmZvckVhY2goZnVuY3Rpb24obGluZUluWFlQbGFuZSkge1xuICAgICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpO1xuXG4gICAgICBzbWFsbGVyRmFjZXRzID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IHNtYWxsZXJGYWNldHM7IC8vL1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNtYWxsZXJGYWNldHM7XG4gIH1cblxuICBkaWx1dGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgbGluZXNJblhZUGxhbmUgPSB0aGlzLmdldExpbmVzSW5YWVBsYW5lKCk7XG5cbiAgICBkaWx1dGUoc21hbGxlckZhY2V0cywgdW5tYXNrZWRGYWNldHMsIGZ1bmN0aW9uKHNtYWxsZXJGYWNldCkge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0T3V0c2lkZUxpbmVzSW5YWVBsYW5lID0gc21hbGxlckZhY2V0LmlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lKGxpbmVzSW5YWVBsYW5lKSxcbiAgICAgICAgICAgIHNtYWxsZXJGYWNldFVubWFza2VkID0gc21hbGxlckZhY2V0T3V0c2lkZUxpbmVzSW5YWVBsYW5lOyAvLy9cblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldFVubWFza2VkO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcbiJdfQ==