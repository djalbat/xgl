'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var vec3 = require('./maths/vec3'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices');

var dot = vec3.dot,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    translateVertices = verticesUtilities.translateVertices;

var Facet = function () {
  function Facet(vertices, normal) {
    _classCallCheck(this, Facet);

    this.vertices = vertices;
    this.normal = normal;
  }

  _createClass(Facet, [{
    key: 'getVertices',
    value: function getVertices() {
      return this.vertices;
    }
  }, {
    key: 'getNormal',
    value: function getNormal() {
      return this.normal;
    }
  }, {
    key: 'getLineInXYPlane',
    value: function getLineInXYPlane() {
      var normalComponents = this.normal,
          ///
      firstVertex = first(this.vertices),
          firstNormalComponent = first(normalComponents),
          secondNormalComponent = second(normalComponents),
          a = firstNormalComponent,
          ///
      b = secondNormalComponent,
          ///
      c = -dot(firstVertex, this.normal),
          ///
      lineInXYPlane = LineInXYPlane.fromEquation(a, b, c);

      return lineInXYPlane;
    }
  }, {
    key: 'setVertices',
    value: function setVertices(vertices) {
      this.vertices = vertices;
    }
  }, {
    key: 'setNormal',
    value: function setNormal(normal) {
      this.normal = normal;
    }
  }, {
    key: 'rotate',
    value: function rotate(rotationQuaternion) {
      this.vertices = rotateVertices(this.vertices, rotationQuaternion);

      this.normal = calculateNormal(this.vertices);
    }
  }, {
    key: 'translate',
    value: function translate(translation) {
      this.vertices = translateVertices(this.vertices, translation);
    }
  }], [{
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }, {
    key: 'fromFacetInXYPlane',
    value: function fromFacetInXYPlane(facetInXYPlane) {
      var vertices = facetInXYPlane.getVertices(),
          normal = facetInXYPlane.getNormal(),
          facet = new Facet(vertices, normal);

      return facet;
    }
  }]);

  return Facet;
}();

