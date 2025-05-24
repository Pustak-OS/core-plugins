import React from "react";
import { Dumbbell } from "lucide-react";

export function getUI() {
  return {
    sidebarLabel: "Weight",
    icon: () => <Dumbbell />,
    mainComponent: () => <div>Weight Tracker</div>,
  };
}
