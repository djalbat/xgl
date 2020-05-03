"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProgram = createProgram;
exports["default"] = void 0;

var _array = require("./utilities/array");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var add = _array.push; ///

var Renderer = /*#__PURE__*/function () {
  function Renderer(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
    _classCallCheck(this, Renderer);

    this.facets = facets;
    this.program = program;
    this.rendererData = rendererData;
    this.rendererBuffers = rendererBuffers;
    this.uniformLocations = uniformLocations;
    this.attributeLocations = attributeLocations;
  }

  _createClass(Renderer, [{
    key: "getFacets",
    value: function getFacets() {
      return this.facets;
    }
  }, {
    key: "getProgram",
    value: function getProgram() {
      return this.program;
    }
  }, {
    key: "getRendererData",
    value: function getRendererData() {
      return this.rendererData;
    }
  }, {
    key: "getRendererBuffers",
    value: function getRendererBuffers() {
      return this.rendererBuffers;
    }
  }, {
    key: "getUniformLocations",
    value: function getUniformLocations() {
      return this.uniformLocations;
    }
  }, {
    key: "getAttributeLocations",
    value: function getAttributeLocations() {
      return this.attributeLocations;
    }
  }, {
    key: "getCount",
    value: function getCount() {
      return this.rendererData.getCount();
    }
  }, {
    key: "getOffsetsMatrixUniformLocation",
    value: function getOffsetsMatrixUniformLocation() {
      return this.uniformLocations.getOffsetsMatrixUniformLocation();
    }
  }, {
    key: "getNormalsMatrixUniformLocation",
    value: function getNormalsMatrixUniformLocation() {
      return this.uniformLocations.getNormalsMatrixUniformLocation();
    }
  }, {
    key: "getPositionMatrixUniformLocation",
    value: function getPositionMatrixUniformLocation() {
      return this.uniformLocations.getPositionMatrixUniformLocation();
    }
  }, {
    key: "getRotationsMatrixUniformLocation",
    value: function getRotationsMatrixUniformLocation() {
      return this.uniformLocations.getRotationsMatrixUniformLocation();
    }
  }, {
    key: "getProjectionMatrixUniformLocation",
    value: function getProjectionMatrixUniformLocation() {
      return this.uniformLocations.getProjectionMatrixUniformLocation();
    }
  }, {
    key: "getVertexPositionAttributeLocation",
    value: function getVertexPositionAttributeLocation() {
      return this.attributeLocations.getVertexPositionAttributeLocation();
    }
  }, {
    key: "getVertexNormalAttributeLocation",
    value: function getVertexNormalAttributeLocation() {
      return this.attributeLocations.getVertexNormalAttributeLocation();
    }
  }, {
    key: "addFacets",
    value: function addFacets(facets) {
      add(this.facets, facets);
    }
  }]);

  return Renderer;
}();

exports["default"] = Renderer;

