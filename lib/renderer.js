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
    createProgram: function() {
        return createProgram;
    },
    default: function() {
        return Renderer;
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
                (0, _array.add)(this.facets, facets);
            }
        }
    ]);
    return Renderer;
}();
function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
    var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
    return program;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZW5kZXJlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVQcm9ncmFtIiwiUmVuZGVyZXIiLCJmYWNldHMiLCJwcm9ncmFtIiwicmVuZGVyZXJEYXRhIiwicmVuZGVyZXJCdWZmZXJzIiwidW5pZm9ybUxvY2F0aW9ucyIsImF0dHJpYnV0ZUxvY2F0aW9ucyIsImdldEZhY2V0cyIsImdldFByb2dyYW0iLCJnZXRSZW5kZXJlckRhdGEiLCJnZXRSZW5kZXJlckJ1ZmZlcnMiLCJnZXRVbmlmb3JtTG9jYXRpb25zIiwiZ2V0QXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0Q291bnQiLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImFkZEZhY2V0cyIsImFkZCIsInZlcnRleFNoYWRlclNvdXJjZSIsImZyYWdtZW50U2hhZGVyU291cmNlIiwiY2FudmFzIiwidmVydGV4U2hhZGVyIiwiY3JlYXRl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