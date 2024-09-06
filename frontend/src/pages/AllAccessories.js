import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
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

    const getChipColor = (availability) => {
        console.log(availability);
        if (availability === true) {
            return <Chip label="In stock" color="success" />;
        } else {
            return <Chip label="Sold Out" color="error" />;
        }
    };

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                backgroundColor: "#f5f5f5",
                padding: "20px",
            }}
        >
            {products.map((product) => (
                <Card
                    key={product.customId}
                    sx={{ maxWidth: 345, margin: 2, borderRadius: 5 }}
                >
                    {console.log(`https://drive.google.com/thumbnail?id=${product.imgURL}&sz=w1000`)}
                    <CardMedia
                        component="img"
                        height="340"
                        image={`https://drive.google.com/thumbnail?id=${product.imgURL}&sz=w1000`}
                        alt={product.model}
                        onError={handleImageError}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.brand} {product.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            Price: Rs.{product.price}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 3,
                            }}
                        >
                            {getChipColor(product.availability)}
                            <Link to={`/accessories/${product.customId}`}>
                                <button className="view-button">
                                    View Details
                                </button>
                            </Link>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default AllProducts;