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
    value: function maskFacet(facet, maskedFacets) {
      var forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

      facet.rotate(forwardsRotationQuaternion);

      var facetsFromSplit = this.splitFacet(facet);

      this.maskFacetsFromSplit(facetsFromSplit, maskedFacets);

      maskedFacets.forEach(function (maskedFacet) {
        maskedFacet.rotate(backwardsRotationQuaternion);
      });
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var linesInXYPlane = this.getLinesInXYPlane();

      var facets = [facet];

      linesInXYPlane.forEach(function (lineInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane),
            facetsFromSplit = verticalLineInXYPlane.splitFacets(facets);

        facets = facetsFromSplit; ///
      });

      var facetsFromSplit = facets; ///

      return facetsFromSplit;
    }
  }, {
    key: 'maskFacetsFromSplit',
    value: function maskFacetsFromSplit(facetsFromSplit, maskedFacets) {
      var linesInXYPlane = this.getLinesInXYPlane();

      facetsFromSplit.forEach(function (facetFromSplit) {
        var outsideLinesInXYPlane = facetFromSplit.isOutsideLinesInXYPlane(linesInXYPlane);

        if (outsideLinesInXYPlane) {
          var maskedFacet = facetFromSplit; ///

          maskedFacets.push(maskedFacet);
        }
      });

      return maskedFacets;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNraW5nRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInZlcnRpY2VzVXRpbGl0aWVzIiwicXVhdGVybmlvblV0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJNYXNraW5nRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXNJblhZUGxhbmUiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsIm1hc2tlZEZhY2V0cyIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlIiwiZmFjZXRzRnJvbVNwbGl0Iiwic3BsaXRGYWNldCIsIm1hc2tGYWNldHNGcm9tU3BsaXQiLCJmb3JFYWNoIiwibWFza2VkRmFjZXQiLCJnZXRMaW5lc0luWFlQbGFuZSIsImZhY2V0cyIsInZlcnRpY2FsTGluZUluWFlQbGFuZSIsImZyb21MaW5lSW5YWVBsYW5lIiwic3BsaXRGYWNldHMiLCJmYWNldEZyb21TcGxpdCIsIm91dHNpZGVMaW5lc0luWFlQbGFuZSIsImlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwicHVzaCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwibW9kdWxlIiwiZXhwb3J0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QUFJMkIscUJBQUosRUFBMkI7QUFDekIsY0FBTVAsY0FBY00sY0FBcEIsQ0FEeUIsQ0FDVzs7QUFFcENkLHVCQUFhaUIsSUFBYixDQUFrQlQsV0FBbEI7QUFDRDtBQUNGLE9BUkQ7O0FBVUEsYUFBT1IsWUFBUDtBQUNEOzs7OEJBRWdCRCxLLEVBQU87QUFDdEIsVUFBSWQsU0FBU2MsTUFBTW1CLFNBQU4sRUFBYjs7QUFFQSxVQUFNaEMscUJBQXFCTiw0QkFBNEJLLE1BQTVCLENBQTNCOztBQUVBLFVBQUlELFdBQVdlLE1BQU1vQixXQUFOLEVBQWY7O0FBRUFuQyxpQkFBV0wsZUFBZUssUUFBZixFQUF5QkUsa0JBQXpCLENBQVg7O0FBRUFELGVBQVNQLGdCQUFnQk0sUUFBaEIsQ0FBVDs7QUFFQSxVQUFNb0MsZUFBZSxJQUFJckMsWUFBSixDQUFpQkMsUUFBakIsRUFBMkJDLE1BQTNCLEVBQW1DQyxrQkFBbkMsQ0FBckI7O0FBRUEsYUFBT2tDLFlBQVA7QUFDRDs7O2lDQUVtQnBDLFEsRUFBVTtBQUM1QixVQUFNZSxRQUFRM0IsTUFBTXlCLFlBQU4sQ0FBbUJiLFFBQW5CLENBQWQ7QUFBQSxVQUNNb0MsZUFBZXJDLGFBQWFzQyxTQUFiLENBQXVCdEIsS0FBdkIsQ0FEckI7O0FBR0EsYUFBT3FCLFlBQVA7QUFDRDs7OztFQWpHd0JoRCxLOztBQW9HM0JrRCxPQUFPQyxPQUFQLEdBQWlCeEMsWUFBakIiLCJmaWxlIjoibWFza2luZ0ZhY2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU5vcm1hbCwgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG4gICAgXG4gICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLCAvLy9cbiAgICAgICAgICBsaW5lc0luWFlQbGFuZSA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gTGluZUluWFlQbGFuZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXNJblhZUGxhbmU7XG4gIH1cbiAgXG4gIG1hc2tGYWNldChmYWNldCwgbWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGZhY2V0LnJvdGF0ZShmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBmYWNldHNGcm9tU3BsaXQgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpO1xuXG4gICAgdGhpcy5tYXNrRmFjZXRzRnJvbVNwbGl0KGZhY2V0c0Zyb21TcGxpdCwgbWFza2VkRmFjZXRzKTtcblxuICAgIG1hc2tlZEZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKG1hc2tlZEZhY2V0KSB7XG4gICAgICBtYXNrZWRGYWNldC5yb3RhdGUoYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgc3BsaXRGYWNldChmYWNldCkge1xuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpO1xuXG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgIGZhY2V0XG4gICAgXTtcblxuICAgIGxpbmVzSW5YWVBsYW5lLmZvckVhY2goZnVuY3Rpb24obGluZUluWFlQbGFuZSkge1xuICAgICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpLFxuICAgICAgICAgICAgZmFjZXRzRnJvbVNwbGl0ID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIGZhY2V0cyA9IGZhY2V0c0Zyb21TcGxpdDsgLy8vXG4gICAgfSk7XG5cbiAgICBjb25zdCBmYWNldHNGcm9tU3BsaXQgPSBmYWNldHM7IC8vL1xuXG4gICAgcmV0dXJuIGZhY2V0c0Zyb21TcGxpdDtcbiAgfVxuXG4gIG1hc2tGYWNldHNGcm9tU3BsaXQoZmFjZXRzRnJvbVNwbGl0LCBtYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCBsaW5lc0luWFlQbGFuZSA9IHRoaXMuZ2V0TGluZXNJblhZUGxhbmUoKTtcblxuICAgIGZhY2V0c0Zyb21TcGxpdC5mb3JFYWNoKGZ1bmN0aW9uKGZhY2V0RnJvbVNwbGl0KSB7XG4gICAgICBjb25zdCBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSBmYWNldEZyb21TcGxpdC5pc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSk7XG4gICAgICBcbiAgICAgIGlmIChvdXRzaWRlTGluZXNJblhZUGxhbmUpIHtcbiAgICAgICAgY29uc3QgbWFza2VkRmFjZXQgPSBmYWNldEZyb21TcGxpdDsgLy8vXG4gICAgICAgIFxuICAgICAgICBtYXNrZWRGYWNldHMucHVzaChtYXNrZWRGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZEZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCk7XG4gICAgXG4gICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCk7XG5cbiAgICBsZXQgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKTtcbiAgICBcbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG4iXX0=