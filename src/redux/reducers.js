import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { sortReducer } from './sortSlice';
import { authReducer } from './auth/authSlice';
import { persistReducer } from 'redux-persist';

export default combineReducers({
  auth: persistReducer(authReducer),
  contacts: contactsReducer,
  filter: filterReducer,
  sortByName: sortReducer,
});
