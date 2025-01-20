import React from 'react';
import { FormInputProps } from '../../types/formInput.types';

const FormInput: React.FC<FormInputProps> = ({ id, label, type, value, onChange }) => (
  <div className="mb-3">
    <label htmlFor={id} className="form-label">
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="form-control"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default FormInput;
