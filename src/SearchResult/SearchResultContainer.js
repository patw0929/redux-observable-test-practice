import { connect } from 'react-redux';
import SearchResult from './SearchResult';

const mapStateToProps = state => {
  if (!state.keyword) {
    return {
      items: [],
    };
  }

  return {
    items: state.searchByKeyword[state.keyword].items,
  };
};

export default connect(mapStateToProps)(SearchResult);
