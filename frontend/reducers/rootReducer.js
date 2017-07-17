import {combineReducer} from 'redux';

import SessionReducer from './session_reducer';

const rootReducer = combineReducer({
  session: SessionReducer
});

export default rootReducer;
