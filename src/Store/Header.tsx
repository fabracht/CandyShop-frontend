import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ICartBox } from "../actions";
import Logo from "./assets/logo.svg";
import { MainShopButton } from "./MainShopButton";

interface Props {
  cart: ICartBox[];
  fetchCart: () => {};
  emptyCart: () => {};
}

export function Header(props: Props) {
  // eslint-disable-next-line
  const [didCheckout, setDidCheckout] = useState<boolean>(false);
  // eslint-disable-next-line
  const [cartObject, setCartObject] = useState<ICartBox[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [avatarPath, setAvatarPath] = useState<string | undefined>("");

  useEffect(() => {
    setCartObject(props.cart);
    fetch("https://localhost:443/isloggedin", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((resultJson) => {
        if (resultJson.result === "success") {
          setIsLoggedIn(true);
          setAvatarPath(resultJson.data.avatar);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
        console.log("This is the error");
        console.log(err);
      });

    // return () => {
    //   cleanup;
    // };
  }, [avatarPath, props]);

  const getNumberOfItems = () => {
    const cart = props.cart;
    const itemQtyArr =
      cart.length > 0
        ? props.cart.map((el: ICartBox) => {
            return el.quantity;
          })
        : [];
    if (itemQtyArr.length > 0) {
      const itemQty = itemQtyArr.reduce((curr, acc) => curr + acc);
      return itemQty;
    } else {
      return undefined;
    }
  };

  const logout = async (ev: React.SyntheticEvent<HTMLElement>) => {
    try {
      const result = await fetch("https://localhost:443/logout", {
        method: "GET",
        mode: "cors",
        credentials: "include",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resultJson = await result.json();
      if (resultJson.result === "success") {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="shop-header">
      <Link to="/" className="shop-header__item">
        <i className="fa fa-home"></i>
        <p>HOME</p>
      </Link>
      <div className="shop-header__item shop-header__logo">
        <img src={Logo} alt="" width="500px" />
      </div>
      {isLoggedIn ? (
        <Link to="/profile" className="shop-header__item">
          <div className="avatar-container">
            <img src={avatarPath} id="avatar-img" alt="Avatar Icon"></img>
            <p>Profile</p>
          </div>
        </Link>
      ) : undefined}
      {!isLoggedIn ? (
        <Link to="/signup" className="shop-header__item">
          <i className="fa fa-sign-in">
            <p>LOGIN</p>
          </i>
        </Link>
      ) : (
        <Link to="#" onClick={logout} className="shop-header__item">
          <i className="fa fa-sign-out">
            <p>SIGNOUT</p>
          </i>
        </Link>
      )}
      <div className="shop-header__item shop-header__cart">
        <i className="fa fa-shopping-cart">
          <p>CART</p>
          {getNumberOfItems() ? (
            <div className="cart-items">
              {props.cart
                .map((el: ICartBox) => el.quantity)
                .reduce((el: number, acc: number) => acc + el)}
            </div>
          ) : (
            <div className="cart-items"></div>
          )}
        </i>
        <MainShopButton
          cart={props.cart}
          fetchCart={props.fetchCart}
          emptyCart={props.emptyCart}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
}
