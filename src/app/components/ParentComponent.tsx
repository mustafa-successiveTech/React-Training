import AuthProvider from "../context/AuthContext";
import ChildComponent from "./ChildComponent";

export default function ParentComponent() {
  return (
    <>
      <AuthProvider>
        <ChildComponent />
      </AuthProvider>
    </>
  );
}
