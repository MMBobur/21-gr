import "./Navbar.css"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { AiOutlineShoppingCart } from "react-icons/ai";

const pages = ['Catalog', 'Delivery', 'About', 'Contacts'];
const settings = ['Catalog', 'Delivery', 'About', 'Contacts'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar sx={{
            position:{xl:'fixed',lg:'fixed',md:'fixed',sm:'absolute',xs:'absolute'}
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    backgroundColor: '#a5c926',
                    height: '32px',
                    alignItems: 'center',
                    padding: { xl: '0 175px', lg: '0 50px', md: '0 40px', sm: '0 18px', xs: '0 18px' }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', }}>
                        <Typography sx={{
                            fontSize: '11px',
                            lineHeight: '16px',
                            marginRight: '16px'
                        }}>
                            Call Us: +1 213 974-5898
                        </Typography>
                        <Typography sx={{
                            fontSize: '11px',
                            lineHeight: '16px',
                            display: { xl: 'block', lg: 'block', md: 'block', sm: 'block', xs: 'none' }
                        }}>
                            Email: <Link href="#" sx={{
                                color: '#fff',
                                cursor: 'pointer',
                                textDecoration: 'underline'
                            }}>toystore@template.com</Link>
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'right' }}>
                        <Typography id='NavTepSt'>
                            <AdbIcon />
                        </Typography>
                        <Typography id='NavTepSt'>
                            <AdbIcon />
                        </Typography>
                        <Typography id='NavTepSt'>
                            <AdbIcon />
                        </Typography>
                        <Typography id='NavTepSt'>
                            <AdbIcon />
                        </Typography>
                        <Typography id='NavTepSt'>
                            <AdbIcon />
                        </Typography>
                    </Box>
                </Box>
                <Toolbar sx={{
                    padding: { xl: '0 175px', lg: '0 50px', md: '0 40px', sm: '0 18px', xs: '0 18px' }
                }}>
                    <Box sx={{ 
                        display: 'flex', 
                        width: {xl:'100%',lg:'100%',md:'100%',sm:'80%',xs:'65%'}, 
                        alignItems: 'center'
                        }}>
                        <Typography id='navBoshYoz'>
                            ToyStore
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, padding: '0 24px' }}>
                            {pages.map((page) => (
                                <Link id="NavYozLin">
                                    {page}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Typography sx={{
                            color: '#111',
                            fontSize: '14px',
                            fontFamily: "'Open Sans', sans-serif",
                            cursor: 'pointer'
                        }}>
                            Cart
                        </Typography>
                        <Typography sx={{
                            marginLeft: '10px',
                            fontSize: '25px',
                            cursor: 'pointer',
                            marginTop: '8px',
                            color: '#111'
                        }}>
                            <AiOutlineShoppingCart />
                        </Typography>
                        <Typography id='navYozIc'>
                            0
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: { xs: 'flex', md: 'none' },
                        height: '100%',
                        padding: '8px 0 8px 8px',
                        borderLeft: '1px solid #e5e5e5',
                    }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;