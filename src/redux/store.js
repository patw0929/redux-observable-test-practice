import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './modules/root';

const configureStore = initialState => {
  let store;
  const epicMiddleware = createEpicMiddleware();
  const enhancer = applyMiddleware(epicMiddleware);

  epicMiddleware.run(rootEpic);

  if ('production' !== process.env.NODE_ENV) {
    const Reactotron = require('./reactotronConfig').default; // eslint-disable-line global-require

    store = Reactotron.createStore(rootReducer, initialState, enhancer);
  } else {
    store = createStore(rootReducer, initialState, enhancer);
  }

  if (module.hot) {
    module.hot.accept('./modules/root', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
