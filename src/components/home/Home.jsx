import React from "react";
import { Box, makeStyles } from "@material-ui/core";

// Components
import Navbar from "./Navbar";
import Banner from "./Banner";

const useStyle = makeStyles({
  components:{
    padding:10,
    background:"#F2F2F2"

  }
});

const Home = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
      <Box className={classes.components}>
        <Banner />
      </Box>
    </>
  );
};

export default Home;
