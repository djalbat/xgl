"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MaskingFacet;
    }
});
var _masking = /*#__PURE__*/ _interop_require_default(require("./edge/masking"));
var _verticalLine = /*#__PURE__*/ _interop_require_default(require("./verticalLine"));
var _array = require("../utilities/array");
var _vertices = require("../utilities/vertices");
var _constants = require("../constants");
var _quaternion = require("../utilities/quaternion");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var MaskingFacet = /*#__PURE__*/ function() {
    function MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
        _class_call_check(this, MaskingFacet);
        this.maskingEdges = maskingEdges;
        this.verticalLines = verticalLines;
        this.forwardsRotationQuaternion = forwardsRotationQuaternion;
        this.backwardsRotationQuaternion = backwardsRotationQuaternion;
    }
    _create_class(MaskingFacet, [
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
                var _this = this;
                var unmaskedFacet = facet.clone(); ///
                facet.rotate(this.forwardsRotationQuaternion);
                var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
                (0, _array.separate)(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                    var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                    return smallerFacetMasked;
                });
                var maskedSmallerFacetsLength = maskedSmallerFacets.length;
                if (maskedSmallerFacetsLength === 0) {
                    unmaskedFacets.push(unmaskedFacet);
                } else {
                    unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                        unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
                    });
                    (0, _array.add)(unmaskedFacets, unmaskedSmallerFacets);
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
                var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion.calculateArbitraryRotationQuaternion)(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices.rotateVertices)(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                    var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                    return verticalLine;
                }), forwardsRotationQuaternion = (0, _quaternion.calculateForwardsRotationQuaternion)(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion.calculateBackwardsRotationQuaternion)(rotationQuaternion), maskingFacet = new MaskingFacet(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
                return maskingFacet;
            }
        }
    ]);
    return MaskingFacet;
}();
function calculateMaskingEdges(vertices) {
    var maskingEdges = vertices.map(function(vertex, index) {
        var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking.default.fromStartVertexAndEndVertex(startVertex, endVertex);
        return maskingEdge;
    });
    return maskingEdges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyBhZGQsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFza2luZ0ZhY2V0IHtcbiAgY29uc3RydWN0b3IobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy5tYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXM7XG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzID0gdmVydGljYWxMaW5lcztcbiAgICB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gICAgdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRNYXNraW5nRWRnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza2luZ0VkZ2VzO1xuICB9XG5cbiAgZ2V0VmVydGljYWxMaW5lcygpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbExpbmVzO1xuICB9XG5cbiAgZ2V0Rm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgbWFza0ZhY2V0KGZhY2V0LCB1bm1hc2tlZEZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHVubWFza2VkRmFjZXQgPSBmYWNldC5jbG9uZSgpOyAgLy8vXG5cbiAgICBmYWNldC5yb3RhdGUodGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICBjb25zdCBtYXNraW5nRmFjZXQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc21hbGxlckZhY2V0cyA9IHRoaXMuc3BsaXRGYWNldChmYWNldCwgbWFyZ2luT2ZFcnJvciksXG4gICAgICAgICAgbWFza2VkU21hbGxlckZhY2V0cyA9IFtdLFxuICAgICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0cyA9IFtdO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCAoc21hbGxlckZhY2V0KSA9PiB7XG4gICAgICBjb25zdCBzbWFsbGVyRmFjZXRNYXNrZWQgPSBzbWFsbGVyRmFjZXQuaXNNYXNrZWQobWFza2luZ0ZhY2V0KTtcblxuICAgICAgcmV0dXJuIHNtYWxsZXJGYWNldE1hc2tlZDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hc2tlZFNtYWxsZXJGYWNldHNMZW5ndGggPSBtYXNrZWRTbWFsbGVyRmFjZXRzLmxlbmd0aDtcblxuICAgIGlmIChtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID09PSAwKSB7XG4gICAgICB1bm1hc2tlZEZhY2V0cy5wdXNoKHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaCgodW5tYXNrZWRTbWFsbGVyRmFjZXQpID0+IHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBhZGQodW5tYXNrZWRGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgbGV0IGZhY2V0cyA9IFtcbiAgICAgICAgICBmYWNldFxuICAgICAgICBdLFxuICAgICAgICBzbWFsbGVyRmFjZXRzID0gZmFjZXRzOyAvLy9cblxuICAgIHRoaXMudmVydGljYWxMaW5lcy5mb3JFYWNoKCh2ZXJ0aWNhbExpbmUpID0+IHtcbiAgICAgIHNtYWxsZXJGYWNldHMgPSB2ZXJ0aWNhbExpbmUuc3BsaXRGYWNldHMoZmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcblxuICAgICAgZmFjZXRzID0gc21hbGxlckZhY2V0czsgLy8vXG4gICAgfSk7XG5cbiAgICByZXR1cm4gc21hbGxlckZhY2V0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBmYWNldE5vcm1hbCA9IGZhY2V0LmdldE5vcm1hbCgpLFxuICAgICAgICAgIGZhY2V0VmVydGljZXMgPSBmYWNldC5nZXRWZXJ0aWNlcygpLFxuICAgICAgICAgIG5vcm1hbCA9IGZhY2V0Tm9ybWFsLCAvLy9cbiAgICAgICAgICBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24sIC8vL1xuICAgICAgICAgIHZlcnRpY2VzID0gcm90YXRlVmVydGljZXMoZmFjZXRWZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBtYXNraW5nRWRnZXMgPSBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpLFxuICAgICAgICAgIHZlcnRpY2FsTGluZXMgPSBtYXNraW5nRWRnZXMubWFwKChtYXNraW5nRWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxMaW5lID0gVmVydGljYWxMaW5lLmZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQobWFza2luZ0VkZ2VzLCB2ZXJ0aWNhbExpbmVzLCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTWFza2luZ0VkZ2VzKHZlcnRpY2VzKSB7XG4gIGNvbnN0IG1hc2tpbmdFZGdlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBpbmRleCxcbiAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSBWRVJUSUNFU19MRU5HVEgsXG4gICAgICAgICAgICAgICAgc3RhcnRWZXJ0ZXggPSB2ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB2ZXJ0aWNlc1tlbmRJbmRleF0sXG4gICAgICAgICAgICAgICAgbWFza2luZ0VkZ2UgPSBNYXNraW5nRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICAgICAgICByZXR1cm4gbWFza2luZ0VkZ2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBtYXNraW5nRWRnZXM7XG59XG4iXSwibmFtZXMiOlsiTWFza2luZ0ZhY2V0IiwibWFza2luZ0VkZ2VzIiwidmVydGljYWxMaW5lcyIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0TWFza2luZ0VkZ2VzIiwiZ2V0VmVydGljYWxMaW5lcyIsImdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwibWFza0ZhY2V0IiwiZmFjZXQiLCJ1bm1hc2tlZEZhY2V0cyIsIm1hcmdpbk9mRXJyb3IiLCJ1bm1hc2tlZEZhY2V0IiwiY2xvbmUiLCJyb3RhdGUiLCJtYXNraW5nRmFjZXQiLCJzbWFsbGVyRmFjZXRzIiwic3BsaXRGYWNldCIsIm1hc2tlZFNtYWxsZXJGYWNldHMiLCJ1bm1hc2tlZFNtYWxsZXJGYWNldHMiLCJzZXBhcmF0ZSIsInNtYWxsZXJGYWNldCIsInNtYWxsZXJGYWNldE1hc2tlZCIsImlzTWFza2VkIiwibWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCIsImxlbmd0aCIsInB1c2giLCJmb3JFYWNoIiwidW5tYXNrZWRTbWFsbGVyRmFjZXQiLCJhZGQiLCJmYWNldHMiLCJ2ZXJ0aWNhbExpbmUiLCJzcGxpdEZhY2V0cyIsImZyb21GYWNldCIsImZhY2V0Tm9ybWFsIiwiZ2V0Tm9ybWFsIiwiZmFjZXRWZXJ0aWNlcyIsImdldFZlcnRpY2VzIiwibm9ybWFsIiwiYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlQXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRpb25RdWF0ZXJuaW9uIiwidmVydGljZXMiLCJyb3RhdGVWZXJ0aWNlcyIsImNhbGN1bGF0ZU1hc2tpbmdFZGdlcyIsIm1hcCIsIm1hc2tpbmdFZGdlIiwiVmVydGljYWxMaW5lIiwiZnJvbU1hc2tpbmdFZGdlIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsIlZFUlRJQ0VTX0xFTkdUSCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwiTWFza2luZ0VkZ2UiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzhEQVJHO21FQUNDO3FCQUVLO3dCQUNDO3lCQUNDOzBCQUNnRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqSCxJQUFBLEFBQU1BLDZCQUFOO2FBQU1BLGFBQ1BDLFlBQVksRUFBRUMsYUFBYSxFQUFFQywwQkFBMEIsRUFBRUMsMkJBQTJCO2dDQUQ3RUo7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLDBCQUEwQixHQUFHQTtRQUNsQyxJQUFJLENBQUNDLDJCQUEyQixHQUFHQTs7a0JBTGxCSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osWUFBWTtZQUMxQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FB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