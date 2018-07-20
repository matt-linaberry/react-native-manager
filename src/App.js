import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCRDjFoMljohDUX7tLIFrGczHpn1ZWyzdQ",
            authDomain: "manager-aa2e6.firebaseapp.com",
            databaseURL: "https://manager-aa2e6.firebaseio.com",
            projectId: "manager-aa2e6",
            storageBucket: "",
            messagingSenderId: "701498160352"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;