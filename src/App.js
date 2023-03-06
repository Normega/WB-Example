import React from "react";

import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import Routess from "Routes.js";
import initStore from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ServiceApp from "ServiceApp";
import { AvatarCreationPage } from "pages/AvatarCreation";

import { onAuthStateChange, storeAuthUser } from "actions";

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
