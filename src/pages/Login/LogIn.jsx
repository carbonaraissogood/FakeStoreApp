import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './LogIn.module.css'; // Link to external CSS

const LogIn = ({ users, setHasAccount }) => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isUserExisting = users.find((user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password
    );

    if (!isUserExisting) {
      alert('Oops! It seems your username/email or password is incorrect.');
    } else {
      setHasAccount(true);
      alert("Login successful!");
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.logo}>Logo</p>
        <img
          src="src\pages\Sign up\Sign Up.png"
          alt="login"
        />
      </div>

      <div className={styles.right}>
        <h2>Welcome Back!</h2>
        <p className={styles.subtext}>Please enter your details</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className={styles.flexRow}>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className={styles.footerText}>
          Don’t have an account?
          <a className={styles.link} href="/signup">Sign up</a>
        </p>

      </div>
    </div>
  );
};

export default LogIn;