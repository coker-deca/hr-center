import { FunctionComponent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { StyledButton } from '../ui/Button';
import { LabeledField } from '../ui/FormFields';

const SignIn: FunctionComponent<{
  register: UseFormRegister<FieldValues>;
  errors: any;
}> = ({ register, errors }) => {
  return (
    <>
      <LabeledField
        register={register}
        type="email"
        label="Email"
        nameField={"email"}
        errorMessage={errors.email && errors.email.message}
      />
      <LabeledField
        register={register}
        type="password"
        label="Password"
        nameField={"password"}
        errorMessage={errors.password && errors.password.message}
      />
      <p className="left">
        Forgot Password? <strong>Reset it</strong>
      </p>
      <StyledButton type="submit">Login</StyledButton>
    </>
  );
};

export default SignIn;
