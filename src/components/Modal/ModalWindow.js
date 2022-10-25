import React from "react";
import "./ModalWindow.css";
import PropTypes from "prop-types";

function ModalWindow({ open, close, content }) {
  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open && (
        <section>
          <header>
            <button type="button" className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{content}</main>
        </section>
      )}
    </div>
  );
}

ModalWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
};
export default ModalWindow;
