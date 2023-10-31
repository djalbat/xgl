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
var _texture = /*#__PURE__*/ _interop_require_default(require("../../renderer/texture"));
var _array = require("../../utilities/array");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ImageMapTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImageMapTextureRenderer, TextureRenderer);
    var _super = _create_super(ImageMapTextureRenderer);
    function ImageMapTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
        _class_call_check(this, ImageMapTextureRenderer);
        var _this;
        _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        _this.imageMapJSON = imageMapJSON;
        return _this;
    }
    _create_class(ImageMapTextureRenderer, [
        {
            key: "createBuffers",
            value: function createBuffers(canvas) {
                var _this = this;
                var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
                facets.forEach(function(facet, index) {
                    var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples; ///
                    (0, _array.add)(vertexIndexes, facetVertexIndexes);
                    (0, _array.add)(vertexNormals, facetVertexNormals);
                    (0, _array.add)(vertexPositions, facetVertexPositions);
                    (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                });
                var rendererData = this.getRendererData();
                rendererData.addVertexIndexes(vertexIndexes);
                rendererData.addVertexNormals(vertexNormals);
                rendererData.addVertexPositions(vertexPositions);
                rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
                _get(_get_prototype_of(ImageMapTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi8uLi9yZW5kZXJlci90ZXh0dXJlXCI7XG5cbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbWFnZU1hcFRleHR1cmVSZW5kZXJlciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VNYXBKU09OIiwiY3JlYXRlQnVmZmVycyIsImNhbnZhcyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJmb3JFYWNoIiwiZmFjZXQiLCJpbmRleCIsInRleHR1cmVkRmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwibWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImFkZCIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJiaW5kQnVmZmVycyIsImdldFJlbmRlcmVyQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsInRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24iLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uIiwidXNlVGV4dHVyZSIsImdldFVuaWZvcm1Mb2NhdGlvbnMiLCJzYW1wbGVyVW5pZm9ybUxvY2F0aW9uIiwiZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbiIsInNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUiLCJyZW5kZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwicmVuZGVyZXIiLCJjb3VudCIsImdldENvdW50Iiwic3RhcnQiLCJmaW5pc2giLCJkcmF3RWxlbWVudHMiLCJmcm9tSW1hZ2VNYXBBbmRJbWFnZU1hcEpTT04iLCJpbWFnZU1hcCIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlVGV4dHVyZSIsImltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIiwiVGV4dHVyZVJlbmRlcmVyIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzhEQUpPO3FCQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTCxJQUFBLEFBQU1BLHdDQUFOO2NBQU1BOytCQUFBQTthQUFBQSx3QkFDUkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEVBQUVDLFlBQVk7Z0NBRDFGUDs7a0NBRWJDLFFBQVFDLFNBQVNDLGNBQWNDLGlCQUFpQkMsa0JBQWtCQztRQUV4RSxNQUFLQyxZQUFZLEdBQUdBOzs7a0JBSkRQOztZQU9uQlEsS0FBQUE7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