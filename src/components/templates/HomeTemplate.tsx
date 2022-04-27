import { FunctionComponent, PropsWithChildren } from 'react';

import NavBar from '../NavBar/NavBar';
import { Container, Wrapper } from './style';

const HomeTemplate: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Wrapper>
      <NavBar />
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default HomeTemplate;
