import React, { Fragment } from "react";

const TextInput = ({
  label,
  name,
  error,
  touched,
  handleChange,
  handleBlur,
  value
}) => (
  <Fragment>
    <div className="input-field">
      <div className="">
        {error && touched && <span className="">{error}</span>}
      </div>
      <input
        placeholder="Placeholder"
        id="first_name"
        type="text"
        class="validate"
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
        name={name}
      />
    </div>
  </Fragment>
);
export default TextInput;
