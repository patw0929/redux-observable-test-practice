import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import { search } from '../redux/modules/searchByKeyword';

const mapDispatchToProps = dispatch => {
  return {
    onChange: bindActionCreators(search, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SearchBox);
