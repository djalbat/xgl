'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    ColouredCuboid = require('./common/coloured/cuboid'),
    TexturedCuboid = require('./common/textured/cuboid'),
    ColouredTriangle = require('../examples/common/coloured/triangle'),
    TexturedTriangle = require('../examples/common/textured/triangle'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var masking = function masking() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 5, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(
        TexturedTriangle,
        { imageName: 'graffiti.jpg' },
        React.createElement(
          Mask,
          null,
          React.createElement(ColouredTriangle, { position: [0.25, 0.125, 1], width: 0.5, height: 0.5 })
        )
      )
    );
  });
};

module.exports = masking;

/*
 <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
 </Mask>
 </ColouredCuboid>
 </Mask>
 </ColouredCuboid>
 <ColouredTriangle colour={[ 1, 0, 1, 1 ]} >
 <Mask>
 <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
 </Mask>
 </ColouredTriangle>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJDb2xvdXJlZEN1Ym9pZCIsIlRleHR1cmVkQ3Vib2lkIiwiQ29sb3VyZWRUcmlhbmdsZSIsIlRleHR1cmVkVHJpYW5nbGUiLCJpbWFnZU1hcFV0aWxpdGllcyIsInByZWxvYWRJbWFnZU1hcCIsIm1hc2tpbmciLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxpQkFBaUJMLFFBQVEsMEJBQVIsQ0FKdkI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxtQkFBbUJQLFFBQVEsc0NBQVIsQ0FOekI7QUFBQSxJQU9NUSxtQkFBbUJSLFFBQVEsc0NBQVIsQ0FQekI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxTQUFTLElBQUlYLE1BQUosRUFBZjs7QUFFQVMsa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sVUFBVUEsUUFBakIsRUFBMkIsUUFBUUQsTUFBbkM7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLENBQXpCLEVBQTRCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBM0MsRUFBd0QsUUFBUUEsTUFBaEUsR0FERjtBQUVFO0FBQUMsd0JBQUQ7QUFBQSxVQUFrQixXQUFVLGNBQTVCO0FBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRSw4QkFBQyxnQkFBRCxJQUFrQixVQUFVLENBQUUsSUFBRixFQUFRLEtBQVIsRUFBZSxDQUFmLENBQTVCLEVBQWdELE9BQU8sR0FBdkQsRUFBNEQsUUFBUSxHQUFwRTtBQURGO0FBREY7QUFGRixLQUZjO0FBQUEsR0FBaEI7QUFZRCxDQWZEOztBQWlCQUUsT0FBT0MsT0FBUCxHQUFpQkosT0FBakI7O0FBRUEiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3RyaWFuZ2xlJyksXG4gICAgICBUZXh0dXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL3RyaWFuZ2xlJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IG1hc2tpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxUZXh0dXJlZFRyaWFuZ2xlIGltYWdlTmFtZT1cImdyYWZmaXRpLmpwZ1wiPlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRUcmlhbmdsZSBwb3NpdGlvbj17WyAwLjI1LCAwLjEyNSwgMSBdfSB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9UZXh0dXJlZFRyaWFuZ2xlPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFza2luZztcblxuLypcbiA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfT5cbiA8TWFzaz5cbiA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gPE1hc2s+XG4gPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4gPENvbG91cmVkVHJpYW5nbGUgY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gPlxuIDxNYXNrPlxuIDxDb2xvdXJlZFRyaWFuZ2xlIHBvc2l0aW9uPXtbIDAuMzc1LCAwLjEyNSwgMC41IF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSAvPlxuIDwvTWFzaz5cbiA8L0NvbG91cmVkVHJpYW5nbGU+XG4qL1xuIl19