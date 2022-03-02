import React from 'react';
import { extract } from '../lib/extract/extractProps';
import Shape from './Shape';
import { RNSVGCircle } from './NativeComponents';
import { CircleProps } from './types';

export default class Circle extends Shape<CircleProps> {
  static displayName = 'Circle';

  static defaultProps = {
    cx: 0,
    cy: 0,
    r: 0,
  };

  render() {
    const { props } = this;
    const { cx, cy, r } = props;
    const circleProps = { ...extract(this, props), cx, cy, r };

    return <RNSVGCircle ref={this.refMethod} {...circleProps} />;
  }
}
