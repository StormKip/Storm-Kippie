import React, {Component} from 'react';
import '../../assets/css/App.css';
import { connect } from 'react-redux';
import { modalOpen } from '../../actions';
import { Link } from 'react-router-dom';

class header extends Component {

  render(){
    return (
      <header id="header" style={{ display: this.props.headerDisplay }}>
        <div className="logo">
          <i class="icon fa fa-code" aria-hidden="true"></i>
        </div>
        <div className="content">
          <div className="inner">
            <h1>Storm_Kippie</h1>
            <p>"Every great developer you know got there by solving problems they were<br/>
            unqualified to solve until they actually did it." - <strong>Patrick McKenzie</strong></p>
          </div>
        </div>
        <nav className=" use-middle">
          <ul className="navigation">
            <li><Link to="/about" onClick={() => this.props.modalOpen({ prop: 'about' })}>About</Link></li>
            <li><Link to="/portfolio" onClick={() => this.props.modalOpen({ prop: 'portfolio' })}>Portfolio</Link></li>
            <li className="is-middle"><a href="https://firebasestorage.googleapis.com/v0/b/storm-kip.appspot.com/o/Storm%20Kippie%20CV.pdf?alt=media&token=73304568-215b-4691-ac4e-1892655179d3" target="_blank" rel="noopener noreferrer">Resume <i class="fa fa-download" aria-hidden="true"></i></a></li>
            <li><Link to="/contact" onClick={() => this.props.modalOpen({ prop: 'contact' })}>Contact</Link></li>
          </ul>
          <ul className="icons" style={{ marginTop: '1rem' }}>
            <li><a href="https://linkedin.com/in/stormkippie" target="_blank" rel="noopener noreferrer" className="icon brands fa-linkedin" style={{ fontSize: '1.5rem' }}><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/StormKip" target="_blank" rel="noopener noreferrer" className="icon brands fa-github" style={{ fontSize: '1.5rem' }}><span className="label">GitHub</span></a></li>
          </ul>
        </nav>
      </header>
  
    )
  }

}

const mapStateToProps = state => {
  const { contact, portfolio, about, headerDisplay } = state.modal;
  return { contact, portfolio, about, headerDisplay };
};

export default connect(mapStateToProps, {
  modalOpen
})(header);