import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import { loadCSS } from 'fg-loadcss';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
// import Tooltip from '@mui/material/Tooltip';
// import Avatar from '@mui/material/Avatar';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux';
import { Cart } from '../../features/Cart/Cart';

const Component = ({ cart }) => {
  console.log('cart', cart);
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.14.0/css/all.css',
      // Inject before JSS
      document.querySelector('#font-awesome-css') || document.head.firstChild
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const pages = [
    { name: 'Products', link: '/' },
    { name: 'about-us', link: '/' },
    { name: 'Blog', link: '/blog' },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Container className={styles.menu} maxWidth="xl">
      <AppBar position="static">
        <Toolbar className={styles.toolbar} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            className={styles.logo}
          >
            e-Shop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography className={styles.link} textAlign="center">
                    <Link to={'/'}> {page.name}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            e-Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                className={styles.link}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={'/'}> {page.name}</Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { md: 'flex' } }}>
            <React.Fragment key={'right'}>
              <IconButton
                onClick={toggleDrawer('right', true)}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge
                  className={styles.badge}
                  badgeContent={cart.length}
                  color="error"
                >
                  <Icon baseClassName="fas" className="fa-shopping-cart" />{' '}
                </Badge>
              </IconButton>
              <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                <div className={styles.drawer}>
                  <Cart />
                </div>
              </Drawer>
            </React.Fragment>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cart: PropTypes.array,
};

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = () => ({});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export { CartContainer as Header, Component as HeaderComponent };
