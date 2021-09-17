import { Box, makeStyles } from "@material-ui/core";

// components
import { imageURL } from "../../constants/Data";

const useStyle = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
});

const Midsection = () => {
  const classes = useStyle();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

  return (
    <>
      <Box className={classes.wrapper}>
        {imageURL.map((image) => (
          <img src={image} alt="Loading" style={{ width: "33%" }} />
        ))}
      </Box>
      <img
        src={coronaURL}
        alt="Loading..."
        style={{ width: "100%", marginTop: "20px" }}
      />
    </>
  );
};

export default Midsection;
