'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    facetUtilities = require('../../utilities/facet'),
    verticesUtilities = require('../../utilities/vertices'),
    approximateUtilities = require('../../utilities/approximate');

var isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal;

var ColouredFacet = function (_Facet) {
  _inherits(ColouredFacet, _Facet);

  function ColouredFacet(vertices, normal, edges, rgba) {
    _classCallCheck(this, ColouredFacet);

    var _this = _possibleConstructorReturn(this, (ColouredFacet.__proto__ || Object.getPrototypeOf(ColouredFacet)).call(this, vertices, normal, edges));

    _this.rgba = rgba;
    return _this;
  }

  _createClass(ColouredFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();

      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);

      var rgba = this.rgba,
          colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);

      return colouredFacet;
    }
  }, {
    key: 'getVertexColours',
    value: function getVertexColours() {
      var vertexColour = this.rgba,
          ///
      vertexColours = [vertexColour, vertexColour, vertexColour];

      return vertexColours;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var colouredFacet = null;

      var area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var rgba = this.rgba,
            normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }], [{
    key: 'fromCoordinateTuplesIndexTupleAndColour',
    value: function fromCoordinateTuplesIndexTupleAndColour(coordinateTuples, indexTuple, colour) {
      var colouredFacet = null;

      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge),
            rgba = [].concat(_toConsumableArray(colour), [1]); ///

        colouredFacet = new ColouredFacet(vertices, normal, edges, rgba);
      }

      return colouredFacet;
    }
  }]);

  return ColouredFacet;
}(Facet);

