'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var vec3 = require('../../../maths/vec3'),
    Edge = require('./section/edge'),
    OpenMesh = require('./section/openMesh'),
    LongEdge = require('./section/edge/long'),
    ShortEdge = require('./section/edge/short'),
    CanvasElement = require('../../../element/canvas');

var add = vec3.add,
    height = Edge.height,
    thickness = Edge.thickness,
    width = 4,
    depth = 16;

var BalconySection = function (_CanvasElement) {
  _inherits(BalconySection, _CanvasElement);

  function BalconySection() {
    _classCallCheck(this, BalconySection);

    return _possibleConstructorReturn(this, (BalconySection.__proto__ || Object.getPrototypeOf(BalconySection)).apply(this, arguments));
  }

  _createClass(BalconySection, [{
    key: 'childElements',
    value: function childElements(properties) {
      var position = properties.position;


      return [React.createElement(LongEdge, { position: add(position, [0, -height, 0]), depth: depth }), React.createElement(LongEdge, { position: add(position, [width - thickness, -height, 0]), depth: depth }), React.createElement(ShortEdge, { position: add(position, [0, -height, 0]), width: width }), React.createElement(ShortEdge, { position: add(position, [0, -height, 16 - thickness]), width: width }), React.createElement(OpenMesh, { position: add(position, [thickness, 0, thickness]), width: width - 2 * thickness, depth: depth - 2 * thickness })];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return CanvasElement.fromProperties(BalconySection, properties);
    }
  }]);

  return BalconySection;
}(CanvasElement);

