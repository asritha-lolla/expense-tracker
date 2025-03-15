import { Box, Grid2 as Grid } from '@mui/material';
import { Outlet } from 'react-router';
import Header from '../Header';
import SideBar from '../SideBar';

const AppLayout = () => {
  const drawerWidth = 200;
  return (
    <Grid container height="100vh">
      <Grid size={12} height={'5vh'}>
        <Header drawerWidth={drawerWidth} />
      </Grid>
      <Grid size={2} height={'95vh'} width={drawerWidth}>
        <SideBar width={drawerWidth} />
      </Grid>
      <Grid size="grow">
        <Box p={1}>
          <Outlet />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AppLayout;
