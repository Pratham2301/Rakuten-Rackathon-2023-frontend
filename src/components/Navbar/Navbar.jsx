import Tooltip from "@mui/material/Tooltip";
import Logo from "../../Assets/GFGlogo.png";
import { BsFillSunFill } from "react-icons/bs";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
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
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));
const styles = {
    AppBar: {
        backgroundColor: "#E5E5E5",
        width: "100%",
        height: "auto",
        py: "2px",
    },
    logo: {
        width: "50px",
        height: "60px",
        px: 1,
    },
    menutext: {
        // fontFamily: "Neue Montreal",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        textTransform: "none",
        fontFamily: "Figtree",
        // lineHeight: "29px",
        color: "#000000",
    },
    btn: {
        my: 2,
        color: "#379237",
        mx: 1,
        width: "100%",

        "&:hover": {
            backgroundColor: "#E5E5E566",
            color: "black",
            borderBottom: "3px solid #379237",
            borderRadius: "0px",
        },
    },
};
const drawerWidth = 240;
const navItems = ["Home", "About", "Events", "Contact-Us"];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", m: 2 }}>
            <Link to="/Home" style={{ textDecoration: "none", cursor: "pointer" }}>
                <img src={Logo} alt="Logo" style={styles.logo} />
            </Link>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Link to={`/${item}`} style={{ textDecoration: "none" }}>
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{ textAlign: "center" }}>
                                <ListItemText>
                                    <Typography sx={styles.menutext}>{item}</Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            {/* <FormControlLabel
        sx={{
          m: 2,
          bottom: 0,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      /> */}
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Grid sx={{ display: "flex" }}>
            <AppBar component="nav" position="fixed" sx={styles.AppBar}>
                <Toolbar>
                    {/* Drawer for Mobile View */}

                    <Button
                        onClick={handleDrawerToggle}
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: "flex",
                                sm: "flex",
                                md: "none",
                                lg: "none",
                                xl: "none",
                            },
                            color: "black",
                        }}
                    >
                        <Grid container xs={12}>
                            <Grid item xs={1}>
                                <MenuIcon />
                            </Grid>
                            <Grid xs={11}>
                                {/* <img src={Logo} alt="Logo" style={styles.logo} /> */}
                                <Typography
                                    sx={{
                                        color: "black",
                                        ml: 2,
                                        fontWeight: 600,
                                        width: "auto",
                                    }}
                                >
                                    GFG <span style={{ color: "Green" }}> RCOEM CHAPTER</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Button>

                    {/* Desktop View */}
                    <Grid
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "none", md: "block" },
                        }}
                    >
                        <Link
                            to="/Home"
                            style={{ textDecoration: "none", cursor: "pointer" }}
                        >
                            <img src={Logo} alt="Logo" style={styles.logo} />
                        </Link>
                    </Grid>
                    <Grid sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                        {navItems.map((item) => (
                            <Link to={`/${item}`} style={{ textDecoration: "none" }}>
                                <Button key={item} sx={styles.btn}>
                                    <Typography sx={styles.menutext}>{item}</Typography>
                                </Button>
                            </Link>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "block" },

                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Grid>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