module.exports = Facet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJ2ZWMzIiwicmVxdWlyZSIsIkxpbmVJblhZUGxhbmUiLCJhcnJheVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiZG90IiwiZmlyc3QiLCJzZWNvbmQiLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsInRyYW5zbGF0ZVZlcnRpY2VzIiwiRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsIm5vcm1hbENvbXBvbmVudHMiLCJmaXJzdFZlcnRleCIsImZpcnN0Tm9ybWFsQ29tcG9uZW50Iiwic2Vjb25kTm9ybWFsQ29tcG9uZW50IiwiYSIsImIiLCJjIiwibGluZUluWFlQbGFuZSIsImZyb21FcXVhdGlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsInRyYW5zbGF0aW9uIiwiZmFjZXQiLCJmYWNldEluWFlQbGFuZSIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsY0FBUixDQUFiO0FBQUEsSUFDTUMsZ0JBQWdCRCxRQUFRLGlCQUFSLENBRHRCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCO0FBQUEsSUFHTUcsb0JBQW9CSCxRQUFRLHNCQUFSLENBSDFCOztBQUtNLElBQUVJLEdBQUYsR0FBVUwsSUFBVixDQUFFSyxHQUFGO0FBQUEsSUFDRUMsS0FERixHQUNvQkgsY0FEcEIsQ0FDRUcsS0FERjtBQUFBLElBQ1NDLE1BRFQsR0FDb0JKLGNBRHBCLENBQ1NJLE1BRFQ7QUFBQSxJQUVFQyxlQUZGLEdBRXlESixpQkFGekQsQ0FFRUksZUFGRjtBQUFBLElBRW1CQyxjQUZuQixHQUV5REwsaUJBRnpELENBRW1CSyxjQUZuQjtBQUFBLElBRW1DQyxpQkFGbkMsR0FFeUROLGlCQUZ6RCxDQUVtQ00saUJBRm5DOztJQUlBQyxLO0FBQ0osaUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQzVCLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O2dDQUVXO0FBQ1YsYUFBTyxLQUFLQyxNQUFaO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTUMsbUJBQW1CLEtBQUtELE1BQTlCO0FBQUEsVUFBc0M7QUFDaENFLG9CQUFjVCxNQUFNLEtBQUtNLFFBQVgsQ0FEcEI7QUFBQSxVQUVNSSx1QkFBdUJWLE1BQU1RLGdCQUFOLENBRjdCO0FBQUEsVUFHTUcsd0JBQXdCVixPQUFPTyxnQkFBUCxDQUg5QjtBQUFBLFVBSU1JLElBQUlGLG9CQUpWO0FBQUEsVUFJaUM7QUFDM0JHLFVBQUlGLHFCQUxWO0FBQUEsVUFLaUM7QUFDM0JHLFVBQUksQ0FBQ2YsSUFBSVUsV0FBSixFQUFpQixLQUFLRixNQUF0QixDQU5YO0FBQUEsVUFNMEM7QUFDcENRLHNCQUFnQm5CLGNBQWNvQixZQUFkLENBQTJCSixDQUEzQixFQUE4QkMsQ0FBOUIsRUFBaUNDLENBQWpDLENBUHRCOztBQVNBLGFBQU9DLGFBQVA7QUFDRDs7O2dDQUVXVCxRLEVBQVU7QUFDcEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7OzhCQUVTQyxNLEVBQVE7QUFDaEIsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7OzsyQkFFTVUsa0IsRUFBb0I7QUFDekIsV0FBS1gsUUFBTCxHQUFnQkgsZUFBZSxLQUFLRyxRQUFwQixFQUE4Qlcsa0JBQTlCLENBQWhCOztBQUVBLFdBQUtWLE1BQUwsR0FBY0wsZ0JBQWdCLEtBQUtJLFFBQXJCLENBQWQ7QUFDRDs7OzhCQUVTWSxXLEVBQWE7QUFDckIsV0FBS1osUUFBTCxHQUFnQkYsa0JBQWtCLEtBQUtFLFFBQXZCLEVBQWlDWSxXQUFqQyxDQUFoQjtBQUNEOzs7aUNBRW1CWixRLEVBQVU7QUFDNUIsVUFBTUMsU0FBU0wsZ0JBQWdCSSxRQUFoQixDQUFmO0FBQUEsVUFDTWEsUUFBUSxJQUFJZCxLQUFKLENBQVVDLFFBQVYsRUFBb0JDLE1BQXBCLENBRGQ7O0FBR0EsYUFBT1ksS0FBUDtBQUNEOzs7dUNBRXlCQyxjLEVBQWdCO0FBQ3hDLFVBQU1kLFdBQVdjLGVBQWVDLFdBQWYsRUFBakI7QUFBQSxVQUNNZCxTQUFTYSxlQUFlRSxTQUFmLEVBRGY7QUFBQSxVQUVNSCxRQUFRLElBQUlkLEtBQUosQ0FBVUMsUUFBVixFQUFvQkMsTUFBcEIsQ0FGZDs7QUFJQSxhQUFPWSxLQUFQO0FBQ0Q7Ozs7OztBQUdISSxPQUFPQyxPQUFQLEdBQWlCbkIsS0FBakIiLCJmaWxlIjoiZmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHZlYzMgPSByZXF1aXJlKCcuL21hdGhzL3ZlYzMnKSxcbiAgICAgIExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL2xpbmVJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvdmVydGljZXMnKTtcblxuY29uc3QgeyBkb3QgfSA9IHZlYzMsXG4gICAgICB7IGZpcnN0LCBzZWNvbmQgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzLCB0cmFuc2xhdGVWZXJ0aWNlcyB9ID0gdmVydGljZXNVdGlsaXRpZXM7XG5cbmNsYXNzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCkge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLm5vcm1hbCA9IG5vcm1hbDtcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldExpbmVJblhZUGxhbmUoKSB7XG4gICAgY29uc3Qgbm9ybWFsQ29tcG9uZW50cyA9IHRoaXMubm9ybWFsLCAvLy9cbiAgICAgICAgICBmaXJzdFZlcnRleCA9IGZpcnN0KHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIGZpcnN0Tm9ybWFsQ29tcG9uZW50ID0gZmlyc3Qobm9ybWFsQ29tcG9uZW50cyksXG4gICAgICAgICAgc2Vjb25kTm9ybWFsQ29tcG9uZW50ID0gc2Vjb25kKG5vcm1hbENvbXBvbmVudHMpLFxuICAgICAgICAgIGEgPSBmaXJzdE5vcm1hbENvbXBvbmVudCwgIC8vL1xuICAgICAgICAgIGIgPSBzZWNvbmROb3JtYWxDb21wb25lbnQsIC8vL1xuICAgICAgICAgIGMgPSAtZG90KGZpcnN0VmVydGV4LCB0aGlzLm5vcm1hbCksIC8vL1xuICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBMaW5lSW5YWVBsYW5lLmZyb21FcXVhdGlvbihhLCBiLCBjKTtcblxuICAgIHJldHVybiBsaW5lSW5YWVBsYW5lO1xuICB9XG4gIFxuICBzZXRWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgfVxuICBcbiAgc2V0Tm9ybWFsKG5vcm1hbCkge1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICB9XG4gIFxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgXG4gICAgdGhpcy5ub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodGhpcy52ZXJ0aWNlcyk7XG4gIH1cbiAgXG4gIHRyYW5zbGF0ZSh0cmFuc2xhdGlvbikge1xuICAgIHRoaXMudmVydGljZXMgPSB0cmFuc2xhdGVWZXJ0aWNlcyh0aGlzLnZlcnRpY2VzLCB0cmFuc2xhdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBmYWNldCA9IG5ldyBGYWNldCh2ZXJ0aWNlcywgbm9ybWFsKTtcblxuICAgIHJldHVybiBmYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXRJblhZUGxhbmUoZmFjZXRJblhZUGxhbmUpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IGZhY2V0SW5YWVBsYW5lLmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXRJblhZUGxhbmUuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXQgPSBuZXcgRmFjZXQodmVydGljZXMsIG5vcm1hbCk7XG5cbiAgICByZXR1cm4gZmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGYWNldDtcbiJdfQ==