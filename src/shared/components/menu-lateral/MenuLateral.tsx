import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';

interface IMenuLateralProps {
  children?: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({children}) => {
  const theme = useTheme();

  return (
    <>
      {/* permanent= Se mantém na tela */}
      <Drawer variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" />
          </Box>  

          <Divider />

          {/* Ocupa todo o espaço restante disponível */}
          <Box flex={1}> 
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer>

      {/* spacing(28) = 28 * 4 = 112px */}
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};