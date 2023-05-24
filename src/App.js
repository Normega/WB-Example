import React from "react";
import initStore from "./store";
import ServiceApp from "ServiceApp";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChange, storeAuthUser } from "actions";

const store = initStore();

class App extends React.Component {
  componentDidMount() {
    onAuthStateChange((authUser) => {
      store.dispatch(storeAuthUser(authUser));
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <ServiceApp />
        </Router>
      </Provider>
    );
  }
}

export default App;
