'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('../examples/common/coloured/cuboid'),
    ColouredTriangle = require('../examples/common/coloured/triangle'),
    ColouredQuadrangle = require('../examples/common/coloured/quadrangle');

var facets = function facets() {
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

module.exports = facets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mYWNldHMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNhbnZhcyIsIk1hc2siLCJTY2VuZSIsIkNhbWVyYSIsIkNvbG91cmVkQ3Vib2lkIiwiQ29sb3VyZWRUcmlhbmdsZSIsIkNvbG91cmVkUXVhZHJhbmdsZSIsImZhY2V0cyIsImNhbnZhcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxpQkFBaUJMLFFBQVEsb0NBQVIsQ0FKdkI7QUFBQSxJQUtNTSxtQkFBbUJOLFFBQVEsc0NBQVIsQ0FMekI7QUFBQSxJQU1NTyxxQkFBcUJQLFFBQVEsd0NBQVIsQ0FOM0I7O0FBUUEsSUFBTVEsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBTUMsU0FBUyxJQUFJUixNQUFKLEVBQWY7O0FBRUEsR0FBQztBQUFBLFdBRUM7QUFBQyxXQUFEO0FBQUEsUUFBTyxRQUFRUSxNQUFmO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixFQUF6QixFQUE2QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTVDLEVBQXlELFFBQVFBLE1BQWpFLEdBREY7QUFFRTtBQUFDLHNCQUFEO0FBQUEsVUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBeEI7QUFDRTtBQUFDLGNBQUQ7QUFBQTtBQUNFLDhCQUFDLGNBQUQsSUFBZ0IsUUFBUSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQVgsQ0FBeEIsRUFBd0MsT0FBTyxHQUEvQyxFQUFvRCxRQUFRLEdBQTVELEVBQWlFLE9BQU8sR0FBeEUsRUFBNkUsVUFBVSxDQUFFLElBQUYsRUFBUSxJQUFSLEVBQWMsSUFBZCxDQUF2RjtBQURGO0FBREY7QUFGRixLQUZEO0FBQUEsR0FBRDtBQVlELENBZkQ7O0FBaUJBQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQjs7QUFFQSIsImZpbGUiOiJmYWNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRUcmlhbmdsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC90cmlhbmdsZScpLFxuICAgICAgQ29sb3VyZWRRdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3F1YWRyYW5nbGUnKTtcblxuY29uc3QgZmFjZXRzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgKCgpID0+IFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxNX0gaW5pdGlhbE9mZnNldD17WyAwLCAwLCAwIF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAxLCAwLCAxIF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1NjZW5lPlxuXG4gICkoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjZXRzO1xuXG4vKlxuXG4gPENvbG91cmVkUXVhZHJhbmdsZSBjb2xvdXI9e1sgMSwgMSwgMSwgMSBdfSAvPlxuXG4gPENvbG91cmVkVHJpYW5nbGUgdmVydGljZXM9e1sgWyAyLCAyLCAwIF0sIFsgMiwgLTIsIDAgXSwgWyAtMiwgMiwgMCBdIF19IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IHBvc2l0aW9uPXtbIDAsIDAsIDAgXX0gcm90YXRpb25zPXtbIC00NSwgKzQ1LCAtNDUgXX0gPlxuICAgPE1hc2s+XG4gICAgIDxDb2xvdXJlZFRyaWFuZ2xlIHZlcnRpY2VzPXtbIFsgMCwgMCwgMCBdLCBbIDIsIDAsIDAgXSwgWyAwLCAyLCAwIF0gXX0gY29sb3VyPXtbIDAsIDEsIDAsIDEgXX0gcG9zaXRpb249e1sgMCwgMCwgMSBdfSByb3RhdGlvbnM9e1sgKzE1LCAtMTUsIDAgXX0gPlxuICAgICAgIDxNYXNrPlxuICAgICAgICAgPENvbG91cmVkVHJpYW5nbGUgdmVydGljZXM9e1sgWyAxLCAwLCAwIF0sIFsgMSwgMSwgMCBdLCBbIDAsIDEsIDAgXSBdfSBjb2xvdXI9e1sgMCwgMCwgMSwgMSBdfSBwb3NpdGlvbj17WyAwLCAwLCAxIF19IHJvdGF0aW9ucz17WyAtMTUsICsxNSwgMCBdfSAvPlxuICAgICAgIDwvTWFzaz5cbiAgICAgPC9Db2xvdXJlZFRyaWFuZ2xlPlxuICAgPC9NYXNrPlxuIDwvQ29sb3VyZWRUcmlhbmdsZT5cblxuICovXG4iXX0=