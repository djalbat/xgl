"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../index");
var _pyramid = /*#__PURE__*/ _interop_require_default(require("./element/pyramid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImageMap = _index.preloadUtilities.preloadImageMap, host = window.host, imageMapURI = window.imageMapURI, imageMapJSON = window.imageMapJSON;
var pyramidExample = function() {
    preloadImageMap(host, imageMapURI, imageMapJSON, function(imageMap, imageMapJSON) {
        var canvas = new _index.Canvas();
        return /*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, {
            mouseSensitivity: 10
        }));
    });
};
var _default = pyramidExample;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnQsIFNjZW5lLCBDYW52YXMsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcyxcbiAgICAgIHsgaG9zdCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gd2luZG93O1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKGhvc3QsIGltYWdlTWFwVVJJLCBpbWFnZU1hcEpTT04sIChpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEgbW91c2VTZW5zaXRpdml0eT17MTB9IC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJwcmVsb2FkSW1hZ2VNYXAiLCJwcmVsb2FkVXRpbGl0aWVzIiwiaG9zdCIsIndpbmRvdyIsImltYWdlTWFwVVJJIiwiaW1hZ2VNYXBKU09OIiwicHlyYW1pZEV4YW1wbGUiLCJpbWFnZU1hcCIsImNhbnZhcyIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIlB5cmFtaWQiLCJHYW1pbmdDYW1lcmEiLCJtb3VzZVNlbnNpdGl2aXR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwQkE7OztlQUFBOzs7cUJBeEJvRTs4REFFaEQ7Ozs7OztBQUVwQixJQUFNLEFBQUVBLGtCQUFvQkMsdUJBQWdCLENBQXBDRCxpQkFDQUUsT0FBb0NDLE9BQXBDRCxNQUFNRSxjQUE4QkQsT0FBOUJDLGFBQWFDLGVBQWlCRixPQUFqQkU7QUFFM0IsSUFBTUMsaUJBQWlCO0lBQ3JCTixnQkFBZ0JFLE1BQU1FLGFBQWFDLGNBQWMsU0FBQ0UsVUFBVUY7UUFDMUQsSUFBTUcsU0FBUyxJQUFJQyxhQUFNO1FBRXpCLHFCQUVFLG9CQUFDQyxZQUFLO1lBQUNGLFFBQVFBO3lCQUNiLG9CQUFDRyxXQUFJO1lBQUNKLFVBQVVBO1lBQVVGLGNBQWNBO3lCQUN0QyxvQkFBQ08sZ0JBQU8sd0JBRVYsb0JBQUNDLG1CQUFZO1lBQUNDLGtCQUFrQjs7SUFJdEM7QUFDRjtJQUVBLFdBQWVSIn0=