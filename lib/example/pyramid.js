"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../index");
var _pyramid = _interopRequireDefault(require("./element/pyramid"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var preloadImageMap = _index.preloadUtilities.preloadImageMap;
var pyramidExample = function() {
    preloadImageMap(function(imageMap, imageMapJSON) {
        var canvas = new _index.Canvas();
        return(/*#__PURE__*/ React.createElement(_index.Scene, {
            canvas: canvas
        }, /*#__PURE__*/ React.createElement(_index.Part, {
            imageMap: imageMap,
            imageMapJSON: imageMapJSON
        }, /*#__PURE__*/ React.createElement(_pyramid.default, null)), /*#__PURE__*/ React.createElement(_index.GamingCamera, null)));
    });
};
var _default = pyramidExample;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwibmFtZXMiOlsiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiR2FtaW5nQ2FtZXJhIiwicHJlbG9hZFV0aWxpdGllcyIsIlB5cmFtaWQiLCJwcmVsb2FkSW1hZ2VNYXAiLCJweXJhbWlkRXhhbXBsZSIsImltYWdlTWFwIiwiaW1hZ2VNYXBKU09OIiwiY2FudmFzIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUV3RCxHQUFVLENBQVYsTUFBVTtBQUUxRCxHQUFtQixDQUFuQixRQUFtQjs7Ozs7O0FBRXZDLEdBQUssQ0FBRyxlQUFlLEdBSjZDLE1BQVUsa0JBSXRFLGVBQWU7QUFFdkIsR0FBSyxDQUFDLGNBQWMsR0FBRyxRQUN2QixHQUQ2QixDQUFDO0lBQzVCLGVBQWUsQ0FBQyxRQUFRLENBQVAsUUFBUSxFQUFFLFlBQVksRUFBSyxDQUFDO1FBQzNDLEdBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQVI4QyxNQUFVO1FBVTFFLE1BQU0sbUNBVjBELE1BQVU7WUFZakUsTUFBTSxFQUFFLE1BQU07NkNBWnlDLE1BQVU7WUFhaEUsUUFBUSxFQUFFLFFBQVE7WUFBRSxZQUFZLEVBQUUsWUFBWTs2Q0FYeEMsUUFBbUIsb0RBRjZCLE1BQVU7SUFvQjVFLENBQUM7QUFDSCxDQUFDO2VBRWMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBHYW1pbmdDYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgUHlyYW1pZCBmcm9tIFwiLi9lbGVtZW50L3B5cmFtaWRcIjtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IHByZWxvYWRVdGlsaXRpZXM7XG5cbmNvbnN0IHB5cmFtaWRFeGFtcGxlID0gKCkgPT4ge1xuICBwcmVsb2FkSW1hZ2VNYXAoKGltYWdlTWFwLCBpbWFnZU1hcEpTT04pID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgICA8UGFydCBpbWFnZU1hcD17aW1hZ2VNYXB9IGltYWdlTWFwSlNPTj17aW1hZ2VNYXBKU09OfT5cbiAgICAgICAgICA8UHlyYW1pZC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPEdhbWluZ0NhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcbiJdfQ==