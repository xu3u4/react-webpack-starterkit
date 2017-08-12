import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import sinon from 'sinon';

import Button from 'components/button';

describe ('<Button>', () => {
  const onclick = sinon.stub();
  const value = 'Click';
  let button;
  
  it ('render components', () => {
    button = renderer.create(
      <Button onCountUp={ onclick } >{ value }</Button>
    );
    expect(button).toMatchSnapshot();
  });

  it ('should call onClick when click', () => {
    button = shallow(
      <Button onCountUp={ onclick } >{ value }</Button>
    );
    button.find('button').simulate('click');
    expect(onclick.calledOnce).toBeTruthy();
  });
});