import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
// Menampilkan daftar product yang diambil dari state yang ada di Reducer
const Products = ({ products }) => {
  return (
    // Products dalam bentuk array dipecah melalui Map agar dapat ditampilkan dalam daftar produk
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
