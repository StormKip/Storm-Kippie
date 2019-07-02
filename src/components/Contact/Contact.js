import React from 'react';
import '../../assets/css/App.css';
import Modal from 'react-modal';
import '../ProjectsScreen.css';
import { connect } from 'react-redux';
import { modalOpen, modalClose, messageUpdate, messageReset, messageSubmit } from '../../actions';
const contact = (props)=>{
  const { contact, name, email, message } = props
  const {modalClose, messageSubmit, messageUpdate, messageReset} = props
  return(
      <Modal
      isOpen={contact.open}
      onRequestClose={()=>{modalClose()}}
      closeTimeoutMS = {200}
      className='project-modal'
      contentLabel="Project Details"
      overlayClassName='project-backdrop'
      appElement={document.getElementById('main')} 
    >
    <article id="contact" style={{display:contact.display, flexDirection:'column'}}>
    <h2 class="major">Contact</h2>
    <form onSubmit={(event)=>{ 
      event.preventDefault(); 
      messageSubmit({name, email, message})
      }
    }
      >
      <div class="fields">
        <div class="field half">
          <label for="name">Name</label>
          <input 
          type="text" 
          name="name" 
          id="name" 
          value={name}
          onChange={(value)=>{
            messageUpdate({prop:'name', value:value.target.value})}}
          />
        </div>
        <div class="field half">
          <label for="email">Email</label>
          <input 
          type="text" 
          name="email" 
          id="email" 
          value={email}
          onChange={(value)=>{messageUpdate({prop:'email', value:value.target.value})}}
          />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea 
          name="message" 
          id="message" 
          rows="4"
          value={message}
          onChange={(value)=>{messageUpdate({prop:'message', value:value.target.value})}}
          ></textarea>
        </div>
      </div>
      <ul class="actions">
        <li><input type="submit" value="Send Message" class="primary"/></li>
        <li><input type="reset" value="Reset" onClick={()=>messageReset()}/></li>
      </ul>
    </form>
    <ul class="icons">
    <li><a href="https://linkedin.com/in/stormkippie" target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin" style={{fontSize:'1.5rem'}}><span className="label">LinkedIn</span></a></li>
    <li><a href="https://github.com/StormKip" target="_blank" rel="noopener noreferrer" className="icon brands fa-github" style={{fontSize:'1.5rem'}}><span className="label">GitHub</span></a></li>
              
    </ul>
  </article>
  </Modal>
  )
}
const mapStateToProps = state => {
  const { contact } = state.modal;
  const { name, email, message } = state.contactForm;

  return { contact, name, email, message } ;
};

export default connect(mapStateToProps,{
  modalOpen, 
  modalClose,
  messageUpdate,
  messageReset,
  messageSubmit
})(contact);