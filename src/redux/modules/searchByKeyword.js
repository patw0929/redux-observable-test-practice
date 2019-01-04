const SEARCH_KEYWORD = 'patw/search-by-keyword/SEARCH_KEYWORD';
const SEARCH_KEYWORD_SUCCESS = 'patw/search-by-keyword/SEARCH_KEYWORD_SUCCESS';
const SEARCH_KEYWORD_FAIL = 'patw/search-by-keyword/SEARCH_KEYWORD_FAIL';

const initialState = {};

function process(
  state = {
    didInvalidate: false,
    isFetching: false,
    meta: {},
    items: [],
  },
  action
) {
  switch (action.type) {
    case SEARCH_KEYWORD: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case SEARCH_KEYWORD_SUCCESS: {
      console.log(action);
      const { data } = action.result.items;
      let newItems = [];

      if (action.keyword.replace(/\s/g, '').length) {
        newItems = data && data.length > 0 ? data : [];
      } else {
        newItems = [];
      }

      return {
        ...state,
        items: newItems,
        keyword: action.keyword,
        isFetching: false,
        error: null,
      };
    }

    case SEARCH_KEYWORD_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_KEYWORD:
    case SEARCH_KEYWORD_SUCCESS:
    case SEARCH_KEYWORD_FAIL: {
      const keyword = action.keyword;

      if (!keyword.replace(/\s/g, '').length) {
        return {
          ...state,
          keyword: '',
        };
      }

      return {
        ...state,
        keyword,
        [keyword]: process(state[keyword], action),
      };
    }

    default:
      return state;
  }
};

export const search = (keyword = '') => ({
  type: SEARCH_KEYWORD,
  keyword,
});
