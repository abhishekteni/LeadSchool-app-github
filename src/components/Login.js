import React from "react";
const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasaccount,
    sethasaccount,
    emailError,
    passError,
  } = props;

  return (
    <section className="login">
      <div className="loginContainer">
        <label> Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p className="errorMsg">{emailError}</p>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <p className="errorMsg">{passError}</p>
        <div className="btnContainer">
          {hasaccount ? (
            <>
              <button onClick={handleLogin}>Signin</button>
              <p>
                Don't have a account ?{" "}
                <span
                  onClick={() => {
                    sethasaccount(!hasaccount);
                  }}
                >
                  Signup
                </span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Signup</button>
              <p>
                have an account ?{" "}
                <span onClick={() => sethasaccount(!hasaccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default Login;
