import { FunctionComponent } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { StyledButton } from '../ui/Button';
import { LabeledField } from '../ui/FormFields';

const SignUp: FunctionComponent<{
  register: UseFormRegister<FieldValues>;
  errors: any;
}> = ({ register, errors }) => {
  return (
    <>
      <LabeledField
        register={register}
        type="text"
        label="Full Name"
        nameField={"fullName"}
        errorMessage={errors.fullName && errors.fullName.message}
      />
      <LabeledField
        register={register}
        type="text"
        label="Phone Number"
        nameField={"phoneNumber"}
        errorMessage={errors.phoneNumber && errors.phoneNumber.message}
      />
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
      <LabeledField
        register={register}
        type="password"
        label="Confirm Password"
        nameField={"confirmPassword"}
        errorMessage={errors.confirmPassword && errors.confirmPassword.message}
      />
      <StyledButton type="submit">Sign Up</StyledButton>
    </>
  );
};

export default SignUp;
