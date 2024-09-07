import React, { useState } from 'react';
import '../components/CSS/ManagerProfilePage.css';

const ManagerProfilePage = () => {
    const [manager, setManager] = useState({
        name: "Jane Smith",
        email: "janesmith@zellmart.com",
        phoneNumber: "+1 987 654 3210",
        username: "Jane",
        password: "12345",
        nic: "200324234567",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setManager({
            ...manager,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setShowPasswordFields(false);
    };

    const handlePasswordChange = () => {
        if (currentPassword !== manager.password) {
            setError("Current password is incorrect.");
        } else if (newPassword !== confirmPassword) {
            setError("New password and confirmation do not match.");
        } else {
            setManager({
                ...manager,
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
                            User Name: 
                            <input 
                                type="text" 
                                name="username" 
                                value={manager.username} 
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
                                value={manager.phoneNumber} 
                                onChange={handleChange} 
                            />
                        </label>
                        <label>
                            NIC: 
                            <input 
                                type="text" 
                                name="nic" 
                                value={manager.nic} 
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
                        <p><strong>Name:</strong> {manager.name}</p>
                        <p><strong>Email:</strong> {manager.email}</p>
                        <p><strong>User name:</strong> {manager.username}</p>
                        <p><strong>Password:</strong> {manager.password}</p>
                        <p><strong>Phone:</strong> {manager.phoneNumber}</p>
                        <p><strong>NIC:</strong> {manager.nic}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ManagerProfilePage;

