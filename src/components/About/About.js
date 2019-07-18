import React from 'react';
import '../../assets/css/App.css';
import Modal from 'react-modal';
import '../ProjectsScreen.css';
import { connect } from 'react-redux';
import { modalOpen, modalClose } from '../../actions';

const about = props => {
  return (
    <Modal
      isOpen={props.about.open}
      onRequestClose={() => {
        props.modalClose();
      }}
      closeTimeoutMS={200}
      className='project-modal'
      contentLabel='Project Details'
      shouldCloseOnOverlayClick={true}
      overlayClassName='project-backdrop'
      ariaHideApp={false}
    >
      <article id='intro' className='active'>
        <h3
          className='major'
          style={{ margin: '0 0 1rem 0', borderBottom: 'none' }}
        >
          Who is Storm?
        </h3>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h3
            className='major'
            style={{ margin: '0 0 1rem 0', fontSize: 'large' }}
          >
            Fun Facts?
          </h3>
          <p>
            I love the outdoors, I'm a big fan of football. My
            <br />
            favorite color is yellow. I listen to rock music but
            <br />
            my idol is Eminem.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <h3
            className='major'
            style={{ margin: '0 0 1rem 0', fontSize: 'large' }}
          >
            Skills and Traits?
          </h3>
          {/* skill container */}
          <div style={{ display: 'flex' }}>
            <ul
              style={{
                display: 'block',
                width: '100%',
                listStyle: 'upper-roman'
              }}
            >
              <li style={{ width: '50%', float: 'left' }}>Flexible</li>
              <li style={{ width: '50%', float: 'right' }}>Problem Solver</li>
              <li style={{ width: '50%', float: 'left' }}>Adaptable</li>
              <li style={{ width: '50%', float: 'right' }}>Team Player</li>
            </ul>
          </div>
          <div
            style={{
              display: 'flex',
              width: '-webkit-fill-available',
              justifyContent: 'space-between'
            }}
          >
            {/* Front End Skills*/}

            <div>
              <h4
                className='major'
                style={{ margin: '0 0 1rem 0', borderBottom: 'none' }}
              >
                Front End
              </h4>
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>ES6 Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <h4
                className='major'
                style={{ margin: '0 0 1rem 0', borderBottom: 'none' }}
              >
                Back End
              </h4>
              <ul>
                <li>Solidity</li>
                <li>Node</li>
                <li>SocketIO</li>
                <li>Firebase</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h4
                className='major'
                style={{ margin: '0 0 1rem 0', borderBottom: 'none' }}
              >
                Other
              </h4>
              <ul>
                <li>Photoshop</li>
                <li>AdobeXD</li>
                <li>SCRUM</li>
                <li>Typescript</li>
                <li>NextJS</li>
                <li>Typescript</li>
              </ul>
            </div>
          </div>
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
)(about);
