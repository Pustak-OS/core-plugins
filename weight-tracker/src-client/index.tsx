import React from "react";
import { Dumbbell } from "lucide-react";
import { Dashboard } from "./dashboard";

export function getUI() {
  return {
    sidebarLabel: "Weight",
    icon: () => <Dumbbell />,
    mainComponent: () => <div>Weight Tracker</div>,
  };
}

export function getSidebarDetails() {
  return {
    sidebarLabel: "Weight",
    icon: () => <Dumbbell />,
    link: "/weight-tracker",
  };
}

export function getDashboardUI() {
  return <Dashboard />;
}
