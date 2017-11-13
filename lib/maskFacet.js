'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Facet = require('./facet'),
    LineInXYPlane = require('./lineInXYPlane'),
    VerticalLineInXYPlane = require('./verticalLineInXYPlane'),
    verticesUtilities = require('./utilities/vertices'),
    quaternionUtilities = require('./utilities/quaternion');

var calculateNormal = verticesUtilities.calculateNormal,
    rotateVertices = verticesUtilities.rotateVertices,
    calculateRotationQuaternion = quaternionUtilities.calculateRotationQuaternion,
    calculateForwardsRotationQuaternion = quaternionUtilities.calculateForwardsRotationQuaternion,
    calculateBackwardsRotationQuaternion = quaternionUtilities.calculateBackwardsRotationQuaternion;

var MaskFacet = function (_Facet) {
  _inherits(MaskFacet, _Facet);

  function MaskFacet(vertices, normal, rotationQuaternion) {
    _classCallCheck(this, MaskFacet);

    var _this = _possibleConstructorReturn(this, (MaskFacet.__proto__ || Object.getPrototypeOf(MaskFacet)).call(this, vertices, normal));

    _this.rotationQuaternion = rotationQuaternion;
    return _this;
  }

  _createClass(MaskFacet, [{
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
    key: 'mask',
    value: function mask(facet, maskedFacets) {
      var forwardsRotationQuaternion = calculateForwardsRotationQuaternion(this.rotationQuaternion),
          backwardsRotationQuaternion = calculateBackwardsRotationQuaternion(this.rotationQuaternion);

      facet.rotate(forwardsRotationQuaternion);

      var smallerFacets = this.splitFacet(facet);

      this.maskSmallerFacets(smallerFacets, maskedFacets);

      maskedFacets.forEach(function (maskedFacet) {
        maskedFacet.rotate(backwardsRotationQuaternion);
      });
    }
  }, {
    key: 'splitFacet',
    value: function splitFacet(facet) {
      var linesInXYPlane = this.getLinesInXYPlane();

      var smallerFacets = [///
      facet];

      linesInXYPlane.forEach(function (lineInXYPlane) {
        var verticalLineInXYPlane = VerticalLineInXYPlane.fromLineInXYPlane(lineInXYPlane);

        smallerFacets = verticalLineInXYPlane.splitFacets(smallerFacets);
      });

      return smallerFacets;
    }
  }, {
    key: 'maskSmallerFacets',
    value: function maskSmallerFacets(smallerFacets, maskedFacets) {
      var linesInXYPlane = this.getLinesInXYPlane();

      smallerFacets.forEach(function (smallerFacet) {
        var outsideLinesInXYPlane = smallerFacet.isOutsideLinesInXYPlane(linesInXYPlane);

        if (outsideLinesInXYPlane) {
          var maskedFacet = smallerFacet; ///

          maskedFacets.push(maskedFacet);
        }
      });

      return maskedFacets;
    }
  }], [{
    key: 'fromFacet',
    value: function fromFacet(facet) {
      var normal = facet.getNormal();

      var rotationQuaternion = calculateRotationQuaternion(normal);

      var vertices = facet.getVertices();

      vertices = rotateVertices(vertices, rotationQuaternion);

      normal = calculateNormal(vertices);

      var maskFacet = new MaskFacet(vertices, normal, rotationQuaternion);

      return maskFacet;
    }
  }, {
    key: 'fromVertices',
    value: function fromVertices(vertices) {
      var facet = Facet.fromVertices(vertices),
          maskFacet = MaskFacet.fromFacet(facet);

      return maskFacet;
    }
  }]);

  return MaskFacet;
}(Facet);

