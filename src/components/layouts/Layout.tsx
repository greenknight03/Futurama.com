import React from "react";
import { Navigation } from ".";

export const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};