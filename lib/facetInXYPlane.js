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
  }, {
    key: 'maskFacet',
    value: function maskFacet(facet) {
      var facets = [facet];

      var linesInXYPlane = this.getLinesInXYPlane();

      facets = this.splitFacetsWithLinesInXYPlane(facets, linesInXYPlane);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldEluWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJMaW5lSW5YWVBsYW5lIiwiVmVydGljYWxMaW5lSW5YWVBsYW5lIiwidmVydGljZXNVdGlsaXRpZXMiLCJxdWF0ZXJuaW9uVXRpbGl0aWVzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlTm9ybWFsIiwicm90YXRlVmVydGljZXMiLCJGYWNldEluWFlQbGFuZSIsInZlcnRpY2VzIiwibm9ybWFsIiwicm90YXRpb25RdWF0ZXJuaW9uIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyIsIm1hcCIsInJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCIsImluZGV4IiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50IiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXNMZW5ndGgiLCJsaW5lc0luWFlQbGFuZSIsInZlcnRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsImZhY2V0cyIsImdldExpbmVzSW5YWVBsYW5lIiwic3BsaXRGYWNldHNXaXRoTGluZXNJblhZUGxhbmUiLCJyZWR1Y2UiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmcm9tTGluZUluWFlQbGFuZSIsInNwbGl0RmFjZXRzIiwiZ2V0Tm9ybWFsIiwiZ2V0VmVydGljZXMiLCJmYWNldEluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxnQkFB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ZUFBU0osZ0JBQWdCRyxRQUFoQixDQUFUOztBQUVBLFVBQU0rQixpQkFBaUIsSUFBSWhDLGNBQUosQ0FBbUJDLFFBQW5CLEVBQTZCQyxNQUE3QixFQUFxQ0Msa0JBQXJDLENBQXZCOztBQUVBLGFBQU82QixjQUFQO0FBQ0Q7Ozs7RUFwRjBCekMsSzs7QUF1RjdCMEMsT0FBT0MsT0FBUCxHQUFpQmxDLGNBQWpCIiwiZmlsZSI6ImZhY2V0SW5YWVBsYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4vZmFjZXQnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IGNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiB9ID0gcXVhdGVybmlvblV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlTm9ybWFsLCByb3RhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0SW5YWVBsYW5lIGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xuXG4gICAgcmV0dXJuIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG4gIFxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyA9IHRoaXMucm90YXRpb25RdWF0ZXJuaW9uLCAvLy9cbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cy5tYXAoZnVuY3Rpb24ocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gKGluZGV4IDwgMSkgPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1yb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cztcbiAgICAgICAgICAgICAgXG4gICAgcmV0dXJuIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldExpbmVzSW5YWVBsYW5lKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXNJblhZUGxhbmUgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZUluWFlQbGFuZTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGxpbmVzSW5YWVBsYW5lO1xuICB9XG4gIFxuICBtYXNrRmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgZmFjZXRcbiAgICBdO1xuICAgIFxuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpO1xuICAgIFxuICAgIGZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldHNXaXRoTGluZXNJblhZUGxhbmUoZmFjZXRzLCBsaW5lc0luWFlQbGFuZSk7XG4gICAgXG4gICAgcmV0dXJuIGZhY2V0cztcbiAgfVxuICBcbiAgc3BsaXRGYWNldHNXaXRoTGluZXNJblhZUGxhbmUoZmFjZXRzLCBsaW5lc0luWFlQbGFuZSkge1xuICAgIGZhY2V0cyA9IGxpbmVzSW5YWVBsYW5lLnJlZHVjZShmdW5jdGlvbihmYWNldHMsIGxpbmVJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKTtcblxuICAgICAgZmFjZXRzID0gdmVydGljYWxMaW5lSW5YWVBsYW5lLnNwbGl0RmFjZXRzKGZhY2V0cyk7XG5cbiAgICAgIHJldHVybiBmYWNldHM7XG4gICAgfSwgZmFjZXRzKTtcbiAgICBcbiAgICByZXR1cm4gZmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IGZhY2V0SW5YWVBsYW5lID0gbmV3IEZhY2V0SW5YWVBsYW5lKHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gZmFjZXRJblhZUGxhbmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldEluWFlQbGFuZTtcbiJdfQ==