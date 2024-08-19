import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const handleImageError = (e) => {
        e.target.src =
            "https://drive.google.com/thumbnail?id=176u7p4VrXMDFo6br0BVKFks-5RI_0NSO&sz=w1000"; // Placeholder image URL
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
                    key={product._id}
                    sx={{ maxWidth: 345, margin: 2, borderRadius: 5 }}
                >
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
                            Price: ${product.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Availability: {product.availability}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default AllProducts;
