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
  Popover
} from '@mui/material';
import userIcon from '../../assets/user_icon.png';
import { StyledAppbar } from './style';

const pages = ['Main', 'Profile'];
const url = ['/', '/profile'];
const userName = 'Yeonju Seo';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserInfoBox = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserInfoBox = () => {
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
              <IconButton onClick={handleOpenUserInfoBox}>
                <Avatar alt="Remy Sharp" src={userIcon} />
              </IconButton>
            </Tooltip>
            <Popover
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserInfoBox}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <Typography sx={{ p: 2 }}>{userName}</Typography>
            </Popover>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppbar>
  );
};
export default Navbar;
