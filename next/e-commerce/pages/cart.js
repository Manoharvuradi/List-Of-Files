import { removeItemFromCart } from "@/redux-cart/constants";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart.module.css";
import { setQuantityToIncrease } from "@/redux-cart/constants";
import { setQuantityToDecrease } from "@/redux-cart/constants";
function cart() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.addItemToCart.counter);
  const listOfItemsInCart = useSelector((state) => state.addItemToCart.items);
  // const quantity = useSelector((state) => state.addItemToCart.quantity);
  console.log(listOfItemsInCart);
  return (
    <div className={styles.listOfProduct}>
      <ul>
        {listOfItemsInCart?.map((product, index) => {
          return (
            <li key={index}>
              <h5 className="title">{product?.title}</h5>
              <img className="product-image" src={product?.image} alt="" />

              <p className="category">{product?.category}</p>
              <p className="price">${product?.price}</p>
              <p className="rating">
                {product?.rating?.rate}&nbsp;&nbsp;
                <span>{product?.rating?.count}</span>
              </p>
              <button
                disabled={counter <= 1}
                onClick={() =>
                  dispatch(setQuantityToDecrease(product.id, counter))
                }
              >
                -
              </button>
              {counter}
              <button
                onClick={() =>
                  dispatch(setQuantityToIncrease(product.id, counter))
                }
              >
                +
              </button>
              <button
                onClick={() => dispatch(removeItemFromCart(product.id))}
                className={styles.remove}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default cart;
