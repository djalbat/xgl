"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Edge = require("../edge"),
    Facet = require("../facet"),
    Normal = require("../normal"),
    Vertex = require("../vertex"),
    arrayUtilities = require("../../utilities/array"),
    facetUtilities = require("../../utilities/facet"),
    textureUtilities = require("../../utilities/texture"),
    verticesUtilities = require("../../utilities/vertices"),
    approximateUtilities = require("../../utilities/approximate");

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

var TexturedFacet = /*#__PURE__*/function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    var _this;

    _classCallCheck(this, TexturedFacet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedFacet).call(this, vertices, normal, edges));
    _this.imageName = imageName;
    _this.textureCoordinateTuples = textureCoordinateTuples;
    return _this;
  }

  _createClass(TexturedFacet, [{
    key: "clone",
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
    key: "getImageName",
    value: function getImageName() {
      return this.imageName;
    }
  }, {
    key: "getTextureCoordinateTuples",
    value: function getTextureCoordinateTuples() {
      return this.textureCoordinateTuples;
    }
  }, {
    key: "getMappedTextureCoordinateTuples",
    value: function getMappedTextureCoordinateTuples(imageMapJSON) {
      var json = imageMapJSON[this.imageName],
          extent = json,
          ///
      mappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
      return mappedTextureCoordinateTuples;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);

      this.textureCoordinateTuples = _permute(this.textureCoordinateTuples, places);
    }
  }, {
    key: "fromVertices",
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
    key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVkLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwiRmFjZXQiLCJOb3JtYWwiLCJWZXJ0ZXgiLCJhcnJheVV0aWxpdGllcyIsImZhY2V0VXRpbGl0aWVzIiwidGV4dHVyZVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJwZXJtdXRlIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJ2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVBcmVhIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VNYXBKU09OIiwianNvbiIsImV4dGVudCIsIm1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwicGxhY2VzIiwiYXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJsYXJnZUVub3VnaCIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFH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R0FBRyxJQUFwQjtBQUVBLFVBQU1SLFFBQVEsR0FBR1gseUNBQXlDLENBQUM4QixnQkFBRCxFQUFtQkMsVUFBbkIsRUFBK0J2QyxNQUEvQixDQUExRDtBQUFBLFVBQ01pQyxJQUFJLEdBQUdyQixhQUFhLENBQUNPLFFBQUQsQ0FEMUI7QUFBQSxVQUVNZSw0QkFBNEIsR0FBRzNCLDBCQUEwQixDQUFDMEIsSUFBRCxDQUYvRDtBQUFBLFVBR01FLFdBQVcsR0FBRyxDQUFDRCw0QkFIckIsQ0FIMEksQ0FNdEY7O0FBRXBELFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNZixNQUFNLEdBQUdOLGVBQWUsQ0FBQ0ssUUFBRCxFQUFXcEIsTUFBWCxDQUE5QjtBQUFBLFlBQ01zQixLQUFLLEdBQUdSLGNBQWMsQ0FBQ00sUUFBRCxFQUFXdkIsSUFBWCxDQUQ1QjtBQUdBK0IsUUFBQUEsYUFBYSxHQUFHLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFwRnlCN0IsSzs7QUF1RjVCMEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgRWRnZSA9IHJlcXVpcmUoXCIuLi9lZGdlXCIpLFxuICAgICAgRmFjZXQgPSByZXF1aXJlKFwiLi4vZmFjZXRcIiksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKFwiLi4vbm9ybWFsXCIpLFxuICAgICAgVmVydGV4ID0gcmVxdWlyZShcIi4uL3ZlcnRleFwiKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiKSxcbiAgICAgIHRleHR1cmVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIiksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIiksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIik7XG5cbmNvbnN0IHsgcGVybXV0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIH0gPSBhcHByb3hpbWF0ZVV0aWxpdGllcyxcbiAgICAgIHsgdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUgfSA9IHZlcnRpY2VzVXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9ID0gZmFjZXRVdGlsaXRpZXMsXG4gICAgICB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gPSB0ZXh0dXJlVXRpbGl0aWVzO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkRmFjZXQ7XG4iXX0=