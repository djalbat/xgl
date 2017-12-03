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
          React.createElement(ColouredTriangle, { position: [0.375, 0.125, 0.5], width: 0.5, height: 0.5 })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJDb2xvdXJlZEN1Ym9pZCIsIlRleHR1cmVkQ3Vib2lkIiwiQ29sb3VyZWRUcmlhbmdsZSIsIlRleHR1cmVkVHJpYW5nbGUiLCJpbWFnZU1hcFV0aWxpdGllcyIsInByZWxvYWRJbWFnZU1hcCIsIm1hc2tpbmciLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxpQkFBaUJMLFFBQVEsMEJBQVIsQ0FKdkI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxtQkFBbUJQLFFBQVEsc0NBQVIsQ0FOekI7QUFBQSxJQU9NUSxtQkFBbUJSLFFBQVEsc0NBQVIsQ0FQekI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxTQUFTLElBQUlYLE1BQUosRUFBZjs7QUFFQVMsa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sVUFBVUEsUUFBakIsRUFBMkIsUUFBUUQsTUFBbkM7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLENBQXpCLEVBQTRCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBM0MsRUFBd0QsUUFBUUEsTUFBaEUsR0FERjtBQUVFO0FBQUMsd0JBQUQ7QUFBQSxVQUFrQixXQUFVLGNBQTVCO0FBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRSw4QkFBQyxnQkFBRCxJQUFrQixVQUFVLENBQUUsS0FBRixFQUFTLEtBQVQsRUFBZ0IsR0FBaEIsQ0FBNUIsRUFBbUQsT0FBTyxHQUExRCxFQUErRCxRQUFRLEdBQXZFO0FBREY7QUFERjtBQUZGLEtBRmM7QUFBQSxHQUFoQjtBQVlELENBZkQ7O0FBaUJBRSxPQUFPQyxPQUFQLEdBQWlCSixPQUFqQjs7QUFFQSIsImZpbGUiOiJtYXNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBNYXNrID0gcmVxdWlyZSgnLi4vZWxlbWVudC9tYXNrJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBDb2xvdXJlZEN1Ym9pZCA9IHJlcXVpcmUoJy4vY29tbW9uL2NvbG91cmVkL2N1Ym9pZCcpLFxuICAgICAgVGV4dHVyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi90ZXh0dXJlZC9jdWJvaWQnKSxcbiAgICAgIENvbG91cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vY29sb3VyZWQvdHJpYW5nbGUnKSxcbiAgICAgIFRleHR1cmVkVHJpYW5nbGUgPSByZXF1aXJlKCcuLi9leGFtcGxlcy9jb21tb24vdGV4dHVyZWQvdHJpYW5nbGUnKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgbWFza2luZyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17NX0gaW5pdGlhbE9mZnNldD17WyAwLCAwLCAwIF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgICAgPFRleHR1cmVkVHJpYW5nbGUgaW1hZ2VOYW1lPVwiZ3JhZmZpdGkuanBnXCI+XG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZFRyaWFuZ2xlIHBvc2l0aW9uPXtbIDAuMzc1LCAwLjEyNSwgMC41IF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICA8L1RleHR1cmVkVHJpYW5nbGU+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXNraW5nO1xuXG4vKlxuIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuIDxNYXNrPlxuIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gZGVwdGg9ezAuNX0gcG9zaXRpb249e1sgMC4yNSwgMC4yNSwgMC4yNSBdfT5cbiA8TWFzaz5cbiA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0gLz5cbiA8L01hc2s+XG4gPC9Db2xvdXJlZEN1Ym9pZD5cbiA8L01hc2s+XG4gPC9Db2xvdXJlZEN1Ym9pZD5cbiA8Q29sb3VyZWRUcmlhbmdsZSBjb2xvdXI9e1sgMSwgMCwgMSwgMSBdfSA+XG4gPE1hc2s+XG4gPENvbG91cmVkVHJpYW5nbGUgcG9zaXRpb249e1sgMC4zNzUsIDAuMTI1LCAwLjUgXX0gd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IC8+XG4gPC9NYXNrPlxuIDwvQ29sb3VyZWRUcmlhbmdsZT5cbiovXG4iXX0=