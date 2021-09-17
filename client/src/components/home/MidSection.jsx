import { Box, makeStyles } from "@material-ui/core";

// components
import { imageURL } from "../../constants/Data";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    marginTop:20,
    justifyContent:"space-between"
  },
});

const Midsection = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      {imageURL.map(image => (
        <img src={image} alt="Loading" style={{width:"33%"}} />
      ))
      }
    </Box>
  );
};

export default Midsection;
