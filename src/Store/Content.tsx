import React, { Component } from "react";
import { IProduct, ICartBox } from "../../src/actions";

interface Props {
  productList: IProduct[];
  cart: ICartBox[];
  fetchCart: () => {};
  fetchProducts: () => {};
}

interface State {
  displayCard: number;
  products: IProduct[];
  cartObject: ICartBox[];
}

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayCard: 1,
      products: props.productList,
      cartObject: props.cart,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      products: nextProps.productList || [],
      cartObject: nextProps.cart || [],
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: Props, prevState: State) {}

  addToCart(ev: React.MouseEvent<HTMLButtonElement>): void {
    ev.preventDefault();

    let tempArray: ICartBox[] = this.state.cartObject;

    let findResult = tempArray.find(
      (el: ICartBox) => el.product._id === ev.currentTarget.id
    );
    let product = this.state.products.find(
      (el) => el._id === ev.currentTarget.id
    );
    if (findResult !== undefined) {
      findResult.quantity += 1;
    } else {
      if (product !== undefined) {
        tempArray.push({
          product,
          quantity: 1,
        });
      }
    }
    const tempBox = tempArray.map((cartbox) => {
      return `${cartbox.product._id}-${cartbox.quantity}`;
    });
    const stringBox: string = tempBox.toString();
    localStorage.setItem("mendocCart", stringBox);
    this.props.fetchCart();
  }

  cardGenerator(candyType: string): JSX.Element[] {
    let filteredArray = this.state.products.filter(
      (el: IProduct) => el.type === candyType
    );
    const cardArray = filteredArray.map((el: IProduct, i: number) => {
      return (
        <div key={el._id} className="product-card">
          <div className="photos-container">
            <a href="/" onClick={this.prevSlide} className="prev">
              &#10094;
            </a>
            {this.slideGenerator(3)}
            <a href="/" onClick={this.nextSlide} className="next">
              &#10095;
            </a>
          </div>
          <div className="candy-section-divider" />

          <div className="details-container">
            <h2 className="candy-name">{el.name}</h2>
            <h3 className="candy-price">${el.price}</h3>
            <p className="candy-description">
              The most traditional Brazilian recipe. A delicious chocolate dough
              filled with doce de leite, and covered in a mouth watering layer
              of milk chocolate.
            </p>
            <button
              id={el._id}
              name={el.name}
              onClick={this.addToCart}
              className="btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    });
    return cardArray;
  }

  slideGenerator(count: number): JSX.Element {
    let imgArray: JSX.Element[] = [];
    let hid: boolean;

    for (let i = 0; i < count; ++i) {
      hid = true;
      if (i === 1) {
        hid = false;
      }
      imgArray.push(
        <img
          key={i}
          className={`slide${i}`}
          src={`https://via.placeholder.com/150x${74 + i}`}
          alt=""
          width="100%"
          hidden={hid}
        />
      );
    }
    return <div className="mySlides">{imgArray}</div>;
  }

  nextSlide(event: any) {
    event.preventDefault();
    let photosContainer = event.target.previousElementSibling;
    let [...children] = photosContainer.children;
    let target = children[0];
    children.map((el: any, counter: number) => {
      if (!el.hidden) {
        target = el;
      }
      return target;
    });
    if (target.nextElementSibling !== null) {
      target.hidden = true;
      target.nextElementSibling.hidden = false;
    }
  }

  prevSlide(event: any) {
    event.preventDefault();
    let photosContainer = event.target.nextElementSibling;
    let [...children] = photosContainer.children;
    let target = children[0];
    children.map((el: any, counter: number) => {
      if (!el.hidden) {
        target = el;
      }
      return target;
    });
    if (target.previousElementSibling !== null) {
      target.previousElementSibling.hidden = false;
      target.hidden = true;
    }
  }

  render() {
    return (
      <div className="shop-content">
        <div className="candy-section">
          <div className="candy-section-type">
            <h2 className="heading-secondary">Small Cakes</h2>
            <div className="candy-section-cards">
              {this.cardGenerator("cake")}
            </div>
          </div>

          <div className="candy-section-type">
            <h2 className="heading-secondary">Bombons</h2>
            <div className="candy-section-cards">
              {this.cardGenerator("bonbon")}
            </div>
          </div>
          <div className="candy-section-type">
            <h2 className="heading-secondary">Coconut Taffy</h2>
            <div className="candy-section-cards">
              {this.cardGenerator("taffy")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
