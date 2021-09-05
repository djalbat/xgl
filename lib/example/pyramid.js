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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3B5cmFtaWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIEdhbWluZ0NhbWVyYSwgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBQeXJhbWlkIGZyb20gXCIuL2VsZW1lbnQvcHlyYW1pZFwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gcHJlbG9hZFV0aWxpdGllcztcblxuY29uc3QgcHlyYW1pZEV4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXAsIGltYWdlTWFwSlNPTikgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxQYXJ0IGltYWdlTWFwPXtpbWFnZU1hcH0gaW1hZ2VNYXBKU09OPXtpbWFnZU1hcEpTT059PlxuICAgICAgICAgIDxQeXJhbWlkLz5cbiAgICAgICAgPC9QYXJ0PlxuICAgICAgICA8R2FtaW5nQ2FtZXJhLz5cbiAgICAgIDwvU2NlbmU+XG5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHB5cmFtaWRFeGFtcGxlO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRXdELEdBQVUsQ0FBVixNQUFVO0FBRTFELEdBQW1CLENBQW5CLFFBQW1COzs7Ozs7QUFFdkMsR0FBSyxDQUFHLGVBQWUsR0FKNkMsTUFBVSxrQkFJdEUsZUFBZTtBQUV2QixHQUFLLENBQUMsY0FBYyxjQUFTLENBQUM7SUFDNUIsZUFBZSxVQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUssQ0FBQztRQUMzQyxHQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FSOEMsTUFBVTtpREFBVixNQUFVO1lBWWpFLE1BQU0sRUFBRSxNQUFNOzZDQVp5QyxNQUFVO1lBYWhFLFFBQVEsRUFBRSxRQUFRO1lBQUUsWUFBWSxFQUFFLFlBQVk7NkNBWHhDLFFBQW1CLG9EQUY2QixNQUFVO0lBb0I1RSxDQUFDO0FBQ0gsQ0FBQztlQUVjLGNBQWMifQ==