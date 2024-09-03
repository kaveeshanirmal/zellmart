import React, { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
import "../components/CSS/productPage.css";
import { useParams } from "react-router";
import axios from "axios";


const ProductPage = () => {
    const { id } = useParams();
    const [phoneDetails, setPhoneDetails] = useState(null);
    const [likedReviews, setLikedReviews] = useState(new Set());
    const [customerDetails, setCustomerDetails] = useState({});
    const [reviews, setReviews] = useState([]);
    const [activeTab, setActiveTab] = useState('Tab1');

    useEffect(() => {
        if (id) {
            axios
                .get(`http://localhost:5000/api/phones/${id}`)
                .then(async (response) => {
                    setPhoneDetails(response.data);
                    console.log(phoneDetails)
    
                    // Fetch reviews for this phone
                    try {
                        const reviewsResponse = await axios.get(`http://localhost:5000/api/reviews/phone/${id}`);
                        console.log(reviewsResponse)
                        setReviews(reviewsResponse.data);
                        console.log(reviews)
                    } catch (error) {
                        console.error("Error fetching reviews:", error);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching phone details:", error);
                });
        }
    }, [id]);

    useEffect(() => {
        const fetchCustomerDetails = async () => {
            const customerIds = reviews.map(review => review.userId);
            try {
                const customerRequests = customerIds.map(userId => 
                    axios.get(`http://localhost:5000/api/customers/${userId}`)
                );
                const responses = await Promise.all(customerRequests);
                const customerData = responses.reduce((acc, response) => {
                    acc[response.data._id] = response.data;
                    return acc;
                }, {});
                setCustomerDetails(customerData);
            } catch (error) {
                console.error("Error fetching customer details:", error);
            }
        };

        if (reviews.length > 0) {
            fetchCustomerDetails();
        }
    }, [reviews]);

    if (!phoneDetails) {
        return <div>Loading...</div>;
    }

    const product = {
        image: phoneDetails.imgURL,
        title: phoneDetails.model,
        price: phoneDetails.price,
        originalPrice: phoneDetails.originalPrice,
        availability: phoneDetails.availability,
        brand: phoneDetails.brand,
        quantity: phoneDetails.quantity,
        description: phoneDetails.description,
        dimensions: phoneDetails.body.dimensions,
        weight: phoneDetails.body.weight,
        build: phoneDetails.body.build,
        sim: phoneDetails.body.sim,
        display: phoneDetails.display.type,
        resolution: phoneDetails.display.resolution,
        protection: phoneDetails.display.protection,
        platform: phoneDetails.platform.os,
        chipset: phoneDetails.platform.chipset,
        cpu: phoneDetails.platform.cpu,
        gpu: phoneDetails.platform.gpu,
        cardslot: phoneDetails.memory.cardSlot,
        memory: phoneDetails.memory.internal,
        mainCameraSpecs: phoneDetails.mainCamera.specs,
        mainCameraFeatures: phoneDetails.mainCamera.features,
        secSpecs: phoneDetails.selfieCamera.specs,
        secFeatures: phoneDetails.selfieCamera.features,
        wlan: phoneDetails.comms.wlan,
        bluetooth: phoneDetails.comms.bluetooth,
        positioning: phoneDetails.comms.positioning,
        nfc: phoneDetails.comms.nfc,
        sensors: phoneDetails.features.sensors,
        batteryType: phoneDetails.battery.type,
        batteryCharging: phoneDetails.battery.charging,
        colors: phoneDetails.misc.colors,
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    const handleLike = (id) => {
        // If this review is already liked, return early
        if (likedReviews.has(id)) {
            return;
        }
    
        const updatedReviews = reviews.map(review => {
            if (review._id === id) { // Use _id from MongoDB
                return { ...review, helpfulVotes: review.helpfulVotes + 1 };
            }
            return review;
        });
    
        setReviews(updatedReviews);
        setLikedReviews(new Set(likedReviews).add(id)); // Add this review to liked reviews
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString(); // You can use toLocaleDateString() or customize formatting as needed
    };

    return (
        <div>
            <div className="product-page">
                <div className="image-gallery">
                    <div className="main-image">
                        <img
                            src={`https://drive.google.com/thumbnail?id=${product.image}&sz=w1000`}
                            alt="Product"
                        />
                    </div>
                </div>

                <ProductDetails
                    title={product.title}
                    price={product.price}
                    availability={product.availability}
                    brand={product.brand}
                    platform={product.platform}
                    battery={product.batteryType}
                    batteryCharging={product.batteryCharging}
                    colors={product.colors}
                    nfc={product.nfc}
                />
            </div>
            <div className="product-details-container">
                
            <div className="product-tabs-header">
                <button
                    className={`product-tab-button ${activeTab === 'Tab1' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab1')}
                >
                    Product Details
                </button>
                <button
                    className={`product-tab-button ${activeTab === 'Tab2' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Tab2')}
                >
                    Reviews
                </button>
            </div>
                <br />
                {activeTab === 'Tab1' && <div>
                <p>{product.description}</p>
                <br />
                <br />
                <table className="phone-details">
                    <tbody>
                        <tr>
                            <td>Model</td>
                            <td>{product.title}</td>
                        </tr>
                        <tr>
                            <td>Display</td>
                            <td>{product.display}</td>
                        </tr>
                        <tr>
                            <td>Resolution</td>
                            <td>{product.resolution}</td>
                        </tr>
                        <tr>
                            <td>Operating System</td>
                            <td>{product.platform}</td>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>{product.memory}</td>
                        </tr>
                        <tr>
                            <td>Memory card slot</td>
                            <td>{product.cardslot}</td>
                        </tr>
                        <tr>
                            <td>Main Camera Specs</td>
                            <td>{product.mainCameraSpecs}</td>
                        </tr>
                        <tr>
                            <td>Main Camera Features</td>
                            <td>{product.mainCameraFeatures}</td>
                        </tr>
                        <tr>
                            <td>Selfie Camera Specs</td>
                            <td>{product.secSpecs}</td>
                        </tr>
                        <tr>
                            <td>Selfie Camera Features</td>
                            <td>{product.secFeatures}</td>
                        </tr>
                        <tr>
                            <td>CPU</td>
                            <td>{product.cpu}</td>
                        </tr>
                        <tr>
                            <td>GPU</td>
                            <td>{product.gpu}</td>
                        </tr>
                        <tr>
                            <td>Chipset</td>
                            <td>{product.chipset}</td>
                        </tr>
                        <tr>
                            <td>Battery type</td>
                            <td>{product.batteryType}</td>
                        </tr>
                        <tr>
                            <td>Charging</td>
                            <td>{product.batteryCharging}</td>
                        </tr>
                        <tr>
                            <td>Dimensions</td>
                            <td>{product.dimensions}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{product.weight}</td>
                        </tr>
                        <tr>
                            <td>Build</td>
                            <td>{product.build}</td>
                        </tr>
                        <tr>
                            <td>Sim</td>
                            <td>{product.sim}</td>
                        </tr>
                        <tr>
                            <td>Wlan</td>
                            <td>{product.wlan}</td>
                        </tr>
                        <tr>
                            <td>Bluetooth</td>
                            <td>{product.bluetooth}</td>
                        </tr>
                        <tr>
                            <td>Positioning</td>
                            <td>{product.positioning}</td>
                        </tr>
                        <tr>
                            <td>NFC</td>
                            <td>{product.nfc}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <td>Misc</td>
                            <td>{product.colors}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            }
            {activeTab === 'Tab2' && <div>
                <div className="review-list">
                {reviews.map(review => (
                    <div key={review.customId} className="review-item">
                        <div className="review-header">
                            <span className="reviewer">{customerDetails[review.userId]?.firstName} {customerDetails[review.userId]?.lastName}</span>
                            <span className="review-date">{formatDate(review.createdAt)}</span>
                        </div>
                        <div className="review-rating">
                            {'★'.repeat(review.rating)}
                        </div>
                        <p className="review-text">{review.comment}</p>
                        <p className="review-color">Color: {review.color}</p>
                        <div className="review-actions">
                        <button className="like-button" onClick={() =>  handleLike(review._id)}>
                        <i class="fa-solid fa-thumbs-up fa-lg"></i>
                        </button>
                        <span className="likes">{`${review.helpfulVotes}`} </span>
                        </div>
                    </div>
                ))}    
                </div>
                
            </div>
            }
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default ProductPage;
