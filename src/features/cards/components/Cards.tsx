import { Box, Stack, Typography, Button } from '@mui/material';
import CustomModal from '../../../shared/components/CustomModal';
import { useEffect, useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import AddCard from './AddCard';
import Table from '../../../shared/components/Table';
import { getCardData } from '../actions/cardActions';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'card_name', headerName: 'Card Name', width: 200 },
  { field: 'card_number', headerName: 'Card Number', width: 150 },
  { field: 'card_limit', headerName: 'Card Limit', width: 120, type: 'number' },
  { field: 'outstanding_balance', headerName: 'Outstanding Balance', width: 180 },
  { field: 'created_at', headerName: 'Created At', width: 180 },
];


const Cards = () => {
  const [addCardToggle, setAddCardToggle] = useState<boolean>(false);
  const [rows,setRows]=useState();

  const addCardHandler = () => {
    setAddCardToggle(true);
  };

  const fetchCards=async ()=>{
    const res = await getCardData();
    setRows(res)
  }

  useEffect(()=>{
    fetchCards()
  },[])


  
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>Cards</Typography>
          <Button variant="contained" onClick={addCardHandler}>
            Add Card
          </Button>
        </Stack>

        <Table rows={rows} columns={columns} />
      </Box>
      <CustomModal
        open={addCardToggle}
        title="Add Card"
        content={<AddCard />}
      />
    </>
  );
};

export default Cards;
