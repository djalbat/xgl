'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Mask = require('../element/mask'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
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
      React.createElement(TexturedTriangle, { imageName: 'graffiti.jpg' })
    );
  });
};

module.exports = masking;

/*
 <Mask>
 <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
 </Mask>

 <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
 <Mask>
 <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
 </Mask>
 </ColouredCuboid>
 </Mask>
 </ColouredCuboid>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJUZXh0dXJlZEN1Ym9pZCIsIkNvbG91cmVkVHJpYW5nbGUiLCJUZXh0dXJlZFRyaWFuZ2xlIiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJtYXNraW5nIiwiY2FudmFzIiwiaW1hZ2VNYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxXQUFSOztBQUVBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUUsT0FBT0YsUUFBUSxpQkFBUixDQURiO0FBQUEsSUFFTUcsUUFBUUgsUUFBUSxrQkFBUixDQUZkO0FBQUEsSUFHTUksU0FBU0osUUFBUSxtQkFBUixDQUhmO0FBQUEsSUFJTUssaUJBQWlCTCxRQUFRLDBCQUFSLENBSnZCO0FBQUEsSUFLTU0sbUJBQW1CTixRQUFRLHNDQUFSLENBTHpCO0FBQUEsSUFNTU8sbUJBQW1CUCxRQUFRLHNDQUFSLENBTnpCO0FBQUEsSUFPTVEsb0JBQW9CUixRQUFRLHVCQUFSLENBUDFCOztJQVNRUyxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEIsTUFBTUMsU0FBUyxJQUFJVixNQUFKLEVBQWY7O0FBRUFRLGtCQUFnQixVQUFDRyxRQUFEO0FBQUEsV0FFZDtBQUFDLFdBQUQ7QUFBQSxRQUFPLFVBQVVBLFFBQWpCLEVBQTJCLFFBQVFELE1BQW5DO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixDQUF6QixFQUE0QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTNDLEVBQXdELFFBQVFBLE1BQWhFLEdBREY7QUFFRSwwQkFBQyxnQkFBRCxJQUFrQixXQUFVLGNBQTVCO0FBRkYsS0FGYztBQUFBLEdBQWhCO0FBU0QsQ0FaRDs7QUFjQUUsT0FBT0MsT0FBUCxHQUFpQkosT0FBakI7O0FBRUEiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgVGV4dHVyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvdHJpYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvdHJpYW5nbGUnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgbWFza2luZyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17NX0gaW5pdGlhbE9mZnNldD17WyAwLCAwLCAwIF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPFRleHR1cmVkVHJpYW5nbGUgaW1hZ2VOYW1lPVwiZ3JhZmZpdGkuanBnXCIgPlxuICAgICAgPC9UZXh0dXJlZFRyaWFuZ2xlPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWFza2luZztcblxuLypcbiA8TWFzaz5cbiA8Q29sb3VyZWRUcmlhbmdsZSBwb3NpdGlvbj17WyAwLjM3NSwgMC4xMjUsIDAuNSBdfSB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gLz5cbiA8L01hc2s+XG5cbiA8Q29sb3VyZWRDdWJvaWQgY29sb3VyPXtbIDEsIDEsIDAsIDEgXX0gcG9zaXRpb249e1sgLTAuNSwgLTAuNSwgLTAuNSBdfT5cbiA8TWFzaz5cbiA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gPE1hc2s+XG4gPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRDdWJvaWQ+XG4qL1xuIl19