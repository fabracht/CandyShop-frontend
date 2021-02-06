import React, { Component } from "react";
import { IProduct, ICartBox, EProductType } from "../../src/actions";

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
  productTypes: (EProductType | undefined)[];
}

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayCard: 1,
      products: props.productList,
      cartObject: props.cart,
      productTypes: Object.values(EProductType).map(el => el as EProductType).filter(el => typeof el === "string").sort()
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.filterChecked = this.filterChecked.bind(this);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      products: nextProps.productList || [],
      cartObject: nextProps.cart || [],
    };
  }

  componentDidMount() { }

  componentDidUpdate(prevProps: Props, prevState: State) { }
  filterChecked(ev: React.SyntheticEvent<HTMLInputElement>): void {
    const value = ev.currentTarget.value;
    console.log(value);
    let newProductTypesList = new Array(...this.state.productTypes);
    let slicedList = [];
    if (ev.currentTarget.checked) {
      if (!newProductTypesList.includes(value)) {
        slicedList = newProductTypesList.concat([value]).sort();
      }
    } else {
      if (newProductTypesList.includes(value)) {
        let indexOfValue = newProductTypesList.indexOf(value);
        slicedList = newProductTypesList.slice(0, indexOfValue).concat(newProductTypesList.slice(indexOfValue + 1)).sort();
      }
    }
    this.setState({
      productTypes: slicedList
    });
  }

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
      const colorChars = "7AD";
      imgArray.push(
        <img
          key={i}
          className={`slide${i}`}
          src={`https://via.placeholder.com/200/${colorChars[i]}`}
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
      <>
        <div className="shop-content__filter">
          <ul className="filter-list">
            <li className="filter-list-item">
              <input className="filter-list-item-input" defaultChecked={true} type="checkbox" id="bonbon" name="filter" value="bonbon" onChange={this.filterChecked} />
              <label className="filter-list-item-label" htmlFor="bonbon">Bonbons</label>
            </li>
            <li className="filter-list-item">
              <input className="filter-list-item-input" defaultChecked={true} type="checkbox" id="cake" name="filter" value="cake" onChange={this.filterChecked} />
              <label className="filter-list-item-label" htmlFor="cake">Cakes</label>
            </li>
            <li className="filter-list-item">
              <input className="filter-list-item-input" defaultChecked={true} type="checkbox" id="taffy" name="filter" value="taffy" onChange={this.filterChecked} />
              <label className="filter-list-item-label" htmlFor="taffy">Coconut Taffy</label>
            </li>
            <li className="filter-list-item">
              <div className="dropdown">
                <button className="dropbtn">Sort</button>
                <ul className="dropdown-content">
                  <li className="dropdown-content-item">Name</li>
                  <li className="dropdown-content-item">Price Ascending</li>
                  <li className="dropdown-content-item">Price Descending</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="shop-content">
          <div className="candy-section">
            <div className="candy-section-cards">
              {this.state.productTypes.map((el) =>
                el ? this.cardGenerator(el.toString()) : undefined
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
