import React, { Fragment } from "react";

const TextArea = ({
  label,
  name,
  error,
  touched,
  handleChange,
  handleBlur,
  value
}) => (
    <Fragment>
      <div className="d-flex justify-content-between">
        <label htmlFor="name">{label}</label>
        {error && touched && <span className="h-75 align-self-center badge badge-danger">{error}</span>}
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="form-control form-control-lg"
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          name={name}
        ></textarea>
      </div>
    </Fragment>
  )
export default TextArea;