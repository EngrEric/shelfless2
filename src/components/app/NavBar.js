import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Input,
  Grid,
  Button,
  InputAdornment,
} from "@material-ui/core";
import {
  AccountBox,
  FavoriteBorder,
  SearchRounded,
  Add,
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 5,
  },
  accountButton: {
    marginRight: theme.spacing(-2),
  },
  menuButton: {
    marginLeft: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
  },
  appbar: {
    backgroundColor: (props) => props.bgColor,
    color: (props) => props.color,
  },
  toolbar: {
    alignItems: "flex-start",
    paddingBottom: theme.spacing(1),
  },
  search: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  grid: {
    display: (props) => props.display,
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    "& Button": {
      color: (props) => props.color,
    },
  },
  link: {
    color: (props) => props.color,
    textDecoration: "none",
  },
}));

const Navbar = (props) => {
  const { history } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            <FavoriteBorder fontSize={"large"} />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            <NavLink to="/" className={classes.link}>
              ShelfLess
            </NavLink>
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.accountButton}
          >
            <AccountBox fontSize={"large"} />
          </IconButton>
        </Toolbar>
        <Grid className={classes.grid}>
          <Input
            className={classes.search}
            placeholder="Enter Location"
            fullWidth
            startAdornment={
              <InputAdornment style={{ paddingLeft: 20 }} position="start">
                <SearchRounded />
              </InputAdornment>
            }
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button title="" style={{ paddingLeft: 0 }} startIcon={<Add />}>
              Report a new find
            </Button>
            <Button style={{ scrollPaddingRight: 0 }}>Donate</Button>
          </div>
        </Grid>
      </AppBar>
    </div>
  );
};

export default Navbar;
