import React, { ChangeEvent } from "react";
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
  // itemQty: number;

  didCheckout: boolean;
  isChecked: boolean;
}

class MainShopButton extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      cartObject: [],
      isChecked: false,
      didCheckout: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  async componentDidMount() {
    this.props.fetchCart();
  }

  generateCartItems(): JSX.Element[] | JSX.Element {
    if (this.props.cart.length) {
      return this.props.cart.map((el: ICartBox, i) => {
        return (
          <div key={i} className="products-item">
            <img
              src="https://via.placeholder.com/120"
              alt=""
              className="product-image"
            />
            <div className="product-description">
              <span>{el.product.name}</span> <span>{el.product.weight}</span>
            </div>
            <div className="product-quantity">
              <input
                type="text"
                defaultValue={el.quantity}
                className="product-quantity__input"
              />
              <i className="product-quantity__link plus">&nbsp;</i>
              <i className="product-quantity__link minus">&nbsp;</i>
            </div>
            <p className="product-price">{el.product.price * el.quantity}</p>
            <button className="product-remove">
              <i className="fa fa-times-circle"></i>
            </button>
          </div>
        );
      });
    } else {
      return <h2>Cart is Empty</h2>;
    }
  }

  handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    console.log(target);

    this.setState({
      isChecked: target.checked,
    });
  }

  async checkout(ev: React.MouseEvent<HTMLButtonElement>) {
    this.props.fetchToken();

    ev.preventDefault();
    const nOfItems = this.props.cart
      .map((el) => el.quantity)
      .reduce((curr, prev) => curr + prev);
    if (this.props.cart.length > 0) {
      const totalCost = this.props.cart
        .map((el: ICartBox) => el.quantity)
        .reduce((acc: number, el: number) => acc + el, 0);
      try {
        console.log(this.props.cart);
        console.log(this.props.tk.accessToken);
        const result = await fetch(
          "http://localhost:3030/checkout/5f3ddfc280d549990a28ffa8",
          {
            method: "POST",
            mode: "cors",
            headers: {
              Authorization: `Bearer ${this.props.tk.accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nOfItems: nOfItems,
              totalCost: totalCost,
              products: this.props.cart,
            }),
          }
        );

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
      <div className="checkout-menu">
        <input
          type="checkbox"
          className="checkout-menu__checkbox"
          checked={this.state.isChecked}
          onChange={this.handleInputChange}
          value={this.state.isChecked ? 1 : 0}
        />

        <div className="checkout-menu__card">
          <div className="card-title">
            <h2 className="card-title-main">Shopping Cart</h2>
            <p className="card-title-subtotal">
              $
              {this.props.cart.length
                ? `Total: ${this.props.cart
                    .map((el: ICartBox) => el.product.price * el.quantity)
                    .reduce((el: number, acc: number) => (acc += el))
                    .toFixed(2)}`
                : `0.00`}{" "}
            </p>
          </div>
          <div className="address">
            <form action="submit">
              <label htmlFor="address" className="address-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="address-input"
              />
              <button type="submit" className="address-button">
                change
              </button>
            </form>
          </div>
          <div className="products">{this.generateCartItems()}</div>
          {/* eslint-disable-next-line */}
          <button
            type="submit"
            className="checkout-button"
            onClick={this.checkout}
          >
            checkout
          </button>
        </div>
      </div>
    );
  }
}

export default MainShopButton;
