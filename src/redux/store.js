import { createStore } from 'redux';
import { rootReducer } from './modules/root';

const configureStore = initialState => {
  let store;

  if ('production' !== process.env.NODE_ENV) {
    const Reactotron = require('./reactotronConfig').default; // eslint-disable-line global-require

    store = Reactotron.createStore(rootReducer, initialState);
  } else {
    store = createStore(rootReducer, initialState);
  }

  if (module.hot) {
    module.hot.accept('./modules/root', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
