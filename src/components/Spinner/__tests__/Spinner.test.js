import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner', () => {
  it('renders correct as snapshot', () => {
    const subject = shallow(<Spinner />);

    expect(subject.html()).toMatchSnapshot();
  });
});
