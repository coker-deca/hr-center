import { FunctionComponent, PropsWithChildren } from 'react';

import { FormProps } from '../templates/AuthTemplate';
import { StyledForm } from './style';

const Form: FunctionComponent<PropsWithChildren<FormProps>> = ({
  title,
  details,
  path,
  handleSubmit,
  children,
}) => {
  const onSubmit = (data: any) => {
    console.log(data);
    alert(`${path === "signup" ? "Signed Up" : "Signed In"} Successfully`);
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>
        <p className="details">{details}</p>
        {children}
      </StyledForm>
    </div>
  );
};

export default Form;
