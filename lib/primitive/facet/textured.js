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
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = (0, _facet1).cloneVertices(vertices);
                normal = (0, _facet1).cloneNormal(normal);
                edges = (0, _facet1).cloneEdges(edges);
                var imageName = this.imageName, textureCoordinateTuples = (0, _texture).cloneTextureCoordinateTuples(this.textureCoordinateTuples), texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                return texturedFacet;
            }
        },
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
        }
    ], [
        {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleAndImageName(textureCoordinateTuples, coordinateTuples, indexTuple, imageName) {
                var texturedFacet = null;
                var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area), largeEnough = !areaApproximatelyEqualToZero; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IGFyZWEgPSBjYWxjdWxhdGVBcmVhKHZlcnRpY2VzKSxcbiAgICAgICAgICBhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvID0gaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8oYXJlYSksXG4gICAgICAgICAgbGFyZ2VFbm91Z2ggPSAhYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybzsgIC8vL1xuXG4gICAgaWYgKGxhcmdlRW5vdWdoKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVBbmRJbWFnZU5hbWUodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSkge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEpLFxuICAgICAgICAgIGxhcmdlRW5vdWdoID0gIWFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm87ICAvLy9cblxuICAgIGlmIChsYXJnZUVub3VnaCkge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVLLEdBQVMsQ0FBVCxLQUFTO0FBQ1IsR0FBVSxDQUFWLE1BQVU7QUFDVCxHQUFXLENBQVgsT0FBVztBQUNYLEdBQVcsQ0FBWCxPQUFXO0FBRU4sR0FBdUIsQ0FBdkIsTUFBdUI7QUFDSixHQUE2QixDQUE3QixZQUE2QjtBQUNkLEdBQTBCLENBQTFCLFNBQTBCO0FBQ21CLEdBQXVCLENBQXZCLE9BQXVCO0FBQ0MsR0FBeUIsQ0FBekIsUUFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRW5JLGFBQWE7Y0FBYixhQUFhO2FBQWIsYUFBYSxDQUNwQixRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsdUJBQXVCOzhCQURwRCxhQUFhOztpRUFBYixhQUFhLGFBRXhCLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSztjQUV4QixTQUFTLEdBQUcsU0FBUztjQUVyQix1QkFBdUIsR0FBRyx1QkFBdUI7OztpQkFOckMsYUFBYTs7WUFTaEMsR0FBSyxHQUFMLEtBQUs7NEJBQUwsS0FBSyxHQUFHLENBQUM7Z0JBQ1AsR0FBRyxDQUFDLFFBQVEsUUFBUSxXQUFXLElBQzNCLE1BQU0sUUFBUSxTQUFTLElBQ3ZCLEtBQUssUUFBUSxRQUFRO2dCQUV6QixRQUFRLE9BakIyRixPQUF1QixnQkFpQmpHLFFBQVE7Z0JBQ2pDLE1BQU0sT0FsQjZGLE9BQXVCLGNBa0JyRyxNQUFNO2dCQUMzQixLQUFLLE9BbkI4RixPQUF1QixhQW1CdkcsS0FBSztnQkFFeEIsR0FBSyxDQUFDLFNBQVMsUUFBUSxTQUFTLEVBQzFC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