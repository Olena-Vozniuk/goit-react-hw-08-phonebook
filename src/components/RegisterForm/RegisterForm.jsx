import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-mui';
import { register } from 'redux/auth/auth-operations';
import { RegisterSchema } from '../../utils/formValidation';

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };
        

    return (
        <div>
      <title>Register</title>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Box margin={1}>
            <Field
              type="text"
              name="name"
              component={TextField}
              label="Name"
              style={{width: 400}}
            />
          
          </Box>
          <Box margin={1}>
            <Field
              name="email"
              type="email"
              component={TextField}
              label="Email"
              style={{width: 400}}
            /> 
          </Box>
          <Box margin={1}>
            <Field
              type="password"
              name="password"
              component={TextField}
              label="Password"
              style={{width: 400}}
            />
          </Box>
           <Box margin={1}>
            <Button type="submit" sx={{margin: 2}}
              variant="contained"
              color="primary"
              style={{width: 400}}
              >
              Register</Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
};