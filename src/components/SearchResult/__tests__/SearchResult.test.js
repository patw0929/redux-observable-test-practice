import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from '../SearchResult';

describe('SearchResult', () => {
  it('renders correct as snapshot - with isFetching is true', () => {
    const subject = shallow(<SearchResult isFetching />);

    expect(subject.html()).toMatchSnapshot();
  });

  it('renders correct as snapshot - with has error', () => {
    const subject = shallow(
      <SearchResult
        isFetching={false}
        items={[]}
        error="Network error!"
      />
    );

    expect(subject.html()).toMatchSnapshot();
  });

  it('renders correct as snapshot - with has items', () => {
    const subject = shallow(
      <SearchResult
        isFetching={false}
        items={[{
          id: 1,
          full_name: 'react',
        }, {
          id: 2,
          full_name: 'redux',
        }]}
        error={null}
      />
    );

    expect(subject.html()).toMatchSnapshot();
  });
});
