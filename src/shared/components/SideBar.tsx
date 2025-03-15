import { Box, Drawer, Typography } from '@mui/material';

interface ISidebarProps {
  width: number;
}

const SideBar = ({ width }: ISidebarProps) => {
  return (
    <Drawer variant="permanent" sx={{ width, borderRight: 'none' }}>
      <Box
        width={width}
        sx={{ display: 'flex', background: '#1976D2', height: '100%' }}
      >
        <Typography
          sx={{
            height: '5vh',
            width: '100%',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Expense Tracker
        </Typography>
      </Box>
    </Drawer>
  );
};

export default SideBar;
