import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Main from './components/Main';

class App extends Component {
  componentWillMount() {
    window.addEventListener('load', this.handleLoad);
 }

 handleLoad() {
  window.setTimeout( ()=> {
    document.body.classList.remove('is-preload');
  }, 100);
 } 

 componentWillUnmount() {
  window.removeEventListener('load', this.handleLoad);
}
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Main />
      </Provider>

    );
  }
}

export default App;
