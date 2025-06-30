"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, Alert, Box } from "@mui/material";

// ✅ Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
});

export default function FinalForm() {
  return (
    <div 
          style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center", 
                marginTop: "40px",    
            }}>  
      <h3>
        14. Create a new form and Implement form submission handling. Ensure that the form cannot be submitted if there are validation errors. Display a summary of errors if the user attempts to submit an invalid form.
      </h3>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Form submitted:", values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting, isValid, submitCount }) => (
            <Form>
              {/* ✅ Summary Error shown only if form submitted with errors */}
              {submitCount > 0 && !isValid && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  Please fix the errors before submitting.
                </Alert>
              )}

              {/* 🔹 Name Field */}
              <Field name="name">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    margin="normal"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                  />
                )}
              </Field>

              {/* 🔹 Email Field */}
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                )}
              </Field>

              {/* 🔹 Phone Field */}
              <Field name="phone">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    fullWidth
                    margin="normal"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
}
