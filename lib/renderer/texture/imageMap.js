"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _texture = _interopRequireDefault(require("../../renderer/texture"));
var _array = require("../../utilities/array");
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
var add = _array.push; ///
var ImageMapTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImageMapTextureRenderer, TextureRenderer);
    function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
        _classCallCheck(this, ImageMapTextureRenderer);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageMapTextureRenderer).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
        _this.imageMapJSON = imageMapJSON;
        return _this;
    }
    _createClass(ImageMapTextureRenderer, [
        {
            key: "createBuffers",
            value: function createBuffers(canvas) {
                var _this = this;
                var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
                facets.forEach(function(facet, index) {
                    var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///
                    add(vertexIndexes, facetVertexIndexes);
                    add(vertexNormals, facetVertexNormals);
                    add(vertexPositions, facetVertexPositions);
                    add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                });
                var rendererData = this.getRendererData();
                rendererData.addVertexIndexes(vertexIndexes);
                rendererData.addVertexNormals(vertexNormals);
                rendererData.addVertexPositions(vertexPositions);
                rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
                _get(_getPrototypeOf(ImageMapTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
            }
        },
        {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
                var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
                rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
        },
        {
            key: "useTexture",
            value: function useTexture(index, canvas) {
                var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index; ///
                canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
        },
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
                var program = this.getProgram();
                canvas.useProgram(program);
                this.bindBuffers(canvas);
                var renderer = this; ///
                canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
                var rendererData = this.getRendererData(), count = rendererData.getCount(), index = 0, start = 0, finish = count; ///
                this.useTexture(index, canvas);
                canvas.drawElements(start, finish);
            }
        }
    ], [
        {
            key: "fromImageMapAndImageMapJSON",
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
                var image = imageMap, index = 0, repeat = false;
                canvas.createTexture(image, index, repeat);
                var imageMapTextureRenderer = _texture.default.fromNothing(ImageMapTextureRenderer, canvas, imageMapJSON);
                return imageMapTextureRenderer;
            }
        }
    ]);
    return ImageMapTextureRenderer;
}(_texture.default);
exports.default = ImageMapTextureRenderer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImFkZCIsIkltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU1hcEpTT04iLCJjcmVhdGVCdWZmZXJzIiwiY2FudmFzIiwiZ2V0RmFjZXRzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImZvckVhY2giLCJpbmRleCIsImZhY2V0IiwidGV4dHVyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImJpbmRCdWZmZXJzIiwiZ2V0UmVuZGVyZXJCdWZmZXJzIiwidmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsInZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwidGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJ1c2VUZXh0dXJlIiwiZ2V0VW5pZm9ybUxvY2F0aW9ucyIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJnZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSIsInJlbmRlciIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJyZW5kZXJlciIsImNvdW50IiwiZ2V0Q291bnQiLCJzdGFydCIsImZpbmlzaCIsImRyYXdFbGVtZW50cyIsImZyb21JbWFnZU1hcEFuZEltYWdlTWFwSlNPTiIsImltYWdlTWFwIiwiaW1hZ2UiLCJyZXBlYXQiLCJjcmVhdGVUZXh0dXJlIiwiaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsUUFBd0I7QUFFL0IsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLEdBQUssQ0FBQ0EsR0FBRyxHQUZZLE1BQXVCLE1BRTFCLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVBQyx1QkFBdUIsaUJBQTdCLFFBQVE7Y0FBRkEsdUJBQXVCO2FBQXZCQSx1QkFBdUIsQ0FDL0JDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQixFQUFFQyxZQUFZOzhCQUQxRlAs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