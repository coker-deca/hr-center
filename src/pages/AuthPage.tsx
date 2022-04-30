import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import AuthTemplate from '../components/templates/AuthTemplate';
import { usePathname } from '../hooks/useLocation';
import { loginSchema, regSchema } from '../utils/schema';

const AuthPage = () => {
  const pathname = usePathname();
  const isReg = pathname === "/registration";
  const title = isReg ? "Sign Up HR Central" : "Sign in HR Central";
  const details = isReg
    ? "Please enter your Employee email address to create your account."
    : "Please enter your password and email address to login to you Employee profile.";
  const schema = isReg ? regSchema : loginSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (data: any) => {
      console.log(data);
      alert(`${isReg ? "Signed Up" : "Signed In"} Successfully`);
    };
    return (
      <div>
        <AuthTemplate
          handleSubmit={handleSubmit}
          title={title}
          details={details}
          onSubmit={onSubmit}
        >
          {isReg ? (
            <SignUp errors={errors} register={register} />
          ) : (
            <SignIn errors={errors} register={register} />
          )}
        </AuthTemplate>
      </div>
    );
};

export default AuthPage;
