import React, { useRef } from 'react';
import closeButton from '../images/close.png';

function PopupWithForm({ errors, formType, className, children, title, buttonText, popupIsOpen, handleModalOnKeyDown, handleCloseModal, setterInApi, currentCard }) {
  const form = useRef();
  const formSubmit = async (e) => {
    e.preventDefault();
    formType === 'delete' ? await setterInApi(currentCard) : await setterInApi(form.current.elements);
    handleCloseModal();
  }

  return (
    <>
      <div className={className} id='add__modal' tabIndex={0} onKeyDown={handleModalOnKeyDown}>
        <button className='button popup__close' id='add__close' onClick={handleCloseModal} >
          <img className='popup__icon' alt='close' src={closeButton} />
        </button>
        <form className='form modal' ref={form} onSubmit={formSubmit} >
          <h2 className='title modal__title'>{title}</h2>
          {children}
          <button type='submit' className={!errors ? 'button modal__button' : 'button modal__button modal__button_disabled'} disabled={errors}>
            <span className={!errors ? 'button__text' : 'button__text button__text_disabled'}>{buttonText}</span>
          </button>
        </form>
      </div>
      <div className={`${popupIsOpen ? 'fade' : 'fade fade_closed'}`} onClick={handleCloseModal} />
    </>
  );
}

export default PopupWithForm;
