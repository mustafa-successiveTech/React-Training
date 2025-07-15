import VariousInputField from "@/app/components/variousInputField";

export default function Question2() {
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
        2. Build a form that includes various input fields like text inputs,
        checkboxes, and radio buttons. Ensure that each input is a controlled
        component. When the user submits the form, log the form data to the
        console.
      </h3>
      <VariousInputField />
    </div>
  );
}
