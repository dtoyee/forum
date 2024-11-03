import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const register = () => {
    if(username.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
        if(password.length >= 6) {
            let userDetails = JSON.stringify({
                username: username,
                email: email,
                password: password,
            });
            axios.post("http://localhost:8000/auth/register-user", userDetails, config)
                .then(data => {
                    let res = data.data
                    if(!res.success && res.error) {
                        toast.error(res.errorMessage)
                    } else {
                        toast.success(res.successMessage)
                        setUsername("")
                        setEmail("")
                        setPassword("")
                    }
                });
        } else {
            toast.error("Password must contain 6 or more characters!")
        }
    } else {
        toast.error("All fields are required!")
    }
  };

  return (
    <>
      <div class="mb-3">
        <label for="username" class="form-label">
          Username
        </label>
        <input
          type="text"
          class="form-control"
          id="username"
          aria-describedby="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button type="submit" class="btn btn-success" onClick={register}>
        Register
      </button>
      <div id="emailHelp" class="form-text">
        <a href="/login">Already have an account?</a>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default RegisterForm;
