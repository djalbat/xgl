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
    verticesUtilities = require('../../utilities/vertices');

var _permute = arrayUtilities.permute,
    verticesFromCoordinateTuplesAndIndexTuple = verticesUtilities.verticesFromCoordinateTuplesAndIndexTuple,
    cloneEdges = facetUtilities.cloneEdges,
    cloneNormal = facetUtilities.cloneNormal,
    cloneVertices = facetUtilities.cloneVertices,
    calculateEdges = facetUtilities.calculateEdges,
    calculateNormal = facetUtilities.calculateNormal,
    cloneTextureCoordinates = textureUtilities.cloneTextureCoordinates,
    calculateVertexTextureCoordinates = textureUtilities.calculateVertexTextureCoordinates,
    calculateAdjustedTextureCoordinates = textureUtilities.calculateAdjustedTextureCoordinates;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinates) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal, edges));

    _this.imageName = imageName;

    _this.textureCoordinates = textureCoordinates;
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
          textureCoordinates = cloneTextureCoordinates(this.textureCoordinates),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }, {
    key: 'getImageName',
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: 'getTextureCoordinates',
    value: function getTextureCoordinates() {
      return this.textureCoordinates;
    }
  }, {
    key: 'getVertexTextureCoordinates',
    value: function getVertexTextureCoordinates(imageJSON) {
      var extent = imageJSON[this.imageName],
          left = extent.left,
          bottom = extent.bottom,
          width = extent.width,
          height = extent.height,
          vertexTextureCoordinates = calculateVertexTextureCoordinates(this.textureCoordinates, left, bottom, width, height);


      return vertexTextureCoordinates;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinates = _permute(this.textureCoordinates, places);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices, Normal),
          parentVertices = this.vertices,
          ///
      adjustedTextureCoordinates = calculateAdjustedTextureCoordinates(vertices, normal, parentVertices, this.textureCoordinates),
          edges = calculateEdges(vertices, Edge),
          imageName = this.imageName,
          textureCoordinates = adjustedTextureCoordinates,
          ///
      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }], [{
    key: 'fromTextureCoordinateTupleCoordinateTuplesIndexTupleAndImageName',
    value: function fromTextureCoordinateTupleCoordinateTuplesIndexTupleAndImageName(textureCoordinateTuple, coordinateTuples, indexTuple, imageName) {
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImFycmF5VXRpbGl0aWVzIiwiZmFjZXRVdGlsaXRpZXMiLCJ0ZXh0dXJlVXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJwZXJtdXRlIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlcyIsImNhbGN1bGF0ZVZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsImNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzIiwiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwidGV4dHVyZWRGYWNldCIsImltYWdlSlNPTiIsImxlZnQiLCJleHRlbnQiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlcyIsInBsYWNlcyIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJ0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsV0FBUixDQUZmO0FBQUEsSUFH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aUIsS0FBS2pCLFFBRDVCO0FBQUEsVUFDc0M7QUFDaENrQixtQ0FBNkJwQixvQ0FBb0NFLFFBQXBDLEVBQThDQyxNQUE5QyxFQUFzRGdCLGNBQXRELEVBQXNFLEtBQUtiLGtCQUEzRSxDQUZuQztBQUFBLFVBR01GLFFBQVFSLGVBQWVNLFFBQWYsRUFBeUJwQixJQUF6QixDQUhkO0FBQUEsVUFJTXVCLFlBQVksS0FBS0EsU0FKdkI7QUFBQSxVQUtNQyxxQkFBcUJjLDBCQUwzQjtBQUFBLFVBS3dEO0FBQ2xEVixzQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsU0FBM0MsRUFBc0RDLGtCQUF0RCxDQU50Qjs7QUFRQSxhQUFPSSxhQUFQO0FBQ0Q7OztxRkFFdUVXLHNCLEVBQXdCQyxnQixFQUFrQkMsVSxFQUFZbEIsUyxFQUFXO0FBQ3ZJLFVBQU1ILFdBQVdWLDBDQUEwQzhCLGdCQUExQyxFQUE0REMsVUFBNUQsRUFBd0VyQyxNQUF4RSxDQUFqQjtBQUFBLFVBQ01pQixTQUFTTixnQkFBZ0JLLFFBQWhCLEVBQTBCakIsTUFBMUIsQ0FEZjtBQUFBLFVBRU1tQixRQUFRUixlQUFlTSxRQUFmLEVBQXlCcEIsSUFBekIsQ0FGZDtBQUFBLFVBR000QixnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsU0FBM0MsRUFBc0RDLGtCQUF0RCxDQUh0Qjs7QUFLQSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFsRXlCMUIsSzs7QUFxRTVCd0MsT0FBT0MsT0FBUCxHQUFpQnhCLGFBQWpCIiwiZmlsZSI6InRleHR1cmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFZGdlID0gcmVxdWlyZSgnLi4vZWRnZScpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKCcuLi9mYWNldCcpLFxuICAgICAgTm9ybWFsID0gcmVxdWlyZSgnLi4vbm9ybWFsJyksXG4gICAgICBWZXJ0ZXggPSByZXF1aXJlKCcuLi92ZXJ0ZXgnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICBmYWNldFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9mYWNldCcpLFxuICAgICAgdGV4dHVyZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90ZXh0dXJlJyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXMsIGNhbGN1bGF0ZVZlcnRleFRleHR1cmVDb29yZGluYXRlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKGltYWdlSlNPTikge1xuICAgIGNvbnN0IGV4dGVudCA9IGltYWdlSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgeyBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGV4dGVudCxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICByZXR1cm4gdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlcyksXG4gICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlQ29vcmRpbmF0ZVR1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZSwgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dHVyZWRGYWNldDtcbiJdfQ==