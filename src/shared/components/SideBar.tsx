import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { routes } from '../config/routes';
import { useNavigate } from 'react-router';

interface ISidebarProps {
  width: number;
}

const SideBar = ({ width }: ISidebarProps) => {
  const navigate = useNavigate();

  const navigationHandler = (path: string) => {
    navigate(path);
  };

  return (
    <Drawer variant="permanent" sx={{ width, borderRight: 'none' }}>
      <Box
        width={width}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: '#1976D2',
          height: '100%',
        }}
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
        {routes.map((route, index) => (
          <List key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigationHandler(route.path)}>
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText>{route.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        ))}
      </Box>
    </Drawer>
  );
};

export default SideBar;
