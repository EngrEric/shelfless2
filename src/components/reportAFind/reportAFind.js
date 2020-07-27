import React from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  List,
  ListItem,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Grid,
  Divider,
  Box,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Items } from "./FindData";
import Navbar from "../app/NavBar";
import { makeStyles } from "@material-ui/core";

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
    variant: "h1",
  },
  title1: {
    margin: theme.spacing(8, 0, 2, 0),
    textAlign: "justify",
  },
  titleMini: {
    margin: theme.spacing(8, 0, 0, 0),
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
const ReportAFind = (props) => {
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
          justifyContent="space-between"
          alignItems="right"
          height="50px"
          width="100%"
          color="#fff"
        >
          <div style={{ display: "flex" }}>
            <IconButton onClick={() => history.goBack()}>
              <ArrowBack htmlColor="#fff" />
            </IconButton>
            <Typography>Report A Find</Typography>
          </div>
          <Typography style={{ marginRight: "1em" }}>Continue</Typography>
        </Box>
      </Navbar>
      <div className={classes.main}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography className={classes.titleMini}>
              <h4>Store Location</h4>
            </Typography>
            <TextField id="outlined-basic" variant="outlined" fullWidth />
          </div>
          <Typography className={classes.title}>
            <h3>Products (Choose at least 1)</h3>
          </Typography>
          <Divider />
          <div className={classes.list}>
            <List dense={false}>
              {Items.map(({ title }, index) => {
                return (
                  <ListItem key={index} className={classes.listItem} fullWidth>
                    <FormControl
                      component="fieldset"
                      fullWidth
                      className={classes.listText}
                    >
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          value="end"
                          control={<Checkbox color="primary" />}
                          label={<h3>{title} </h3>}
                          labelPlacement="end"
                          fullWidth
                        />
                      </FormGroup>
                    </FormControl>
                  </ListItem>
                );
              })}
            </List>
            <Button
              className={classes.continueButton}
              variant="contained"
              color="primary"
              fullWidth
            >
              <span style={{ color: "#fff" }}>Continue</span>{" "}
              <ArrowForward style={{ color: "#fff" }} />
            </Button>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default ReportAFind;
