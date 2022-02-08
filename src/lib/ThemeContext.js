import { cyan, orange } from "@ant-design/colors";
import React from "react";

const primary = cyan[8];
const secondary = orange.primary;

export const themes = {
  primary,
  secondary,
};

export default React.createContext(themes.primary);
