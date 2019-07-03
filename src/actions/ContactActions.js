import {
  MESSAGE_SEND,
  MESSAGE_UPDATE,
  MESSAGE_SEND_SUCCESS,
  MESSAGE_SEND_FAIL
} from './types';
import axios from 'axios';
import Swal from 'sweetalert2';

export const messageUpdate = ({ prop, value }) => {
  console.log(prop, value)
  return {
    type: MESSAGE_UPDATE,
    payload: { prop, value }
  };
};

export const messageReset = () => {
  return{
    type: MESSAGE_SEND_SUCCESS
  }
};

export const messageSubmit=({ name, email, message })=>{
  return(dispatch)=>{
    dispatch({type:MESSAGE_SEND});
    if ((name === "") || (email === "") ||(message === "")) {
      Swal.fire(
        'Error',
        'Please fill in all details',
        'error'
      ).then(() => {
        dispatch({type:MESSAGE_SEND_FAIL});
      })
    } else {
      axios({
        method: 'POST',
        url: 'https://us-central1-storm-kip.cloudfunctions.net/sendMessage/',
        data: {
          name,
          email,
          message
        },
      }).then((response) => {
        console.log(response)
        Swal.fire(
          'Successfull',
          'Successfully sent messsage',
          'success'
        ).then(() => {
          dispatch({type:MESSAGE_SEND_SUCCESS});
        })
      })
        .catch((res) => {
          Swal.fire(
            'Error',
            'Erroe while sending mail',
            'error'
          ).then(() => {
            console.log(res)
            dispatch({type:MESSAGE_SEND_FAIL});
          })
        });
    }
  }
  
}