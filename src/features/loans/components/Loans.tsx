import { Box, Stack, Typography, Button} from '@mui/material'
import Table from '../../../shared/components/Table'
import CustomModal from '../../../shared/components/CustomModal'
import AddLoan from './AddLoan'
import { useEffect, useState } from 'react'
import { getLoan } from '../actions/loanActions'
import { GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'bank_account_id', headerName: 'Bank Account ID', width: 200 },
  { field: 'loan_amount', headerName: 'Loan Amount', width: 150 },
  { field: 'interest_rate', headerName: 'Interest Rate', width: 180 },
  { field: 'emi_amount', headerName: 'EMI Amount', width: 180 },
  { field: 'start_date', headerName: 'Start Date', width: 180 },
  { field: 'end_date', headerName: 'End Date', width: 180 },
  { field: 'created_at', headerName: 'Created At', width: 180 },
];

const Loans = () => {

  const [addCardToggle, setAddCardToggle] = useState<boolean>(false);
  const [rows,setRows]=useState();

  const addCardHandler = () => {
    setAddCardToggle(true);
  };

  const fetchLoanData=async ()=>{
      const res = await getLoan();
      setRows(res)
    }
  
    useEffect(()=>{
      fetchLoanData()
    },[])

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>Loans</Typography>
          <Button variant="contained" onClick={addCardHandler}>
            Add Loan
          </Button>
        </Stack>

        <Table rows={rows} columns={columns} />
      </Box>
      <CustomModal
        open={addCardToggle}
        title="Add Loan"
        content={<AddLoan />}
      />
    </>
  )
}

export default Loans
