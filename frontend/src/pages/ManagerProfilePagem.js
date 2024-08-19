import React, { useState } from 'react';
import '../components/CSS/ManagerProfilePage.css';

const ManagerProfilePage = () => {
    const [manager, setManager] = useState({
        name: "Jane Smith",
        email: "janesmith@zellmart.com",
        phoneNumber: "+1 987 654 3210",
        role: "Store Manager",
        storeLocation: "456 Elm St, Springfield, IL",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setManager({
            ...manager,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="manager-profile-page">
            <h1>ZellMart - Manager Profile</h1>
            <div className="profile-card">
                {isEditing ? (
                    <>
                        <label>
                            Name: 
                            <input 
                                type="text" 
                                name="name" 
                                value={manager.name} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            Email: 
                            <input 
                                type="email" 
                                name="email" 
                                value={manager.email} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            Phone: 
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                value={manager.phoneNumber} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            Role: 
                            <input 
                                type="text" 
                                name="role" 
                                value={manager.role} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            Store Location: 
                            <input 
                                type="text" 
                                name="storeLocation" 
                                value={manager.storeLocation} 
                                onChange={handleChange} 
                            />
                        </label>
                        <button onClick={handleEdit}>Save</button>
                    </>
                ) : (
                    <>
                        <p><strong>Name:</strong> {manager.name}</p>
                        <p><strong>Email:</strong> {manager.email}</p>
                        <p><strong>Phone:</strong> {manager.phoneNumber}</p>
                        <p><strong>Role:</strong> {manager.role}</p>
                        <p><strong>Store Location:</strong> {manager.storeLocation}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ManagerProfilePage;
