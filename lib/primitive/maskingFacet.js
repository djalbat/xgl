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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIl0sIm5hbWVzIjpbIk1hc2tpbmdFZGdlIiwiVmVydGljYWxMaW5lIiwicm90YXRlVmVydGljZXMiLCJwdXNoIiwic2VwYXJhdGUiLCJWRVJUSUNFU19MRU5HVEgiLCJjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiIsIk1hc2tpbmdGYWNldCIsImNvbnN0cnVjdG9yIiwibWFza2luZ0VkZ2VzIiwidmVydGljYWxMaW5lcyIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0TWFza2luZ0VkZ2VzIiwiZ2V0VmVydGljYWxMaW5lcyIsImdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwibWFza0ZhY2V0IiwiZmFjZXQiLCJ1bm1hc2tlZEZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJ1bm1hc2tlZEZhY2V0IiwiY2xvbmUiLCJyb3RhdGUiLCJtYXNraW5nRmFjZXQiLCJzbWFsbGVyRmFjZXRzIiwic3BsaXRGYWNldCIsIm1hc2tlZFNtYWxsZXJGYWNldHMiLCJ1bm1hc2tlZFNtYWxsZXJGYWNldHMiLCJzbWFsbGVyRmFjZXQiLCJzbWFsbGVyRmFjZXRNYXNrZWQiLCJpc01hc2tlZCIsIm1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGgiLCJsZW5ndGgiLCJmb3JFYWNoIiwidW5tYXNrZWRTbWFsbGVyRmFjZXQiLCJmYWNldHMiLCJ2ZXJ0aWNhbExpbmUiLCJzcGxpdEZhY2V0cyIsImZyb21GYWNldCIsImZhY2V0Tm9ybWFsIiwiZ2V0Tm9ybWFsIiwiZmFjZXRWZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwibm9ybWFsIiwiYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXMiLCJjYWxjdWxhdGVNYXNraW5nRWRnZXMiLCJtYXAiLCJtYXNraW5nRWRnZSIsImZyb21NYXNraW5nRWRnZSIsInZlcnRleCIsImluZGV4Iiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3RhcnRWZXJ0ZXgiLCJlbmRWZXJ0ZXgiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBZ0IsQ0FBaEIsUUFBZ0I7QUFDZixHQUFnQixDQUFoQixhQUFnQjtBQUVWLEdBQXVCLENBQXZCLFNBQXVCO0FBQ3ZCLEdBQW9CLENBQXBCLE1BQW9CO0FBQ25CLEdBQWMsQ0FBZCxVQUFjO0FBQ2tGLEdBQXlCLENBQXpCLFdBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXBJLFlBQVksaUJBQWxCLFFBQVE7YUFBRixZQUFZLENBQ25CLFlBQVksRUFBRSxhQUFhLEVBQUUsMEJBQTBCLEVBQUUsMkJBQTJCOzhCQUQ3RSxZQUFZO1FBRTdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7UUFDbEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLDBCQUEwQjtRQUM1RCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsMkJBQTJCOztpQkFMN0MsWUFBWTs7WUFRL0IsR0FBZSxHQUFmLGVBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBZ0IsR0FBaEIsZ0JBQWdCO21CQUFoQixRQUFRLENBQVIsZ0JBQWdCLEdBQUcsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhO1lBQzNCLENBQUM7OztZQUVELEdBQTZCLEdBQTdCLDZCQUE2QjttQkFBN0IsUUFBUSxDQUFSLDZCQUE2QixHQUFHLENB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ckIsQ0FBQyxHQUNELDBCQUEwQixPQW5GNEYsV0FBeUIsc0NBbUY5RSxrQkFBa0IsR0FDbkYsMkJBQTJCLE9BcEYyRixXQUF5Qix1Q0FvRjVFLGtCQUFrQixHQUNyRixZQUFZLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLDBCQUEwQixFQUFFLDJCQUEyQjtnQkFFMUgsTUFBTSxDQUFDLFlBQVk7WUFDckIsQ0FBQzs7O1dBdEZrQixZQUFZOztrQkFBWixZQUFZO1NBeUZ4QixxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxHQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFQLE1BQU0sRUFBRSxLQUFLLEVBQUssQ0FBQztRQUM5QyxHQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssRUFDbEIsUUFBUSxJQUFJLFVBQVUsR0FBRyxDQUFDLElBL0ZWLFVBQWMsa0JBZ0c5QixXQUFXLEdBQUcsUUFBUSxDQUFDLFVBQVUsR0FDakMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQzdCLFdBQVcsR0F2R0gsUUFBZ0IsU0F1R0UsMkJBQTJCLENBQUMsV0FBVyxFQUFFLFNBQVM7UUFFbEYsTUFBTSxDQUFDLFdBQVc7SUFDcEIsQ0FBQztJQUVQLE1BQU0sQ0FBQyxZQUFZO0FBQ3JCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2tpbmdFZGdlIGZyb20gXCIuL2VkZ2UvbWFza2luZ1wiO1xuaW1wb3J0IFZlcnRpY2FsTGluZSBmcm9tIFwiLi92ZXJ0aWNhbExpbmVcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBwdXNoLCBzZXBhcmF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFZFUlRJQ0VTX0xFTkdUSCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVhdGVybmlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNraW5nRmFjZXQge1xuICBjb25zdHJ1Y3RvcihtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLm1hc2tpbmdFZGdlcyA9IG1hc2tpbmdFZGdlcztcbiAgICB0aGlzLnZlcnRpY2FsTGluZXMgPSB2ZXJ0aWNhbExpbmVzO1xuICAgIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgICB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldE1hc2tpbmdFZGdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXNraW5nRWRnZXM7XG4gIH1cblxuICBnZXRWZXJ0aWNhbExpbmVzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2FsTGluZXM7XG4gIH1cblxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBtYXNrRmFjZXQoZmFjZXQsIHVubWFza2VkRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldCA9IGZhY2V0LmNsb25lKCk7ICAvLy9cblxuICAgIGZhY2V0LnJvdGF0ZSh0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzbWFsbGVyRmFjZXRzID0gdGhpcy5zcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSxcbiAgICAgICAgICBtYXNrZWRTbWFsbGVyRmFjZXRzID0gW10sXG4gICAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzID0gW107XG5cbiAgICBzZXBhcmF0ZShzbWFsbGVyRmFjZXRzLCBtYXNrZWRTbWFsbGVyRmFjZXRzLCB1bm1hc2tlZFNtYWxsZXJGYWNldHMsIChzbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldE1hc2tlZCA9IHNtYWxsZXJGYWNldC5pc01hc2tlZChtYXNraW5nRmFjZXQpO1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9IG1hc2tlZFNtYWxsZXJGYWNldHMubGVuZ3RoO1xuXG4gICAgaWYgKG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPT09IDApIHtcbiAgICAgIHVubWFza2VkRmFjZXRzLnB1c2godW5tYXNrZWRGYWNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cy5mb3JFYWNoKCh1bm1hc2tlZFNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgICAgfSk7XG5cbiAgICAgIHB1c2godW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iXX0=