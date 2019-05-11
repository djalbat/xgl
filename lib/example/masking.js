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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIkNhbnZhcyIsIk1hc2siLCJQYXJ0IiwiU2NlbmUiLCJDYW1lcmEiLCJjYW52YXMiLCJjdWJlc0V4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGFBQVIsQ0FBZjs7QUFFQTs7SUFFUUMsTSxHQUFzQ0YsTSxDQUF0Q0UsTTtJQUFRQyxJLEdBQThCSCxNLENBQTlCRyxJO0lBQU1DLEksR0FBd0JKLE0sQ0FBeEJJLEk7SUFBTUMsSyxHQUFrQkwsTSxDQUFsQkssSztJQUFPQyxNLEdBQVdOLE0sQ0FBWE0sTTs7O0FBRW5DLElBQU1DLFNBQVMsSUFBSUwsTUFBSixFQUFmOztBQUVBLElBQU1NLGVBQWUsU0FBZkEsWUFBZSxHQUFNLENBQUUsQ0FBN0I7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJGLFlBQWpCOztBQUVBIiwiZmlsZSI6Im1hc2tpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGppZ2dsZSA9IHJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7XG5cbi8vIGNvbnN0IENvbG91cmVkQ3Vib2lkID0gcmVxdWlyZSgnLi4vZWxlbWVudC9jb21tb24vY29sb3VyZWQvY3Vib2lkJyk7XG5cbmNvbnN0IHsgQ2FudmFzLCBNYXNrLCBQYXJ0LCBTY2VuZSwgQ2FtZXJhIH0gPSBqaWdnbGU7XG5cbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuY29uc3QgY3ViZXNFeGFtcGxlID0gKCkgPT4ge307XG5cbm1vZHVsZS5leHBvcnRzID0gY3ViZXNFeGFtcGxlO1xuXG4vKlxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gICAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSBjYW52YXM9e2NhbnZhc30gaW5pdGlhbERpc3RhbmNlPXs1fSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gLz5cbiAgPC9TY2VuZT5cblxuICovIl19