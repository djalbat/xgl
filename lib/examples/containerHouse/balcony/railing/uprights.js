'use strict';

var vec3 = require('../../../../maths/vec3'),
    vec4 = require('../../../../maths/vec4'),
    Upright = require('./upright');

var add = vec3.add,
    composeRotate = vec4.composeRotate;


var Uprights = function Uprights(properties) {
      var position = properties.position,
          rotations = properties.rotations,
          height = properties.height,
          length = properties.length,
          thickness = properties.thickness,
          overallOffset = position,
          elements = [],
          step = 0.5,
          count = length / step;


      for (var index = 1; index < count; index++) {
            var _position = [step * index, 0, thickness / 2, 1],
                rotate = composeRotate(rotations);

            elements.push(React.createElement(Upright, { position: add(overallOffset, rotate(_position)), rotations: rotations, height: height }));
      }

      return elements;
};

module.exports = Uprights;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJ2ZWM0IiwiVXByaWdodCIsImFkZCIsImNvbXBvc2VSb3RhdGUiLCJVcHJpZ2h0cyIsInByb3BlcnRpZXMiLCJwb3NpdGlvbiIsInJvdGF0aW9ucyIsImhlaWdodCIsImxlbmd0aCIsInRoaWNrbmVzcyIsIm92ZXJhbGxPZmZzZXQiLCJlbGVtZW50cyIsInN0ZXAiLCJjb3VudCIsImluZGV4Iiwicm90YXRlIiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLE9BQU9DLFFBQVEsd0JBQVIsQ0FBYjtBQUFBLElBQ01DLE9BQU9ELFFBQVEsd0JBQVIsQ0FEYjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjs7QUFJTSxJQUFFRyxHQUFGLEdBQVVKLElBQVYsQ0FBRUksR0FBRjtBQUFBLElBQ0VDLGFBREYsR0FDb0JILElBRHBCLENBQ0VHLGFBREY7OztBQUdOLElBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxVQUFELEVBQWdCO0FBQUEsVUFDdkJDLFFBRHVCLEdBQzRCRCxVQUQ1QixDQUN2QkMsUUFEdUI7QUFBQSxVQUNiQyxTQURhLEdBQzRCRixVQUQ1QixDQUNiRSxTQURhO0FBQUEsVUFDRkMsTUFERSxHQUM0QkgsVUFENUIsQ0FDRkcsTUFERTtBQUFBLFVBQ01DLE1BRE4sR0FDNEJKLFVBRDVCLENBQ01JLE1BRE47QUFBQSxVQUNjQyxTQURkLEdBQzRCTCxVQUQ1QixDQUNjSyxTQURkO0FBQUEsVUFFekJDLGFBRnlCLEdBRVRMLFFBRlM7QUFBQSxVQUd6Qk0sUUFIeUIsR0FHZCxFQUhjO0FBQUEsVUFJekJDLElBSnlCLEdBSWxCLEdBSmtCO0FBQUEsVUFLekJDLEtBTHlCLEdBS2pCTCxTQUFTSSxJQUxROzs7QUFPL0IsV0FBSyxJQUFJRSxRQUFRLENBQWpCLEVBQW9CQSxRQUFRRCxLQUE1QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUMsZ0JBQU1ULFlBQVcsQ0FBRU8sT0FBT0UsS0FBVCxFQUFnQixDQUFoQixFQUFtQkwsWUFBWSxDQUEvQixFQUFrQyxDQUFsQyxDQUFqQjtBQUFBLGdCQUNNTSxTQUFTYixjQUFjSSxTQUFkLENBRGY7O0FBR0FLLHFCQUFTSyxJQUFULENBRUUsb0JBQUMsT0FBRCxJQUFTLFVBQVVmLElBQUlTLGFBQUosRUFBbUJLLE9BQU9WLFNBQVAsQ0FBbkIsQ0FBbkIsRUFBeUQsV0FBV0MsU0FBcEUsRUFBK0UsUUFBUUMsTUFBdkYsR0FGRjtBQUtEOztBQUVELGFBQU9JLFFBQVA7QUFDRCxDQW5CRDs7QUFxQkFNLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6InVwcmlnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgdmVjNCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL21hdGhzL3ZlYzQnKSxcbiAgICAgIFVwcmlnaHQgPSByZXF1aXJlKCcuL3VwcmlnaHQnKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzMsXG4gICAgICB7IGNvbXBvc2VSb3RhdGUgfSA9IHZlYzQ7XG5cbmNvbnN0IFVwcmlnaHRzID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBwb3NpdGlvbiwgcm90YXRpb25zLCBoZWlnaHQsIGxlbmd0aCwgdGhpY2tuZXNzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICBvdmVyYWxsT2Zmc2V0ID0gcG9zaXRpb24sXG4gICAgICAgIGVsZW1lbnRzID0gW10sXG4gICAgICAgIHN0ZXAgPSAwLjUsXG4gICAgICAgIGNvdW50ID0gbGVuZ3RoIC8gc3RlcDtcblxuICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFsgc3RlcCAqIGluZGV4LCAwLCB0aGlja25lc3MgLyAyLCAxIF0sXG4gICAgICAgICAgcm90YXRlID0gY29tcG9zZVJvdGF0ZShyb3RhdGlvbnMpO1xuXG4gICAgZWxlbWVudHMucHVzaChcblxuICAgICAgPFVwcmlnaHQgcG9zaXRpb249e2FkZChvdmVyYWxsT2Zmc2V0LCByb3RhdGUocG9zaXRpb24pKX0gcm90YXRpb25zPXtyb3RhdGlvbnN9IGhlaWdodD17aGVpZ2h0fSAvPlxuXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVcHJpZ2h0cztcbiJdfQ==