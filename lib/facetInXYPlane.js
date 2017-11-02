'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    vec2 = require('./maths/vec2'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var transform = vec2.transform,
    first = arrayUtilities.first,
    third = arrayUtilities.third,
    calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    translateVertices = verticesUtilities.translateVertices;

var FacetInXYPlane = function (_Facet) {
  _inherits(FacetInXYPlane, _Facet);

  function FacetInXYPlane(vertices, normal, rotationQuaternion, translation) {
    _classCallCheck(this, FacetInXYPlane);

    var _this = _possibleConstructorReturn(this, (FacetInXYPlane.__proto__ || Object.getPrototypeOf(FacetInXYPlane)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;

    _this.translation = translation;
    return _this;
  }

  _createClass(FacetInXYPlane, [{
    key: 'getRotationQuaternion',
    value: function getRotationQuaternion() {
      return this.rotationQuaternion;
    }
  }, {
    key: 'getTranslation',
    value: function getTranslation() {
      return this.translation;
    }
  }, {
    key: 'getEdgeLinesInXYPlane',
    value: function getEdgeLinesInXYPlane() {
      var edgeLinesInXYPlane = [],
          verticesLength = this.vertices.length;

      for (var index = 0; index < verticesLength; index++) {
        var startIndex = index,
            endIndex = (index + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edgeLineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

        edgeLinesInXYPlane.push(edgeLineInXYPlane);
      }

      return edgeLinesInXYPlane;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationMatrix) {
      var mat2 = rotationMatrix; ///

      this.vertices = this.vertices.map(function (vertex) {
        var vec = vertex;

        vec = transform(vec, mat2);

        vertex = vec;

        return vertex;
      });
    }
  }, {
    key: 'split',
    value: function split(verticalLineInXYPlane) {
      var intersections = this.calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane),
          intersectionsIncludesNull = intersections.includes(null),
          facetsInXYPlane = intersectionsIncludesNull ? this.splitWithNullIntersection(intersections) : this.splitWithoutNullIntersection(intersections);

      return facetsInXYPlane;
    }
  }, {
    key: 'splitWithNullIntersection',
    value: function splitWithNullIntersection(intersections) {
      debugger;
    }
  }, {
    key: 'splitWithoutNullIntersection',
    value: function splitWithoutNullIntersection(intersections) {}
  }, {
    key: 'calculateIntersectionsWithVerticalLineInXYPlane',
    value: function calculateIntersectionsWithVerticalLineInXYPlane(verticalLineInXYPlane) {
      var edgeLinesInXYPlane = this.getEdgeLinesInXYPlane(),
          intersections = edgeLinesInXYPlane.map(function (edgeLineInXYPlane) {
        var intersection = edgeLineInXYPlane.calculateIntersectionWithVerticalLineInXYPlane(verticalLineInXYPlane);

        return intersection;
      });

      return intersections;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      var translation = calculateTranslation(vertices);

      vertices = translateVertices(vertices, translation);

      normal = calculateNormal(vertices);

      var facetInXYPlane = new FacetInXYPlane(vertices, normal, rotationQuaternion, translation);

      return facetInXYPlane;
    }
  }]);

  return FacetInXYPlane;
}(Facet);

module.exports = FacetInXYPlane;

function calculateTranslation(vertices) {
  var firstVertex = first(vertices),
      vertex = firstVertex,
      ///
  vertexComponents = vertex,
      ///
  thirdVertexComponent = third(vertexComponents),
      z = thirdVertexComponent,
      ///
  translation = [0, 0, -z];

  return translation;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldEluWFlQbGFuZS5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZWMyIiwiTGluZUluWFlQbGFuZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJxdWF0ZXJuaW9uVXRpbGl0aWVzIiwidHJhbnNmb3JtIiwiZmlyc3QiLCJ0aGlyZCIsImNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwidHJhbnNsYXRlVmVydGljZXMiLCJGYWNldEluWFlQbGFuZSIsInZlcnRpY2VzIiwibm9ybWFsIiwicm90YXRpb25RdWF0ZXJuaW9uIiwidHJhbnNsYXRpb24iLCJlZGdlTGluZXNJblhZUGxhbmUiLCJ2ZXJ0aWNlc0xlbmd0aCIsImxlbmd0aCIsImluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJlZGdlTGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsInB1c2giLCJyb3RhdGlvbk1hdHJpeCIsIm1hdDIiLCJtYXAiLCJ2ZXJ0ZXgiLCJ2ZWMiLCJ2ZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJpbnRlcnNlY3Rpb25zIiwiY2FsY3VsYXRlSW50ZXJzZWN0aW9uc1dpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJpbnRlcnNlY3Rpb25zSW5jbHVkZXNOdWxsIiwiaW5jbHVkZXMiLCJmYWNldHNJblhZUGxhbmUiLCJzcGxpdFdpdGhOdWxsSW50ZXJzZWN0aW9uIiwic3BsaXRXaXRob3V0TnVsbEludGVyc2VjdGlvbiIsImdldEVkZ2VMaW5lc0luWFlQbGFuZSIsImludGVyc2VjdGlvbiIsImNhbGN1bGF0ZUludGVyc2VjdGlvbldpdGhWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJmYWNldCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwiY2FsY3VsYXRlVHJhbnNsYXRpb24iLCJmYWNldEluWFlQbGFuZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJmaXJzdFZlcnRleCIsInZlcnRleENvbXBvbmVudHMiLCJ0aGlyZFZlcnRleENvbXBvbmVudCIsInoiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLGNBQVIsQ0FEYjtBQUFBLElBRU1FLGdCQUFnQkYsUUFBUSxpQkFBUixDQUZ0QjtBQUFBLElBR01HLGlCQUFpQkgsUUFBUSxtQkFBUixDQUh2QjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSxzQkFBUixDQUoxQjtBQUFBLElBS01LLHNCQUFzQkwsUUFBUSx3QkFBUixDQUw1Qjs7QUFPTSxJQUFFTSxTQUFGLEdBQWdCTCxJQUFoQixDQUFFSyxTQUFGO0FBQUEsSUFDRUMsS0FERixHQUNtQkosY0FEbkIsQ0FDRUksS0FERjtBQUFBLElBQ1NDLEtBRFQsR0FDbUJMLGNBRG5CLENBQ1NLLEtBRFQ7QUFBQSxJQUVFQywyQkFGRixHQUVrQ0osbUJBRmxDLENBRUVJLDJCQUZGO0FBQUEsSUFHRUMsZUFIRixHQUd5RE4saUJBSHpELENBR0VNLGVBSEY7QUFBQSxJQUdtQkMsY0FIbkIsR0FHeURQLGlCQUh6RCxDQUdtQk8sY0FIbkI7QUFBQSxJQUdtQ0MsaUJBSG5DLEdBR3lEUixpQkFIekQsQ0FHbUNRLGlCQUhuQzs7SUFLQUMsYzs7O0FBQ0osMEJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxrQkFBOUIsRUFBa0RDLFdBQWxELEVBQStEO0FBQUE7O0FBQUEsZ0lBQ3ZESCxRQUR1RCxFQUM3Q0MsTUFENkM7O0FBRzdELFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7O0FBRUEsVUFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFMNkQ7QUFNOUQ7Ozs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Qsa0JBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLFVBQU1DLHFC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QUlELG9CQUpWO0FBQUEsTUFJZ0M7QUFDMUJyQyxnQkFBYyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQ3NDLENBQVIsQ0FMcEI7O0FBT0EsU0FBT3RDLFdBQVA7QUFDRCIsImZpbGUiOiJmYWNldEluWFlQbGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuL2ZhY2V0JyksXG4gICAgICB2ZWMyID0gcmVxdWlyZSgnLi9tYXRocy92ZWMyJyksXG4gICAgICBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBxdWF0ZXJuaW9uVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcXVhdGVybmlvbicpO1xuXG5jb25zdCB7IHRyYW5zZm9ybSB9ID0gdmVjMixcbiAgICAgIHsgZmlyc3QsIHRoaXJkIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzLCB0cmFuc2xhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0SW5YWVBsYW5lIGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24sIHRyYW5zbGF0aW9uKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG4gICAgXG4gICAgdGhpcy5yb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvblF1YXRlcm5pb247XG5cbiAgICB0aGlzLnRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb247XG4gIH1cblxuICBnZXRSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb247XG4gIH1cblxuICBnZXRFZGdlTGluZXNJblhZUGxhbmUoKSB7XG4gICAgY29uc3QgZWRnZUxpbmVzSW5YWVBsYW5lID0gW10sXG4gICAgICAgICAgdmVydGljZXNMZW5ndGggPSB0aGlzLnZlcnRpY2VzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgZW5kSW5kZXggPSAoaW5kZXggKyAxKSAlIHZlcnRpY2VzTGVuZ3RoLFxuICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgZW5kVmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICBlZGdlTGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuXG4gICAgICBlZGdlTGluZXNJblhZUGxhbmUucHVzaChlZGdlTGluZUluWFlQbGFuZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVkZ2VMaW5lc0luWFlQbGFuZTtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG1hdDIgPSByb3RhdGlvbk1hdHJpeDsgIC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNlcyA9IHRoaXMudmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgbGV0IHZlYyA9IHZlcnRleDtcblxuICAgICAgdmVjID0gdHJhbnNmb3JtKHZlYywgbWF0Mik7XG5cbiAgICAgIHZlcnRleCA9IHZlYztcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcbiAgfVxuXG4gIHNwbGl0KHZlcnRpY2FsTGluZUluWFlQbGFuZSkge1xuICAgIGNvbnN0IGludGVyc2VjdGlvbnMgPSB0aGlzLmNhbGN1bGF0ZUludGVyc2VjdGlvbnNXaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSksXG4gICAgICAgICAgaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA9IGludGVyc2VjdGlvbnMuaW5jbHVkZXMobnVsbCksXG4gICAgICAgICAgZmFjZXRzSW5YWVBsYW5lID0gaW50ZXJzZWN0aW9uc0luY2x1ZGVzTnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0V2l0aE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucyk7XG5cbiAgICByZXR1cm4gZmFjZXRzSW5YWVBsYW5lO1xuICB9XG5cbiAgc3BsaXRXaXRoTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIHNwbGl0V2l0aG91dE51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucykge1xuXG4gIH1cblxuICBjYWxjdWxhdGVJbnRlcnNlY3Rpb25zV2l0aFZlcnRpY2FsTGluZUluWFlQbGFuZSh2ZXJ0aWNhbExpbmVJblhZUGxhbmUpIHtcbiAgICBjb25zdCBlZGdlTGluZXNJblhZUGxhbmUgPSB0aGlzLmdldEVkZ2VMaW5lc0luWFlQbGFuZSgpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlTGluZXNJblhZUGxhbmUubWFwKGZ1bmN0aW9uKGVkZ2VMaW5lSW5YWVBsYW5lKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3Rpb24gPSBlZGdlTGluZUluWFlQbGFuZS5jYWxjdWxhdGVJbnRlcnNlY3Rpb25XaXRoVmVydGljYWxMaW5lSW5YWVBsYW5lKHZlcnRpY2FsTGluZUluWFlQbGFuZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb247XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaW50ZXJzZWN0aW9ucztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgbm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCk7XG4gICAgXG4gICAgY29uc3Qgcm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uKG5vcm1hbCk7XG5cbiAgICBsZXQgdmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXModmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSBjYWxjdWxhdGVUcmFuc2xhdGlvbih2ZXJ0aWNlcyk7XG4gICAgXG4gICAgdmVydGljZXMgPSB0cmFuc2xhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgdHJhbnNsYXRpb24pO1xuICAgICAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IGZhY2V0SW5YWVBsYW5lID0gbmV3IEZhY2V0SW5YWVBsYW5lKHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbiwgdHJhbnNsYXRpb24pO1xuXG4gICAgcmV0dXJuIGZhY2V0SW5YWVBsYW5lO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXRJblhZUGxhbmU7XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRyYW5zbGF0aW9uKHZlcnRpY2VzKSB7XG4gIGNvbnN0IGZpcnN0VmVydGV4ID0gZmlyc3QodmVydGljZXMpLFxuICAgICAgICB2ZXJ0ZXggPSBmaXJzdFZlcnRleCwgLy8vXG4gICAgICAgIHZlcnRleENvbXBvbmVudHMgPSB2ZXJ0ZXgsICAvLy9cbiAgICAgICAgdGhpcmRWZXJ0ZXhDb21wb25lbnQgPSB0aGlyZCh2ZXJ0ZXhDb21wb25lbnRzKSxcbiAgICAgICAgeiA9IHRoaXJkVmVydGV4Q29tcG9uZW50LCAvLy9cbiAgICAgICAgdHJhbnNsYXRpb24gPSBbMCwgMCwgLXpdO1xuXG4gIHJldHVybiB0cmFuc2xhdGlvbjtcbn1cbiJdfQ==