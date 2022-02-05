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
var ImagesTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImagesTextureRenderer, TextureRenderer);
    var _super = _createSuper(ImagesTextureRenderer);
    function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
        _classCallCheck(this, ImagesTextureRenderer);
        var _this;
        _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
        _this.imageNames = imageNames;
        _this.facetsMap = facetsMap;
        _this.offsets = offsets;
        return _this;
    }
    _createClass(ImagesTextureRenderer, [
        {
            key: "addFacets",
            value: function addFacets(facets) {
                var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
                if (texturedFacetsLength > 0) {
                    var firstTexturedFacet = (0, _array).first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets1 = this.facetsMap[imageName];
                    add(facets1, texturedFacets);
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
                        add(vertexIndexes, facetVertexIndexes);
                        add(vertexNormals, facetVertexNormals);
                        add(vertexPositions, facetVertexPositions);
                        add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
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
                _get(_getPrototypeOf(ImagesTextureRenderer.prototype), "createBuffers", this).call(this, canvas);
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
exports.default = ImagesTextureRenderer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJwdXNoIiwiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiZmFjZXRzIiwicHJvZ3JhbSIsInJlbmRlcmVyRGF0YSIsInJlbmRlcmVyQnVmZmVycyIsInVuaWZvcm1Mb2NhdGlvbnMiLCJhdHRyaWJ1dGVMb2NhdGlvbnMiLCJpbWFnZU5hbWVzIiwiZmFjZXRzTWFwIiwib2Zmc2V0cyIsImFkZEZhY2V0cyIsInRleHR1cmVkRmFjZXRzIiwidGV4dHVyZWRGYWNldHNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdFRleHR1cmVkRmFjZXQiLCJmaXJzdCIsInRleHR1cmVkRmFjZXQiLCJpbWFnZU5hbWUiLCJnZXRJbWFnZU5hbWUiLCJjcmVhdGVCdWZmZXJzIiwiY2FudmFzIiwidmVydGV4SW5kZXhlcyIsInZlcnRleE5vcm1hbHMiLCJ2ZXJ0ZXhQb3NpdGlvbnMiLCJ2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImluZGV4IiwiZm9yRWFjaCIsImZhY2V0IiwiZmFjZXRWZXJ0ZXhJbmRleGVzIiwiZ2V0VmVydGV4SW5kZXhlcyIsImZhY2V0VmVydGV4Tm9ybWFscyIsImdldFZlcnRleE5vcm1hbHMiLCJmYWNldFZlcnRleFBvc2l0aW9ucyIsImdldFZlcnRleFBvc2l0aW9ucyIsInRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsImdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwidGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwib2Zmc2V0IiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhQb3NpdGlvbnMiLCJhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInJlbmRlciIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwiZ2V0UHJvZ3JhbSIsInVzZVByb2dyYW0iLCJiaW5kQnVmZmVycyIsInJlbmRlcmVyIiwic3RhcnQiLCJmaW5pc2giLCJ1c2VUZXh0dXJlIiwiZHJhd0VsZW1lbnRzIiwiZnJvbUltYWdlc0ltYWdlTmFtZXNBbmRJbWFnZVRpbGluZyIsImltYWdlcyIsImltYWdlVGlsaW5nIiwiaW1hZ2UiLCJyZXBlYXQiLCJjcmVhdGVUZXh0dXJlIiwiaW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiVGV4dHVyZVJlbmRlcmVyIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRWdCLEdBQXdCLENBQXhCLFFBQXdCO0FBRXhCLEdBQXVCLENBQXZCLE1BQXVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsR0FBSyxDQUFDQSxHQUFHLEdBQUdDLE1BQUksTUFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFQUMscUJBQXFCLGlCQUEzQixRQUFROzs7YUFBRkEscUJBQXFCLENBQzdCQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0IsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLE9BQU87OztrQ0FDekhSLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsZ0JBQWdCLEVBQUVDLGtCQUFrQjtjQUVyRkMsVUFBVSxHQUFHQSxVQUFVO2NBRXZCQyxTQUFTLEdBQUdBLFNBQVM7Y0FFckJDLE9BQU8sR0FBR0EsT0FBTzs7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