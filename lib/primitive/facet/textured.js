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
            key: "fromVertices",
            value: function fromVertices(vertices) {
                var texturedFacet = null;
                var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
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
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMagnification",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMagnification(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, magnification) {
                var texturedFacet = null;
                var vertices = (0, _vertices).verticesFromCoordinateTuplesIndexTupleAndMagnification(coordinateTuples, indexTuple, magnification, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
                if (largeEnough) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZE1hZ25pZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBjbG9uZUVkZ2VzLCBjbG9uZU5vcm1hbCwgY2xvbmVWZXJ0aWNlcywgY2FsY3VsYXRlQXJlYSwgY2FsY3VsYXRlRWRnZXMsIGNhbGN1bGF0ZU5vcm1hbCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZmFjZXRcIjtcbmltcG9ydCB7IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90ZXh0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVkRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gICAgc3VwZXIodmVydGljZXMsIG5vcm1hbCwgZWRnZXMpO1xuXG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRJbWFnZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VOYW1lO1xuICB9XG5cbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyhpbWFnZU1hcEpTT04pIHtcbiAgICBjb25zdCBqc29uID0gaW1hZ2VNYXBKU09OW3RoaXMuaW1hZ2VOYW1lXSxcbiAgICAgICAgICBleHRlbnQgPSBqc29uLCAgLy8vXG4gICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgcGVybXV0ZShwbGFjZXMpIHtcbiAgICBzdXBlci5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gcGVybXV0ZSh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBwbGFjZXMpO1xuICB9XG5cbiAgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhKSxcbiAgICAgICAgICBsYXJnZUVub3VnaCA9ICFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvOyAgLy8vXG5cbiAgICBpZiAobGFyZ2VFbm91Z2gpIHtcbiAgICAgIGNvbnN0IG5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh2ZXJ0aWNlcywgTm9ybWFsKSxcbiAgICAgICAgICAgIHBhcmVudFZlcnRpY2VzID0gdGhpcy52ZXJ0aWNlcywgLy8vXG4gICAgICAgICAgICBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGUgPSBjYWxjdWxhdGVBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRpY2VzLCBub3JtYWwsIHBhcmVudFZlcnRpY2VzLCB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICAgIGVkZ2VzID0gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpLFxuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsXG4gICAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTsgIC8vL1xuXG4gICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgaW1hZ2VOYW1lID0gdGhpcy5pbWFnZU5hbWUsIC8vL1xuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gbmV3IFRleHR1cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFnbmlmaWNhdGlvbih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgaW1hZ2VOYW1lLCBtYWduaWZpY2F0aW9uKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUFuZE1hZ25pZmljYXRpb24oY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgbWFnbmlmaWNhdGlvbiwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ1IsR0FBVSxDQUFWLE1BQVU7QUFDVCxHQUFXLENBQVgsT0FBVztBQUNYLEdBQVcsQ0FBWCxPQUFXO0FBRU4sR0FBdUIsQ0FBdkIsTUFBdUI7QUFDSixHQUE2QixDQUE3QixZQUE2QjtBQUNELEdBQTBCLENBQTFCLFNBQTBCO0FBQ00sR0FBdUIsQ0FBdkIsT0FBdUI7QUFDQyxHQUF5QixDQUF6QixRQUF5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbkksYUFBYTtjQUFiLGFBQWE7YUFBYixhQUFhLENBQ3BCLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSx1QkFBdUI7OEJBRHBELGFBQWE7O2lFQUFiLGFBQWEsYUFFeEIsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLO2NBRXhCLFNBQVMsR0FBRyxTQUFTO2NBRXJCLHVCQUF1QixHQUFHLHVCQUF1Qjs7O2lCQU5yQyxhQUFhOztZQVNoQyxHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLEdBQUcsQ0FBQzs0QkFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVELEdBQTBCLEdBQTFCLDBCQUEwQjs0QkFBMUIsMEJBQTBCLEdBQUcsQ0FBQzs0QkFDaEIsdUJBQXVCO1lBQ3JDLENBQUM7OztZQUVELEdBQWdDLEdBQWhDLGdDQUFnQzs0QkFBaEMsZ0NBQWdDLENBQUMsWUFBWSxFQUFFLENB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