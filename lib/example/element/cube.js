'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jiggle = require('../../../index');

var ColouredSquare = require('./colouredSquare');

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


			return [React.createElement(ColouredSquare, { colour: colour, rotations: [0, 0, 0] }), React.createElement(ColouredSquare, { colour: colour, rotations: [+90, 0, 0] }), React.createElement(ColouredSquare, { colour: colour, rotations: [0, +90, 0] }), React.createElement(ColouredSquare, { colour: colour, rotations: [180, 0, 0] }), React.createElement(ColouredSquare, { colour: colour, rotations: [-90, 0, 0] }), React.createElement(ColouredSquare, { colour: colour, rotations: [0, -90, 0] })];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2VsZW1lbnQvY3ViZS5qcyJdLCJuYW1lcyI6WyJqaWdnbGUiLCJyZXF1aXJlIiwiQ29sb3VyZWRTcXVhcmUiLCJDYW52YXNFbGVtZW50IiwiZGVmYXVsdEMwbG91ciIsIkN1YmUiLCJwcm9wZXJ0aWVzIiwiY29sb3VyIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBZjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsa0JBQVIsQ0FBdkI7O0lBRVFFLGEsR0FBa0JILE0sQ0FBbEJHLGE7OztBQUVSLElBQU1DLGdCQUFnQixDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUF0Qjs7SUFFTUMsSTs7Ozs7Ozs7Ozs7Z0NBQ1NDLFUsRUFBWTtBQUFBLDRCQUNXQSxVQURYLENBQ2hCQyxNQURnQjtBQUFBLE9BQ2hCQSxNQURnQixzQ0FDUEgsYUFETzs7O0FBR3pCLFVBQVEsQ0FFUCxvQkFBQyxjQUFELElBQWdCLFFBQVFHLE1BQXhCLEVBQWdDLFdBQVcsQ0FBSSxDQUFKLEVBQVMsQ0FBVCxFQUFZLENBQVosQ0FBM0MsR0FGTyxFQUdQLG9CQUFDLGNBQUQsSUFBZ0IsUUFBUUEsTUFBeEIsRUFBZ0MsV0FBVyxDQUFFLENBQUMsRUFBSCxFQUFTLENBQVQsRUFBWSxDQUFaLENBQTNDLEdBSE8sRUFJUCxvQkFBQyxjQUFELElBQWdCLFFBQVFBLE1BQXhCLEVBQWdDLFdBQVcsQ0FBSSxDQUFKLEVBQU8sQ0FBQyxFQUFSLEVBQVksQ0FBWixDQUEzQyxHQUpPLEVBTVAsb0JBQUMsY0FBRCxJQUFnQixRQUFRQSxNQUF4QixFQUFnQyxXQUFXLENBQUUsR0FBRixFQUFTLENBQVQsRUFBWSxDQUFaLENBQTNDLEdBTk8sRUFPUCxvQkFBQyxjQUFELElBQWdCLFFBQVFBLE1BQXhCLEVBQWdDLFdBQVcsQ0FBRSxDQUFDLEVBQUgsRUFBUyxDQUFULEVBQVksQ0FBWixDQUEzQyxHQVBPLEVBUVAsb0JBQUMsY0FBRCxJQUFnQixRQUFRQSxNQUF4QixFQUFnQyxXQUFXLENBQUksQ0FBSixFQUFPLENBQUMsRUFBUixFQUFZLENBQVosQ0FBM0MsR0FSTyxDQUFSO0FBV0E7OztpQ0FFc0JELFUsRUFBWTtBQUFFLFVBQU9ILGNBQWNLLGNBQWQsQ0FBNkJILElBQTdCLEVBQW1DQyxVQUFuQyxDQUFQO0FBQXdEOzs7O0VBakIzRUgsYTs7QUFvQm5CTSxPQUFPQyxPQUFQLEdBQWlCTCxJQUFqQiIsImZpbGUiOiJjdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi8uLi9pbmRleCcpO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vY29sb3VyZWRTcXVhcmUnKTtcblxuY29uc3QgeyBDYW52YXNFbGVtZW50IH0gPSBqaWdnbGU7XG5cbmNvbnN0IGRlZmF1bHRDMGxvdXIgPSBbIDEsIDEsIDAgXTtcblxuY2xhc3MgQ3ViZSBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuXHRjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcblx0ICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDMGxvdXIgfSA9IHByb3BlcnRpZXM7XG5cblx0XHRyZXR1cm4gKFtcblxuXHRcdFx0PENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAgIDAsIDAgXX0gLz4sXG5cdFx0XHQ8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyArOTAsICAgMCwgMCBdfSAvPixcblx0XHRcdDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgKzkwLCAwIF19IC8+LFxuXG5cdFx0XHQ8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAxODAsICAgMCwgMCBdfSAvPixcblx0XHRcdDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbIC05MCwgICAwLCAwIF19IC8+LFxuXHRcdFx0PENvbG91cmVkU3F1YXJlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgICAwLCAtOTAsIDAgXX0gLz4sXG5cblx0XHRdKTtcblx0fVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEN1YmUsIHByb3BlcnRpZXMpOyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3ViZTtcbiJdfQ==