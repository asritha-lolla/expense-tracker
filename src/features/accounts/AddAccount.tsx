import { Box, Button, TextField } from '@mui/material';

const AddAccount = () => {
  return (
    <Box component={'form'} sx={{display:'flex', gap:2,flexDirection:'column'}}>
      <TextField id="bankName" label="Bank Name" variant="outlined" />
      <TextField id="ifscCode" label="IFSC Code" variant="outlined" />
      <TextField id="accountNumber" label="Account Number" variant="outlined" />
      <TextField id="balance" label="Balance" variant="outlined" />
      <Button variant={'contained'}>Add</Button>
    </Box>
  );
};

export default AddAccount;
