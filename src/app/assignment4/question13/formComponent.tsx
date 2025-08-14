"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import validationSchema from "./validationSchema";

interface FormValues {
  email: string;
  password: string;
  phone: string;
}

export default function FormComponent() {
  const initialValues: FormValues = {
    email: "",
    password: "",
    phone: "",
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log("Submitted Data:", values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          gap: 10,
        }}
      >
        <label>Email:</label>
        <Field name="email" type="email" />
        <ErrorMessage
          name="email"
          render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
        />

        <label>Password:</label>
        <Field name="password" type="password" />
        <ErrorMessage
          name="password"
          render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
        />

        <label>Phone:</label>
        <Field name="phone" type="text" />
        <ErrorMessage
          name="phone"
          render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
        />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
