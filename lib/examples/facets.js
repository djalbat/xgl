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
      React.createElement(ColouredCuboid, { colour: [1, 1, 0, 1] })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mYWNldHMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNhbnZhcyIsIk1hc2siLCJTY2VuZSIsIkNhbWVyYSIsIkNvbG91cmVkQ3Vib2lkIiwiQ29sb3VyZWRUcmlhbmdsZSIsIkNvbG91cmVkUXVhZHJhbmdsZSIsImZhY2V0cyIsImNhbnZhcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxpQkFBaUJMLFFBQVEsb0NBQVIsQ0FKdkI7QUFBQSxJQUtNTSxtQkFBbUJOLFFBQVEsc0NBQVIsQ0FMekI7QUFBQSxJQU1NTyxxQkFBcUJQLFFBQVEsd0NBQVIsQ0FOM0I7O0FBUUEsSUFBTVEsU0FBUyxTQUFUQSxNQUFTLEdBQU07QUFDbkIsTUFBTUMsU0FBUyxJQUFJUixNQUFKLEVBQWY7O0FBRUEsR0FBQztBQUFBLFdBRUM7QUFBQyxXQUFEO0FBQUEsUUFBTyxRQUFRUSxNQUFmO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixFQUF6QixFQUE2QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTVDLEVBQXlELFFBQVFBLE1BQWpFLEdBREY7QUFFRSwwQkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQXhCO0FBRkYsS0FGRDtBQUFBLEdBQUQ7QUFRRCxDQVhEOztBQWFBQyxPQUFPQyxPQUFQLEdBQWlCSCxNQUFqQjs7QUFFQSIsImZpbGUiOiJmYWNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L21hc2snKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRUcmlhbmdsZSA9IHJlcXVpcmUoJy4uL2V4YW1wbGVzL2NvbW1vbi9jb2xvdXJlZC90cmlhbmdsZScpLFxuICAgICAgQ29sb3VyZWRRdWFkcmFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3F1YWRyYW5nbGUnKTtcblxuY29uc3QgZmFjZXRzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgKCgpID0+IFxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxNX0gaW5pdGlhbE9mZnNldD17WyAwLCAwLCAwIF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAxLCAwLCAxXX0gLz5cbiAgICA8L1NjZW5lPlxuXG4gICkoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZmFjZXRzO1xuXG4vKlxuIDxDb2xvdXJlZFF1YWRyYW5nbGUgY29sb3VyPXtbIDEsIDEsIDEsIDEgXX0gLz5cbiA8Q29sb3VyZWRUcmlhbmdsZSB2ZXJ0aWNlcz17WyBbIDIsIDIsIDAgXSwgWyAyLCAtMiwgMCBdLCBbIC0yLCAyLCAwIF0gXX0gY29sb3VyPXtbIDEsIDAsIDAsIDEgXX0gcG9zaXRpb249e1sgMCwgMCwgMCBdfSByb3RhdGlvbnM9e1sgLTQ1LCArNDUsIC00NSBdfSA+XG4gPE1hc2s+XG4gPENvbG91cmVkVHJpYW5nbGUgdmVydGljZXM9e1sgWyAwLCAwLCAwIF0sIFsgMiwgMCwgMCBdLCBbIDAsIDIsIDAgXSBdfSBjb2xvdXI9e1sgMCwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAwLCAwLCAxIF19IHJvdGF0aW9ucz17WyArMTUsIC0xNSwgMCBdfSA+XG4gPE1hc2s+XG4gPENvbG91cmVkVHJpYW5nbGUgdmVydGljZXM9e1sgWyAxLCAwLCAwIF0sIFsgMSwgMSwgMCBdLCBbIDAsIDEsIDAgXSBdfSBjb2xvdXI9e1sgMCwgMCwgMSwgMSBdfSBwb3NpdGlvbj17WyAwLCAwLCAxIF19IHJvdGF0aW9ucz17WyAtMTUsICsxNSwgMCBdfSAvPlxuIDwvTWFzaz5cbiA8L0NvbG91cmVkVHJpYW5nbGU+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRUcmlhbmdsZT5cbiAqLyJdfQ==