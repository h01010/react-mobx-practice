import { styled, Container } from '@mui/material';

export const ProfilePageContainer = styled(Container)(
  () => `
    align-items: center;
    justify-content: center;

    .page_title {
        margin-bottom: 32px;
    }

    .page_desc {
        margin-bottom: 0px;
    }

    .user_info_card {
        margin-right: auto;
        margin-left: auto;
        max-width: 400px;
        align-items: center;
        justify-content: center;
        padding: 50px !important;

        .MuiCardContent-root {
            align-items: center;
            justify-content: center;
            display: flex;
            padding: 16px !important;

            .MuiTypography-root {
                margin-right: 16px;
                margin-bottom: 0px;
            }
        }
    }
`
);
