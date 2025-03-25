import { Box, Button, TextField } from '@mui/material';
import { addCardDB } from '../actions/cardActions';

const AddCard = () => {
  const addCardHandler = async (formData:FormData) => {
    'use server';

    const cardName=formData.get('cardName') as string;
    const creditLimit= formData.get('creditLimit') as string;
    const cardNumber = formData.get('cardNumber') as string;
    const outstandingBalance = formData.get('outstandingBalance') as string
    
const result = await addCardDB({
      cardName,
      creditLimit,
      cardNumber,
      outstandingBalance,
    });

    if (result.error) {
      console.error(result.error);
    } else {
      console.log('Bank account added successfully!');
    }
  };


  return (
    <Box component={'form'} action={addCardHandler} sx={{display:'flex', gap:2,flexDirection:'column'}}>
      <TextField id="cardName" name="cardName" label="Card Name" variant="outlined" />
      <TextField id="creditLimit" name="creditLimit" label="Credit Limit" variant="outlined" />
      <TextField id="cardNumber" name="cardNumber" label="Card Number" variant="outlined" />
      <TextField id="outstandingBalance" name="outstandingBalance" label="Outstanding Balance" variant="outlined" />
      <Button variant={'contained'} type='submit'>Add</Button>
    </Box>
  );
};

export default AddCard;
