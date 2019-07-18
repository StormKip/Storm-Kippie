import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import { modalOpen, modalClose } from '../actions';
import { Router } from 'react-router-dom';
import history from '../history';
class Main extends Component {
  componentDidMount() {
    this.backListener = history.listen(location => {
      if (location.pathname === '/') {
        this.props.modalClose();
      }
    });
  }

  componentWillUnmount() {
    // Unbind listener
    this.backListener();
  }

  render() {
    return (
      <Router history={history}>
        <Header display={this.props.headerDisplay} />
        <About />
        <Portfolio />
        <Contact />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const {
    contact,
    about,
    portfolio,
    headerDisplay,
    modalDisplay
  } = state.modal;
  return { contact, about, portfolio, headerDisplay, modalDisplay };
};

export default connect(
  mapStateToProps,
  {
    modalOpen,
    modalClose
  }
)(Main);
