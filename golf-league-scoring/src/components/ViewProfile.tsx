import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/ViewProfile.css";
// Mock function to fetch current user's profile (replace with actual implementation)
const fetchCurrentUserProfile = async () => {
    // Simulating an API call with a delay to mimic network latency
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Mock user profile data (replace with actual API call)
    return {
      username: "currentUsername",
      email: "user@example.com",
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "1990-01-01",
      gender: "Male",
      phoneNumber: "1234567890",
      role: "USER",
    };
  };
const ViewProfile = () => {
  const [profile, setProfile] = useState<any>(null); // Define the type of profile

  useEffect(() => {
    const loadProfile = async () => {
      const userProfile = await fetchCurrentUserProfile();
      setProfile(userProfile);
    };

    loadProfile();
  }, []);

  return (
    <div className="profile-container">
      <h1>View Profile</h1>
      {profile ? (
        <div className="profile-details">
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>First Name:</strong> {profile.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.lastName}
          </p>
          <p>
            <strong>Date of Birth:</strong> {profile.dateOfBirth}
          </p>
          <p>
            <strong>Gender:</strong> {profile.gender}
          </p>
          <p>
            <strong>Phone Number:</strong> {profile.phoneNumber}
          </p>
          <p>
            <strong>Role:</strong> {profile.role}
          </p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
      <div className="additional-links">
        <Link to="/dashboard">Back to Dashboard</Link>
        <Link to="/edit-profile">Edit Profile</Link>
      </div>
    </div>
  );
};

export default ViewProfile;

