import { useState } from 'react';
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
import { observer } from 'mobx-react-lite';
import { useStore } from '../../mobx-store';

const Main = observer(() => {
  const { userStore } = useStore();
  const { name, updateName } = userStore;

  const [newName, setNewName] = useState(name);

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };

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
              value={newName}
              onChange={handleChangeNewName}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={() => updateName(newName)}>
            Change
          </Button>
        </CardActions>
      </Card>
    </MainPageContainer>
  );
});

export default Main;
