'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pan = require('../../miscellaneous/pan'),
    Tilt = require('../../miscellaneous/tilt'),
    Camera = require('../camera'),
    vectorMaths = require('../../maths/vector'),
    matrixUtilities = require('../../utilities/matrix');

var zero2 = vectorMaths.zero2,
    offsetsMatrixFromOffsets = matrixUtilities.offsetsMatrixFromOffsets,
    rotationsMatrixFromAngles = matrixUtilities.rotationsMatrixFromAngles,
    positionMatrixFromNothing = matrixUtilities.positionMatrixFromNothing,
    projectionMatrixFromWidthAndHeight = matrixUtilities.projectionMatrixFromWidthAndHeight,
    normalsMatrixFromRotationsMatrix = matrixUtilities.normalsMatrixFromRotationsMatrix;


var defaultInitialAngles = zero2(),
    defaultInitialPosition = [0, 0, 5];

var GamingCamera = function (_Camera) {
  _inherits(GamingCamera, _Camera);

  function GamingCamera() {
    _classCallCheck(this, GamingCamera);

    return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).apply(this, arguments));
  }

  _createClass(GamingCamera, [{
    key: 'update',
    value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, width, height, callback) {
      var pan = this.getPan(),
          tilt = this.getTilt();

      if (false) {
        ///
      } else if (shiftKeyDown) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else if (mouseWheelDelta !== 0) {
        pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, tilt);
      } else {
        tilt.updateAngles(relativeMouseCoordinates);
      }

      var angles = tilt.getAngles(),
          offsets = pan.getOffsets(),
          offsetsMatrix = offsetsMatrixFromOffsets(offsets),
          positionMatrix = positionMatrixFromNothing(),
          rotationsMatrix = rotationsMatrixFromAngles(angles),
          projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
          normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

      callback(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var _properties$initialAn = properties.initialAngles,
          initialAngles = _properties$initialAn === undefined ? defaultInitialAngles : _properties$initialAn,
          _properties$initialPo = properties.initialPosition,
          initialPosition = _properties$initialPo === undefined ? defaultInitialPosition : _properties$initialPo,
          flipped = true,
          pan = Pan.fromInitialPosition(initialPosition),
          tilt = Tilt.fromInitialAnglesAndFlipped(initialAngles, flipped),
          gamingCamera = Camera.fromProperties(GamingCamera, properties, pan, tilt);


      return gamingCamera;
    }
  }]);

  return GamingCamera;
}(Camera);

