import * as React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme, Divider, IconButton } from '@mui/material';
import { Brightness7, Brightness4, Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
// import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

const Drawerr = ({ drawerWidth, setMyMode, noneORblock, drawerType, hideDrawer }) => {

    const navigate = useNavigate();

    const theme = useTheme();

    const currentLocation = useLocation();

    const myList = [
        { text: "Home", icon: <Home />, path: "/" },
        { text: "Create", icon: <Create />, path: "/create" },
        { text: "Profile", icon: <Person2 />, path: "/profile" },
        { text: "Settings", icon: <Settings />, path: "/settings" }
    ];

    return (
        <Drawer
            sx={{
                width: `${drawerWidth}px`,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: `${drawerWidth}px`,
                    boxSizing: 'border-box',
                },
                display: { xs: noneORblock, sm: "block" }
                // [theme.breakpoints.down('sm')]: {
                //     display: "none",
                // },
            }}
            variant={drawerType}
            anchor="left"
            open={true}
            onClose={hideDrawer}
        >
            {/* <Button variant="contained" color='warning' onClick={()=>{setMyMode(theme.palette.mode === "light" ? "dark" : "light")}}>Dark</Button> */}
            {/* <Toolbar /> */}
            {/* <Divider /> */}
            {/* ------------------------------------------------------------ */}
            <List>

                <ListItem sx={{ display: "flex", justifyContent: "center", mb: "14px" }} disablePadding>
                    <IconButton onClick={() => {
                        localStorage.setItem("currentMode", theme.palette.mode === "light" ? "dark" : "light")
                        setMyMode(theme.palette.mode === "light" ? "dark" : "light");
                    }} color="inherit">
                        {theme.palette.mode === "dark" ? <Brightness7 sx={{ color: "orange" }} /> : <Brightness4 />}
                    </IconButton>
                </ListItem>

                <Divider />

                {/* <ListItem disablePadding sx={{
                    backgroundColor: currentLocation.pathname === "/" ? theme.palette
                        // @ts-ignore
                        .favColor.main : null
                }}>
                    <ListItemButton component="a" href="/">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem> */}

                {/* use Material ui link component */}
                {/* <Link href="/create" color="inherit">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Create />
                            </ListItemIcon>
                            <ListItemText primary="Create" />
                        </ListItemButton>
                    </ListItem>
                </Link> */}

                {/* use React Router link component */}
                {/* <Link to="/create" style={{ color: "inherit", textDecoration:"none" }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Create />
                            </ListItemIcon>
                            <ListItemText primary="Create" />
                        </ListItemButton>
                    </ListItem>
                </Link> */}

                {/* use navigate hook */}
                {/* <ListItem disablePadding sx={{
                    backgroundColor: currentLocation.pathname === "/create" ? theme.palette
                        // @ts-ignore
                        .favColor.main : null
                }}>
                    <ListItemButton onClick={() => { navigate("/create"); }}>
                        <ListItemIcon>
                            <Create />
                        </ListItemIcon>
                        <ListItemText primary="Create" />
                    </ListItemButton>
                </ListItem> */}

                {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Person2 />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem> */}

                {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem> */}

                {myList.map((item) => {
                    return (
                        <ListItem disablePadding sx={{
                            backgroundColor: currentLocation.pathname === item.path ? theme.palette
                                // @ts-ignore
                                .favColor.main : null
                        }} key={item.text}>
                            <ListItemButton onClick={() => { navigate(item.path); }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Logout />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>

            </List>
            {/* ------------------------------------------------------------ */}
        </Drawer >
    )
}

export default Drawerr;