import React, { Component } from "react";
import { ICartBox, IToken } from "../actions";

interface Props {
  cart: ICartBox[];
  tk: IToken;
  fetchCart: () => {};
  emptyCart: () => {};
  fetchToken: () => {};
}
interface State {
  cartObject: ICartBox[];
  itemQty: number;
  tk?: IToken;
  didCheckout: boolean;
}

class Navigation extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cartObject: props.cart,
      itemQty: props.cart.length,
      tk: props.tk,
      didCheckout: false,
    };

    this.checkout = this.checkout.bind(this);
  }
  componentDidMount() {
    this.props.fetchToken();
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      itemQty: nextProps.cart
        .map((el: ICartBox) => el.quantity)
        .reduce((acc: number, el: number) => acc + el, 0),
      tk: nextProps.tk,
    };
  }

  componentDidUpdate() {}

  async checkout(ev: React.MouseEvent<HTMLAnchorElement>) {
    ev.preventDefault();
    if (this.state.itemQty > 0) {
      const totalCost = this.props.cart
        .map((el: ICartBox) => el.quantity)
        .reduce((acc: number, el: number) => acc + el, 0);
      try {
        console.log(this.props.cart);
        const result = await fetch("http://localhost:3030/checkout", {
          method: "POST",
          mode: "cors",
          headers: {
            authorization: `Bearer ${this.props.tk.accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nOfItems: this.state.itemQty,
            totalCost: totalCost,
            products: this.props.cart,
          }),
        });

        this.setState({
          didCheckout: true,
        });
        const resultText = await result.json();
        console.log(resultText);
        this.props.emptyCart();
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    return (
      <header className="shop-header">
        <a href="/home" className="shop-header__logo">
          <i className="fa fa-home">
            <p>HOME</p>
          </i>
        </a>
        <div className="shop-header__background">
          <div className="shop-header__text-box">
            <h1 className="shop-heading-primary">
              <span className="shop-heading-primary--main">
                Meninas Doceiras
              </span>
            </h1>
          </div>
        </div>
        <a href="/" className="shop-header__login ">
          <i className="fa fa-sign-in">
            <p>LOGIN</p>
          </i>
        </a>
      </header>
    );
  }
}

export default Navigation;
