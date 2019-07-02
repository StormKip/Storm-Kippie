import {
  MODAL_OPEN,
  MODAL_CLOSE
} from './types';

export const modalOpen = ({prop}) => {
  return{
    type: MODAL_OPEN,
    payload: {prop}
  }
}

export const modalClose = ()=>{
  return{
    type: MODAL_CLOSE
  }
}