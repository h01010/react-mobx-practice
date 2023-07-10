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
import { observer } from 'mobx-react-lite';
import { useStore } from '../../mobx-store';

const pages = ['Main', 'Profile'];
const url = ['/', '/profile'];

const Navbar = observer(() => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const { userStore } = useStore();
  const { name } = userStore;

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
              <Typography sx={{ p: 2 }}>{name}</Typography>
            </Popover>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppbar>
  );
});
export default Navbar;
