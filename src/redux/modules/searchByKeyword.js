export const SEARCH_KEYWORD = 'patw/search-by-keyword/SEARCH_KEYWORD';
const SEARCH_KEYWORD_SUCCESS = 'patw/search-by-keyword/SEARCH_KEYWORD_SUCCESS';
const SEARCH_KEYWORD_FAIL = 'patw/search-by-keyword/SEARCH_KEYWORD_FAIL';

const initialState = {
  isFetching: false,
  error: null,
  keyword: '',
  keywords: {},
};

function process(
  state = {
    items: [],
  },
  action
) {
  switch (action.type) {
    case SEARCH_KEYWORD_SUCCESS: {
      const data = action.items;
      let newItems = [];

      if (action.keyword.replace(/\s/g, '').length) {
        newItems = data && data.length > 0 ? data : [];
      } else {
        newItems = [];
      }

      return {
        ...state,
        items: newItems,
      };
    }

    case SEARCH_KEYWORD_FAIL: {
      return {
        ...state,
        items: [],
      };
    }

    default: {
      return state;
    }
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_KEYWORD: {
      if (!action.keyword.replace(/\s/g, '').length) {
        return {
          ...state,
          isFetching: false,
          error: null,
          keyword: '',
        };
      }

      return {
        ...state,
        isFetching: true,
      };
    }

    case SEARCH_KEYWORD_SUCCESS: {
      const keyword = action.keyword;

      return {
        ...state,
        isFetching: false,
        error: null,
        keyword,
        keywords: {
          ...state.keywords,
          [keyword]: process(state.keywords[keyword], action),
        },
      };
    }

    case SEARCH_KEYWORD_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
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

export const searchSuccess = ({ keyword, items }) => ({
  type: SEARCH_KEYWORD_SUCCESS,
  keyword,
  items,
});

export const searchFail = ({ keyword, error }) => ({
  type: SEARCH_KEYWORD_FAIL,
  keyword,
  error,
});
