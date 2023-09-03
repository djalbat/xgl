"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return Renderer;
    },
    createProgram: function() {
        return createProgram;
    }
});
var _array = require("./utilities/array");
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
var add = _array.push; ///
var Renderer = /*#__PURE__*/ function() {
    function Renderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
        _class_call_check(this, Renderer);
        this.facets = facets;
        this.program = program;
        this.rendererData = rendererData;
        this.rendererBuffers = rendererBuffers;
        this.uniformLocations = uniformLocations;
        this.attributeLocations = attributeLocations;
    }
    _create_class(Renderer, [
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
function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
    var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
    return program;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyZXIge1xuICBjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMpIHtcbiAgICB0aGlzLmZhY2V0cyA9IGZhY2V0cztcbiAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIHRoaXMucmVuZGVyZXJEYXRhID0gcmVuZGVyZXJEYXRhO1xuICAgIHRoaXMucmVuZGVyZXJCdWZmZXJzID0gcmVuZGVyZXJCdWZmZXJzO1xuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHVuaWZvcm1Mb2NhdGlvbnM7XG4gICAgdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMgPSBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0UHJvZ3JhbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9ncmFtO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckRhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhO1xuICB9XG4gIFxuICBnZXRSZW5kZXJlckJ1ZmZlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyZXJCdWZmZXJzO1xuICB9XG5cbiAgZ2V0VW5pZm9ybUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldENvdW50KCkgeyByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGEuZ2V0Q291bnQoKTsgfVxuXG4gIGdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpOyB9XG5cbiAgYWRkRmFjZXRzKGZhY2V0cykge1xuICAgIGFkZCh0aGlzLmZhY2V0cywgZmFjZXRzKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY2FudmFzLmNyZWF0ZVZlcnRleFNoYWRlcih2ZXJ0ZXhTaGFkZXJTb3VyY2UpLFxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IGNhbnZhcy5jcmVhdGVGcmFnbWVudFNoYWRlcihmcmFnbWVudFNoYWRlclNvdXJjZSksXG4gICAgICAgIHByb2dyYW0gPSBjYW52YXMuY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgXG4gIHJldHVybiBwcm9ncmFtO1xufVxuIl0sIm5hbWVzIjpbIlJlbmRlcmVyIiwiY3JlYXRlUHJvZ3JhbSIsImFkZCIsInB1c2giLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImdldEZhY2V0cyIsImdldFByb2dyYW0iLCJnZXRSZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0Q291bnQiLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImFkZEZhY2V0cyIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY2FudmFzIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlVmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjcmVhdGVGcmFnbWVudFNoYWRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQU1xQkE7O0lBdURMQyxhQUFhO2VBQWJBOzs7cUJBM0RLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQixJQUFNQyxNQUFNQyxXQUFJLEVBQUUsR0FBRztBQUVOLElBQUEsQUFBTUgseUJBdURsQixBQXZEWTthQUFNQSxTQUNQSSxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUFFQyxrQkFBa0I7Z0NBRDdFVDtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO1FBQ3hCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOztrQkFQVFQ7O1lBVW5CVSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFlBQVk7WUFDMUI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLGVBQWU7WUFDN0I7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLGdCQUFnQjtZQUM5Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sa0JBQWtCO1lBQ2hDOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFhLE9BQU8sSUFBSSxDQUFDVixZQUFZLENBQUNVLFFBQVE7WUFBSTs7O1lBRWxEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQW9DLE9BQU8sSUFBSSxDQUFDVCxnQkFBZ0IsQ0FBQ1MsK0JBQStCO1lBQUk7OztZQUVwR0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUFvQyxPQUFPLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUNVLCtCQUErQjtZQUFJOzs7WUFFcEdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBcUMsT0FBTyxJQUFJLENBQUNYLGdCQUFnQixDQUFDVyxnQ0FBZ0M7WUFBSTs7O1lBRXRHQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXNDLE9BQU8sSUFBSSxDQUFDWixnQkFBZ0IsQ0FBQ1ksaUNBQWlDO1lBQUk7OztZQUV4R0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUF1QyxPQUFPLElBQUksQ0FBQ2IsZ0JBQWdCLENBQUNhLGtDQUFrQztZQUFJOzs7WUFFMUdDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBdUMsT0FBTyxJQUFJLENBQUNiLGtCQUFrQixDQUFDYSxrQ0FBa0M7WUFBSTs7O1lBRTVHQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQXFDLE9BQU8sSUFBSSxDQUFDZCxrQkFBa0IsQ0FBQ2MsZ0NBQWdDO1lBQUk7OztZQUV4R0MsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVwQixNQUFNO2dCQUNkRixJQUFJLElBQUksQ0FBQ0UsTUFBTSxFQUFFQTtZQUNuQjs7O1dBcERtQko7O0FBdURkLFNBQVNDLGNBQWN3QixrQkFBa0IsRUFBRUMsb0JBQW9CLEVBQUVDLE1BQU07SUFDNUUsSUFBTUMsZUFBZUQsT0FBT0Usa0JBQWtCLENBQUNKLHFCQUN6Q0ssaUJBQWlCSCxPQUFPSSxvQkFBb0IsQ0FBQ0wsdUJBQzdDckIsVUFBVXNCLE9BQU8xQixhQUFhLENBQUMyQixjQUFjRTtJQUVuRCxPQUFPekI7QUFDVCJ9