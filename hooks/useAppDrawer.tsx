import { useState } from "react";

export default function useAppDrawer() {
  const [open, setOpen] = useState(false);

  function handleOpenState() {
    setOpen(!open);
  }

  return { open, handleOpenState };
}
