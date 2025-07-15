import AuthProvider from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeContext";
import ChildComponent2 from "./ChildComponent2";

export default function ParentComponent2() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <ChildComponent2 />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
