import React, { useState } from "react";
import "./App.css";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/Header";
import { Paper, Switch, ThemeOptions } from "@mui/material";
import { styled } from "@mui/material/styles";
import Products from "./pages/Products";

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
        primary: {
          main: purple[500], // 라이트 모드, 다크 모드 모두에서 동일한 primary 색상을 유지
        },
        secondary: {
          main: green[500], // 라이트 모드, 다크 모드 모두에서 동일한 secondary 색상을 유지
        },
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
        />
      </Header>
      <Products />
    </ThemeProvider>
  );
}

export default App;
