import React from "react";
import { getTextError } from "../../../helpers/validate-text/validaet-text";


export const TextInput = ({
  type = 'text',
  initialValue = null,
  register,
  name,
  placeholder = "Введите значение",
  errors = [],
  label,
  validate = {},
  classNameLabel,
  classNameInput
}) => {
  return (
    <div className='wrapper'>

      <input
        className={classNameInput}
        type={type}
        placeholder={placeholder}
        {...register(name, validate)}
        defaultValue={initialValue}
        style={{ minWidth: 300, borderRadius: 4, minHeight: 30, padding: 4 }}
      />
      <label className={classNameLabel}>{label}</label>
      <div style={{ color: "red" }}>
        {errors[name] && getTextError(errors[name]?.type)}
      </div>
    </div>
  );
};
