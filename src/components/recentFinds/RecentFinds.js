import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Navbar from "../app/NavBar";
import RecentCard from "./RecentCards";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    marginLeft: "calc(100% - 95%)",
    "& a": {
      color: "blue",
      fontSize: "15px",
      textDecoration: "none",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const products = [
  {
    productName: "Paper Towels",
    timeFound: "20mins",
    storeName: "Eric   Supermarket",
    location: "247 E 18th St",
    stockStatus: "FULL",
    stockStatusColor: "green",
    images: [img1, img2, img3, img4],
    id: "1",
  },
  {
    productName: "Fine Towels",
    timeFound: "10mins",
    storeName: "Miles   Supermarket",
    location: "247 E 18th St",
    stockStatus: "MEDIUM",
    stockStatusColor: "orange",
    images: [img1, img2, img3, img4],
    id: "2",
  },
  {
    productName: "Wood Towels",
    timeFound: "5mins",
    storeName: "Uche Store",
    location: "247 E 18th St",
    stockStatus: "LOW",
    stockStatusColor: "red",
    images: [img1, img2, img3, img4],
    id: "3",
  },
];

const RecentFinds = ({ history }, props) => {
  const [foundProducts, setNewProducts] = useState([...products]);
  const [isSearching, setSearching] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const classes = useStyles(props);

  // TODO: use the search term from state to make a recent search.
  const { state } = history.location;

  const handleChange = ({ target }) => {
    if (target.value.length > 0) {
      setSearching(true);
    } else {
      setSearching(false);
    }
    const itemsFound = products.filter((elem) => {
      const currentSearchTerm = RegExp(target.value.toLowerCase(), "g");
      const currentProductName = elem.productName.toLowerCase();
      return currentSearchTerm.test(currentProductName);
    });

    setNewProducts(itemsFound);
  };

  useEffect(() => {
    if (isSearching && foundProducts.length < 1) {
      setLoading(true);
      console.log("yes");
    } else {
      setLoading(false);
      console.log("no");
    }
    if (isLoading) {
      setTimeout(() => {
        if (isLoading && foundProducts.length < 1) {
          setLoading(false);
        }
      }, 1000);
    }
  }, [isSearching, foundProducts]);

  return (
    <div>
      <Navbar
        handleChange={handleChange}
        bgColor="#F2F2F2"
        minHeight={128}
        color="#27AE60"
      />
      <div style={{ margin: "150px auto" }}>
        <Typography variant="h5" className={classes.title}>
          Recent Finds <Link to="/"> (OctLand, CA)</Link>
        </Typography>
        <Grid spacing={2} container justify={"space-around"}>
          {isLoading ? (
            <h1>Loading</h1>
          ) : foundProducts.length < 1 ? (
            <h1>No item found</h1>
          ) : (
            foundProducts.map((val, index) => (
              <Grid key={index} item xs={"auto"} lg={"auto"} md={"auto"}>
                <RecentCard
                  animate
                  title={
                    <Link
                      to={{
                        pathname: `/details/${val.id}`,
                        state: { data: val },
                      }}
                      className={classes.link}
                    >
                      {val.productName}
                    </Link>
                  }
                  data={val}
                />
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
};

export default RecentFinds;
