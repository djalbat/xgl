'use strict';

var jiggle = require('../../index');

var Rectangle = require('./element/rectangle');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Part = jiggle.Part,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var maskingExample = function maskingExample() {
  return React.createElement(
    Scene,
    { canvas: canvas },
    React.createElement(
      Part,
      null,
      React.createElement(Rectangle, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIlJlY3RhbmdsZSIsIkNhbnZhcyIsIlNjZW5lIiwiUGFydCIsIkNhbWVyYSIsImNhbnZhcyIsIm1hc2tpbmdFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUEsSUFBTUMsWUFBWUQsUUFBUSxxQkFBUixDQUFsQjs7SUFFUUUsTSxHQUFnQ0gsTSxDQUFoQ0csTTtJQUFRQyxLLEdBQXdCSixNLENBQXhCSSxLO0lBQU9DLEksR0FBaUJMLE0sQ0FBakJLLEk7SUFBTUMsTSxHQUFXTixNLENBQVhNLE07OztBQUU3QixJQUFNQyxTQUFTLElBQUlKLE1BQUosRUFBZjs7QUFFQSxJQUFNSyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FFckI7QUFBQyxTQUFEO0FBQUEsTUFBTyxRQUFRRCxNQUFmO0FBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSwwQkFBQyxTQUFEO0FBREYsS0FERjtBQUlFLHdCQUFDLE1BQUQ7QUFKRixHQUZxQjtBQUFBLENBQXZCOztBQVdBRSxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQjs7QUFFQSIsImZpbGUiOiJtYXNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5jb25zdCBSZWN0YW5nbGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVjdGFuZ2xlJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgQ2FtZXJhIH0gPSBqaWdnbGU7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgbWFza2luZ0V4YW1wbGUgPSAoKSA9PlxuXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQ+XG4gICAgICA8UmVjdGFuZ2xlIC8+XG4gICAgPC9QYXJ0PlxuICAgIDxDYW1lcmEgLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuXG4vKlxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gICAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSBjYW52YXM9e2NhbnZhc30gaW5pdGlhbERpc3RhbmNlPXs1fSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gLz5cbiAgPC9TY2VuZT5cblxuICovIl19