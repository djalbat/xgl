'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Part = require('../element/part'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./timberFramedHouse/frame'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var timberFramedHouse = function timberFramedHouse() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(
        Part,
        { imageMap: imageMap, canvas: canvas },
        React.createElement(Frame, null)
      ),
      React.createElement(Camera, { initialDistance: 100, initialOffset: [-18, 0, -16], canvas: canvas })
    );
  });
};

module.exports = timberFramedHouse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy90aW1iZXJGcmFtZWRIb3VzZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FudmFzIiwiUGFydCIsIlNjZW5lIiwiQ2FtZXJhIiwiRnJhbWUiLCJpbWFnZU1hcFV0aWxpdGllcyIsInByZWxvYWRJbWFnZU1hcCIsInRpbWJlckZyYW1lZEhvdXNlIiwiY2FudmFzIiwiaW1hZ2VNYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxXQUFSOztBQUVBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUUsT0FBT0YsUUFBUSxpQkFBUixDQURiO0FBQUEsSUFFTUcsUUFBUUgsUUFBUSxrQkFBUixDQUZkO0FBQUEsSUFHTUksU0FBU0osUUFBUSxtQkFBUixDQUhmO0FBQUEsSUFJTUssUUFBUUwsUUFBUSwyQkFBUixDQUpkO0FBQUEsSUFLTU0sb0JBQW9CTixRQUFRLHVCQUFSLENBTDFCOztJQU9RTyxlLEdBQW9CRCxpQixDQUFwQkMsZTs7O0FBRVIsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM5QixNQUFNQyxTQUFTLElBQUlSLE1BQUosRUFBZjs7QUFFQU0sa0JBQWdCLFVBQUNHLFFBQUQ7QUFBQSxXQUVkO0FBQUMsV0FBRDtBQUFBLFFBQU8sUUFBUUQsTUFBZjtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sVUFBVUMsUUFBaEIsRUFBMEIsUUFBUUQsTUFBbEM7QUFDRSw0QkFBQyxLQUFEO0FBREYsT0FERjtBQUlFLDBCQUFDLE1BQUQsSUFBUSxpQkFBaUIsR0FBekIsRUFBOEIsZUFBZSxDQUFFLENBQUMsRUFBSCxFQUFPLENBQVAsRUFBVSxDQUFDLEVBQVgsQ0FBN0MsRUFBOEQsUUFBUUEsTUFBdEU7QUFKRixLQUZjO0FBQUEsR0FBaEI7QUFVRCxDQWJEOztBQWVBRSxPQUFPQyxPQUFQLEdBQWlCSixpQkFBakIiLCJmaWxlIjoidGltYmVyRnJhbWVkSG91c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2ppZ2dsZScpO1xuXG5jb25zdCBDYW52YXMgPSByZXF1aXJlKCcuLi9jYW52YXMnKSxcbiAgICAgIFBhcnQgPSByZXF1aXJlKCcuLi9lbGVtZW50L3BhcnQnKSxcbiAgICAgIFNjZW5lID0gcmVxdWlyZSgnLi4vZWxlbWVudC9zY2VuZScpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jYW1lcmEnKSxcbiAgICAgIEZyYW1lID0gcmVxdWlyZSgnLi90aW1iZXJGcmFtZWRIb3VzZS9mcmFtZScpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCB0aW1iZXJGcmFtZWRIb3VzZSA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxGcmFtZSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPENhbWVyYSBpbml0aWFsRGlzdGFuY2U9ezEwMH0gaW5pdGlhbE9mZnNldD17WyAtMTgsIDAsIC0xNiBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRpbWJlckZyYW1lZEhvdXNlO1xuIl19