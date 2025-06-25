import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="parent">
      
          <div>
              <div>
              <Navbar/>
            </div>
            <div>
                {children}
            </div>
          </div>
                     
      </body>
    </html>
  );
}
