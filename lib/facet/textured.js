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
    verticesUtilities = require('../utilities/vertices'),
    imageMapUtilities = require('../utilities/imageMap');

var _permute = arrayUtilities.permute,
    getImageDetails = imageMapUtilities.getImageDetails,
    verticesFromVertexCoordinatesAndIndexes = verticesUtilities.verticesFromVertexCoordinatesAndIndexes,
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
    value: function getVertexTextureCoordinates() {
      var imageDetails = getImageDetails(this.imageName),
          left = imageDetails.left,
          bottom = imageDetails.bottom,
          width = imageDetails.width,
          height = imageDetails.height,
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
    key: 'fromVertexCoordinatesImageNameAndTextureCoordinates',
    value: function fromVertexCoordinatesImageNameAndTextureCoordinates(vertexCoordinates, indexes, imageName, textureCoordinates) {
      var vertices = verticesFromVertexCoordinatesAndIndexes(vertexCoordinates, indexes, Vertex),
          normal = calculateNormal(vertices, Normal),
          edges = calculateEdges(vertices, Edge),
          texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinates);

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(Facet);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC90ZXh0dXJlZC5qcyJdLCJuYW1lcyI6WyJFZGdlIiwicmVxdWlyZSIsIkZhY2V0IiwiTm9ybWFsIiwiVmVydGV4IiwiYXJyYXlVdGlsaXRpZXMiLCJmYWNldFV0aWxpdGllcyIsInRleHR1cmVVdGlsaXRpZXMiLCJ2ZXJ0aWNlc1V0aWxpdGllcyIsImltYWdlTWFwVXRpbGl0aWVzIiwicGVybXV0ZSIsImdldEltYWdlRGV0YWlscyIsInZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVFZGdlcyIsImNhbGN1bGF0ZU5vcm1hbCIsImNsb25lVGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwiY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMiLCJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwibGVmdCIsImltYWdlRGV0YWlscyIsImJvdHRvbSIsIndpZHRoIiwiaGVpZ2h0IiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzIiwicGxhY2VzIiwicGFyZW50VmVydGljZXMiLCJhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyIsInZlcnRleENvb3JkaW5hdGVzIiwiaW5kZXhlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01DLFFBQVFELFFBQVEsVUFBUixDQURkO0FBQUEsSUFFTUUsU0FBU0YsUUFBUSxXQUFSLENBRmY7QUFBQSxJQUdNRyxTQUFTSCxRQUFRLFdBQVIsQ0FIZjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxvQkFBUixDQUp2QjtBQUFBLElBS01LLGlCQUFpQkwsUUFBUSxvQkFBUixDQUx2QjtBQUFBLElBTU1NLG1CQUFtQk4sUUFBUSxzQkFBUixDQU56QjtBQUFBLElBT01PLG9CQUFvQlAsUUFBUSx1QkFBUixDQVAxQjtBQUFBLElBUU1RLG9CQUFvQlIsUUFBUSx1QkFBUixDQVIxQjs7QUFVTSxJQUFFUyxRQUFGLEdBQWNMLGNBQWQsQ0FBRUssT0FBRjtBQUFBLElBQ0VDLGVBREYsR0FDc0JGLGlCQUR0QixDQUNFRSxlQURGO0FBQUEsSUFFRUMsdUNBRkYsR0FFOENKLGlCQUY5QyxDQUVFSSx1Q0FGRjtBQUFBLElBR0VDLFVBSEYsR0FHOEVQLGNBSDlFLENBR0VPLFVBSEY7QUFBQSxJQUdjQyxXQUhkLEdBRzhFUixjQUg5RSxDQUdjUSxXQUhkO0FBQUEsSUFHMkJDLGFBSDNCLEdBRzhFVCxjQUg5RSxDQUcyQlMsYUFIM0I7QUFBQSxJQUcwQ0MsY0FIMUMsR0FHOEVWLGNBSDlFLENBRzBDVSxjQUgxQztBQUFBLElBRzBEQyxlQUgxRCxHQUc4RVgsY0FIOUUsQ0FHMERXLGVBSDFEO0FBQUEsSUFJRUMsdUJBSkYsR0FJc0dYLGdCQUp0RyxDQUlFVyx1QkFKRjtBQUFBLElBSTJCQyxpQ0FKM0IsR0FJc0daLGdCQUp0RyxDQUkyQlksaUNBSjNCO0FBQUEsSUFJOERDLG1DQUo5RCxHQUlzR2IsZ0JBSnRHLENBSThEYSxtQ0FKOUQ7O0lBTUFDLGE7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLFNBQXJDLEVBQWdEQyxrQkFBaEQsRUFBb0U7QUFBQTs7QUFBQSw4SEFDNURKLFFBRDRELEVBQ2xEQyxNQURrRCxFQUMxQ0MsS0FEMEM7O0FBR2xFLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQUprRTtBQUtuRTs7Ozs0QkFFTztBQUNOLFVBQUlKLFdBQVcsS0FBS0ssV0FBTCxFQUFmO0FBQUEsVUFDSUosU0FBUyxLQUFLSyxTQUFMLEVBRGI7QUFBQSxVQUVJSixRQUFRLEtBQUtLLFFBQUwsRUFGWjs7QUFJQVAsaUJBQVdQLGNBQWNPLFFBQWQsQ0FBWDtBQUNBQyxlQUFTVCxZQUFZUyxNQUFaLENBQVQ7QUFDQUMsY0FBUVgsV0FBV1csS0FBWCxDQUFSOztBQUVBLFVBQU1DLFlBQVksS0FBS0EsU0FBdkI7QUFBQSxVQUNNQyxxQkFBcUJSLHdCQUF3QixLQUFLUSxrQkFBN0IsQ0FEM0I7QUFBQSxVQUVNSSxnQkFBZ0IsSUFBSVQsYUFBSixDQUFrQkMsUUFBbEIsRUFBNEJDLE1BQTVCLEVBQW9DQyxLQUFwQyxFQUEyQ0MsU0FBM0MsRUFBc0RDLGtCQUF0RCxDQUZ0Qjs7QUFJQSxhQUFPSSxhQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0wsU0FBWjtBQUNEOzs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Msa0JBQVo7QUFDRDs7O2tEQUU2QjtBQUN0Qix5QkFBZWYsZ0JBQWdCLEtBQUtjLFNBQXJCLENBQWY7QUFBQSxVQUNFTSxJQURGLEdBQ2tDQyxZQURsQyxDQUNFRCxJQURGO0FBQUEsVUFDUUUsTUFEUixHQUNrQ0QsWUFEbEMsQ0FDUUMsTUFEUjtBQUFBLFVBQ2dCQyxLQURoQixHQUNrQ0YsWUFEbEMsQ0FDZ0JFLEtBRGhCO0FBQUEsVUFDdUJDLE1BRHZCLEdBQ2tDSCxZQURsQyxDQUN1QkcsTUFEdkI7QUFBQSxVQUVBQyx3QkFGQSxHQUUyQmpCLGtDQUFrQyxLQUFLTyxrQkFBdkMsRUFBMkRLLElBQTNELEVBQWlFRSxNQUFqRSxFQUF5RUMsS0FBekUsRUFBZ0ZDLE1BQWhGLENBRjNCOzs7QUFJTixhQUFPQyx3QkFBUDtBQUNEOzs7NEJBRU9DLE0sRUFBUTtBQUNkLDRIQUFjQSxNQUFkOztBQUVBLFdBQUtYLGtCQUFMLEdBQTBCaEIsU0FBUSxLQUFLZ0Isa0JBQWIsRUFBaUNXLE1BQWpDLENBQTFCO0FBQ0Q7OztpQ0FFWWYsUSxFQUFVO0FBQ3JCLFVBQU1DLFNBQVNOLGdCQUFnQkssUUFBaEIsRUFBMEJuQixNQUExQixDQUFmO0FBQUEsVUFDTW1DLGlCQUFpQixLQUFLaEIsUUFENUI7QUFBQSxVQUNzQztBQUNoQ2lCLG1DQUE2Qm5CLG9DQUFvQ0UsUUFBcEMsRUFBOENDLE1BQTlDLEVBQXNEZSxjQUF0RCxFQUFzRSxLQUFLWixrQkFBM0UsQ0FGbkM7QUFBQSxVQUdNRixRQUFRUixlQUFlTSxRQUFmLEVBQXlCdEIsSUFBekIsQ0FIZDtBQUFBLFVBSU15QixZQUFZLEtBQUtBLFNBSnZCO0FBQUEsVUFLTUMscUJBQXFCYSwwQkFMM0I7QUFBQSxVQUt3RDtBQUNsRFQsc0JBQWdCLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyxrQkFBdEQsQ0FOdEI7O0FBUUEsYUFBT0ksYUFBUDtBQUNEOzs7d0VBRTBEVSxpQixFQUFtQkMsTyxFQUFTaEIsUyxFQUFXQyxrQixFQUFvQjtBQUNwSCxVQUFNSixXQUFXVix3Q0FBd0M0QixpQkFBeEMsRUFBMkRDLE9BQTNELEVBQW9FckMsTUFBcEUsQ0FBakI7QUFBQSxVQUNNbUIsU0FBU04sZ0JBQWdCSyxRQUFoQixFQUEwQm5CLE1BQTFCLENBRGY7QUFBQSxVQUVNcUIsUUFBUVIsZUFBZU0sUUFBZixFQUF5QnRCLElBQXpCLENBRmQ7QUFBQSxVQUdNOEIsZ0JBQWdCLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyxrQkFBdEQsQ0FIdEI7O0FBS0EsYUFBT0ksYUFBUDtBQUNEOzs7O0VBakV5QjVCLEs7O0FBb0U1QndDLE9BQU9DLE9BQVAsR0FBaUJ0QixhQUFqQiIsImZpbGUiOiJ0ZXh0dXJlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoJy4uL2VkZ2UnKSxcbiAgICAgIEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIE5vcm1hbCA9IHJlcXVpcmUoJy4uL25vcm1hbCcpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZSgnLi4vdmVydGV4JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgZmFjZXRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZmFjZXQnKSxcbiAgICAgIHRleHR1cmVVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdGV4dHVyZScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvdmVydGljZXMnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGdldEltYWdlRGV0YWlscyB9ID0gaW1hZ2VNYXBVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbVZlcnRleENvb3JkaW5hdGVzQW5kSW5kZXhlcyB9ID0gdmVydGljZXNVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gPSBmYWNldFV0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXMsIGNhbGN1bGF0ZVZlcnRleFRleHR1cmVDb29yZGluYXRlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMgfSA9IHRleHR1cmVVdGlsaXRpZXM7XG5cbmNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzID0gdGV4dHVyZUNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIGdldFZlcnRleFRleHR1cmVDb29yZGluYXRlcygpIHtcbiAgICBjb25zdCBpbWFnZURldGFpbHMgPSBnZXRJbWFnZURldGFpbHModGhpcy5pbWFnZU5hbWUpLFxuICAgICAgICAgIHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZURldGFpbHMsXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzID0gY2FsY3VsYXRlVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBsZWZ0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgcmV0dXJuIHZlcnRleFRleHR1cmVDb29yZGluYXRlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVydGV4Q29vcmRpbmF0ZXNJbWFnZU5hbWVBbmRUZXh0dXJlQ29vcmRpbmF0ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21WZXJ0ZXhDb29yZGluYXRlc0FuZEluZGV4ZXModmVydGV4Q29vcmRpbmF0ZXMsIGluZGV4ZXMsIFZlcnRleCksXG4gICAgICAgICAgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19