module.exports = ColouredFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImZhY2V0VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlQXJlYSIsImNhbGN1bGF0ZUVkZ2VzIiwiY2FsY3VsYXRlTm9ybWFsIiwiQ29sb3VyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJyZ2JhIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNvbG91cmVkRmFjZXQiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiYXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJsYXJnZUVub3VnaCIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIiwiY29sb3VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksaUJBQWlCSixRQUFRLHVCQUFSLENBSnZCO0FBQUEsSUFLTUssb0JBQW9CTCxRQUFRLDBCQUFSLENBTDFCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLDZCQUFSLENBTjdCOztBQVFNLElBQUVPLDBCQUFGLEdBQWlDRCxvQkFBakMsQ0FBRUMsMEJBQUY7QUFBQSxJQUNFQyx5Q0FERixHQUNnREgsaUJBRGhELENBQ0VHLHlDQURGO0FBQUEsSUFFRUMsVUFGRixHQUU2RkwsY0FGN0YsQ0FFRUssVUFGRjtBQUFBLElBRWNDLFdBRmQsR0FFNkZOLGNBRjdGLENBRWNNLFdBRmQ7QUFBQSxJQUUyQkMsYUFGM0IsR0FFNkZQLGNBRjdGLENBRTJCTyxhQUYzQjtBQUFBLElBRTBDQyxhQUYxQyxHQUU2RlIsY0FGN0YsQ0FFMENRLGFBRjFDO0FBQUEsSUFFeURDLGNBRnpELEdBRTZGVCxjQUY3RixDQUV5RFMsY0FGekQ7QUFBQSxJQUV5RUMsZUFGekUsR0FFNkZWLGNBRjdGLENBRXlFVSxlQUZ6RTs7SUFJQUMsYTs7O0FBQ0oseUJBQVlDLFFBQVosRUFBc0JDLE1BQXRCLEVBQThCQyxLQUE5QixFQUFxQ0MsSUFBckMsRUFBMkM7QUFBQTs7QUFBQSw4SEFDbkNILFFBRG1DLEVBQ3pCQyxNQUR5QixFQUNqQkMsS0FEaUI7O0FBR3pDLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUh5QztBQUkxQzs7Ozs0QkFFTztBQUNOLFVBQUlILFdBQVcsS0FBS0ksV0FBTCxFQUFmO0FBQUEsVUFDSUgsU0FBUyxLQUFLSSxTQUFMLEVBRGI7QUFBQSxVQUVJSCxRQUFRLEtBQUtJLFFBQUwsRUFGWjs7QUFJQU4saUJBQVdMLGNBQWNLLFFBQWQsQ0FBWDtBQUNBQyxlQUFTUCxZQUFZTyxNQUFaLENBQVQ7QUFDQUMsY0FBUVQsV0FBV1MsS0FBWCxDQUFSOztBQUVBLFVBQU1DLE9BQU8sS0FBS0EsSUFBbEI7QUFBQSxVQUNNSSxnQkFBZ0IsSUFBSVIsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsSUFBM0MsQ0FEdEI7O0FBR0EsYUFBT0ksYUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1DLGVBQWUsS0FBS0wsSUFBMUI7QUFBQSxVQUFnQztBQUMxQk0sc0JBQWdCLENBQ2RELFlBRGMsRUFFZEEsWUFGYyxFQUdkQSxZQUhjLENBRHRCOztBQU9BLGFBQU9DLGFBQVA7QUFDRDs7O2lDQUVZVCxRLEVBQVU7QUFDckIsVUFBSU8sZ0JBQWdCLElBQXBCOztBQUVBLFVBQU1HLE9BQU9kLGNBQWNJLFFBQWQsQ0FBYjtBQUFBLFVBQ01XLCtCQUErQnBCLDJCQUEyQm1CLElBQTNCLENBRHJDO0FBQUEsVUFFTUUsY0FBYyxDQUFDRCw0QkFGckIsQ0FIcUIsQ0FLK0I7O0FBRXBELFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNVCxPQUFPLEtBQUtBLElBQWxCO0FBQUEsWUFDTUYsU0FBU0gsZ0JBQWdCRSxRQUFoQixFQUEwQmQsTUFBMUIsQ0FEZjtBQUFBLFlBRU1nQixRQUFRTCxlQUFlRyxRQUFmLEVBQXlCakIsSUFBekIsQ0FGZDs7QUFJQXdCLHdCQUFnQixJQUFJUixhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxJQUEzQyxDQUFoQjtBQUNEOztBQUVELGFBQU9JLGFBQVA7QUFDRDs7OzREQUU4Q00sZ0IsRUFBa0JDLFUsRUFBWUMsTSxFQUFRO0FBQ25GLFVBQUlSLGdCQUFnQixJQUFwQjs7QUFFQSxVQUFNUCxXQUFXUiwwQ0FBMENxQixnQkFBMUMsRUFBNERDLFVBQTVELEVBQXdFM0IsTUFBeEUsQ0FBakI7QUFBQSxVQUNNdUIsT0FBT2QsY0FBY0ksUUFBZCxDQURiO0FBQUEsVUFFTVcsK0JBQStCcEIsMkJBQTJCbUIsSUFBM0IsQ0FGckM7QUFBQSxVQUdNRSxjQUFjLENBQUNELDRCQUhyQixDQUhtRixDQU0vQjs7QUFFcEQsVUFBSUMsV0FBSixFQUFpQjtBQUNmLFlBQU1YLFNBQVNILGdCQUFnQkUsUUFBaEIsRUFBMEJkLE1BQTFCLENBQWY7QUFBQSxZQUNNZ0IsUUFBUUwsZUFBZUcsUUFBZixFQUF5QmpCLElBQXpCLENBRGQ7QUFBQSxZQUVNb0Isb0NBQVlZLE1BQVosSUFBb0IsQ0FBcEIsRUFGTixDQURlLENBR2lCOztBQUVoQ1Isd0JBQWdCLElBQUlSLGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLElBQTNDLENBQWhCO0FBQ0Q7O0FBRUQsYUFBT0ksYUFBUDtBQUNEOzs7O0VBcEV5QnRCLEs7O0FBdUU1QitCLE9BQU9DLE9BQVAsR0FBaUJsQixhQUFqQiIsImZpbGUiOiJjb2xvdXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGFwcHJveGltYXRlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlJyk7XG5cbmNvbnN0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcztcblxuY2xhc3MgQ29sb3VyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG4gICAgXG4gICAgdGhpcy5yZ2JhID0gcmdiYTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCByZ2JhID0gdGhpcy5yZ2JhLFxuICAgICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIGNvbG91cmVkRmFjZXQgPSBuZXcgQ29sb3VyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQW5kQ29sb3VyKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGNvbG91cikge1xuICAgIGxldCBjb2xvdXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==