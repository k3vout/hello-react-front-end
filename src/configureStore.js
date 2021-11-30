import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greetings: [{ greeting: 'Hello World!' }, { greeting: 'Just a tech' }],
};

const rootReducer = (state, action) => {
  console.log('action: ', action.type);
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return { greetings: action.json.greeting };
    default:
      return state;
  }
};

const configureStore = () => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  return store;
};

export default configureStore;
