import { createRef } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config";

export const resolvedTailwindConfig = resolveConfig(tailwindConfig);

export const RouteEnum = {};

export const StoreRef = createRef();

export const StoreActionTypeEnum = {
  SET_THEME: "SET_THEME",
};

export const MediaQueryBreakpointEnum = {
  "2xl": `(min-width: ${resolvedTailwindConfig.theme.screens["2xl"]})`,
  lg: `(min-width: ${resolvedTailwindConfig.theme.screens.lg})`,
  md: `(min-width: ${resolvedTailwindConfig.theme.screens.md})`,
  sm: `(min-width: ${resolvedTailwindConfig.theme.screens.sm})`,
  xl: `(min-width: ${resolvedTailwindConfig.theme.screens.xl})`,
};
