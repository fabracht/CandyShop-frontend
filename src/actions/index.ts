import { Dispatch } from "redux";

import { EActionTypes } from "./types";

export interface IToken {
  accessToken: string;
}

export interface IFetchTokenAction {
  type: EActionTypes.fetchToken;
  payload: IToken;
}

export interface ISetTokenAction {
  type: EActionTypes.setToken;
  payload: IToken;
}

export enum EProductType {
  taffy,
  bonbon,
  cake,
}

export interface IProduct {
  _id?: string;
  name: string;
  weight: number;
  description: string;
  discount?: number;
  price: number;
  type: string;
  quantity: number;
}

export interface ICartBox {
  product: IProduct;
  quantity: number;
}

export interface IFetchProductAction {
  type: EActionTypes.fetchProducts;
  payload: IProduct[];
}

export interface IFetchCartAction {
  type: EActionTypes.fetchCart;
  payload: ICartBox[];
}

export interface IEmptyCartAction {
  type: EActionTypes.emptyCart;
  payload: ICartBox[];
}

export interface IAddToCartAction {
  type: EActionTypes.addToCart;
  payload: ICartBox[];
}

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    try {
      const result = await fetch("http://10.0.0.8:3030/product", {
        method: "GET",
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin",
        headers,
      });
      const { data } = await result.json();
      dispatch<IFetchProductAction>({
        type: EActionTypes.fetchProducts,
        payload: data.products,
      });
    } catch (err) {
      dispatch<IFetchProductAction>({
        type: EActionTypes.fetchProducts,
        payload: [],
      });
    }
  };
};

export const fetchCart = () => {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const cart = localStorage.getItem("mendocCart")?.split(",");
  return async (dispatch: Dispatch) => {
    const result = await fetch("http://10.0.0.8:3030/product", {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      headers,
    });
    const { data } = await result.json();
    const { products } = data;
    let tempResult: ICartBox[] = [];
    if (cart) {
      const idList: string[] = cart.map((el: string) => {
        return el.split("-")[0];
      });
      const quantList: number[] = cart.map((el: string) => {
        return Number(el.split("-")[1]);
      });
      try {
        for (let i = 0; i < idList.length; ++i) {
          let found = products.find((el: IProduct) => el._id === idList[i]);
          if (found) {
            tempResult.push({
              product: found,
              quantity: quantList[i],
            });
          }
        }
        dispatch<IFetchCartAction>({
          type: EActionTypes.fetchCart,
          payload: tempResult,
        });
      } catch (err) {
        dispatch<IFetchProductAction>({
          type: EActionTypes.fetchProducts,
          payload: [],
        });
      }
    }
  };
};

export const emptyCart = () => {
  localStorage.clear();

  return async (dispatch: Dispatch) => {
    dispatch<IEmptyCartAction>({
      type: EActionTypes.emptyCart,
      payload: [],
    });
  };
};

export const fetchToken = () => {
  const tkGet: string | null = localStorage.getItem("tk");
  const tk: IToken = { accessToken: tkGet ? tkGet : "" };
  console.log(tk);
  return async (dispatch: Dispatch) => {
    dispatch<IFetchTokenAction>({
      type: EActionTypes.fetchToken,
      payload: tk,
    });
  };
};

export const setToken = (token: string) => {
  console.log(token);

  localStorage.setItem("tk", token);
  console.log(localStorage.getItem("tk"));
  const tk: IToken = { accessToken: token };
  return async (dispatch: Dispatch) => {
    dispatch<IFetchTokenAction>({
      type: EActionTypes.fetchToken,
      payload: tk,
    });
  };
};
