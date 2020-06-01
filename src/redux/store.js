import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('search', serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('search');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const persistedState = loadFromLocalStorage();

const thunkMiddleware = [thunk];

const middleWares =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...thunkMiddleware))
    : applyMiddleware(...thunkMiddleware);

const store = createStore(rootReducer, persistedState, middleWares);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
