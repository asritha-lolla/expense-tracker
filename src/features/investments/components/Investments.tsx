import { Box, Stack, Typography, Button } from "@mui/material"
import CustomModal from "../../../shared/components/CustomModal"
import Table from "../../../shared/components/Table"
import { useEffect, useState } from "react"
import { GridColDef } from "@mui/x-data-grid"
import { getLoan } from "../../loans/actions/loanActions"
import AddInvestment from "./AddInvestment"
import { getInvestment } from "../actions/investmentActions"

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'bank_account_id', headerName: 'Bank AccountID', width: 200 },
  { field: 'investment_name', headerName: 'Investment Name', width: 150 },
  { field: 'platform', headerName: 'Platform', width: 120},
  { field: 'investment_type', headerName: 'Investment Type', width: 120},
  { field: 'amount', headerName: 'Amount', width: 120},
  { field: 'date', headerName: 'Date', width: 120},
  { field: 'created_at', headerName: 'Created At', width: 180 },
];

const Investments = () => {

    const [addInvestmentToggle, setAddInvestmentToggle] = useState<boolean>(false);
     const [rows,setRows]=useState()
    
      const fetchLoans=async()=>{
        const res=await getInvestment()
        setRows(res)
      }
    
      useEffect(()=>{
        fetchLoans()
      },[])

    const addInvestmentHandler = () => {
        setAddInvestmentToggle(true)
      };

  return (
    <>
    <Box display={'flex'} flexDirection={'column'} gap={2}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Typography>Investments</Typography>
        <Button variant="contained" onClick={addInvestmentHandler}>
          Add Investment
        </Button>
      </Stack>

      <Table rows={rows} columns={columns} />
    </Box>
    <CustomModal
      open={addInvestmentToggle}
      title="Add Investment"
      content={<AddInvestment />}
    />
  </>
  )
}

export default Investments
