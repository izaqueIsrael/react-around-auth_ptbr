import React, { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ className, editIsOpen, setEditIsOpen, editingProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCloseModal = () => setEditIsOpen(!editIsOpen);
  const handleModalOnKeyDown = e => e.key === 'Escape' && setEditIsOpen(false);
  const { register, formState: { errors, isValid }, watch } = useForm({ criteriaMode: 'all', mode: 'onChange' });
  const nameValue = watch('name');
  const aboutValue = watch('about');

  return (
    <PopupWithForm
      formType='edit'
      className={className}
      children={
        <>
          <div>
            <input
              className={!errors.name?.message ? 'form__input form__name' : 'form__input form__name form__input_error'}
              name='name'
              id='name'
              type='text'
              placeholder={currentUser.name}
              minLength={2}
              maxLength={40}
              required
              {...register('name', {
                required: 'Preencha esse campo',
                minLength: {
                  value: 2,
                  message: 'Esse campo deve ter de 2 a 40 caracteres. Esse campo possui 1 dígito',
                },
                maxLength: {
                  value: 40,
                  message: `Esse campo deve ter de 2 a 40 caracteres. Esse campo possui ${nameValue && nameValue.length} dígitos`,
                },
                validate: true
              })
              }
            />
            <label htmlFor='name' className='form__description form__description_error'>
              {errors.name?.message && errors.name?.message}
            </label>
          </div>
          <div>
            <input
              className={!errors.about?.message ? 'form__input form__name' : 'form__input form__name form__input_error'}
              name='about'
              id='about'
              type='text'
              minLength={2}
              maxLength={200}
              required
              placeholder={currentUser.about}
              {...register('about', {
                required: 'Preencha esse campo',
                minLength: {
                  value: 2,
                  message: 'Esse campo deve ter de 2 a 200 caracteres. Esse campo possui 1 dígito',
                },
                maxLength: {
                  value: 200,
                  message: `Esse campo deve ter de 2 a 40 caracteres. Esse campo possui ${aboutValue && aboutValue.length} dígitos`,
                },
                validate: true,
              })}
            />
            <label htmlFor='about' className='form__description form__description_error'>
              {errors.about?.message && errors.about?.message}
            </label>
          </div>
        </>
      }
      title={'Editar Perfil'}
      buttonText={'Salvar'}
      popupIsOpen={editIsOpen}
      handleCloseModal={handleCloseModal}
      handleModalOnKeyDown={handleModalOnKeyDown}
      setterInApi={editingProfile}
      errors={!isValid}
    />
  );
}

export default EditProfilePopup;
