import { FunctionComponent, PropsWithChildren } from 'react';

import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import { Container, Wrapper } from './style';

const HomeTemplate: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <Wrapper style={{ backgroundColor: "#DBEDF2" }}>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default HomeTemplate;
