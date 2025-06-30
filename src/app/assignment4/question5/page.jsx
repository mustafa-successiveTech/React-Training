import DropDownExample from "@/app/components/dropDownExample";

export default function Question5() {
  return (
      <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center", 
              marginTop: "40px",    
            }}>
          <h3>
              5. Construct a select dropdown menu with multiple options. Control the selected option using state. When an option is selected, display a message showing the selected value.
          </h3>
          <DropDownExample />
      </div>
  )
}