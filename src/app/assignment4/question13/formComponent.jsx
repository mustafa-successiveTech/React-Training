"use client";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from './validationSchema';

export default function FormComponent() {
  return (
    <Formik
      initialValues={{ email: '', password: '', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Submitted Data:", values);
      }}
    >
      <Form style={{ display: 'flex', flexDirection: 'column', width: 300, gap: 10 }}>
        <label>Email:</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <label>Password:</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <label>Phone:</label>
        <Field name="phone" />
        <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
