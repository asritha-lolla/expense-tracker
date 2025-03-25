import { Box, Button, TextField } from '@mui/material';
import { addLoan } from '../actions/loanActions';

const AddLoan = () => {
  const addLoanHandler = async (formData: FormData) => {
    'use server';

    const bankAccountID = formData.get('bankAccountID') as string;
    const loanAmount = formData.get('loanAmount') as string;
    const interestRate = formData.get('interestRate') as string;
    const emiAmount = formData.get('emiAmount') as string;
    const startDate = formData.get('startDate') as string;
    const endDate = formData.get('endDate') as string;

    const result = await addLoan({
      bankAccountID,
      loanAmount,
      interestRate,
      emiAmount,
      startDate,
      endDate,
    });

    if (result.error) {
      console.error(result.error);
    } else {
      console.log('Loan added successfully!');
    }
  };

  return (
    <Box
      component={'form'}
      action={addLoanHandler}
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
        id="loanAmount"
        name="loanAmount"
        label="Loan Amount"
        variant="outlined"
        required
      />
      <TextField
        id="interestRate"
        name="interestRate"
        label="Interest Rate"
        variant="outlined"
        required
      />
      <TextField
        id="emiAmount"
        name="emiAmount"
        label="EMI Amount"
        variant="outlined"
        required
        type="number"
      />
      <TextField
        id="startDate"
        name="startDate"
        label="Start Date"
        variant="outlined"
        required
      />
      <TextField
        id="endDate"
        name="endDate"
        label="End Date"
        variant="outlined"
        required
      />
      <Button type="submit" variant={'contained'}>
        Add
      </Button>
    </Box>
  );
};

export default AddLoan;
