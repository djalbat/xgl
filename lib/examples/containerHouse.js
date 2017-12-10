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
      React.createElement(Camera, { initialDistance: 100, initialOffset: [-18, 0, -16], canvas: canvas })
    );
  });
};

module.exports = containerHouse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FudmFzIiwiUGFydCIsIlNjZW5lIiwiQ2FtZXJhIiwiRnJhbWUiLCJSb29mR2FyZGVuIiwiRm91bmRhdGlvbnMiLCJGaXJzdEZsb29yIiwiVGhpcmRGbG9vciIsIlNlY29uZEZsb29yIiwiTWFpbkJhbGNvbnkiLCJMb3dlckJhbGNvbnkiLCJCZWRyb29tQmFsY29ueSIsImltYWdlTWFwVXRpbGl0aWVzIiwicHJlbG9hZEltYWdlTWFwIiwiY29udGFpbmVySG91c2UiLCJjYW52YXMiLCJpbWFnZU1hcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLFdBQVI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxXQUFSLENBQWY7QUFBQSxJQUNNRSxPQUFPRixRQUFRLGlCQUFSLENBRGI7QUFBQSxJQUVNRyxRQUFRSCxRQUFRLGtCQUFSLENBRmQ7QUFBQSxJQUdNSSxTQUFTSixRQUFRLG1CQUFSLENBSGY7QUFBQSxJQUlNSyxRQUFRTCxRQUFRLHdCQUFSLENBSmQ7QUFBQSxJQUtNTSxhQUFhTixRQUFRLDZCQUFSLENBTG5CO0FBQUEsSUFNTU8sY0FBY1AsUUFBUSw4QkFBUixDQU5wQjtBQUFBLElBT01RLGFBQWFSLFFBQVEsOEJBQVIsQ0FQbkI7QUFBQSxJQVFNUyxhQUFhVCxRQUFRLDhCQUFSLENBUm5CO0FBQUEsSUFTTVUsY0FBY1YsUUFBUSwrQkFBUixDQVRwQjtBQUFBLElBVU1XLGNBQWNYLFFBQVEsK0JBQVIsQ0FWcEI7QUFBQSxJQVdNWSxlQUFlWixRQUFRLGdDQUFSLENBWHJCO0FBQUEsSUFZTWEsaUJBQWlCYixRQUFRLGtDQUFSLENBWnZCO0FBQUEsSUFhTWMsb0JBQW9CZCxRQUFRLHVCQUFSLENBYjFCOztJQWVRZSxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLE1BQU1DLFNBQVMsSUFBSWhCLE1BQUosRUFBZjs7QUFFQWMsa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sUUFBUUEsTUFBZDtBQUNFLDRCQUFDLFVBQUQsT0FERjtBQUVFLDRCQUFDLFdBQUQsT0FGRjtBQUdFLDRCQUFDLFVBQUQ7QUFIRixPQURGO0FBTUU7QUFBQyxZQUFEO0FBQUEsVUFBTSxRQUFRQSxNQUFkO0FBQ0UsNEJBQUMsV0FBRCxPQURGO0FBRUUsNEJBQUMsWUFBRCxPQUZGO0FBR0UsNEJBQUMsY0FBRDtBQUhGLE9BTkY7QUFXRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLFVBQVVDLFFBQWhCLEVBQTBCLFFBQVFELE1BQWxDO0FBQ0UsNEJBQUMsV0FBRCxPQURGO0FBRUUsNEJBQUMsVUFBRCxPQUZGO0FBR0UsNEJBQUMsS0FBRDtBQUhGLE9BWEY7QUFnQkUsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixHQUF6QixFQUE4QixlQUFlLENBQUUsQ0FBQyxFQUFILEVBQU8sQ0FBUCxFQUFVLENBQUMsRUFBWCxDQUE3QyxFQUE4RCxRQUFRQSxNQUF0RTtBQWhCRixLQUZjO0FBQUEsR0FBaEI7QUFzQkQsQ0F6QkQ7O0FBMkJBRSxPQUFPQyxPQUFQLEdBQWlCSixjQUFqQiIsImZpbGUiOiJjb250YWluZXJIb3VzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgUGFydCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvcGFydCcpLFxuICAgICAgU2NlbmUgPSByZXF1aXJlKCcuLi9lbGVtZW50L3NjZW5lJyksXG4gICAgICBDYW1lcmEgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NhbWVyYScpLFxuICAgICAgRnJhbWUgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2ZyYW1lJyksXG4gICAgICBSb29mR2FyZGVuID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9yb29mR2FyZGVuJyksXG4gICAgICBGb3VuZGF0aW9ucyA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZm91bmRhdGlvbnMnKSxcbiAgICAgIEZpcnN0Rmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0JyksXG4gICAgICBUaGlyZEZsb29yID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mbG9vci90aGlyZCcpLFxuICAgICAgU2Vjb25kRmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL3NlY29uZCcpLFxuICAgICAgTWFpbkJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbicpLFxuICAgICAgTG93ZXJCYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2xvd2VyJyksXG4gICAgICBCZWRyb29tQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9iZWRyb29tJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbnRhaW5lckhvdXNlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydCBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxGaXJzdEZsb29yIC8+XG4gICAgICAgIDxTZWNvbmRGbG9vciAvPlxuICAgICAgICA8VGhpcmRGbG9vciAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPFBhcnQgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8TWFpbkJhbGNvbnkgLz5cbiAgICAgICAgPExvd2VyQmFsY29ueSAvPlxuICAgICAgICA8QmVkcm9vbUJhbGNvbnkgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8Rm91bmRhdGlvbnMgLz5cbiAgICAgICAgPFJvb2ZHYXJkZW4gLz5cbiAgICAgICAgPEZyYW1lIC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIC0xOCwgMCwgLTE2IF19IGNhbnZhcz17Y2FudmFzfSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGFpbmVySG91c2U7XG4iXX0=