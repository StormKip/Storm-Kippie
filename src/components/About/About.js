import React from 'react';
import '../../assets/css/App.css';
import Modal from 'react-modal';
import '../ProjectsScreen.css';
import { connect } from 'react-redux';
import { modalOpen, modalClose } from '../../actions';

const about = (props)=>{
  return(
    <Modal
    isOpen={props.about.open}
    onRequestClose={()=>{props.modalClose()}}
    closeTimeoutMS = {200}
    className='project-modal'
    contentLabel="Project Details"
    shouldCloseOnOverlayClick={true}
    overlayClassName='project-backdrop'
    ariaHideApp={false}
  >
    <article id="intro" className="active">
    <h2 class="major">About</h2>
    <span class="image main"><img src="../../assets/pic03.jpg" alt="" /></span>
    <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
  </article>

  </Modal>

  )
}
const mapStateToProps = state => {
  console.log(state)
  const { contact, portfolio, about,headerDisplay } = state.modal;

  return { contact, portfolio, about,headerDisplay } ;
};

export default connect(mapStateToProps,{
  modalOpen, 
  modalClose
})(about);