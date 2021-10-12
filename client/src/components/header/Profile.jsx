import { Menu, MenuItem, Typography } from "@material-ui/core";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
});

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const Logout = () => {
    setAccount("");
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <Link to="/">
        <Typography onClick={handleClick} style={{ marginTop: 4 }}>
          {account}
        </Typography>
      </Link>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={(handleClose, Logout)}>
          <PowerSettingsNewIcon fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
