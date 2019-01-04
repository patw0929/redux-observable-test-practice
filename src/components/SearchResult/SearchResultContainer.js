import { connect } from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = state => {
  const isFetching = state.searchByKeyword.isFetching;

  if (!state.searchByKeyword.keyword) {
    return {
      isFetching,
      items: [],
      error: null,
    };
  }

  return {
    isFetching,
    items: state.searchByKeyword.keywords[state.searchByKeyword.keyword].items,
    error: state.searchByKeyword.error,
  };
};

export default connect(mapStateToProps)(SearchResult);
