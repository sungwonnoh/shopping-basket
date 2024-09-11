import React, { useState } from "react";
import "./App.css";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import { Paper, Switch, ThemeOptions } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = styled(Paper)(({ theme }) => ({
  height: "100vh",
}));

function App() {
  const [isDark, setIsDark] = useState(false);
  const [themeOption, setThemeOption] = useState<ThemeOptions>({
    palette: {
      mode: "light",
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
    setThemeOption((prev) => ({
      ...prev,
      palette: {
        mode: event.target.checked ? "dark" : "light",
      },
    }));
  };
  const theme = createTheme(themeOption);

  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Switch
          checked={isDark}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        ></Switch>
      </Header>
      <Paper component={useStyles} />
    </ThemeProvider>
  );
}

export default App;