function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
  var vertexShader = canvas.createVertexShader(vertexShaderSource),
      fragmentShader = canvas.createFragmentShader(fragmentShaderSource),
      program = canvas.createProgram(vertexShader, fragmentShader);
  return program;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZCIsInB1c2giLCJSZW5kZXJlciIsImZhY2V0cyIsInByb2dyYW0iLCJyZW5kZXJlckRhdGEiLCJyZW5kZXJlckJ1ZmZlcnMiLCJ1bmlmb3JtTG9jYXRpb25zIiwiYXR0cmlidXRlTG9jYXRpb25zIiwiZ2V0Q291bnQiLCJnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uIiwiZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiIsImdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24iLCJnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiIsImNyZWF0ZVByb2dyYW0iLCJ2ZXJ0ZXhTaGFkZXJTb3VyY2UiLCJmcmFnbWVudFNoYWRlclNvdXJjZSIsImNhbnZhcyIsInZlcnRleFNoYWRlciIsImNyZWF0ZVZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiY3JlYXRlRnJhZ21lbnRTaGFkZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsV0FBWixDLENBQWtCOztJQUVHQyxRO0FBQ25CLG9CQUFZQyxNQUFaLEVBQW9CQyxPQUFwQixFQUE2QkMsWUFBN0IsRUFBMkNDLGVBQTNDLEVBQTREQyxnQkFBNUQsRUFBOEVDLGtCQUE5RSxFQUFrRztBQUFBOztBQUNoRyxTQUFLTCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFNBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0wsTUFBWjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtDLE9BQVo7QUFDRDs7O3NDQUVpQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7O3lDQUVvQjtBQUNuQixhQUFPLEtBQUtDLGVBQVo7QUFDRDs7OzBDQUVxQjtBQUNwQixhQUFPLEtBQUtDLGdCQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7K0JBRVU7QUFBRSxhQUFPLEtBQUtILFlBQUwsQ0FBa0JJLFFBQWxCLEVBQVA7QUFBc0M7OztzREFFakI7QUFBRSxhQUFPLEtBQUtGLGdCQUFMLENBQXNCRywrQkFBdEIsRUFBUDtBQUFpRTs7O3NEQUVuRTtBQUFFLGFBQU8sS0FBS0gsZ0JBQUwsQ0FBc0JJLCtCQUF0QixFQUFQO0FBQWlFOzs7dURBRWxFO0FBQUUsYUFBTyxLQUFLSixnQkFBTCxDQUFzQkssZ0NBQXRCLEVBQVA7QUFBa0U7Ozt3REFFbkU7QUFBRSxhQUFPLEtBQUtMLGdCQUFMLENBQXNCTSxpQ0FBdEIsRUFBUDtBQUFtRTs7O3lEQUVwRTtBQUFFLGFBQU8sS0FBS04sZ0JBQUwsQ0FBc0JPLGtDQUF0QixFQUFQO0FBQW9FOzs7eURBRXRFO0FBQUUsYUFBTyxLQUFLTixrQkFBTCxDQUF3Qk8sa0NBQXhCLEVBQVA7QUFBc0U7Ozt1REFFMUU7QUFBRSxhQUFPLEtBQUtQLGtCQUFMLENBQXdCUSxnQ0FBeEIsRUFBUDtBQUFvRTs7OzhCQUUvRmIsTSxFQUFRO0FBQ2hCSCxNQUFBQSxHQUFHLENBQUMsS0FBS0csTUFBTixFQUFjQSxNQUFkLENBQUg7QUFDRDs7Ozs7Ozs7QUFHSSxTQUFTYyxhQUFULENBQXVCQyxrQkFBdkIsRUFBMkNDLG9CQUEzQyxFQUFpRUMsTUFBakUsRUFBeUU7QUFDOUUsTUFBTUMsWUFBWSxHQUFHRCxNQUFNLENBQUNFLGtCQUFQLENBQTBCSixrQkFBMUIsQ0FBckI7QUFBQSxNQUNNSyxjQUFjLEdBQUdILE1BQU0sQ0FBQ0ksb0JBQVAsQ0FBNEJMLG9CQUE1QixDQUR2QjtBQUFBLE1BRU1mLE9BQU8sR0FBR2dCLE1BQU0sQ0FBQ0gsYUFBUCxDQUFxQkksWUFBckIsRUFBbUNFLGNBQW5DLENBRmhCO0FBSUEsU0FBT25CLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucykge1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgdGhpcy5yZW5kZXJlckRhdGEgPSByZW5kZXJlckRhdGE7XG4gICAgdGhpcy5yZW5kZXJlckJ1ZmZlcnMgPSByZW5kZXJlckJ1ZmZlcnM7XG4gICAgdGhpcy51bmlmb3JtTG9jYXRpb25zID0gdW5pZm9ybUxvY2F0aW9ucztcbiAgICB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucyA9IGF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEZhY2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldHM7XG4gIH1cblxuICBnZXRQcm9ncmFtKCkge1xuICAgIHJldHVybiB0aGlzLnByb2dyYW07XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckRhdGE7XG4gIH1cbiAgXG4gIGdldFJlbmRlcmVyQnVmZmVycygpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJlckJ1ZmZlcnM7XG4gIH1cblxuICBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnM7XG4gIH1cblxuICBnZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7IHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YS5nZXRDb3VudCgpOyB9XG5cbiAgZ2V0T2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCk7IH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLmF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBnZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCk7IH1cblxuICBhZGRGYWNldHMoZmFjZXRzKSB7XG4gICAgYWRkKHRoaXMuZmFjZXRzLCBmYWNldHMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlclNvdXJjZSwgZnJhZ21lbnRTaGFkZXJTb3VyY2UsIGNhbnZhcykge1xuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjYW52YXMuY3JlYXRlVmVydGV4U2hhZGVyKHZlcnRleFNoYWRlclNvdXJjZSksXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gY2FudmFzLmNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlKSxcbiAgICAgICAgcHJvZ3JhbSA9IGNhbnZhcy5jcmVhdGVQcm9ncmFtKHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICBcbiAgcmV0dXJuIHByb2dyYW07XG59XG4iXX0=