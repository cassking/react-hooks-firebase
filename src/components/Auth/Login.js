import React, { useState }  from "react";

function Login(props) {

  const [login, setLogin] = useState(true);

  return (
    <div>
    <h2 calssName="mv3">{login ? 'Login' : 'Create Account' }</h2>
    <form className="flex flex-column">
    {!login && <input
        type="text"
        placeholder="Your Name"
        autoComplete="off"
    /> }
    <input
        type="email"
        placeholder="Your Email"
        autoComplete="off"
    />
    <input
        type="password"
        placeholder="Choose secure password"
    />
    <div className="flex mt3">
    <button type="submit" className="button pointer mr2">
    submit
    </button>
    <button type="button" className="button pointer mr2" onClick={ () => setLogin(prevLogin => ! prevLogin)}>
   { login ? 'Need to create account?' : 'Already have an account?'}
    </button>
    </div>
    </form>
    </div>
  );
}

export default Login;
