import { Box, Button, TextField } from '@mui/material';
import { addBankAccount } from '../actions/accountActions';

const AddAccount = () => {
  const addAccountHandler = async (formData: FormData) => {
    'use server'; 

    const bankName = formData.get('bankName') as string;
    const ifscCode = formData.get('ifscCode') as string;
    const accountNumber = formData.get('accountNumber') as string;
    const balance = formData.get('balance') as string;

    if (!bankName || !ifscCode || !accountNumber || !balance) {
      console.error('All fields are required.');
      return;
    }

    const balanceNumber = parseFloat(balance);
    if (isNaN(balanceNumber)) {
      console.error('Balance must be a valid number.');
      return; 
    }

    const result = await addBankAccount({
      bankName,
      ifscCode,
      accountNumber,
      balance: balanceNumber,
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
      action={addAccountHandler} 
      sx={{ display: 'flex', gap: 2, flexDirection: 'column' }}
    >
      <TextField
        id="bankName"
        name="bankName" 
        label="Bank Name"
        variant="outlined"
        required
      />
      <TextField
        id="ifscCode"
        name="ifscCode" 
        label="IFSC Code"
        variant="outlined"
        required
      />
      <TextField
        id="accountNumber"
        name="accountNumber" 
        label="Account Number"
        variant="outlined"
        required
      />
      <TextField
        id="balance"
        name="balance" 
        label="Balance"
        variant="outlined"
        required
        type="number"
      />
      <Button type="submit" variant={'contained'}>
        Add
      </Button>
    </Box>
  );
};

export default AddAccount;