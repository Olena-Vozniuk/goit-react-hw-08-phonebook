import * as Yup from 'yup';

// const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
// const nameRegError = "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer";
const phoneRegExp = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const phoneRegError = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";

export const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .trim()
     .min(2, 'Name is too Short')
     .max(12, 'Name is too Long')
        .required('Required'),
    number: Yup.string()
        .matches(phoneRegExp, phoneRegError)
        .required('Required'),
});
 
export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: 'Email is not valid.',
    })
    .required('Please, enter email'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Please, enter password'),
});

export const RegisterSchema = Yup.object().shape({
      name: Yup.string()
        .trim()
     .min(2, 'Name is too Short')
     .max(12, 'Name is too Long')
    .required(),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, {
      message: 'Email is not valid.',
    })
    .required(),
  password: Yup.string()
    .min(6)
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .required(),
});
