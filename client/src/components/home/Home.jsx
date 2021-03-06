import React from "react";
import { Box, makeStyles } from "@material-ui/core";

// Components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import Midsection from "./Midsection";

const useStyle = makeStyles({
  components: {
    padding: 10,
    background: "#F2F2F2",
  },
  rightWrapper: {
    background: "#FFFFFF",
    padding: "5px",
    margin: "12px 0 0 10px",
    width: "17%",
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
            <Slide timer={true} title="Deal of the Day" />
          </Box>
          <Box className={classes.rightWrapper}>
            <img src={adURL} alt="Ads" style={{ width: 210 }} />
          </Box>
        </Box>
        <Midsection />
        <Slide timer={false} title="Deal of the Day" />
        <Slide timer={false} title="Discount for you" />
        <Slide timer={false} title="Suggested Items" />
        <Slide timer={false} title="Top Selection" />
        <Slide timer={false} title="Recommended Items" />
        <Slide timer={false} title="Best Seller" />
      </Box>
    </>
  );
};

export default Home;
