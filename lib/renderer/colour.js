"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ColourRenderer;
    }
});
var _renderer = /*#__PURE__*/ _interop_require_wildcard(require("../renderer"));
var _colour = /*#__PURE__*/ _interop_require_default(require("../renderer/data/colour"));
var _vertexShader = /*#__PURE__*/ _interop_require_default(require("./source/colour/vertexShader"));
var _fragmentShader = /*#__PURE__*/ _interop_require_default(require("./source/colour/fragmentShader"));
var _colour1 = /*#__PURE__*/ _interop_require_default(require("../renderer/buffers/colour"));
var _uniform = /*#__PURE__*/ _interop_require_default(require("./locations/colour/uniform"));
var _attribute = /*#__PURE__*/ _interop_require_default(require("./locations/colour/attribute"));
var _array = require("../utilities/array");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var ColourRenderer = /*#__PURE__*/ function(Renderer) {
    _inherits(ColourRenderer, Renderer);
    var _super = _create_super(ColourRenderer);
    function ColourRenderer() {
        _class_call_check(this, ColourRenderer);
        return _super.apply(this, arguments);
    }
    _create_class(ColourRenderer, [
        {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
                var attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
                return vertexColourAttributeLocation;
            }
        },
        {
            key: "createBuffers",
            value: function createBuffers(canvas) {
                var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
                facets.forEach(function(facet, index) {
                    var colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
                    (0, _array.push)(vertexIndexes, facetVertexIndexes);
                    (0, _array.push)(vertexNormals, facetVertexNormals);
                    (0, _array.push)(vertexPositions, facetVertexPositions);
                    (0, _array.push)(vertexColours, colouredFacetVertexColours);
                });
                var rendererData = this.getRendererData();
                rendererData.addVertexIndexes(vertexIndexes);
                rendererData.addVertexNormals(vertexNormals);
                rendererData.addVertexColours(vertexColours);
                rendererData.addVertexPositions(vertexPositions);
                var rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
                rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
            }
        },
        {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
                var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
                rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
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
                var count = this.getCount(), start = 0, finish = count; ///
                canvas.drawElements(start, finish);
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(canvas) {
                var facets = [], program = (0, _renderer.createProgram)(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
                return colourRenderer;
            }
        }
    ]);
    return ColourRenderer;
}(_renderer.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9jb2xvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBwdXNoKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBwdXNoKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBwdXNoKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgcHVzaCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29sb3VyUmVuZGVyZXIiLCJnZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImdldEF0dHJpYnV0ZUxvY2F0aW9ucyIsInZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uIiwiY3JlYXRlQnVmZmVycyIsImNhbnZhcyIsImZhY2V0cyIsImdldEZhY2V0cyIsInZlcnRleEluZGV4ZXMiLCJ2ZXJ0ZXhOb3JtYWxzIiwidmVydGV4UG9zaXRpb25zIiwidmVydGV4Q29sb3VycyIsImZvckVhY2giLCJmYWNldCIsImluZGV4IiwiY29sb3VyZWRGYWNldCIsImZhY2V0VmVydGV4SW5kZXhlcyIsImdldFZlcnRleEluZGV4ZXMiLCJmYWNldFZlcnRleE5vcm1hbHMiLCJnZXRWZXJ0ZXhOb3JtYWxzIiwiZmFjZXRWZXJ0ZXhQb3NpdGlvbnMiLCJnZXRWZXJ0ZXhQb3NpdGlvbnMiLCJjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyIsImdldFZlcnRleENvbG91cnMiLCJwdXNoIiwicmVuZGVyZXJEYXRhIiwiZ2V0UmVuZGVyZXJEYXRhIiwiYWRkVmVydGV4SW5kZXhlcyIsImFkZFZlcnRleE5vcm1hbHMiLCJhZGRWZXJ0ZXhDb2xvdXJzIiwiYWRkVmVydGV4UG9zaXRpb25zIiwicmVuZGVyZXJCdWZmZXJzIiwiZ2V0UmVuZGVyZXJCdWZmZXJzIiwidmVydGV4UG9zaXRpb25zRGF0YSIsImdldFZlcnRleFBvc2l0aW9uc0RhdGEiLCJ2ZXJ0ZXhOb3JtYWxzRGF0YSIsImdldFZlcnRleE5vcm1hbHNEYXRhIiwidmVydGV4SW5kZXhlc0RhdGEiLCJnZXRWZXJ0ZXhJbmRleGVzRGF0YSIsInZlcnRleENvbG91cnNEYXRhIiwiZ2V0VmVydGV4Q29sb3Vyc0RhdGEiLCJiaW5kQnVmZmVycyIsInZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24iLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uIiwiZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiIsInJlbmRlciIsIm9mZnNldHNNYXRyaXgiLCJub3JtYWxzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4IiwicHJvZ3JhbSIsImdldFByb2dyYW0iLCJ1c2VQcm9ncmFtIiwicmVuZGVyZXIiLCJjb3VudCIsImdldENvdW50Iiwic3RhcnQiLCJmaW5pc2giLCJkcmF3RWxlbWVudHMiLCJmcm9tTm90aGluZyIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImNvbG91clJlbmRlcmVyRGF0YSIsIkNvbG91clJlbmRlcmVyRGF0YSIsImNvbG91clJlbmRlcmVyQnVmZmVycyIsIkNvbG91clJlbmRlcmVyQnVmZmVycyIsImNvbG91clVuaWZvcm1Mb2NhdGlvbnMiLCJDb2xvdXJVbmlmb3JtTG9jYXRpb25zIiwiZnJvbVByb2dyYW0iLCJjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiY29sb3VyUmVuZGVyZXIiLCJSZW5kZXJlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7Z0VBWEE7NkRBQ1U7bUVBQ0E7cUVBQ0U7OERBQ0M7OERBQ0M7Z0VBQ0U7cUJBRWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTixJQUFBLEFBQU1BLCtCQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQyxnQ0FBZ0NGLG1CQUFtQkQsZ0NBQWdDO2dCQUV6RixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLE1BQU07Z0JBQ2xCLElBQU1DLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxnQkFBZ0IsRUFBRSxFQUNsQkMsZ0JBQWdCLEVBQUUsRUFDbEJDLGtCQUFrQixFQUFFLEVBQ3BCQyxnQkFBZ0IsRUFBRTtnQkFFeEJMLE9BQU9NLE9BQU8s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