import { combineReducers } from 'redux';
import ModalChangeReducer from './ModalChangeReducer';
import ContactReducer from './ContactReducer';

export default combineReducers({
  modal: ModalChangeReducer,
  contactForm: ContactReducer
});
