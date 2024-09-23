import React from "react";
import "./dropdown.css"
const ProductsDropdown: React.FC = () => {
  return (
    <div className="products-section">
      <p className="Career" style={{ paddingLeft: "20px" }}>Products</p>
      <div style={{ display: "flex" }}>
        <div className="product-category">
          <p className="inProduct">Implica Capital</p>
          <div className="product-cards">
            <div className="product-card">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="product-card">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
        <div className="product-category" style={{ paddingLeft: "30px" }}>
          <p className="inProduct">Implica Ventures presents Knocksy</p>
          <div className="product-cards">
            <div className="product-card">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="product-card">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="product-card">
              <div className="imag"></div>
               <p className="imgText">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;