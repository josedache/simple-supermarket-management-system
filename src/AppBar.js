import {
  AppBar as MuiAppBar,
  Toolbar,
  ToggleButtonGroup,
  ToggleButton,
  Icon,
} from "@mui/material";
import { StoreActionTypeEnum } from "common/Constants";
import useStore from "hooks/useStore";

function AppBar(props) {
  const [theme, dispatch] = useStore((state) => state.theme);

  return (
    <>
      <MuiAppBar>
        <Toolbar>
          <div className="flex-1" />
          <ToggleButtonGroup
            value={theme}
            exclusive
            size="small"
            onChange={(_, value) =>
              dispatch({ type: StoreActionTypeEnum.SET_THEME, payload: value })
            }
          >
            {[
              { icon: "dark_mode", value: "dark" },
              { icon: "settings_brightness", value: "media" },
              { icon: "light_mode", value: "light" },
            ].map((item, index) => (
              <ToggleButton
                key={index}
                value={item.value}
                // classes={{ root: "text-white", selected: "text-white" }}
              >
                <Icon>{item.icon}</Icon>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Toolbar>
      </MuiAppBar>
      <Toolbar />
    </>
  );
}

export default AppBar;
