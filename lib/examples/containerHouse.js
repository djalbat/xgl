'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    MainBalcony = require('./containerHouse/balcony/main'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 1, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(MainBalcony, null)
    );
  });
};

module.exports = containerHouse;

/*
 Frame = require('./containerHouse/frame'),
 RoofGarden = require('./containerHouse/roofGarden'),
 Foundations = require('./containerHouse/foundations'),
 FirstFloor = require('./containerHouse/floor/first'),
 ThirdFloor = require('./containerHouse/floor/third'),
 SecondFloor = require('./containerHouse/floor/second'),
 LowerBalcony = require('./containerHouse/balcony/lower'),
 BedroomBalcony = require('./containerHouse/balcony/bedroom'),

 <Frame />
 <RoofGarden />
 <Foundations />
 <FirstFloor />
 <SecondFloor />
 <ThirdFloor />
 <LowerBalcony />
 <BedroomBalcony />

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FudmFzIiwiU2NlbmUiLCJDYW1lcmEiLCJNYWluQmFsY29ueSIsImltYWdlTWFwVXRpbGl0aWVzIiwicHJlbG9hZEltYWdlTWFwIiwiY29udGFpbmVySG91c2UiLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxRQUFRRixRQUFRLGtCQUFSLENBRGQ7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLG1CQUFSLENBRmY7QUFBQSxJQUdNSSxjQUFjSixRQUFRLCtCQUFSLENBSHBCO0FBQUEsSUFJTUssb0JBQW9CTCxRQUFRLHVCQUFSLENBSjFCOztJQU1RTSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLFNBQVMsSUFBSVAsTUFBSixFQUFmOztBQUVBSyxrQkFBZ0IsVUFBQ0csUUFBRDtBQUFBLFdBRWQ7QUFBQyxXQUFEO0FBQUEsUUFBTyxVQUFVQSxRQUFqQixFQUEyQixRQUFRRCxNQUFuQztBQUNFLDBCQUFDLE1BQUQsSUFBUSxpQkFBaUIsQ0FBekIsRUFBNEIsZUFBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUEzQyxFQUF3RCxRQUFRQSxNQUFoRSxHQURGO0FBRUUsMEJBQUMsV0FBRDtBQUZGLEtBRmM7QUFBQSxHQUFoQjtBQVFELENBWEQ7O0FBYUFFLE9BQU9DLE9BQVAsR0FBaUJKLGNBQWpCOztBQUVBIiwiZmlsZSI6ImNvbnRhaW5lckhvdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBNYWluQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbnRhaW5lckhvdXNlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBpbWFnZU1hcD17aW1hZ2VNYXB9IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxfSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8TWFpbkJhbGNvbnkgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuXG4vKlxuIEZyYW1lID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mcmFtZScpLFxuIFJvb2ZHYXJkZW4gPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4nKSxcbiBGb3VuZGF0aW9ucyA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMnKSxcbiBGaXJzdEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci9maXJzdCcpLFxuIFRoaXJkRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkJyksXG4gU2Vjb25kRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZCcpLFxuIExvd2VyQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9sb3dlcicpLFxuIEJlZHJvb21CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20nKSxcblxuIDxGcmFtZSAvPlxuIDxSb29mR2FyZGVuIC8+XG4gPEZvdW5kYXRpb25zIC8+XG4gPEZpcnN0Rmxvb3IgLz5cbiA8U2Vjb25kRmxvb3IgLz5cbiA8VGhpcmRGbG9vciAvPlxuIDxMb3dlckJhbGNvbnkgLz5cbiA8QmVkcm9vbUJhbGNvbnkgLz5cblxuICovIl19