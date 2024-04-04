import React, { useState, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/signup.css";
// import {
//   validateEmail,
//   validatePassword,
//   validatePhoneNumber,
//   // validateURL,
//   validateName,
//   validateDateOfBirth,
// } from "./Validation.tsx"; // Ensure this path matches your project structure

const Signup = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  // const [profilePictureUrl, setProfilePictureUrl] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [role, setRole] = useState<string>("USER");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    // if (
    //   !validateEmail(email) ||
    //   !validatePassword(password) ||
    //   !validatePhoneNumber(phoneNumber) ||
    //   // !validateURL(profilePictureUrl) ||
    //   !validateName(firstName) ||
    //   !validateName(lastName) ||
    //   !validateDateOfBirth(dateOfBirth) ||
    //   !gender ||
    //   !role
    // ) {
    //   setErrorMessage("Validation failed. Please correct the fields.");
    //   return;
    // }

    const userData = {
      username,
      email,
      password,
      firstName,
      lastName,
      // profilePictureUrl,
      dateOfBirth,
      gender,
      phoneNumber,
      role,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/registerUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Failed to create account. Please try again."
        );
      } else {
        const responseData = await response.json();
        console.log("Signup Successful", responseData);
        history.push("/login");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <form className="signup-form" onSubmit={handleSignup}>
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

        {/* <div className="form-group">
          <label htmlFor="profilePictureUrl">Profile Picture URL:</label>
          <input
            type="text"
            id="profilePictureUrl"
            value={profilePictureUrl}
            onChange={(e) => setProfilePictureUrl(e.target.value)}
          />
        </div> */}
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
        <button type="submit">Create Account</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
      <div className="additional-links">
        <Link to="/">Back to Login</Link>
      </div>
    </div>
  );
};

export default Signup;
