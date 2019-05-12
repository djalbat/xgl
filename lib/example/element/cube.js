'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var Face = require('./face');

var CanvasElement = jiggle.CanvasElement;


var defaultC0lour = [1, 1, 0];

var Cube = function (_CanvasElement) {
	_inherits(Cube, _CanvasElement);

	function Cube() {
		_classCallCheck(this, Cube);

		return _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).apply(this, arguments));
	}

	_createClass(Cube, [{
		key: 'childElements',
		value: function childElements(properties) {
			var _properties$colour = properties.colour,
			    colour = _properties$colour === undefined ? defaultC0lour : _properties$colour;


			return [React.createElement(Face, { colour: colour, rotations: [0, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [+90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, +90, 0] }), React.createElement(Face, { colour: colour, rotations: [180, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [-90, 0, 0] }), React.createElement(Face, { colour: colour, rotations: [0, -90, 0] })];
		}
	}], [{
		key: 'fromProperties',
		value: function fromProperties(properties) {
			return CanvasElement.fromProperties(Cube, properties);
		}
	}]);

	return Cube;
}(CanvasElement);

module.exports = Cube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiRmFjZSIsIkNhbnZhc0VsZW1lbnQiLCJkZWZhdWx0QzBsb3VyIiwiQ3ViZSIsInByb3BlcnRpZXMiLCJjb2xvdXIiLCJmcm9tUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxnQkFBUixDQUFmOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsUUFBUixDQUFiOztJQUVRRSxhLEdBQWtCSCxNLENBQWxCRyxhOzs7QUFFUixJQUFNQyxnQkFBZ0IsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBdEI7O0lBRU1DLEk7Ozs7Ozs7Ozs7O2dDQUNTQyxVLEVBQVk7QUFBQSw0QkFDV0EsVUFEWCxDQUNoQkMsTUFEZ0I7QUFBQSxPQUNoQkEsTUFEZ0Isc0NBQ1BILGFBRE87OztBQUd6QixVQUFRLENBRVAsb0JBQUMsSUFBRCxJQUFNLFFBQVFHLE1BQWQsRUFBc0IsV0FBVyxDQUFJLENBQUosRUFBUyxDQUFULEVBQVksQ0FBWixDQUFqQyxHQUZPLEVBR1Asb0JBQUMsSUFBRCxJQUFNLFFBQVFBLE1BQWQsRUFBc0IsV0FBVyxDQUFFLENBQUMsRUFBSCxFQUFTLENBQVQsRUFBWSxDQUFaLENBQWpDLEdBSE8sRUFJUCxvQkFBQyxJQUFELElBQU0sUUFBUUEsTUFBZCxFQUFzQixXQUFXLENBQUksQ0FBSixFQUFPLENBQUMsRUFBUixFQUFZLENBQVosQ0FBakMsR0FKTyxFQU1QLG9CQUFDLElBQUQsSUFBTSxRQUFRQSxNQUFkLEVBQXNCLFdBQVcsQ0FBRSxHQUFGLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBakMsR0FOTyxFQU9QLG9CQUFDLElBQUQsSUFBTSxRQUFRQSxNQUFkLEVBQXNCLFdBQVcsQ0FBRSxDQUFDLEVBQUgsRUFBUyxDQUFULEVBQVksQ0FBWixDQUFqQyxHQVBPLEVBUVAsb0JBQUMsSUFBRCxJQUFNLFFBQVFBLE1BQWQsRUFBc0IsV0FBVyxDQUFJLENBQUosRUFBTyxDQUFDLEVBQVIsRUFBWSxDQUFaLENBQWpDLEdBUk8sQ0FBUjtBQVdBOzs7aUNBRXNCRCxVLEVBQVk7QUFBRSxVQUFPSCxjQUFjSyxjQUFkLENBQTZCSCxJQUE3QixFQUFtQ0MsVUFBbkMsQ0FBUDtBQUF3RDs7OztFQWpCM0VILGE7O0FBb0JuQk0sT0FBT0MsT0FBUCxHQUFpQkwsSUFBakIiLCJmaWxlIjoiY3ViZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgamlnZ2xlID0gcmVxdWlyZSgnLi4vLi4vLi4vaW5kZXgnKTtcblxuY29uc3QgRmFjZSA9IHJlcXVpcmUoJy4vZmFjZScpO1xuXG5jb25zdCB7IENhbnZhc0VsZW1lbnQgfSA9IGppZ2dsZTtcblxuY29uc3QgZGVmYXVsdEMwbG91ciA9IFsgMSwgMSwgMCBdO1xuXG5jbGFzcyBDdWJlIGV4dGVuZHMgQ2FudmFzRWxlbWVudCB7XG5cdGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuXHQgIGNvbnN0IHsgY29sb3VyID0gZGVmYXVsdEMwbG91ciB9ID0gcHJvcGVydGllcztcblxuXHRcdHJldHVybiAoW1xuXG5cdFx0XHQ8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuXHRcdFx0PEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcblx0XHRcdDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCArOTAsIDAgXX0gLz4sXG5cblx0XHRcdDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG5cdFx0XHQ8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuXHRcdFx0PEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsIC05MCwgMCBdfSAvPixcblxuXHRcdF0pO1xuXHR9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ3ViZSwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDdWJlO1xuIl19