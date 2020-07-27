import { createMuiTheme } from "@material-ui/core/styles";

const green = "#27ae60";
const lightGrey = "#f2f2f2";
const darkGrey = "#e0e0e0";
const lightRed = "#eb5757";
const orange = "#f2994a";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: green,
    },
    secondary: {
      main: lightGrey,
    },
    common: {
      green: green,
      lightGrey: lightGrey,
      darkGrey: darkGrey,
      red: lightRed,
      orange: orange,
    },
  },
});
