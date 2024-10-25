import React, { useState } from "react";
import "../styles.css";

const MonthlySalesReport = () => {
  // State to store product list and form input
  const [products, setProducts] = useState([]);
  const [formInput, setFormInput] = useState({
    productName: '',
    productId: ''
  });

  // Update form input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  // Submit form and add product
  const handleSubmit = (e) => {
    e.preventDefault();
    // Only add if fields are filled
    if (formInput.productName && formInput.productId) {
      setProducts([...products, formInput]);
      setFormInput({ productName: '', productId: '' }); // Reset form fields
    }
  };

  return (
    <div className="product-info">
      <h1>Controlled Component</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            value={formInput.productName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="productId"
            placeholder="Enter Product Id"
            value={formInput.productId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h2>Sales Report</h2>
      {products.map((product, index) => (
        <div key={index}>
          <h3>Product Name: {product.productName}, Product Id: {product.productId}</h3>
        </div>
      ))}
    </div>
  );
};

export default MonthlySalesReport;
