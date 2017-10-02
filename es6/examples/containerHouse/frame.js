'use strict';

const React = require('../../react'),
      SteelSection = require('./steelSection');

const Frame = (properties) => [

  <SteelSection offset={[ 0, 0,0]} width={1} depth={1} height={24} />,
  <SteelSection offset={[ 0,31,0]} width={1} depth={1} height={24} />,
  <SteelSection offset={[47,31,0]} width={1} depth={1} height={24} />,
  <SteelSection offset={[47, 0,0]} width={1} depth={1} height={24} />,

  <SteelSection offset={[ 0,0,23]} width={1} depth={31} height={1} />,
  <SteelSection offset={[47,0,23]} width={1} depth={31} height={1} />,

  <SteelSection offset={[0, 0,23]} width={47} depth={1} height={1} />,
  <SteelSection offset={[0,31,23]} width={47} depth={1} height={1} />,

];

module.exports = Frame;
