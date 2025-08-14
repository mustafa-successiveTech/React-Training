"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const drawerWidth = 240;

interface DrawerLayoutProps {
  children: ReactNode;
}

export default function DrawerLayout({ children }: DrawerLayoutProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              top: "64px",
              height: "calc(100vh - 500px)",
              boxSizing: "border-box",
            },
          }}
        >
          <List>
            {[
              { label: "Dashboard", href: "/assignment4/question9" },
              {
                label: "Profile",
                href: "/assignment4/question9/dashboard/profile",
              },
              {
                label: "Settings",
                href: "/assignment4/question9/dashboard/settings",
              },
            ].map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={href}
                  sx={{ padding: 2 }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main style={{ flexGrow: 1, padding: 20 }}>{children}</main>
      </div>
    </div>
  );
}
