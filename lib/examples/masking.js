'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('../examples/common/coloured/cuboid'),
    ColouredTriangle = require('../examples/common/coloured/triangle');

var masking = function masking() {
  var canvas = new Canvas();

  (function () {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(Camera, { initialDistance: 15, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        ColouredCuboid,
        { colour: [1, 1, 0, 1], position: [-0.5, -0.5, -0.5] },
        React.createElement(
          Mask,
          null,
          React.createElement(ColouredCuboid, { colour: [1, 0, 1, 1], width: 0.5, height: 0.5, depth: 0.5, position: [0.25, 0.25, 0.25] })
        )
      )
    );
  })();
};

module.exports = masking;

/*
 <ColouredTriangle colour={[ 1, 1, 0, 1 ]} vertices={[ [ +2, -2, 0 ], [ +2, +2, 0 ], [ -2, +2, 0 ] ]}>
 <Mask>
 <ColouredTriangle colour={[ 1, 0, 0, 1 ]} vertices={[ [ +1, -1, 1 ], [ +1, +1, 1 ], [ -1, +1, 1 ] ]} />
 </Mask>
 </ColouredTriangle>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJDb2xvdXJlZEN1Ym9pZCIsIkNvbG91cmVkVHJpYW5nbGUiLCJtYXNraW5nIiwiY2FudmFzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsV0FBUjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01FLE9BQU9GLFFBQVEsaUJBQVIsQ0FEYjtBQUFBLElBRU1HLFFBQVFILFFBQVEsa0JBQVIsQ0FGZDtBQUFBLElBR01JLFNBQVNKLFFBQVEsbUJBQVIsQ0FIZjtBQUFBLElBSU1LLGlCQUFpQkwsUUFBUSxvQ0FBUixDQUp2QjtBQUFBLElBS01NLG1CQUFtQk4sUUFBUSxzQ0FBUixDQUx6Qjs7QUFPQSxJQUFNTyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxTQUFTLElBQUlQLE1BQUosRUFBZjs7QUFFQSxHQUFDO0FBQUEsV0FFQztBQUFDLFdBQUQ7QUFBQSxRQUFPLFFBQVFPLE1BQWY7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLEVBQXpCLEVBQTZCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBNUMsRUFBeUQsUUFBUUEsTUFBakUsR0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF4QixFQUF3QyxVQUFVLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmLENBQWxEO0FBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRSw4QkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQXhCLEVBQXdDLE9BQU8sR0FBL0MsRUFBb0QsUUFBUSxHQUE1RCxFQUFpRSxPQUFPLEdBQXhFLEVBQTZFLFVBQVUsQ0FBRSxJQUFGLEVBQVEsSUFBUixFQUFjLElBQWQsQ0FBdkY7QUFERjtBQURGO0FBRkYsS0FGRDtBQUFBLEdBQUQ7QUFZRCxDQWZEOztBQWlCQUMsT0FBT0MsT0FBUCxHQUFpQkgsT0FBakI7O0FBRUEiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3RyaWFuZ2xlJyk7XG5cbmNvbnN0IG1hc2tpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAoKCkgPT4gXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezE1fSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfT5cbiAgICAgICAgPE1hc2s+XG4gICAgICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAwLCAxLCAxIF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgIDwvQ29sb3VyZWRDdWJvaWQ+XG4gICAgPC9TY2VuZT5cblxuICApKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmc7XG5cbi8qXG4gPENvbG91cmVkVHJpYW5nbGUgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gdmVydGljZXM9e1sgWyArMiwgLTIsIDAgXSwgWyArMiwgKzIsIDAgXSwgWyAtMiwgKzIsIDAgXSBdfT5cbiA8TWFzaz5cbiA8Q29sb3VyZWRUcmlhbmdsZSBjb2xvdXI9e1sgMSwgMCwgMCwgMSBdfSB2ZXJ0aWNlcz17WyBbICsxLCAtMSwgMSBdLCBbICsxLCArMSwgMSBdLCBbIC0xLCArMSwgMSBdIF19IC8+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRUcmlhbmdsZT5cbiovIl19