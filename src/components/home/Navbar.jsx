import React from "react";
import { Box, Typography } from "@material-ui/core";
import { navData } from "../../constants/Data";

const Navbar = () => {
  return (
    <Box>
      {navData.map((data) => (
        <Box>
          <img src={data.url} alt="" />
          <Typography>{data.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
