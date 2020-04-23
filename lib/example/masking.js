"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../index");

var _cube = _interopRequireDefault(require("./element/cube"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var canvas = new _index.Canvas();

var maskingExample = function maskingExample() {
  var SmallCube = function SmallCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      scale: [1 / 4, 1 / 4, 1 / 4]
    });
  },
      smallCubeMask = /*#__PURE__*/React.createElement(_index.Mask, null, /*#__PURE__*/React.createElement(SmallCube, null)),
      MediumCube = function MediumCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      scale: [1 / 2, 1 / 2, 1 / 2],
      mask: smallCubeMask
    });
  },
      mediumCubeMask = /*#__PURE__*/React.createElement(_index.Mask, null, /*#__PURE__*/React.createElement(MediumCube, null)),
      LargeCube = function LargeCube(properties) {
    return /*#__PURE__*/React.createElement(_cube["default"], {
      mask: mediumCubeMask
    });
  };

  return /*#__PURE__*/React.createElement(_index.Scene, {
    canvas: canvas
  }, /*#__PURE__*/React.createElement(_index.Part, null, /*#__PURE__*/React.createElement(LargeCube, null)), /*#__PURE__*/React.createElement(_index.DesignCamera, null));
};

var _default = maskingExample;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hc2tpbmcuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiQ2FudmFzIiwibWFza2luZ0V4YW1wbGUiLCJTbWFsbEN1YmUiLCJwcm9wZXJ0aWVzIiwic21hbGxDdWJlTWFzayIsIk1lZGl1bUN1YmUiLCJtZWRpdW1DdWJlTWFzayIsIkxhcmdlQ3ViZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7OztBQUZxRTtBQUlyRSxJQUFNQSxNQUFNLEdBQUcsSUFBSUMsYUFBSixFQUFmOztBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFEO0FBQUEsd0JBRVYsb0JBQUMsZ0JBQUQ7QUFBTSxNQUFBLEtBQUssRUFBRSxDQUFFLElBQUUsQ0FBSixFQUFPLElBQUUsQ0FBVCxFQUFZLElBQUUsQ0FBZDtBQUFiLE1BRlU7QUFBQSxHQUFsQjtBQUFBLE1BS01DLGFBQWEsZ0JBRVgsb0JBQUMsV0FBRCxxQkFDRSxvQkFBQyxTQUFELE9BREYsQ0FQUjtBQUFBLE1BWU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNGLFVBQUQ7QUFBQSx3QkFFWCxvQkFBQyxnQkFBRDtBQUFNLE1BQUEsS0FBSyxFQUFFLENBQUUsSUFBRSxDQUFKLEVBQU8sSUFBRSxDQUFULEVBQVksSUFBRSxDQUFkLENBQWI7QUFBZ0MsTUFBQSxJQUFJLEVBQUVDO0FBQXRDLE1BRlc7QUFBQSxHQVpuQjtBQUFBLE1BaUJNRSxjQUFjLGdCQUVaLG9CQUFDLFdBQUQscUJBQ0Usb0JBQUMsVUFBRCxPQURGLENBbkJSO0FBQUEsTUF3Qk1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNKLFVBQUQ7QUFBQSx3QkFFVixvQkFBQyxnQkFBRDtBQUFNLE1BQUEsSUFBSSxFQUFFRztBQUFaLE1BRlU7QUFBQSxHQXhCbEI7O0FBOEJBLHNCQUVFLG9CQUFDLFlBQUQ7QUFBTyxJQUFBLE1BQU0sRUFBRVA7QUFBZixrQkFDRSxvQkFBQyxXQUFELHFCQUNFLG9CQUFDLFNBQUQsT0FERixDQURGLGVBSUUsb0JBQUMsbUJBQUQsT0FKRixDQUZGO0FBVUQsQ0F6Q0Q7O2VBMkNlRSxjIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBDdWJlIGZyb20gXCIuL2VsZW1lbnQvY3ViZVwiO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBTbWFsbEN1YmUgPSAocHJvcGVydGllcykgPT5cblxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvNCwgMS80LCAxLzQgXX0gLz5cblxuICAgICAgICAsXG4gICAgICAgIHNtYWxsQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8U21hbGxDdWJlIC8+XG4gICAgICAgICAgPC9NYXNrPlxuXG4gICAgICAgICxcbiAgICAgICAgTWVkaXVtQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS8yLCAxLzIsIDEvMiBdfSBtYXNrPXtzbWFsbEN1YmVNYXNrfSAvPlxuXG4gICAgICAgICxcbiAgICAgICAgbWVkaXVtQ3ViZU1hc2sgPVxuXG4gICAgICAgICAgPE1hc2s+XG4gICAgICAgICAgICA8TWVkaXVtQ3ViZSAvPlxuICAgICAgICAgIDwvTWFzaz5cblxuICAgICAgICAsXG4gICAgICAgIExhcmdlQ3ViZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gICAgICAgICAgPEN1YmUgbWFzaz17bWVkaXVtQ3ViZU1hc2t9IC8+XG5cbiAgICAgICAgO1xuXG4gIHJldHVybiAoXG5cbiAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxMYXJnZUN1YmUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXNraW5nRXhhbXBsZTtcbiJdfQ==