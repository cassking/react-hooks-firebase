import React, { useState }  from "react";
import useFormValidation from './useFormValidation';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}
function Login(props) {
  // destructure our props
  const { handleSubmit, handleChange, values } = useFormValidation(INITIAL_STATE);

  const [login, setLogin] = useState(true);

  return (
    <div>
    <h2 className="mv3">{login ? 'Login' : 'Create Account' }</h2>
    <form onSubmit={handleSubmit} className="flex flex-column">
    {!login && (
      <input
        onChange={handleChange}
        value={values.name}
        name="name" // nane property allows us to target each one as it updates
        type="text"
        placeholder="Your Name"
        autoComplete="off"
    />
    )}
    <input
        onChange={handleChange}
        value={values.email}
        name="email"
        type="email"
        placeholder="Your Email"
        autoComplete="off"
    />
    <input
        onChange={handleChange}
        value={values.password}
        name="password"
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
