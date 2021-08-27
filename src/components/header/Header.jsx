import React from "react";


import {
  AppBar,
  Toolbar,
  makeStyles,
  withStyles,
  Typography,
  Box,
} from "@material-ui/core";

import SearchBar from "./SearchBar";



const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    margin: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight:0
  },
  subHeading: {
    fontSize: 10,
    fontStyle:'italic'

  },
});

const ToolBar =withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);



const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <>
      <AppBar className={classes.header}>
        <ToolBar>
          <Box className={classes.component}>
            <img src={logoURL} alt="logo" className={classes.logo} />
            <Box className={classes.container}>
              <Typography className={classes.subHeading}>
                Explore <Box component='span' style={{color:'#FFE500'}}> Plus</Box>
              </Typography>
              <img src={subURL} alt="explore logo" className={classes.subURL} />
            </Box>
          </Box>
          <SearchBar />
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Header;
