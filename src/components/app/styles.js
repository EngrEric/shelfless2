import { makeStyles } from "@material-ui/core/styles";
import homeImage from "../../images/home.png";

const useStyles = makeStyles({
  headerImage: {
    height: window.screen.height * 0.5,
    marginBottom: 30,
    background: `url(${homeImage})no-repeat`,
    backgroundSize: "cover",
  },
  notMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    "& h1": {
      padding: "20% 5%",
      alignSelf: "center",

      fontSize: "2em",
      color: "gray",
    },
    // textAlign: "center",
    // position: "fixed",
    // alignContent: "center",
    // top: "20vh",
  },
  headerButtons: {
    position: "absolute",
    top: window.screen.height * 0.2,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 10%, #000 50%)",
    left: 0,
    right: 0,
    padding: "80px 10%",

    "& Button": {
      background: "rgb(111, 207, 151)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 255, 255, .2)",
      color: "white",
      height: 40,
      width: "100%",
    },
    "& Input": {
      backgroundColor: "white",
      height: 40,
      borderRadius: "5px",
      padding: "0 5px",
      marginBottom: 10,
    },
    "& h4": {
      marginBottom: 70,
      textAlign: "center",
      color: "white",
    },
  },
});

export default useStyles;
