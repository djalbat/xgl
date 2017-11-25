'use strict';

// const ColouredPlane = require('../../common/coloured/plane');

var indent = 1 / 12;

var Roof = function Roof(properties) {
      var length = properties.length,
          overallWidth = properties.overallWidth,
          overallHeight = properties.overallHeight,
          width = overallWidth - 2 * indent,
          height = length - 2 * indent,
          position = [indent, overallHeight - indent, length - indent],
          rotations = [-90, 0, 0],
          colour = [1, 1, 1, 1];

      // return (
      //
      //   <ColouredPlane colour={colour} width={width} height={height} position={position} rotations={rotations} />
      //
      // );
};

module.exports = Roof;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvcm9vZi5qcyJdLCJuYW1lcyI6WyJpbmRlbnQiLCJSb29mIiwicHJvcGVydGllcyIsImxlbmd0aCIsIm92ZXJhbGxXaWR0aCIsIm92ZXJhbGxIZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwicm90YXRpb25zIiwiY29sb3VyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUEsSUFBTUEsU0FBUyxJQUFFLEVBQWpCOztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxVQUFELEVBQWdCO0FBQUEsVUFDbkJDLE1BRG1CLEdBQ3FCRCxVQURyQixDQUNuQkMsTUFEbUI7QUFBQSxVQUNYQyxZQURXLEdBQ3FCRixVQURyQixDQUNYRSxZQURXO0FBQUEsVUFDR0MsYUFESCxHQUNxQkgsVUFEckIsQ0FDR0csYUFESDtBQUFBLFVBRXJCQyxLQUZxQixHQUViRixlQUFlLElBQUVKLE1BRko7QUFBQSxVQUdyQk8sTUFIcUIsR0FHWkosU0FBUyxJQUFFSCxNQUhDO0FBQUEsVUFJckJRLFFBSnFCLEdBSVYsQ0FBRVIsTUFBRixFQUFVSyxnQkFBZ0JMLE1BQTFCLEVBQWtDRyxTQUFTSCxNQUEzQyxDQUpVO0FBQUEsVUFLckJTLFNBTHFCLEdBS1QsQ0FBRSxDQUFDLEVBQUgsRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUxTO0FBQUEsVUFNckJDLE1BTnFCLEdBTVosQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBTlk7O0FBUTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQWJEOztBQWVBQyxPQUFPQyxPQUFQLEdBQWlCWCxJQUFqQiIsImZpbGUiOiJyb29mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyBjb25zdCBDb2xvdXJlZFBsYW5lID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL2NvbG91cmVkL3BsYW5lJyk7XG5cbmNvbnN0IGluZGVudCA9IDEvMTI7XG5cbmNvbnN0IFJvb2YgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGxlbmd0aCwgb3ZlcmFsbFdpZHRoLCBvdmVyYWxsSGVpZ2h0IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB3aWR0aCA9IG92ZXJhbGxXaWR0aCAtIDIqaW5kZW50LFxuICAgICAgICBoZWlnaHQgPSBsZW5ndGggLSAyKmluZGVudCxcbiAgICAgICAgcG9zaXRpb24gPSBbIGluZGVudCwgb3ZlcmFsbEhlaWdodCAtIGluZGVudCwgbGVuZ3RoIC0gaW5kZW50IF0sXG4gICAgICAgIHJvdGF0aW9ucyA9IFsgLTkwLCAwLCAwIF0sXG4gICAgICAgIGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdO1xuXG4gIC8vIHJldHVybiAoXG4gIC8vXG4gIC8vICAgPENvbG91cmVkUGxhbmUgY29sb3VyPXtjb2xvdXJ9IHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9IHBvc2l0aW9uPXtwb3NpdGlvbn0gcm90YXRpb25zPXtyb3RhdGlvbnN9IC8+XG4gIC8vXG4gIC8vICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb2Y7XG4iXX0=