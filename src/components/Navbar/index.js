import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Toolbar,
  Tooltip,
  Typography,
  Container,
  Button,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import userIcon from '../../assets/user_icon.png';
import { StyledAppbar } from './style';

const pages = ['Main', 'Profile'];
const url = ['/', '/profile'];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <StyledAppbar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="logo_text"
            variant="h6"
            noWrap
            component="a"
            href="/"
          >
            Techeer
          </Typography>

          <Box className="menu_box">
            {pages.map((page, idx) => (
              <Button key={page} onClick={() => navigate(url[idx])}>
                {page}
              </Button>
            ))}
          </Box>

          <Box className="user_box">
            <Tooltip title="User info">
              <IconButton onClick={handleOpenUserMenu}>
                <Avatar alt="Remy Sharp" src={userIcon} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">test menu</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppbar>
  );
};
export default Navbar;
