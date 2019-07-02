import {
  MODAL_OPEN,
  MODAL_CLOSE
} from '../actions/types';

const INITAL_STATE = {
  contact: {
    open: false,
    display:'none'
  },
  about: {
    open: false,
    display:'none'
  },
  portfolio: {
    open: false,
    display:'none'
  },
  headerDisplay:'flex',
  modalDisplay:'none'
}

export default(state = INITAL_STATE, action) =>{
  switch(action.type){
    case MODAL_OPEN:
      return {...INITAL_STATE, modalDisplay:'flex', headerDisplay:'none',[action.payload.prop]:{open:true, display:'flex'}};
    case MODAL_CLOSE:
      return {...INITAL_STATE};  

    default:
      return state;
  }
}