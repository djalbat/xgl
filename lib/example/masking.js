'use strict';

var jiggle = require('../../index');

var ColouredSquare = require('./element/colouredSquare');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Mask = jiggle.Mask,
    Part = jiggle.Part,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var MaskedSquare = function MaskedSquare(properties) {
  return React.createElement(ColouredSquare, { colour: [0, 1, 0] });
};

var MaskingSquare = function MaskingSquare(properties) {
  return React.createElement(ColouredSquare, { colour: [0, 0, 1], size: [0.333333, 0.333333, 1], position: [0.333333, 0.333333, 1] });
};

var mask = React.createElement(
  Mask,
  null,
  React.createElement(MaskingSquare, null)
);

var maskingExample = function maskingExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(MaskedSquare, { mask: mask })
    ),
    React.createElement(Camera, null)
  );
};

module.exports = maskingExample;

/*

  <Scene canvas={canvas}>
    <Part canvas={canvas}>
      <ColouredCuboid colour={[ 1, 1, 0, 1 ]} position={[ -0.5, -0.5, -0.5 ]}>
        <Mask>
          <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]}>
            <Mask>
              <ColouredCuboid width={0.5} height={0.5} depth={0.5} position={[ 0.25, 0.25, 0.25 ]} />
            </Mask>
          </ColouredCuboid>
        </Mask>
      </ColouredCuboid>
    </Part>
    <Camera canvas={canvas} initialDistance={5} initialOffset={[ 0, 0, 0 ]} />
  </Scene>

 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkU3F1YXJlIiwiQ2FudmFzIiwiU2NlbmUiLCJNYXNrIiwiUGFydCIsIkNhbWVyYSIsImNhbnZhcyIsIk1hc2tlZFNxdWFyZSIsInByb3BlcnRpZXMiLCJNYXNraW5nU3F1YXJlIiwibWFzayIsIm1hc2tpbmdFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLDBCQUFSLENBQXZCOztJQUVRRSxNLEdBQXNDSCxNLENBQXRDRyxNO0lBQVFDLEssR0FBOEJKLE0sQ0FBOUJJLEs7SUFBT0MsSSxHQUF1QkwsTSxDQUF2QkssSTtJQUFNQyxJLEdBQWlCTixNLENBQWpCTSxJO0lBQU1DLE0sR0FBV1AsTSxDQUFYTyxNOzs7QUFFbkMsSUFBTUMsU0FBUyxJQUFJTCxNQUFKLEVBQWY7O0FBRUEsSUFBTU0sZUFBZSxTQUFmQSxZQUFlLENBQUNDLFVBQUQ7QUFBQSxTQUVuQixvQkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEIsR0FGbUI7QUFBQSxDQUFyQjs7QUFNQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNELFVBQUQ7QUFBQSxTQUVwQixvQkFBQyxjQUFELElBQWdCLFFBQVEsQ0FBRSxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsQ0FBeEIsRUFBcUMsTUFBTSxDQUFFLFFBQUYsRUFBWSxRQUFaLEVBQXNCLENBQXRCLENBQTNDLEVBQXNFLFVBQVUsQ0FBRSxRQUFGLEVBQVksUUFBWixFQUFzQixDQUF0QixDQUFoRixHQUZvQjtBQUFBLENBQXRCOztBQU1BLElBQU1FLE9BRUo7QUFBQyxNQUFEO0FBQUE7QUFDRSxzQkFBQyxhQUFEO0FBREYsQ0FGRjs7QUFRQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FFckI7QUFBQyxTQUFEO0FBQUEsTUFBTyxRQUFRTCxNQUFmO0FBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSwwQkFBQyxZQUFELElBQWMsTUFBTUksSUFBcEI7QUFERixLQURGO0FBSUUsd0JBQUMsTUFBRDtBQUpGLEdBRnFCO0FBQUEsQ0FBdkI7O0FBV0FFLE9BQU9DLE9BQVAsR0FBaUJGLGNBQWpCOztBQUVBIiwiZmlsZSI6Im1hc2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGppZ2dsZSA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7XG5cbmNvbnN0IENvbG91cmVkU3F1YXJlID0gcmVxdWlyZSgnLi9lbGVtZW50L2NvbG91cmVkU3F1YXJlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgQ2FtZXJhIH0gPSBqaWdnbGU7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgTWFza2VkU3F1YXJlID0gKHByb3BlcnRpZXMpID0+XG5cbiAgPENvbG91cmVkU3F1YXJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG5cbjtcblxuY29uc3QgTWFza2luZ1NxdWFyZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxDb2xvdXJlZFNxdWFyZSBjb2xvdXI9e1sgMCwgMCwgMSBdfSBzaXplPXtbIDAuMzMzMzMzLCAwLjMzMzMzMywgMSBdfSBwb3NpdGlvbj17WyAwLjMzMzMzMywgMC4zMzMzMzMsIDEgXX0gLz5cblxuO1xuXG5jb25zdCBtYXNrID1cblxuICA8TWFzaz5cbiAgICA8TWFza2luZ1NxdWFyZSAvPlxuICA8L01hc2s+XG5cbjtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8TWFza2VkU3F1YXJlIG1hc2s9e21hc2t9IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxDYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuXG4vKlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAxLCAwLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0+XG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gZGVwdGg9ezAuNX0gcG9zaXRpb249e1sgMC4yNSwgMC4yNSwgMC4yNSBdfT5cbiAgICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0gLz5cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgICAgICA8L01hc2s+XG4gICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgIDwvUGFydD5cbiAgICA8Q2FtZXJhIGNhbnZhcz17Y2FudmFzfSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSAvPlxuICA8L1NjZW5lPlxuXG4gKi8iXX0=