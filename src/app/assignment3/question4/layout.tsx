"use client";

import { ReactNode } from "react";
import AuthLoginProvider from "@/app/context/AuthLoginContext";

interface Question4LayoutProps {
  children: ReactNode;
}

export default function Question4Layout({ children }: Question4LayoutProps) {
  return <AuthLoginProvider>{children}</AuthLoginProvider>;
}
