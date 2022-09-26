import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from './ModalWindow';
import styled from 'styled-components';
import { BsFillBellFill } from "react-icons/bs";

function ModalButton({ buttonName, content }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={openModal}>
        <BsFillBellFill
          className="ml-4 text-yellow-500 hover:text-mCream"
          size={20}
        />
      </Button>
      <ModalWindow
        open={modalOpen}
        close={closeModal}
        content={content}
      >
      </ModalWindow>
    </div>
  );
}

const Button = styled.button`
  text-decoration: underline;
`;

ModalButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};

export default ModalButton;
