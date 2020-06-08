import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "../app/NavBar";
import { Box, Typography, IconButton, Grid, GridList } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";

import RecentCard from "../recentFinds/RecentCards";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: "335px",
    backgroundColor: "#F2F2F2",
    overflow: "hidden",
    margin: "0 7%",
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    padding: "50px 5px",
  },
  img: {
    borderRadius: "15px",
    maxHeight: 150,
    maxWidth: 100,
  },
}));

const ProductDetails = (props) => {
  const { state } = useLocation();
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <Navbar display="none" bgColor="#F2F2F2" color="#27AE60">
        <Box
          borderColor="red"
          boxSizing="20px"
          bgcolor="#27AE60"
          marginTop="70px"
          padding="15px 5px"
          display="flex"
          alignItems="center"
          height="50px"
          width="100%"
          color="#fff"
        >
          <IconButton onClick={() => history.goBack()}>
            <ArrowBack htmlColor="#fff" />
          </IconButton>
          <Typography>{state.data.productName}</Typography>
        </Box>
      </Navbar>

      <Box width="100%" height="200px" bgcolor="#fff" marginBottom="10px">
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <div
            lat={59.955413}
            lng={30.337844}
            // text="My Marker"
          />
        </GoogleMapReact>
        <Typography>{"Map place holder"}</Typography>
      </Box>

      <Grid spacing={2} container justify="center">
        <Grid item xs={"auto"} lg={"auto"} md={"auto"}>
          <RecentCard title={state.data.productName} data={state.data} />
        </Grid>
        <Grid item className={classes.root} xs={"auto"} lg={"auto"} md={"auto"}>
          <Typography>Photo</Typography>
          <GridList className={classes.gridList} cols={2.5}>
            {state.data.images.map((item, index) => (
              <img className={classes.img} key={index} src={item} alt={""} />
            ))}
          </GridList>
        </Grid>
      </Grid>
    </div>
  );
};

ProductDetails.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33,
  },
  zoom: 11,
};

export default ProductDetails;
