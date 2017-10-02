'use strict';

const React = require('../../react'),
      SteelSection = require('./steelSection');

const Frame = (properties) => [

  <SteelSection offset={[ 0, 0,0]} width={1} depth={1} height={28.5} />,
  <SteelSection offset={[ 0,31,0]} width={1} depth={1} height={28.5} />,
  <SteelSection offset={[47,31,0]} width={1} depth={1} height={28.5} />,
  <SteelSection offset={[47, 0,0]} width={1} depth={1} height={28.5} />,

  <SteelSection offset={[ 0,0,27.5]} width={1} depth={31} height={1} />,
  <SteelSection offset={[47,0,27.5]} width={1} depth={31} height={1} />,

  <SteelSection offset={[0, 0,27.5]} width={47} depth={1} height={1} />,
  <SteelSection offset={[0,31,27.5]} width={47} depth={1} height={1} />,

];

module.exports = Frame;
