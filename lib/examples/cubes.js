'use strict';

var necessary = require('necessary');

var ColourCube = require('./intermediate/cube/colour'),
    TextureCube = require('./intermediate/cube/texture'),
    imagesUtilities = require('../utilities/images');

var arrayUtilities = necessary.arrayUtilities,
    preload = imagesUtilities.preload,
    first = arrayUtilities.first;


function create(colourShader, textureShader, canvas, callback) {
  createColourCube(colourShader, canvas, function (colourCube) {
    createTextureCube(textureShader, canvas, function (textureCube) {
      callback(colourCube, textureCube);
    });
  });
}

module.exports = {
  create: create
};

function createColourCube(colourShader, canvas, callback) {
  var offsetPosition = [-2, 0, 0],
      colourCube = ColourCube.fromOffsetPosition(offsetPosition, colourShader, canvas);

  callback(colourCube);
}

function createTextureCube(textureShader, canvas, callback) {
  var sources = ['texture/bricks.jpg'];

  preload(sources, function (images) {
    var firstImage = first(images),
        offsetPosition = [+2, 0, 0],
        image = firstImage,
        ///
    textureCube = TextureCube.fromOffsetPositionAndImage(offsetPosition, image, textureShader, canvas);

    callback(textureCube);
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9jdWJlcy5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiQ29sb3VyQ3ViZSIsIlRleHR1cmVDdWJlIiwiaW1hZ2VzVXRpbGl0aWVzIiwiYXJyYXlVdGlsaXRpZXMiLCJwcmVsb2FkIiwiZmlyc3QiLCJjcmVhdGUiLCJjb2xvdXJTaGFkZXIiLCJ0ZXh0dXJlU2hhZGVyIiwiY2FudmFzIiwiY2FsbGJhY2siLCJjcmVhdGVDb2xvdXJDdWJlIiwiY29sb3VyQ3ViZSIsImNyZWF0ZVRleHR1cmVDdWJlIiwidGV4dHVyZUN1YmUiLCJtb2R1bGUiLCJleHBvcnRzIiwib2Zmc2V0UG9zaXRpb24iLCJmcm9tT2Zmc2V0UG9zaXRpb24iLCJzb3VyY2VzIiwiaW1hZ2VzIiwiZmlyc3RJbWFnZSIsImltYWdlIiwiZnJvbU9mZnNldFBvc2l0aW9uQW5kSW1hZ2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFlBQVlDLFFBQVEsV0FBUixDQUFsQjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLDRCQUFSLENBQW5CO0FBQUEsSUFDTUUsY0FBY0YsUUFBUSw2QkFBUixDQURwQjtBQUFBLElBRU1HLGtCQUFrQkgsUUFBUSxxQkFBUixDQUZ4Qjs7QUFJTSxJQUFFSSxjQUFGLEdBQXFCTCxTQUFyQixDQUFFSyxjQUFGO0FBQUEsSUFDRUMsT0FERixHQUNjRixlQURkLENBQ0VFLE9BREY7QUFBQSxJQUVFQyxLQUZGLEdBRVlGLGNBRlosQ0FFRUUsS0FGRjs7O0FBSU4sU0FBU0MsTUFBVCxDQUFnQkMsWUFBaEIsRUFBOEJDLGFBQTlCLEVBQTZDQyxNQUE3QyxFQUFxREMsUUFBckQsRUFBK0Q7QUFDN0RDLG1CQUFpQkosWUFBakIsRUFBK0JFLE1BQS9CLEVBQXVDLFVBQVNHLFVBQVQsRUFBcUI7QUFDMURDLHNCQUFrQkwsYUFBbEIsRUFBaUNDLE1BQWpDLEVBQXlDLFVBQVNLLFdBQVQsRUFBc0I7QUFDN0RKLGVBQVNFLFVBQVQsRUFBcUJFLFdBQXJCO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmVixVQUFRQTtBQURPLENBQWpCOztBQUlBLFNBQVNLLGdCQUFULENBQTBCSixZQUExQixFQUF3Q0UsTUFBeEMsRUFBZ0RDLFFBQWhELEVBQTBEO0FBQ3hELE1BQU1PLGlCQUFpQixDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQXZCO0FBQUEsTUFDTUwsYUFBYVosV0FBV2tCLGtCQUFYLENBQThCRCxjQUE5QixFQUE4Q1YsWUFBOUMsRUFBNERFLE1BQTVELENBRG5COztBQUdBQyxXQUFTRSxVQUFUO0FBQ0Q7O0FBRUQsU0FBU0MsaUJBQVQsQ0FBMkJMLGFBQTNCLEVBQTBDQyxNQUExQyxFQUFrREMsUUFBbEQsRUFBNEQ7QUFDMUQsTUFBTVMsVUFBVSxDQUNSLG9CQURRLENBQWhCOztBQUlBZixVQUFRZSxPQUFSLEVBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDaEMsUUFBTUMsYUFBYWhCLE1BQU1lLE1BQU4sQ0FBbkI7QUFBQSxRQUNNSCxpQkFBaUIsQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUR2QjtBQUFBLFFBRU1LLFFBQVFELFVBRmQ7QUFBQSxRQUUwQjtBQUNwQlAsa0JBQWNiLFlBQVlzQiwwQkFBWixDQUF1Q04sY0FBdkMsRUFBdURLLEtBQXZELEVBQThEZCxhQUE5RCxFQUE2RUMsTUFBN0UsQ0FIcEI7O0FBS0FDLGFBQVNJLFdBQVQ7QUFDRCxHQVBEO0FBUUQiLCJmaWxlIjoiY3ViZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCBDb2xvdXJDdWJlID0gcmVxdWlyZSgnLi9pbnRlcm1lZGlhdGUvY3ViZS9jb2xvdXInKSxcbiAgICAgIFRleHR1cmVDdWJlID0gcmVxdWlyZSgnLi9pbnRlcm1lZGlhdGUvY3ViZS90ZXh0dXJlJyksXG4gICAgICBpbWFnZXNVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VzJyk7XG5cbmNvbnN0IHsgYXJyYXlVdGlsaXRpZXMgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgcHJlbG9hZCB9ID0gaW1hZ2VzVXRpbGl0aWVzLFxuICAgICAgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIGNyZWF0ZShjb2xvdXJTaGFkZXIsIHRleHR1cmVTaGFkZXIsIGNhbnZhcywgY2FsbGJhY2spIHtcbiAgY3JlYXRlQ29sb3VyQ3ViZShjb2xvdXJTaGFkZXIsIGNhbnZhcywgZnVuY3Rpb24oY29sb3VyQ3ViZSkge1xuICAgIGNyZWF0ZVRleHR1cmVDdWJlKHRleHR1cmVTaGFkZXIsIGNhbnZhcywgZnVuY3Rpb24odGV4dHVyZUN1YmUpIHtcbiAgICAgIGNhbGxiYWNrKGNvbG91ckN1YmUsIHRleHR1cmVDdWJlKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6IGNyZWF0ZVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQ29sb3VyQ3ViZShjb2xvdXJTaGFkZXIsIGNhbnZhcywgY2FsbGJhY2spIHtcbiAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBbLTIsIDAsIDBdLFxuICAgICAgICBjb2xvdXJDdWJlID0gQ29sb3VyQ3ViZS5mcm9tT2Zmc2V0UG9zaXRpb24ob2Zmc2V0UG9zaXRpb24sIGNvbG91clNoYWRlciwgY2FudmFzKTtcblxuICBjYWxsYmFjayhjb2xvdXJDdWJlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZUN1YmUodGV4dHVyZVNoYWRlciwgY2FudmFzLCBjYWxsYmFjaykge1xuICBjb25zdCBzb3VyY2VzID0gW1xuICAgICAgICAgICd0ZXh0dXJlL2JyaWNrcy5qcGcnXG4gICAgICAgIF07XG5cbiAgcHJlbG9hZChzb3VyY2VzLCBmdW5jdGlvbihpbWFnZXMpIHtcbiAgICBjb25zdCBmaXJzdEltYWdlID0gZmlyc3QoaW1hZ2VzKSxcbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbiA9IFsrMiwgMCwgMF0sXG4gICAgICAgICAgaW1hZ2UgPSBmaXJzdEltYWdlLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ3ViZSA9IFRleHR1cmVDdWJlLmZyb21PZmZzZXRQb3NpdGlvbkFuZEltYWdlKG9mZnNldFBvc2l0aW9uLCBpbWFnZSwgdGV4dHVyZVNoYWRlciwgY2FudmFzKTtcblxuICAgIGNhbGxiYWNrKHRleHR1cmVDdWJlKTtcbiAgfSk7XG59XG4iXX0=