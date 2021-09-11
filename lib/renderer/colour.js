"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _renderer = _interopRequireWildcard(require("../renderer"));
var _colour = _interopRequireDefault(require("../renderer/data/colour"));
var _vertexShader = _interopRequireDefault(require("./source/colour/vertexShader"));
var _fragmentShader = _interopRequireDefault(require("./source/colour/fragmentShader"));
var _colour1 = _interopRequireDefault(require("../renderer/buffers/colour"));
var _uniform = _interopRequireDefault(require("./locations/colour/uniform"));
var _attribute = _interopRequireDefault(require("./locations/colour/attribute"));
var _array = require("../utilities/array");
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
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
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
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var add = _array.push; ///
var ColourRenderer = /*#__PURE__*/ function(Renderer) {
    _inherits(ColourRenderer, Renderer);
    function ColourRenderer() {
        _classCallCheck(this, ColourRenderer);
        return _possibleConstructorReturn(this, _getPrototypeOf(ColourRenderer).apply(this, arguments));
    }
    _createClass(ColourRenderer, [
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
                    add(vertexIndexes, facetVertexIndexes);
                    add(vertexNormals, facetVertexNormals);
                    add(vertexPositions, facetVertexPositions);
                    add(vertexColours, colouredFacetVertexColours);
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
                var facets = [], program = (0, _renderer).createProgram(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
                return colourRenderer;
            }
        }
    ]);
    return ColourRenderer;
}(_renderer.default);
exports.default = ColourRenderer;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW5kZXJlci9jb2xvdXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlckRhdGEgZnJvbSBcIi4uL3JlbmRlcmVyL2RhdGEvY29sb3VyXCI7XG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gXCIuL3NvdXJjZS9jb2xvdXIvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci9mcmFnbWVudFNoYWRlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vcmVuZGVyZXIvYnVmZmVycy9jb2xvdXJcIjtcbmltcG9ydCBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvdW5pZm9ybVwiO1xuaW1wb3J0IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZUxvY2F0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlTG9jYXRpb25zKCksXG4gICAgICAgICAgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24gPSBhdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNvbG91cmVkRmFjZXQgPSBmYWNldCwgIC8vL1xuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICBmYWNldFZlcnRleE5vcm1hbHMgPSBmYWNldC5nZXRWZXJ0ZXhOb3JtYWxzKCksXG4gICAgICAgICAgICBmYWNldFZlcnRleFBvc2l0aW9ucyA9IGZhY2V0LmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgICAgY29sb3VyZWRGYWNldFZlcnRleENvbG91cnMgPSBjb2xvdXJlZEZhY2V0LmdldFZlcnRleENvbG91cnMoKTtcblxuICAgICAgYWRkKHZlcnRleEluZGV4ZXMsIGZhY2V0VmVydGV4SW5kZXhlcyk7XG4gICAgICBhZGQodmVydGV4Tm9ybWFscywgZmFjZXRWZXJ0ZXhOb3JtYWxzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgIGFkZCh2ZXJ0ZXhDb2xvdXJzLCBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3Vycyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleENvbG91cnModmVydGV4Q29sb3Vycyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleFBvc2l0aW9uc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhOb3JtYWxzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleEluZGV4ZXNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Q29sb3Vyc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKTtcblxuICAgIHJlbmRlcmVyQnVmZmVycy5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKTtcbiAgICBcbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nZXRDb3VudCgpLFxuICAgICAgICAgIHN0YXJ0ID0gMCxcbiAgICAgICAgICBmaW5pc2ggPSBjb3VudDsgLy8vXG5cbiAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNhbnZhcykge1xuICAgIGNvbnN0IGZhY2V0cyA9IFtdLFxuICAgICAgICAgIHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcyksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJEYXRhID0gQ29sb3VyUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXJCdWZmZXJzID0gQ29sb3VyUmVuZGVyZXJCdWZmZXJzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgY29sb3VyVW5pZm9ybUxvY2F0aW9ucyA9IENvbG91clVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSBjb2xvdXJSZW5kZXJlckRhdGEsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMsICAvLy9cbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gY29sb3VyVW5pZm9ybUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucywgIC8vL1xuICAgICAgICAgIGNvbG91clJlbmRlcmVyID0gbmV3IENvbG91clJlbmRlcmVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG4gICAgXG4gICAgcmV0dXJuIGNvbG91clJlbmRlcmVyO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFUyxHQUFhLENBQWIsU0FBYTtBQUNILEdBQXlCLENBQXpCLE9BQXlCO0FBQ3pCLEdBQThCLENBQTlCLGFBQThCO0FBQzVCLEdBQWdDLENBQWhDLGVBQWdDO0FBQy9CLEdBQTRCLENBQTVCLFFBQTRCO0FBQzNCLEdBQTRCLENBQTVCLFFBQTRCO0FBQzFCLEdBQThCLENBQTlCLFVBQThC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