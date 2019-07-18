import React from 'react';
import '../../assets/css/App.css';
import Modal from 'react-modal';
import '../ProjectsScreen.css';
import { connect } from 'react-redux';
import { modalOpen, modalClose } from '../../actions';

const Portfolio = props => {
  return (
    <Modal
      isOpen={props.portfolio.open}
      onRequestClose={() => {
        props.modalClose();
      }}
      closeTimeoutMS={200}
      className='project-modal'
      contentLabel='Project Details'
      overlayClassName='project-backdrop'
      ariaHideApp={false}
    >
      <article id='portfolio'>
        <h2 className='major'>Portfolio</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            className='logo'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <i
              className='fa fa-exclamation-circle'
              style={{ fontSize: '5rem' }}
              aria-hidden='true'
            />
            <h1>Error</h1>
          </div>
          <p>
            No Projects available currently! But don't worry. <br />
            You can check out my Github in the mean time.
          </p>
          <a
            href='https://github.com/StormKip'
            target='_blank'
            rel='noopener noreferrer'
            className='viewPortfolio'
            style={{ fontSize: '1.5rem' }}
          >
            <span className='label'>
              GitHub
              <i className='icon brands fa-github' />
            </span>
          </a>
        </div>
      </article>
    </Modal>
  );
};

const mapStateToProps = state => {
  const { contact, portfolio, about, headerDisplay } = state.modal;

  return { contact, portfolio, about, headerDisplay };
};

export default connect(
  mapStateToProps,
  {
    modalOpen,
    modalClose
  }
)(Portfolio);
