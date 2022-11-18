import React from "react";

import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import initStore from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import ServiceApp from "ServiceApp";

import { onAuthStateChange, storeAuthUser } from "actions";

import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// intrument app to firebase callable functions
// const functions = getFunctions(getApp());
// connectFunctionsEmulator(functions, "127.0.0.1:", 5001);

// React Component
// functional component
const store = initStore();

class App extends React.Component {
  componentDidMount() {
    // this.unsubscribeAuth = onAuthStateChange(authUser => {
    //   store.dispatch(storeAuthUser(authUser))

    // })
    onAuthStateChange((authUser) => {
      store.dispatch(storeAuthUser(authUser));

      // if (authUser) {
      //   store.dispatch(subscribeToMessages(authUser.uid))}
    });
  }

  // componentWillMount() {
  //   this.unsubscribeAuth()
  // }

  render() {
    return (
      <Provider store={store}>
        <ToastProvider>
          <Router>
            <ServiceApp />
          </Router>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;
