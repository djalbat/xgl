'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('../examples/common/coloured/cuboid'),
    ColouredTriangle = require('../examples/common/coloured/triangle'),
    ColouredQuadrangle = require('../examples/common/coloured/quadrangle');

var masking = function masking() {
  var canvas = new Canvas();

  (function () {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(Camera, { initialDistance: 15, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        ColouredCuboid,
        { colour: [1, 1, 0, 1] },
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

 <ColouredQuadrangle colour={[ 1, 1, 1, 1 ]} />

 <ColouredTriangle vertices={[ [ 2, 2, 0 ], [ 2, -2, 0 ], [ -2, 2, 0 ] ]} colour={[ 1, 0, 0, 1 ]} position={[ 0, 0, 0 ]} rotations={[ -45, +45, -45 ]} >
   <Mask>
     <ColouredTriangle vertices={[ [ 0, 0, 0 ], [ 2, 0, 0 ], [ 0, 2, 0 ] ]} colour={[ 0, 1, 0, 1 ]} position={[ 0, 0, 1 ]} rotations={[ +15, -15, 0 ]} >
       <Mask>
         <ColouredTriangle vertices={[ [ 1, 0, 0 ], [ 1, 1, 0 ], [ 0, 1, 0 ] ]} colour={[ 0, 0, 1, 1 ]} position={[ 0, 0, 1 ]} rotations={[ -15, +15, 0 ]} />
       </Mask>
     </ColouredTriangle>
   </Mask>
 </ColouredTriangle>

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJDb2xvdXJlZEN1Ym9pZCIsIkNvbG91cmVkVHJpYW5nbGUiLCJDb2xvdXJlZFF1YWRyYW5nbGUiLCJtYXNraW5nIiwiY2FudmFzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsV0FBUjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01FLE9BQU9GLFFBQVEsaUJBQVIsQ0FEYjtBQUFBLElBRU1HLFFBQVFILFFBQVEsa0JBQVIsQ0FGZDtBQUFBLElBR01JLFNBQVNKLFFBQVEsbUJBQVIsQ0FIZjtBQUFBLElBSU1LLGlCQUFpQkwsUUFBUSxvQ0FBUixDQUp2QjtBQUFBLElBS01NLG1CQUFtQk4sUUFBUSxzQ0FBUixDQUx6QjtBQUFBLElBTU1PLHFCQUFxQlAsUUFBUSx3Q0FBUixDQU4zQjs7QUFRQSxJQUFNUSxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxTQUFTLElBQUlSLE1BQUosRUFBZjs7QUFFQSxHQUFDO0FBQUEsV0FFQztBQUFDLFdBQUQ7QUFBQSxRQUFPLFFBQVFRLE1BQWY7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLEVBQXpCLEVBQTZCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBNUMsRUFBeUQsUUFBUUEsTUFBakUsR0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF4QjtBQUNFO0FBQUMsY0FBRDtBQUFBO0FBQ0UsOEJBQUMsY0FBRCxJQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF4QixFQUF3QyxPQUFPLEdBQS9DLEVBQW9ELFFBQVEsR0FBNUQsRUFBaUUsT0FBTyxHQUF4RSxFQUE2RSxVQUFVLENBQUUsSUFBRixFQUFRLElBQVIsRUFBYyxJQUFkLENBQXZGO0FBREY7QUFERjtBQUZGLEtBRkQ7QUFBQSxHQUFEO0FBWUQsQ0FmRDs7QUFpQkFDLE9BQU9DLE9BQVAsR0FBaUJILE9BQWpCOztBQUVBIiwiZmlsZSI6Im1hc2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRUcmlhbmdsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC90cmlhbmdsZScpLFxuICAgICAgQ29sb3VyZWRRdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3F1YWRyYW5nbGUnKTtcblxuY29uc3QgbWFza2luZyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICgoKSA9PiBcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfT5cbiAgICAgICAgPE1hc2s+XG4gICAgICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAwLCAxLCAxIF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgIDwvTWFzaz5cbiAgICAgIDwvQ29sb3VyZWRDdWJvaWQ+XG4gICAgPC9TY2VuZT5cblxuICApKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmc7XG5cbi8qXG5cbiA8Q29sb3VyZWRRdWFkcmFuZ2xlIGNvbG91cj17WyAxLCAxLCAxLCAxIF19IC8+XG5cbiA8Q29sb3VyZWRUcmlhbmdsZSB2ZXJ0aWNlcz17WyBbIDIsIDIsIDAgXSwgWyAyLCAtMiwgMCBdLCBbIC0yLCAyLCAwIF0gXX0gY29sb3VyPXtbIDEsIDAsIDAsIDEgXX0gcG9zaXRpb249e1sgMCwgMCwgMCBdfSByb3RhdGlvbnM9e1sgLTQ1LCArNDUsIC00NSBdfSA+XG4gICA8TWFzaz5cbiAgICAgPENvbG91cmVkVHJpYW5nbGUgdmVydGljZXM9e1sgWyAwLCAwLCAwIF0sIFsgMiwgMCwgMCBdLCBbIDAsIDIsIDAgXSBdfSBjb2xvdXI9e1sgMCwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAwLCAwLCAxIF19IHJvdGF0aW9ucz17WyArMTUsIC0xNSwgMCBdfSA+XG4gICAgICAgPE1hc2s+XG4gICAgICAgICA8Q29sb3VyZWRUcmlhbmdsZSB2ZXJ0aWNlcz17WyBbIDEsIDAsIDAgXSwgWyAxLCAxLCAwIF0sIFsgMCwgMSwgMCBdIF19IGNvbG91cj17WyAwLCAwLCAxLCAxIF19IHBvc2l0aW9uPXtbIDAsIDAsIDEgXX0gcm90YXRpb25zPXtbIC0xNSwgKzE1LCAwIF19IC8+XG4gICAgICAgPC9NYXNrPlxuICAgICA8L0NvbG91cmVkVHJpYW5nbGU+XG4gICA8L01hc2s+XG4gPC9Db2xvdXJlZFRyaWFuZ2xlPlxuXG4gKi9cbiJdfQ==