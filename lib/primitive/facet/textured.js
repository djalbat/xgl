"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TexturedFacet;
    }
});
var _edge = /*#__PURE__*/ _interopRequireDefault(require("../edge"));
var _facet = /*#__PURE__*/ _interopRequireDefault(require("../facet"));
var _normal = /*#__PURE__*/ _interopRequireDefault(require("../normal"));
var _vertex = /*#__PURE__*/ _interopRequireDefault(require("../vertex"));
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var TexturedFacet = /*#__PURE__*/ function(Facet) {
    _inherits(TexturedFacet, Facet);
    var _super = _createSuper(TexturedFacet);
    function TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples) {
        _classCallCheck(this, TexturedFacet);
        var _this;
        _this = _super.call(this, vertices, normal, edges);
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
                var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture.calculateMappedTextureCoordinateTuples)(this.textureCoordinateTuples, extent);
                return mappedTextureCoordinateTuples;
            }
        },
        {
            key: "permute",
            value: function permute(places) {
                _get(_getPrototypeOf(TexturedFacet.prototype), "permute", this).call(this, places);
                this.textureCoordinateTuples = (0, _array.permute)(this.textureCoordinateTuples, places);
            }
        },
        {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
                var texturedFacet = null;
                var area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture.calculateAdjustedTextureCoordinateTuples)(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1.calculateEdges)(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple; ///
                    texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                }
                return texturedFacet;
            }
        },
        {
            key: "clone",
            value: function clone() {
                var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
                vertices = (0, _facet1.cloneVertices)(vertices);
                normal = (0, _facet1.cloneNormal)(normal);
                edges = (0, _facet1.cloneEdges)(edges);
                var imageName = this.imageName, textureCoordinateTuples = (0, _texture.cloneTextureCoordinateTuples)(this.textureCoordinateTuples), texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                return texturedFacet;
            }
        }
    ], [
        {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
                var texturedFacet = null;
                var vertices = (0, _vertices.verticesFromCoordinateTuplesAndIndexTuple)(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1.calculateArea)(vertices), areaApproximatelyEqualToZero = (0, _approximate.isApproximatelyEqualToZero)(area, marginOfError);
                if (!areaApproximatelyEqualToZero) {
                    var normal = (0, _facet1.calculateNormal)(vertices, _normal.default), edges = (0, _facet1.calculateEdges)(vertices, _edge.default);
                    texturedFacet = new TexturedFacet(vertices, normal, edges, imageName, textureCoordinateTuples);
                }
                return texturedFacet;
            }
        }
    ]);
    return TexturedFacet;
}(_facet.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWQuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFZGdlIGZyb20gXCIuLi9lZGdlXCI7XG5pbXBvcnQgRmFjZXQgZnJvbSBcIi4uL2ZhY2V0XCI7XG5pbXBvcnQgTm9ybWFsIGZyb20gXCIuLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4uL3ZlcnRleFwiO1xuXG5pbXBvcnQgeyBwZXJtdXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2xvbmVUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3RleHR1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRGYWNldCBleHRlbmRzIEZhY2V0IHtcbiAgY29uc3RydWN0b3IodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcyk7XG5cbiAgICB0aGlzLmltYWdlTmFtZSA9IGltYWdlTmFtZTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldEltYWdlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pbWFnZU5hbWU7XG4gIH1cblxuICBnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKGltYWdlTWFwSlNPTikge1xuICAgIGNvbnN0IGpzb24gPSBpbWFnZU1hcEpTT05bdGhpcy5pbWFnZU5hbWVdLFxuICAgICAgICAgIGV4dGVudCA9IGpzb24sICAvLy9cbiAgICAgICAgICBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNhbGN1bGF0ZU1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGV4dGVudCk7XG5cbiAgICByZXR1cm4gbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG4gIH1cblxuICBwZXJtdXRlKHBsYWNlcykge1xuICAgIHN1cGVyLnBlcm11dGUocGxhY2VzKTtcblxuICAgIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBwZXJtdXRlKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHBsYWNlcyk7XG4gIH1cblxuICBmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IHRleHR1cmVkRmFjZXQgPSBudWxsO1xuXG4gICAgY29uc3QgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgcGFyZW50VmVydGljZXMgPSB0aGlzLnZlcnRpY2VzLCAvLy9cbiAgICAgICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSxcbiAgICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlOyAgLy8vXG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBsZXQgdmVydGljZXMgPSB0aGlzLmdldFZlcnRpY2VzKCksXG4gICAgICAgIG5vcm1hbCA9IHRoaXMuZ2V0Tm9ybWFsKCksXG4gICAgICAgIGVkZ2VzID0gdGhpcy5nZXRFZGdlcygpO1xuXG4gICAgdmVydGljZXMgPSBjbG9uZVZlcnRpY2VzKHZlcnRpY2VzKTtcbiAgICBub3JtYWwgPSBjbG9uZU5vcm1hbChub3JtYWwpO1xuICAgIGVkZ2VzID0gY2xvbmVFZGdlcyhlZGdlcyk7XG5cbiAgICBjb25zdCBpbWFnZU5hbWUgPSB0aGlzLmltYWdlTmFtZSwgLy8vXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMudGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXNDb29yZGluYXRlc1R1cGxlc0luZGV4VHVwbGVJbWFnZU5hbWVBbmRNYXJnaW5PZkVycm9yKHRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBpbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSk7XG5cbiAgICAgIHRleHR1cmVkRmFjZXQgPSBuZXcgVGV4dHVyZWRGYWNldCh2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHR1cmVkRmFjZXQ7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGV4dHVyZWRGYWNldCIsInZlcnRpY2VzIiwibm9ybWFsIiwiZWRnZXMiLCJpbWFnZU5hbWUiLCJ0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldEltYWdlTmFtZSIsImdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJpbWFnZU1hcEpTT04iLCJqc29uIiwiZXh0ZW50IiwibWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInBlcm11dGUiLCJwbGFjZXMiLCJmcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yIiwibWFyZ2luT2ZFcnJvciIsInRleHR1cmVkRmFjZXQiLCJhcmVhIiwiY2FsY3VsYXRlQXJlYSIsImFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8iLCJpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyIsImNhbGN1bGF0ZU5vcm1hbCIsIk5vcm1hbCIsInBhcmVudFZlcnRpY2VzIiwiYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlIiwiY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImNhbGN1bGF0ZUVkZ2VzIiwiRWRnZSIsImNsb25lIiwiZ2V0VmVydGljZXMiLCJnZXROb3JtYWwiLCJnZXRFZGdlcyIsImNsb25lVmVydGljZXMiLCJjbG9uZU5vcm1hbCIsImNsb25lRWRnZXMiLCJjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvciIsImNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleFR1cGxlIiwidmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUiLCJWZXJ0ZXgiLCJGYWNldCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7eURBWEo7MERBQ0M7MkRBQ0M7MkRBQ0E7cUJBRUs7MkJBQ21CO3dCQUNlO3NCQUM2Qzt1QkFDd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoSCxJQUFBLEFBQU1BLDhCQUFOO2NBQU1BOzhCQUFBQTthQUFBQSxjQUNQQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLHVCQUF1Qjs4QkFEcERMOztrQ0FFWEMsVUFBVUMsUUFBUUM7UUFFeEIsTUFBS0MsU0FBUyxHQUFHQTtRQUVqQixNQUFLQyx1QkFBdUIsR0FBR0E7OztpQkFOZEw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkI7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDRix1QkFBdUI7WUFDckM7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsaUNBQWlDQyxZQUFZLEVBQUU7Z0JBQzdDLElBQU1DLE9BQU9ELFlBQVksQ0FBQyxJQUFJLENBQUNMLFNBQVMsQ0FBQyxFQUNuQ08sU0FBU0QsTUFDVEUsZ0NBQWdDQyxJQUFBQSwrQ0FBc0MsRUFBQyxJQUFJLENBQUNSLHVCQUF1QixFQUFFTTtnQkFFM0csT0FBT0M7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxNQUFNLEVBQUU7Z0JBQ2QscUJB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