module.exports = BalconySection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS9iYWxjb255L3NlY3Rpb24uanMiXSwibmFtZXMiOlsidmVjMyIsInJlcXVpcmUiLCJFZGdlIiwiT3Blbk1lc2giLCJMb25nRWRnZSIsIlNob3J0RWRnZSIsIkNhbnZhc0VsZW1lbnQiLCJhZGQiLCJoZWlnaHQiLCJ0aGlja25lc3MiLCJ3aWR0aCIsImRlcHRoIiwiQmFsY29ueVNlY3Rpb24iLCJwcm9wZXJ0aWVzIiwicG9zaXRpb24iLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxxQkFBUixDQUFiO0FBQUEsSUFDTUMsT0FBT0QsUUFBUSxnQkFBUixDQURiO0FBQUEsSUFFTUUsV0FBV0YsUUFBUSxvQkFBUixDQUZqQjtBQUFBLElBR01HLFdBQVdILFFBQVEscUJBQVIsQ0FIakI7QUFBQSxJQUlNSSxZQUFZSixRQUFRLHNCQUFSLENBSmxCO0FBQUEsSUFLTUssZ0JBQWdCTCxRQUFRLHlCQUFSLENBTHRCOztBQU9NLElBQUVNLEdBQUYsR0FBVVAsSUFBVixDQUFFTyxHQUFGO0FBQUEsSUFDRUMsTUFERixHQUN3Qk4sSUFEeEIsQ0FDRU0sTUFERjtBQUFBLElBQ1VDLFNBRFYsR0FDd0JQLElBRHhCLENBQ1VPLFNBRFY7QUFBQSxJQUVBQyxLQUZBLEdBRVEsQ0FGUjtBQUFBLElBR0FDLEtBSEEsR0FHUSxFQUhSOztJQUtBQyxjOzs7Ozs7Ozs7OztrQ0FDVUMsVSxFQUFZO0FBQUEsVUFDakJDLFFBRGlCLEdBQ0xELFVBREssQ0FDakJDLFFBRGlCOzs7QUFHeEIsYUFBUSxDQUVOLG9CQUFDLFFBQUQsSUFBVSxVQUFVUCxJQUFJTyxRQUFKLEVBQWMsQ0FBQyxDQUFELEVBQUksQ0FBQ04sTUFBTCxFQUFhLENBQWIsQ0FBZCxDQUFwQixFQUFvRCxPQUFPRyxLQUEzRCxHQUZNLEVBR04sb0JBQUMsUUFBRCxJQUFVLFVBQVVKLElBQUlPLFFBQUosRUFBYyxDQUFDSixRQUFRRCxTQUFULEVBQW9CLENBQUNELE1BQXJCLEVBQTZCLENBQTdCLENBQWQsQ0FBcEIsRUFBb0UsT0FBT0csS0FBM0UsR0FITSxFQUlOLG9CQUFDLFNBQUQsSUFBVyxVQUFVSixJQUFJTyxRQUFKLEVBQWMsQ0FBQyxDQUFELEVBQUksQ0FBQ04sTUFBTCxFQUFhLENBQWIsQ0FBZCxDQUFyQixFQUFxRCxPQUFPRSxLQUE1RCxHQUpNLEVBS04sb0JBQUMsU0FBRCxJQUFXLFVBQVVILElBQUlPLFFBQUosRUFBYyxDQUFDLENBQUQsRUFBSSxDQUFDTixNQUFMLEVBQWEsS0FBS0MsU0FBbEIsQ0FBZCxDQUFyQixFQUFrRSxPQUFPQyxLQUF6RSxHQUxNLEVBT04sb0JBQUMsUUFBRCxJQUFVLFVBQVVILElBQUlPLFFBQUosRUFBYyxDQUFDTCxTQUFELEVBQVksQ0FBWixFQUFlQSxTQUFmLENBQWQsQ0FBcEIsRUFBOEQsT0FBT0MsUUFBUSxJQUFJRCxTQUFqRixFQUE0RixPQUFPRSxRQUFRLElBQUlGLFNBQS9HLEdBUE0sQ0FBUjtBQVVEOzs7bUNBRXFCSSxVLEVBQVk7QUFBRSxhQUFPUCxjQUFjUyxjQUFkLENBQTZCSCxjQUE3QixFQUE2Q0MsVUFBN0MsQ0FBUDtBQUFrRTs7OztFQWhCM0VQLGE7O0FBbUI3QlUsT0FBT0MsT0FBUCxHQUFpQkwsY0FBakIiLCJmaWxlIjoic2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgdmVjMyA9IHJlcXVpcmUoJy4uLy4uLy4uL21hdGhzL3ZlYzMnKSxcbiAgICAgIEVkZ2UgPSByZXF1aXJlKCcuL3NlY3Rpb24vZWRnZScpLFxuICAgICAgT3Blbk1lc2ggPSByZXF1aXJlKCcuL3NlY3Rpb24vb3Blbk1lc2gnKSxcbiAgICAgIExvbmdFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2UvbG9uZycpLFxuICAgICAgU2hvcnRFZGdlID0gcmVxdWlyZSgnLi9zZWN0aW9uL2VkZ2Uvc2hvcnQnKSxcbiAgICAgIENhbnZhc0VsZW1lbnQgPSByZXF1aXJlKCcuLi8uLi8uLi9lbGVtZW50L2NhbnZhcycpO1xuXG5jb25zdCB7IGFkZCB9ID0gdmVjMyxcbiAgICAgIHsgaGVpZ2h0LCB0aGlja25lc3MgfSA9IEVkZ2UsXG4gICAgICB3aWR0aCA9IDQsXG4gICAgICBkZXB0aCA9IDE2O1xuXG5jbGFzcyBCYWxjb255U2VjdGlvbiBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7cG9zaXRpb259ID0gcHJvcGVydGllcztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8TG9uZ0VkZ2UgcG9zaXRpb249e2FkZChwb3NpdGlvbiwgWzAsIC1oZWlnaHQsIDBdKX0gZGVwdGg9e2RlcHRofS8+LFxuICAgICAgPExvbmdFZGdlIHBvc2l0aW9uPXthZGQocG9zaXRpb24sIFt3aWR0aCAtIHRoaWNrbmVzcywgLWhlaWdodCwgMF0pfSBkZXB0aD17ZGVwdGh9Lz4sXG4gICAgICA8U2hvcnRFZGdlIHBvc2l0aW9uPXthZGQocG9zaXRpb24sIFswLCAtaGVpZ2h0LCAwXSl9IHdpZHRoPXt3aWR0aH0vPixcbiAgICAgIDxTaG9ydEVkZ2UgcG9zaXRpb249e2FkZChwb3NpdGlvbiwgWzAsIC1oZWlnaHQsIDE2IC0gdGhpY2tuZXNzXSl9IHdpZHRoPXt3aWR0aH0vPixcblxuICAgICAgPE9wZW5NZXNoIHBvc2l0aW9uPXthZGQocG9zaXRpb24sIFt0aGlja25lc3MsIDAsIHRoaWNrbmVzc10pfSB3aWR0aD17d2lkdGggLSAyICogdGhpY2tuZXNzfSBkZXB0aD17ZGVwdGggLSAyICogdGhpY2tuZXNzfS8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEJhbGNvbnlTZWN0aW9uLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhbGNvbnlTZWN0aW9uO1xuIl19