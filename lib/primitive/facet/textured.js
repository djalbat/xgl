'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edge = require('../edge'),
    Facet = require('../facet'),
    Normal = require('../normal'),
    Vertex = require('../vertex'),
    arrayUtilities = require('../../utilities/array'),
    facetUtilities = require('../../utilities/facet'),
    textureUtilities = require('../../utilities/texture'),
    verticesUtilities = require('../../utilities/vertices'),
    approximateUtilities = require('../../utilities/approximate');

var _permute = arrayUtilities.permute,
    isApproximatelyEqualToZero = approximateUtilities.isApproximatelyEqualToZero,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateArea = facetUtilities.calculateArea,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    cloneTextureCoordinateTuples = textureUtilities.cloneTextureCoordinateTuples,
    calculateMappedTextureCoordinateTuples = textureUtilities.calculateMappedTextureCoordinateTuples,
    calculateAdjustedTextureCoordinateTuples = textureUtilities.calculateAdjustedTextureCoordinateTuples;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal, edges));

    _this.imageName = imageName;

    _this.textureCoordinateTuples = textureCoordinateTuples;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: 'clone',
    value: function clone() {
      var vertices = this.getVertices(),
          normal = this.getNormal(),
          edges = this.getEdges();

      vertices = cloneVertices(vertices);
      normal = cloneNormal(normal);
      edges = cloneEdges(edges);

      var imageName = this.imageName,
          ///
      textureCoordinateTuples = cloneTextureCoordinateTuples(this.textureCoordinateTuples),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);

      return texturedFacet;
    }
  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinateTuples',
    value: function getTextureCoordinateTuples() {
      return this.textureCoordinateTuples;
    }
  }, {
    key: 'getMappedTextureCoordinateTuples',
    value: function getMappedTextureCoordinateTuples(imageMapJSON) {
      var json = imageMapJSON[this.imageName],
          extent = json,
          ///
      mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);

      return mappedTextureCoordinateTuples;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinateTuples = _permute(this.textureCoordinateTuples, places);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var texturedFacet = null;

      var area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            parentVertices = this.vertices,
            ///
        adjustedTextureCoordinateTuple = calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples),
            edges = calculateEdges(vertices, Edge),
            imageName = this.imageName,
            textureCoordinateTuples = adjustedTextureCoordinateTuple; ///

        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }], [{
    key: 'fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName',
    value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(textureCoordinateTuples, coordinateTuples, indexTuple, imageName) {
      var texturedFacet = null;

      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          area = calculateArea(vertices),
          areaApproximatelyEqualToZero = isApproximatelyEqualToZero(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = calculateNormal(vertices, Normal),
            edges = calculateEdges(vertices, Edge);

        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImFycmF5VXRpbGl0aWVzIiwiZmFjZXRVdGlsaXRpZXMiLCJ0ZXh0dXJlVXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInBlcm11dGUiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUFyZWEiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsImNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU1hcEpTT04iLCJqc29uIiwiZXh0ZW50IiwibWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJwbGFjZXMiLCJhcmVhIiwiYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImxhcmdlRW5vdWdoIiwicGFyZW50VmVydGljZXMiLCJhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFF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WUFDTXNCLFFBQVFSLGVBQWVNLFFBQWYsRUFBeUJ2QixJQUF6QixDQURkOztBQUdBK0Isd0JBQWdCLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFwRnlCN0IsSzs7QUF1RjVCMEMsT0FBT0MsT0FBUCxHQUFpQnZCLGFBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90ZXh0dXJlJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlQW5kSW1hZ2VOYW1lKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpO1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcbiJdfQ==