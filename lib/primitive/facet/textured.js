"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _edge = _interopRequireDefault(require("../edge"));
var _facet = _interopRequireDefault(require("../facet"));
var _normal = _interopRequireDefault(require("../normal"));
var _vertex = _interopRequireDefault(require("../vertex"));
var _array = require("../../utilities/array");
var _approximate = require("../../utilities/approximate");
var _vertices = require("../../utilities/vertices");
var _facet1 = require("../../utilities/facet");
var _texture = require("../../utilities/texture");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var TexturedFacet = /*#__PURE__*/ function(Facet) {
    _inherits(TexturedFacet, Facet);
    function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
        _classCallCheck(this, TexturedFacet);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TexturedFacet).call(this, vertices, normal, edges));
        _this.imageName = imageName;
        _this.textureCoordinateTuples = textureCoordinateTuples;
        return _this;
    }
    _createClass(TexturedFacet, [
        {
            key: "getImageName",
            value: function getImageName() {
                return this.imageName;
            }
        },
        {
            key: "getTextureCoordinateTuples",
            value: function getTextureCoordinateTuples() {
                return this.textureCoordinateTuples;
            }
        },
        {
            key: "getMappedTextureCoordinateTuples",
            value: function getMappedTextureCoordinateTuples(imageMapJSON) {
                var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture).calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
                return mappedTextureCoordinateTuples;
            }
        },
        {
            key: "permute",
            value: function permute(places) {
                _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);
                this.textureCoordinateTuples = (0, _array).permute(this.textureCoordinateTuples, places);
            }
        },
        {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
                var texturedFacet = null;
                var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1).calculateNormal(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture).calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1).calculateEdges(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple; ///
                    texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                }
                return texturedFacet;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = (0, _facet1).cloneVertices(vertices);
                normal = (0, _facet1).cloneNormal(normal);
                edges = (0, _facet1).cloneEdges(edges);
                var imageName = this.imageName, textureCoordinateTuples = (0, _texture).cloneTextureCoordinateTuples(this.textureCoordinateTuples), texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                return texturedFacet;
            }
        }
    ], [
        {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
                var texturedFacet = null;
                var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                    texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                }
                return texturedFacet;
            }
        }
    ]);
    return TexturedFacet;
}(_facet.default);
exports.default = TexturedFacet;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0dXJlZEZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJlZGdlcyIsImltYWdlTmFtZSIsInRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0SW1hZ2VOYW1lIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImltYWdlTWFwSlNPTiIsImpzb24iLCJleHRlbnQiLCJtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInBlcm11dGUiLCJwbGFjZXMiLCJmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yIiwibWFyZ2luT2ZFcnJvciIsInRleHR1cmVkRmFjZXQiLCJhcmVhIiwiYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlIiwiY2xvbmUiLCJnZXRWZXJ0aWNlcyIsImdldE5vcm1hbCIsImdldEVkZ2VzIiwiZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvciIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ1IsR0FBVSxDQUFWLE1BQVU7QUFDVCxHQUFXLENBQVgsT0FBVztBQUNYLEdBQVcsQ0FBWCxPQUFXO0FBRU4sR0FBdUIsQ0FBdkIsTUFBdUI7QUFDSixHQUE2QixDQUE3QixZQUE2QjtBQUNkLEdBQTBCLENBQTFCLFNBQTBCO0FBQ21CLEdBQXVCLENBQXZCLE9BQXVCO0FBQ0MsR0FBeUIsQ0FBekIsUUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5JQSxhQUFhLGlCQUFuQixRQUFRO2NBQUZBLGFBQWE7YUFBYkEsYUFBYSxDQUNwQkMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyx1QkFBdUI7OEJBRHBETCxhQUFhOztpRUFBYkEsYUFBYSxhQUV4QkMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUs7Y0FFeEJDLFNBQVMsR0FBR0EsU0FBUztjQUVyQkMsdUJBQXVCLEdBQUdBLHVCQUF1Qjs7O2lCQU5yQ0wsYUFBYTs7WUFTaENNLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLEdBQUcsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVERyxHQUEwQixFQUExQkEsQ0FBMEI7bUJBQTFCQSxRQUFRLENBQVJBLDBCQUEwQixHQUFHLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUNGLHVCQUF1QjtZQUNyQyxDQUFDOzs7WUFFREcsR0FBZ0MsRUFBaENBLENBQWdDO21CQUFoQ0EsUUFBUSxDQUFSQSxnQ0FBZ0MsQ0FBQ0MsWUFBWSxFQUFFLENBQUM7Z0JBQzlDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHRCxZQUFZLENBQUMsSUFBSSxDQUFDTCxTQUFTLEdBQ2xDTyxNQUFNLEdBQUdELElBQUksRUFDYkUsNkJBQTZCLE9BdEJ3RixRQUF5Qix5Q0FzQnZFLElBQUksQ0FBQ1AsdUJBQXVCLEVBQUVNLE1BQU07Z0JBRWpILE1BQU0sQ0FBQ0MsNkJBQTZCO1lBQ3RDLENBQUM7OztZQUVEQyxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFDLENBQVJELE9BQU8sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7cUNBekJFZCxhQUFhLGFBMEJ4QmEsQ0FBTyxVQUFiLElBQUssYUFBU0MsTUFBTTtnQkFFcEIsSUFBSSxDQUFDVCx1QkFBdUIsT0FsQ1IsTUFBdUIsVUFrQ0osSUFBSSxDQUFDQSx1QkFBdUIsRUFBRVMsTUFBTTtZQUM3RSxDQUFDOzs7WUFFREMsR0FBNEIsRUFBNUJBLENBQTRCO21CQUE1QkEsUUFBUSxDQUFSQSw0QkFBNEIsQ0FBQ2QsUUFBUSxFQUFFZSxhQUFhLEVBQUUsQ0FBQztnQkFDckQsR0FBRyxDQUFDQyxhQUFhLEdBQUcsSUFBSTtnQkFFeEIsR0FBSyxDQUFDQyxJQUFJLE9BckN5RixPQUF1QixnQkFxQy9GakIsUUFBUSxHQUM3QmtCLDRCQUE0QixPQXhDSyxZQUE2Qiw2QkF3Q0pELElBQUksRUFBRUYsYUFBYTtnQkFFbkYsRUFBRSxHQUFHRyw0QkFBNEIsRUFBRSxDQUFDO29CQUNsQyxHQUFLLENBQUNqQixNQUFNLE9BekNxRixPQUF1QixrQkF5Q3pGRCxRQUFRLEVBL0MxQixPQUFXLFdBZ0RsQm1CLGNBQWMsR0FBRyxJQUFJLENBQUNuQixRQUFRLEVBQzlCb0IsOEJBQThCLE9BMUNxRixRQUF5QiwyQ0EwQ2xFcEIsUUFBUSxFQUFFQyxNQUFNLEVBQUVrQixjQUFjLEVBQUUsSUFBSSxDQUFDZix1QkFBdUIsR0FDeElGLEtBQUssT0E1Q3NGLE9BQXVCLGlCQTRDM0ZGLFFBQVEsRUFwRDFCLEtBQVMsV0FxRGRHLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsRUFDMUJDLHVCQUF1QixHQUFHZ0IsOEJBQThCLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUVwRUosYUFBYSxHQUFHLEdBQUcsQ0FBQ2pCLGFBQWEsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyx1QkFBdUI7Z0JBQy9GLENBQUM7Z0JBRUQsTUFBTSxDQUFDWSxhQUFhO1lBQ3RCLENBQUM7OztZQUVESyxHQUFLLEVBQUxBLENBQUs7bUJBQUxBLFFBQVEsQ0FBUkEsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBRyxDQUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQ3NCLFdBQVcsSUFDM0JyQixNQUFNLEdBQUcsSUFBSSxDQUFDc0IsU0FBUyxJQUN2QnJCLEtBQUssR0FBRyxJQUFJLENBQUNzQixRQUFRO2dCQUV6QnhCLFFBQVEsT0EzRDJGLE9BQXVCLGdCQTJEakdBLFFBQVE7Z0JBQ2pDQyxNQUFNLE9BNUQ2RixPQUF1QixjQTREckdBLE1BQU07Z0JBQzNCQyxLQUFLLE9BN0Q4RixPQUF1QixhQTZEdkdBLEtBQUs7Z0JBRXhCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUyxFQUMxQkMsdUJBQXVCLE9BL0Q4RixRQUF5QiwrQkErRHZGLElBQUksQ0FBQ0EsdUJBQXVCLEdBQ25GWSxhQUFhLEdBQUcsR0FBRyxDQUFDakIsYUFBYSxDQUFDQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLHVCQUF1QjtnQkFFbkcsTUFBTSxDQUFDWSxhQUFhO1lBQ3RCLENBQUM7Ozs7WUFFTVMsR0FBK0UsRUFBL0VBLENBQStFO21CQUF0RixRQUFRLENBQURBLCtFQUErRSxDQUFDckIsdUJBQXVCLEVBQUVzQixnQkFBZ0IsRUFBRUMsVUFBVSxFQUFFeEIsU0FBUyxFQUFFWSxhQUFhLEVBQUUsQ0FBQztnQkFDdkssR0FBRyxDQUFDQyxhQUFhLEdBQUcsSUFBSTtnQkFFeEIsR0FBSyxDQUFDaEIsUUFBUSxPQTFFd0MsU0FBMEIsNENBMEVyQjBCLGdCQUFnQixFQUFFQyxVQUFVLEVBOUV4RSxPQUFXLFdBK0VwQlYsSUFBSSxPQTFFeUYsT0FBdUIsZ0JBMEUvRmpCLFFBQVEsR0FDN0JrQiw0QkFBNEIsT0E3RUssWUFBNkIsNkJBNkVKRCxJQUFJLEVBQUVGLGFBQWE7Z0JBRW5GLEVBQUUsR0FBR0csNEJBQTRCLEVBQUUsQ0FBQztvQkFDbEMsR0FBSyxDQUFDakIsTUFBTSxPQTlFcUYsT0FBdUIsa0JBOEV6RkQsUUFBUSxFQXBGMUIsT0FBVyxXQXFGbEJFLEtBQUssT0EvRXNGLE9BQXVCLGlCQStFM0ZGLFFBQVEsRUF2RjFCLEtBQVM7b0JBeUZwQmdCLGFBQWEsR0FBRyxHQUFHLENBQUNqQixhQUFhLENBQUNDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsdUJBQXVCO2dCQUMvRixDQUFDO2dCQUVELE1BQU0sQ0FBQ1ksYUFBYTtZQUN0QixDQUFDOzs7V0FsRmtCakIsYUFBYTtFQVZoQixNQUFVO2tCQVVQQSxhQUFhIn0=