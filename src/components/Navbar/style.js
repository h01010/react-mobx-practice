import { styled, AppBar } from '@mui/material';

export const StyledAppbar = styled(AppBar)(
  () => `
  background: #61dafb;

  .logo_text {
      display: flex;
      margin-right: 16px;
      font-family: monospace;
      font-weight: 700;
      letter-spacing: 0.3rem;
      color: #282c34;
      text-decoration: none;
  }

  .menu_box {
      flex-grow: 1;
      display: flex;

      .MuiButtonBase-root {
          display: block;
          margin-top: 16px;
          margin-bottom: 16px;
          color: #282c34;
      }
  }

  .user_box {
      flex-grow: 0;

      .MuiButtonBase-root {
          padding: 0px;
      }
  }
`
);
