import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '1',
  email: 'F',
  password: 'Q',
};
export const RegisterForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name: <Field type="text" name="name" />
        </label>
        <label htmlFor="email">
          Email: <Field type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password: <Field type="text" name="password" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
