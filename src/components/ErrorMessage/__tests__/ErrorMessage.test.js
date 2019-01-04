import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  it('renders correct as snapshot', () => {
    const subject = shallow(<ErrorMessage text="Network error!" />);

    expect(subject.html()).toMatchSnapshot();
  });
});
