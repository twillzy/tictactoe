import React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square', () => {
  const setup = props => shallow(<Square
    onClick={jest.fn()}
    disabled={false}
    {...props}
  />);

  it('should render a button', () => {
    const wrapper = setup();
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
