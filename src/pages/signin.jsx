import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/firebase";

function SignIn() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("signing in a user...");
    try {
      const result = await firebase.signinUserWithEmailAndPassword(
        email,
        password
      );
      console.log("successfull sign in", result);
    } catch (error) {
      console.error("error signing in:", error);
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <h1>Please Sign-in</h1>
        <div className="form-floating">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <br />
        <div className="form-floating">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button
          className="btn btn-primary 
         w-100 py-2
         "
          type="submit"
        >
          Sign in
        </button>
        <h1 className="mt-3 mb-3">OR</h1>

        <button
          onClick={firebase.signinWithGoogle}
          className="btn btn-primary 
         w-100 py-2 "
        >
          signin with Google
        </button>
      </form>
    </div>
  );
}

export default SignIn;
