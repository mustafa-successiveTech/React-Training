import FormComponent from './formComponent';

export default function Question13Page() {
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        marginTop: "40px",    
      }}>
      <h2>13. install  Yup. Define a Yup validation schema for a more complex form. Include validation rules for fields like email, password, and phone number. Ensure that error messages are displayed for each validation rule.
          Implement real-time validation feedback using Material-UI's TextField component. Show validation errors as the user types, and clear the errors when the input is valid.(Use Formik as well)
      </h2>
      <FormComponent />
    </div>
  );
}
