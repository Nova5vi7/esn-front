import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initial-state';
import createRootReducer from './reducers/';

let store;

const configureStore = (initState = initialState) =>
  createStore(
    createRootReducer(),
    initState,
    composeWithDevTools(applyMiddleware())
  );

export const initializeStore = initialState => {
  let _store = store ?? configureStore(initialState);

  if (initialState && store) {
    _store = configureStore({
      ...store.getState(),
      ...initialState
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export const useStore = initialState =>
  useMemo(() => initializeStore(initialState), [initialState]);
