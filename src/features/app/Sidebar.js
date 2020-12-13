import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { LockOpen, ExitToApp, Info, Announcement } from "@material-ui/icons";

export default function Sidebar({ toggleSidebar, state }) {
  return (
    <Drawer anchor="left" open={state} onClose={toggleSidebar}>
      <List component="nav" aria-label="Authentication About Us Public Board">
        <ListItem button>
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