module.exports = MaskFacet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9tYXNrRmFjZXQuanMiXSwibmFtZXMiOlsiRmFjZXQiLCJyZXF1aXJlIiwiTGluZUluWFlQbGFuZSIsIlZlcnRpY2FsTGluZUluWFlQbGFuZSIsInZlcnRpY2VzVXRpbGl0aWVzIiwicXVhdGVybmlvblV0aWxpdGllcyIsImNhbGN1bGF0ZU5vcm1hbCIsInJvdGF0ZVZlcnRpY2VzIiwiY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uIiwiY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24iLCJNYXNrRmFjZXQiLCJ2ZXJ0aWNlcyIsIm5vcm1hbCIsInJvdGF0aW9uUXVhdGVybmlvbiIsInZlcnRpY2VzTGVuZ3RoIiwibGluZXNJblhZUGxhbmUiLCJtYXAiLCJ2ZXJ0ZXgiLCJpbmRleCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsInN0YXJ0VmVydGV4IiwiZW5kVmVydGV4IiwibGluZUluWFlQbGFuZSIsImZyb21WZXJ0aWNlcyIsImJpbmQiLCJmYWNldCIsIm1hc2tlZEZhY2V0cyIsImZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwiYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIiwicm90YXRlIiwic21hbGxlckZhY2V0cyIsInNwbGl0RmFjZXQiLCJtYXNrU21hbGxlckZhY2V0cyIsImZvckVhY2giLCJtYXNrZWRGYWNldCIsImdldExpbmVzSW5YWVBsYW5lIiwidmVydGljYWxMaW5lSW5YWVBsYW5lIiwiZnJvbUxpbmVJblhZUGxhbmUiLCJzcGxpdEZhY2V0cyIsInNtYWxsZXJGYWNldCIsIm91dHNpZGVMaW5lc0luWFlQbGFuZSIsImlzT3V0c2lkZUxpbmVzSW5YWVBsYW5lIiwicHVzaCIsImdldE5vcm1hbCIsImdldFZlcnRpY2VzIiwibWFza0ZhY2V0IiwiZnJvbUZhY2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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QUNGLE9BUkQ7O0FBVUEsYUFBT1IsWUFBUDtBQUNEOzs7OEJBRWdCRCxLLEVBQU87QUFDdEIsVUFBSWQsU0FBU2MsTUFBTWtCLFNBQU4sRUFBYjs7QUFFQSxVQUFNL0IscUJBQXFCTiw0QkFBNEJLLE1BQTVCLENBQTNCOztBQUVBLFVBQUlELFdBQVdlLE1BQU1tQixXQUFOLEVBQWY7O0FBRUFsQyxpQkFBV0wsZUFBZUssUUFBZixFQUF5QkUsa0JBQXpCLENBQVg7O0FBRUFELGVBQVNQLGdCQUFnQk0sUUFBaEIsQ0FBVDs7QUFFQSxVQUFNbUMsWUFBWSxJQUFJcEMsU0FBSixDQUFjQyxRQUFkLEVBQXdCQyxNQUF4QixFQUFnQ0Msa0JBQWhDLENBQWxCOztBQUVBLGFBQU9pQyxTQUFQO0FBQ0Q7OztpQ0FFbUJuQyxRLEVBQVU7QUFDNUIsVUFBTWUsUUFBUTNCLE1BQU15QixZQUFOLENBQW1CYixRQUFuQixDQUFkO0FBQUEsVUFDTW1DLFlBQVlwQyxVQUFVcUMsU0FBVixDQUFvQnJCLEtBQXBCLENBRGxCOztBQUdBLGFBQU9vQixTQUFQO0FBQ0Q7Ozs7RUE5RnFCL0MsSzs7QUFpR3hCaUQsT0FBT0MsT0FBUCxHQUFpQnZDLFNBQWpCIiwiZmlsZSI6Im1hc2tGYWNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRmFjZXQgPSByZXF1aXJlKCcuL2ZhY2V0JyksXG4gICAgICBMaW5lSW5YWVBsYW5lID0gcmVxdWlyZSgnLi9saW5lSW5YWVBsYW5lJyksXG4gICAgICBWZXJ0aWNhbExpbmVJblhZUGxhbmUgPSByZXF1aXJlKCcuL3ZlcnRpY2FsTGluZUluWFlQbGFuZScpLFxuICAgICAgdmVydGljZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy92ZXJ0aWNlcycpLFxuICAgICAgcXVhdGVybmlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3F1YXRlcm5pb24nKTtcblxuY29uc3QgeyBjYWxjdWxhdGVOb3JtYWwsIHJvdGF0ZVZlcnRpY2VzIH0gPSB2ZXJ0aWNlc1V0aWxpdGllcyxcbiAgICAgIHsgY2FsY3VsYXRlUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gPSBxdWF0ZXJuaW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBNYXNrRmFjZXQgZXh0ZW5kcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIHJvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwpO1xuICAgIFxuICAgIHRoaXMucm90YXRpb25RdWF0ZXJuaW9uID0gcm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Um90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldExpbmVzSW5YWVBsYW5lKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzTGVuZ3RoID0gMywgLy8vXG4gICAgICAgICAgbGluZXNJblhZUGxhbmUgPSB0aGlzLnZlcnRpY2VzLm1hcChmdW5jdGlvbih2ZXJ0ZXgsIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsXG4gICAgICAgICAgICAgICAgICBlbmRJbmRleCA9IChzdGFydEluZGV4ICsgMSkgJSB2ZXJ0aWNlc0xlbmd0aCxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4ID0gdGhpcy52ZXJ0aWNlc1tzdGFydEluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHRoaXMudmVydGljZXNbZW5kSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGluZUluWFlQbGFuZSA9IExpbmVJblhZUGxhbmUuZnJvbVZlcnRpY2VzKHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGluZUluWFlQbGFuZTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGxpbmVzSW5YWVBsYW5lO1xuICB9XG4gIFxuICBtYXNrKGZhY2V0LCBtYXNrZWRGYWNldHMpIHtcbiAgICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHRoaXMucm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24odGhpcy5yb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgZmFjZXQucm90YXRlKGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQpO1xuXG4gICAgdGhpcy5tYXNrU21hbGxlckZhY2V0cyhzbWFsbGVyRmFjZXRzLCBtYXNrZWRGYWNldHMpO1xuXG4gICAgbWFza2VkRmFjZXRzLmZvckVhY2goZnVuY3Rpb24obWFza2VkRmFjZXQpIHtcbiAgICAgIG1hc2tlZEZhY2V0LnJvdGF0ZShiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuICAgIH0pO1xuICB9XG4gIFxuICBzcGxpdEZhY2V0KGZhY2V0KSB7XG4gICAgY29uc3QgbGluZXNJblhZUGxhbmUgPSB0aGlzLmdldExpbmVzSW5YWVBsYW5lKCk7XG5cbiAgICBsZXQgc21hbGxlckZhY2V0cyA9IFsgLy8vXG4gICAgICBmYWNldFxuICAgIF07XG5cbiAgICBsaW5lc0luWFlQbGFuZS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmVJblhZUGxhbmUpIHtcbiAgICAgIGNvbnN0IHZlcnRpY2FsTGluZUluWFlQbGFuZSA9IFZlcnRpY2FsTGluZUluWFlQbGFuZS5mcm9tTGluZUluWFlQbGFuZShsaW5lSW5YWVBsYW5lKTtcblxuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZUluWFlQbGFuZS5zcGxpdEZhY2V0cyhzbWFsbGVyRmFjZXRzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgbWFza1NtYWxsZXJGYWNldHMoc21hbGxlckZhY2V0cywgbWFza2VkRmFjZXRzKSB7XG4gICAgY29uc3QgbGluZXNJblhZUGxhbmUgPSB0aGlzLmdldExpbmVzSW5YWVBsYW5lKCk7XG5cbiAgICBzbWFsbGVyRmFjZXRzLmZvckVhY2goZnVuY3Rpb24oc21hbGxlckZhY2V0KSB7XG4gICAgICBjb25zdCBvdXRzaWRlTGluZXNJblhZUGxhbmUgPSBzbWFsbGVyRmFjZXQuaXNPdXRzaWRlTGluZXNJblhZUGxhbmUobGluZXNJblhZUGxhbmUpO1xuICAgICAgXG4gICAgICBpZiAob3V0c2lkZUxpbmVzSW5YWVBsYW5lKSB7XG4gICAgICAgIGNvbnN0IG1hc2tlZEZhY2V0ID0gc21hbGxlckZhY2V0OyAvLy9cbiAgICAgICAgXG4gICAgICAgIG1hc2tlZEZhY2V0cy5wdXNoKG1hc2tlZEZhY2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2VkRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGxldCBub3JtYWwgPSBmYWNldC5nZXROb3JtYWwoKTtcbiAgICBcbiAgICBjb25zdCByb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvblF1YXRlcm5pb24obm9ybWFsKTtcblxuICAgIGxldCB2ZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCk7XG4gICAgXG4gICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyh2ZXJ0aWNlcywgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgICBcbiAgICBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMpO1xuICAgIFxuICAgIGNvbnN0IG1hc2tGYWNldCA9IG5ldyBNYXNrRmFjZXQodmVydGljZXMsIG5vcm1hbCwgcm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiBtYXNrRmFjZXQ7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tVmVydGljZXModmVydGljZXMpIHtcbiAgICBjb25zdCBmYWNldCA9IEZhY2V0LmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgbWFza0ZhY2V0ID0gTWFza0ZhY2V0LmZyb21GYWNldChmYWNldCk7XG4gICAgXG4gICAgcmV0dXJuIG1hc2tGYWNldDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hc2tGYWNldDtcbiJdfQ==