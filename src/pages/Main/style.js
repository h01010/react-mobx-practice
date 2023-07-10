import { styled, Container } from '@mui/material';

export const MainPageContainer = styled(Container)(
  () => `
    align-items: center;
    justify-content: center;

    .page_title {
        margin-bottom: 32px;
    }

    .user_input_card {
        margin-right: auto;
        margin-left: auto;
        max-width: 400px;
        align-items: center;
        justify-content: center;
        padding: 50px;

        .MuiCardActions-root {
            align-items: center;
            justify-content: center;

            .MuiButtonBase-root {
                background-color: #282c34;
            }
        }
    }
`
);
