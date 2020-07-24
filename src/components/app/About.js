import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { makeStyles } from "@material-ui/styles";

const green = "#27ae60";
const lightGrey = "#f2f2f2";
const darkGrey = "#e0e0e0";
const lightred = "#eb5757";
const orange = "#f2994a";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      background: green,
    },
    list: {
      display: "flex",
    },
    listItem: {
      paddingTop: ".75em",
      paddingBottom: ".75em",
    },
    arrowIcon: {
      fontSize: "1.5rem",
      color: "#fff",
      minWidth: 30,
    },
    listItemText: {
      fontSize: "1.2rem",
    },
    listMargin: {
      marginBottom: "4em",
    },
    btn: {
      fontSize: ".9rem",
      textTransform: "none",
      background: darkGrey,
      fontWeight: 600,
      color: "#000",
      minWidth: 50,
      padding: "3px 10px",
    },
    captionText: {
      fontSize: ".75rem",
      fontWeight: 500,
      color: darkGrey,
    },
    primaryHeading: {
      fontSize: "1.2rem",
      marginBottom: ".3em",
    },
    saveButton: {
      background: green,
      width: "100%",
      color: "#fff",
      padding: "1em auto",
    },
  }));

  const classes = useStyles();

  return (
    <Fragment>
      <AppBar className={classes.appBar}>
        <List disablePadding className={classes.list}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.arrowIcon}>
              <ArrowBack />
            </ListItemIcon>
            <ListItemText
              primary="Report a find"
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <ListItem
            button
            className={classes.listItem}
            style={{ textAlign: "right", width: 100 }}
          >
            <ListItemText
              primary="Save"
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
        </List>
      </AppBar>
      <div className={classes.listMargin} />
      <Grid container direction="column">
        <Grid item style={{ background: lightGrey, padding: ".75em 1.5em" }}>
          <Typography variant="subtitle1">
            Confirm Location &amp; Products
          </Typography>
        </Grid>
        {/* Location Grid */}
        <Grid item sm={6} style={{ margin: "3em 1.5em 2em" }}>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "2em" }}>
              <Typography variant="h5" className={classes.primaryHeading}>
                Location
              </Typography>
              <Divider style={{ background: lightGrey, padding: "1.2px 0" }} />
            </Grid>
            <Grid item style={{ background: lightGrey, padding: ".85em" }}>
              <Grid container direction="row" justify="space-between">
                <Grid item>
                  <Typography variant="caption" className={classes.caption}>
                    Store
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ marginBottom: ".7em" }}
                  >
                    Lucky Supermarket
                  </Typography>
                  <Typography variant="caption" className={classes.caption}>
                    Location
                  </Typography>
                  <Typography variant="subtitle1">247 E 18th St</Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.btn}>
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Product Grid */}
        <Grid item style={{ margin: "2em 1.5em 2em" }}>
          <Grid container direction="column">
            <Grid item style={{ marginBottom: "2em" }}>
              <Typography variant="h5" className={classes.primaryHeading}>
                Products
              </Typography>
              <Divider style={{ background: lightGrey, padding: "1.2px 0" }} />
            </Grid>
            <Grid item>
              <Grid container direction="row">
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    background: lightGrey,
                    padding: ".75em",
                    marginBottom: "1.5em",
                  }}
                >
                  <Grid container direction="row" justify="space-between">
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="caption">Product</Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ marginBottom: ".2em" }}
                          >
                            Paper Towels
                          </Typography>
                          <Typography variant="caption">
                            Stock Status
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.btn}
                            style={{
                              background: green,
                              color: "#fff",
                              padding: "5px 15px",
                            }}
                          >
                            Full
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row">
                        <Grid item style={{ marginRight: ".7em" }}>
                          <Button variant="contained" className={classes.btn}>
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" className={classes.btn}>
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    background: lightGrey,
                    padding: ".75em",
                    marginBottom: "1.5em",
                  }}
                >
                  <Grid container direction="row" justify="space-between">
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="caption">Product</Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ marginBottom: ".2em" }}
                          >
                            Disinfectant Spray
                          </Typography>
                          <Typography variant="caption">
                            Stock Status
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.btn}
                            style={{
                              background: lightred,
                              color: "#fff",
                              padding: "5px 15px",
                            }}
                          >
                            Low
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row">
                        <Grid item style={{ marginRight: ".7em" }}>
                          <Button variant="contained" className={classes.btn}>
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" className={classes.btn}>
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    background: lightGrey,
                    padding: ".75em",
                    marginBottom: "3em",
                  }}
                >
                  <Grid container direction="row" justify="space-between">
                    <Grid item>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="caption">Product</Typography>
                          <Typography
                            variant="subtitle2"
                            style={{ marginBottom: ".2em" }}
                          >
                            Disinfectant Spray
                          </Typography>
                          <Typography variant="caption">
                            Stock Status
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.btn}
                            style={{
                              background: orange,
                              color: "#fff",
                              padding: "5px 15px",
                            }}
                          >
                            Medium
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row">
                        <Grid item style={{ marginRight: ".7em" }}>
                          <Button variant="contained" className={classes.btn}>
                            Edit
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" className={classes.btn}>
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ margin: "0 1.5em .5em" }}>
          <Button variant="contained" className={classes.saveButton}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default About;
