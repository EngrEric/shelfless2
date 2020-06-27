import React, { useState } from "react";
import { Input, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";
import ListProducts from "../ListProducts/ListProducts";
import Navbar from "./NavBar";

const Home = ({ history }) => {
  const [query, setQuery] = useState("");
  const styles = useStyles();
  return window.screen.width > 960 ? (
    <div className={styles.notMobile}>
      <h1>Screens above 960 is not allowed, only mobile screens is allowed.</h1>
    </div>
  ) : (
    <div>
      <Navbar color="white" display="none" bgColor="#27AE60" />
      <div className={styles.headerImage} />
      <Typography
        style={{
          top: 110,
          textAlign: "center",
          margin: "2% 11%",
          color: "#fff",
          position: "absolute",
        }}
        variant="h6"
      >
        Crowd - sourced local needs
      </Typography>
      <div className={styles.headerButtons}>
        <Input
          placeholder="Enter Location"
          fullWidth={true}
          onChange={({ target }) => setQuery(target.value)}
        />

        <Button
          onClick={() => history.push("/recent", { searchTerm: query })}
          variant="contained"
        >
          Get Started
        </Button>
      </div>
      <ListProducts />
    </div>
  );
};

export default Home;
