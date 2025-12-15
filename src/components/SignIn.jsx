import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form submit refresh
    // Add login logic here (optional)
    navigate("/movies"); // navigate to EmptyMovie page
  };

  return (
    <div className="signInPage">
      <div className="group7">
        <h1 className="heading1">Sign in</h1>

        <form className="formGroup" onSubmit={handleLogin}>
          <input type="email" className="inputField" placeholder="Email" />
          <input type="password" className="inputField" placeholder="Password" />

          <div className="rememberMe">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" className="primaryButton">
            Login
          </button>
        </form>
      </div>

      <div className="vector">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave wave1">
          <path
            d="M0 100 
         C360 0, 720 200, 1080 100
         C1440 0, 1800 200, 2160 100
         V200 H0 Z"
            fill="rgba(229, 229, 229, 0.13)"
          />
        </svg>

        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave wave2">
          <path
            d="M0 100 
         C360 200, 720 0, 1080 100
         C1440 200, 1800 0, 2160 100
         V200 H0 Z"
            fill="rgba(32, 223, 127, 0.09)"
          />
        </svg>
      </div>
    </div>
  );
}

export default SignIn;
