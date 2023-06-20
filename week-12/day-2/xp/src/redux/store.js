import { createStore, applyMiddleware} from 'redux';
import { reducer } from './reducer';
import thunk from 'redux-thunk'

const logger = (store) => (next) => (action) => {
    console.log('state', store.getState());
    console.log(action);
    next(action)
}

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;