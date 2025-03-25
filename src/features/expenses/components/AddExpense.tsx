import { Box, Button, TextField } from '@mui/material';
import { addExpenseDB } from '../actions/expenseActions';

const AddCard = () => {
  const addExpenseHandler = async (formData: FormData) => {
    'use server';

    const expenseName = formData.get('expenseName') as string;
    const category = formData.get('category') as string;
    const amount = formData.get('amount') as string;
    const place = formData.get('place') as string;
    const paymentType = formData.get('paymentType') as string;
    const bankAccountID = formData.get('bankAccountID') as string;
    const creditCardtID = formData.get('creditCardtID') as string;

    const result= await addExpenseDB({
      expenseName,
      category,
      amount: parseFloat(amount),
      place,
      paymentType,
      bankAccountID: parseInt(bankAccountID),
      creditCardtID: parseInt(creditCardtID),
    });

    if (result.error) {
      console.error(result.error);
    } else {
      console.log('Bank account added successfully!');
    }
  };
  return (
    <Box
      component={'form'}
      action={addExpenseHandler}
      sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}
    >
      <TextField
        id="expenseName"
        name="expenseName"
        label="Expense Name"
        variant="outlined"
      />
      <TextField
        id="category"
        name="category"
        label="Category"
        variant="outlined"
      />
      <TextField id="amount" name="amount" label="Amount" variant="outlined" />
      <TextField id="place" name="place" label="Place" variant="outlined" />
      <TextField
        id="paymentType"
        name="paymentType"
        label="Payment Type"
        variant="outlined"
      />
      <TextField
        id="bankAccountID"
        name="bankAccountID"
        label="Bank AccountID"
        variant="outlined"
      />
      <TextField
        id="creditCardtID"
        name="creditCardtID"
        label="Credit CardID"
        variant="outlined"
      />
      <Button variant={'contained'} type="submit">
        Add
      </Button>
    </Box>
  );
};

export default AddCard;
