"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImageMapTextureRenderer;
    }
});
var _texture = /*#__PURE__*/ _interopRequireDefault(require("../../renderer/texture"));
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
var add = _array.push; ///
var ImageMapTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImageMapTextureRenderer, TextureRenderer);
    var _super = _createSuper(ImageMapTextureRenderer);
    function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
        _classCallCheck(this, ImageMapTextureRenderer);
        var _this;
        _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZU1hcFRleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VNYXBKU09OKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VNYXBKU09OID0gaW1hZ2VNYXBKU09OO1xuXHR9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHRleHR1cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgbWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0LmdldE1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHRoaXMuaW1hZ2VNYXBKU09OKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAvLy9cblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHN1cGVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHVzZVRleHR1cmUoaW5kZXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHVuaWZvcm1Mb2NhdGlvbnMgPSB0aGlzLmdldFVuaWZvcm1Mb2NhdGlvbnMoKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gdW5pZm9ybUxvY2F0aW9ucy5nZXRTYW1wbGVyVW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSA9IGluZGV4OyAvLy9cblxuICAgIGNhbnZhcy5zZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUoc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiwgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKSxcbiAgICAgICAgICBjb3VudCA9IHJlbmRlcmVyRGF0YS5nZXRDb3VudCgpLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgICAgZmluaXNoID0gY291bnQ7IC8vL1xuXG4gICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04oaW1hZ2VNYXAsIGltYWdlTWFwSlNPTiwgY2FudmFzKSB7XG4gICAgY29uc3QgaW1hZ2UgPSBpbWFnZU1hcCwgLy8vXG4gICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuXG4gICAgY2FudmFzLmNyZWF0ZVRleHR1cmUoaW1hZ2UsIGluZGV4LCByZXBlYXQpO1xuXG4gICAgY29uc3QgaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VNYXBKU09OKTtcblxuICAgIHJldHVybiBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImFkZCIsInB1c2giLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImltYWdlTWFwSlNPTiIsImNyZWF0ZUJ1ZmZlcnMiLCJjYW52YXMiLCJnZXRGYWNldHMiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZm9yRWFjaCIsImZhY2V0IiwiaW5kZXgiLCJ0ZXh0dXJlZEZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsIm1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiYmluZEJ1ZmZlcnMiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJ2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwidmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJ0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiIsInVzZVRleHR1cmUiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwic2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsImdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24iLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwic2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsInJlbmRlcmVyIiwiY291bnQiLCJnZXRDb3VudCIsInN0YXJ0IiwiZmluaXNoIiwiZHJhd0VsZW1lbnRzIiwiZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OIiwiaW1hZ2VNYXAiLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEsdUJBQXVCOzs7NERBTmhCLHdCQUF3QjtxQkFFL0IsdUJBQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUMsSUFBTUMsR0FBRyxHQUFHQyxNQUFJLEtBQUEsQUFBQyxFQUFDLEdBQUc7QUFFTixJQUFBLEFBQU1GLHVCQUF1QixpQkFBN0I7OzthQUFNQSx1QkFBdUIsQ0FDL0JHLE1BQU0s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