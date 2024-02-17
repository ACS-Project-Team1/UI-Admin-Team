import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

interface SignupProps {
  onSignup: (username: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
  
    if (
      username &&
      password &&
      confirmPassword &&
      email &&
      fullName &&
      phoneNumber &&
      organizationName &&
      position &&
      address &&
      dateOfBirth &&
      password === confirmPassword &&
      position.toLowerCase() === 'admin'
    ) {
      setErrorMessage("");
  
      // Create an object with the user data
      const userData = {
        username,
        password,
        email,
        fullName,
        phoneNumber,
        organizationName,
        position,
        address,
        dateOfBirth,
      };
  
      try {
        // Make a POST request to your API endpoint
        const response = await fetch("https://your-api-endpoint.com/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          // API call successful, handle any additional logic if needed
          onSignup(username); // Pass the username to the parent component
        } else {
          // Handle errors from the API
          setErrorMessage("Error creating account. Please try again.");
        }
      } catch (error) {
        console.error("Error during signup:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } else {
      setErrorMessage("Please fill in all fields, ensure passwords match, and provide a valid admin role.");
    }
  };
  
  return (
    <div className="signup-container">
      <h1>Create Account</h1>
      <div className="signup-form">
        <div className="label-input-group">
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="label-input-group">
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="label-input-group">
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
            />
          </div>

          <div>
            {" "}
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="label-input-group">
          <div>
            <label htmlFor="organizationName">
              Golf Club/Organization Name:
            </label>
            <input
              type="text"
              id="organizationName"
              value={organizationName}
              onChange={(e) => setOrganizationName(e.target.value)}
              placeholder="Golf Club/Organization Name"
            />
          </div>

          <div>
            <label htmlFor="position">Position/Role:</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position/Role"
            />
          </div>
        </div>
        <div className="label-input-group">
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Date of Birth"
            />
          </div>
        </div>

        <button onClick={handleSignup}>Create Account</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="additional-links">
          <Link to="/">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
