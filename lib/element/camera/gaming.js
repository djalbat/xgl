'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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

      function GamingCamera(keyEvents, mouseEvents, updateHandler, pan, tilt) {
            _classCallCheck(this, GamingCamera);

            return _possibleConstructorReturn(this, (GamingCamera.__proto__ || Object.getPrototypeOf(GamingCamera)).call(this, keyEvents, mouseEvents, updateHandler, pan, tilt));
      }

      _createClass(GamingCamera, [{
            key: 'mouseWheelHandler',
            value: function mouseWheelHandler(delta, canvas) {
                  this.pan.updateZOffset(delta, this.tilt);

                  this.update(canvas);
            }
      }, {
            key: 'update',
            value: function update(canvas) {
                  var width = canvas.getWidth(),
                      height = canvas.getHeight(),
                      angles = this.tilt.getAngles(),
                      offsets = this.pan.getOffsets(),
                      offsetsMatrix = offsetsMatrixFromOffsets(offsets),
                      positionMatrix = positionMatrixFromNothing(),
                      rotationsMatrix = rotationsMatrixFromAngles(angles),
                      projectionMatrix = projectionMatrixFromWidthAndHeight(width, height),
                      normalsMatrix = normalsMatrixFromRotationsMatrix(rotationsMatrix);

                  _get(GamingCamera.prototype.__proto__ || Object.getPrototypeOf(GamingCamera.prototype), 'update', this).call(this, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L2NhbWVyYS9nYW1pbmcuanMiXSwibmFtZXMiOlsiUGFuIiwicmVxdWlyZSIsIlRpbHQiLCJDYW1lcmEiLCJ2ZWN0b3JNYXRocyIsIm1hdHJpeFV0aWxpdGllcyIsInplcm8yIiwib2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzIiwicm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyIsInBvc2l0aW9uTWF0cml4RnJvbU5vdGhpbmciLCJwcm9qZWN0aW9uTWF0cml4RnJvbVdpZHRoQW5kSGVpZ2h0Iiwibm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgiLCJkZWZhdWx0SW5pdGlhbEFuZ2xlcyIsImRlZmF1bHRJbml0aWFsUG9zaXRpb24iLCJHYW1pbmdDYW1lcmEiLCJrZXlFdmVudHMiLCJtb3VzZUV2ZW50cyIsInVwZGF0ZUhhbmRsZXIiLCJwYW4iLCJ0aWx0IiwiZGVsdGEiLCJjYW52YXMiLCJ1cGRhdGVaT2Zmc2V0IiwidXBkYXRlIiwid2lkdGgiLCJnZXRXaWR0aCIsImhlaWdodCIsImdldEhlaWdodCIsImFuZ2xlcyIsImdldEFuZ2xlcyIsIm9mZnNldHMiLCJnZXRPZmZzZXRzIiwib2Zmc2V0c01hdHJpeCIsInBvc2l0aW9uTWF0cml4Iiwicm90YXRpb25zTWF0cml4IiwicHJvamVjdGlvbk1hdHJpeCIsIm5vcm1hbHNNYXRyaXgiLCJwcm9wZXJ0aWVzIiwiaW5pdGlhbEFuZ2xlcyIsImluaXRpYWxQb3NpdGlvbiIsImZsaXBwZWQiLCJmcm9tSW5pdGlhbFBvc2l0aW9uIiwiZnJvbUluaXRpYWxBbmdsZXNBbmRGbGlwcGVkIiwiZ2FtaW5nQ2FtZXJhIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSx5QkFBUixDQUFaO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSwwQkFBUixDQURiO0FBQUEsSUFHTUUsU0FBU0YsUUFBUSxXQUFSLENBSGY7QUFBQSxJQUlNRyxjQUFjSCxRQUFRLG9CQUFSLENBSnBCO0FBQUEsSUFLTUksa0JBQWtCSixRQUFRLHdCQUFSLENBTHhCOztBQU9NLElBQUVLLEtBQUYsR0FBWUYsV0FBWixDQUFFRSxLQUFGO0FBQUEsSUFDRUMsd0JBREYsR0FDMkpGLGVBRDNKLENBQ0VFLHdCQURGO0FBQUEsSUFDNEJDLHlCQUQ1QixHQUMySkgsZUFEM0osQ0FDNEJHLHlCQUQ1QjtBQUFBLElBQ3VEQyx5QkFEdkQsR0FDMkpKLGVBRDNKLENBQ3VESSx5QkFEdkQ7QUFBQSxJQUNrRkMsa0NBRGxGLEdBQzJKTCxlQUQzSixDQUNrRkssa0NBRGxGO0FBQUEsSUFDc0hDLGdDQUR0SCxHQUMySk4sZUFEM0osQ0FDc0hNLGdDQUR0SDs7O0FBR04sSUFBTUMsdUJBQXVCTixPQUE3QjtBQUFBLElBQ01PLHlCQUF5QixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUQvQjs7SUFJTUMsWTs7O0FBQ0osNEJBQVlDLFNBQVosRUFBdUJDLFdBQXZCLEVBQW9DQyxhQUFwQyxFQUFtREMsR0FBbkQsRUFBd0RDLElBQXhELEVBQThEO0FBQUE7O0FBQUEsK0hBQ3RESixTQURzRCxFQUMzQ0MsV0FEMkMsRUFDOUJDLGFBRDhCLEVBQ2ZDLEdBRGUsRUFDVkMsSUFEVTtBQUk3RDs7Ozs4Q0FFaUJDLEssRUFBT0MsTSxFQUFRO0FBQy9CLHVCQUFLSCxHQUFMLENBQVNJLGFBQVQsQ0FBdUJGLEtBQXZCLEVBQThCLEtBQUtELElBQW5DOztBQUVBLHVCQUFLSSxNQUFMLENBQVlGLE1BQVo7QUFDRDs7O21DQUVNQSxNLEVBQVE7QUFDYixzQkFBTUcsUUFBUUgsT0FBT0ksUUFBUCxFQUFkO0FBQUEsc0JBQ01DLFNBQVNMLE9BQU9NLFNBQVAsRUFEZjtBQUFBLHNCQUVNQyxTQUFTLEtBQUtULElBQUwsQ0FBVVUsU0FBVixFQUZmO0FBQUEsc0JBR01DLFVBQVUsS0FBS1osR0FBTCxDQUFTYSxVQUFULEVBSGhCO0FBQUEsc0JBS01DLGdCQUFnQnpCLHlCQUF5QnVCLE9BQXpCLENBTHRCO0FBQUEsc0JBTU1HLGlCQUFpQnhCLDJCQU52QjtBQUFBLHNCQU9NeUIsa0JBQWtCMUIsMEJBQTBCb0IsTUFBMUIsQ0FQeEI7QUFBQSxzQkFRTU8sbUJBQW1CekIsbUNBQW1DYyxLQUFuQyxFQUEwQ0UsTUFBMUMsQ0FSekI7QUFBQSxzQkFTTVUsZ0JBQWdCekIsaUNBQWlDdUIsZUFBakMsQ0FUdEI7O0FBV0EscUlBQWFGLGFBQWIsRUFBNEJJLGFBQTVCLEVBQTJDSCxjQUEzQyxFQUEyREMsZUFBM0QsRUFBNEVDLGdCQUE1RTtBQUNEOzs7MkNBRXFCRSxVLEVBQVk7QUFBQSw4Q0FDMkRBLFVBRDNELENBQ3hCQyxhQUR3QjtBQUFBLHNCQUN4QkEsYUFEd0IseUNBQ1IxQixvQkFEUTtBQUFBLDhDQUMyRHlCLFVBRDNELENBQ2NFLGVBRGQ7QUFBQSxzQkFDY0EsZUFEZCx5Q0FDZ0MxQixzQkFEaEM7QUFBQSxzQkFFMUIyQixPQUYwQixHQUVoQixJQUZnQjtBQUFBLHNCQUcxQnRCLEdBSDBCLEdBR3BCbEIsSUFBSXlDLG1CQUFKLENBQXdCRixlQUF4QixDQUhvQjtBQUFBLHNCQUkxQnBCLElBSjBCLEdBSW5CakIsS0FBS3dDLDJCQUFMLENBQWlDSixhQUFqQyxFQUFnREUsT0FBaEQsQ0FKbUI7QUFBQSxzQkFNMUJHLFlBTjBCLEdBTVh4QyxPQUFPeUMsY0FBUCxDQUFzQjlCLFlBQXRCLEVBQW9DdUIsVUFBcEMsRUFBZ0RuQixHQUFoRCxFQUFxREMsSUFBckQsQ0FOVzs7O0FBUWhDLHlCQUFPd0IsWUFBUDtBQUNEOzs7O0VBckN3QnhDLE07O0FBd0MzQjBDLE9BQU9DLE9BQVAsR0FBaUJoQyxZQUFqQiIsImZpbGUiOiJnYW1pbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFBhbiA9IHJlcXVpcmUoJy4uLy4uL21pc2NlbGxhbmVvdXMvcGFuJyksXG4gICAgICBUaWx0ID0gcmVxdWlyZSgnLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0JyksXG5cbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2NhbWVyYScpLFxuICAgICAgdmVjdG9yTWF0aHMgPSByZXF1aXJlKCcuLi8uLi9tYXRocy92ZWN0b3InKSxcbiAgICAgIG1hdHJpeFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy9tYXRyaXgnKTtcblxuY29uc3QgeyB6ZXJvMiB9ID0gdmVjdG9yTWF0aHMsXG4gICAgICB7IG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cywgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcywgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZywgcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCwgbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXggfSA9IG1hdHJpeFV0aWxpdGllcztcblxuY29uc3QgZGVmYXVsdEluaXRpYWxBbmdsZXMgPSB6ZXJvMigpLFxuICAgICAgZGVmYXVsdEluaXRpYWxQb3NpdGlvbiA9IFsgMCwgMCwgNV07XG5cblxuY2xhc3MgR2FtaW5nQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3Ioa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KSB7XG4gICAgc3VwZXIoa2V5RXZlbnRzLCBtb3VzZUV2ZW50cywgdXBkYXRlSGFuZGxlciwgcGFuLCB0aWx0KTtcblxuXG4gIH1cblxuICBtb3VzZVdoZWVsSGFuZGxlcihkZWx0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5wYW4udXBkYXRlWk9mZnNldChkZWx0YSwgdGhpcy50aWx0KTtcblxuICAgIHRoaXMudXBkYXRlKGNhbnZhcyk7XG4gIH1cblxuICB1cGRhdGUoY2FudmFzKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBoZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpLFxuICAgICAgICAgIG9mZnNldHMgPSB0aGlzLnBhbi5nZXRPZmZzZXRzKCksXG5cbiAgICAgICAgICBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21XaWR0aEFuZEhlaWdodCh3aWR0aCwgaGVpZ2h0KSxcbiAgICAgICAgICBub3JtYWxzTWF0cml4ID0gbm9ybWFsc01hdHJpeEZyb21Sb3RhdGlvbnNNYXRyaXgocm90YXRpb25zTWF0cml4KTtcblxuICAgIHN1cGVyLnVwZGF0ZShvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbml0aWFsQW5nbGVzID0gZGVmYXVsdEluaXRpYWxBbmdsZXMsIGluaXRpYWxQb3NpdGlvbiA9IGRlZmF1bHRJbml0aWFsUG9zaXRpb24gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgZmxpcHBlZCA9IHRydWUsXG4gICAgICAgICAgcGFuID0gUGFuLmZyb21Jbml0aWFsUG9zaXRpb24oaW5pdGlhbFBvc2l0aW9uKSxcbiAgICAgICAgICB0aWx0ID0gVGlsdC5mcm9tSW5pdGlhbEFuZ2xlc0FuZEZsaXBwZWQoaW5pdGlhbEFuZ2xlcywgZmxpcHBlZCksXG5cbiAgICAgICAgICBnYW1pbmdDYW1lcmEgPSBDYW1lcmEuZnJvbVByb3BlcnRpZXMoR2FtaW5nQ2FtZXJhLCBwcm9wZXJ0aWVzLCBwYW4sIHRpbHQpO1xuXG4gICAgcmV0dXJuIGdhbWluZ0NhbWVyYTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWluZ0NhbWVyYTtcbiJdfQ==