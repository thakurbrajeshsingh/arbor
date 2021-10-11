import { Menu, MenuItem, Typography } from "@material-ui/core";
import { useState } from "react";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <Typography onClick={handleClick} style={{ marginTop: 4 }}>
        {account}
      </Typography>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
