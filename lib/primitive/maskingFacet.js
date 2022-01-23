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
var MaskingFacet = /*#__PURE__*/ function() {
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
            value: function maskFacet(facet, unmaskedFacets, marginOfError) {
                var unmaskedFacet = facet.clone(); ///
                facet.rotate(this.forwardsRotationQuaternion);
                var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
                (0, _array).separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                    var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                    return smallerFacetMasked;
                });
                var maskedSmallerFacetsLength = maskedSmallerFacets.length;
                if (maskedSmallerFacetsLength === 0) {
                    unmaskedFacets.push(unmaskedFacet);
                } else {
                    var _this = this;
                    unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                        unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
                    });
                    (0, _array).push(unmaskedFacets, unmaskedSmallerFacets);
                }
            }
        },
        {
            key: "splitFacet",
            value: function splitFacet(facet, marginOfError) {
                var facets = [
                    facet
                ], smallerFacets = facets; ///
                this.verticalLines.forEach(function(verticalLine) {
                    smallerFacets = verticalLine.splitFacets(facets, marginOfError);
                    facets = smallerFacets; ///
                });
                return smallerFacets;
            }
        }
    ], [
        {
            key: "fromFacet",
            value: function fromFacet(facet) {
                var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion).calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices).rotateVertices(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                    var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                    return verticalLine;
                }), forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IHB1c2gsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiJdLCJuYW1lcyI6WyJNYXNraW5nRmFjZXQiLCJtYXNraW5nRWRnZXMiLCJ2ZXJ0aWNhbExpbmVzIiwiZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRNYXNraW5nRWRnZXMiLCJnZXRWZXJ0aWNhbExpbmVzIiwiZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJtYXNrRmFjZXQiLCJmYWNldCIsInVubWFza2VkRmFjZXRzIiwibWFyZ2luT2ZFcnJvciIsInVubWFza2VkRmFjZXQiLCJjbG9uZSIsInJvdGF0ZSIsIm1hc2tpbmdGYWNldCIsInNtYWxsZXJGYWNldHMiLCJzcGxpdEZhY2V0IiwibWFza2VkU21hbGxlckZhY2V0cyIsInVubWFza2VkU21hbGxlckZhY2V0cyIsInNtYWxsZXJGYWNldCIsInNtYWxsZXJGYWNldE1hc2tlZCIsImlzTWFza2VkIiwibWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJmb3JFYWNoIiwidW5tYXNrZWRTbWFsbGVyRmFjZXQiLCJmYWNldHMiLCJ2ZXJ0aWNhbExpbmUiLCJzcGxpdEZhY2V0cyIsImZyb21GYWNldCIsImZhY2V0Tm9ybWFsIiwiZ2V0Tm9ybWFsIiwiZmFjZXRWZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwibm9ybWFsIiwiYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXMiLCJjYWxjdWxhdGVNYXNraW5nRWRnZXMiLCJtYXAiLCJtYXNraW5nRWRnZSIsImZyb21NYXNraW5nRWRnZSIsInZlcnRleCIsImluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVksR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDZixHQUFnQixDQUFoQixhQUFnQjtBQUVWLEdBQXVCLENBQXZCLFNBQXVCO0FBQ3ZCLEdBQW9CLENBQXBCLE1BQW9CO0FBQ25CLEdBQWMsQ0FBZCxVQUFjO0FBQ2tGLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBJQSxZQUFZLGlCQUFsQixRQUFRO2FBQUZBLFlBQVksQ0FDbkJDLFlBQVksRUFBRUMsYUFBYSxFQUFFQywwQkFBMEIsRUFBRUMsMkJBQTJCOztRQUM5RixJQUFJLENBQUNILFlBQVksR0FBR0EsWUFBWTtRQUNoQyxJQUFJLENBQUNDLGFBQWEsR0FBR0EsYUFBYTtRQUNsQyxJQUFJLENBQUNDLDBCQUEwQixHQUFHQSwwQkFBMEI7UUFDNUQsSUFBSSxDQUFDQywyQkFBMkIsR0FBR0EsMkJBQTJCOzs7O1lBR2hFQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxHQUFHLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUNKLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRURLLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FB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