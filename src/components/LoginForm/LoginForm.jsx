import { useState } from 'react';
import { logIn } from "redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-mui';
import { Box, Button } from '@mui/material';
import { LogInSchema } from '../../utils/formValidation';
import { Wrapper } from './LoginForm.styled';



export const LogInForm = () => {
    const dispatch = useDispatch();
    const [authErr, setAuthErr] = useState(null);
   

    const handleSubmit = (values, actions) => {
        dispatch(logIn(values)).unwrap().catch(setAuthErr);
        console.log(authErr);
        actions.resetForm();
    };

    return (
        <Wrapper >
            <title>Login</title>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        <Box margin={1}>
            <Field type="text" name="email"  component={TextField}
              label="Email"
              style={{width: 400}} />
          </Box>

         <Box margin={1}>
            <Field type="password" name="password"  component={TextField}
              label="Password"
              style={{width: 400}} />
          </Box>
          <Box margin={1}>
          <Button type="submit" sx={{margin: 2}}
              variant="contained"
              color="primary"
              style={{ width: 400 }}>LogIn</Button>
                    </Box>                   
        </Form>
            </Formik>
            {authErr && <p style={{color:'red'}}>You entered wrong email or password</p>}
        </Wrapper>
    )
}