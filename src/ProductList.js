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
            <div className="products-container">
                {products.map((product) => (
                    <div key={product.id} className="product-box">
                        <input
                            type="checkbox"
                            className=".delete-checkbox delete-checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => toggleProductSelection(product.id)}
                        />
                        <h2>{product.sku}</h2>
                        <p2>{product.name}</p2>
                        <p2>${product.price}</p2>
                        <p2>{product.attribute}</p2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
