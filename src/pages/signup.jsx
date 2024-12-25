import React, { useState } from "react";
import { useFirebase } from "../context/firebase";

function SignUp() {

  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('signin up a user...')
    try {
      const result = await firebase.signupUserWithEmailAndPassword(email, password);
      console.log("successfull", result);
    } catch (error) {
      console.error("error signing up:", error);
    }
  };



  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Your Account</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Full Name"
            required
          />
          <label htmlFor="fullName">Full Name</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="signupEmail"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="signupEmail">Email Address</label>
        </div>
        <br />
        <div className="form-floating">
          <input
           onChange={(e) => setPassword(e.target.value)}
           value={password}
            type="password"
            className="form-control"
            id="signupPassword"
            placeholder="Password"
            required
          />
          <label htmlFor="signupPassword">Password</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
        <br />
        <button className="btn btn-primary w-100 py-2" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
