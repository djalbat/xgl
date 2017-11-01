'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Mask = require('../element/canvas/mask'),
    TexturedPlane = require('./common/textured/plane'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredCylinder = require('./common/coloured/cylinder'),
    TexturedCylinder = require('./common/textured/cylinder'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 10, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        TexturedPlane,
        { width: 1, height: 1, imageName: 'gravel.jpg' },
        React.createElement(Mask, { rotations: [0, 0, 0] })
      )
    );
  });
};

module.exports = shapes;

/*

 <TexturedCuboid width={1} height={1} depth={1} position={[ 0, 2, 0 ]} imageName="bricks.jpg" />
 <ColouredCylinder width={1} height={1} depth={1} position={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
 <TexturedCylinder width={1} height={1} depth={1} position={[ 0, 1, -1 ]} rotations={[ 0, 90, 90 ]} imageName="grass.jpg" />

*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNhbnZhcyIsIlNjZW5lIiwiQ2FtZXJhIiwiTWFzayIsIlRleHR1cmVkUGxhbmUiLCJUZXh0dXJlZEN1Ym9pZCIsIkNvbG91cmVkQ3lsaW5kZXIiLCJUZXh0dXJlZEN5bGluZGVyIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJzaGFwZXMiLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxRQUFRRixRQUFRLGtCQUFSLENBRGQ7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLG1CQUFSLENBRmY7QUFBQSxJQUdNSSxPQUFPSixRQUFRLHdCQUFSLENBSGI7QUFBQSxJQUlNSyxnQkFBZ0JMLFFBQVEseUJBQVIsQ0FKdEI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxtQkFBbUJQLFFBQVEsNEJBQVIsQ0FOekI7QUFBQSxJQU9NUSxtQkFBbUJSLFFBQVEsNEJBQVIsQ0FQekI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTs7QUFFbkIsTUFBTUMsU0FBUyxJQUFJWCxNQUFKLEVBQWY7O0FBRUFTLGtCQUFnQixVQUFDRyxRQUFEO0FBQUEsV0FFZDtBQUFDLFdBQUQ7QUFBQSxRQUFPLFVBQVVBLFFBQWpCLEVBQTJCLFFBQVFELE1BQW5DO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixFQUF6QixFQUE2QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTVDLEVBQXlELFFBQVFBLE1BQWpFLEdBREY7QUFFRTtBQUFDLHFCQUFEO0FBQUEsVUFBZSxPQUFPLENBQXRCLEVBQXlCLFFBQVEsQ0FBakMsRUFBb0MsV0FBVSxZQUE5QztBQUNFLDRCQUFDLElBQUQsSUFBTSxXQUFXLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWpCO0FBREY7QUFGRixLQUZjO0FBQUEsR0FBaEI7QUFVRCxDQWREOztBQWdCQUUsT0FBT0MsT0FBUCxHQUFpQkosTUFBakI7O0FBRUEiLCJmaWxlIjoic2hhcGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW52YXMvbWFzaycpLFxuICAgICAgVGV4dHVyZWRQbGFuZSA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL3BsYW5lJyksXG4gICAgICBUZXh0dXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL3RleHR1cmVkL2N1Ym9pZCcpLFxuICAgICAgQ29sb3VyZWRDeWxpbmRlciA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N5bGluZGVyJyksXG4gICAgICBUZXh0dXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3lsaW5kZXInKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3Qgc2hhcGVzID0gKCkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezEwfSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8VGV4dHVyZWRQbGFuZSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgPlxuICAgICAgICA8TWFzayByb3RhdGlvbnM9e1sgMCwgMCwgMCBdfSAvPlxuICAgICAgPC9UZXh0dXJlZFBsYW5lPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc2hhcGVzO1xuXG4vKlxuXG4gPFRleHR1cmVkQ3Vib2lkIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAyLCAwIF19IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuIDxDb2xvdXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAtMSwgMSBdfSByb3RhdGlvbnM9e1sgMCwgMCwgMCBdfSBjb2xvdXI9e1sgMSwgMCwgMCwgMSBdfSAvPlxuIDxUZXh0dXJlZEN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBwb3NpdGlvbj17WyAwLCAxLCAtMSBdfSByb3RhdGlvbnM9e1sgMCwgOTAsIDkwIF19IGltYWdlTmFtZT1cImdyYXNzLmpwZ1wiIC8+XG5cbiovXG5cbiJdfQ==