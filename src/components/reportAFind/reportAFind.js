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
{ makeStyles,  
  createMuiTheme,
  Theme,
  ThemeProvider,} from "@material-ui/core/styles";
import { Items } from "./FindData";
import { green, purple } from '@material-ui/core/colors';

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
  continueButton:{
    backgroundColor: '#0069d9',
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
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <div className={classes.main}>
      <Grid item xs={12} md={6}>
        <div>
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