const LogIn = () => {

  return (
    <main>
      <p>Company Name</p>

      <h2>Welcome Back</h2>
      <p>Please enter your details</p>

      <input
        type="email"
        placeholder="Email address"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <p><a href="">Forgot Password</a></p>

      <button>Sign in</button>
      <button>Sign in with Google</button>

      <p>Don't have an account? <a href="">Sign up</a></p>
    </main>
  );
};

export default LogIn;