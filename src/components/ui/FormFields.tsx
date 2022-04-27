import './style.css';

import { FunctionComponent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

import { Wrapper } from '../templates/style';

export const StyledInput = styled.input`
  margin: 5px 0 15px 0;
  padding: 20px 24px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e1e0e2;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.02));
  border-radius: 4px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #000000;
`;

export const LabeledField: FunctionComponent<{
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  nameField: string;
  errorMessage?: string;
}> = ({ label, type, nameField, register, errorMessage }) => {
  const { onChange, onBlur, name, ref } = register(nameField);
  return (
    <Wrapper>
      <label>
        <p className="label">{label}</p>
      </label>
      <StyledInput
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        ref={ref}
        placeholder={label}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </Wrapper>
  );
};
