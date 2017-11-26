'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('../facet'),
    EdgeInXYPlane = require('./edgeInXYPlane'),
    arrayUtilities = require('../utilities/array'),
    verticesUtilities = require('../utilities/vertices'),
    rotationUtilities = require('../utilities/rotation'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane');

var separate = arrayUtilities.separate,
    push = arrayUtilities.push,
    calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateRotationQuaternion = rotationUtilities.calculateRotationQuaternion,
    calculateForwardsRotationQuaternion = rotationUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = rotationUtilities.calculateBackwardsRotationQuaternion;

var MaskingFacet = function (_Facet) {
  _inherits(MaskingFacet, _Facet);

  function MaskingFacet(vertices, normal, rotationQuaternion) {
    _classCallCheck(this, MaskingFacet);

    var _this = _possibleConstructorReturn(this, (MaskingFacet.__proto__ || Object.getPrototypeOf(MaskingFacet)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;
    return _this;
  }

  _createClass(MaskingFacet, [{
    key: 'getRotationQuaternion',
    value: function getRotationQuaternion() {
      return this.rotationQuaternion;
    }
  }, {
    key: 'getEdgesInXYPlane',
    value: function getEdgesInXYPlane() {
      var verticesLength = 3,
          ///
      edgesInXYPlane = this.vertices.map(function (vertex, index) {
        var startIndex = index,
            endIndex = (startIndex + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            edgeInXYPlane = EdgeInXYPlane.fromStartVertexInXYPlaneAndEndVertexInXYPlane(startVertex, endVertex);

        return edgeInXYPlane;
      }.bind(this));

      return edgesInXYPlane;
    }
  }, {
    key: 'maskFacet',
    value: function maskFacet(facet, unmaskedFacets) {
      var unmaskedFacet = facet.clone(),
          forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

      facet.rotate(forwardsRotationQuaternion);

      var smallerFacets = this.splitFacet(facet),
          maskedSmallerFacets = [],
          unmaskedSmallerFacets = [];

      this.separateSmallerFacets(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets);

      var maskedSmallerFacetsLength = maskedSmallerFacets.length;

      if (maskedSmallerFacetsLength === 0) {
        unmaskedFacets.push(unmaskedFacet);
      } else {
        unmaskedSmallerFacets.forEach(function (unmaskedSmallerFacet) {
          unmaskedSmallerFacet.rotate(backwardsRotationQuaternion);
        });

        push(unmaskedFacets, unmaskedSmallerFacets);
      }
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var edgesInXYPlane = this.getEdgesInXYPlane();

      var facets = [facet],
          smallerFacets = facets; ///

      edgesInXYPlane.forEach(function (edgeInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromEdgeInXYPlane(edgeInXYPlane);

        smallerFacets = verticalLineInXYPlane.splitFacets(facets);

        facets = smallerFacets; ///
      });

      return smallerFacets;
    }
  }, {
    key: 'separateSmallerFacets',
    value: function separateSmallerFacets(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets) {
      var edgesInXYPlane = this.getEdgesInXYPlane();

      separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function (smallerFacet) {
        var smallerFacetInsideEdgesInXYPlane = smallerFacet.isInsideEdgesInXYPlane(edgesInXYPlane),
            smallerFacetMasked = smallerFacetInsideEdgesInXYPlane; ///

        return smallerFacetMasked;
      });
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      normal = calculateNormal(vertices);

      var maskingFacet = new MaskingFacet(vertices, normal, rotationQuaternion);

      return maskingFacet;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var facet = Facet.fromVertices(vertices),
          maskingFacet = MaskingFacet.fromFacet(facet);

      return maskingFacet;
    }
  }]);

  return MaskingFacet;
}(Facet);

module.exports = MaskingFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9mYWNldC9tYXNraW5nLmpzIl0sIm5hbWVzIjpbIkZhY2V0IiwicmVxdWlyZSIsIkVkZ2VJblhZUGxhbmUiLCJhcnJheVV0aWxpdGllcyIsInZlcnRpY2VzVXRpbGl0aWVzIiwicm90YXRpb25VdGlsaXRpZXMiLCJWZXJ0aWNhbExpbmVJblhZUGxhbmUiLCJzZXBhcmF0ZSIsInB1c2giLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsImNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiTWFza2luZ0ZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ2ZXJ0aWNlc0xlbmd0aCIsImVkZ2VzSW5YWVBsYW5lIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImVkZ2VJblhZUGxhbmUiLCJmcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgiLCJiaW5kIiwiZmFjZXQiLCJ1bm1hc2tlZEZhY2V0cyIsInVubWFza2VkRmFjZXQiLCJjbG9uZSIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlIiwic21hbGxlckZhY2V0cyIsInNwbGl0RmFjZXQiLCJtYXNrZWRTbWFsbGVyRmFjZXRzIiwidW5tYXNrZWRTbWFsbGVyRmFjZXRzIiwic2VwYXJhdGVTbWFsbGVyRmFjZXRzIiwibWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCIsImxlbmd0aCIsImZvckVhY2giLCJ1bm1hc2tlZFNtYWxsZXJGYWNldCIsImdldEVkZ2VzSW5YWVBsYW5lIiwiZmFjZXRzIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUVkZ2VJblhZUGxhbmUiLCJzcGxpdEZhY2V0cyIsInNtYWxsZXJGYWNldCIsInNtYWxsZXJGYWNldEluc2lkZUVkZ2VzSW5YWVBsYW5lIiwiaXNJbnNpZGVFZGdlc0luWFlQbGFuZSIsInNtYWxsZXJGYWNldE1hc2tlZCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza2luZ0ZhY2V0IiwiZnJvbVZlcnRpY2VzIiwiZnJvbUZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxpQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxvQkFBUixDQUZ2QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUgxQjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSx1QkFBUixDQUoxQjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSx5QkFBUixDQUw5Qjs7SUFPUU0sUSxHQUFtQkosYyxDQUFuQkksUTtJQUFVQyxJLEdBQVNMLGMsQ0FBVEssSTtJQUNWQyxlLEdBQW9DTCxpQixDQUFwQ0ssZTtJQUFpQkMsYyxHQUFtQk4saUIsQ0FBbkJNLGM7SUFDakJDLDJCLEdBQTJHTixpQixDQUEzR00sMkI7SUFBNkJDLG1DLEdBQThFUCxpQixDQUE5RU8sbUM7SUFBcUNDLG9DLEdBQXlDUixpQixDQUF6Q1Esb0M7O0lBRXBFQyxZOzs7QUFDSix3QkFBWUMsUUFBWixFQUFzQkMsTUFBdEIsRUFBOEJDLGtCQUE5QixFQUFrRDtBQUFBOztBQUFBLDRIQUMxQ0YsUUFEMEMsRUFDaENDLE1BRGdDOztBQUdoRCxVQUFLQyxrQkFBTCxHQUEwQkEsa0JBQTFCO0FBSGdEO0FBSWpEOzs7OzRDQUV1QjtBQUN0QixhQUFPLEtBQUtBLGtCQUFaO0FBQ0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBTUMsaUJBQWlCLENBQXZCO0FBQUEsVUFBMEI7QUFDcEJDLHVCQUFpQixLQUFLSixRQUFMLENB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akIsRUFBMkJDLE1BQTNCLEVBQW1DQyxrQkFBbkMsQ0FBckI7O0FBRUEsYUFBT3dDLFlBQVA7QUFDRDs7O2lDQUVtQjFDLFEsRUFBVTtBQUM1QixVQUFNZSxRQUFROUIsTUFBTTBELFlBQU4sQ0FBbUIzQyxRQUFuQixDQUFkO0FBQUEsVUFDTTBDLGVBQWUzQyxhQUFhNkMsU0FBYixDQUF1QjdCLEtBQXZCLENBRHJCOztBQUdBLGFBQU8yQixZQUFQO0FBQ0Q7Ozs7RUF2R3dCekQsSzs7QUEwRzNCNEQsT0FBT0MsT0FBUCxHQUFpQi9DLFlBQWpCIiwiZmlsZSI6Im1hc2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi4vZmFjZXQnKSxcbiAgICAgIEVkZ2VJblhZUGxhbmUgPSByZXF1aXJlKCcuL2VkZ2VJblhZUGxhbmUnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICB2ZXJ0aWNlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcm90YXRpb24nKSxcbiAgICAgIFZlcnRpY2FsTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vdmVydGljYWxMaW5lSW5YWVBsYW5lJyk7XG5cbmNvbnN0IHsgc2VwYXJhdGUsIHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0ZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRFZGdlc0luWFlQbGFuZSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsIC8vL1xuICAgICAgICAgIGVkZ2VzSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgdmVydGljZXNMZW5ndGgsXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHRoaXMudmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVkZ2VJblhZUGxhbmUgPSBFZGdlSW5YWVBsYW5lLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGVkZ2VJblhZUGxhbmU7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBlZGdlc0luWFlQbGFuZTtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgZmFjZXQucm90YXRlKGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHRoaXMuc2VwYXJhdGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goZnVuY3Rpb24odW5tYXNrZWRTbWFsbGVyRmFjZXQpIHtcbiAgICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXQucm90YXRlKGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBlZGdlc0luWFlQbGFuZSA9IHRoaXMuZ2V0RWRnZXNJblhZUGxhbmUoKTtcblxuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICBlZGdlc0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uKGVkZ2VJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tRWRnZUluWFlQbGFuZShlZGdlSW5YWVBsYW5lKTtcblxuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc2VwYXJhdGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGVkZ2VzSW5YWVBsYW5lID0gdGhpcy5nZXRFZGdlc0luWFlQbGFuZSgpO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCBmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldEluc2lkZUVkZ2VzSW5YWVBsYW5lID0gc21hbGxlckZhY2V0LmlzSW5zaWRlRWRnZXNJblhZUGxhbmUoZWRnZXNJblhZUGxhbmUpLFxuICAgICAgICAgICAgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0SW5zaWRlRWRnZXNJblhZUGxhbmU7IC8vL1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcbiJdfQ==