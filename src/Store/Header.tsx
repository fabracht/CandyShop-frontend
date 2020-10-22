import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICartBox } from "../actions";
import Logo from "./assets/logo.svg";
import MainShopButton from "./MainShopButton";

export function Header(props: any) {
  // eslint-disable-next-line
  const [didCheckout, setDidCheckout] = useState<boolean>(false);

  return (
    <div className="shop-header">
      <Link to="/home" className="shop-header__item">
        <i className="fa fa-home">
          <p>HOME</p>
        </i>
      </Link>
      <div className="shop-header__item shop-header__logo">
        <img src={Logo} alt="" width="500px" />
      </div>
      <Link to="/home" className="shop-header__item">
        <i className="fa fa-sign-in">
          <p>LOGIN</p>
        </i>
      </Link>
      <div className="shop-header__item shop-header__cart">
        <i className="fa fa-shopping-cart">
          <p>CART</p>
          {props.cart.length !== 0 ? (
            <div className="cart-items">
              {props.cart
                .map((el: ICartBox) => el.quantity)
                .reduce((el: number, acc: number) => acc + el)}
            </div>
          ) : didCheckout ? (
            <div className="cart-items"></div>
          ) : (
            <div className="cart-items" />
          )}
        </i>
        <MainShopButton
          cart={props.cart}
          fetchCart={props.fetchCart}
          emptyCart={props.emptyCart}
          fetchToken={props.fetchToken}
          tk={props.tk}
        />
      </div>
    </div>
  );
}
