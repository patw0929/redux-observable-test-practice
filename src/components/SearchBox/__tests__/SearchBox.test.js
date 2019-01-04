import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../SearchBox';

describe('SearchBox', () => {
  it('renders correct as snapshot', () => {
    const subject = shallow(<SearchBox props$={jest.fn} />);

    expect(subject.html()).toMatchSnapshot();
  });
});
