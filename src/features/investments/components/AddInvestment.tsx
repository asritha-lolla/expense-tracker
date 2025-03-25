import { Box, TextField, Button } from '@mui/material';
import { addInvestment } from '../actions/investmentActions';

const AddInvestment = () => {
  const addInvestmentHandler = async (formData: FormData) => {
    'use server';

    const bankAccountID = formData.get('bankAccountID') as string;
    const investmentName = formData.get('investmentName') as string;
    const platform = formData.get('platform') as string;
    const investmentType = formData.get('investmentType') as string;
    const amount = formData.get('amount') as string;
    const date = formData.get('date') as string;

    const result = await addInvestment({
      bankAccountID,
      investmentName,
      platform,
      investmentType,
      amount:parseFloat(amount),
      date,
    });

    if (result.error) {
        console.error(result.error);
      } else {
        console.log('Investment added successfully!');
      }

  };
  return (
    <Box
      component={'form'}
      action={addInvestmentHandler}
      sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}
    >
      <TextField
        id="bankAccountID"
        name="bankAccountID"
        label="Bank AccountID"
        variant="outlined"
        required
      />
      <TextField
        id="investmentName"
        name="investmentName"
        label="Investment Name"
        variant="outlined"
        required
      />
      <TextField
        id="platform"
        name="platform"
        label="Platform"
        variant="outlined"
        required
      />
      <TextField
        id="investmentType"
        name="investmentType"
        label="Investment Type"
        variant="outlined"
        required
      />
      <TextField
        id="amount"
        name="amount"
        label="Amount"
        variant="outlined"
        required
      />
      <TextField
        id="date"
        name="date"
        label="Date"
        variant="outlined"
        required
      />
      <Button type="submit" variant={'contained'}>
        Add
      </Button>
    </Box>
  );
};

export default AddInvestment;
