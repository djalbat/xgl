"use strict";

var _edge = _interopRequireDefault(require("../edge"));

var _facet = _interopRequireDefault(require("../facet"));

var _normal = _interopRequireDefault(require("../normal"));

var _vertex = _interopRequireDefault(require("../vertex"));

var _array = require("../../utilities/array");

var _approximate = require("../../utilities/approximate");

var _vertices = require("../../utilities/vertices");

var _facet2 = require("../../utilities/facet");

var _texture = require("../../utilities/texture");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TexturedFacet = /*#__PURE__*/function (_Facet) {
  _inherits(TexturedFacet, _Facet);

  var _super = _createSuper(TexturedFacet);

  function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
    var _this;

    _classCallCheck(this, TexturedFacet);

    _this = _super.call(this, vertices, normal, edges);
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
      vertices = (0, _facet2.cloneVertices)(vertices);
      normal = (0, _facet2.cloneNormal)(normal);
      edges = (0, _facet2.cloneEdges)(edges);
      var imageName = this.imageName,
          ///
      textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples),
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
      mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
      return mappedTextureCoordinateTuples;
    }
  }, {
    key: "permute",
    value: function permute(places) {
      _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);

      this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
    }
  }, {
    key: "fromVertices",
    value: function fromVertices(vertices) {
      var texturedFacet = null;
      var area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            parentVertices = this.vertices,
            ///
        adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]),
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
      var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex["default"]),
          area = (0, _facet2.calculateArea)(vertices),
          areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area),
          largeEnough = !areaApproximatelyEqualToZero; ///

      if (largeEnough) {
        var normal = (0, _facet2.calculateNormal)(vertices, _normal["default"]),
            edges = (0, _facet2.calculateEdges)(vertices, _edge["default"]);
        texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
      }

      return texturedFacet;
    }
  }]);

  return TexturedFacet;
}(_facet["default"]);

