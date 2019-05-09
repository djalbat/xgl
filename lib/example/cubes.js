'use strict';

var jiggle = require('../../index');

// const ColouredCuboid = require('../element/common/coloured/cuboid');

var Canvas = jiggle.Canvas,
    Mask = jiggle.Mask,
    Part = jiggle.Part,
    Scene = jiggle.Scene,
    Camera = jiggle.Camera;


var canvas = new Canvas();

var cubesExample = function cubesExample() {};

module.exports = cubesExample;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2N1YmVzLmpzIl0sIm5hbWVzIjpbImppZ2dsZSIsInJlcXVpcmUiLCJDYW52YXMiLCJNYXNrIiwiUGFydCIsIlNjZW5lIiwiQ2FtZXJhIiwiY2FudmFzIiwiY3ViZXNFeGFtcGxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxhQUFSLENBQWY7O0FBRUE7O0lBRVFDLE0sR0FBc0NGLE0sQ0FBdENFLE07SUFBUUMsSSxHQUE4QkgsTSxDQUE5QkcsSTtJQUFNQyxJLEdBQXdCSixNLENBQXhCSSxJO0lBQU1DLEssR0FBa0JMLE0sQ0FBbEJLLEs7SUFBT0MsTSxHQUFXTixNLENBQVhNLE07OztBQUVuQyxJQUFNQyxTQUFTLElBQUlMLE1BQUosRUFBZjs7QUFFQSxJQUFNTSxlQUFlLFNBQWZBLFlBQWUsR0FBTSxDQUFFLENBQTdCOztBQUVBQyxPQUFPQyxPQUFQLEdBQWlCRixZQUFqQjs7QUFFQSIsImZpbGUiOiJjdWJlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgamlnZ2xlID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKTtcblxuLy8gY29uc3QgQ29sb3VyZWRDdWJvaWQgPSByZXF1aXJlKCcuLi9lbGVtZW50L2NvbW1vbi9jb2xvdXJlZC9jdWJvaWQnKTtcblxuY29uc3QgeyBDYW52YXMsIE1hc2ssIFBhcnQsIFNjZW5lLCBDYW1lcmEgfSA9IGppZ2dsZTtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBjdWJlc0V4YW1wbGUgPSAoKSA9PiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBjdWJlc0V4YW1wbGU7XG5cbi8qXG4gIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgPFBhcnQgY2FudmFzPXtjYW52YXN9PlxuICAgICAgPENvbG91cmVkQ3Vib2lkIGNvbG91cj17WyAxLCAxLCAwLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsIC0wLjUgXX0+XG4gICAgICAgIDxNYXNrPlxuICAgICAgICAgIDxDb2xvdXJlZEN1Ym9pZCB3aWR0aD17MC41fSBoZWlnaHQ9ezAuNX0gZGVwdGg9ezAuNX0gcG9zaXRpb249e1sgMC4yNSwgMC4yNSwgMC4yNSBdfT5cbiAgICAgICAgICAgIDxNYXNrPlxuICAgICAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0gLz5cbiAgICAgICAgICAgIDwvTWFzaz5cbiAgICAgICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgICAgICA8L01hc2s+XG4gICAgICA8L0NvbG91cmVkQ3Vib2lkPlxuICAgIDwvUGFydD5cbiAgICA8Q2FtZXJhIGNhbnZhcz17Y2FudmFzfSBpbml0aWFsRGlzdGFuY2U9ezV9IGluaXRpYWxPZmZzZXQ9e1sgMCwgMCwgMCBdfSAvPlxuICA8L1NjZW5lPlxuXG4gKi8iXX0=