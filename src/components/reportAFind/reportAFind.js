import React from "react";
import {
  Typography,
  List,
  ListItem,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Divider
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Items } from "./FindData";

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
    variant: "h1"
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

const ReportAFind = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid item xs={12} md={6}>
        <Typography className={classes.title}>
            <h3>Products (Choose at least 1)</h3> 
        </Typography>
        <Divider />
        <div className={classes.list}>
          <List dense={false}>
            {Items.map(({title }, index) => {
              return (
                <ListItem key={index} className={classes.listItem}>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary" />}
                            label={<h3>{title} </h3>}
                            labelPlacement="end"
                            />
                        </FormGroup>
                        </FormControl>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default ReportAFind