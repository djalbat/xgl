"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createProgram = createProgram;
exports.default = void 0;
var _array = require("./utilities/array");
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
var add = _array.push; ///
var Renderer = function() {
    function Renderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
        _classCallCheck(this, Renderer);
        this.facets = facets;
        this.program = program;
        this.rendererData = rendererData;
        this.rendererBuffers = rendererBuffers;
        this.uniformLocations = uniformLocations;
        this.attributeLocations = attributeLocations;
    }
    _createClass(Renderer, [
        {
            key: "getFacets",
            value: function getFacets() {
                return this.facets;
            }
        },
        {
            key: "getProgram",
            value: function getProgram() {
                return this.program;
            }
        },
        {
            key: "getRendererData",
            value: function getRendererData() {
                return this.rendererData;
            }
        },
        {
            key: "getRendererBuffers",
            value: function getRendererBuffers() {
                return this.rendererBuffers;
            }
        },
        {
            key: "getUniformLocations",
            value: function getUniformLocations() {
                return this.uniformLocations;
            }
        },
        {
            key: "getAttributeLocations",
            value: function getAttributeLocations() {
                return this.attributeLocations;
            }
        },
        {
            key: "getCount",
            value: function getCount() {
                return this.rendererData.getCount();
            }
        },
        {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
                return this.uniformLocations.getOffsetsMatrixUniformLocation();
            }
        },
        {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
                return this.uniformLocations.getNormalsMatrixUniformLocation();
            }
        },
        {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
                return this.uniformLocations.getPositionMatrixUniformLocation();
            }
        },
        {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
                return this.uniformLocations.getRotationsMatrixUniformLocation();
            }
        },
        {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
                return this.uniformLocations.getProjectionMatrixUniformLocation();
            }
        },
        {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
                return this.attributeLocations.getVertexPositionAttributeLocation();
            }
        },
        {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
                return this.attributeLocations.getVertexNormalAttributeLocation();
            }
        },
        {
            key: "addFacets",
            value: function addFacets(facets) {
                add(this.facets, facets);
            }
        }
    ]);
    return Renderer;
}();
exports.default = Renderer;
function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
    var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
    return program;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUE2REksYUFBYSxHQUFiLGFBQWE7O0lBM0RSLE1BQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVsQyxHQUFHLEdBRlksTUFBbUIsTUFFdEIsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRUEsUUFBUTthQUFSLFFBQVEsQ0FDZixNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCOzhCQUQ3RSxRQUFRO2FBRXBCLE1BQU0sR0FBRyxNQUFNO2FBQ2YsT0FBTyxHQUFHLE9BQU87YUFDakIsWUFBWSxHQUFHLFlBQVk7YUFDM0IsZUFBZSxHQUFHLGVBQWU7YUFDakMsZ0JBQWdCLEdBQUcsZ0JBQWdCO2FBQ25DLGtCQUFrQixHQUFHLGtCQUFrQjs7aUJBUDNCLFFBQVE7O1lBVTNCLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVM7NEJBQ0ssTUFBTTs7OztZQUdwQixHQUFVLEdBQVYsVUFBVTs0QkFBVixVQUFVOzRCQUNJLE9BQU87Ozs7WUFHckIsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZTs0QkFDRCxZQUFZOzs7O1lBRzFCLEdBQWtCLEdBQWxCLGtCQUFrQjs0QkFBbEIsa0JBQWtCOzRCQUNKLGVBQWU7Ozs7WUFHN0IsR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUI7NEJBQ0wsZ0JBQWdCOzs7O1lBRzlCLEdBQXFCLEdBQXJCLHFCQUFxQjs0QkFBckIscUJBQXFCOzRCQUNQLGtCQUFrQjs7OztZQUdoQyxHQUFRLEdBQVIsUUFBUTs0QkFBUixRQUFROzRCQUFpQixZQUFZLENBQUMsUUFBUTs7OztZQUU5QyxHQUErQixHQUEvQiwrQkFBK0I7NEJBQS9CLCtCQUErQjs0QkFBaUIsZ0JBQWdCLENBQUMsK0JBQStCOzs7O1lBRWhHLEdBQStCLEdBQS9CLCtCQUErQjs0QkFBL0IsK0JBQStCOzRCQUFpQixnQkFBZ0IsQ0FBQywrQkFBK0I7Ozs7WUFFaEcsR0FBZ0MsR0FBaEMsZ0NBQWdDOzRCQUFoQyxnQ0FBZ0M7NEJBQWlCLGdCQUFnQixDQUFDLGdDQUFnQzs7OztZQUVsRyxHQUFpQyxHQUFqQyxpQ0FBaUM7NEJBQWpDLGlDQUFpQzs0QkFBaUIsZ0JBQWdCLENBQUMsaUNBQWlDOzs7O1lBRXBHLEdBQWtDLEdBQWxDLGtDQUFrQzs0QkFBbEMsa0NBQWtDOzRCQUFpQixnQkFBZ0IsQ0FBQyxrQ0FBa0M7Ozs7WUFFdEcsR0FBa0MsR0FBbEMsa0NBQWtDOzRCQUFsQyxrQ0FBa0M7NEJBQWlCLGtCQUFrQixDQUFDLGtDQUFrQzs7OztZQUV4RyxHQUFnQyxHQUFoQyxnQ0FBZ0M7NEJBQWhDLGdDQUFnQzs0QkFBaUIsa0JBQWtCLENBQUMsZ0NBQWdDOzs7O1lBRXBHLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxNQUFNO2dCQUNkLEdBQUcsTUFBTSxNQUFNLEVBQUUsTUFBTTs7OztXQW5ETixRQUFROztrQkFBUixRQUFRO1NBdURiLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNO1FBQ3RFLFlBQVksR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLEdBQzNELGNBQWMsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEdBQ2pFLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxjQUFjO1dBRTFELE9BQU8ifQ==