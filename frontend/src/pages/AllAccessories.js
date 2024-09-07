import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/allProducts.css";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/accessories")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const handleImageError = (e) => {
        e.target.src =
            "https://drive.google.com/thumbnail?id=176u7p4VrXMDFo6br0BVKFks-5RI_0NSO&sz=w1000"; // Placeholder image URL
    };

    const getChipClass = (availability) => {
        return availability ? "chip in-stock" : "chip sold-out";
    };

    return (
        <div className="products-container">
            {products.map((product) => (
                <div key={product.customId} className="product-card">
                    <img
                        src={`https://drive.google.com/thumbnail?id=${product.imgURL}&sz=w1000`}
                        alt={product.model}
                        onError={handleImageError}
                    />
                    <div className="product-info">
                        <h3>{`${product.brand} ${product.model}`}</h3>
                        <p className="price">Rs.{product.price}</p>
                        <p className="description">{product.description}</p>
                        <div className="card-footer">
                            <span
                                className={getChipClass(product.availability)}
                            >
                                {product.availability ? "In stock" : "Sold Out"}
                            </span>
                            <Link to={`/accessories/${product.customId}`}>
                                <button className="view-button">View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;
