/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, FunctionComponent, useEffect, useRef, useState } from 'react';

import { PortalContainer } from '../components/ui/Portal/Style';

interface ModalContextProps {
  node: Element;
}

export const ModalContext = createContext<Partial<ModalContextProps>>({});

const ModalProvider: FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const modalRef = useRef(null);
  const [context, setContext] = useState<Element>();

  useEffect(() => {
    setContext(modalRef.current!);
  }, []);

  return (
    <PortalContainer>
      <ModalContext.Provider value={{ node: context }}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </PortalContainer>
  );
};

export default ModalProvider;
