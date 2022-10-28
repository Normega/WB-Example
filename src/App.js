import React from "react";

import { Provider } from "react-redux";
import { ToastProvider } from "react-toast-notifications";
import initStore from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import ServiceApp from "ServiceApp";

import { onAuthStateChange, storeAuthUser, sendMail } from "actions";

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
    sendMail();
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
