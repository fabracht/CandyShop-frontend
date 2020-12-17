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
}

interface StateTypes {
  // products: IProduct[];
  // cart: ICartBox[];
  // tk: IToken;
}

class ShopMain extends Component<PropTypes, StateTypes> {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  componentDidUpdate() {}

  render(): JSX.Element {
    return (
      <div>
        <Header
          cart={this.props.cart}
          fetchCart={this.props.fetchCart}
          emptyCart={this.props.emptyCart}
        ></Header>
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
