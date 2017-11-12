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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNraW5nRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInZlcnRpY2VzVXRpbGl0aWVzIiwicXVhdGVybmlvblV0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJNYXNraW5nRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXNJblhZUGxhbmUiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsImdldExpbmVzSW5YWVBsYW5lIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGUiLCJmYWNldHMiLCJzcGxpdEZhY2V0c1dpdGhMaW5lc0luWFlQbGFuZSIsImtlZXBGYWNldHNPdXRzaWRlTGluZXNJblhZUGxhbmUiLCJmb3JFYWNoIiwicmVkdWNlIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUxpbmVJblhZUGxhbmUiLCJzcGxpdEZhY2V0cyIsIm91dHNpZGVMaW5lc0luWFlQbGFuZSIsImlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwicHVzaCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxpQkFBUixDQUR0QjtBQUFBLElBRU1FLHdCQUF3QkYsUUFBUSx5QkFBUixDQUY5QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLHNCQUFzQkosUUFBUSx3QkFBUixDQUo1Qjs7SUFNUUssZSxHQUFvQ0YsaUIsQ0FBcENFLGU7SUFBaUJDLGMsR0FBbUJILGlCLENBQW5CRyxjO0lBQ2pCQywyQixHQUEyR0gsbUIsQ0FBM0dHLDJCO0lBQTZCQyxtQyxHQUE4RUosbUIsQ0FBOUVJLG1DO0lBQXFDQyxvQyxHQUF5Q0wsbUIsQ0FBekNLLG9DOztJQUVwRUMsWTs7O0FBQ0osd0JBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxrQkFBOUIsRUFBa0Q7QUFBQTs7QUFBQSw0SEFDMUNGLFFBRDBDLEVBQ2hDQyxNQURnQzs7QUFHaEQsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUhnRDtBQUlqRDs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQSxrQkFBWjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGlCQUFpQixDQUF2QjtBQUFBLFVBQTBCO0FBQ3BCQyx1QkFBaUIsS0FBS0osUUFBTCxDQUFjSyxHQUFkLENBQWtCLFVBQVNDLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3pELFlBQU1DLGFBQWFELEtBQW5CO0FBQUEsWUFDTUUsV0FBVyxDQUFDRCxhQUFhLENBQWQsSUFBbUJMLGNBRHBDO0FBQUEsWUFFTU8sY0FBYyxLQUFLVixRQUFMLENBQWNRLFVBQWQsQ0FGcEI7QUFBQSxZQUdNRyxZQUFZLEtBQUtYLFFBQUwsQ0FBY1MsUUFBZCxDQUhsQjtBQUFBLFlBSU1HLGdCQUFnQnRCLGNBQWN1QixZQUFkLENBQTJCSCxXQUEzQixFQUF3Q0MsU0FBeEMsQ0FKdEI7O0FBTUEsZUFBT0MsYUFBUDtBQUNELE9BUmtDLENBUWpDRSxJQVJpQyxDQVE1QixJQVI0QixDQUFsQixDQUR2Qjs7QUFXQSxhQUFPVixjQUFQO0FBQ0Q7Ozs4QkFFU1csSyxFQUFPO0FBQ2YsVUFBTVgsaUJBQWlCLEtBQUtZLGlCQUFMLEVBQXZCO0FBQUEsVUFDTUMsNkJBQTZCcEIsb0NBQW9DLEtBQUtLLGtCQUF6QyxDQURuQztBQUFBLFVBRU1nQiw4QkFBOEJwQixxQ0FBcUMsS0FBS0ksa0JBQTFDLENBRnBDOztBQUlBYSxZQUFNSSxNQUFOLENBQWFGLDBCQUFiOztBQUVBLFVBQUlHLFNBQVMsQ0FDWEwsS0FEVyxDQUFiOztBQUlBSyxlQUFTLEtBQUtDLDZCQUFMLENBQW1DRCxNQUFuQyxFQUEyQ2hCLGNBQTNDLENBQVQ7O0FBRUFnQixlQUFTLEtBQUtFLCtCQUFMLENBQXFDRixNQUFyQyxFQUE2Q2hCLGNBQTdDLENBQVQ7O0FBRUFnQixhQUFPRyxPQUFQLENBQWUsVUFBU1IsS0FBVCxFQUFnQjtBQUM3QkEsY0FBTUksTUFBTixDQUFhRCwyQkFBYjtBQUNELE9BRkQ7O0FBSUEsYUFBT0UsTUFBUDtBQUNEOzs7a0RBRTZCQSxNLEVBQVFoQixjLEVBQWdCO0FBQ3BEZ0IsZUFBU2hCLGVBQWVvQixNQUFmLENBQXNCLFVBQVNKLE1BQVQsRUFBaUJSLGFBQWpCLEVBQWdDO0FBQzdELFlBQU1hLHdCQUF3QmxDLHNCQUFzQm1DLGlCQUF0QixDQUF3Q2QsYUFBeEMsQ0FBOUI7O0FBRUFRLGlCQUFTSyxzQkFBc0JFLFdBQXRCLENBQWtDUCxNQUFsQyxDQUFUOztBQUVBLGVBQU9BLE1BQVA7QUFDRCxPQU5RLEVBTU5BLE1BTk0sQ0FBVDs7QUFRQSxhQUFPQSxNQUFQO0FBQ0Q7OztvREFFK0JBLE0sRUFBUWhCLGMsRUFBZ0I7QUFDdERnQixlQUFTQSxPQUFPSSxNQUFQLENBQWMsVUFBU0osTUFBVCxFQUFpQkwsS0FBakIsRUFBd0JSLEtBQXhCLEVBQStCO0FBQ3BELFlBQU1xQix3QkFBd0JiLE1BQU1jLHVCQUFOLENBQThCekIsY0FBOUIsQ0FBOUI7O0FBRUEsWUFBSXdCLHFCQUFKLEVBQTJCO0FBQ3pCUixpQkFBT1UsSUFBUCxDQUFZZixLQUFaO0FBQ0Q7O0FBRUQsZUFBT0ssTUFBUDtBQUNELE9BUlEsRUFRTixFQVJNLENBQVQ7O0FBVUEsYUFBT0EsTUFBUDtBQUNEOzs7OEJBRWdCTCxLLEVBQU87QUFDdEIsVUFBSWQsU0FBU2MsTUFBTWdCLFNBQU4sRUFBYjs7QUFFQSxVQUFNN0IscUJBQXFCTiw0QkFBNEJLLE1BQTVCLENBQTNCOztBQUVBLFVBQUlELFdBQVdlLE1BQU1pQixXQUFOLEVBQWY7O0FBRUFoQyxpQkFBV0wsZUFBZUssUUFBZixFQUF5QkUsa0JBQXpCLENBQVg7O0FBRUFELGVBQVNQLGdCQUFnQk0sUUFBaEIsQ0FBVDs7QUFFQSxVQUFNaUMsZUFBZSxJQUFJbEMsWUFBSixDQUFpQkMsUUFBakIsRUFBMkJDLE1BQTNCLEVBQW1DQyxrQkFBbkMsQ0FBckI7O0FBRUEsYUFBTytCLFlBQVA7QUFDRDs7O2lDQUVtQmpDLFEsRUFBVTtBQUM1QixVQUFNZSxRQUFRM0IsTUFBTXlCLFlBQU4sQ0FBbUJiLFFBQW5CLENBQWQ7QUFBQSxVQUNNaUMsZUFBZWxDLGFBQWFtQyxTQUFiLENBQXVCbkIsS0FBdkIsQ0FEckI7O0FBR0EsYUFBT2tCLFlBQVA7QUFDRDs7OztFQS9Gd0I3QyxLOztBQWtHM0IrQyxPQUFPQyxPQUFQLEdBQWlCckMsWUFBakIiLCJmaWxlIjoibWFza2luZ0ZhY2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZU5vcm1hbCwgcm90YXRlVmVydGljZXMgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSA9IHF1YXRlcm5pb25VdGlsaXRpZXM7XG5cbmNsYXNzIE1hc2tpbmdGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG4gICAgXG4gICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLCAvLy9cbiAgICAgICAgICBsaW5lc0luWFlQbGFuZSA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gTGluZUluWFlQbGFuZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXNJblhZUGxhbmU7XG4gIH1cbiAgXG4gIG1hc2tGYWNldChmYWNldCkge1xuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpLFxuICAgICAgICAgIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbih0aGlzLnJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBmYWNldC5yb3RhdGUoZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgIGZhY2V0XG4gICAgXTtcblxuICAgIGZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldHNXaXRoTGluZXNJblhZUGxhbmUoZmFjZXRzLCBsaW5lc0luWFlQbGFuZSk7XG5cbiAgICBmYWNldHMgPSB0aGlzLmtlZXBGYWNldHNPdXRzaWRlTGluZXNJblhZUGxhbmUoZmFjZXRzLCBsaW5lc0luWFlQbGFuZSk7XG5cbiAgICBmYWNldHMuZm9yRWFjaChmdW5jdGlvbihmYWNldCkge1xuICAgICAgZmFjZXQucm90YXRlKGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG4gIFxuICBzcGxpdEZhY2V0c1dpdGhMaW5lc0luWFlQbGFuZShmYWNldHMsIGxpbmVzSW5YWVBsYW5lKSB7XG4gICAgZmFjZXRzID0gbGluZXNJblhZUGxhbmUucmVkdWNlKGZ1bmN0aW9uKGZhY2V0cywgbGluZUluWFlQbGFuZSkge1xuICAgICAgY29uc3QgdmVydGljYWxMaW5lSW5YWVBsYW5lID0gVmVydGljYWxMaW5lSW5YWVBsYW5lLmZyb21MaW5lSW5YWVBsYW5lKGxpbmVJblhZUGxhbmUpO1xuXG4gICAgICBmYWNldHMgPSB2ZXJ0aWNhbExpbmVJblhZUGxhbmUuc3BsaXRGYWNldHMoZmFjZXRzKTtcblxuICAgICAgcmV0dXJuIGZhY2V0cztcbiAgICB9LCBmYWNldHMpO1xuICAgIFxuICAgIHJldHVybiBmYWNldHM7XG4gIH1cblxuICBrZWVwRmFjZXRzT3V0c2lkZUxpbmVzSW5YWVBsYW5lKGZhY2V0cywgbGluZXNJblhZUGxhbmUpIHtcbiAgICBmYWNldHMgPSBmYWNldHMucmVkdWNlKGZ1bmN0aW9uKGZhY2V0cywgZmFjZXQsIGluZGV4KSB7XG4gICAgICBjb25zdCBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSBmYWNldC5pc091dHNpZGVMaW5lc0luWFlQbGFuZShsaW5lc0luWFlQbGFuZSk7XG4gICAgICBcbiAgICAgIGlmIChvdXRzaWRlTGluZXNJblhZUGxhbmUpIHtcbiAgICAgICAgZmFjZXRzLnB1c2goZmFjZXQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZXR1cm4gZmFjZXRzO1xuICAgIH0sIFtdKTtcbiAgICBcbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcbiJdfQ==