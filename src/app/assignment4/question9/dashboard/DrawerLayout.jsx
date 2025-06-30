"use client";
import { Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const drawerWidth = 240;

export default function DrawerLayout({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              top: '64px', 
              height: 'calc(100vh - 500px)', 
              boxSizing: 'border-box',
            },
          }}
        >
          <List>
            {[
              { label: 'Dashboard', href: '/assignment4/question9' },
              { label: 'Profile', href: '/assignment4/question9/dashboard/profile' },
              { label: 'Settings', href: '/assignment4/question9/dashboard/settings' },
            ].map(({ label, href }) => (
              <ListItem key={label} disablePadding>
                <Link href={href} passHref legacyBehavior>
                  <ListItemText primary={label} component="a" sx={{ padding: 2 }} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main style={{ flexGrow: 1, padding: 20 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
