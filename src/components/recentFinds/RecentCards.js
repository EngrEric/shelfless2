import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardActions,
  Paper,
  Typography,
  CardHeader,
  IconButton,
  Badge,
} from "@material-ui/core";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import "./styles.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "335px",
    backgroundColor: "#F2F2F2",
  },
  head: {
    paddingBottom: 0,
  },
  content: {
    paddingTop: 0,
  },
  headTitle: {
    fontSize: 15,
    fontWeight: 800,
  },
  footer: {
    justifyContent: "space-between",
  },
  stock: {
    padding: 16,
  },
  paper: {
    backgroundColor: (props) => props.data.stockStatusColor,
    padding: theme.spacing(0.5, 2),
    color: "#fff",
  },
}));

function RecentCard(props) {
  const {
    id,
    productName,
    timeFound,
    storeName,
    location,
    stockStatus,
  } = props.data;
  // id is a place holder for fav counts
  const [counter, setCounter] = useState(+id);
  const [isCliked, toggleClick] = useState(false);
  const classes = useStyles(props);

  const handleAddToFav = () => {
    toggleClick(!isCliked);
    isCliked ? setCounter(counter - 1) : setCounter(counter + 1);

    // Dispatch an action that adds the item to fav
    // then update the fav icon with latest counter
    //
  };

  return (
    <Card className={props.animate ? `${classes.root} card` : classes.root}>
      <CardHeader
        className={classes.head}
        title={props.title}
        action={timeFound}
        titleTypographyProps={{ className: classes.headTitle }}
      ></CardHeader>
      <CardContent>
        <span>store</span>
        <Typography gutterBottom color="textPrimary">
          {storeName}
        </Typography>

        <span>location</span>
        <Typography color="textPrimary" gutterBottom>
          {location}
        </Typography>
      </CardContent>

      <span className={classes.stock}>Stock status</span>

      <CardActions className={classes.footer}>
        <Paper className={classes.paper} variant="elevation" elevation={0}>
          {stockStatus}
        </Paper>
        <div>
          <IconButton>
            <ArrowUpward />
          </IconButton>
          <IconButton onClick={handleAddToFav}>
            <Badge badgeContent={counter} color="primary">
              <FavoriteBorder />
            </Badge>
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
export default RecentCard;
