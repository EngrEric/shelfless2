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
  Divider,
  Input,
  TextField,
  Button
} from "@material-ui/core";
import 
{ makeStyles,} from "@material-ui/core";
import { Items } from "./FindData";
import Navbar from "../app/NavBar";

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
  titleMini: {
    margin: theme.spacing(13, 0, 0, 0),
  },
  main: {
    margin: "10px 20px",
  },
  listItem: {
    padding: theme.spacing(0, 2, 2, 0),
  },
  continueButton:{
    background: theme.primary
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
       <Navbar color="white" display="none" bgColor="#27AE60" />
      <Grid item xs={12} md={6}>
        <div>
        <Typography className={classes.titleMini}>
            <h4>Store Location</h4> 
        </Typography>
        <TextField id="outlined-basic" variant="outlined" fullWidth/>
        </div>
        <Typography className={classes.title}>
            <h3>Products (Choose at least 1)</h3> 
        </Typography>
        <Divider />
        <div className={classes.list}>
          <List dense={false}>
            {Items.map(({title }, index) => {
              return (
                <ListItem key={index} className={classes.listItem} fullWidth>
                    <FormControl 
                    component="fieldset"
                    fullWidth
                    className={classes.listText}>
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
            <Button className={classes.continueButton}
              variant="contained"
              color="primary"
              fullWidth>
              Continue >
            </Button>          
        </div>
      </Grid>
    </div>
  );
};

export default ReportAFind