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
  }]);

  return Facet;
}();

module.exports = Facet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mYWNldC5qcyJdLCJuYW1lcyI6WyJ2ZWMzIiwicmVxdWlyZSIsIkxpbmVJblhZUGxhbmUiLCJhcnJheVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiZG90IiwiZmlyc3QiLCJzZWNvbmQiLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsInRyYW5zbGF0ZVZlcnRpY2VzIiwiRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsIm5vcm1hbENvbXBvbmVudHMiLCJmaXJzdFZlcnRleCIsImZpcnN0Tm9ybWFsQ29tcG9uZW50Iiwic2Vjb25kTm9ybWFsQ29tcG9uZW50IiwiYSIsImIiLCJjIiwibGluZUluWFlQbGFuZSIsImZyb21FcXVhdGlvbiIsInJvdGF0aW9uUXVhdGVybmlvbiIsInRyYW5zbGF0aW9uIiwiZmFjZXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxjQUFSLENBQWI7QUFBQSxJQUNNQyxnQkFBZ0JELFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7QUFBQSxJQUdNRyxvQkFBb0JILFFBQVEsc0JBQVIsQ0FIMUI7O0FBS00sSUFBRUksR0FBRixHQUFVTCxJQUFWLENBQUVLLEdBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ29CSCxjQURwQixDQUNFRyxLQURGO0FBQUEsSUFDU0MsTUFEVCxHQUNvQkosY0FEcEIsQ0FDU0ksTUFEVDtBQUFBLElBRUVDLGVBRkYsR0FFeURKLGlCQUZ6RCxDQUVFSSxlQUZGO0FBQUEsSUFFbUJDLGNBRm5CLEdBRXlETCxpQkFGekQsQ0FFbUJLLGNBRm5CO0FBQUEsSUFFbUNDLGlCQUZuQyxHQUV5RE4saUJBRnpELENBRW1DTSxpQkFGbkM7O0lBSUFDLEs7QUFDSixpQkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEI7QUFBQTs7QUFDNUIsU0FBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxtQkFBbUIsS0FBS0QsTUFBOUI7QUFBQSxVQUFzQztBQUNoQ0Usb0JBQWNULE1BQU0sS0FBS00sUUFBWCxDQURwQjtBQUFBLFVBRU1JLHVCQUF1QlYsTUFBTVEsZ0JBQU4sQ0FGN0I7QUFBQSxVQUdNRyx3QkFBd0JWLE9BQU9PLGdCQUFQLENBSDlCO0FBQUEsVUFJTUksSUFBSUYsb0JBSlY7QUFBQSxVQUlpQztBQUMzQkcsVUFBSUYscUJBTFY7QUFBQSxVQUtpQztBQUMzQkcsVUFBSSxDQUFDZixJQUFJVSxXQUFKLEVBQWlCLEtBQUtGLE1BQXRCLENBTlg7QUFBQSxVQU0wQztBQUNwQ1Esc0JBQWdCbkIsY0FBY29CLFlBQWQsQ0FBMkJKLENBQTNCLEVBQThCQyxDQUE5QixFQUFpQ0MsQ0FBakMsQ0FQdEI7O0FBU0EsYUFBT0MsYUFBUDtBQUNEOzs7MkJBRU1FLGtCLEVBQW9CO0FBQ3pCLFdBQUtYLFFBQUwsR0FBZ0JILGVBQWUsS0FBS0csUUFBcEIsRUFBOEJXLGtCQUE5QixDQUFoQjs7QUFFQSxXQUFLVixNQUFMLEdBQWNMLGdCQUFnQixLQUFLSSxRQUFyQixDQUFkO0FBQ0Q7Ozs4QkFFU1ksVyxFQUFhO0FBQ3JCLFdBQUtaLFFBQUwsR0FBZ0JGLGtCQUFrQixLQUFLRSxRQUF2QixFQUFpQ1ksV0FBakMsQ0FBaEI7QUFDRDs7O2lDQUVtQlosUSxFQUFVO0FBQzVCLFVBQU1DLFNBQVNMLGdCQUFnQkksUUFBaEIsQ0FBZjtBQUFBLFVBQ01hLFFBQVEsSUFBSWQsS0FBSixDQUFVQyxRQUFWLEVBQW9CQyxNQUFwQixDQURkOztBQUdBLGFBQU9ZLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJoQixLQUFqQiIsImZpbGUiOiJmYWNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4vbWF0aHMvdmVjMycpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpO1xuXG5jb25zdCB7IGRvdCB9ID0gdmVjMyxcbiAgICAgIHsgZmlyc3QsIHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNhbGN1bGF0ZU5vcm1hbCwgcm90YXRlVmVydGljZXMsIHRyYW5zbGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcztcblxuY2xhc3MgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICB9XG5cbiAgZ2V0VmVydGljZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljZXM7XG4gIH1cblxuICBnZXROb3JtYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9ybWFsO1xuICB9XG5cbiAgZ2V0TGluZUluWFlQbGFuZSgpIHtcbiAgICBjb25zdCBub3JtYWxDb21wb25lbnRzID0gdGhpcy5ub3JtYWwsIC8vL1xuICAgICAgICAgIGZpcnN0VmVydGV4ID0gZmlyc3QodGhpcy52ZXJ0aWNlcyksXG4gICAgICAgICAgZmlyc3ROb3JtYWxDb21wb25lbnQgPSBmaXJzdChub3JtYWxDb21wb25lbnRzKSxcbiAgICAgICAgICBzZWNvbmROb3JtYWxDb21wb25lbnQgPSBzZWNvbmQobm9ybWFsQ29tcG9uZW50cyksXG4gICAgICAgICAgYSA9IGZpcnN0Tm9ybWFsQ29tcG9uZW50LCAgLy8vXG4gICAgICAgICAgYiA9IHNlY29uZE5vcm1hbENvbXBvbmVudCwgLy8vXG4gICAgICAgICAgYyA9IC1kb3QoZmlyc3RWZXJ0ZXgsIHRoaXMubm9ybWFsKSwgLy8vXG4gICAgICAgICAgbGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbUVxdWF0aW9uKGEsIGIsIGMpO1xuXG4gICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gIH1cbiAgXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gcm90YXRlVmVydGljZXModGhpcy52ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzKTtcbiAgfVxuICBcbiAgdHJhbnNsYXRlKHRyYW5zbGF0aW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHRyYW5zbGF0ZVZlcnRpY2VzKHRoaXMudmVydGljZXMsIHRyYW5zbGF0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpLFxuICAgICAgICAgIGZhY2V0ID0gbmV3IEZhY2V0KHZlcnRpY2VzLCBub3JtYWwpO1xuXG4gICAgcmV0dXJuIGZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmFjZXQ7XG4iXX0=