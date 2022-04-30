import { FC, PropsWithChildren } from 'react';

import logo from '../../resources/images/logo.png';
import Form from '../Form/Form';
import { Row, Wrapper } from './style';

export interface FormProps {
  title?: string;
  details?: string;
  path?: string;
  handleSubmit: any;
  onSubmit: (data: any) => void;
}

const AuthTemplate: FC<PropsWithChildren<FormProps>> = ({
  title,
  details,
  children,
  onSubmit,
  handleSubmit,
}) => {
  return (
    <Wrapper>
      <Row>
        <img src={logo} alt="Logo" />
      </Row>
      <Row>
        <Form
          onSubmit={onSubmit}
          title={title}
          handleSubmit={handleSubmit}
          details={details}
        >
          {children}
        </Form>
      </Row>
    </Wrapper>
  );
};

export default AuthTemplate;
