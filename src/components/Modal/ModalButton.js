import React, { useState } from "react";
import PropTypes from "prop-types";
import ModalWindow from "./ModalWindow";
import styled from "styled-components";
import { BsFillBellFill } from "react-icons/bs";

function ModalButton({ content }) {
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
        <BsFillBellFill className="ml-4 mb-3 text-xl text-mGray md:text-mBlack md:text-lg md:mb-0 md:mt-0.5" />
      </Button>
      <ModalWindow
        open={modalOpen}
        close={closeModal}
        content={content}
      ></ModalWindow>
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
