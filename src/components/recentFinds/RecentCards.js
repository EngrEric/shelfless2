import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardActions,
  Paper,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import "./styles.css";

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
    productName,
    timeFound,
    storeName,
    location,
    stockStatus,
  } = props.data;
  const classes = useStyles(props);

  return (
    <Card className={`${classes.root} card`}>
      <CardHeader
        className={classes.head}
        title={productName}
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
          <IconButton>
            <FavoriteBorder />
          </IconButton>
        </div>
      </CardActions>
    </Card>
  );
}
export default RecentCard;
