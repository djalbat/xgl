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
    cloneTextureCoordinatesTuple = textureUtilities.cloneTextureCoordinatesTuple,
    calculateVertexTextureCoordinatesTuple = textureUtilities.calculateVertexTextureCoordinatesTuple,
    calculateAdjustedTextureCoordinatesTuple = textureUtilities.calculateAdjustedTextureCoordinatesTuple;

var TexturedFacet = function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple) {
    _classCallCheck(this, TexturedFacet);

    var _this = _possibleConstructorReturn(this, (TexturedFacet.__proto__ || Object.getPrototypeOf(TexturedFacet)).call(this, vertices, normal, edges));

    _this.imageName = imageName;

    _this.textureCoordinatesTuple = textureCoordinatesTuple;
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
          textureCoordinatesTuple = cloneTextureCoordinatesTuple(this.textureCoordinatesTuple),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);

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
      return this.textureCoordinatesTuple;
    }
  }, {
    key: 'getVertexTextureCoordinatesTuple',
    value: function getVertexTextureCoordinatesTuple(imageMapJSON) {
      var json = imageMapJSON[this.imageName],
          extent = json,
          left = extent.left,
          bottom = extent.bottom,
          width = extent.width,
          height = extent.height,
          vertexTextureCoordinatesTuple = calculateVertexTextureCoordinatesTuple(this.textureCoordinatesTuple, left, bottom, width, height);


      return vertexTextureCoordinatesTuple;
    }
  }, {
    key: 'permute',
    value: function permute(places) {
      _get(TexturedFacet.prototype.__proto__ || Object.getPrototypeOf(TexturedFacet.prototype), 'permute', this).call(this, places);

      this.textureCoordinatesTuple = _permute(this.textureCoordinatesTuple, places);
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var normal = calculateNormal(vertices, Normal),
          parentVertices = this.vertices,
          ///
      adjustedTextureCoordinatesTuple = calculateAdjustedTextureCoordinatesTuple(vertices, normal, parentVertices, this.textureCoordinatesTuple),
          edges = calculateEdges(vertices, Edge),
          imageName = this.imageName,
          textureCoordinatesTuple = adjustedTextureCoordinatesTuple,
          ///
      texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);

      return texturedFacet;
    }
  }], [{
    key: 'fromTextureCoordinateTupleCoordinatesTuplesIndexTupleAndImageName',
    value: function fromTextureCoordinateTupleCoordinatesTuplesIndexTupleAndImageName(textureCoordinatesTuple, coordinateTuples, indexTuple, imageName) {
      var vertices = verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinatesTuple);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwibmFtZXMiOlsiRWRnZSIsInJlcXVpcmUiLCJGYWNldCIsIk5vcm1hbCIsIlZlcnRleCIsImFycmF5VXRpbGl0aWVzIiwiZmFjZXRVdGlsaXRpZXMiLCJ0ZXh0dXJlVXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJwZXJtdXRlIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJjbG9uZUVkZ2VzIiwiY2xvbmVOb3JtYWwiLCJjbG9uZVZlcnRpY2VzIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlc1R1cGxlIiwiY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUiLCJjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlc1R1cGxlIiwiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VNYXBKU09OIiwiZXh0ZW50IiwianNvbiIsImxlZnQiLCJib3R0b20iLCJ3aWR0aCIsImhlaWdodCIsInZlcnRleFRleHR1cmVDb29yZGluYXRlc1R1cGxlIiwicGxhY2VzIiwicGFyZW50VmVydGljZXMiLCJhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlc1R1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFNBQVNGLFFBQVEsV0FB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SyxRQUFoQixFQUEwQmpCLE1BQTFCLENBQWY7QUFBQSxVQUNNbUMsaUJBQWlCLEtBQUtsQixRQUQ1QjtBQUFBLFVBQ3NDO0FBQ2hDbUIsd0NBQWtDckIseUNBQXlDRSxRQUF6QyxFQUFtREMsTUFBbkQsRUFBMkRpQixjQUEzRCxFQUEyRSxLQUFLZCx1QkFBaEYsQ0FGeEM7QUFBQSxVQUdNRixRQUFRUixlQUFlTSxRQUFmLEVBQXlCcEIsSUFBekIsQ0FIZDtBQUFBLFVBSU11QixZQUFZLEtBQUtBLFNBSnZCO0FBQUEsVUFLTUMsMEJBQTBCZSwrQkFMaEM7QUFBQSxVQUtrRTtBQUM1RFgsc0JBQWdCLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FOdEI7O0FBUUEsYUFBT0ksYUFBUDtBQUNEOzs7c0ZBRXdFSix1QixFQUF5QmdCLGdCLEVBQWtCQyxVLEVBQVlsQixTLEVBQVc7QUFDekksVUFBTUgsV0FBV1YsMENBQTBDOEIsZ0JBQTFDLEVBQTREQyxVQUE1RCxFQUF3RXJDLE1BQXhFLENBQWpCO0FBQUEsVUFDTWlCLFNBQVNOLGdCQUFnQkssUUFBaEIsRUFBMEJqQixNQUExQixDQURmO0FBQUEsVUFFTW1CLFFBQVFSLGVBQWVNLFFBQWYsRUFBeUJwQixJQUF6QixDQUZkO0FBQUEsVUFHTTRCLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxTQUEzQyxFQUFzREMsdUJBQXRELENBSHRCOztBQUtBLGFBQU9JLGFBQVA7QUFDRDs7OztFQW5FeUIxQixLOztBQXNFNUJ3QyxPQUFPQyxPQUFQLEdBQWlCeEIsYUFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyk7XG5cbmNvbnN0IHsgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlc1R1cGxlLCBjYWxjdWxhdGVWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSwgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlc1R1cGxlID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSh0aGlzLnRleHR1cmVDb29yZGluYXRlc1R1cGxlKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlc1R1cGxlO1xuICB9XG5cbiAgZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUgPSBjYWxjdWxhdGVWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSh0aGlzLnRleHR1cmVDb29yZGluYXRlc1R1cGxlLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlc1R1cGxlO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlc1R1cGxlID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlc1R1cGxlLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUodmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlc1R1cGxlID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSwgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZUNvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZXNUdXBsZSwgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzVHVwbGUpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19