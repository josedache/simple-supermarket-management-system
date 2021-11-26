import { createTheme } from "@mui/material/styles";

export const lightTheme = customizeComponents({});
export const darkTheme = customizeComponents({ palette: { mode: "dark" } });

export default lightTheme;

/**
 *
 * @param {import("@mui/material").Theme} theme
 */
function customizeComponents(theme) {
  return createTheme({
    ...theme,
  });
}
