import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constants/Data";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel:{
    marginTop:10,
  }
});

const Banner = () => {
  const classes = useStyle();

  return (
    <Carousel
      autoPlay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#FFFFFF",
          color: "#494949",
          margin: 0,
          borderRadius: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((image) => (
        <img src={image} className={classes.image} />
      ))}
    </Carousel>
  );
};

export default Banner;
