"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ImagesTextureRenderer;
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
var ImagesTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImagesTextureRenderer, TextureRenderer);
    var _super = _create_super(ImagesTextureRenderer);
    function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
        _class_call_check(this, ImagesTextureRenderer);
        var _this;
        _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        _this.imageNames = imageNames;
        _this.facetsMap = facetsMap;
        _this.offsets = offsets;
        return _this;
    }
    _create_class(ImagesTextureRenderer, [
        {
            key: "addFacets",
            value: function addFacets(facets) {
                var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
                if (texturedFacetsLength > 0) {
                    var firstTexturedFacet = (0, _array.first)(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), _$facets = this.facetsMap[imageName];
                    (0, _array.add)(_$facets, texturedFacets);
                }
            }
        },
        {
            key: "createBuffers",
            value: function createBuffers(canvas) {
                var _this = this;
                var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
                var index = 0;
                this.imageNames.forEach(function(imageName) {
                    var facets = _this.facetsMap[imageName];
                    facets.forEach(function(facet) {
                        var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples; ///
                        (0, _array.add)(vertexIndexes, facetVertexIndexes);
                        (0, _array.add)(vertexNormals, facetVertexNormals);
                        (0, _array.add)(vertexPositions, facetVertexPositions);
                        (0, _array.add)(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                        index++;
                    });
                    var offset = index * 3; ///
                    _this.offsets.push(offset);
                });
                var rendererData = this.getRendererData();
                rendererData.addVertexIndexes(vertexIndexes);
                rendererData.addVertexNormals(vertexNormals);
                rendererData.addVertexPositions(vertexPositions);
                rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
                _get(_get_prototype_of(ImagesTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
            }
        },
        {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
                var _this = this;
                var program = this.getProgram();
                canvas.useProgram(program);
                this.bindBuffers(canvas);
                var renderer = this; ///
                canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
                var start, finish = 0; ///
                this.offsets.forEach(function(offset, index) {
                    start = finish; ///
                    finish = offset; ///
                    _this.useTexture(index, canvas);
                    canvas.drawElements(start, finish);
                });
            }
        }
    ], [
        {
            key: "fromImagesImageNamesAndImageTiling",
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
                var offsets = [], facetsMap = {};
                images.forEach(function(image, index) {
                    var facets = [], repeat = imageTiling, imageName = imageNames[index];
                    facetsMap[imageName] = facets;
                    canvas.createTexture(image, index, repeat);
                });
                var imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer, canvas, imageNames, facetsMap, offsets);
                return imagesTextureRenderer;
            }
        }
    ]);
    return ImagesTextureRenderer;
}(_texture.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBhZGQsIGZpcnN0IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwiZmFjZXRzTWFwIiwib2Zmc2V0cyIsImFkZEZhY2V0cyIsInRleHR1cmVkRmFjZXRzIiwidGV4dHVyZWRGYWNldHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRleHR1cmVkRmFjZXQiLCJmaXJzdCIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJhZGQiLCJjcmVhdGVCdWZmZXJzIiwiY2FudmFzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImluZGV4IiwiZm9yRWFjaCIsImZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0IiwicHVzaCIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJyZW5kZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiYmluZEJ1ZmZlcnMiLCJyZW5kZXJlciIsInN0YXJ0IiwiZmluaXNoIiwidXNlVGV4dHVyZSIsImRyYXdFbGVtZW50cyIsImZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmciLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs4REFKTztxQkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBQSxBQUFNQSxzQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQSxzQkFDUkMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxPQUFPO2dDQUQ1R1Q7O2tDQUViQyxRQUFRQyxTQUFTQyxjQUFjQyxpQkFBaUJDLGtCQUFrQkM7UUFFeEUsTUFBS0MsVUFBVSxHQUFHQTtRQUVsQixNQUFLQyxTQUFTLEdBQUdBO1FBRWpCLE1BQUtDLE9BQU8sR0FBR0E7OztrQkFSSVQ7O1lBV3BCVSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVQsTUFBTTtnQkFDZCxJQUFNVSxpQkFBaUJWLFFBQ2hCVyx1QkFBdUJELGVBQWVFLE1BQU07Z0JBRW5ELElBQUlELHVCQUF1QixHQUFHO29CQUM1QixJQUFNRSxxQkFBcUJD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