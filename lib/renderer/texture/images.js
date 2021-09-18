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
var ImagesTextureRenderer = /*#__PURE__*/ function(TextureRenderer) {
    _inherits(ImagesTextureRenderer, TextureRenderer);
    function ImagesTextureRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
        _classCallCheck(this, ImagesTextureRenderer);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ImagesTextureRenderer).call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations));
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
                    var firstTexturedFacet = (0, _array).first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets = this.facetsMap[imageName];
                    add(facets, texturedFacets);
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
                var offsets = [], facetsMap = {
                };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyJdLCJuYW1lcyI6WyJUZXh0dXJlUmVuZGVyZXIiLCJwdXNoIiwiZmlyc3QiLCJhZGQiLCJJbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJjb25zdHJ1Y3RvciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VOYW1lcyIsImZhY2V0c01hcCIsIm9mZnNldHMiLCJhZGRGYWNldHMiLCJ0ZXh0dXJlZEZhY2V0cyIsInRleHR1cmVkRmFjZXRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUZXh0dXJlZEZhY2V0IiwidGV4dHVyZWRGYWNldCIsImltYWdlTmFtZSIsImdldEltYWdlTmFtZSIsImNyZWF0ZUJ1ZmZlcnMiLCJjYW52YXMiLCJ2ZXJ0ZXhJbmRleGVzIiwidmVydGV4Tm9ybWFscyIsInZlcnRleFBvc2l0aW9ucyIsInZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiaW5kZXgiLCJmb3JFYWNoIiwiZmFjZXQiLCJmYWNldFZlcnRleEluZGV4ZXMiLCJnZXRWZXJ0ZXhJbmRleGVzIiwiZmFjZXRWZXJ0ZXhOb3JtYWxzIiwiZ2V0VmVydGV4Tm9ybWFscyIsImZhY2V0VmVydGV4UG9zaXRpb25zIiwiZ2V0VmVydGV4UG9zaXRpb25zIiwidGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwiZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJ0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJvZmZzZXQiLCJnZXRSZW5kZXJlckRhdGEiLCJhZGRWZXJ0ZXhJbmRleGVzIiwiYWRkVmVydGV4Tm9ybWFscyIsImFkZFZlcnRleFBvc2l0aW9ucyIsImFkZFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzIiwicmVuZGVyIiwib2Zmc2V0c01hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwb3NpdGlvbk1hdHJpeCIsInJvdGF0aW9uc01hdHJpeCIsInByb2plY3Rpb25NYXRyaXgiLCJnZXRQcm9ncmFtIiwidXNlUHJvZ3JhbSIsImJpbmRCdWZmZXJzIiwicmVuZGVyZXIiLCJzdGFydCIsImZpbmlzaCIsInVzZVRleHR1cmUiLCJkcmF3RWxlbWVudHMiLCJmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nIiwiaW1hZ2VzIiwiaW1hZ2VUaWxpbmciLCJpbWFnZSIsInJlcGVhdCIsImNyZWF0ZVRleHR1cmUiLCJpbWFnZXNUZXh0dXJlUmVuZGVyZXIiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZ0IsR0FBd0IsQ0FBeEIsUUFBd0I7QUFFeEIsR0FBdUIsQ0FBdkIsTUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELEdBQUssQ0FBQyxHQUFHLEdBRm1CLE1BQXVCLE1BRWpDLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztJQUVBLHFCQUFxQixpQkFBM0IsUUFBUTtjQUFGLHFCQUFxQjthQUFyQixxQkFBcUIsQ0FDN0IsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTzs4QkFENUcscUJBQXFCOztpRUFBckIscUJBQXFCLGFBRWxDLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0I7Y0FFckYsVUFBVSxHQUFHLFVBQVU7Y0FFdkIsU0FBUyxHQUFHLFNBQVM7Y0FFckIsT0FBTyxHQUFHLE9BQU87OztpQkFSSCxxQkFBcUI7O1lBV3pDLEdBQVMsR0FBVCxTQUFTO21CQUFULFFBQVEsQ0FBUixT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OUIsQ0FBQzs7O1dBN0drQixxQkFBcUI7RUFOZCxRQUF3QjtrQkFNL0IscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlUmVuZGVyZXIgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL3RleHR1cmVcIjtcblxuaW1wb3J0IHsgcHVzaCwgZmlyc3QgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZXNUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cykge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuXG5cdFx0dGhpcy5mYWNldHNNYXAgPSBmYWNldHNNYXA7XG5cblx0XHR0aGlzLm9mZnNldHMgPSBvZmZzZXRzO1xuXHR9XG5cblx0YWRkRmFjZXRzKGZhY2V0cykge1xuXHQgIGNvbnN0IHRleHR1cmVkRmFjZXRzID0gZmFjZXRzLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZWRGYWNldHNMZW5ndGggPSB0ZXh0dXJlZEZhY2V0cy5sZW5ndGg7XG5cblx0ICBpZiAodGV4dHVyZWRGYWNldHNMZW5ndGggPiAwKSB7XG5cdCAgICBjb25zdCBmaXJzdFRleHR1cmVkRmFjZXQgPSBmaXJzdCh0ZXh0dXJlZEZhY2V0cyksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0ID0gZmlyc3RUZXh0dXJlZEZhY2V0LCAvLy9cbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRleHR1cmVkRmFjZXQuZ2V0SW1hZ2VOYW1lKCksXG4gICAgICAgICAgICBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG5cdCAgICBhZGQoZmFjZXRzLCB0ZXh0dXJlZEZhY2V0cylcbiAgICB9XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBbXTtcblxuICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICB0aGlzLmltYWdlTmFtZXMuZm9yRWFjaCgoaW1hZ2VOYW1lKSA9PiB7XG4gICAgICBjb25zdCBmYWNldHMgPSB0aGlzLmZhY2V0c01hcFtpbWFnZU5hbWVdO1xuXG4gICAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dHVyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHRleHR1cmVkRmFjZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVkRmFjZXQuZ2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzOyAgLy8vXG5cbiAgICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgdGV4dHVyZWRGYWNldFZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgICAgICBpbmRleCsrO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IG9mZnNldCA9IGluZGV4ICogMzsgIC8vL1xuXG4gICAgICB0aGlzLm9mZnNldHMucHVzaChvZmZzZXQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVuZGVyZXJEYXRhID0gdGhpcy5nZXRSZW5kZXJlckRhdGEoKTtcblxuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhJbmRleGVzKHZlcnRleEluZGV4ZXMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhQb3NpdGlvbnModmVydGV4UG9zaXRpb25zKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgc3VwZXIuY3JlYXRlQnVmZmVycyhjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGxldCBzdGFydCxcbiAgICAgICAgZmluaXNoID0gMDsgIC8vL1xuXG4gICAgdGhpcy5vZmZzZXRzLmZvckVhY2goKG9mZnNldCwgaW5kZXgpID0+IHtcbiAgICAgIHN0YXJ0ID0gZmluaXNoOyAvLy9cblxuICAgICAgZmluaXNoID0gb2Zmc2V0OyAgLy8vXG5cbiAgICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgICAgY2FudmFzLmRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1hZ2VzSW1hZ2VOYW1lc0FuZEltYWdlVGlsaW5nKGltYWdlcywgaW1hZ2VOYW1lcywgaW1hZ2VUaWxpbmcsIGNhbnZhcykge1xuICAgIGNvbnN0IG9mZnNldHMgPSBbXSxcbiAgICAgICAgICBmYWNldHNNYXAgPSB7fTtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgICAgcmVwZWF0ID0gaW1hZ2VUaWxpbmcsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gaW1hZ2VOYW1lc1tpbmRleF07XG5cbiAgICAgIGZhY2V0c01hcFtpbWFnZU5hbWVdID0gZmFjZXRzO1xuXG4gICAgICBjYW52YXMuY3JlYXRlVGV4dHVyZShpbWFnZSwgaW5kZXgsIHJlcGVhdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBpbWFnZXNUZXh0dXJlUmVuZGVyZXIgPSBUZXh0dXJlUmVuZGVyZXIuZnJvbU5vdGhpbmcoSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTmFtZXMsIGZhY2V0c01hcCwgb2Zmc2V0cyk7XG5cbiAgICByZXR1cm4gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyO1xuICB9XG59XG4iXX0=