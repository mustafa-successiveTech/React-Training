import OldComponent from "@/app/components/oldComponent";

export default function Question3() {
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
        3. Create a component with controlled input field and a button. When the
        user enters a specific value into the input (e.g., "show"), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </h3>
      <OldComponent />
    </div>
  );
}
