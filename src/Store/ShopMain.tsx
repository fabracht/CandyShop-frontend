import React, { Component } from "react";
import "./_Shopmain.scss";
import { Header } from "./Header";
// import Navigation from "./Navigation";
import Content from "./Content";
// import MainShopButton from "./MainShopButton";

// import Footer from "./Footer";

import { connect } from "react-redux";
import {
  IProduct,
  fetchProducts,
  ICartBox,
  fetchCart,
  emptyCart,
  IToken,
  fetchToken,
} from "../actions";
import { IStoreState } from "../reducers";

interface PropTypes {
  products: IProduct[];
  cart: ICartBox[];
  tk: IToken;
  fetchProducts: () => {};
  fetchCart: () => {};
  emptyCart: () => {};
  fetchToken: () => {};
  setToken: () => {};
}

interface StateTypes {
  products: IProduct[];
  cart: ICartBox[];
  tk: IToken;
}

class ShopMain extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);

    this.state = {
      products: this.props.products,
      cart: this.props.cart,
      tk: this.props.tk,
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
    this.props.fetchToken();
  }

  componentDidUpdate() {}

  render(): JSX.Element {
    return (
      <div>
        <Header
          cart={this.props.cart}
          fetchCart={this.props.fetchCart}
          emptyCart={this.props.emptyCart}
          fetchToken={this.props.fetchToken}
          tk={this.props.tk}
        ></Header>
        {/* <MainShopButton
          cart={this.props.cart}
          fetchCart={this.props.fetchCart}
          emptyCart={this.props.emptyCart}
          fetchToken={this.props.fetchToken}
          tk={this.props.tk}
        /> */}

        {/* <Navigation
          cart={this.props.cart}
          tk={this.props.tk}
          fetchCart={this.props.fetchCart}
          emptyCart={this.props.emptyCart}
          fetchToken={this.props.fetchToken}
        /> */}
        <Content
          productList={this.props.products}
          cart={this.props.cart}
          fetchCart={this.props.fetchCart}
          fetchProducts={this.props.fetchProducts}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = (
  state: IStoreState
): { products: IProduct[]; cart: ICartBox[]; tk: IToken } => {
  return {
    products: state.products,
    cart: state.cart,
    tk: state.tk,
  };
};

export const App = connect(mapStateToProps, {
  fetchProducts,
  fetchCart,
  emptyCart,
  fetchToken,
})(ShopMain);
