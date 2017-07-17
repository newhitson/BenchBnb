import { merge } from 'lodash';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultState = () => (
  {
  session: {
    currentUser: null,
    errors: ["Invalid credentials"]
  }
});

const SessionReducer = (state ={} , action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { current_user: action.current_user });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {errors: [errors]});
    default:
      return state;
  }
};

export default SessionReducer;
