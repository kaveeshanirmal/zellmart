import React, { useState } from 'react';
import '../components/CSS/ProfilePage.css' // Import custom styles

const ProfilePage = () => {
    const [customer, setCustomer] = useState({
        name: "Nimantha Madushan",
        email: "nimantha@gmail.com",
        phoneNumber: "07712334567",
        username: "nima",
        password: "12345",
        nic: "200324234567",
        deliveryAddress: "12/5,malwatta, rajagiriya"
    });

    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setShowPasswordFields(false);
    };

    const handlePasswordChange = () => {
        if (currentPassword !== customer.password) {
            setError("Current password is incorrect.");
        } else if (newPassword !== confirmPassword) {
            setError("New password and confirmation do not match.");
        } else {
            setCustomer({
                ...customer,
                password: newPassword,
            });
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setError("");
            setShowPasswordFields(false);
        }
    };

    return (
        <div className="customer-profile-page">
            <h1>ZellMart - Customer Profile</h1>
            <div className="profile-card">
                {isEditing ? (
                    <>
                        <label>
                            Name: 
                            <input 
                                type="text" 
                                name="name" 
                                value={customer.name} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            User Name: 
                            <input 
                                type="text" 
                                name="username" 
                                value={customer.username} 
                                onChange={handleChange} 
                            />
                        </label>
                        
                        
                        <button onClick={() => setShowPasswordFields(!showPasswordFields)}>
                            {showPasswordFields ? "Cancel Password Change" : "Change Password"}
                        </button>

                        
                        {showPasswordFields && (
                            <div className="password-section">
                                <label>
                                    Current Password: 
                                    <input 
                                        type="password" 
                                        value={currentPassword} 
                                        onChange={(e) => setCurrentPassword(e.target.value)} 
                                    />
                                </label>
                                <label>
                                    New Password: 
                                    <input 
                                        type="password" 
                                        value={newPassword} 
                                        onChange={(e) => setNewPassword(e.target.value)} 
                                    />
                                </label>
                                <label>
                                    Confirm New Password: 
                                    <input 
                                        type="password" 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                    />
                                </label>
                                {error && <p className="error">{error}</p>}
                            </div>
                        )}

                        <label>
                            Phone: 
                            <input 
                                type="tel" 
                                name="phoneNumber" 
                                value={customer.phoneNumber} 
                                onChange={handleChange} 
                            />
                        </label>

                        <label>
                            Delivery Address: 
                            <input 
                                type="text" 
                                name="deliveryAddress" 
                                value={customer.deliveryAddress} 
                                onChange={handleChange} 
                            />
                        </label>

                        <label>
                            NIC: 
                            <input 
                                type="text" 
                                name="nic" 
                                value={customer.nic} 
                                onChange={handleChange} 
                            />
                        </label>
                        <div className="button-container">
                            <button onClick={showPasswordFields ? handlePasswordChange : handleEdit}>
                                Save
                            </button>
                            <button onClick={handleEdit}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <p><strong>Name:</strong> {customer.name}</p>
                        <p><strong>Email:</strong> {customer.email}</p>
                        <p><strong>User name:</strong> {customer.username}</p>
                        <p><strong>Password:</strong> {customer.password}</p>
                        <p><strong>Phone:</strong> {customer.phoneNumber}</p>
                        <p><strong>Delivery Address:</strong> {customer.deliveryAddress}</p>
                        <p><strong>NIC:</strong> {customer.nic}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
