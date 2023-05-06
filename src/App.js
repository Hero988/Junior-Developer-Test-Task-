import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList"

const productsData = [

];

function App() {
    const [products, setProducts] = useState(productsData);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleMassDelete = () => {
        const newProducts = products.filter(
            (product) => !selectedProducts.includes(product.id)
        );
        setProducts(newProducts);
        setSelectedProducts([]);
    };

    const toggleProductSelection = (id) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((productId) => productId !== id)
                : [...prevSelected, id]
        );
    };

    const addProduct = (newProduct) => {
        const newProductId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
        const product = { ...newProduct, id: newProductId };
        setProducts([...products, product]);
    };

    const navigate = useNavigate();

    const handleAddProduct = () => {
        navigate("/add-product");
    };

    const location = useLocation();
    const isAddProductPage = location.pathname === "/add-product";

    return (
        <div className="App">
            <header className={isAddProductPage ? '' : 'App-header'}>
                {!isAddProductPage && (
                    <>
                        <h1>Products List</h1>
                        <div className="buttons-container">
                            <button onClick={handleAddProduct}>ADD</button>
                            <button id="#delete-product-btn" onClick={handleMassDelete}>
                                MASS DELETE
                            </button>
                        </div>
                    </>
                )}
            </header>
            <Routes>
                <Route path="/add-product" element={<AddProduct addProduct={addProduct} products={products} />} />
                <Route path="/" element={<ProductList products={products} selectedProducts={selectedProducts} toggleProductSelection={toggleProductSelection} />} />
            </Routes>
        </div>
    );
}

export default App;
