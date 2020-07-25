import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </React.Fragment>
  );
}
