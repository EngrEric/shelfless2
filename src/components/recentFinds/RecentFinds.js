import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Navbar from "../app/NavBar";
import RecentCard from "./RecentCards";

const useStyles = makeStyles({
  title: {
    textAlign: "left",
    marginLeft: "calc(100% - 95%)",
    "& a": {
      color: "blue",
      fontSize: "15px",
      textDecoration: "none",
    },
  },
});

const data = [
  {
    productName: "Paper Towels",
    timeFound: "20mins",
    storeName: "Eric   Supermarket",
    location: "247 E 18th St",
    stockStatus: "FULL",
    stockStatusColor: "green",
  },
  {
    productName: "Fine Towels",
    timeFound: "10mins",
    storeName: "Miles   Supermarket",
    location: "247 E 18th St",
    stockStatus: "MEDIUM",
    stockStatusColor: "orange",
  },
  {
    productName: "Wood Towels",
    timeFound: "5mins",
    storeName: "Uche Store",
    location: "247 E 18th St",
    stockStatus: "LOW",
    stockStatusColor: "red",
  },
];

const RecentFinds = ({ history }) => {
  const classes = useStyles();

  const { state } = history.location;
  console.log(state);
  return (
    <div>
      <Navbar bgColor="#F2F2F2" minHeight={128} color="#27AE60" />
      <div style={{ margin: "150px auto" }}>
        <Typography variant="h5" className={classes.title}>
          Recent Finds <Link to="/"> (OctLand, CA)</Link>
        </Typography>
        <Grid spacing={3} container justify="center">
          {data.map((val, index) => (
            <Grid key={index} item sm={12} lg={4} md={4}>
              <RecentCard data={val} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default RecentFinds;
