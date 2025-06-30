"use client";
import AuthLoginProvider from "@/app/context/AuthLoginContext";

export default function Question4Layout({ children }) {
  return (
    <AuthLoginProvider>
      {children}
    </AuthLoginProvider>
  );
}
