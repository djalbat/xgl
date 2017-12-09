'use strict';

require('../jiggle');

var Canvas = require('../canvas'),
    Part = require('../element/part'),
    Scene = require('../element/scene'),
    Camera = require('../element/camera'),
    Frame = require('./containerHouse/frame'),
    RoofGarden = require('./containerHouse/roofGarden'),
    Foundations = require('./containerHouse/foundations'),
    MainBalcony = require('./containerHouse/balcony/main'),
    LowerBalcony = require('./containerHouse/balcony/lower'),
    BedroomBalcony = require('./containerHouse/balcony/bedroom'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var containerHouse = function containerHouse() {
  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { canvas: canvas },
      React.createElement(
        Part,
        { canvas: canvas },
        React.createElement(MainBalcony, null),
        React.createElement(LowerBalcony, null),
        React.createElement(BedroomBalcony, null)
      ),
      React.createElement(
        Part,
        { imageMap: imageMap, canvas: canvas },
        React.createElement(Foundations, null),
        React.createElement(RoofGarden, null),
        React.createElement(Frame, null)
      ),
      React.createElement(Camera, { initialDistance: 100, initialOffset: [0, 0, 0], canvas: canvas })
    );
  });
};

module.exports = containerHouse;

/*
 FirstFloor = require('./containerHouse/floor/first'),
 ThirdFloor = require('./containerHouse/floor/third'),
 SecondFloor = require('./containerHouse/floor/second'),

 <FirstFloor />
 <SecondFloor />
 <ThirdFloor />

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9jb250YWluZXJIb3VzZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiQ2FudmFzIiwiUGFydCIsIlNjZW5lIiwiQ2FtZXJhIiwiRnJhbWUiLCJSb29mR2FyZGVuIiwiRm91bmRhdGlvbnMiLCJNYWluQmFsY29ueSIsIkxvd2VyQmFsY29ueSIsIkJlZHJvb21CYWxjb255IiwiaW1hZ2VNYXBVdGlsaXRpZXMiLCJwcmVsb2FkSW1hZ2VNYXAiLCJjb250YWluZXJIb3VzZSIsImNhbnZhcyIsImltYWdlTWFwIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsV0FBUjs7QUFFQSxJQUFNQyxTQUFTRCxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01FLE9BQU9GLFFBQVEsaUJBQVIsQ0FEYjtBQUFBLElBRU1HLFFBQVFILFFBQVEsa0JBQVIsQ0FGZDtBQUFBLElBR01JLFNBQVNKLFFBQVEsbUJBQVIsQ0FIZjtBQUFBLElBSU1LLFFBQVFMLFFBQVEsd0JBQVIsQ0FKZDtBQUFBLElBS01NLGFBQWFOLFFBQVEsNkJBQVIsQ0FMbkI7QUFBQSxJQU1NTyxjQUFjUCxRQUFRLDhCQUFSLENBTnBCO0FBQUEsSUFPTVEsY0FBY1IsUUFBUSwrQkFBUixDQVBwQjtBQUFBLElBUU1TLGVBQWVULFFBQVEsZ0NBQVIsQ0FSckI7QUFBQSxJQVNNVSxpQkFBaUJWLFFBQVEsa0NBQVIsQ0FUdkI7QUFBQSxJQVVNVyxvQkFBb0JYLFFBQVEsdUJBQVIsQ0FWMUI7O0lBWVFZLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsU0FBUyxJQUFJYixNQUFKLEVBQWY7O0FBRUFXLGtCQUFnQixVQUFDRyxRQUFEO0FBQUEsV0FFZDtBQUFDLFdBQUQ7QUFBQSxRQUFPLFFBQVFELE1BQWY7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLFFBQVFBLE1BQWQ7QUFDRSw0QkFBQyxXQUFELE9BREY7QUFFRSw0QkFBQyxZQUFELE9BRkY7QUFHRSw0QkFBQyxjQUFEO0FBSEYsT0FERjtBQU1FO0FBQUMsWUFBRDtBQUFBLFVBQU0sVUFBVUMsUUFBaEIsRUFBMEIsUUFBUUQsTUFBbEM7QUFDRSw0QkFBQyxXQUFELE9BREY7QUFFRSw0QkFBQyxVQUFELE9BRkY7QUFHRSw0QkFBQyxLQUFEO0FBSEYsT0FORjtBQVdFLDBCQUFDLE1BQUQsSUFBUSxpQkFBaUIsR0FBekIsRUFBOEIsZUFBZSxDQUFFLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixDQUE3QyxFQUEwRCxRQUFRQSxNQUFsRTtBQVhGLEtBRmM7QUFBQSxHQUFoQjtBQWlCRCxDQXBCRDs7QUFzQkFFLE9BQU9DLE9BQVAsR0FBaUJKLGNBQWpCOztBQUVBIiwiZmlsZSI6ImNvbnRhaW5lckhvdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9qaWdnbGUnKTtcblxuY29uc3QgQ2FudmFzID0gcmVxdWlyZSgnLi4vY2FudmFzJyksXG4gICAgICBQYXJ0ID0gcmVxdWlyZSgnLi4vZWxlbWVudC9wYXJ0JyksXG4gICAgICBTY2VuZSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvc2NlbmUnKSxcbiAgICAgIENhbWVyYSA9IHJlcXVpcmUoJy4uL2VsZW1lbnQvY2FtZXJhJyksXG4gICAgICBGcmFtZSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZnJhbWUnKSxcbiAgICAgIFJvb2ZHYXJkZW4gPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL3Jvb2ZHYXJkZW4nKSxcbiAgICAgIEZvdW5kYXRpb25zID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9mb3VuZGF0aW9ucycpLFxuICAgICAgTWFpbkJhbGNvbnkgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2JhbGNvbnkvbWFpbicpLFxuICAgICAgTG93ZXJCYWxjb255ID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9iYWxjb255L2xvd2VyJyksXG4gICAgICBCZWRyb29tQmFsY29ueSA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvYmFsY29ueS9iZWRyb29tJyksXG4gICAgICBpbWFnZU1hcFV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9pbWFnZU1hcCcpO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZU1hcCB9ID0gaW1hZ2VNYXBVdGlsaXRpZXM7XG5cbmNvbnN0IGNvbnRhaW5lckhvdXNlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCkgPT5cblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydCBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxNYWluQmFsY29ueSAvPlxuICAgICAgICA8TG93ZXJCYWxjb255IC8+XG4gICAgICAgIDxCZWRyb29tQmFsY29ueSAvPlxuICAgICAgPC9QYXJ0PlxuICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICAgIDxGb3VuZGF0aW9ucyAvPlxuICAgICAgICA8Um9vZkdhcmRlbiAvPlxuICAgICAgICA8RnJhbWUgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXsxMDB9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSBjYW52YXM9e2NhbnZhc30gLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhaW5lckhvdXNlO1xuXG4vKlxuIEZpcnN0Rmxvb3IgPSByZXF1aXJlKCcuL2NvbnRhaW5lckhvdXNlL2Zsb29yL2ZpcnN0JyksXG4gVGhpcmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3IvdGhpcmQnKSxcbiBTZWNvbmRGbG9vciA9IHJlcXVpcmUoJy4vY29udGFpbmVySG91c2UvZmxvb3Ivc2Vjb25kJyksXG5cbiA8Rmlyc3RGbG9vciAvPlxuIDxTZWNvbmRGbG9vciAvPlxuIDxUaGlyZEZsb29yIC8+XG5cbiAqLyJdfQ==