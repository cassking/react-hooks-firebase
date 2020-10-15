import React, { useState }  from "react";
import useFormValidation from './useFormValidation';
import validateLogin from './validateLogin';


const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}
function Login(props) {
  // destructure our props that come in from useFormValidations
  const { handleSubmit, handleBlur,  handleChange, values, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateLogin);

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
        onBlur={handleBlur}
        value={values.email}
        name="email"
        type="email"
        className={errors.email && 'error-input'}
        placeholder="Your Email"
        autoComplete="off"
    />
    { errors.email && <p className="error-text">{errors.email}</p>}
    <input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        name="password"
        type="password"
        className={errors.password && 'error-input'}
        placeholder="Choose secure password"
    />
    { errors.email && <p className="error-text">{errors.password}</p>}

    <div className="flex mt3">
    <button type="submit" className="button pointer mr2" disabled={isSubmitting} style={{background: isSubmitting ? "grey" : "orange"}}>
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
