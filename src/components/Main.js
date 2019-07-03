import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import {modalOpen, modalClose} from '../actions';
import { BrowserRouter } from 'react-router-dom';


class Main extends Component{
render() {
  return(
    <BrowserRouter>
    <Header display={this.props.headerDisplay}/>
    <About/>
    <Portfolio/>
    <Contact/>
    </BrowserRouter>
  );
}
}

const mapStateToProps = (state) => {
  const { contact, about, portfolio, headerDisplay, modalDisplay } = state.modal;
  return { contact, about, portfolio, headerDisplay, modalDisplay };
};

export default connect(mapStateToProps, {
  modalOpen,
  modalClose
})(Main);