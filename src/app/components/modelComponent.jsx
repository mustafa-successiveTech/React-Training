"use client";

import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

export default function ModalComponent() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Open Dialog
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>More Information</DialogTitle>

        <DialogContent>
          <Typography>This is a modal dialog using MUI.</Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
