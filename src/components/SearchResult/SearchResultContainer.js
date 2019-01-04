import { connect } from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = state => {
  const isFetching = state.searchByKeyword.isFetching;

  if (!state.searchByKeyword.keyword) {
    return {
      isFetching: false,
      items: [],
    };
  }

  return {
    isFetching,
    items: state.searchByKeyword.keywords[state.searchByKeyword.keyword].items,
  };
};

export default connect(mapStateToProps)(SearchResult);
