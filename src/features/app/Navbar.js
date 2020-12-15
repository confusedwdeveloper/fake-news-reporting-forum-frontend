import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Links from "./Links";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  // for sidebar
  const [state, setState] = useState(false);

  const toggleSidebar = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState((state) => !state);
  };

  // I will implement redirecting to links when I introduce different routes
  const classes = useStyles();

  // media queries
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Sidebar state={state} toggleSidebar={toggleSidebar} />
      <div className={classes.root}>
        <AppBar>
          <Toolbar component="nav">
            {!matches && (
              <IconButton
                onClick={toggleSidebar}
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" className={classes.title}>
              FNR Forum
            </Typography>
            {matches && <Links />}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
