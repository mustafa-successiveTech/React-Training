import ModalComponent from "@/app/components/modelComponent";

export default function Question11() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        marginTop: "40px",    
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
        11. Design a modal dialog component using Material-UI's Dialog component. Use it to display additional information or capture user input within your app.
      </h3>
      <ModalComponent />
    </div>
  );
}
