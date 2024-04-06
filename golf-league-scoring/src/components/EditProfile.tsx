import React, { useState, FormEvent, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/signup.css";
import {
  validateEmail,
  validatePhoneNumber,
  validateName,
  validateDateOfBirth,
} from "./Validation.tsx";

// Mock function to fetch current user's profile, replace with actual implementation
const fetchCurrentUserProfile = async () => {
  return {
    username: "currentUsername",
    email: "user@example.com",
    password: "userPassword",
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    phoneNumber: "1234567890",
    role: "USER",
  };
};

// Mock function to update the profile, replace with your actual API call
const updateProfile = async (userData) => {
  console.log("Updating profile with:", userData);
  return { ok: true }; // Simulate API response
};

const EditProfile = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [role, setRole] = useState<string>("USER");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const loadUserProfile = async () => {
      const profile = await fetchCurrentUserProfile();
      setUsername(profile.username);
      setEmail(profile.email);
      setFirstName(profile.firstName);
      setLastName(profile.lastName);
      setDateOfBirth(profile.dateOfBirth);
      setGender(profile.gender);
      setPhoneNumber(profile.phoneNumber);
      setRole(profile.role);
    };

    loadUserProfile();
  }, []);

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (
      !validateEmail(email) ||
      !validatePhoneNumber(phoneNumber) ||
      !validateName(firstName) ||
      !validateName(lastName) ||
      !validateDateOfBirth(dateOfBirth) ||
      !gender ||
      !role
    ) {
      setErrorMessage("Validation failed. Please correct the fields.");
      return;
    }

    const userData = {
      username,
      email,
      firstName,
      lastName,
      dateOfBirth,
      gender,
      phoneNumber,
      role,
    };

    const response = await updateProfile(userData);
    if (!response.ok) {
      setErrorMessage("Failed to update profile. Please try again.");
    } else {
      console.log("Profile updated successfully");
      history.push("/dashboard"); // Redirect to the dashboard
    }
  };

  // The form structure is similar to the Signup component, adjusted for profile editing
  return (
    <div className="signup-container">
      <h1>Edit Profile</h1>
      <form className="signup-form" onSubmit={handleUpdateProfile}>
        {/* Form fields for editing the profile */}
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>
        </div>

        <button type="submit">Update Profile</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <div className="additional-links">
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default EditProfile;
