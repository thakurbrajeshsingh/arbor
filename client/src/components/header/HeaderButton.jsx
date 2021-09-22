import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

// components
import LoginDialog from "../login/Login";

const useStyles = makeStyles({
  login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 0,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItem: "center",
      textDecoration: "none",
      color: "#fff",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButton = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // Header Login Button Click
  const openDialog = () => {
    setOpen(true);
  };


  return (
    <>
      <Box className={classes.wrapper}>
        <Link>
          <Button
            variant="contained"
            onClick={openDialog}
            className={classes.login}
          >
            Login
          </Button>
        </Link>
        <Link>
          <Typography style={{ marginTop: 2 }}>More</Typography>
        </Link>
        <Link to="/cart" className={classes.container}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Link>
        <LoginDialog open={open} setOpen={setOpen} />
      </Box>
    </>
  );
};

export default HeaderButton;