module.exports = GamingCamera;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMiLCJtb3VzZVdoZWVsRGVsdGEiLCJzaGlmdEtleURvd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbGxiYWNrIiwicGFuIiwiZ2V0UGFuIiwidGlsdCIsImdldFRpbHQiLCJ1cGRhdGVPZmZzZXRzIiwidXBkYXRlQW5nbGVzIiwiYW5nbGVzIiwiZ2V0QW5nbGVzIiwib2Zmc2V0cyIsImdldE9mZnNldHMiLCJvZmZzZXRzTWF0cml4IiwicG9zaXRpb25NYXRyaXgiLCJyb3RhdGlvbnNNYXRyaXgiLCJwcm9qZWN0aW9uTWF0cml4Iiwibm9ybWFsc01hdHJpeCIsInByb3BlcnRpZXMiLCJpbml0aWFsQW5nbGVzIiwiaW5pdGlhbFBvc2l0aW9uIiwiZmxpcHBlZCIsImZyb21Jbml0aWFsUG9zaXRpb24iLCJmcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQiLCJnYW1pbmdDYW1lcmEiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSx5QkFBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFHTUUsU0FBU0YsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNRyxjQUFjSCxRQUFRLG9CQUFSLENBSnBCO0FBQUEsSUFLTUksa0JBQWtCSixRQUFRLHdCQUFSLENBTHhCOztBQU9NLElBQUVLLEtBQUYsR0FBWUYsV0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDMkpGLGVBRDNKLENBQ0VFLHdCQURGO0FBQUEsSUFDNEJDLHlCQUQ1QixHQUMySkgsZUFEM0osQ0FDNEJHLHlCQUQ1QjtBQUFBLElBQ3VEQyx5QkFEdkQsR0FDMkpKLGVBRDNKLENBQ3VESSx5QkFEdkQ7QUFBQSxJQUNrRkMsa0NBRGxGLEdBQzJKTCxlQUQzSixDQUNrRkssa0NBRGxGO0FBQUEsSUFDc0hDLGdDQUR0SCxHQUMySk4sZUFEM0osQ0FDc0hNLGdDQUR0SDs7O0FBR04sSUFBTUMsdUJBQXVCTixPQUE3QjtBQUFBLElBQ01PLHlCQUF5QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQvQjs7SUFJTUMsWTs7Ozs7Ozs7Ozs7MkJBT0dDLHdCLEVBQTBCQyxlLEVBQWlCQyxZLEVBQWNDLEssRUFBT0MsTSxFQUFRQyxRLEVBQVU7QUFDdkYsVUFBTUMsTUFBTSxLQUFLQyxNQUFMLEVBQVo7QUFBQSxVQUNNQyxPQUFPLEtBQUtDLE9BQUwsRUFEYjs7QUFHQSxVQUFJLEtBQUosRUFBVztBQUNUO0FBQ0QsT0FGRCxNQUVPLElBQUlQLFlBQUosRUFBa0I7QUFDdkJJLFlBQUlJLGFBQUosQ0FBa0JWLHdCQUFsQixFQUE0Q0MsZUFBNUMsRUFBNkRPLElBQTdEO0FBQ0QsT0FGTSxNQUVBLElBQUlQLG9CQUFvQixDQUF4QixFQUEyQjtBQUNoQ0ssWUFBSUksYUFBSixDQUFrQlYsd0JBQWxCLEVBQTRDQyxlQUE1QyxFQUE2RE8sSUFBN0Q7QUFDRCxPQUZNLE1BRUE7QUFDTEEsYUFBS0csWUFBTCxDQUFrQlgsd0JBQWxCO0FBQ0Q7O0FBRUQsVUFBTVksU0FBU0osS0FBS0ssU0FBTCxFQUFmO0FBQUEsVUFDTUMsVUFBVVIsSUFBSVMsVUFBSixFQURoQjtBQUFBLFVBR01DLGdCQUFnQnhCLHlCQUF5QnNCLE9BQXpCLENBSHRCO0FBQUEsVUFJTUcsaUJBQWlCdkIsMkJBSnZCO0FBQUEsVUFLTXdCLGtCQUFrQnpCLDBCQUEwQm1CLE1BQTFCLENBTHhCO0FBQUEsVUFNTU8sbUJBQW1CeEIsbUNBQW1DUSxLQUFuQyxFQUEwQ0MsTUFBMUMsQ0FOekI7QUFBQSxVQU9NZ0IsZ0JBQWdCeEIsaUNBQWlDc0IsZUFBakMsQ0FQdEI7O0FBU0FiLGVBQVNXLGFBQVQsRUFBd0JJLGFBQXhCLEVBQXVDSCxjQUF2QyxFQUF1REMsZUFBdkQsRUFBd0VDLGdCQUF4RTtBQUNEOzs7bUNBRXFCRSxVLEVBQVk7QUFBQSxrQ0FDMkRBLFVBRDNELENBQ3hCQyxhQUR3QjtBQUFBLFVBQ3hCQSxhQUR3Qix5Q0FDUnpCLG9CQURRO0FBQUEsa0NBQzJEd0IsVUFEM0QsQ0FDY0UsZUFEZDtBQUFBLFVBQ2NBLGVBRGQseUNBQ2dDekIsc0JBRGhDO0FBQUEsVUFFMUIwQixPQUYwQixHQUVoQixJQUZnQjtBQUFBLFVBRzFCbEIsR0FIMEIsR0FHcEJyQixJQUFJd0MsbUJBQUosQ0FBd0JGLGVBQXhCLENBSG9CO0FBQUEsVUFJMUJmLElBSjBCLEdBSW5CckIsS0FBS3VDLDJCQUFMLENBQWlDSixhQUFqQyxFQUFnREUsT0FBaEQsQ0FKbUI7QUFBQSxVQU0xQkcsWUFOMEIsR0FNWHZDLE9BQU93QyxjQUFQLENBQXNCN0IsWUFBdEIsRUFBb0NzQixVQUFwQyxFQUFnRGYsR0FBaEQsRUFBcURFLElBQXJELENBTlc7OztBQVFoQyxhQUFPbUIsWUFBUDtBQUNEOzs7O0VBMUN3QnZDLE07O0FBNkMzQnlDLE9BQU9DLE9BQVAsR0FBaUIvQixZQUFqQiIsImZpbGUiOiJnYW1pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG5cbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNSBdO1xuXG5cbmNsYXNzIEdhbWluZ0NhbWVyYSBleHRlbmRzIENhbWVyYSB7XG5cblxuXG5cblxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHBhbiA9IHRoaXMuZ2V0UGFuKCksXG4gICAgICAgICAgdGlsdCA9IHRoaXMuZ2V0VGlsdCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgcGFuLnVwZGF0ZU9mZnNldHMocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHRpbHQpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbERlbHRhICE9PSAwKSB7XG4gICAgICBwYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgdGlsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbHQudXBkYXRlQW5nbGVzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgYW5nbGVzID0gdGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICBvZmZzZXRzID0gcGFuLmdldE9mZnNldHMoKSxcblxuICAgICAgICAgIG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0KHdpZHRoLCBoZWlnaHQpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgY2FsbGJhY2sob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW5pdGlhbEFuZ2xlcyA9IGRlZmF1bHRJbml0aWFsQW5nbGVzLCBpbml0aWFsUG9zaXRpb24gPSBkZWZhdWx0SW5pdGlhbFBvc2l0aW9uIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGZsaXBwZWQgPSB0cnVlLFxuICAgICAgICAgIHBhbiA9IFBhbi5mcm9tSW5pdGlhbFBvc2l0aW9uKGluaXRpYWxQb3NpdGlvbiksXG4gICAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkKGluaXRpYWxBbmdsZXMsIGZsaXBwZWQpLFxuXG4gICAgICAgICAgZ2FtaW5nQ2FtZXJhID0gQ2FtZXJhLmZyb21Qcm9wZXJ0aWVzKEdhbWluZ0NhbWVyYSwgcHJvcGVydGllcywgcGFuLCB0aWx0KTtcblxuICAgIHJldHVybiBnYW1pbmdDYW1lcmE7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1pbmdDYW1lcmE7XG4iXX0=