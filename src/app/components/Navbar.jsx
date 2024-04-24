"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import phoneIcon from "../assets/iconPhone.png";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import Social from "./ui/Social";
const drawerWidth = 240;
const navItems = [
  "Home",
  "Easy Monthly Installments",
  "Shop By Brands",
  "Become a Vendor",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        WinStore
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#0E3B3E",
        // paddingBottom: "4.2rem",
      }}
    >
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#03484C" }} component="nav">
        <Toolbar
          style={{ padding: "1rem 0", boxShadow: "none" }}
          className="container flex items-center justify-between "
          sx={{ padding: "1rem 0" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image src={logo} alt="logo" />
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "space-between",
            }}
          >
            <Image quality={100} src={phoneIcon} alt="phoneicon" />
            <div className="flex gap-4 text-xl items-center">
              <FiUser />
              <FaRegHeart />
              <div className="flex items-center">
                <LiaCartPlusSolid />
                <span className="text-sm text-muted">Cart</span>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <div className="bg-[#0E3B3E] mt-[6rem] text-white py-2 w-full md:inline-block hidden">
        <div className="container flex gap-6 items-center justify-between">
          <div className="flex gap-6">
            <MenuIcon />
            <ul className="flex items-center gap-4">
              <h1 className="text-xl">Brouse by Category </h1>
              {navItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Social />
        </div>
      </div>
    </Box>
  );
}

export default DrawerAppBar;
