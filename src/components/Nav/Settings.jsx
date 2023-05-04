import { SettingsOutline } from "react-ionicons";
import SettingsModal from "./SettingsModal";
import { useState } from "react";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <SettingsModal {...{ open, setOpen }} />
      <div className="absolute top-4 right-4">
        <SettingsOutline onClick={toggleOpen} color="white" />
      </div>
    </div>
  );
}
