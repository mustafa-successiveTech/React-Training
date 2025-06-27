import Child from "@/app/components/Child";
import { useAuth } from "../contexts/AuthContext";

export default function Parent() {

  return (
      <>
          <authProvider>
              <h2>Parent Component</h2>
              <Child />
          </authProvider>
      </>
  )
}