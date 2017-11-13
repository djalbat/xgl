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

      unmaskedFacets.forEach(function (unmaskedFacet) {
        unmaskedFacet.rotate(backwardsRotationQuaternion);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNraW5nRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJyb3RhdGlvblV0aWxpdGllcyIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsImRpbHV0ZSIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJNYXNraW5nRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXNJblhZUGxhbmUiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsInVubWFza2VkRmFjZXRzIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGUiLCJzbWFsbGVyRmFjZXRzIiwic3BsaXRGYWNldCIsImRpbHV0ZVNtYWxsZXJGYWNldHMiLCJmb3JFYWNoIiwidW5tYXNrZWRGYWNldCIsImdldExpbmVzSW5YWVBsYW5lIiwiZmFjZXRzIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUxpbmVJblhZUGxhbmUiLCJzcGxpdEZhY2V0cyIsInNtYWxsZXJGYWNldCIsInNtYWxsZXJGYWNldE91dHNpZGVMaW5lc0luWFlQbGFuZSIsImlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwic21hbGxlckZhY2V0VW5tYXNrZWQiLCJnZXROb3JtYWwiLCJnZXRW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QUN6QixPQU5EOztBQVFBLGFBQU9BLGFBQVA7QUFDRDs7O3dDQUVtQkEsYSxFQUFlSixjLEVBQWdCO0FBQ2pELFVBQU1aLGlCQUFpQixLQUFLcUIsaUJBQUwsRUFBdkI7O0FBRUFoQyxhQUFPMkIsYUFBUCxFQUFzQkosY0FBdEIsRUFBc0MsVUFBU2MsWUFBVCxFQUF1QjtBQUMzRCxZQUFNQyxvQ0FBb0NELGFBQWFFLHVCQUFiLENBQXFDNUIsY0FBckMsQ0FBMUM7QUFBQSxZQUNNNkIsdUJBQXVCRixpQ0FEN0IsQ0FEMkQsQ0FFSzs7QUFFaEUsZUFBT0Usb0JBQVA7QUFDRCxPQUxEO0FBTUQ7Ozs4QkFFZ0JsQixLLEVBQU87QUFDdEIsVUFBSWQsU0FBU2MsTUFBTW1CLFNBQU4sRUFBYjs7QUFFQSxVQUFNaEMscUJBQXFCTiw0QkFBNEJLLE1BQTVCLENBQTNCOztBQUVBLFVBQUlELFdBQVdlLE1BQU1vQixXQUFOLEVBQWY7O0FBRUFuQyxpQkFBV0wsZUFBZUssUUFBZixFQUF5QkUsa0JBQXpCLENBQVg7O0FBRUFELGVBQVNQLGdCQUFnQk0sUUFBaEIsQ0FBVDs7QUFFQSxVQUFNb0MsZUFBZSxJQUFJckMsWUFBSixDQUFpQkMsUUFBakIsRUFBMkJDLE1BQTNCLEVBQW1DQyxrQkFBbkMsQ0FBckI7O0FBRUEsYUFBT2tDLFlBQVA7QUFDRDs7O2lDQUVtQnBDLFEsRUFBVTtBQUM1QixVQUFNZSxRQUFRN0IsTUFBTTJCLFlBQU4sQ0FBbUJiLFFBQW5CLENBQWQ7QUFBQSxVQUNNb0MsZUFBZXJDLGFBQWFzQyxTQUFiLENBQXVCdEIsS0FBdkIsQ0FEckI7O0FBR0EsYUFBT3FCLFlBQVA7QUFDRDs7OztFQTVGd0JsRCxLOztBQStGM0JvRCxPQUFPQyxPQUFQLEdBQWlCeEMsWUFBakIiLCJmaWxlIjoibWFza2luZ0ZhY2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIHJvdGF0aW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyk7XG5cbmNvbnN0IHsgZGlsdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9ID0gcm90YXRpb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG4gICAgXG4gICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLCAvLy9cbiAgICAgICAgICBsaW5lc0luWFlQbGFuZSA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gTGluZUluWFlQbGFuZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXNJblhZUGxhbmU7XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGZhY2V0LnJvdGF0ZShmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0KTtcblxuICAgIHRoaXMuZGlsdXRlU21hbGxlckZhY2V0cyhzbWFsbGVyRmFjZXRzLCB1bm1hc2tlZEZhY2V0cyk7XG5cbiAgICB1bm1hc2tlZEZhY2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHVubWFza2VkRmFjZXQpIHtcbiAgICAgIHVubWFza2VkRmFjZXQucm90YXRlKGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBsaW5lc0luWFlQbGFuZSA9IHRoaXMuZ2V0TGluZXNJblhZUGxhbmUoKTtcblxuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICBsaW5lc0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmVJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKTtcblxuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgZGlsdXRlU21hbGxlckZhY2V0cyhzbWFsbGVyRmFjZXRzLCB1bm1hc2tlZEZhY2V0cykge1xuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpO1xuXG4gICAgZGlsdXRlKHNtYWxsZXJGYWNldHMsIHVubWFza2VkRmFjZXRzLCBmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE91dHNpZGVMaW5lc0luWFlQbGFuZSA9IHNtYWxsZXJGYWNldC5pc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSksXG4gICAgICAgICAgICBzbWFsbGVyRmFjZXRVbm1hc2tlZCA9IHNtYWxsZXJGYWNldE91dHNpZGVMaW5lc0luWFlQbGFuZTsgLy8vXG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRVbm1hc2tlZDtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCk7XG4gICAgXG4gICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCk7XG5cbiAgICBsZXQgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKTtcbiAgICBcbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBuZXcgTWFza2luZ0ZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmFjZXQgPSBGYWNldC5mcm9tVmVydGljZXModmVydGljZXMpLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IE1hc2tpbmdGYWNldC5mcm9tRmFjZXQoZmFjZXQpO1xuICAgIFxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXNraW5nRmFjZXQ7XG4iXX0=