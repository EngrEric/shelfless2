import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PRODUCTS } from "./constants";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 900,
  },
  list: {
    backgroundColor: theme.palette.background.default,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  title1: {
    margin: theme.spacing(8, 0, 2, 0),
    textAlign: "justify",
  },
  main: {
    margin: "10px 20px",
  },
  listItem: {
    padding: theme.spacing(0, 2, 2, 0),
  },

  listText: {
    letterSpacing: 10,
    padding: theme.spacing(0, 0, 0, 1),
    "& :hover": {
      backgroundColor: "#ecf9f1",
      padding: theme.spacing(0.5),
      cursor: "pointer",
    },
  },
}));

const ListProducts = () => {
  const classes = useStyles();

  const handleClick = (url, t) => {
    console.log(t);
  };

  return (
    <div className={classes.main}>
      <div>
        <Typography variant="h4" className={classes.title1}>
          Help your neighbors find the products they need by locating them in
          the stores
        </Typography>
      </div>
      <Grid item xs={12} md={6}>
        <Typography className={classes.title}>Most Desired Items</Typography>
        <div className={classes.list}>
          <List dense={false}>
            {PRODUCTS.map(({ imageUrl, title }, index) => {
              return (
                <ListItem key={index} className={classes.listItem}>
                  <ListItemAvatar>
                    <img src={imageUrl} alt="" width="50" height="50" />
                  </ListItemAvatar>
                  <ListItemText
                    onClick={() => handleClick(imageUrl, title)}
                    primary={<h3>{title} </h3>}
                    className={classes.listText}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default ListProducts;
