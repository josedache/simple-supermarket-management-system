import { useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import useStore from "hooks/useStore";
import { lightTheme, darkTheme } from "common/ThemeConfig";
import "./App.css";
import AppProtected from "AppProtected";

function App() {
  const [{ theme, accessToken }] = useStore(({ theme, accessToken }) => ({
    theme,
    accessToken,
  }));
  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    const isDark = (theme === "media" && isSystemDark) || theme === "dark";

    const themeConfig = isDark ? darkTheme : lightTheme;
    [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error",
      "common",
      "text",
      "background",
      "action",
    ].forEach((palatteKey) => {
      Object.keys(themeConfig.palette[palatteKey]).forEach(
        (palatteKeyColor) => {
          document.documentElement.style.setProperty(
            `--color-${palatteKey}-${palatteKeyColor}`,
            themeConfig.palette[palatteKey][palatteKeyColor]
          );
        }
      );
    });
  }, [isSystemDark, theme]);

  return accessToken ? <AppProtected /> : null;
}

export default App;
