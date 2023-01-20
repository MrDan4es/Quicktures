import * as yup from 'yup';
import { TextField } from '@mui/material/';
import { useContext, useState } from 'react';
import { useFormik } from 'formik';

import { Context } from 'index';

const validationSchema = yup.object({
  username: yup.string().required('Введите логин'),
  password: yup.string().required('Введите пароль')
});

const LoginForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { authStore } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      setSubmitting(true);
      await authStore.login(values.username, values.password, () => {
        formik.setErrors({
          username: '',
          password: 'Enter a correct username and password'
        });
      });
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

export default LoginForm;
