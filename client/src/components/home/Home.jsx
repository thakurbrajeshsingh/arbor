import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Slide from "./Slide";
// Components
import Navbar from "./Navbar";
import Banner from "./Banner";

const useStyle = makeStyles({
  components: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding:"5px",
    margin:"12px 0 0 10px",
    width:"17%"
  },
});

const Home = () => {
  const classes = useStyle();

  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <>
      <Navbar />
      <Box className={classes.components}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box style={{ width: "83%" }}>
            <Slide />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="Ads" style={{ width: 210}} />
          </Box>
        </Box>
        
      </Box>
    </>
  );
};

export default Home;
