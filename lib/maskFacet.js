'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    LineInXYPlane = require('./lineInXYPlane'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

var FacetInXYPlane = function (_Facet) {
  _inherits(FacetInXYPlane, _Facet);

  function FacetInXYPlane(vertices, normal, rotationQuaternion) {
    _classCallCheck(this, FacetInXYPlane);

    var _this = _possibleConstructorReturn(this, (FacetInXYPlane.__proto__ || Object.getPrototypeOf(FacetInXYPlane)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;
    return _this;
  }

  _createClass(FacetInXYPlane, [{
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
    value: function maskFacet(facet) {
      var linesInXYPlane = this.getLinesInXYPlane(),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

      facet.rotate(forwardsRotationQuaternion);

      var facets = [facet];

      facets = this.splitFacetsWithLinesInXYPlane(facets, linesInXYPlane);

      facets = this.keepFacetsOutsideLinesInXYPlane(facets, linesInXYPlane);

      facets.forEach(function (facet) {
        facet.rotate(backwardsRotationQuaternion);
      });

      return facets;
    }
  }, {
    key: 'splitFacetsWithLinesInXYPlane',
    value: function splitFacetsWithLinesInXYPlane(facets, linesInXYPlane) {
      facets = linesInXYPlane.reduce(function (facets, lineInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

        facets = verticalLineInXYPlane.splitFacets(facets);

        return facets;
      }, facets);

      return facets;
    }
  }, {
    key: 'keepFacetsOutsideLinesInXYPlane',
    value: function keepFacetsOutsideLinesInXYPlane(facets, linesInXYPlane) {
      facets = facets.reduce(function (facets, facet, index) {
        var outsideLinesInXYPlane = facet.isOutsideLinesInXYPlane(linesInXYPlane);

        if (outsideLinesInXYPlane) {
          facets.push(facet);
        }

        return facets;
      }, []);

      return facets;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      normal = calculateNormal(vertices);

      var facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion);

      return facetInXYPlane;
    }
  }]);

  return FacetInXYPlane;
}(Facet);

module.exports = FacetInXYPlane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNrRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInZlcnRpY2VzVXRpbGl0aWVzIiwicXVhdGVybmlvblV0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJGYWNldEluWFlQbGFuZSIsInZlcnRpY2VzIiwibm9ybWFsIiwicm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXNMZW5ndGgiLCJsaW5lc0luWFlQbGFuZSIsIm1hcCIsInZlcnRleCIsImluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJsaW5lSW5YWVBsYW5lIiwiZnJvbVZlcnRpY2VzIiwiYmluZCIsImZhY2V0IiwiZ2V0TGluZXNJblhZUGxhbmUiLCJmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsInJvdGF0ZSIsImZhY2V0cyIsInNwbGl0RmFjZXRzV2l0aExpbmVzSW5YWVBsYW5lIiwia2VlcEZhY2V0c091dHNpZGVMaW5lc0luWFlQbGFuZSIsImZvckVhY2giLCJyZWR1Y2UiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmcm9tTGluZUluWFlQbGFuZSIsInNwbGl0RmFjZXRzIiwib3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwiaXNPdXRzaWRlTGluZXNJblhZUGxhbmUiLCJwdXNoIiwiZ2V0Tm9ybWFsIiwiZ2V0VmVydGljZXMiLCJmYWNldEluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEs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QVAsQ0FBWWYsS0FBWjtBQUNEOztBQUVELGVBQU9LLE1BQVA7QUFDRCxPQVJRLEVBUU4sRUFSTSxDQUFUOztBQVVBLGFBQU9BLE1BQVA7QUFDRDs7OzhCQUVnQkwsSyxFQUFPO0FBQ3RCLFVBQUlkLFNBQVNjLE1BQU1nQixTQUFOLEVBQWI7O0FBRUEsVUFBTTdCLHFCQUFxQk4sNEJBQTRCSyxNQUE1QixDQUEzQjs7QUFFQSxVQUFJRCxXQUFXZSxNQUFNaUIsV0FBTixFQUFmOztBQUVBaEMsaUJBQVdMLGVBQWVLLFFBQWYsRUFBeUJFLGtCQUF6QixDQUFYOztBQUVBRCxlQUFTUCxnQkFBZ0JNLFFBQWhCLENBQVQ7O0FBRUEsVUFBTWlDLGlCQUFpQixJQUFJbEMsY0FBSixDQUFtQkMsUUFBbkIsRUFBNkJDLE1BQTdCLEVBQXFDQyxrQkFBckMsQ0FBdkI7O0FBRUEsYUFBTytCLGNBQVA7QUFDRDs7OztFQXhGMEI3QyxLOztBQTJGN0I4QyxPQUFPQyxPQUFQLEdBQWlCcEMsY0FBakIiLCJmaWxlIjoibWFza0ZhY2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU5vcm1hbCwgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0SW5YWVBsYW5lIGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRMaW5lc0luWFlQbGFuZSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsIC8vL1xuICAgICAgICAgIGxpbmVzSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgdmVydGljZXNMZW5ndGgsXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHRoaXMudmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBMaW5lSW5YWVBsYW5lLmZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBsaW5lc0luWFlQbGFuZTtcbiAgfVxuICBcbiAgbWFza0ZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgbGluZXNJblhZUGxhbmUgPSB0aGlzLmdldExpbmVzSW5YWVBsYW5lKCksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGZhY2V0LnJvdGF0ZShmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgZmFjZXRcbiAgICBdO1xuXG4gICAgZmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0c1dpdGhMaW5lc0luWFlQbGFuZShmYWNldHMsIGxpbmVzSW5YWVBsYW5lKTtcblxuICAgIGZhY2V0cyA9IHRoaXMua2VlcEZhY2V0c091dHNpZGVMaW5lc0luWFlQbGFuZShmYWNldHMsIGxpbmVzSW5YWVBsYW5lKTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0KSB7XG4gICAgICBmYWNldC5yb3RhdGUoYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXRzV2l0aExpbmVzSW5YWVBsYW5lKGZhY2V0cywgbGluZXNJblhZUGxhbmUpIHtcbiAgICBmYWNldHMgPSBsaW5lc0luWFlQbGFuZS5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBsaW5lSW5YWVBsYW5lKSB7XG4gICAgICBjb25zdCB2ZXJ0aWNhbExpbmVJblhZUGxhbmUgPSBWZXJ0aWNhbExpbmVJblhZUGxhbmUuZnJvbUxpbmVJblhZUGxhbmUobGluZUluWFlQbGFuZSk7XG5cbiAgICAgIGZhY2V0cyA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICByZXR1cm4gZmFjZXRzO1xuICAgIH0sIGZhY2V0cyk7XG4gICAgXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuXG4gIGtlZXBGYWNldHNPdXRzaWRlTGluZXNJblhZUGxhbmUoZmFjZXRzLCBsaW5lc0luWFlQbGFuZSkge1xuICAgIGZhY2V0cyA9IGZhY2V0cy5yZWR1Y2UoZnVuY3Rpb24oZmFjZXRzLCBmYWNldCwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IG91dHNpZGVMaW5lc0luWFlQbGFuZSA9IGZhY2V0LmlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lKGxpbmVzSW5YWVBsYW5lKTtcbiAgICAgIFxuICAgICAgaWYgKG91dHNpZGVMaW5lc0luWFlQbGFuZSkge1xuICAgICAgICBmYWNldHMucHVzaChmYWNldCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJldHVybiBmYWNldHM7XG4gICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpO1xuICAgIFxuICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcbiAgICBcbiAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyk7XG4gICAgXG4gICAgY29uc3QgZmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBmYWNldEluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0SW5YWVBsYW5lO1xuIl19