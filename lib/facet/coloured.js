'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    verticesUtilities = require('../utilities/vertices');

var calculateNormal = verticesUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, colour) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal));

    _this.colour = colour;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: 'getColour',
    value: function getColour() {
      return this.colour;
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.colour,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }], [{
    key: 'fromVerticesIndexesAndColour',
    value: function fromVerticesIndexesAndColour(vertices, indexes, colour) {
      vertices = indexes.map(function (index) {
        var vertex = vertices[index];

        return vertex;
      });

      var normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImNvbG91ciIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJpbmRleGVzIiwibWFwIiwiaW5kZXgiLCJ2ZXJ0ZXgiLCJjb2xvdXJlZEZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUQxQjs7SUFHUUUsZSxHQUFvQkQsaUIsQ0FBcEJDLGU7O0lBRUZDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsTUFBOUIsRUFBc0M7QUFBQTs7QUFBQSw4SEFDOUJGLFFBRDhCLEVBQ3BCQyxNQURvQjs7QUFHcEMsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBSG9DO0FBSXJDOzs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsZUFBZSxLQUFLRCxNQUExQjtBQUFBLFVBQWtDO0FBQzVCRSxzQkFBZ0IsQ0FDZEQsWUFEYyxFQUVkQSxZQUZjLEVBR2RBLFlBSGMsQ0FEdEI7O0FBT0EsYUFBT0MsYUFBUDtBQUNEOzs7aURBRW1DSixRLEVBQVVLLE8sRUFBU0gsTSxFQUFRO0FBQzdERixpQkFBV0ssUUFBUUMsR0FBUixDQUFZLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckMsWUFBTUMsU0FBU1IsU0FBU08sS0FBVCxDQUFmOztBQUVBLGVBQU9DLE1BQVA7QUFDRCxPQUpVLENBQVg7O0FBTUEsVUFBTVAsU0FBU0gsZ0JBQWdCRSxRQUFoQixDQUFmO0FBQUEsVUFDTVMsZ0JBQWdCLElBQUlWLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsTUFBcEMsQ0FEdEI7O0FBR0EsYUFBT08sYUFBUDtBQUNEOzs7O0VBakN5QmQsSzs7QUFvQzVCZSxPQUFPQyxPQUFQLEdBQWlCWixhQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVOb3JtYWwgfSA9IHZlcnRpY2VzVXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuICBcbiAgZ2V0Q29sb3VyKCkge1xuICAgIHJldHVybiB0aGlzLmNvbG91cjtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLmNvbG91ciwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVZlcnRpY2VzSW5kZXhlc0FuZENvbG91cih2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgY29sb3VyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbG91cmVkRmFjZXQ7XG4iXX0=