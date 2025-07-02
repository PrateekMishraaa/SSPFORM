import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //const theme = useTheme();
  //const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeItem, setActiveItem] = useState('State');


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const logoutHandler = async()=>{
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/logout`);
      if(res.status===200){
         localStorage.removeItem('district') 
         localStorage.removeItem('state');
         localStorage.removeItem('role');
         localStorage.removeItem('token') 
         navigate("/login");
      }
    } catch (error) {
      console.log("error",error)
    }
  }
 


const handleListItemClick = async (action) => {
  setActiveItem(action);
  if (action === 'State') {
    navigate("/district");
  } else if (action === 'Logout') {
    // dummy logout or redirect logic
    logoutHandler();
    console.log('Logging out...');
  } 
};




  const drawerContent = (
    <div>
      {/* <Toolbar />
      <Divider /> */}
      <List>
  {['State', 'Logout'].map((text) => (
    <ListItem button key={text} onClick={() => handleListItemClick(text)} style={{border:"1.5px ridge", marginBottom:"5px",backgroundColor: activeItem === text ? "#1976d2" : "transparent", color: activeItem === text ? "#fff" : "inherit",}}>
      <ListItemText primary={text} primaryTypographyProps={{ style: { fontWeight: '800' } }} />
    </ListItem>
  ))}
</List>

    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}

      {/* Top AppBar
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, fontSize: 24 }}
            >
              ☰ 
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            My App
          </Typography>
          <IconButton style={{Left:"0px"}}>Logout</IconButton>
        </Toolbar>
      </AppBar> */}

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: drawerWidth },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              marginTop: '40px'
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        {children}
        
      </Box>
    </Box>
  );
};

export default Layout;
