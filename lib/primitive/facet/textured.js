'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVkLmpzIl0sIm5hbWVzIjpbIkVkZ2UiLCJyZXF1aXJlIiwiRmFjZXQiLCJOb3JtYWwiLCJWZXJ0ZXgiLCJhcnJheVV0aWxpdGllcyIsImZhY2V0VXRpbGl0aWVzIiwidGV4dHVyZVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwiYXBwcm94aW1hdGVVdGlsaXRpZXMiLCJwZXJtdXRlIiwiaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJ2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSIsImNsb25lRWRnZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lVmVydGljZXMiLCJjYWxjdWxhdGVBcmVhIiwiY2FsY3VsYXRlRWRnZXMiLCJjYWxjdWxhdGVOb3JtYWwiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFZlcnRpY2VzIiwiZ2V0Tm9ybWFsIiwiZ2V0RWRnZXMiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VNYXBKU09OIiwianNvbiIsImV4dGVudCIsIm1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwicGxhY2VzIiwiYXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJsYXJnZUVub3VnaCIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlIiwiY29vcmRpbmF0ZVR1cGxlcyIsImluZGV4VHVwbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFH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R0FBRyxJQUFwQjtBQUVBLFVBQU1SLFFBQVEsR0FBR1gseUNBQXlDLENBQUM4QixnQkFBRCxFQUFtQkMsVUFBbkIsRUFBK0J2QyxNQUEvQixDQUExRDtBQUFBLFVBQ01pQyxJQUFJLEdBQUdyQixhQUFhLENBQUNPLFFBQUQsQ0FEMUI7QUFBQSxVQUVNZSw0QkFBNEIsR0FBRzNCLDBCQUEwQixDQUFDMEIsSUFBRCxDQUYvRDtBQUFBLFVBR01FLFdBQVcsR0FBRyxDQUFDRCw0QkFIckIsQ0FIMEksQ0FNdEY7O0FBRXBELFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNZixNQUFNLEdBQUdOLGVBQWUsQ0FBQ0ssUUFBRCxFQUFXcEIsTUFBWCxDQUE5QjtBQUFBLFlBQ01zQixLQUFLLEdBQUdSLGNBQWMsQ0FBQ00sUUFBRCxFQUFXdkIsSUFBWCxDQUQ1QjtBQUdBK0IsUUFBQUEsYUFBYSxHQUFHLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFwRnlCN0IsSzs7QUF1RjVCMEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdkIsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVkZ2UgPSByZXF1aXJlKCcuLi9lZGdlJyksXG4gICAgICBGYWNldCA9IHJlcXVpcmUoJy4uL2ZhY2V0JyksXG4gICAgICBOb3JtYWwgPSByZXF1aXJlKCcuLi9ub3JtYWwnKSxcbiAgICAgIFZlcnRleCA9IHJlcXVpcmUoJy4uL3ZlcnRleCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIGZhY2V0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL2ZhY2V0JyksXG4gICAgICB0ZXh0dXJlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3RleHR1cmUnKSxcbiAgICAgIHZlcnRpY2VzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzJyksXG4gICAgICBhcHByb3hpbWF0ZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZScpO1xuXG5jb25zdCB7IHBlcm11dGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9ID0gYXBwcm94aW1hdGVVdGlsaXRpZXMsXG4gICAgICB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSA9IGZhY2V0VXRpbGl0aWVzLFxuICAgICAgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9ID0gdGV4dHVyZVV0aWxpdGllcztcblxuY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0dXJlZEZhY2V0O1xuIl19