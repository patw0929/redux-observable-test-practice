/* eslint-disable global-require */
describe('searchByKeyword', () => {
  let searchByKeyword;
  let store;

  beforeEach(() => {
    jest.resetModules();

    searchByKeyword = require('../searchByKeyword');

    jest.mock('../../store');
    const createStore = require('../../store').default;

    store = createStore({
      searchByKeyword: {},
    });
  });

  describe('action: search', () => {
    const SEARCH_KEYWORD = 'patw/search-by-keyword/SEARCH_KEYWORD';

    it('should search', () => {
      const result = searchByKeyword.search('re');

      expect(result).toEqual({
        type: SEARCH_KEYWORD,
        keyword: 're',
      });
    });
  });

  describe('action: search - load & success', () => {
    let keyword;
    let expectedBody;
    let expectedActions;
    const SEARCH_KEYWORD = 'patw/search-by-keyword/SEARCH_KEYWORD';
    const SEARCH_KEYWORD_SUCCESS = 'patw/search-by-keyword/SEARCH_KEYWORD_SUCCESS';

    beforeEach(() => {
      keyword = 'reac';
      expectedBody = {
        items: [
          {
            id: 1,
            full_name: 'react',
          },
          {
            id: 2,
            full_name: 'reactiveX',
          },
        ],
      };
      expectedActions = [
        {
          type: SEARCH_KEYWORD,
          keyword,
        },
        {
          type: SEARCH_KEYWORD_SUCCESS,
          items: expectedBody.items,
          keyword,
        },
      ];
    });

    it('should show load & success actions', async () => {
      await store.dispatch(searchByKeyword.search(keyword));

      expect(store.getActions()).toEqual([expectedActions[0]]);
    });

    it('should get expected data', async () => {
      const result = await store.dispatch(searchByKeyword.searchSuccess({
        keyword,
        items: expectedBody.items,
      }));

      expect(result).toEqual(expectedActions[1]);
    });
  });
});
