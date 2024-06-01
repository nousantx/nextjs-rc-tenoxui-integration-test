"use client";
import React, { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";

const Styler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useLayoutEffect(() => {
    use({ property: [property] });
    tenoxui();
  }, []);

  return <>{children}</>;
};

export default Styler;
