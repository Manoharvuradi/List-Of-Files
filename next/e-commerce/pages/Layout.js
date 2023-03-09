import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/layout.module.css";
function Layout({ children }) {
  const noOfItems = useSelector((state) => state.addItemToCart.noOfItems);
  console.log(noOfItems);
  return (
    <div className={styles.nav}>
      <h2 className="logo">Shopify</h2>
      <Link href="/cart">
        <button className={styles.cart}>cart🛒{noOfItems}</button>
      </Link>
    </div>
  );
  {
    children;
  }
}

export default Layout;
