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
    }
  }, {
    key: 'splitWithOneNonNullIntersection',
    value: function splitWithOneNonNullIntersection(intersections, smallerFacets, Facet) {
      _get(ColouredFacet.prototype.__proto__ || Object.getPrototypeOf(ColouredFacet.prototype), 'splitWithOneNonNullIntersection', this).call(this, intersections, smallerFacets, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImNvbG91ciIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwibWFwIiwidmVydGV4Iiwic2xpY2UiLCJjb2xvdXJlZEZhY2V0IiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImludGVyc2VjdGlvbnMiLCJzbWFsbGVyRmFjZXRzIiwiaW5kZXhlcyIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsb0JBQW9CRCxRQUFRLHVCQUFSLENBRDFCOztJQUdRRSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7SUFFRkMsYTs7O0FBQ0oseUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxNQUE5QixFQUFzQztBQUFBOztBQUFBLDhIQUM5QkYsUUFEOEIsRUFDcEJDLE1BRG9COztBQUdwQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIb0M7QUFJckM7Ozs7NEJBRU87QUFDTixVQUFJRixXQUFXLEtBQUtHLFdBQUwsRUFBZjtBQUFBLFVBQ0lGLFNBQVMsS0FBS0csU0FBTCxFQURiOztBQUdBSixpQkFBV0EsU0FBU0ssR0FBVCxDQUFhLFVBQVNDLE1BQVQsRUFBaUI7QUFDdkNBLGlCQUFTQSxPQUFPQyxLQUFQLEVBQVQsQ0FEdUMsQ0FDYjs7QUFFMUIsZUFBT0QsTUFBUDtBQUNELE9BSlUsQ0FBWDs7QUFNQUwsZUFBU0EsT0FBT00sS0FBUCxFQUFULENBVk0sQ0FVb0I7O0FBRTFCLFVBQU1MLFNBQVMsS0FBS0EsTUFBTCxDQUFZSyxLQUFaLEVBQWY7QUFBQSxVQUNNQyxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxNQUFwQyxDQUR0Qjs7QUFHQSxhQUFPTSxhQUFQO0FBQ0Q7OztnQ0FFVztBQUNWLGFBQU8sS0FBS04sTUFBWjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1PLGVBQWUsS0FBS1AsTUFBMUI7QUFBQSxVQUFrQztBQUM1QlEsc0JBQWdCLENBQ2RELFlBRGMsRUFFZEEsWUFGYyxFQUdkQSxZQUhjLENBRHRCOztBQU9BLGFBQU9DLGFBQVA7QUFDRDs7O3FEQUVnQ0MsYSxFQUFlQyxhLEVBQWVqQixLLEVBQU87QUFBRSxxSkFBdUNnQixhQUF2QyxFQUFzREMsYUFBdEQsRUFBcUUsSUFBckU7QUFBNkU7OztvREFFckhELGEsRUFBZUMsYSxFQUFlakIsSyxFQUFPO0FBQUUsb0pBQXNDZ0IsYUFBdEMsRUFBcURDLGFBQXJELEVBQW9FLElBQXBFO0FBQTRFOzs7aUNBRXRJWixRLEVBQVU7QUFDckIsVUFBTUUsU0FBUyxLQUFLQSxNQUFwQjtBQUFBLFVBQ01ELFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FEZjtBQUFBLFVBRU1RLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBRnRCOztBQUlBLGFBQU9NLGFBQVA7QUFDRDs7O2lEQUVtQ1IsUSxFQUFVYSxPLEVBQVNYLE0sRUFBUTtBQUM3REYsaUJBQVdhLFFBQVFSLEdBQVIsQ0FBWSxVQUFTUyxLQUFULEVBQWdCO0FBQ3JDLFlBQU1SLFNBQVNOLFNBQVNjLEtBQVQsQ0FBZjs7QUFFQSxlQUFPUixNQUFQO0FBQ0QsT0FKVSxDQUFYOztBQU1BLFVBQU1MLFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FBZjtBQUFBLFVBQ01RLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLE1BQXBDLENBRHRCOztBQUdBLGFBQU9NLGFBQVA7QUFDRDs7OztFQS9EeUJiLEs7O0FBa0U1Qm9CLE9BQU9DLE9BQVAsR0FBaUJqQixhQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKTtcblxuY29uc3QgeyBjYWxjdWxhdGVOb3JtYWwgfSA9IHZlcnRpY2VzVXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKTtcblxuICAgIHZlcnRpY2VzID0gdmVydGljZXMubWFwKGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgdmVydGV4ID0gdmVydGV4LnNsaWNlKCk7ICAvLy9cblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIG5vcm1hbCA9IG5vcm1hbC5zbGljZSgpOyAgLy8vXG5cbiAgICBjb25zdCBjb2xvdXIgPSB0aGlzLmNvbG91ci5zbGljZSgpLFxuICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbiAgXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIEZhY2V0KSB7IHN1cGVyLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9XG5cbiAgc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBGYWNldCkgeyBzdXBlci5zcGxpdFdpdGhPbmVOb25OdWxsSW50ZXJzZWN0aW9uKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIsXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgY29sb3VyKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21WZXJ0aWNlc0luZGV4ZXNBbmRDb2xvdXIodmVydGljZXMsIGluZGV4ZXMsIGNvbG91cikge1xuICAgIHZlcnRpY2VzID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcblxuICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGNvbG91cik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIl19