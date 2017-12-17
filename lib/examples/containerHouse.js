'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Part = require('../element/part'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./containerHouse/frame'),
    RoofGarden = require('./containerHouse/roofGarden'),
    Foundations = require('./containerHouse/foundations'),
    FirstFloor = require('./containerHouse/floor/first'),
    ThirdFloor = require('./containerHouse/floor/third'),
    SecondFloor = require('./containerHouse/floor/second'),
    MainBalcony = require('./containerHouse/balcony/main'),
    LowerBalcony = require('./containerHouse/balcony/lower'),
    BedroomBalcony = require('./containerHouse/balcony/bedroom'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(
        Part,
        { canvas: canvas },
        React.createElement(FirstFloor, null),
        React.createElement(SecondFloor, null),
        React.createElement(ThirdFloor, null)
      ),
      React.createElement(
        Part,
        { canvas: canvas },
        React.createElement(MainBalcony, null),
        React.createElement(LowerBalcony, null),
        React.createElement(BedroomBalcony, null)
      ),
      React.createElement(
        Part,
        { imageMap: imageMap, canvas: canvas },
        React.createElement(Foundations, null),
        React.createElement(RoofGarden, null),
        React.createElement(Frame, null)
      ),
      React.createElement(Camera, { initialDistance: 100, initialOffset: [-18, -9, -16], canvas: canvas })
    );
  });
};

module.exports = containerHouse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FudmFzIiwiUGFydCIsIlNjZW5lIiwiQ2FtZXJhIiwiRnJhbWUiLCJSb29mR2FyZGVuIiwiRm91bmRhdGlvbnMiLCJGaXJzdEZsb29yIiwiVGhpcmRGbG9vciIsIlNlY29uZEZsb29yIiwiTWFpbkJhbGNvbnkiLCJMb3dlckJhbGNvbnkiLCJCZWRyb29tQmFsY29ueSIsImltYWdlTWFwVXRpbGl0aWVzIiwicHJlbG9hZEltYWdlTWFwIiwiY29udGFpbmVySG91c2UiLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxRQUFRTCxRQUFRLHdCQUFSLENBSmQ7QUFBQSxJQUtNTSxhQUFhTixRQUFRLDZCQUFSLENBTG5CO0FBQUEsSUFNTU8sY0FBY1AsUUFBUSw4QkFBUixDQU5wQjtBQUFBLElBT01RLGFBQWFSLFFBQVEsOEJBQVIsQ0FQbkI7QUFBQSxJQVFNUyxhQUFhVCxRQUFRLDhCQUFSLENBUm5CO0FBQUEsSUFTTVUsY0FBY1YsUUFBUSwrQkFBUixDQVRwQjtBQUFBLElBVU1XLGNBQWNYLFFBQVEsK0JBQVIsQ0FWcEI7QUFBQSxJQVdNWSxlQUFlWixRQUFRLGdDQUFSLENBWHJCO0FBQUEsSUFZTWEsaUJBQWlCYixRQUFRLGtDQUFSLENBWnZCO0FBQUEsSUFhTWMsb0JBQW9CZCxRQUFRLHVCQUFSLENBYjFCOztJQWVRZSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLFNBQVMsSUFBSWhCLE1BQUosRUFBZjs7QUFFQWMsa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sUUFBUUEsTUFBZDtBQUNFLDRCQUFDLFVBQUQsT0FERjtBQUVFLDRCQUFDLFdBQUQsT0FGRjtBQUdFLDRCQUFDLFVBQUQ7QUFIRixPQURGO0FBTUU7QUFBQyxZQUFEO0FBQUEsVUFBTSxRQUFRQSxNQUFkO0FBQ0UsNEJBQUMsV0FBRCxPQURGO0FBRUUsNEJBQUMsWUFBRCxPQUZGO0FBR0UsNEJBQUMsY0FBRDtBQUhGLE9BTkY7QUFXRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLFVBQVVDLFFBQWhCLEVBQTBCLFFBQVFELE1BQWxDO0FBQ0UsNEJBQUMsV0FBRCxPQURGO0FBRUUsNEJBQUMsVUFBRCxPQUZGO0FBR0UsNEJBQUMsS0FBRDtBQUhGLE9BWEY7QUFnQkUsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixHQUF6QixFQUE4QixlQUFlLENBQUUsQ0FBQyxFQUFILEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxFQUFaLENBQTdDLEVBQStELFFBQVFBLE1BQXZFO0FBaEJGLEtBRmM7QUFBQSxHQUFoQjtBQXNCRCxDQXpCRDs7QUEyQkFFLE9BQU9DLE9BQVAsR0FBaUJKLGNBQWpCIiwiZmlsZSI6ImNvbnRhaW5lckhvdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBQYXJ0ID0gcmVxdWlyZSgnLi4vZWxlbWVudC9wYXJ0JyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZnJhbWUnKSxcbiAgICAgIFJvb2ZHYXJkZW4gPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4nKSxcbiAgICAgIEZvdW5kYXRpb25zID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucycpLFxuICAgICAgRmlyc3RGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvZmlyc3QnKSxcbiAgICAgIFRoaXJkRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3RoaXJkJyksXG4gICAgICBTZWNvbmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kJyksXG4gICAgICBNYWluQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9tYWluJyksXG4gICAgICBMb3dlckJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbG93ZXInKSxcbiAgICAgIEJlZHJvb21CYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2JlZHJvb20nKSxcbiAgICAgIGltYWdlTWFwVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2ltYWdlTWFwJyk7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBpbWFnZU1hcFV0aWxpdGllcztcblxuY29uc3QgY29udGFpbmVySG91c2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwKSA9PlxuXG4gICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxQYXJ0IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPEZpcnN0Rmxvb3IgLz5cbiAgICAgICAgPFNlY29uZEZsb29yIC8+XG4gICAgICAgIDxUaGlyZEZsb29yIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8UGFydCBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgICA8TG93ZXJCYWxjb255IC8+XG4gICAgICAgIDxCZWRyb29tQmFsY29ueSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxGb3VuZGF0aW9ucyAvPlxuICAgICAgICA8Um9vZkdhcmRlbiAvPlxuICAgICAgICA8RnJhbWUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxMDB9IGluaXRpYWxPZmZzZXQ9e1sgLTE4LCAtOSwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVySG91c2U7XG4iXX0=