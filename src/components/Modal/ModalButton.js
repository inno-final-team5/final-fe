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
    <>
      <Button type="button" onClick={openModal}>
        <BsFillBellFill className="ml-4 mb-3 text-xl text-mGray lg:text-mBlack lg:text-lg lg:mb-0" />
      </Button>
      <ModalWindow
        open={modalOpen}
        close={closeModal}
        content={content}
      ></ModalWindow>
    </>
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
