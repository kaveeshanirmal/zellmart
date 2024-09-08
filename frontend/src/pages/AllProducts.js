import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/allProducts.css";
import { co } from "co";

const AllProducts = () => {
    const [phones, setPhones] = useState([]);
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((data) => {
                setPhones(data);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/api/accessories")
            .then((response) => response.json())
            .then((data) => {
                setAccessories(data);
            });
    }, []);

    const handleImageError = (e) => {
        e.target.src =
            "https://drive.google.com/thumbnail?id=176u7p4VrXMDFo6br0BVKFks-5RI_0NSO&sz=w1000";
    };

    const getChipClass = (availability) => {
        return availability ? "chip in-stock" : "chip sold-out";
    };

    const renderProductCards = (products, type, limit = 9) => {
        return products.slice(0, limit).map((product) => (
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
                        <span className={getChipClass(product.availability)}>
                            {product.availability ? "In stock" : "Sold Out"}
                        </span>
                        <Link
                            to={
                                type === "Phones"
                                    ? `/phones/${product.customId}`
                                    : `/accessories/${product.customId}`
                            }
                        >
                            <button className="view-button">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        ));
    };

    const renderViewMoreCard = (products, category) => {
        if (products.length <= 9) return null;

        const nextProduct = products[9];
        return (
            <Link
                to={category === "Phones" ? `/Phones` : `/Accessories`}
                className="view-more-card"
            >
                <div
                    className="blurred-bg"
                    style={{
                        backgroundImage: `url(https://drive.google.com/thumbnail?id=${nextProduct.imgURL}&sz=w1000)`,
                    }}
                ></div>
                <div className="view-more-content">
                    <h3>View More</h3>
                    <p>{`Explore all ${category}`}</p>
                </div>
            </Link>
        );
    };

    return (
        <div className="all-products-container">
            <section className="product-section">
                <h1 className="section-title">Featured Phones</h1>
                <div className="products-container">
                    {renderProductCards(phones, "Phones")}
                    {renderViewMoreCard(phones, "Phones")}
                </div>
            </section>

            <section className="product-section">
                <h1 className="section-title">Top Accessories</h1>
                <div className="products-container">
                    {renderProductCards(accessories, "Accessories")}
                    {renderViewMoreCard(accessories, "Accessories")}
                </div>
            </section>
        </div>
    );
};

export default AllProducts;
