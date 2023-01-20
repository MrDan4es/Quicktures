import * as yup from 'yup';
import { AxiosError } from 'axios';
import { TextField } from '@mui/material/';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';

import { Context } from 'index';

interface IUserRegisterError {
  username?: string[];
  password?: string[];
}

const validationSchema = yup.object({
  username: yup.string().required('Введите логин'),
  password: yup
    .string()
    .required('Введите пароль')
    .min(8, 'Минимальный пароль 8 символов'),
  passwordConfirmation: yup
    .string()
    .required('Введите пароль')
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
});

const RegisterForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { authStore } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      passwordConfirmation: ''
    },
    validationSchema: validationSchema,

    onSubmit: async values => {
      setSubmitting(true);
      await authStore.register(
        values.username,
        values.password,
        (e: AxiosError) => {
          if (e.response?.data) {
            const data = e.response?.data as IUserRegisterError;
            const usernameError = data.username ? data.username[0] : '';
            const passwordError = data.password ? data.password.join(' ') : '';
            formik.setErrors({
              username: usernameError,
              passwordConfirmation: passwordError
            });
          }
        }
      );
      setSubmitting(false);
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="row justify-content-center my-3"
    >
      <TextField
        variant="outlined"
        size="small"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        className="col-12 mb-3"
        id="username"
        type="text"
        placeholder="Username"
        label={'Username'}
        required={true}
      />
      <TextField
        variant="outlined"
        className="col-12 mb-3"
        size="small"
        id="password"
        type="password"
        required={true}
        value={formik.values.password}
        placeholder="Password"
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        label={'Password'}
      />
      <TextField
        variant="outlined"
        className="col-12 mb-3"
        size="small"
        id="passwordConfirmation"
        type="password"
        required={true}
        value={formik.values.passwordConfirmation}
        placeholder="Confirm Password"
        onChange={formik.handleChange}
        error={
          formik.touched.passwordConfirmation &&
          Boolean(formik.errors.passwordConfirmation)
        }
        helperText={
          formik.touched.passwordConfirmation &&
          formik.errors.passwordConfirmation
        }
        label={'Confirm Password'}
      />
      <input
        disabled={submitting}
        className="btn btn-primary my-auto"
        style={{ width: '100px' }}
        id="login-btn"
        type="submit"
        name="submit"
        value="Log In"
      />
    </form>
  );
};

export default RegisterForm;
