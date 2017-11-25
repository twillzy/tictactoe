import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  const board = [
    'X', 'X', 'X',
    'X', 'X', 'X',
    'X', 'X', 'X',
  ];

  const onClick = jest.fn();

  const setup = props => shallow(<Board
    board={board}
    onClick={onClick}
    {...props}
  />);

  it('should render 9 buttons', () => {
    const wrapper = setup();
    expect(wrapper.find('Square')).toHaveLength(9);
  });
});
