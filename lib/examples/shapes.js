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
        { width: 1, height: 1, imageName: 'gravel.jpg', rotations: [23, -3, -905] },
        React.createElement(Mask, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNhbnZhcyIsIlNjZW5lIiwiQ2FtZXJhIiwiTWFzayIsIlRleHR1cmVkUGxhbmUiLCJUZXh0dXJlZEN1Ym9pZCIsIkNvbG91cmVkQ3lsaW5kZXIiLCJUZXh0dXJlZEN5bGluZGVyIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJzaGFwZXMiLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxRQUFRRixRQUFRLGtCQUFSLENBRGQ7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLG1CQUFSLENBRmY7QUFBQSxJQUdNSSxPQUFPSixRQUFRLHdCQUFSLENBSGI7QUFBQSxJQUlNSyxnQkFBZ0JMLFFBQVEseUJBQVIsQ0FKdEI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxtQkFBbUJQLFFBQVEsNEJBQVIsQ0FOekI7QUFBQSxJQU9NUSxtQkFBbUJSLFFBQVEsNEJBQVIsQ0FQekI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTs7QUFFbkIsTUFBTUMsU0FBUyxJQUFJWCxNQUFKLEVBQWY7O0FBRUFTLGtCQUFnQixVQUFDRyxRQUFEO0FBQUEsV0FFZDtBQUFDLFdBQUQ7QUFBQSxRQUFPLFVBQVVBLFFBQWpCLEVBQTJCLFFBQVFELE1BQW5DO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixFQUF6QixFQUE2QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTVDLEVBQXlELFFBQVFBLE1BQWpFLEdBREY7QUFFRTtBQUFDLHFCQUFEO0FBQUEsVUFBZSxPQUFPLENBQXRCLEVBQXlCLFFBQVEsQ0FBakMsRUFBb0MsV0FBVSxZQUE5QyxFQUEyRCxXQUFZLENBQUUsRUFBRixFQUFNLENBQUMsQ0FBUCxFQUFVLENBQUMsR0FBWCxDQUF2RTtBQUNFLDRCQUFDLElBQUQ7QUFERjtBQUZGLEtBRmM7QUFBQSxHQUFoQjtBQVVELENBZEQ7O0FBZ0JBRSxPQUFPQyxPQUFQLEdBQWlCSixNQUFqQjs7QUFFQSIsImZpbGUiOiJzaGFwZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIE1hc2sgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbnZhcy9tYXNrJyksXG4gICAgICBUZXh0dXJlZFBsYW5lID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvcGxhbmUnKSxcbiAgICAgIFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZEN5bGluZGVyID0gcmVxdWlyZSgnLi9jb21tb24vY29sb3VyZWQvY3lsaW5kZXInKSxcbiAgICAgIFRleHR1cmVkQ3lsaW5kZXIgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0dXJlZC9jeWxpbmRlcicpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBzaGFwZXMgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTB9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxUZXh0dXJlZFBsYW5lIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGltYWdlTmFtZT1cImdyYXZlbC5qcGdcIiByb3RhdGlvbnM9eyBbIDIzLCAtMywgLTkwNSBdfSA+XG4gICAgICAgIDxNYXNrIC8+XG4gICAgICA8L1RleHR1cmVkUGxhbmU+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzaGFwZXM7XG5cbi8qXG5cbiA8VGV4dHVyZWRDdWJvaWQgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIDIsIDAgXX0gaW1hZ2VOYW1lPVwiYnJpY2tzLmpwZ1wiIC8+XG4gPENvbG91cmVkQ3lsaW5kZXIgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIC0xLCAxIF19IHJvdGF0aW9ucz17WyAwLCAwLCAwIF19IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4gPFRleHR1cmVkQ3lsaW5kZXIgd2lkdGg9ezF9IGhlaWdodD17MX0gZGVwdGg9ezF9IHBvc2l0aW9uPXtbIDAsIDEsIC0xIF19IHJvdGF0aW9ucz17WyAwLCA5MCwgOTAgXX0gaW1hZ2VOYW1lPVwiZ3Jhc3MuanBnXCIgLz5cblxuICovIl19