import React from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { getTextError } from "../../../helpers/validate-text/validaet-text";
import "./date-input.scss"


export const DateInput = ({
  control,
  name,
  placeholder,
  label,
  validate = {},
  errors,
  classNameLabel,
  classNameInput,
  maxDate = null,
  minDate = null,
}) => {
  
  return (
    <div>
      <div className={classNameLabel}>{label}</div>
      
        <Controller
          
          control={control}
          name={name}
          rules={validate}
          render={({ field }) => (
            <DatePicker
              placeholderText={placeholder}
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              maxDate={maxDate}
              minDate={minDate}
           className="ra-date-input" 
           clas
            />
          )}
        />
    
      <div style={{ color: "red" }}>
        {errors[name] && getTextError(errors[name]?.type)}
      </div>
    </div>
  );
};
