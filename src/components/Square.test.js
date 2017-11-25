import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square', () => {
  const onClick = jest.fn();
  const setup = props => shallow(<Square
    onClick={onClick}
    {...props}
  />);

  it('should render a button', () => {
    const wrapper = setup();
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should not be disabled when value is empty string', () => {
    const wrapper = setup({ value: '' });
    expect(wrapper.find('button').props().disabled).toEqual(false);
  });

  it('should not be disabled when value is empty string', () => {
    const wrapper = setup({ value: 'X' });
    expect(wrapper.find('button').props().disabled).toEqual(true);
  });
});
