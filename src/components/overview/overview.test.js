import {Overview} from './Overview';
import renderer from 'react-test-renderer';
import React from 'react';

it('contains a section with the class "overview"', () => {
  const component = renderer.create(
    <Overview />
  )
  .toJSON();
  expect(component.props.className.split(' ')).toContain('overview');
});