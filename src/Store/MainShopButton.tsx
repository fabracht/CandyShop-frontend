import React, { ChangeEvent, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ICartBox } from "../actions";

interface Props {
  cart: ICartBox[];
  emptyCart: () => {};
  fetchCart: () => {};
  isLoggedIn: boolean;
}

interface State {
  cartObject: ICartBox[];
  didCheckout: boolean;
  isChecked: boolean;
}

export function MainShopButton(props: Props) {
  const [cartObject, setCartObject] = useState<ICartBox[]>([]);
  const [, setDidCheckout] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false);

  useEffect(() => {
    setCartObject(props.cart);
    // return () => {
    //   cleanup
    // }
  }, [props]);

  const addQuantity = (ev: React.SyntheticEvent<HTMLElement>) => {
    ev.preventDefault();
    const id = ev.currentTarget.parentElement?.id;
    const [qty] = cartObject
      .filter((el, i) => el.product._id === id)
      .map((curr, ind) => curr.quantity);
    const stringBox = `${id}-${qty}`;
    const localCart = localStorage.getItem("mendocCart");
    const cartArr = localCart?.split(",");
    const updatedCart = cartArr?.map((el) =>
      el === stringBox ? `${id}-${qty + 1}` : el
    );
    const cartString = updatedCart?.toString();
    localStorage.setItem("mendocCart", cartString!);
    props.fetchCart();
  };

  const removeItemFromCart = (
    ev: React.SyntheticEvent<HTMLElement>,
    id?: string
  ) => {
    if (!id) {
      id = ev.currentTarget.id;
    }
    const localCart = localStorage.getItem("mendocCart");
    const cartArr = localCart?.split(",");
    const updatedCart = cartArr
      ?.map((el) => (el.startsWith(id!) ? undefined : el))
      .filter((el) => el);
    const cartString = updatedCart?.toString();
    localStorage.setItem("mendocCart", cartString!);
    props.fetchCart();
  };

  const removeQuantity = (ev: React.SyntheticEvent<HTMLElement>) => {
    ev.preventDefault();
    const id = ev.currentTarget.parentElement?.id;
    const [qty] = cartObject
      .filter((el, i) => el.product._id === id)
      .map((curr, ind) => curr.quantity);
    const localCart = localStorage.getItem("mendocCart");
    const cartArr = localCart?.split(",");
    if (qty > 1) {
      const stringBox = `${id}-${qty}`;
      const updatedCart = cartArr
        ?.map((el) => (el === stringBox ? `${id}-${qty - 1}` : el))
        .filter((el) => el);
      const cartString = updatedCart?.toString();
      localStorage.setItem("mendocCart", cartString!);
      props.fetchCart();
    } else {
      removeItemFromCart(ev, id!);
    }
  };

  const generateCartItems = (): JSX.Element[] => {
    if (cartObject.length > 0) {
      return props.cart.map((el: ICartBox, i) => {
        return (
          <div key={i} className="products-item">
            <img
              src="https://via.placeholder.com/70"
              alt=""
              className="product-image"
            />
            <div className="product-description">
              <span>{el.product.name}</span> <span>{el.product.weight}</span>
            </div>
            <div id={el.product._id} className="product-quantity">
              <input
                type="text"
                // defaultValue={el.quantity}
                value={el.quantity}
                className="product-quantity__input"
              />
              <i className="product-quantity__link plus" onClick={addQuantity}>
                &nbsp;
              </i>
              <i
                className="product-quantity__link minus"
                onClick={removeQuantity}
              >
                &nbsp;
              </i>
            </div>
            <p className="product-price">
              {(el.product.price * el.quantity).toFixed(2)}
            </p>
            <button
              id={el.product._id}
              className="product-remove"
              onClick={removeItemFromCart}
            >
              <i className="fa fa-times-circle"></i>
            </button>
          </div>
        );
      });
    } else {
      return [<h2 key={0}>Cart is Empty</h2>];
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    setIsChecked(target.checked);
  };

  const checkout = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    if (!props.isLoggedIn) {
      setRedirectToLogin(true);
      return undefined;
    }

    const nOfItems = props.cart
      .map((el) => el.quantity)
      .reduce((curr, prev) => curr + prev);
    if (props.cart.length > 0) {
      const totalCost = props.cart
        .map((el: ICartBox) => el.quantity)
        .reduce((acc: number, el: number) => acc + el, 0);
      try {
        const uidField = document.cookie
          .split(";")
          .map((el) => el.trim())
          .filter((el) => el.startsWith("uid"))[0];
        const uid = uidField.split("=")[1];
        const result = await fetch(`https://localhost:443/checkout/${uid}`, {
          method: "POST",
          mode: "cors",
          credentials: "include",
          cache: "no-cache",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            nOfItems: nOfItems,
            totalCost: totalCost,
            products: props.cart,
          }),
        });
        if (result.ok) {
          setDidCheckout(true);
          props.emptyCart();
        } else {
          setDidCheckout(false);
        }
      } catch (err) {
        setDidCheckout(false);
        console.log(err);
      }
    }
  };

  if (redirectToLogin) {
    return <Redirect to="/signup"></Redirect>;
  }
  return (
    <div className="checkout-menu">
      <input
        type="checkbox"
        className="checkout-menu__checkbox"
        checked={isChecked}
        onChange={handleInputChange}
        value={isChecked ? 1 : 0}
      />
      <div className="checkout-menu__card">
        <div className="card-title">
          <h2 className="card-title-main">Shopping Cart</h2>
          <p className="card-title-subtotal">
            {props.cart.length
              ? `Total: R$${props.cart
                  .map((el: ICartBox) => el.product.price * el.quantity)
                  .reduce((el: number, acc: number) => (acc += el))
                  .toFixed(2)}`
              : `R$0.00`}{" "}
          </p>
        </div>
        <div className="products">{generateCartItems()}</div>
        {/* eslint-disable-next-line */}
        <button
          type="submit"
          className="checkout-button"
          onClick={props.cart.length !== 0 ? checkout : undefined}
        >
          checkout
        </button>
      </div>
    </div>
  );
}

/* <div className="address">
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
</div> */
