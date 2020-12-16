import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import {
  LockOpen,
  ExitToApp,
  Info,
  Announcement,
  Home,
} from "@material-ui/icons";
import { useHistory } from "react-router-dom";

export default function Sidebar({ toggleSidebar, state }) {
  const history = useHistory();

  return (
    <Drawer anchor="left" open={state} onClose={toggleSidebar}>
      <List component="nav" aria-label="Authentication About Us Public Board">
        <ListItem onClick={() => history.push("/")} button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => history.push("/about-us")}>
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <Announcement />
          </ListItemIcon>
          <ListItemText primary="Public Board" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LockOpen />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <ExitToApp />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
}
