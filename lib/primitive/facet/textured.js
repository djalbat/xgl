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
    value: function getMappedTextureCoordinateTuples(extent) {
      var mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImFycmF5VXRpbGl0aWVzIiwiZmFjZXRVdGlsaXRpZXMiLCJ0ZXh0dXJlVXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJhcHByb3hpbWF0ZVV0aWxpdGllcyIsInBlcm11dGUiLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIiwiY2xvbmVFZGdlcyIsImNsb25lTm9ybWFsIiwiY2xvbmVWZXJ0aWNlcyIsImNhbGN1bGF0ZUFyZWEiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsImNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsInRleHR1cmVkRmFjZXQiLCJleHRlbnQiLCJtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInBsYWNlcyIsImFyZWEiLCJhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwibGFyZ2VFbm91Z2giLCJwYXJlbnRWZXJ0aWNlcyIsImFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsU0FB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QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFsRnlCN0IsSzs7QUFxRjVCd0MsT0FBT0MsT0FBUCxHQUFpQnJCLGFBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90ZXh0dXJlJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgYXBwcm94aW1hdGVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGUnKTtcblxuY29uc3QgeyBwZXJtdXRlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSA9IGFwcHJveGltYXRlVXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGV4dGVudCkge1xuICAgIGNvbnN0IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19