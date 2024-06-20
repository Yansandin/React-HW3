import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") return;
    setSubmittedValues([...submittedValues, inputValue]);
    setInputValue("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedTasks = submittedValues.filter((_, index) => index !== indexToDelete);
    setSubmittedValues(updatedTasks);
  };

  return (
    <div>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <TextField
          value={inputValue}
          onChange={handleChange}
          fullWidth
          label="Введите текст"
          id="fullWidth"
        />
        <Button onClick={handleSubmit} variant="outlined" sx={{ mt: 2 }}>
          Добавить задачу
        </Button>
      </Box>

      {submittedValues.map((value, index) => (
        <Card key={index} sx={{ minWidth: 275, mt: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="delete" size="large" onClick={() => handleDelete(index)}>
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ToDoList;

