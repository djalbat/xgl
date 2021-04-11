"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _masking = _interopRequireDefault(require("./edge/masking"));
var _verticalLine = _interopRequireDefault(require("./verticalLine"));
var _vertices = require("../utilities/vertices");
var _array = require("../utilities/array");
var _constants = require("../constants");
var _quaternion = require("../utilities/quaternion");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MaskingFacet = function() {
    function MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
        _classCallCheck(this, MaskingFacet);
        this.maskingEdges = maskingEdges;
        this.verticalLines = verticalLines;
        this.forwardsRotationQuaternion = forwardsRotationQuaternion;
        this.backwardsRotationQuaternion = backwardsRotationQuaternion;
    }
    _createClass(MaskingFacet, [
        {
            key: "getMaskingEdges",
            value: function getMaskingEdges() {
                return this.maskingEdges;
            }
        },
        {
            key: "getVerticalLines",
            value: function getVerticalLines() {
                return this.verticalLines;
            }
        },
        {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
                return this.forwardsRotationQuaternion;
            }
        },
        {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
                return this.backwardsRotationQuaternion;
            }
        },
        {
            key: "maskFacet",
            value: function maskFacet(facet, unmaskedFacets) {
                var unmaskedFacet = facet.clone(); ///
                facet.rotate(this.forwardsRotationQuaternion);
                var maskingFacet = this, smallerFacets = this.splitFacet(facet), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
                _array.separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                    var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                    return smallerFacetMasked;
                });
                var maskedSmallerFacetsLength = maskedSmallerFacets.length;
                if (maskedSmallerFacetsLength === 0) {
                    unmaskedFacets.push(unmaskedFacet);
                } else {
                    unmaskedSmallerFacets.forEach((function(unmaskedSmallerFacet) {
                        unmaskedSmallerFacet.rotate(this.backwardsRotationQuaternion);
                    }).bind(this));
                    _array.push(unmaskedFacets, unmaskedSmallerFacets);
                }
            }
        },
        {
            key: "splitFacet",
            value: function splitFacet(facet) {
                var facets = [
                    facet
                ], smallerFacets = facets; ///
                this.verticalLines.forEach(function(verticalLine) {
                    smallerFacets = verticalLine.splitFacets(facets);
                    facets = smallerFacets; ///
                });
                return smallerFacets;
            }
        }
    ], [
        {
            key: "fromFacet",
            value: function fromFacet(facet) {
                var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = _quaternion.calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = _vertices.rotateVertices(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                    var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                    return verticalLine;
                }), forwardsRotationQuaternion = _quaternion.calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = _quaternion.calculateBackwardsRotationQuaternion(rotationQuaternion), maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
                return maskingFacet;
            }
        }
    ]);
    return MaskingFacet;
}();
exports.default = MaskingFacet;
function calculateMaskingEdges(vertices) {
    var maskingEdges = vertices.map(function(vertex, index) {
        var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking.default.fromStartVertexAndEndVertex(startVertex, endVertex);
        return maskingEdge;
    });
    return maskingEdges;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IHB1c2gsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVZLFFBQWdCO0lBQ2YsYUFBZ0I7SUFFVixTQUF1QjtJQUN2QixNQUFvQjtJQUNuQixVQUFjO0lBQ2tGLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBJLFlBQVk7YUFBWixZQUFZLENBQ25CLFlBQVksRUFBRSxhQUFhLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCOzhCQUQ3RSxZQUFZO2FBRXhCLFlBQVksR0FBRyxZQUFZO2FBQzNCLGFBQWEsR0FBRyxhQUFhO2FBQzdCLDBCQUEwQixHQUFHLDBCQUEwQjthQUN2RCwyQkFBMkIsR0FBRywyQkFBMkI7O2lCQUw3QyxZQUFZOztZQVEvQixHQUFlLEdBQWYsZUFBZTs0QkFBZixlQUFlOzRCQUNELFlBQVk7Ozs7WUFHMUIsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0I7NEJBQ0YsYUFBYTs7OztZQUczQixHQUE2QixHQUE3Qiw2QkFBNkI7NEJBQTdCLDZCQUE2Qjs0QkFDZiwwQkFBMEI7Ozs7WUFHeEMsR0FBOEIsR0FBOUIsOEJBQThCOzRCQUE5Qiw4QkFBOEI7NEJBQ2hCLDJCQUEyQjs7OztZQUd6QyxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLENBQUMsS0FBSyxFQUFFLGNBQWM7b0JBQ3ZCLGFBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFLLENBQUcs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