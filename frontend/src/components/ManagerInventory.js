import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import "./CSS/managerInventory.css";
import { useNavigate } from "react-router-dom";

const InventoryManager = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState(0);

    const [phones, setPhones] = useState([]);
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        fetchPhones();
        fetchAccessories();
    }, []);

    const fetchPhones = () => {
        fetch("http://localhost:5000/api/phones")
            .then((response) => response.json())
            .then((data) => {
                setPhones(data);
            });
    };

    const fetchAccessories = () => {
        fetch("http://localhost:5000/api/accessories")
            .then((response) => response.json())
            .then((data) => {
                setAccessories(data);
            });
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleEdit = (id) => {
        if (activeTab === 0) navigate(`/editPhone/${id}`);
        else navigate(`/editAccessory/${id}`);
    };

    const handleRemove = async (id) => {
        //deleting phone
        if (activeTab === 0) {
            try {
                const response = await fetch(
                    `http://localhost:5000/api/phones/${id}`,
                    {
                        method: "DELETE",
                    }
                );
                if (response.ok) {
                    alert("Phone removed successfully");
                    fetchPhones();
                } else {
                    const errorData = await response.json();
                    console.error(
                        "Failed to delete phone:",
                        response.status,
                        errorData
                    );
                }
            } catch (error) {
                console.error("Error deleting phone:", error);
            }
        } else {
            //deleting accessory
            try {
                const response = await fetch(
                    `http://localhost:5000/api/accessories/${id}`,
                    {
                        method: "DELETE",
                    }
                );
                if (response.ok) {
                    alert("Acccessory removed successfully");
                    fetchPhones();
                } else {
                    const errorData = await response.json();
                    console.error(
                        "Failed to delete accessory:",
                        response.status,
                        errorData
                    );
                }
            } catch (error) {
                console.error("Error deleting accessory:", error);
            }
        }
    };

    const handleClick = () => {
        if (activeTab === 0) {
            navigate("/addPhone");
        } else {
            navigate("/addAccessory");
        }
    };

    const filteredItems =
        activeTab === 0
            ? phones.filter((phone) =>
                  Object.values(phone).some((value) =>
                      value
                          .toString()
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  )
              )
            : accessories.filter((accessory) =>
                  Object.values(accessory).some((value) =>
                      value
                          .toString()
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                  )
              );
    return (
        <Box className="inventory-container">
            <Tabs
                value={activeTab}
                onChange={handleTabChange}
                centered
                className="inventory-tabs"
            >
                <Tab label="Phones" className="inventory-tab" />
                <Tab label="Accessories" className="inventory-tab" />
            </Tabs>

            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="search-field"
            />

            <button className="button add-button" onClick={handleClick}>
                Add {activeTab === 0 ? "Phone" : "Accessory"}
            </button>

            <table className="inventory-table">
                <thead className="inventory-table-head">
                    <tr>
                        {activeTab === 0 ? (
                            <>
                                <th className="inventory-table-cell">
                                    Phone ID
                                </th>
                                <th className="inventory-table-cell">Brand</th>
                                <th className="inventory-table-cell">Model</th>
                                <th className="inventory-table-cell">
                                    Storage
                                </th>
                                <th className="inventory-table-cell">Color</th>
                                <th className="inventory-table-cell">Price</th>
                                <th className="inventory-table-cell">
                                    Quantity
                                </th>
                            </>
                        ) : (
                            <>
                                <th className="inventory-table-cell">
                                    Accessory ID
                                </th>
                                <th className="inventory-table-cell">Brand</th>
                                <th className="inventory-table-cell">Name</th>
                                <th className="inventory-table-cell">
                                    Category
                                </th>
                                <th className="inventory-table-cell">Price</th>
                                <th className="inventory-table-cell">
                                    Quantity
                                </th>
                            </>
                        )}
                        <th className="inventory-table-cell">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item) => (
                        <tr key={item.id} className="inventory-table-row">
                            {activeTab === 0 ? (
                                <>
                                    <td>{item.customId}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                    <td>{item.memory.internal}</td>
                                    <td>{item.misc.colors}</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                </>
                            ) : (
                                <>
                                    <td>{item.customId}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                    <td>Headphones</td>
                                    <td>${item.price}</td>
                                    <td>{item.quantity}</td>
                                </>
                            )}
                            <td>
                                <button
                                    onClick={() => handleEdit(item.customId)}
                                    className="button-table edit-button"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleRemove(item.customId)}
                                    className="button-table remove-button"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Box>
    );
};

export default InventoryManager;
