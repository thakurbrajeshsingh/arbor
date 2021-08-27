import React from "react";

import { AppBar, Toolbar, makeStyles ,Typography} from "@material-ui/core";

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo:{
      width:75
  },
  subURL:{
      width:10,
      margin:4
  }
});

const Header = () => {
  const classes = useStyle();
  const logoURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
            <img src={logoURL} alt="logo" className={classes.logo}/>
            <Typography>Explore Plus</Typography> 
            <img src={subURL} alt="explore logo" className={classes.subURL} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
