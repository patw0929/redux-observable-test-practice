/* eslint-disable import/first,func-names,global-require,prefer-arrow-callback,import/no-dynamic-require */

describe('searchByKeywordReducer', () => {
  let searchByKeywordReducer;

  const SEARCH_KEYWORD = 'patw/search-by-keyword/SEARCH_KEYWORD';
  const SEARCH_KEYWORD_SUCCESS = 'patw/search-by-keyword/SEARCH_KEYWORD_SUCCESS';
  const SEARCH_KEYWORD_FAIL = 'patw/search-by-keyword/SEARCH_KEYWORD_FAIL';

  beforeEach(() => {
    jest.resetModules();
    searchByKeywordReducer = require('../searchByKeyword').default;
  });

  describe('type: SEARCH_KEYWORD', () => {
    it('should show the load status by specific keyword', () => {
      const keyword = 're';
      const state = {};

      const result = searchByKeywordReducer(state, {
        type: SEARCH_KEYWORD,
        keyword,
      });

      expect(result).toEqual({
        ...state,
        isFetching: true,
      });
    });
  });

  describe('type: SEARCH_KEYWORD_FAIL', () => {
    it('should show the fail status by specific keyword', () => {
      const keyword = 're';
      const state = {};

      const result = searchByKeywordReducer(state, {
        type: SEARCH_KEYWORD_FAIL,
        keyword,
        error: {
          response: {
            message: 'Network error',
          },
        },
      });

      expect(result).toEqual({
        ...state,
        isFetching: false,
        error: 'Network error',
      });
    });
  });

  describe('type: SEARCH_KEYWORD_SUCCESS', () => {
    it('should show load success status by specific keyword', () => {
      const keyword = 're';
      const items = [
        {
          id: 1,
          full_name: 'react',
        },
        {
          id: 2,
          full_name: 'redux'
        },
      ];
      const state = {
        isFetching: false,
        keyword,
        keywords: {
          [keyword]: {
            items,
          },
        },
      };
      const result = searchByKeywordReducer(state, {
        type: SEARCH_KEYWORD_SUCCESS,
        keyword,
        items,
      });

      expect(result).toEqual({
        ...state,
        isFetching: false,
        error: null,
        keywords: {
          [keyword]: {
            items,
          },
        },
      });
    });

    it('should show load success status with empty data', () => {
      const keyword = 'sd;lkf;sldkflsd';
      const items = [];
      const state = {
        isFetching: false,
        keyword,
        keywords: {
          [keyword]: {
            items,
          }
        },
      };
      const result = searchByKeywordReducer(state, {
        type: SEARCH_KEYWORD_SUCCESS,
        keyword,
        items: [],
      });

      expect(result).toEqual({
        ...state,
        isFetching: false,
        error: null,
      });
    });
  });

  describe('type: unknown', () => {
    it('should return original state', () => {
      const keyword = 're';
      const state = {};

      const result = searchByKeywordReducer(state, {
        type: 'UNKNOWN',
        keyword,
      });

      expect(result).toEqual(state);
    });
  });
});
