import React from 'react';

const Modal = ({ handleClose, show, color, children }) => {
  let showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} >
      <section className={"modal-main " + color} >
        <button className='modal-close-button' onClick={handleClose()}><i className="fas fa-times"></i></button>
        {children}

      </section>
    </div>
  );
};

export default Modal;
