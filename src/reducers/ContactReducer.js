import {
  MESSAGE_UPDATE,
  MESSAGE_SEND,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL
} from '../actions/types';

const INITAL_STATE = {
  name: '',
  email: '',
  message: '',
  loading: false,
  error: ''
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case MESSAGE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case MESSAGE_SEND:
      return { ...state, loading: true };
    case MESSAGE_SEND_SUCCESS:
      return { ...state, ...INITAL_STATE };
    case MESSAGE_SEND_FAIL:
      return { ...state, error: 'Error', loading: false };
    default:
      return state;
  }
};
