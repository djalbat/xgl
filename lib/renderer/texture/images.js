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
                    var firstTexturedFacet = (0, _array.first)(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), _$facets = this.facetsMap[imageName];
                    add(_$facets, texturedFacets);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIiwiYWRkIiwicHVzaCIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiaW1hZ2VOYW1lcyIsImZhY2V0c01hcCIsIm9mZnNldHMiLCJhZGRGYWNldHMiLCJ0ZXh0dXJlZEZhY2V0cyIsInRleHR1cmVkRmFjZXRzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUZXh0dXJlZEZhY2V0IiwiZmlyc3QiLCJ0ZXh0dXJlZEZhY2V0IiwiaW1hZ2VOYW1lIiwiZ2V0SW1hZ2VOYW1lIiwiY3JlYXRlQnVmZmVycyIsImNhbnZhcyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJpbmRleCIsImZvckVhY2giLCJmYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJ0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJnZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsInRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyIsIm9mZnNldCIsImdldFJlbmRlcmVyRGF0YSIsImFkZFZlcnRleEluZGV4ZXMiLCJhZGRWZXJ0ZXhOb3JtYWxzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwiYWRkVmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMiLCJyZW5kZXIiLCJvZmZzZXRzTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwiYmluZEJ1ZmZlcnMiLCJyZW5kZXJlciIsInN0YXJ0IiwiZmluaXNoIiwidXNlVGV4dHVyZSIsImRyYXdFbGVtZW50cyIsImZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmciLCJpbWFnZXMiLCJpbWFnZVRpbGluZyIsImltYWdlIiwicmVwZWF0IiwiY3JlYXRlVGV4dHVyZSIsImltYWdlc1RleHR1cmVSZW5kZXJlciIsIlRleHR1cmVSZW5kZXJlciIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFRUUEscUJBQXFCOzs7NERBTmQsd0JBQXdCO3FCQUV4Qix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRCxJQUFNQyxHQUFHLEdBQUdDLE1BQUksS0FBQSxBQUFDLEVBQUMsR0FBRztBQUVOLElBQUEsQUFBTUYscUJBQXFCLGlCQUEzQjs7O2FBQU1BLHFCQUFxQixDQUM3QkcsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRUMsa0JBQWtCLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxPQUFPOzs7a0NBQ3pIUixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0IsRUFBRTtRQUU1RixNQUFLQyxVQUFVLEdBQUdBLFVB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