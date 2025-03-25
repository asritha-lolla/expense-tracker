import { Box, Stack, Typography, Button } from '@mui/material';
import CustomModal from '../../../shared/components/CustomModal';
import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import AddExpense from '../../expenses/components/AddExpense';
import Table from '../../../shared/components/Table';
import { getExpenseData } from '../actions/expenseActions';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'expense_name', headerName: 'Expense Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'amount', headerName: 'Amount', width: 120, type: 'number' },
  { field: 'place', headerName: 'Place', width: 180 },
  { field: 'payment_type', headerName: 'Payment Type', width: 180 },
  { field: 'bank_account_id', headerName: 'Bank AccountID', width: 180 },
  { field: 'credit_card_id', headerName: 'CreditCard ID', width: 180 },
  { field: 'created_at', headerName: 'Created At', width: 180 },
];

const Cards = () => {
  const [addCardToggle, setAddCardToggle] = useState<boolean>(false);
  const [rows, setRows] = useState();

  const cardData = async () => {
    const res = await getExpenseData();
    setRows(res);
  };

  useEffect(() => {
    cardData();
  },[]);

  

  const addCardHandler = () => {
    setAddCardToggle(true);
  };
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>Expenses</Typography>
          <Button variant="contained" onClick={addCardHandler}>
            Add Expense
          </Button>
        </Stack>

        <Table rows={rows} columns={columns} />
      </Box>
      <CustomModal
        open={addCardToggle}
        title="Add Expense"
        content={<AddExpense />}
      />
    </>
  );
};

export default Cards;
