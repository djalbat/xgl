'use strict';

var jiggle = require('../../index');

var Cube = require('./element/cube');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Part = jiggle.Part,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var cubesExample = function cubesExample() {
	return React.createElement(
		Scene,
		{ canvas: canvas },
		React.createElement(
			Part,
			null,
			React.createElement(Cube, null)
		),
		React.createElement(Camera, null)
	);
};

module.exports = cubesExample;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2N1YmVzLmpzIl0sIm5hbWVzIjpbImppZ2dsZSIsInJlcXVpcmUiLCJDdWJlIiwiQ2FudmFzIiwiU2NlbmUiLCJQYXJ0IiwiQ2FtZXJhIiwiY2FudmFzIiwiY3ViZXNFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxnQkFBUixDQUFiOztJQUVRRSxNLEdBQWdDSCxNLENBQWhDRyxNO0lBQVFDLEssR0FBd0JKLE0sQ0FBeEJJLEs7SUFBT0MsSSxHQUFpQkwsTSxDQUFqQkssSTtJQUFNQyxNLEdBQVdOLE0sQ0FBWE0sTTs7O0FBRTdCLElBQU1DLFNBQVMsSUFBSUosTUFBSixFQUFmOztBQUVBLElBQU1LLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFFBRXBCO0FBQUMsT0FBRDtBQUFBLElBQU8sUUFBUUQsTUFBZjtBQUNDO0FBQUMsT0FBRDtBQUFBO0FBQ0MsdUJBQUMsSUFBRDtBQURELEdBREQ7QUFJQyxzQkFBQyxNQUFEO0FBSkQsRUFGb0I7QUFBQSxDQUFyQjs7QUFXQUUsT0FBT0MsT0FBUCxHQUFpQkYsWUFBakIiLCJmaWxlIjoiY3ViZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGppZ2dsZSA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7XG5cbmNvbnN0IEN1YmUgPSByZXF1aXJlKCcuL2VsZW1lbnQvY3ViZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIFBhcnQsIENhbWVyYSB9ID0gamlnZ2xlO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IGN1YmVzRXhhbXBsZSA9ICgpID0+XG5cblx0PFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cblx0XHQ8UGFydD5cblx0XHRcdDxDdWJlIC8+XG5cdFx0PC9QYXJ0PlxuXHRcdDxDYW1lcmEgLz5cblx0PC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1YmVzRXhhbXBsZTtcbiJdfQ==