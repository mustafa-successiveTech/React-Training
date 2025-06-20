
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="parent">
        {children}
      </body>
    </html>
  );
}
