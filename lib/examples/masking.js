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
        ColouredCuboid,
        { colour: [1, 1, 0, 1], position: [-0.5, -0.5, -0.5] },
        React.createElement(
          Mask,
          null,
          React.createElement(
            ColouredCuboid,
            { width: 0.5, height: 0.5, depth: 0.5, position: [0.25, 0.25, 0.25] },
            React.createElement(
              Mask,
              null,
              React.createElement(ColouredCuboid, { width: 0.5, height: 0.5, depth: 0.5, position: [0.25, 0.25, 0.25] })
            )
          )
        )
      )
    );
  });
};

module.exports = masking;

/*
 <ColouredTriangle colour={[ 1, 0, 1, 1 ]} >
 <Mask>
 <ColouredTriangle position={[ 0.375, 0.125, 0.5 ]} width={0.5} height={0.5} />
 </Mask>
 </ColouredTriangle>
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9tYXNraW5nLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiU2NlbmUiLCJDYW1lcmEiLCJDb2xvdXJlZEN1Ym9pZCIsIlRleHR1cmVkQ3Vib2lkIiwiQ29sb3VyZWRUcmlhbmdsZSIsIlRleHR1cmVkVHJpYW5nbGUiLCJpbWFnZU1hcFV0aWxpdGllcyIsInByZWxvYWRJbWFnZU1hcCIsIm1hc2tpbmciLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxpQkFBaUJMLFFBQVEsMEJBQVIsQ0FKdkI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxtQkFBbUJQLFFBQVEsc0NBQVIsQ0FOekI7QUFBQSxJQU9NUSxtQkFBbUJSLFFBQVEsc0NBQVIsQ0FQekI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQixNQUFNQyxTQUFTLElBQUlYLE1BQUosRUFBZjs7QUFFQVMsa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sVUFBVUEsUUFBakIsRUFBMkIsUUFBUUQsTUFBbkM7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLENBQXpCLEVBQTRCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBM0MsRUFBd0QsUUFBUUEsTUFBaEUsR0FERjtBQUVFO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUF4QixFQUF3QyxVQUFVLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmLENBQWxEO0FBQ0U7QUFBQyxjQUFEO0FBQUE7QUFDRTtBQUFDLDBCQUFEO0FBQUEsY0FBZ0IsT0FBTyxHQUF2QixFQUE0QixRQUFRLEdBQXBDLEVBQXlDLE9BQU8sR0FBaEQsRUFBcUQsVUFBVSxDQUFFLElBQUYsRUFBUSxJQUFSLEVBQWMsSUFBZCxDQUEvRDtBQUNFO0FBQUMsa0JBQUQ7QUFBQTtBQUNFLGtDQUFDLGNBQUQsSUFBZ0IsT0FBTyxHQUF2QixFQUE0QixRQUFRLEdBQXBDLEVBQXlDLE9BQU8sR0FBaEQsRUFBcUQsVUFBVSxDQUFFLElBQUYsRUFBUSxJQUFSLEVBQWMsSUFBZCxDQUEvRDtBQURGO0FBREY7QUFERjtBQURGO0FBRkYsS0FGYztBQUFBLEdBQWhCO0FBZ0JELENBbkJEOztBQXFCQUUsT0FBT0MsT0FBUCxHQUFpQkosT0FBakI7O0FBRUEiLCJmaWxlIjoibWFza2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgTWFzayA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvbWFzaycpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuL2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKSxcbiAgICAgIFRleHR1cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vdGV4dHVyZWQvY3Vib2lkJyksXG4gICAgICBDb2xvdXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL2NvbG91cmVkL3RyaWFuZ2xlJyksXG4gICAgICBUZXh0dXJlZFRyaWFuZ2xlID0gcmVxdWlyZSgnLi4vZXhhbXBsZXMvY29tbW9uL3RleHR1cmVkL3RyaWFuZ2xlJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IG1hc2tpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gICAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmc7XG5cbi8qXG4gPENvbG91cmVkVHJpYW5nbGUgY29sb3VyPXtbIDEsIDAsIDEsIDEgXX0gPlxuIDxNYXNrPlxuIDxDb2xvdXJlZFRyaWFuZ2xlIHBvc2l0aW9uPXtbIDAuMzc1LCAwLjEyNSwgMC41IF19IHdpZHRoPXswLjV9IGhlaWdodD17MC41fSAvPlxuIDwvTWFzaz5cbiA8L0NvbG91cmVkVHJpYW5nbGU+XG4qL1xuIl19