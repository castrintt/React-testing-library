import { useState } from "react";
import validator from "validator";

function App() {
  const [error, setError] = useState("");

  const [signupInput, setSignUpInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSignUpInput({
      ...signupInput,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(signupInput.email)) {
      return setError("email address should have a valid value");
    } else if (signupInput.password.length < 5) {
      return setError(
        "the password you entered should contain at least 5 characters"
      );
    }
  };

  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={signupInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            data-testid={"password"}
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={signupInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm_password" className="form-label">
            Confirm Password
          </label>
          <input
            data-testid={"confirm"}
            type="password"
            id="confirm_password"
            name="confirmPassword"
            className="form-control"
            value={signupInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && (
          <p data-testid={"errorMessage"} className="text-danger">
            {error}
          </p>
        )}
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-primary"
          data-testid={"submitButton"}
        >
          Submit form
        </button>
      </form>
    </div>
  );
}

export default App;
