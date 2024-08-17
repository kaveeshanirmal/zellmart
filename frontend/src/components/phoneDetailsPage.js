import React, { Component } from "react";
import { useParams } from "react-router-dom";
import PhoneDetails from "./phoneDetails";

function PhoneDetailsPage() {
    const { id } = useParams();
    return <PhoneDetails id={id} />;
}

export default PhoneDetailsPage;
