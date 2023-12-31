import { Stack, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";

export default function Addition({}) {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const handleFirstNumberChange = useCallback((event) => {
    const currentValue = event.target.value;
    setFirstNumber(currentValue);
  }, []);

  const handleSecondNumberChange = useCallback((event) => {
    const currentValue = event.target.value;
    setSecondNumber(currentValue);
  });

  return (
    <Stack direction="row" spacing={3} alignItems="center" p={3}>
      <TextField
        variant="outlined"
        label="First number"
        onChange={handleFirstNumberChange}
      />
      <TextField
        variant="outlined"
        label="Second number"
        onChange={handleSecondNumberChange}
      />
      <Typography>{Number(firstNumber) + Number(secondNumber)}</Typography>
    </Stack>
  );
}
