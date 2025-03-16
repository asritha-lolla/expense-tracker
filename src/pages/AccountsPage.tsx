import { GridColDef } from '@mui/x-data-grid';
import Table from '../shared/components/Table';
import { Box, Button, Stack, Typography } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'bank_name', headerName: 'Bank Name', width: 200 },
  { field: 'account_number', headerName: 'Account Number', width: 150 },
  { field: 'balance', headerName: 'Balance', width: 120, type: 'number' },
  { field: 'created_at', headerName: 'Created At', width: 180 },
];

const rows = [
  {
    id: 1,
    bank_name: 'Bank of America',
    account_number: '1234567890',
    balance: 5000.0,
    created_at: '2023-10-01T12:00:00',
  },
  {
    id: 2,
    bank_name: 'Chase',
    account_number: '9876543210',
    balance: 2500.5,
    created_at: '2023-09-15T09:30:00',
  },
  {
    id: 3,
    bank_name: 'Wells Fargo',
    account_number: '4567891230',
    balance: 10000.75,
    created_at: '2023-08-20T15:45:00',
  },
  {
    id: 4,
    bank_name: 'Citibank',
    account_number: '3216549870',
    balance: 7500.25,
    created_at: '2023-07-05T08:00:00',
  },
];

const AccountsPage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography>Accounts</Typography>
        <Button variant="contained">Add Account</Button>
      </Stack>

      <Table rows={rows} columns={columns} />
    </Box>
  );
};

export default AccountsPage;
