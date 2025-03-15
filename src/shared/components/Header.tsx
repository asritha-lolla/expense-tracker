import { AppBar, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

interface IHeaderProps {
  drawerWidth: number;
}

const Header = ({ drawerWidth }: IHeaderProps) => {
  return (
    <AppBar
      sx={{
        height: '5vh',
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        background:'none',
        boxShadow:'none'
      }}
    >
      <Toolbar
        sx={{
          minHeight: '5vh !important',
          padding: 0,
          justifyContent: 'flex-end',
        }}
      >
        <PersonIcon color='primary'/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
