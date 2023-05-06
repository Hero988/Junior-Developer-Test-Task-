import React from "react";
import { Link } from 'react-router-dom';

const ProductList = ({
    products,
    handleMassDelete,
    toggleProductSelection,
    selectedProducts,
}) => {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Products List</h1>
                <div className="buttons-container">
                    <Link to="/add-product">
                        <button>ADD</button>
                    </Link>
                    <button id="delete-product-btn" onClick={handleMassDelete}>
                        MASS DELETE
                    </button>
                </div>
            </header>
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-box">
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => toggleProductSelection(product.id)}
                        />
                        <h2>{product.sku}</h2>
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <p>{product.attribute}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
