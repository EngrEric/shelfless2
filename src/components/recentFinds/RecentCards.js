import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  CardContent,
  CardActions,
  Button,
  Typography,
  CardHeader,
  IconButton,
} from "@material-ui/core";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles({
  root: {
    minWidth: "325px",
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
  button: {
    backgroundColor: (props) => props.data.stockStatusColor,
    color: "#fff",
  },
});

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
    <Card className={classes.root}>
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
        <Button className={classes.button} variant="contained" size="small">
          {stockStatus}
        </Button>
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
