"use client";
import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

export default function MUIFormValidation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (form.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", form);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "40px",
      }}
    >
      <h3>
        10. Create a form with Material-UI text fields and implement form
        validation. Ensure that error messages are displayed when the user
        enters invalid data.
      </h3>
      <Box sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
        <Typography variant="h5" gutterBottom>
          Material-UI Form with Validation
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}
