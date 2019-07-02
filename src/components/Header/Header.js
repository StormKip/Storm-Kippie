import React from 'react';
import '../../assets/css/App.css';
import { connect } from 'react-redux';
import { modalOpen } from '../../actions';


const header = (props) => {
  return (
    <header id="header" style={{ display: props.headerDisplay }}>
      <div className="logo">
        <span className="icon fa-eye"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Storm_Kippie</h1>
          <p>"Every great developer you know got there by solving problems they were<br/>
          unqualified to solve until they actually did it." - <strong>Patrick McKenzie</strong></p>
        </div>
      </div>
      <nav>
        <ul className="navigation">
          <li><a href onClick={() => props.modalOpen({ prop: 'about' })}>About</a></li>
          <li><a href onClick={() => props.modalOpen({ prop: 'portfolio' })}>Portfolio</a></li>
          <li><a href onClick={() => props.modalOpen({ prop: 'contact' })}>Contact</a></li>
        </ul>
        <ul className="icons" style={{ marginTop: '1rem' }}>
          <li><a href="https://linkedin.com/in/stormkippie" target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin" style={{ fontSize: '1.5rem' }}><span className="label">LinkedIn</span></a></li>
          <li><a href="https://github.com/StormKip" target="_blank" rel="noopener noreferrer" className="icon brands fa-github" style={{ fontSize: '1.5rem' }}><span className="label">GitHub</span></a></li>
        </ul>
      </nav>
    </header>

  )
}

const mapStateToProps = state => {
  const { contact, portfolio, about, headerDisplay } = state.modal;
  return { contact, portfolio, about, headerDisplay };
};

export default connect(mapStateToProps, {
  modalOpen
})(header);