import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import {modalOpen, modalClose} from '../actions';

class Main extends Component{
render() {
  return([
    <Header display={this.props.headerDisplay}/>,
    <About/>,
    <Portfolio/>,
    <Contact/>]
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