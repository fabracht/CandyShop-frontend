import React, { Component } from "react";

// import { App as SignupLogin } from "./SignupLogin/SignupLogin";
// import Home from "./Home/Home";

import { App as ShopMain } from "./Store/ShopMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";

interface PropTypes {}

interface StateTypes {
  products: [{}];
  cart: [{}];
  tk: {};
}

class App extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      products: [{}],
      cart: [{}],
      tk: {},
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path="/" component={Home} exact />
          <Route path="/signup" component={SignupLogin} exact /> */}
          <Route
            path="/"
            component={ShopMain}
            products={this.state.products}
            cart={this.state.cart}
            tk={this.state.tk}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
