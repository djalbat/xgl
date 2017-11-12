'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Triangle = require('../element/canvas/triangle');

var facets = function facets() {
  var canvas = new Canvas();

  (function () {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(Camera, { initialDistance: 20, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(Triangle, { colour: [1, 1, 0, 1] })
    );
  })();
};

module.exports = facets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9mYWNldHMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkNhbnZhcyIsIlNjZW5lIiwiQ2FtZXJhIiwiVHJpYW5nbGUiLCJmYWNldHMiLCJjYW52YXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxXQUFSOztBQUVBLElBQU1DLFNBQVNELFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUUsUUFBUUYsUUFBUSxrQkFBUixDQURkO0FBQUEsSUFFTUcsU0FBU0gsUUFBUSxtQkFBUixDQUZmO0FBQUEsSUFHTUksV0FBV0osUUFBUSw0QkFBUixDQUhqQjs7QUFLQSxJQUFNSyxTQUFTLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixNQUFNQyxTQUFTLElBQUlMLE1BQUosRUFBZjs7QUFFQSxHQUFDO0FBQUEsV0FFQztBQUFDLFdBQUQ7QUFBQSxRQUFPLFFBQVFLLE1BQWY7QUFDRSwwQkFBQyxNQUFELElBQVEsaUJBQWlCLEVBQXpCLEVBQTZCLGVBQWUsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBNUMsRUFBeUQsUUFBUUEsTUFBakUsR0FERjtBQUVFLDBCQUFDLFFBQUQsSUFBVSxRQUFRLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUFsQjtBQUZGLEtBRkQ7QUFBQSxHQUFEO0FBUUQsQ0FYRDs7QUFhQUMsT0FBT0MsT0FBUCxHQUFpQkgsTUFBakIiLCJmaWxlIjoiZmFjZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBUcmlhbmdsZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FudmFzL3RyaWFuZ2xlJyk7XG5cbmNvbnN0IGZhY2V0cyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICgoKSA9PiBcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MjB9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICAgIDxUcmlhbmdsZSBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSAvPlxuICAgIDwvU2NlbmU+XG5cbiAgKSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmYWNldHM7XG4iXX0=