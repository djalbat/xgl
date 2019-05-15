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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImZhY2V0VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsImlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlQXJlYSIsImNhbGN1bGF0ZUVkZ2VzIiwiY2FsY3VsYXRlTm9ybWFsIiwiQ29sb3VyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJyZ2JhIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNvbG91cmVkRmFjZXQiLCJ2ZXJ0ZXhDb2xvdXIiLCJ2ZXJ0ZXhDb2xvdXJzIiwiYXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJsYXJnZUVub3VnaCIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIiwiY29sb3VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxTQUFTRixRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01HLFNBQVNILFFBQVEsV0FBUixDQUhmO0FBQUEsSUFJTUksaUJBQWlCSixRQUFRLHVCQUFSLENBSnZCO0FBQUEsSUFLTUssb0JBQW9CTCxRQUFRLDBCQUFSLENBTDFCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLDZCQUFSLENBTjdCOztBQVFNLElBQUVPLDBCQUFGLEdBQWlDRCxvQkFBakMsQ0FBRUMsMEJB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QTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsSUFBM0MsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFwRXlCdEIsSzs7QUF1RTVCK0IsT0FBT0MsT0FBUCxHQUFpQmxCLGFBQWpCIiwiZmlsZSI6ImNvbG91cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzO1xuXG5jbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgcmdiYSA9IHRoaXMucmdiYSxcbiAgICAgICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRWZXJ0ZXhDb2xvdXJzKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91ciA9IHRoaXMucmdiYSwgLy8vXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICAgIHZlcnRleENvbG91cixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJzO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IHJnYmEgPSB0aGlzLnJnYmEsXG4gICAgICAgICAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCByZ2JhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3VyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRDb2xvdXIoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgY29sb3VyKSB7XG4gICAgbGV0IGNvbG91cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIHJnYmEgPSBbLi4uY29sb3VyLCAxXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sb3VyZWRGYWNldDtcbiJdfQ==