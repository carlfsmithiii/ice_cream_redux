import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as freezer } from './ducks/freezer';
import logger from './middleware/logger';

const rootReducer = combineReducers({
    freezer,
    foo: (state = {hello: 'world'}, action ) => state,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));