'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    LineInXYPlane = require('./lineInXYPlane'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices;

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
    key: 'getForwardsRotationQuaternion',
    value: function getForwardsRotationQuaternion() {
      var forwardsRotationQuaternion = this.rotationQuaternion;

      return forwardsRotationQuaternion;
    }
  }, {
    key: 'getBackwardsRotationQuaternion',
    value: function getBackwardsRotationQuaternion() {
      var rotationQuaternionComponents = this.rotationQuaternion,
          ///
      backwardsRotationQuaternionComponents = rotationQuaternionComponents.map(function (rotationQuaternionComponent, index) {
        var backwardsRotationQuaternionComponent = index < 1 ? ///
        +rotationQuaternionComponent : -rotationQuaternionComponent;

        return backwardsRotationQuaternionComponent;
      }),
          backwardsRotationQuaternion = backwardsRotationQuaternionComponents;

      return backwardsRotationQuaternion;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldEluWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwidmVydGljZXNVdGlsaXRpZXMiLCJxdWF0ZXJuaW9uVXRpbGl0aWVzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJGYWNldEluWFlQbGFuZSIsInZlcnRpY2VzIiwibm9ybWFsIiwicm90YXRpb25RdWF0ZXJuaW9uIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyIsIm1hcCIsInJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCIsImluZGV4IiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50IiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXNMZW5ndGgiLCJsaW5lc0luWFlQbGFuZSIsInZlcnRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwiZmFjZXRJblhZUGxhbmUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBRHRCO0FBQUEsSUFFTUUsb0JBQW9CRixRQUFRLHNCQUFSLENBRjFCO0FBQUEsSUFHTUcsc0JBQXNCSCxRQUFRLHdCQUFSLENBSDVCOztBQUtNLElBQUVJLDJCQUFGLEdBQWtDRCxtQkFBbEMsQ0FBRUMsMkJBQUY7QUFBQSxJQUNFQyxlQURGLEdBQ3NDSCxpQkFEdEMsQ0FDRUcsZUFERjtBQUFBLElBQ21CQyxjQURuQixHQUNzQ0osaUJBRHRDLENBQ21CSSxjQURuQjs7SUFHQUMsYzs7O0FBQ0osMEJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxrQkFBOUIsRUFBa0Q7QUFBQTs7QUFBQSxnSUFDMUNGLFFBRDBDLEVBQ2hDQyxNQURnQzs7QUFHaEQsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUhnRDtBQUlqRDs7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQSxrQkFBWjtBQUNEOzs7b0RBRStCO0FBQzlCLFVBQU1DLDZCQUE2QixLQUFLRCxrQkFBeEM7O0FBRUEsYUFBT0MsMEJBQVA7QUFDRDs7O3FEQUVnQztBQUMvQixVQUFNQywrQkFBK0IsS0FBS0Ysa0JBQTFDO0FBQUEsVUFBOEQ7QUFDeERHLDhDQUF3Q0QsNkJBQTZCRSxHQUE3QixDQUFpQyxVQUFTQywyQkFBVCxFQUFzQ0MsS0FBdEMsRUFBNkM7QUFDcEgsWUFBTUMsdUNBQXdDRCxRQUFRLENBQVQsR0FBZTtBQUNiLFNBQUNELDJCQURILEdBRUksQ0FBQ0EsMkJBRmxEOztBQUlBLGVBQU9FLG9DQUFQO0FBQ0QsT0FOdUMsQ0FEOUM7QUFBQSxVQVFNQyw4QkFBOEJMLHFDQVJwQzs7QUFVQSxhQUFPSywyQkFBUDtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1DLGlCQUFpQixDQUF2QjtBQUFBLFVBQTBCO0FBQ3BCQyx1QkFBaUIsS0FBS1osUUFBTCxDQUFjTSxHQUFkLENBQWtCLFVBQVNPLE1BQVQsRUFBaUJMLEtBQWpCLEVBQXdCO0FBQ3pELFlBQU1NLGFBQWFOLEtBQW5CO0FBQUEsWUFDTU8sV0FBVyxDQUFDRCxhQUFhLENBQWQsSUFBbUJILGNBRHBDO0FBQUEsWUFFTUssY0FBYyxLQUFLaEIsUUFBTCxDQUFjYyxVQUFkLENBRnBCO0FBQUEsWUFHTUcsWUFBWSxLQUFLakIsUUFBTCxDQUFjZSxRQUFkLENBSGxCO0FBQUEsWUFJTUcsZ0JBQWdCekIsY0FBYzBCLFlBQWQsQ0FBMkJILFdBQTNCLEVBQXdDQyxTQUF4QyxDQUp0Qjs7QUFNQSxlQUFPQyxhQUFQO0FBQ0QsT0FSa0MsQ0FRakNFLElBUmlDLENBUTVCLElBUjRCLENBQWxCLENBRHZCOztBQVdBLGFBQU9SLGNBQVA7QUFDRDs7OzhCQUVnQlMsSyxFQUFPO0FBQ3RCLFVBQUlwQixTQUFTb0IsTUFBTUMsU0FBTixFQUFiOztBQUVBLFVBQU1wQixxQkFBcUJOLDRCQUE0QkssTUFBNUIsQ0FBM0I7O0FBRUEsVUFBSUQsV0FBV3FCLE1BQU1FLFdBQU4sRUFBZjs7QUFFQXZCLGlCQUFXRixlQUFlRSxRQUFmLEVBQXlCRSxrQkFBekIsQ0FBWDs7QUFFQUQsZUFBU0osZ0JBQWdCRyxRQUFoQixDQUFUOztBQUVBLFVBQU13QixpQkFBaUIsSUFBSXpCLGNBQUosQ0FBbUJDLFFBQW5CLEVBQTZCQyxNQUE3QixFQUFxQ0Msa0JBQXJDLENBQXZCOztBQUVBLGFBQU9zQixjQUFQO0FBQ0Q7Ozs7RUE1RDBCakMsSzs7QUErRDdCa0MsT0FBT0MsT0FBUCxHQUFpQjNCLGNBQWpCIiwiZmlsZSI6ImZhY2V0SW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIHF1YXRlcm5pb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9xdWF0ZXJuaW9uJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcztcblxuY2xhc3MgRmFjZXRJblhZUGxhbmUgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwpO1xuICAgIFxuICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIGNvbnN0IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG5cbiAgICByZXR1cm4gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cbiAgXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gdGhpcy5yb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMgPSByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzLm1hcChmdW5jdGlvbihyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSAoaW5kZXggPCAxKSA/ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgK3JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzO1xuICAgICAgICAgICAgICBcbiAgICByZXR1cm4gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgdmVydGljZXNMZW5ndGggPSAzLCAvLy9cbiAgICAgICAgICBsaW5lc0luWFlQbGFuZSA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBsaW5lSW5YWVBsYW5lID0gTGluZUluWFlQbGFuZS5mcm9tVmVydGljZXMoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gbGluZXNJblhZUGxhbmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZhY2V0KGZhY2V0KSB7XG4gICAgbGV0IG5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpO1xuICAgIFxuICAgIGNvbnN0IHJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpO1xuXG4gICAgbGV0IHZlcnRpY2VzID0gZmFjZXQuZ2V0VmVydGljZXMoKTtcbiAgICBcbiAgICB2ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIFxuICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyk7XG4gICAgXG4gICAgY29uc3QgZmFjZXRJblhZUGxhbmUgPSBuZXcgRmFjZXRJblhZUGxhbmUodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBmYWNldEluWFlQbGFuZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZhY2V0SW5YWVBsYW5lO1xuXG4iXX0=