import React from 'react';

const Modal = ({ handleClose, show, color, children }) => {
  let showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose()}>
      <section className={"modal-main " + color} onClick={ e => e.stopPropagation()}>
        <i className="modal-close-button fas fa-times" onClick={handleClose()}></i>
        {children}

      </section>
    </div>
  );
};

export default Modal;
