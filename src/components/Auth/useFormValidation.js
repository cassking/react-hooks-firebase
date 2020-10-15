import React, { useState } from "react";

function useFormValidation(initialState) {
// our custom hook for validation
const [values, setValues] = useState(initialState)
  function handleChange(event) {
    event.persist();
    // use updater pattern when updating state based on previous states
    setValues( previousValues => ({
      ...previousValues, /// all previous values ' values '
      [event.target.name]: event.target.value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log( {values })
  }
  // this is how we send the handleChange event to Login.js
  return { handleSubmit, handleChange, values }
}

export default useFormValidation;
// note on event.persist
// If you want to access the event properties in an asynchronous way, you should call event.persist() on the event, which will remove the synthetic event from the pool and allow references to the event to be retained by user code.