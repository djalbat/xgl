'use strict';

require('../jiggle');

var Scene = require('../scene'),
    Canvas = require('../canvas'),
    Camera = require('../camera'),
    TexturePlane = require('./common/plane/texture'),
    TextureCuboid = require('./common/cuboid/texture'),
    ColourCylinder = require('./common/cylinder/colour'),
    TextureCylinder = require('./common/cylinder/texture'),
    TwentyFootContainer = require('./containerHouse/container/twentyFoot'),
    imageMapUtilities = require('../utilities/imageMap');

var preloadImageMap = imageMapUtilities.preloadImageMap;


var shapes = function shapes() {

  var canvas = new Canvas();

  preloadImageMap(function (imageMap) {
    return React.createElement(
      Scene,
      { imageMap: imageMap, canvas: canvas },
      React.createElement(Camera, { initialDistance: 100, initialOffset: [0, 0, 0], canvas: canvas }),
      React.createElement(TextureCuboid, { width: 10, height: 10, depth: 10, offset: [0, 20, 0], imageName: 'bricks.jpg' }),
      React.createElement(TwentyFootContainer, { rotations: [0, 0, 0] })
    );
  });
};

module.exports = shapes;

// <TexturePlane width={1} height={1} offset={[ -1, -1, -1 ]} imageName="gravel.jpg" />
// <ColourCylinder width={1} height={1} depth={1} offset={[ 0, -1, 1 ]} rotations={[ 0, 0, 0 ]} colour={[ 1, 0, 0, 1 ]} />
// <TextureCylinder width={1} height={1} depth={1} offset={[ 0, 1, -1 ]} imageName="grass.jpg" rotations={[ 0, 90, 90 ]} />
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9zaGFwZXMuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlNjZW5lIiwiQ2FudmFzIiwiQ2FtZXJhIiwiVGV4dHVyZVBsYW5lIiwiVGV4dHVyZUN1Ym9pZCIsIkNvbG91ckN5bGluZGVyIiwiVGV4dHVyZUN5bGluZGVyIiwiVHdlbnR5Rm9vdENvbnRhaW5lciIsImltYWdlTWFwVXRpbGl0aWVzIiwicHJlbG9hZEltYWdlTWFwIiwic2hhcGVzIiwiY2FudmFzIiwiaW1hZ2VNYXAiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxXQUFSOztBQUVBLElBQU1DLFFBQVFELFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUUsU0FBU0YsUUFBUSxXQUFSLENBRGY7QUFBQSxJQUVNRyxTQUFTSCxRQUFRLFdBQVIsQ0FGZjtBQUFBLElBR01JLGVBQWVKLFFBQVEsd0JBQVIsQ0FIckI7QUFBQSxJQUlNSyxnQkFBZ0JMLFFBQVEseUJBQVIsQ0FKdEI7QUFBQSxJQUtNTSxpQkFBaUJOLFFBQVEsMEJBQVIsQ0FMdkI7QUFBQSxJQU1NTyxrQkFBa0JQLFFBQVEsMkJBQVIsQ0FOeEI7QUFBQSxJQU9NUSxzQkFBc0JSLFFBQVEsdUNBQVIsQ0FQNUI7QUFBQSxJQVFNUyxvQkFBb0JULFFBQVEsdUJBQVIsQ0FSMUI7O0lBVVFVLGUsR0FBb0JELGlCLENBQXBCQyxlOzs7QUFFUixJQUFNQyxTQUFTLFNBQVRBLE1BQVMsR0FBTTs7QUFFbkIsTUFBTUMsU0FBUyxJQUFJVixNQUFKLEVBQWY7O0FBRUFRLGtCQUFnQixVQUFDRyxRQUFEO0FBQUEsV0FFZDtBQUFDLFdBQUQ7QUFBQSxRQUFPLFVBQVVBLFFBQWpCLEVBQTJCLFFBQVFELE1BQW5DO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLGlCQUFpQixHQUF6QixFQUE4QixlQUFlLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQTdDLEVBQTBELFFBQVFBLE1BQWxFLEdBREY7QUFFRSwwQkFBQyxhQUFELElBQWUsT0FBTyxFQUF0QixFQUEwQixRQUFRLEVBQWxDLEVBQXNDLE9BQU8sRUFBN0MsRUFBaUQsUUFBUSxDQUFFLENBQUYsRUFBSyxFQUFMLEVBQVMsQ0FBVCxDQUF6RCxFQUF1RSxXQUFVLFlBQWpGLEdBRkY7QUFHRSwwQkFBQyxtQkFBRCxJQUFxQixXQUFXLENBQUUsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLENBQWhDO0FBSEYsS0FGYztBQUFBLEdBQWhCO0FBU0QsQ0FiRDs7QUFlQUUsT0FBT0MsT0FBUCxHQUFpQkosTUFBakI7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InNoYXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vamlnZ2xlJyk7XG5cbmNvbnN0IFNjZW5lID0gcmVxdWlyZSgnLi4vc2NlbmUnKSxcbiAgICAgIENhbnZhcyA9IHJlcXVpcmUoJy4uL2NhbnZhcycpLFxuICAgICAgQ2FtZXJhID0gcmVxdWlyZSgnLi4vY2FtZXJhJyksXG4gICAgICBUZXh0dXJlUGxhbmUgPSByZXF1aXJlKCcuL2NvbW1vbi9wbGFuZS90ZXh0dXJlJyksXG4gICAgICBUZXh0dXJlQ3Vib2lkID0gcmVxdWlyZSgnLi9jb21tb24vY3Vib2lkL3RleHR1cmUnKSxcbiAgICAgIENvbG91ckN5bGluZGVyID0gcmVxdWlyZSgnLi9jb21tb24vY3lsaW5kZXIvY29sb3VyJyksXG4gICAgICBUZXh0dXJlQ3lsaW5kZXIgPSByZXF1aXJlKCcuL2NvbW1vbi9jeWxpbmRlci90ZXh0dXJlJyksXG4gICAgICBUd2VudHlGb290Q29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXJIb3VzZS9jb250YWluZXIvdHdlbnR5Rm9vdCcpLFxuICAgICAgaW1hZ2VNYXBVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvaW1hZ2VNYXAnKTtcblxuY29uc3QgeyBwcmVsb2FkSW1hZ2VNYXAgfSA9IGltYWdlTWFwVXRpbGl0aWVzO1xuXG5jb25zdCBzaGFwZXMgPSAoKSA9PiB7XG5cbiAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gIHByZWxvYWRJbWFnZU1hcCgoaW1hZ2VNYXApID0+XG5cbiAgICA8U2NlbmUgaW1hZ2VNYXA9e2ltYWdlTWFwfSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8Q2FtZXJhIGluaXRpYWxEaXN0YW5jZT17MTAwfSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gY2FudmFzPXtjYW52YXN9IC8+XG4gICAgICA8VGV4dHVyZUN1Ym9pZCB3aWR0aD17MTB9IGhlaWdodD17MTB9IGRlcHRoPXsxMH0gb2Zmc2V0PXtbIDAsIDIwLCAwIF19IGltYWdlTmFtZT1cImJyaWNrcy5qcGdcIiAvPlxuICAgICAgPFR3ZW50eUZvb3RDb250YWluZXIgcm90YXRpb25zPXtbIDAsIDAsIDAgXX0gLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNoYXBlcztcblxuLy8gPFRleHR1cmVQbGFuZSB3aWR0aD17MX0gaGVpZ2h0PXsxfSBvZmZzZXQ9e1sgLTEsIC0xLCAtMSBdfSBpbWFnZU5hbWU9XCJncmF2ZWwuanBnXCIgLz5cbi8vIDxDb2xvdXJDeWxpbmRlciB3aWR0aD17MX0gaGVpZ2h0PXsxfSBkZXB0aD17MX0gb2Zmc2V0PXtbIDAsIC0xLCAxIF19IHJvdGF0aW9ucz17WyAwLCAwLCAwIF19IGNvbG91cj17WyAxLCAwLCAwLCAxIF19IC8+XG4vLyA8VGV4dHVyZUN5bGluZGVyIHdpZHRoPXsxfSBoZWlnaHQ9ezF9IGRlcHRoPXsxfSBvZmZzZXQ9e1sgMCwgMSwgLTEgXX0gaW1hZ2VOYW1lPVwiZ3Jhc3MuanBnXCIgcm90YXRpb25zPXtbIDAsIDkwLCA5MCBdfSAvPlxuIl19