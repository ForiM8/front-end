import React from 'react';
import { getTextError } from '../../helpers/validate-text/validaet-text';

const RegisterInput = ({
    input_type,
    initialValue = null,
    register,
    name,
    errors = [],
    label,
    validate = {},
    classNameLabel,
    classNameInput
}) => {
    return (
        <div className='wrapper'>
            <input {...register(name, validate)}
                defaultValue={initialValue}
                type={input_type}
                className={classNameInput}
                required="required" />
            <label className={classNameLabel}>{label}</label>
            <div style={{ color: "red" }}>
                {errors[name] && getTextError(errors[name]?.type)}
            </div>
        </div>
    );
};
export default RegisterInput;