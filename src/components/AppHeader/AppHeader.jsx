import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { toast } from "react-toastify";

const navItems = [
  {
    id: "projects",
    name: "Projects",
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    id: "profile",
    name: "Profile",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: "admin",
    name: "Admin",
    icon: <AdminPanelSettingsOutlinedIcon />,
  },
];

export default function AppHeader({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("projects");

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  return (
    <>
      <Stack className="app-header" spacing={2} sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={() => toggleDrawer(true)} />
            </IconButton>
            <Typography
              className="logo"
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Skill Hunt
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className="hamburger-menu"
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <List className="menu-list">
            {navItems.map(({ id, name, icon }) => (
              <ListItem
                className={
                  menuItem === id ? "menu-item menu-item-active" : "menu-item"
                }
                key={id}
                onClick={() => setMenuItem(id)}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  {icon}
                </IconButton>
                <ListItemText className="menu-item-text" primary={name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {children}
      </Stack>
    </>
  );
}
