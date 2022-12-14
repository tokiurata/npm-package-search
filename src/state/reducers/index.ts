import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';

const reducers = combineReducers({
  items: itemsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
