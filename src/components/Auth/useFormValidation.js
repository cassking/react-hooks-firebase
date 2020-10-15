import React, { useState, useEffect } from "react";

function useFormValidation(initialState, validate) {


// our custom hook for validation
const [values, setValues] = useState(initialState);
const [errors, setErrors] = useState({});
// to check if errors state has changed, updated use useEffects
const [isSubmitting, setSubmitting] = useState(false);

useEffect( ()=> {
  if (isSubmitting) {
    // convert the object to an arrau to check if there are any errors more easily
    // check length of array then
    const noErrors = Object.keys(errors).length === 0;
    if (noErrors) {
      alert("hello")
      console.log("AUTHENTICATED:...... ", values, "AUTHENTICATED:...... ")
      setSubmitting(false)
    } else {
      setSubmitting(false)
    }
  }

}, [errors]) // run callback only if errors chanages

  function handleChange(event) {
    event.persist();
    // use updater pattern when updating state based on previous states
    setValues( previousValues => ({
      ...previousValues, /// all previous values ' values '
      [event.target.name]: event.target.value
    }))
  }
  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors)
  }
  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values)
    // console.log( {values })
    setErrors(validationErrors)
    setSubmitting(true)
  }
  // this is how we send the handleChange event to Login.js
  return { handleSubmit, handleBlur,  handleChange, values, errors, isSubmitting }
}

export default useFormValidation;
// note on event.persist
// If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.