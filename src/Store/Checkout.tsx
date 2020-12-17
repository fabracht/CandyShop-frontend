import React from "react";

export function Checkout() {
  // eslint-disable-next-line
  const cardGenerator = (cardNumber: number): JSX.Element[] | undefined => {
    const div: JSX.Element = (
      <div className="checkout-container-card">
        <h1 className="checkout-container-card-title">Checkout</h1>
        <div className="checkout-container-card-description">
          <span>Please choose between pick-up and delivery</span>
        </div>
        <div className="checkout-container-card-content">
          <label htmlFor="pickup">Pickup</label>
          <input type="radio" name="pickup" id="pickup" defaultChecked={true} />
          <label htmlFor="delivery">Delivery</label>
          <input type="radio" name="pickup" id="delivery" />
        </div>
      </div>
    );
    let result: JSX.Element[] = [];
    for (let i = 0; i < cardNumber; ++i) {
      result.push(div);
    }
    return result;
  };

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-container-card">
          <h1 className="checkout-container-card-title">
            Shipping Information
          </h1>
          <div className="checkout-container-card-description">
            <span>Tell us where you want your delivery</span>
          </div>
          <div className="checkout-container-card-content">
            <label htmlFor="pickup">Pickup</label>
            <input
              type="radio"
              name="pickup"
              id="pickup"
              defaultChecked={true}
            />
            <label htmlFor="delivery">Delivery</label>
            <input type="radio" name="pickup" id="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
}
