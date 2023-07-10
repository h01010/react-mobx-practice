import { Card, CardContent, Typography } from '@mui/material';
import { ProfilePageContainer } from './style.js';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../mobx-store';

const Profile = observer(() => {
  const { userStore } = useStore();
  const { name } = userStore;

  return (
    <ProfilePageContainer>
      <Typography className="page_title" variant="h3" gutterBottom>
        Profile Page
      </Typography>
      <Card className="user_info_card">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            User Name:
          </Typography>
          <Typography variant="h6" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </Card>
    </ProfilePageContainer>
  );
});

export default Profile;
