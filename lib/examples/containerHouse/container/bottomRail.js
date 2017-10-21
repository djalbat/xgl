'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CanvasElement = require('../../../element/canvas'),
    ColouredCuboid = require('../../common/coloured/cuboid');

var colour = [1, 1, 1, 1],
    thickness = 8 / 12,
    indent = 1 / 12;

var BottomRail = function (_CanvasElement) {
  _inherits(BottomRail, _CanvasElement);

  function BottomRail() {
    _classCallCheck(this, BottomRail);

    return _possibleConstructorReturn(this, (BottomRail.__proto__ || Object.getPrototypeOf(BottomRail)).apply(this, arguments));
  }

  _createClass(BottomRail, [{
    key: 'childElements',
    value: function childElements(properties) {
      var length = properties.length,
          width = length,
          depth = thickness - 2 * indent,
          height = thickness,
          position = [0, 0, indent];


      return [React.createElement(ColouredCuboid, { width: width, height: height, depth: depth, position: position, colour: colour })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BottomRail, properties);
    }
  }]);

  return BottomRail;
}(CanvasElement);

Object.assign(BottomRail, {
  thickness: thickness
});

module.exports = BottomRail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9jb250YWluZXIvYm90dG9tUmFpbC5qcyJdLCJuYW1lcyI6WyJDYW52YXNFbGVtZW50IiwicmVxdWlyZSIsIkNvbG91cmVkQ3Vib2lkIiwiY29sb3VyIiwidGhpY2tuZXNzIiwiaW5kZW50IiwiQm90dG9tUmFpbCIsInByb3BlcnRpZXMiLCJsZW5ndGgiLCJ3aWR0aCIsImRlcHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0JBQWdCQyxRQUFRLHlCQUFSLENBQXRCO0FBQUEsSUFDTUMsaUJBQWlCRCxRQUFRLDhCQUFSLENBRHZCOztBQUdBLElBQU1FLFNBQVMsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLENBQWY7QUFBQSxJQUNNQyxZQUFZLElBQUUsRUFEcEI7QUFBQSxJQUVNQyxTQUFTLElBQUUsRUFGakI7O0lBSU1DLFU7Ozs7Ozs7Ozs7O2tDQUNVQyxVLEVBQVk7QUFDbEIsVUFBRUMsTUFBRixHQUFhRCxVQUFiLENBQUVDLE1BQUY7QUFBQSxVQUNBQyxLQURBLEdBQ1FELE1BRFI7QUFBQSxVQUVBRSxLQUZBLEdBRVFOLFlBQVksSUFBRUMsTUFGdEI7QUFBQSxVQUdBTSxNQUhBLEdBR1NQLFNBSFQ7QUFBQSxVQUlBUSxRQUpBLEdBSVcsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRUCxNQUFSLENBSlg7OztBQU1OLGFBQVEsQ0FFTixvQkFBQyxjQUFELElBQWdCLE9BQU9JLEtBQXZCLEVBQThCLFFBQVFFLE1BQXRDLEVBQThDLE9BQU9ELEtBQXJELEVBQTRELFVBQVVFLFFBQXRFLEVBQWdGLFFBQVFULE1BQXhGLEdBRk0sQ0FBUjtBQUtEOzs7bUNBRXFCSSxVLEVBQVk7QUFBRSxhQUFPUCxjQUFjYSxjQUFkLENBQTZCUCxVQUE3QixFQUF5Q0MsVUFBekMsQ0FBUDtBQUE4RDs7OztFQWYzRVAsYTs7QUFrQnpCYyxPQUFPQyxNQUFQLENBQWNULFVBQWQsRUFBMEI7QUFDeEJGLGFBQVdBO0FBRGEsQ0FBMUI7O0FBSUFZLE9BQU9DLE9BQVAsR0FBaUJYLFVBQWpCIiwiZmlsZSI6ImJvdHRvbVJhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpLFxuICAgICAgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IGNvbG91ciA9IFsgMSwgMSwgMSwgMSBdLFxuICAgICAgdGhpY2tuZXNzID0gOC8xMixcbiAgICAgIGluZGVudCA9IDEvMTI7XG5cbmNsYXNzIEJvdHRvbVJhaWwgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgd2lkdGggPSBsZW5ndGgsIC8vL1xuICAgICAgICAgIGRlcHRoID0gdGhpY2tuZXNzIC0gMippbmRlbnQsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpY2tuZXNzLFxuICAgICAgICAgIHBvc2l0aW9uID0gWyAwLCAwLCBpbmRlbnQgXTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0gZGVwdGg9e2RlcHRofSBwb3NpdGlvbj17cG9zaXRpb259IGNvbG91cj17Y29sb3VyfSAvPixcblxuICAgIF0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQm90dG9tUmFpbCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihCb3R0b21SYWlsLCB7XG4gIHRoaWNrbmVzczogdGhpY2tuZXNzXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3R0b21SYWlsO1xuIl19