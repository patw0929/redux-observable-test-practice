import configureMockStore from 'redux-mock-store';

function configureStore(data = {}) {
  const mockStore = configureMockStore();

  return mockStore(data);
}

export default configureStore;
