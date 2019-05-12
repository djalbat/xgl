'use strict';

var jiggle = require('../../index');

var ColouredSquare = require('./element/colouredSquare');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Mask = jiggle.Mask,
    Part = jiggle.Part,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var mask = React.createElement(
  Mask,
  { size: [0.333333, 0.333333, 1], position: [0.333333, 0.333333, 1] },
  React.createElement(ColouredSquare, null)
);

var maskingExample = function maskingExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(ColouredSquare, { mask: mask })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIkNvbG91cmVkU3F1YXJlIiwiQ2FudmFzIiwiU2NlbmUiLCJNYXNrIiwiUGFydCIsIkNhbWVyYSIsImNhbnZhcyIsIm1hc2siLCJtYXNraW5nRXhhbXBsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLElBQU1BLFNBQVNDLFFBQVEsYUFBUixDQUFmOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSwwQkFBUixDQUF2Qjs7SUFFUUUsTSxHQUFzQ0gsTSxDQUF0Q0csTTtJQUFRQyxLLEdBQThCSixNLENBQTlCSSxLO0lBQU9DLEksR0FBdUJMLE0sQ0FBdkJLLEk7SUFBTUMsSSxHQUFpQk4sTSxDQUFqQk0sSTtJQUFNQyxNLEdBQVdQLE0sQ0FBWE8sTTs7O0FBRW5DLElBQU1DLFNBQVMsSUFBSUwsTUFBSixFQUFmOztBQUVBLElBQU1NLE9BRUo7QUFBQyxNQUFEO0FBQUEsSUFBTSxNQUFNLENBQUUsUUFBRixFQUFZLFFBQVosRUFBc0IsQ0FBdEIsQ0FBWixFQUF1QyxVQUFVLENBQUUsUUFBRixFQUFZLFFBQVosRUFBc0IsQ0FBdEIsQ0FBakQ7QUFDRSxzQkFBQyxjQUFEO0FBREYsQ0FGRjs7QUFRQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FFckI7QUFBQyxTQUFEO0FBQUEsTUFBTyxRQUFRRixNQUFmO0FBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSwwQkFBQyxjQUFELElBQWdCLE1BQU1DLElBQXRCO0FBREYsS0FERjtBQUlFLHdCQUFDLE1BQUQ7QUFKRixHQUZxQjtBQUFBLENBQXZCOztBQVdBRSxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQjs7QUFFQSIsImZpbGUiOiJtYXNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5jb25zdCBDb2xvdXJlZFNxdWFyZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZScpO1xuXG5jb25zdCB7IENhbnZhcywgU2NlbmUsIE1hc2ssIFBhcnQsIENhbWVyYSB9ID0gamlnZ2xlO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbmNvbnN0IG1hc2sgPVxuXG4gIDxNYXNrIHNpemU9e1sgMC4zMzMzMzMsIDAuMzMzMzMzLCAxIF19IHBvc2l0aW9uPXtbIDAuMzMzMzMzLCAwLjMzMzMzMywgMSBdfT5cbiAgICA8Q29sb3VyZWRTcXVhcmUgLz5cbiAgPC9NYXNrPlxuXG47XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT5cblxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0PlxuICAgICAgPENvbG91cmVkU3F1YXJlIG1hc2s9e21hc2t9IC8+XG4gICAgPC9QYXJ0PlxuICAgIDxDYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuXG4vKlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAxLCAwLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0+XG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gZGVwdGg9ezAuNX0gcG9zaXRpb249e1sgMC4yNSwgMC4yNSwgMC4yNSBdfT5cbiAgICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0gLz5cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgICAgICA8L01hc2s+XG4gICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgIDwvUGFydD5cbiAgICA8Q2FtZXJhIGNhbnZhcz17Y2FudmFzfSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSAvPlxuICA8L1NjZW5lPlxuXG4gKi8iXX0=