'use strict';

var offsetsMatrixName = 'uOffsetsMatrix',
    positionMatrixName = 'uPositionMatrix',
    rotationsMatrixName = 'uRotationsMatrix',
    projectionMatrixName = 'uPerspectiveMatrix',
    vertexPositionAttributeName = 'aVertexPosition';

var positionSource = new String('\n  \n        uniform mat4 ' + offsetsMatrixName + ',\n                     ' + rotationsMatrixName + ',\n                     ' + positionMatrixName + ',\n                     ' + projectionMatrixName + ';\n        \n        attribute vec4 ' + vertexPositionAttributeName + ';\n\n        vec4 calculatePosition() {\n          vec4 position = ' + projectionMatrixName + ' * ' + positionMatrixName + ' * ' + rotationsMatrixName + ' * ' + offsetsMatrixName + ' * ' + vertexPositionAttributeName + ';\n          \n          return position;\n        }\n        \n      ');

Object.assign(positionSource, {
  offsetsMatrixName: offsetsMatrixName,
  positionMatrixName: positionMatrixName,
  rotationsMatrixName: rotationsMatrixName,
  projectionMatrixName: projectionMatrixName,
  vertexPositionAttributeName: vertexPositionAttributeName
});

module.exports = positionSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9yZW5kZXJlci9zb3VyY2UvcG9zaXRpb24uanMiXSwibmFtZXMiOlsib2Zmc2V0c01hdHJpeE5hbWUiLCJwb3NpdGlvbk1hdHJpeE5hbWUiLCJyb3RhdGlvbnNNYXRyaXhOYW1lIiwicHJvamVjdGlvbk1hdHJpeE5hbWUiLCJ2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUiLCJwb3NpdGlvblNvdXJjZSIsIlN0cmluZyIsIk9iamVjdCIsImFzc2lnbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLG9CQUFvQixnQkFBMUI7QUFBQSxJQUNNQyxxQkFBcUIsaUJBRDNCO0FBQUEsSUFFTUMsc0JBQXNCLGtCQUY1QjtBQUFBLElBR01DLHVCQUF1QixvQkFIN0I7QUFBQSxJQUlNQyw4QkFBOEIsaUJBSnBDOztBQU1BLElBQU1DLGlCQUFpQixJQUFJQyxNQUFKLGlDQUVBTixpQkFGQSxnQ0FHQUUsbUJBSEEsZ0NBSUFELGtCQUpBLGdDQUtBRSxvQkFMQSw0Q0FPRUMsMkJBUEYsMkVBVUtELG9CQVZMLFdBVStCRixrQkFWL0IsV0FVdURDLG1CQVZ2RCxXQVVnRkYsaUJBVmhGLFdBVXVHSSwyQkFWdkcsNEVBQXZCOztBQWlCQUcsT0FBT0MsTUFBUCxDQUFjSCxjQUFkLEVBQThCO0FBQzVCTCxzQ0FENEI7QUFFNUJDLHdDQUY0QjtBQUc1QkMsMENBSDRCO0FBSTVCQyw0Q0FKNEI7QUFLNUJDO0FBTDRCLENBQTlCOztBQVFBSyxPQUFPQyxPQUFQLEdBQWlCTCxjQUFqQiIsImZpbGUiOiJwb3NpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSAndU9mZnNldHNNYXRyaXgnLFxuICAgICAgcG9zaXRpb25NYXRyaXhOYW1lID0gJ3VQb3NpdGlvbk1hdHJpeCcsXG4gICAgICByb3RhdGlvbnNNYXRyaXhOYW1lID0gJ3VSb3RhdGlvbnNNYXRyaXgnLFxuICAgICAgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSAndVBlcnNwZWN0aXZlTWF0cml4JyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9ICdhVmVydGV4UG9zaXRpb24nO1xuXG5jb25zdCBwb3NpdGlvblNvdXJjZSA9IG5ldyBTdHJpbmcoYFxuICBcbiAgICAgICAgdW5pZm9ybSBtYXQ0ICR7b2Zmc2V0c01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cG9zaXRpb25NYXRyaXhOYW1lfSxcbiAgICAgICAgICAgICAgICAgICAgICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9O1xuICAgICAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuXG4gICAgICAgIHZlYzQgY2FsY3VsYXRlUG9zaXRpb24oKSB7XG4gICAgICAgICAgdmVjNCBwb3NpdGlvbiA9ICR7cHJvamVjdGlvbk1hdHJpeE5hbWV9ICogJHtwb3NpdGlvbk1hdHJpeE5hbWV9ICogJHtyb3RhdGlvbnNNYXRyaXhOYW1lfSAqICR7b2Zmc2V0c01hdHJpeE5hbWV9ICogJHt2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWV9O1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGApO1xuXG5PYmplY3QuYXNzaWduKHBvc2l0aW9uU291cmNlLCB7XG4gIG9mZnNldHNNYXRyaXhOYW1lLFxuICBwb3NpdGlvbk1hdHJpeE5hbWUsXG4gIHJvdGF0aW9uc01hdHJpeE5hbWUsXG4gIHByb2plY3Rpb25NYXRyaXhOYW1lLFxuICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWVcbn0pO1xuICAgIFxubW9kdWxlLmV4cG9ydHMgPSBwb3NpdGlvblNvdXJjZTtcbiJdfQ==