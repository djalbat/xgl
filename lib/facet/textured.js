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
    arrayUtilities = require('../utilities/array'),
    facetUtilities = require('../utilities/facet'),
    textureUtilities = require('../utilities/texture'),
    verticesUtilities = require('../utilities/vertices');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiYXJyYXlVdGlsaXRpZXMiLCJmYWNldFV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsInBlcm11dGUiLCJ2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsImNsb25lVGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VKU09OIiwibGVmdCIsImV4dGVudCIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwicGxhY2VzIiwicGFyZW50VmVydGljZXMiLCJhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyIsInRleHR1cmVDb29yZGluYXRlVHVwbGUiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFFBQVFELFFBQVEsVUFBUixDQURkO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxXQUFSLENBRmY7QUFBQSxJQUdNRyxTQUFTSCxRQUFR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NUI7QUFBQSxVQUNzQztBQUNoQ2tCLG1DQUE2QnBCLG9DQUFvQ0UsUUFBcEMsRUFBOENDLE1BQTlDLEVBQXNEZ0IsY0FBdEQsRUFBc0UsS0FBS2Isa0JBQTNFLENBRm5DO0FBQUEsVUFHTUYsUUFBUVIsZUFBZU0sUUFBZixFQUF5QnBCLElBQXpCLENBSGQ7QUFBQSxVQUlNdUIsWUFBWSxLQUFLQSxTQUp2QjtBQUFBLFVBS01DLHFCQUFxQmMsMEJBTDNCO0FBQUEsVUFLd0Q7QUFDbERWLHNCQUFnQixJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxTQUEzQyxFQUFzREMsa0JBQXRELENBTnRCOztBQVFBLGFBQU9JLGFBQVA7QUFDRDs7O3FGQUV1RVcsc0IsRUFBd0JDLGdCLEVBQWtCQyxVLEVBQVlsQixTLEVBQVc7QUFDdkksVUFBTUgsV0FBV1YsMENBQTBDOEIsZ0JBQTFDLEVBQTREQyxVQUE1RCxFQUF3RXJDLE1BQXhFLENBQWpCO0FBQUEsVUFDTWlCLFNBQVNOLGdCQUFnQkssUUFBaEIsRUFBMEJqQixNQUExQixDQURmO0FBQUEsVUFFTW1CLFFBQVFSLGVBQWVNLFFBQWYsRUFBeUJwQixJQUF6QixDQUZkO0FBQUEsVUFHTTRCLGdCQUFnQixJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxTQUEzQyxFQUFzREMsa0JBQXRELENBSHRCOztBQUtBLGFBQU9JLGFBQVA7QUFDRDs7OztFQWxFeUIxQixLOztBQXFFNUJ3QyxPQUFPQyxPQUFQLEdBQWlCeEIsYUFBakIiLCJmaWxlIjoidGV4dHVyZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyk7XG5cbmNvbnN0IHsgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlcywgY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlcyA9IHRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXMoaW1hZ2VKU09OKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gaW1hZ2VKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICB7IGxlZnQsIGJvdHRvbSwgd2lkdGgsIGhlaWdodCB9ID0gZXh0ZW50LFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlcyA9IGNhbGN1bGF0ZVZlcnRleFRleHR1cmVDb29yZGluYXRlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlcywgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIHJldHVybiB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzKSxcbiAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcywgIC8vL1xuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVDb29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUpIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19