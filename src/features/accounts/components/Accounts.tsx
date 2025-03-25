import { Box, Stack, Typography, Button } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import Table from '../../../shared/components/Table';
import CustomModal from '../../../shared/components/CustomModal';
import { useEffect, useState } from 'react';
import AddAccount from './AddAccount';
import { getBankAccounts } from '../actions/accountActions';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'bank_name', headerName: 'Bank Name', width: 200 },
  { field: 'account_number', headerName: 'Account Number', width: 150 },
  { field: 'ifsc_code', headerName: 'IFSC Code', width: 120, type: 'string' },
  { field: 'created_at', headerName: 'Created At', width: 180 },
];


const Accounts = () => {
  const [addAccountToggle, setAddAccountToggle] = useState<boolean>(false);
  const [rows,setRows]=useState()

  const fetchAccounts=async()=>{
    const res=await getBankAccounts()
    setRows(res)
  }

  useEffect(()=>{
    fetchAccounts()
  },[])

  const addAccountHandler = () => {
    setAddAccountToggle(true)
  };
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>Accounts</Typography>
          <Button variant="contained" onClick={addAccountHandler}>
            Add Account
          </Button>
        </Stack>

        <Table rows={rows} columns={columns} />
      </Box>
      <CustomModal
        open={addAccountToggle}
        title="Add Account"
        content={<AddAccount />}
      />
    </>
  );
};

export default Accounts;
