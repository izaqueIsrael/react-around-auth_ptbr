import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useForm } from 'react-hook-form';
import validator from 'validator';

function EditAvatarPopup({ className, avatarModalIsOpen, onEditAvatarClick, handleEditAvatarClick, handleCurrentUser, changingAvatar }) {
  const handleCloseModal = () => handleEditAvatarClick();
  const handleModalOnKeyDown = e => e.key === 'Escape' && onEditAvatarClick(false);
  const { register, formState: { errors, isValid } } = useForm({ criteriaMode: 'all', mode: 'onChange' });

  const urlValidate = (url) => {
    return validator.isURL(url);
  }

  return (
    <PopupWithForm
      className={className}
      children={
        <div>
          <input
            className='form__input form__avatar'
            name='formImage'
            id='avatar'
            type='text'
            placeholder='Link de imagem'
            required
            {...register('avatar', {
              required: 'Por favor, insira um endereço web',
              validate: (inputValue) => urlValidate(inputValue),
            })}
          />
          <label htmlFor='link' className='form__description form__description_error'>
            {errors.avatar?.message && errors.avatar?.message}
          </label>
        </div>
      }
      title={'Alterar a foto do perfil'}
      buttonText={'Salvar'}
      popupIsOpen={avatarModalIsOpen}
      handleCloseModal={handleCloseModal}
      handleModalOnKeyDown={handleModalOnKeyDown}
      handleCurrentUser={handleCurrentUser}
      setterInApi={changingAvatar}
      errors={!isValid}
    />
  );
}

export default EditAvatarPopup;