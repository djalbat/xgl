'use strict';

var jiggle = require('../../index');

var SmallRectangle = require('./element/smallRectangle'),
    LargeRectangle = require('./element/largeRectangle');

var Canvas = jiggle.Canvas,
    Scene = jiggle.Scene,
    Mask = jiggle.Mask,
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
      React.createElement(LargeRectangle, null),
      React.createElement(SmallRectangle, null)
    ),
    React.createElement(Camera, { initialDistance: 40 })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL21hc2tpbmcuanMiXSwibmFtZXMiOlsiamlnZ2xlIiwicmVxdWlyZSIsIlNtYWxsUmVjdGFuZ2xlIiwiTGFyZ2VSZWN0YW5nbGUiLCJDYW52YXMiLCJTY2VuZSIsIk1hc2siLCJQYXJ0IiwiQ2FtZXJhIiwiY2FudmFzIiwibWFza2luZ0V4YW1wbGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLGFBQVIsQ0FBZjs7QUFFQSxJQUFNQyxpQkFBaUJELFFBQVEsMEJBQVIsQ0FBdkI7QUFBQSxJQUNNRSxpQkFBaUJGLFFBQVEsMEJBQVIsQ0FEdkI7O0lBR1FHLE0sR0FBc0NKLE0sQ0FBdENJLE07SUFBUUMsSyxHQUE4QkwsTSxDQUE5QkssSztJQUFPQyxJLEdBQXVCTixNLENBQXZCTSxJO0lBQU1DLEksR0FBaUJQLE0sQ0FBakJPLEk7SUFBTUMsTSxHQUFXUixNLENBQVhRLE07OztBQUVuQyxJQUFNQyxTQUFTLElBQUlMLE1BQUosRUFBZjs7QUFFQSxJQUFNTSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FFckI7QUFBQyxTQUFEO0FBQUEsTUFBTyxRQUFRRCxNQUFmO0FBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSwwQkFBQyxjQUFELE9BREY7QUFFRSwwQkFBQyxjQUFEO0FBRkYsS0FERjtBQUtFLHdCQUFDLE1BQUQsSUFBUSxpQkFBaUIsRUFBekI7QUFMRixHQUZxQjtBQUFBLENBQXZCOztBQVlBRSxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQjs7QUFFQSIsImZpbGUiOiJtYXNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBqaWdnbGUgPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpO1xuXG5jb25zdCBTbWFsbFJlY3RhbmdsZSA9IHJlcXVpcmUoJy4vZWxlbWVudC9zbWFsbFJlY3RhbmdsZScpLFxuICAgICAgTGFyZ2VSZWN0YW5nbGUgPSByZXF1aXJlKCcuL2VsZW1lbnQvbGFyZ2VSZWN0YW5nbGUnKTtcblxuY29uc3QgeyBDYW52YXMsIFNjZW5lLCBNYXNrLCBQYXJ0LCBDYW1lcmEgfSA9IGppZ2dsZTtcblxuY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG5jb25zdCBtYXNraW5nRXhhbXBsZSA9ICgpID0+XG5cbiAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICA8UGFydD5cbiAgICAgIDxMYXJnZVJlY3RhbmdsZSAvPlxuICAgICAgPFNtYWxsUmVjdGFuZ2xlIC8+XG4gICAgPC9QYXJ0PlxuICAgIDxDYW1lcmEgaW5pdGlhbERpc3RhbmNlPXs0MH0gLz5cbiAgPC9TY2VuZT5cblxuO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hc2tpbmdFeGFtcGxlO1xuXG4vKlxuICA8U2NlbmUgY2FudmFzPXtjYW52YXN9PlxuICAgIDxQYXJ0IGNhbnZhcz17Y2FudmFzfT5cbiAgICAgIDxDb2xvdXJlZEN1Ym9pZCBjb2xvdXI9e1sgMSwgMSwgMCwgMSBdfSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19PlxuICAgICAgICA8TWFzaz5cbiAgICAgICAgICA8Q29sb3VyZWRDdWJvaWQgd2lkdGg9ezAuNX0gaGVpZ2h0PXswLjV9IGRlcHRoPXswLjV9IHBvc2l0aW9uPXtbIDAuMjUsIDAuMjUsIDAuMjUgXX0+XG4gICAgICAgICAgICA8TWFzaz5cbiAgICAgICAgICAgICAgPENvbG91cmVkQ3Vib2lkIHdpZHRoPXswLjV9IGhlaWdodD17MC41fSBkZXB0aD17MC41fSBwb3NpdGlvbj17WyAwLjI1LCAwLjI1LCAwLjI1IF19IC8+XG4gICAgICAgICAgICA8L01hc2s+XG4gICAgICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgPC9Db2xvdXJlZEN1Ym9pZD5cbiAgICA8L1BhcnQ+XG4gICAgPENhbWVyYSBjYW52YXM9e2NhbnZhc30gaW5pdGlhbERpc3RhbmNlPXs1fSBpbml0aWFsT2Zmc2V0PXtbIDAsIDAsIDAgXX0gLz5cbiAgPC9TY2VuZT5cblxuICovIl19