import { MODAL_OPEN, MODAL_CLOSE } from './types';
import history from '../history';
export const modalOpen = ({ prop }) => {
  return {
    type: MODAL_OPEN,
    payload: { prop }
  };
};

export const modalClose = () => {
  return dispatch => {
    let pathname = history.location.pathname;
    if (pathname !== '/') {
      history.push('/');
    }
    dispatch({ type: MODAL_CLOSE });
  };
};
