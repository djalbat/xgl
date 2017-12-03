'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
  }, {
    key: 'splitWithTwoNonNullIntersections',
    value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithTwoNonNullIntersections', this).call(this, intersections, smallerFacets, this);
    } ///

  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
    } ///

  }, {
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal();

      vertices = vertices.map(function (vertex) {
        vertex = vertex.slice(); ///

        return vertex;
      });

      normal = normal.slice(); ///

      var colour = this.colour.slice(),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var colour = this.colour,
          normal = calculateNormal(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, colour);

      return colouredFacet;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImNvbG91ciIsInZlcnRleENvbG91ciIsInZlcnRleENvbG91cnMiLCJpbnRlcnNlY3Rpb25zIiwic21hbGxlckZhY2V0cyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwibWFwIiwidmVydGV4Iiwic2xpY2UiLCJjb2xvdXJlZEZhY2V0IiwiaW5kZXhlcyIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCOztJQUdRRSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7SUFFRkMsYTs7O0FBQ0oseUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxNQUE5QixFQUFzQztBQUFBOztBQUFBLDhIQUM5QkYsUUFEOEIsRUFDcEJDLE1BRG9COztBQUdwQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIb0M7QUFJckM7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxlQUFlLEtBQUtELE1BQTFCO0FBQUEsVUFBa0M7QUFDNUJFLHNCQUFnQixDQUNkRCxZQURjLEVBRWRBLFlBRmMsRUFHZEEsWUFIYyxDQUR0Qjs7QUFPQSxhQUFPQyxhQUFQO0FBQ0Q7OztxREFFZ0NDLGEsRUFBZUMsYSxFQUFlWCxLLEVBQU87QUFBRSxxSkFBdUNVLGFBQXZDLEVBQXNEQyxhQUF0RCxFQUFxRSxJQUFyRTtBQUE2RSxLLENBQUM7Ozs7b0RBRXRIRCxhLEVBQWVDLGEsRUFBZVgsSyxFQUFPO0FBQUUsb0pBQXNDVSxhQUF0QyxFQUFxREMsYUFBckQsRUFBb0UsSUFBcEU7QUFBNEUsSyxDQUFDOzs7OzRCQUU1STtBQUNOLFVBQUlOLFdBQVcsS0FBS08sV0FBTCxFQUFmO0FBQUEsVUFDSU4sU0FBUyxLQUFLTyxTQUFMLEVBRGI7O0FBR0FSLGlCQUFXQSxTQUFTUyxHQUFULENBQWEsVUFBU0MsTUFBVCxFQUFpQjtBQUN2Q0EsaUJBQVNBLE9BQU9DLEtBQVAsRUFBVCxDQUR1QyxDQUNiOztBQUUxQixlQUFPRCxNQUFQO0FBQ0QsT0FKVSxDQUFYOztBQU1BVCxlQUFTQSxPQUFPVSxLQUFQLEVBQVQsQ0FWTSxDQVVvQjs7QUFFMUIsVUFBTVQsU0FBUyxLQUFLQSxNQUFMLENBQVlTLEtBQVosRUFBZjtBQUFBLFVBQ01DLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBRHRCOztBQUdBLGFBQU9VLGFBQVA7QUFDRDs7O2lDQUVZWixRLEVBQVU7QUFDckIsVUFBTUUsU0FBUyxLQUFLQSxNQUFwQjtBQUFBLFVBQ01ELFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FEZjtBQUFBLFVBRU1ZLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBRnRCOztBQUlBLGFBQU9VLGFBQVA7QUFDRDs7O2lEQUVtQ1osUSxFQUFVYSxPLEVBQVNYLE0sRUFBUTtBQUM3REYsaUJBQVdhLFFBQVFKLEdBQVIsQ0FBWSxVQUFTSyxLQUFULEVBQWdCO0FBQ3JDLFlBQU1KLFNBQVNWLFNBQVNjLEtBQVQsQ0FBZjs7QUFFQSxlQUFPSixNQUFQO0FBQ0QsT0FKVSxDQUFYOztBQU1BLFVBQU1ULFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FBZjtBQUFBLFVBQ01ZLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBRHRCOztBQUdBLGFBQU9VLGFBQVA7QUFDRDs7OztFQS9EeUJqQixLOztBQWtFNUJvQixPQUFPQyxPQUFQLEdBQWlCakIsYUFBakIiLCJmaWxlIjoiY29sb3VyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyk7XG5cbmNvbnN0IHsgY2FsY3VsYXRlTm9ybWFsIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgY29sb3VyKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCk7XG4gICAgXG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBnZXRDb2xvdXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3VyO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMuY29sb3VyLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzID0gW1xuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgICAgdmVydGV4Q29sb3VyLFxuICAgICAgICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHZlcnRleENvbG91cnM7XG4gIH1cblxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfSAvLy9cblxuICBzcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIEZhY2V0KSB7IHN1cGVyLnNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgdGhpcyk7IH0gLy8vXG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpO1xuXG4gICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICB2ZXJ0ZXggPSB2ZXJ0ZXguc2xpY2UoKTsgIC8vL1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgbm9ybWFsID0gbm9ybWFsLnNsaWNlKCk7ICAvLy9cblxuICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3VyLnNsaWNlKCksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGljZXNJbmRleGVzQW5kQ29sb3VyKHZlcnRpY2VzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF07XG5cbiAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgfSk7XG5cbiAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpO1xuICAgIFxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==