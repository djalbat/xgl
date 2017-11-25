'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    LineInXYPlane = require('./lineInXYPlane'),
    arrayUtilities = require('./utilities/array'),
    verticesUtilities = require('./utilities/vertices'),
    rotationUtilities = require('./utilities/rotation'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane');

var separate = arrayUtilities.separate,
    concatenate = arrayUtilities.concatenate,
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
    key: 'getLinesInXYPlane',
    value: function getLinesInXYPlane() {
      var verticesLength = 3,
          ///
      linesInXYPlane = this.vertices.map(function (vertex, index) {
        var startIndex = index,
            endIndex = (startIndex + 1) % verticesLength,
            startVertex = this.vertices[startIndex],
            endVertex = this.vertices[endIndex],
            lineInXYPlane = LineInXYPlane.fromVertices(startVertex, endVertex);

        return lineInXYPlane;
      }.bind(this));

      return linesInXYPlane;
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
        concatenate(unmaskedFacets, unmaskedFacet);
      } else {
        unmaskedSmallerFacets.forEach(function (unmaskedSmallerFacet) {
          unmaskedSmallerFacet.rotate(backwardsRotationQuaternion);
        });

        concatenate(unmaskedFacets, unmaskedSmallerFacets);
      }
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var linesInXYPlane = this.getLinesInXYPlane();

      var facets = [facet],
          smallerFacets = facets; ///

      linesInXYPlane.forEach(function (lineInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

        smallerFacets = verticalLineInXYPlane.splitFacets(facets);

        facets = smallerFacets; ///
      });

      return smallerFacets;
    }
  }, {
    key: 'separateSmallerFacets',
    value: function separateSmallerFacets(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets) {
      var linesInXYPlane = this.getLinesInXYPlane();

      separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function (smallerFacet) {
        var smallerFacetInsideLinesInXYPlane = smallerFacet.isInsideLinesInXYPlane(linesInXYPlane),
            smallerFacetMasked = smallerFacetInsideLinesInXYPlane; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNraW5nRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsImFycmF5VXRpbGl0aWVzIiwidmVydGljZXNVdGlsaXRpZXMiLCJyb3RhdGlvblV0aWxpdGllcyIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInNlcGFyYXRlIiwiY29uY2F0ZW5hdGUiLCJjYWxjdWxhdGVOb3JtYWwiLCJyb3RhdGVWZXJ0aWNlcyIsImNhbGN1bGF0ZVJvdGF0aW9uUXVhdGVybmlvbiIsImNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiTWFza2luZ0ZhY2V0IiwidmVydGljZXMiLCJub3JtYWwiLCJyb3RhdGlvblF1YXRlcm5pb24iLCJ2ZXJ0aWNlc0xlbmd0aCIsImxpbmVzSW5YWVBsYW5lIiwibWFwIiwidmVydGV4IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJzdGFydFZlcnRleCIsImVuZFZlcnRleCIsImxpbmVJblhZUGxhbmUiLCJmcm9tVmVydGljZXMiLCJiaW5kIiwiZmFjZXQiLCJ1bm1hc2tlZEZhY2V0cyIsInVubWFza2VkRmFjZXQiLCJjbG9uZSIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlIiwic21hbGxlckZhY2V0cyIsInNwbGl0RmFjZXQiLCJtYXNrZWRTbWFsbGVyRmFjZXRzIiwidW5tYXNrZWRTbWFsbGVyRmFjZXRzIiwic2VwYXJhdGVTbWFsbGVyRmFjZXRzIiwibWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCIsImxlbmd0aCIsImZvckVhY2giLCJ1bm1hc2tlZFNtYWxsZXJGYWNldCIsImdldExpbmVzSW5YWVBsYW5lIiwiZmFjZXRzIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUxpbmVJblhZUGxhbmUiLCJzcGxpdEZhY2V0cyIsInNtYWxsZXJGYWNldCIsInNtYWxsZXJGYWNldEluc2lkZUxpbmVzSW5YWVBsYW5lIiwiaXNJbnNpZGVMaW5lc0luWFlQbGFuZSIsInNtYWxsZXJGYWNldE1hc2tlZCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza2luZ0ZhY2V0IiwiZnJvbUZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFNBQVIsQ0FBZDtBQUFBLElBQ01DLGdCQUFnQkQsUUFBUSxpQkFBUixDQUR0QjtBQUFBLElBRU1FLGlCQUFpQkYsUUFBUSxtQkFBUixDQUZ2QjtBQUFBLElBR01HLG9CQUFvQkgsUUFBUSxzQkFBUixDQUgxQjtBQUFBLElBSU1JLG9CQUFvQkosUUFBUSxzQkFBUixDQUoxQjtBQUFBLElBS01LLHdCQUF3QkwsUUFBUSx5QkFBUixDQUw5Qjs7SUFPUU0sUSxHQUEwQkosYyxDQUExQkksUTtJQUFVQyxXLEdBQWdCTCxjLENBQWhCSyxXO0lBQ1ZDLGUsR0FBb0NMLGlCLENBQXBDSyxlO0lBQWlCQyxjLEdBQW1CTixpQixDQUFuQk0sYztJQUNqQkMsMkIsR0FBMkdOLGlCLENBQTNHTSwyQjtJQUE2QkMsbUMsR0FBOEVQLGlCLENBQTlFTyxtQztJQUFxQ0Msb0MsR0FBeUNSLGlCLENBQXpDUSxvQzs7SUFFcEVDLFk7OztBQUNKLHdCQUFZQyxRQUFaLEVBQXNCQyxNQUF0QixFQUE4QkMsa0JBQTlCLEVBQWtEO0FBQUE7O0FBQUEsNEhBQzFDRixRQUQwQyxFQUNoQ0MsTUFEZ0M7O0FBR2hELFVBQUtDLGtCQUFMLEdBQTBCQSxrQkFBMUI7QUFIZ0Q7QUFJakQ7Ozs7NENBRXVCO0FBQ3RCLGFBQU8sS0FBS0Esa0JBQVo7QUFDRDs7O3dDQUVtQjtBQUNsQixVQUFNQyxpQkFBaUIsQ0FBdkI7QUFBQSxVQUEwQjtBQUNwQkMsdUJBQWlCLEtBQUtKLFFBQUwsQ0FBY0ssR0FBZCxDQUFrQixVQUFTQyxNQUFU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QUFuQyxDQUFyQjs7QUFFQSxhQUFPd0MsWUFBUDtBQUNEOzs7aUNBRW1CMUMsUSxFQUFVO0FBQzVCLFVBQU1lLFFBQVE5QixNQUFNNEIsWUFBTixDQUFtQmIsUUFBbkIsQ0FBZDtBQUFBLFVBQ00wQyxlQUFlM0MsYUFBYTRDLFNBQWIsQ0FBdUI1QixLQUF2QixDQURyQjs7QUFHQSxhQUFPMkIsWUFBUDtBQUNEOzs7O0VBdkd3QnpELEs7O0FBMEczQjJELE9BQU9DLE9BQVAsR0FBaUI5QyxZQUFqQiIsImZpbGUiOiJtYXNraW5nRmFjZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEZhY2V0ID0gcmVxdWlyZSgnLi9mYWNldCcpLFxuICAgICAgTGluZUluWFlQbGFuZSA9IHJlcXVpcmUoJy4vbGluZUluWFlQbGFuZScpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcm90YXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9yb3RhdGlvbicpLFxuICAgICAgVmVydGljYWxMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi92ZXJ0aWNhbExpbmVJblhZUGxhbmUnKTtcblxuY29uc3QgeyBzZXBhcmF0ZSwgY29uY2F0ZW5hdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSByb3RhdGlvblV0aWxpdGllcztcblxuY2xhc3MgTWFza2luZ0ZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICBzdXBlcih2ZXJ0aWNlcywgbm9ybWFsKTtcbiAgICBcbiAgICB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBnZXRMaW5lc0luWFlQbGFuZSgpIHtcbiAgICBjb25zdCB2ZXJ0aWNlc0xlbmd0aCA9IDMsIC8vL1xuICAgICAgICAgIGxpbmVzSW5YWVBsYW5lID0gdGhpcy52ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4LCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgICAgZW5kSW5kZXggPSAoc3RhcnRJbmRleCArIDEpICUgdmVydGljZXNMZW5ndGgsXG4gICAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHRoaXMudmVydGljZXNbc3RhcnRJbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGxpbmVJblhZUGxhbmUgPSBMaW5lSW5YWVBsYW5lLmZyb21WZXJ0aWNlcyhzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxpbmVJblhZUGxhbmU7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHJldHVybiBsaW5lc0luWFlQbGFuZTtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgZmFjZXQucm90YXRlKGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHRoaXMuc2VwYXJhdGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cyk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uY2F0ZW5hdGUodW5tYXNrZWRGYWNldHMsIHVubWFza2VkRmFjZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMuZm9yRWFjaChmdW5jdGlvbih1bm1hc2tlZFNtYWxsZXJGYWNldCkge1xuICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldC5yb3RhdGUoYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25jYXRlbmF0ZSh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQpIHtcbiAgICBjb25zdCBsaW5lc0luWFlQbGFuZSA9IHRoaXMuZ2V0TGluZXNJblhZUGxhbmUoKTtcblxuICAgIGxldCBmYWNldHMgPSBbXG4gICAgICAgICAgZmFjZXRcbiAgICAgICAgXSxcbiAgICAgICAgc21hbGxlckZhY2V0cyA9IGZhY2V0czsgLy8vXG5cbiAgICBsaW5lc0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmVJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKTtcblxuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5zcGxpdEZhY2V0cyhmYWNldHMpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc2VwYXJhdGVTbWFsbGVyRmFjZXRzKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cykge1xuICAgIGNvbnN0IGxpbmVzSW5YWVBsYW5lID0gdGhpcy5nZXRMaW5lc0luWFlQbGFuZSgpO1xuXG4gICAgc2VwYXJhdGUoc21hbGxlckZhY2V0cywgbWFza2VkU21hbGxlckZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLCBmdW5jdGlvbihzbWFsbGVyRmFjZXQpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXJGYWNldEluc2lkZUxpbmVzSW5YWVBsYW5lID0gc21hbGxlckZhY2V0LmlzSW5zaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpLFxuICAgICAgICAgICAgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0SW5zaWRlTGluZXNJblhZUGxhbmU7IC8vL1xuXG4gICAgICByZXR1cm4gc21hbGxlckZhY2V0TWFza2VkO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tpbmdGYWNldCA9IG5ldyBNYXNraW5nRmFjZXQodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNraW5nRmFjZXQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gTWFza2luZ0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tpbmdGYWNldDtcbiJdfQ==