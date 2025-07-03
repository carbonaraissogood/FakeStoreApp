const SignUp = () => {

  return (
    <main>
      <p>Company Name</p>

      <h2>Create your account</h2>
      <p>Get Started for free</p>

      <input
        type="email"
        placeholder="Email address"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <p>Remember me</p>

      <p><a href="">Forgot Password</a></p>

      <button>Login</button>

      <p>or</p>

      <button>Continue with Google</button>

      <p>Don't have an account? <a href="">Sign up</a></p>
    </main>
  );
};

export default SignUp;