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

const Main = ({ name, handleChangeName }) => {
  // 사용자 입력값을 새롭게 저장하는 상태값
  const [newName, setNewName] = useState(name);

  // input 필드에서 바뀌는 값을 newName에 저장해두는 함수
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  // 버튼을 눌렀을 때 실행되는 함수
  const handleSubmitName = () => {
    console.log(newName);
    handleChangeName(newName);
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
              onChange={handleNameChange}
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handleSubmitName}>
            Change
          </Button>
        </CardActions>
      </Card>
    </MainPageContainer>
  );
};

export default Main;
