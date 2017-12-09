'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    facetUtilities = require('../utilities/facet');

var cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, colour) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal, edges));

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
          normal = this.getNormal(),
          edges = this.getEdges();

      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);

      var colour = this.colour.slice(),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var colour = this.colour,
          normal = calculateNormal(vertices),
          edges = calculateEdges(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

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
          edges = calculateEdges(vertices),
          colouredFacet = new ColouredFacet(vertices, normal, edges, colour);

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9jb2xvdXJlZC5qcyJdLCJuYW1lcyI6WyJGYWNldCIsInJlcXVpcmUiLCJmYWNldFV0aWxpdGllcyIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsIkNvbG91cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwiY29sb3VyIiwidmVydGV4Q29sb3VyIiwidmVydGV4Q29sb3VycyIsImludGVyc2VjdGlvbnMiLCJzbWFsbGVyRmFjZXRzIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsInNsaWNlIiwiY29sb3VyZWRGYWNldCIsImluZGV4ZXMiLCJtYXAiLCJpbmRleCIsInZlcnRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2Qjs7SUFHUUUsVSxHQUE0RUQsYyxDQUE1RUMsVTtJQUFZQyxXLEdBQWdFRixjLENBQWhFRSxXO0lBQWFDLGEsR0FBbURILGMsQ0FBbkRHLGE7SUFBZUMsYyxHQUFvQ0osYyxDQUFwQ0ksYztJQUFnQkMsZSxHQUFvQkwsYyxDQUFwQkssZTs7SUFFMURDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLE1BQXJDLEVBQTZDO0FBQUE7O0FBQUEsOEhBQ3JDSCxRQURxQyxFQUMzQkMsTUFEMkIsRUFDbkJDLEtBRG1COztBQUczQyxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFIMkM7QUFJNUM7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNQyxlQUFlLEtBQUtELE1BQTFCO0FBQUEsVUFBa0M7QUFDNUJFLHNCQUFnQixDQUNkRCxZQURjLEVBRWRBLFlBRmMsRUFHZEEsWUFIYyxDQUR0Qjs7QUFPQSxhQUFPQyxhQUFQO0FBQ0Q7OztxREFFZ0NDLGEsRUFBZUMsYSxFQUFlaEIsSyxFQUFPO0FBQUUscUpBQXVDZSxhQUF2QyxFQUFzREMsYUFBdEQsRUFBcUUsSUFBckU7QUFBNkUsSyxDQUFDOzs7O29EQUV0SEQsYSxFQUFlQyxhLEVBQWVoQixLLEVBQU87QUFBRSxvSkFBc0NlLGFBQXRDLEVBQXFEQyxhQUFyRCxFQUFvRSxJQUFwRTtBQUE0RSxLLENBQUM7Ozs7NEJBRTVJO0FBQ04sVUFBSVAsV0FBVyxLQUFLUSxXQUFMLEVBQWY7QUFBQSxVQUNJUCxTQUFTLEtBQUtRLFNBQUwsRUFEYjtBQUFBLFVBRUlQLFFBQVEsS0FBS1EsUUFBTCxFQUZaOztBQUlBVixpQkFBV0osY0FBY0ksUUFBZCxDQUFYO0FBQ0FDLGVBQVNOLFlBQVlNLE1BQVosQ0FBVDtBQUNBQyxjQUFRUixXQUFXUSxLQUFYLENBQVI7O0FBRUEsVUFBTUMsU0FBUyxLQUFLQSxNQUFMLENBQVlRLEtBQVosRUFBZjtBQUFBLFVBQ01DLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUR0Qjs7QUFHQSxhQUFPUyxhQUFQO0FBQ0Q7OztpQ0FFWVosUSxFQUFVO0FBQ3JCLFVBQU1HLFNBQVMsS0FBS0EsTUFBcEI7QUFBQSxVQUNNRixTQUFTSCxnQkFBZ0JFLFFBQWhCLENBRGY7QUFBQSxVQUVNRSxRQUFRTCxlQUFlRyxRQUFmLENBRmQ7QUFBQSxVQUdNWSxnQkFBZ0IsSUFBSWIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsTUFBM0MsQ0FIdEI7O0FBS0EsYUFBT1MsYUFBUDtBQUNEOzs7aURBRW1DWixRLEVBQVVhLE8sRUFBU1YsTSxFQUFRO0FBQzdESCxpQkFBV2EsUUFBUUMsR0FBUixDQUFZLFVBQVNDLEtBQVQsRUFBZ0I7QUFDckMsWUFBTUMsU0FBU2hCLFNBQVNlLEtBQVQsQ0FBZjs7QUFFQSxlQUFPQyxNQUFQO0FBQ0QsT0FKVSxDQUFYOztBQU1BLFVBQU1mLFNBQVNILGdCQUFnQkUsUUFBaEIsQ0FBZjtBQUFBLFVBQ01FLFFBQVFMLGVBQWVHLFFBQWYsQ0FEZDtBQUFBLFVBRU1ZLGdCQUFnQixJQUFJYixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxNQUEzQyxDQUZ0Qjs7QUFJQSxhQUFPUyxhQUFQO0FBQ0Q7Ozs7RUE5RHlCckIsSzs7QUFpRTVCMEIsT0FBT0MsT0FBUCxHQUFpQm5CLGFBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9mYWNldCcpO1xuXG5jb25zdCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLmNvbG91ciA9IGNvbG91cjtcbiAgfVxuXG4gIGdldENvbG91cigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2xvdXI7XG4gIH1cbiAgXG4gIGdldFZlcnRleENvbG91cnMoKSB7XG4gICAgY29uc3QgdmVydGV4Q29sb3VyID0gdGhpcy5jb2xvdXIsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIHNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIEZhY2V0KSB7IHN1cGVyLnNwbGl0V2l0aFR3b05vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIHRoaXMpOyB9IC8vL1xuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgRmFjZXQpIHsgc3VwZXIuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCB0aGlzKTsgfSAvLy9cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuICAgIFxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyID0gdGhpcy5jb2xvdXIuc2xpY2UoKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cik7XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IGNvbG91ciA9IHRoaXMuY29sb3VyLFxuICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcyksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBjb2xvdXIpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzSW5kZXhlc0FuZENvbG91cih2ZXJ0aWNlcywgaW5kZXhlcywgY29sb3VyKSB7XG4gICAgdmVydGljZXMgPSBpbmRleGVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xuXG4gICAgICByZXR1cm4gdmVydGV4O1xuICAgIH0pO1xuXG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzKSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGNvbG91cik7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb2xvdXJlZEZhY2V0O1xuIl19