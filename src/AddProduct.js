import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddProduct.module.css";

const AddProduct = ({ addProduct, products }) => {
    const [sku, setSku] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [productType, setProductType] = useState("DVD");
    const [size, setSize] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [length, setLength] = useState("");

    const navigate = useNavigate();

    const isUniqueSku = (inputSku) => {
        return !products.some((product) => product.sku === inputSku);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!sku || !name || !price) {
            alert("Please, submit required data");
            return;
        }

        if (!isValid()) {
            alert("Please, provide the data of indicated type");
            return;
        }

        if (!isUniqueSku(sku)) {
            alert("SKU already exists");
            return;
        }

        const newProductId = new Date().getTime(); // Using timestamp as an ID for simplicity
        addProduct({
            id: newProductId,
            sku,
            name,
            price,
            productType,
            attribute:
                productType === "DVD"
                    ? `Size: ${size}  MB`
                    : productType === "Book"
                        ? ` Weight: ${weight} Kg`
                        : ` Dimension: ${height}x${width}x${length}`,
        });

        navigate("/");
    };





    const handleCancel = () => {
        navigate("/");
    };

    const isValid = () => {
        switch (productType) {
            case "DVD":
                if (size <= 0) {
                    return false;
                }
                break;
            case "Book":
                if (weight <= 0) {
                    return false;
                }
                break;
            case "Furniture":
                if (height <= 0 || width <= 0 || length <= 0) {
                    return false;
                }
                break;
            default:
                return false;
        }

        return true;
    };

    const renderProductTypeMessage = () => {
        switch (productType) {
            case "DVD":
                return "Please provide the size of the DVD in MB.";
            case "Book":
                return "Please provide the weight of the book in Kg.";
            case "Furniture":
                return "Please provide dimensions in HxWxL format.";
            default:
                return null;
        }
    };

    const renderAttributeInput = () => {
        switch (productType) {
            case "DVD":
                return (
                    <div className={styles["input-wrapper"]}>
                        <label htmlFor="size">Size (MB):</label>
                        <input
                            type="number"
                            id="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />
                    </div>
                );
            case "Book":
                return (
                    <div className={styles["input-wrapper"]}>
                        <label htmlFor="weight">Weight (Kg):</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                );
            case "Furniture":
                return (
                    <>
                        <div className={styles["input-wrapper"]}>
                            <label htmlFor="height">Height:</label>
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className={styles["input-wrapper"]}>
                            <label htmlFor="width">Width:</label>
                            <input
                                type="number"
                                id="width"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                            />
                        </div>
                        <div className={styles["input-wrapper"]}>
                            <label htmlFor="length">Length:</label>
                            <input
                                type="number"
                                id="length"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles["add-product-container"]}>
            <div className={styles["add-product-header"]}>
                <h1>Add Product</h1>
                <div className={styles["buttons-container"]}>
                    <button type="submit" form="product_form">
                        Save
                    </button>
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
            <form id="product_form" onSubmit={handleSubmit}>
                <div className={styles["input-container"]}>
                    <label htmlFor="sku">SKU:</label>
                    <input
                        type="text"
                        id="sku"
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                    />
                </div>

                <div className={styles["input-container"]}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className={styles["input-container"]}>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className={styles["input-container"]}>
                    <label htmlFor="productType">Product Type:</label>
                    <select
                        id="productType"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                    >
                        <option value="DVD">DVD</option>
                        <option value="Book">Book</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    
                </div>
                <p>{renderProductTypeMessage()}</p>
                {renderAttributeInput()}
            </form>
        </div>
    );
};

export default AddProduct;