module.exports = TexturedFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVkLmpzIl0sIm5hbWVzIjpbIlRleHR1cmVkRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsImVkZ2VzIiwiaW1hZ2VOYW1lIiwidGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwidGV4dHVyZWRGYWNldCIsImltYWdlTWFwSlNPTiIsImpzb24iLCJleHRlbnQiLCJtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInBsYWNlcyIsImFyZWEiLCJhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvIiwibGFyZ2VFbm91Z2giLCJOb3JtYWwiLCJwYXJlbnRWZXJ0aWNlcyIsImFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSIsIkVkZ2UiLCJjb29yZGluYXRlVHVwbGVzIiwiaW5kZXhUdXBsZSIsIlZlcnRleCIsIkZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxhOzs7OztBQUNKLHlCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUNDLFNBQXJDLEVBQWdEQyx1QkFBaEQsRUFBeUU7QUFBQTs7QUFBQTs7QUFDdkUsOEJBQU1KLFFBQU4sRUFBZ0JDLE1BQWhCLEVBQXdCQyxLQUF4QjtBQUVBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBRUEsVUFBS0MsdUJBQUwsR0FBK0JBLHVCQUEvQjtBQUx1RTtBQU14RTs7Ozs0QkFFTztBQUNOLFVBQUlKLFFBQVEsR0FBRyxLQUFLSyxXQUFMLEVBQWY7QUFBQSxVQUNJSixNQUFNLEdBQUcsS0FBS0ssU0FBTCxFQURiO0FBQUEsVUFFSUosS0FBSyxHQUFHLEtBQUtLLFFBQUwsRUFGWjtBQUlBUCxNQUFBQSxRQUFRLEdBQUcsMkJBQWNBLFFBQWQsQ0FBWDtBQUNBQyxNQUFBQSxNQUFNLEdBQUcseUJBQVlBLE1BQVosQ0FBVDtBQUNBQyxNQUFBQSxLQUFLLEdBQUcsd0JBQVdBLEtBQVgsQ0FBUjtBQUVBLFVBQU1DLFNBQVMsR0FBRyxLQUFLQSxTQUF2QjtBQUFBLFVBQWtDO0FBQzVCQyxNQUFBQSx1QkFBdUIsR0FBRywyQ0FBNkIsS0FBS0EsdUJBQWxDLENBRGhDO0FBQUEsVUFFTUksYUFBYSxHQUFHLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FGdEI7QUFJQSxhQUFPSSxhQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLGFBQU8sS0FBS0wsU0FBWjtBQUNEOzs7aURBRTRCO0FBQzNCLGFBQU8sS0FBS0MsdUJBQVo7QUFDRDs7O3FEQUVnQ0ssWSxFQUFjO0FBQzdDLFVBQU1DLElBQUksR0FBR0QsWUFBWSxDQUFDLEtBQUtOLFNBQU4sQ0FBekI7QUFBQSxVQUNNUSxNQUFNLEdBQUdELElBRGY7QUFBQSxVQUNzQjtBQUNoQkUsTUFBQUEsNkJBQTZCLEdBQUcscURBQXVDLEtBQUtSLHVCQUE1QyxFQUFxRU8sTUFBckUsQ0FGdEM7QUFJQSxhQUFPQyw2QkFBUDtBQUNEOzs7NEJBRU9DLE0sRUFBUTtBQUNkLGlGQUFjQSxNQUFkOztBQUVBLFdBQUtULHVCQUFMLEdBQStCLG9CQUFRLEtBQUtBLHVCQUFiLEVBQXNDUyxNQUF0QyxDQUEvQjtBQUNEOzs7aUNBRVliLFEsRUFBVTtBQUNyQixVQUFJUSxhQUFhLEdBQUcsSUFBcEI7QUFFQSxVQUFNTSxJQUFJLEdBQUcsMkJBQWNkLFFBQWQsQ0FBYjtBQUFBLFVBQ01lLDRCQUE0QixHQUFHLDZDQUEyQkQsSUFBM0IsQ0FEckM7QUFBQSxVQUVNRSxXQUFXLEdBQUcsQ0FBQ0QsNEJBRnJCLENBSHFCLENBSytCOztBQUVwRCxVQUFJQyxXQUFKLEVBQWlCO0FBQ2YsWUFBTWYsTUFBTSxHQUFHLDZCQUFnQkQsUUFBaEIsRUFBMEJpQixrQkFBMUIsQ0FBZjtBQUFBLFlBQ01DLGNBQWMsR0FBRyxLQUFLbEIsUUFENUI7QUFBQSxZQUNzQztBQUNoQ21CLFFBQUFBLDhCQUE4QixHQUFHLHVEQUF5Q25CLFFBQXpDLEVBQW1EQyxNQUFuRCxFQUEyRGlCLGNBQTNELEVBQTJFLEtBQUtkLHVCQUFoRixDQUZ2QztBQUFBLFlBR01GLEtBQUssR0FBRyw0QkFBZUYsUUFBZixFQUF5Qm9CLGdCQUF6QixDQUhkO0FBQUEsWUFJTWpCLFNBQVMsR0FBRyxLQUFLQSxTQUp2QjtBQUFBLFlBS01DLHVCQUF1QixHQUFHZSw4QkFMaEMsQ0FEZSxDQU1rRDs7QUFFakVYLFFBQUFBLGFBQWEsR0FBRyxJQUFJVCxhQUFKLENBQWtCQyxRQUFsQixFQUE0QkMsTUFBNUIsRUFBb0NDLEtBQXBDLEVBQTJDQyxTQUEzQyxFQUFzREMsdUJBQXRELENBQWhCO0FBQ0Q7O0FBRUQsYUFBT0ksYUFBUDtBQUNEOzs7dUZBRXlFSix1QixFQUF5QmlCLGdCLEVBQWtCQyxVLEVBQVluQixTLEVBQVc7QUFDMUksVUFBSUssYUFBYSxHQUFHLElBQXBCO0FBRUEsVUFBTVIsUUFBUSxHQUFHLHlEQUEwQ3FCLGdCQUExQyxFQUE0REMsVUFBNUQsRUFBd0VDLGtCQUF4RSxDQUFqQjtBQUFBLFVBQ01ULElBQUksR0FBRywyQkFBY2QsUUFBZCxDQURiO0FBQUEsVUFFTWUsNEJBQTRCLEdBQUcsNkNBQTJCRCxJQUEzQixDQUZyQztBQUFBLFVBR01FLFdBQVcsR0FBRyxDQUFDRCw0QkFIckIsQ0FIMEksQ0FNdEY7O0FBRXBELFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNZixNQUFNLEdBQUcsNkJBQWdCRCxRQUFoQixFQUEwQmlCLGtCQUExQixDQUFmO0FBQUEsWUFDTWYsS0FBSyxHQUFHLDRCQUFlRixRQUFmLEVBQXlCb0IsZ0JBQXpCLENBRGQ7QUFHQVosUUFBQUEsYUFBYSxHQUFHLElBQUlULGFBQUosQ0FBa0JDLFFBQWxCLEVBQTRCQyxNQUE1QixFQUFvQ0MsS0FBcEMsRUFBMkNDLFNBQTNDLEVBQXNEQyx1QkFBdEQsQ0FBaEI7QUFDRDs7QUFFRCxhQUFPSSxhQUFQO0FBQ0Q7Ozs7RUFwRnlCZ0IsaUI7O0FBdUY1QkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCM0IsYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5jbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUFuZEltYWdlTmFtZSh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZShjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBWZXJ0ZXgpLFxuICAgICAgICAgIGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHR1cmVkRmFjZXQ7XG4iXX0=