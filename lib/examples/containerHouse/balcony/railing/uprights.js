'use strict';

var vec3 = require('../../../../maths/vec3'),
    vec4 = require('../../../../maths/vec4'),
    Upright = require('./upright');

var add = vec3.add,
    composeRotate = vec4.composeRotate;


var Uprights = function Uprights(properties) {
      var offset = properties.offset,
          rotations = properties.rotations,
          height = properties.height,
          length = properties.length,
          thickness = properties.thickness,
          overallOffset = offset,
          elements = [],
          step = 0.5,
          count = length / step;


      for (var index = 1; index < count; index++) {
            var _offset = [step * index, 0, thickness / 2, 1],
                rotate = composeRotate(rotations);

            elements.push(React.createElement(Upright, { offset: add(overallOffset, rotate(_offset)), rotations: rotations, height: height }));
      }

      return elements;
};

module.exports = Uprights;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3JhaWxpbmcvdXByaWdodHMuanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJ2ZWM0IiwiVXByaWdodCIsImFkZCIsImNvbXBvc2VSb3RhdGUiLCJVcHJpZ2h0cyIsInByb3BlcnRpZXMiLCJvZmZzZXQiLCJyb3RhdGlvbnMiLCJoZWlnaHQiLCJsZW5ndGgiLCJ0aGlja25lc3MiLCJvdmVyYWxsT2Zmc2V0IiwiZWxlbWVudHMiLCJzdGVwIiwiY291bnQiLCJpbmRleCIsInJvdGF0ZSIsInB1c2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLHdCQUFSLENBQWI7QUFBQSxJQUNNQyxPQUFPRCxRQUFRLHdCQUFSLENBRGI7QUFBQSxJQUVNRSxVQUFVRixRQUFRLFdBQVIsQ0FGaEI7O0FBSU0sSUFBRUcsR0FBRixHQUFVSixJQUFWLENBQUVJLEdBQUY7QUFBQSxJQUNFQyxhQURGLEdBQ29CSCxJQURwQixDQUNFRyxhQURGOzs7QUFHTixJQUFNQyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsVUFBRCxFQUFnQjtBQUFBLFVBQ3ZCQyxNQUR1QixHQUMwQkQsVUFEMUIsQ0FDdkJDLE1BRHVCO0FBQUEsVUFDZkMsU0FEZSxHQUMwQkYsVUFEMUIsQ0FDZkUsU0FEZTtBQUFBLFVBQ0pDLE1BREksR0FDMEJILFVBRDFCLENBQ0pHLE1BREk7QUFBQSxVQUNJQyxNQURKLEdBQzBCSixVQUQxQixDQUNJSSxNQURKO0FBQUEsVUFDWUMsU0FEWixHQUMwQkwsVUFEMUIsQ0FDWUssU0FEWjtBQUFBLFVBRXpCQyxhQUZ5QixHQUVUTCxNQUZTO0FBQUEsVUFHekJNLFFBSHlCLEdBR2QsRUFIYztBQUFBLFVBSXpCQyxJQUp5QixHQUlsQixHQUprQjtBQUFBLFVBS3pCQyxLQUx5QixHQUtqQkwsU0FBU0ksSUFMUTs7O0FBTy9CLFdBQUssSUFBSUUsUUFBUSxDQUFqQixFQUFvQkEsUUFBUUQsS0FBNUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDLGdCQUFNVCxVQUFTLENBQUVPLE9BQU9FLEtBQVQsRUFBZ0IsQ0FBaEIsRUFBbUJMLFlBQVksQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBZjtBQUFBLGdCQUNNTSxTQUFTYixjQUFjSSxTQUFkLENBRGY7O0FBR0FLLHFCQUFTSyxJQUFULENBRUUsb0JBQUMsT0FBRCxJQUFTLFFBQVFmLElBQUlTLGFBQUosRUFBbUJLLE9BQU9WLE9BQVAsQ0FBbkIsQ0FBakIsRUFBcUQsV0FBV0MsU0FBaEUsRUFBMkUsUUFBUUMsTUFBbkYsR0FGRjtBQUtEOztBQUVELGFBQU9JLFFBQVA7QUFDRCxDQW5CRDs7QUFxQkFNLE9BQU9DLE9BQVAsR0FBaUJmLFFBQWpCIiwiZmlsZSI6InVwcmlnaHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB2ZWMzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vbWF0aHMvdmVjMycpLFxuICAgICAgdmVjNCA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL21hdGhzL3ZlYzQnKSxcbiAgICAgIFVwcmlnaHQgPSByZXF1aXJlKCcuL3VwcmlnaHQnKTtcblxuY29uc3QgeyBhZGQgfSA9IHZlYzMsXG4gICAgICB7IGNvbXBvc2VSb3RhdGUgfSA9IHZlYzQ7XG5cbmNvbnN0IFVwcmlnaHRzID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBvZmZzZXQsIHJvdGF0aW9ucywgaGVpZ2h0LCBsZW5ndGgsIHRoaWNrbmVzcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgb3ZlcmFsbE9mZnNldCA9IG9mZnNldCxcbiAgICAgICAgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgc3RlcCA9IDAuNSxcbiAgICAgICAgY291bnQgPSBsZW5ndGggLyBzdGVwO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgIGNvbnN0IG9mZnNldCA9IFsgc3RlcCAqIGluZGV4LCAwLCB0aGlja25lc3MgLyAyLCAxIF0sXG4gICAgICAgICAgcm90YXRlID0gY29tcG9zZVJvdGF0ZShyb3RhdGlvbnMpO1xuXG4gICAgZWxlbWVudHMucHVzaChcblxuICAgICAgPFVwcmlnaHQgb2Zmc2V0PXthZGQob3ZlcmFsbE9mZnNldCwgcm90YXRlKG9mZnNldCkpfSByb3RhdGlvbnM9e3JvdGF0aW9uc30gaGVpZ2h0PXtoZWlnaHR9IC8+XG5cbiAgICApXG4gIH1cblxuICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVwcmlnaHRzO1xuIl19