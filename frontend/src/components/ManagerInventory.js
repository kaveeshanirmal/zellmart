import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
} from "@mui/material";
import "./CSS/manager.css";

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [phones, setPhones] = useState([
    {
      id: "P1234",
      brand: "Apple",
      model: "iPhone 13",
      storage: "128GB",
      color: "Black",
      price: 799,
      quantity: 10,
    },
    {
      id: "P5678",
      brand: "Samsung",
      model: "Galaxy S21",
      storage: "256GB",
      color: "White",
      price: 999,
      quantity: 15,
    },
    {
      id: "P9101",
      brand: "OnePlus",
      model: "9 Pro",
      storage: "128GB",
      color: "Green",
      price: 899,
      quantity: 8,
    },
    {
      id: "P1121",
      brand: "Google",
      model: "Pixel 6",
      storage: "128GB",
      color: "Red",
      price: 699,
      quantity: 12,
    },
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEdit = (id) => {
    console.log(`Edit phone with id: ${id}`);
  };

  const handleRemove = (id) => {
    setPhones(phones.filter((phone) => phone.id !== id));
  };

  const handleAdd = () => {
    const newPhone = {
      id: "P9999",
      brand: "Xiaomi",
      model: "Mi 11",
      storage: "256GB",
      color: "Blue",
      price: 649,
      quantity: 20,
    };
    setPhones([...phones, newPhone]);
  };

  const filteredPhones = phones.filter(
    (phone) =>
      phone.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      phone.color.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "100px",
        margin: "auto",
        width: "80%",
      }}
    >
      <br />
      <br />
      <center>
        <h1>Phone Inventory</h1>
      </center>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginBottom: "20px",
          marginLeft: "230px",
          marginRight: "230px",
          width: "800px",
          padding: "8px",
        }}
      />

      <button variant="contained" onClick={handleAdd} className="manager-btn">
        Add Phone
      </button>

      <Table>
        <TableHead style={{ backgroundColor: "#D3D3D3" }}>
          <TableRow>
            <TableCell>Phone ID</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Storage</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredPhones.map((phone) => (
            <TableRow key={phone.id}>
              <TableCell>{phone.id}</TableCell>
              <TableCell>{phone.brand}</TableCell>
              <TableCell>{phone.model}</TableCell>
              <TableCell>{phone.storage}</TableCell>
              <TableCell>{phone.color}</TableCell>
              <TableCell>{phone.price}</TableCell>
              <TableCell>{phone.quantity}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEdit(phone.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleRemove(phone.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Inventory;
