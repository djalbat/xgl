"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _index = require("../index");

var _configuration = _interopRequireDefault(require("../miscellaneous/configuration"));

var _colouredSquare = _interopRequireDefault(require("./element/colouredSquare"));

var _texturedQuadrangle = _interopRequireDefault(require("./element/texturedQuadrangle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var forEach = _necessary.asynchronousUtilities.forEach;
var canvas = new _index.Canvas(),
    mask = React.createElement(_index.Mask, null, React.createElement(_colouredSquare["default"], {
  scale: [0.25, 0.25, 1],
  position: [0.125, 0.125, 0]
}));

var tilingExample = function tilingExample() {
  var imageNames = _configuration["default"].imageNames,
      imageDirectoryURI = _configuration["default"].imageDirectoryURI;
  preloadImages(imageNames, imageDirectoryURI, function (images) {
    return React.createElement(_index.Scene, {
      canvas: canvas
    }, React.createElement(_index.Part, {
      images: images,
      imageNames: imageNames,
      imageTiling: true
    }, React.createElement(_texturedQuadrangle["default"], {
      position: [0, 0, 0],
      imageName: "floorboards.jpg",
      mask: mask
    }), React.createElement(_texturedQuadrangle["default"], {
      position: [-0.5, -0.5, -0.5],
      imageName: "paving.jpg",
      mask: mask
    })), React.createElement(_index.DesignCamera, null));
  });
};

var _default = tilingExample;
exports["default"] = _default;

function preloadImages(imageNames, imageDirectoryURI, callback) {
  var images = [],
      context = {
    images: images
  };
  forEach(imageNames, function (imageName, next, done, context) {
    var image = new Image(),
        src = "".concat(imageDirectoryURI, "/").concat(imageName);
    Object.assign(image, {
      src: src,
      onload: onload
    });

    function onload() {
      images.push(image);
      next();
    }
  }, done, context);

  function done() {
    var images = context.images;
    callback(images);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbGluZy5qcyJdLCJuYW1lcyI6WyJmb3JFYWNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiY2FudmFzIiwiQ2FudmFzIiwibWFzayIsInRpbGluZ0V4YW1wbGUiLCJpbWFnZU5hbWVzIiwiY29uZmlndXJhdGlvbiIsImltYWdlRGlyZWN0b3J5VVJJIiwicHJlbG9hZEltYWdlcyIsImltYWdlcyIsImNhbGxiYWNrIiwiY29udGV4dCIsImltYWdlTmFtZSIsIm5leHQiLCJkb25lIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIk9iamVjdCIsImFzc2lnbiIsIm9ubG9hZCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFKcUU7SUFNN0RBLE8sR0FBWUMsZ0MsQ0FBWkQsTztBQUVSLElBQU1FLE1BQU0sR0FBRyxJQUFJQyxhQUFKLEVBQWY7QUFBQSxJQUNNQyxJQUFJLEdBRUYsb0JBQUMsV0FBRCxRQUNFLG9CQUFDLDBCQUFEO0FBQWdCLEVBQUEsS0FBSyxFQUFFLENBQUUsSUFBRixFQUFRLElBQVIsRUFBYyxDQUFkLENBQXZCO0FBQTBDLEVBQUEsUUFBUSxFQUFFLENBQUUsS0FBRixFQUFTLEtBQVQsRUFBZ0IsQ0FBaEI7QUFBcEQsRUFERixDQUhSOztBQVNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBLE1BQ2xCQyxVQURrQixHQUNnQkMseUJBRGhCLENBQ2xCRCxVQURrQjtBQUFBLE1BQ05FLGlCQURNLEdBQ2dCRCx5QkFEaEIsQ0FDTkMsaUJBRE07QUFHMUJDLEVBQUFBLGFBQWEsQ0FBQ0gsVUFBRCxFQUFhRSxpQkFBYixFQUFnQyxVQUFDRSxNQUFELEVBQVk7QUFDdkQsV0FFRSxvQkFBQyxZQUFEO0FBQU8sTUFBQSxNQUFNLEVBQUVSO0FBQWYsT0FDRSxvQkFBQyxXQUFEO0FBQU0sTUFBQSxNQUFNLEVBQUVRLE1BQWQ7QUFBc0IsTUFBQSxVQUFVLEVBQUVKLFVBQWxDO0FBQThDLE1BQUEsV0FBVztBQUF6RCxPQUNFLG9CQUFDLDhCQUFEO0FBQW9CLE1BQUEsUUFBUSxFQUFFLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTlCO0FBQTJDLE1BQUEsU0FBUyxFQUFDLGlCQUFyRDtBQUF1RSxNQUFBLElBQUksRUFBRUY7QUFBN0UsTUFERixFQUVFLG9CQUFDLDhCQUFEO0FBQW9CLE1BQUEsUUFBUSxFQUFFLENBQUUsQ0FBQyxHQUFILEVBQVEsQ0FBQyxHQUFULEVBQWMsQ0FBQyxHQUFmLENBQTlCO0FBQW9ELE1BQUEsU0FBUyxFQUFDLFlBQTlEO0FBQTJFLE1BQUEsSUFBSSxFQUFFQTtBQUFqRixNQUZGLENBREYsRUFLRSxvQkFBQyxtQkFBRCxPQUxGLENBRkY7QUFXRCxHQVpZLENBQWI7QUFhRCxDQWhCRDs7ZUFrQmVDLGE7OztBQUVmLFNBQVNJLGFBQVQsQ0FBdUJILFVBQXZCLEVBQW1DRSxpQkFBbkMsRUFBc0RHLFFBQXRELEVBQWdFO0FBQzlELE1BQU1ELE1BQU0sR0FBRyxFQUFmO0FBQUEsTUFDTUUsT0FBTyxHQUFHO0FBQ1JGLElBQUFBLE1BQU0sRUFBTkE7QUFEUSxHQURoQjtBQUtBVixFQUFBQSxPQUFPLENBQUNNLFVBQUQsRUFBYSxVQUFDTyxTQUFELEVBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCSCxPQUF4QixFQUFvQztBQUN0RCxRQUFNSSxLQUFLLEdBQUcsSUFBSUMsS0FBSixFQUFkO0FBQUEsUUFDTUMsR0FBRyxhQUFNVixpQkFBTixjQUEyQkssU0FBM0IsQ0FEVDtBQUdBTSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osS0FBZCxFQUFxQjtBQUNuQkUsTUFBQUEsR0FBRyxFQUFIQSxHQURtQjtBQUVuQkcsTUFBQUEsTUFBTSxFQUFOQTtBQUZtQixLQUFyQjs7QUFLQSxhQUFTQSxNQUFULEdBQWtCO0FBQ2hCWCxNQUFBQSxNQUFNLENBQUNZLElBQVAsQ0FBWU4sS0FBWjtBQUVBRixNQUFBQSxJQUFJO0FBQ0w7QUFDRixHQWRNLEVBY0pDLElBZEksRUFjRUgsT0FkRixDQUFQOztBQWdCQSxXQUFTRyxJQUFULEdBQWdCO0FBQUEsUUFDTkwsTUFETSxHQUNLRSxPQURMLENBQ05GLE1BRE07QUFHZEMsSUFBQUEsUUFBUSxDQUFDRCxNQUFELENBQVI7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIE1hc2ssIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBjb25maWd1cmF0aW9uIGZyb20gXCIuLi9taXNjZWxsYW5lb3VzL2NvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCBDb2xvdXJlZFNxdWFyZSBmcm9tIFwiLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlXCI7XG5pbXBvcnQgVGV4dHVyZWRRdWFkcmFuZ2xlIGZyb20gXCIuL2VsZW1lbnQvdGV4dHVyZWRRdWFkcmFuZ2xlXCI7XG5cbmNvbnN0IHsgZm9yRWFjaCB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCksXG4gICAgICBtYXNrID1cblxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAgXX0gLz5cbiAgICAgICAgPC9NYXNrPlxuXG4gICAgICA7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb247XG5cbiAgcHJlbG9hZEltYWdlcyhpbWFnZU5hbWVzLCBpbWFnZURpcmVjdG9yeVVSSSwgKGltYWdlcykgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlcz17aW1hZ2VzfSBpbWFnZU5hbWVzPXtpbWFnZU5hbWVzfSBpbWFnZVRpbGluZyA+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAwLCAwLCAwIF19IGltYWdlTmFtZT1cImZsb29yYm9hcmRzLmpwZ1wiIG1hc2s9e21hc2t9IC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrPXttYXNrfSAvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbGluZ0V4YW1wbGU7XG5cbmZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCksXG4gICAgICAgICAgc3JjID0gYCR7aW1hZ2VEaXJlY3RvcnlVUkl9LyR7aW1hZ2VOYW1lfWA7XG5cbiAgICBPYmplY3QuYXNzaWduKGltYWdlLCB7XG4gICAgICBzcmMsXG4gICAgICBvbmxvYWRcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG9ubG9hZCgpIHtcbiAgICAgIGltYWdlcy5wdXNoKGltYWdlKTtcblxuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfSwgZG9uZSwgY29udGV4dCk7XG5cbiAgZnVuY3Rpb24gZG9uZSgpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gY29udGV4dDtcblxuICAgIGNhbGxiYWNrKGltYWdlcyk7XG4gIH1cbn1cbiJdfQ==