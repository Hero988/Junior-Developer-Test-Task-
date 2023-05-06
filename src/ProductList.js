import React from "react";

const ProductList = ({
    products,
    handleMassDelete,
    toggleProductSelection,
    selectedProducts,
}) => {

    return (
        <div className="App">
            <div className="products-container">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="product-box">
                            <input
                                type="checkbox"
                                className=".delete-checkbox"
                                checked={selectedProducts.includes(product.id)}
                                onChange={() => toggleProductSelection(product.id)}
                                style={{ display: products.length === 0 ? "none" : "inline" }}
                            />
                            <h2>{product.sku}</h2>
                            <p2>{product.name}</p2>
                            <p2>${product.price}</p2>
                            <p2>{product.attribute}</p2>
                        </div>
                    ))
                ) : (
                  <p className="delete-checkbox"></p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
