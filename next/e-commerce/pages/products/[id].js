import React from "react";
import styles from "../../styles/product.module.css";
function Product({ product }) {
  console.log(product);
  return (
    <div className={styles.product}>
      <div className={styles.left}>
        <img src={product.image} className={styles.productImage} alt="" />
      </div>
      <div className={styles.right}>
        <h2>{product.title}</h2>
        <h3 className={styles.price}>${product.price}</h3>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <button className={styles.cart}>Add to Cart</button>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  //   const id = context.params.id;
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const data = await response.json();

  return { props: { product: data } };
}

export default Product;
