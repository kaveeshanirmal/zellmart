import React from "react";
import { Link } from "react-router-dom";
import "../components/CSS/allProducts.css";

const SearchResults = ({ filteredProducts }) => {
    const { phones, accessories } = filteredProducts;

    const handleImageError = (e) => {
        e.target.src =
            "https://drive.google.com/thumbnail?id=176u7p4VrXMDFo6br0BVKFks-5RI_0NSO&sz=w1000";
    };

    const getChipClass = (availability) => {
        return availability ? "chip in-stock" : "chip sold-out";
    };

    const renderProductCards = (products, type) => {
        return products.map((product) => (
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
                        <Link to={`/${type}/${product.customId}`}>
                            <button className="view-button">View</button>
                        </Link>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="search-results-container">
            <h2>Search Results</h2>

            {/* Display filtered phones */}
            {phones.length > 0 && (
                <>
                    <h3>Phones</h3>
                    <div className="products-container">
                        {renderProductCards(phones, "phones")}
                    </div>
                </>
            )}

            {/* Display filtered accessories */}
            {accessories.length > 0 && (
                <>
                    <h3>Accessories</h3>
                    <div className="products-container">
                        {renderProductCards(accessories, "accessories")}
                    </div>
                </>
            )}

            {/* If no products found */}
            {phones.length === 0 && accessories.length === 0 && (
                <p>No products found matching your search.</p>
            )}
        </div>
    );
};

export default SearchResults;
