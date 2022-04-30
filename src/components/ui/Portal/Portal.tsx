import React, { FunctionComponent, useContext } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from '../../../contexts/ModalContext';
import { Overlay } from './Style';

const Portal: FunctionComponent<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const modalNode = useContext(ModalContext).node;

  return modalNode
    ? createPortal(<Overlay>{children}</Overlay>, modalNode)
    : null;
};

export default Portal;
