import {
  Card,
  FormControl,
  InputLabel,
  Input,
  Button,
  CardContent,
  CardActions,
  Typography
} from '@mui/material';
import { MainPageContainer } from './style.js';

const Main = () => {
  return (
    <MainPageContainer>
      <Typography className="page_title" variant="h3" gutterBottom>
        Main Page
      </Typography>
      <Card className="user_input_card">
        <CardContent>
          <FormControl variant="standard">
            <InputLabel>User Name</InputLabel>
            <Input
              id="component-simple"
              helperText="Type your user name"
              variant="outlined"
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained">Change</Button>
        </CardActions>
      </Card>
    </MainPageContainer>
  );
};

export default Main;
