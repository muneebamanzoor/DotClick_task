import './index.css'; // Import your component-specific CSS file
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from './Card';
import MainWhite from './MainWhite';

const App = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2 className="login-heading">LOGDN</h2>

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Current Requests" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Ongoing stays" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemText primary="Previous stays" />
        </ListItemButton>
        <Divider />
        <ListItemButton
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemText primary="Reports" />
        </ListItemButton>
      </List>
    </Box>


        <br />
        <center><div className='log-help'>
        <Button variant="contained" color="success">Log-Out</Button>
      <ListItemText className="help-desk-text"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'Help Desk'}<br/>
              {'786-864-9988'}
            </React.Fragment>
          }
        />
        </div></center>


        {/* <p className="help-desk-text">Help Desk</p> */}
      </div>
      <div className="right-section">
        <h3 className="green-text">You currently have 3 requests</h3>
        <div className='main-subsection-one'>
          <MainWhite/>
        <div>
        <br/>
          <div className="progress-bar">
            <div className="progress received">RECEIVED</div>
            <div className="progress negotiating">NEGOTIATING</div>
            <div className="progress completed">COMPLETED</div>
          </div>
        </div>
        </div>
        <br />
        <div className='main-subsection-two'>
        <MainWhite/>
        <div>
        <br/>
          <div className="progress-bar">
            <div className="progress completed-filled">COMPLETED</div>
          </div>
        </div>
<br/>
        <div className='row-card'>  
          <button className='redbutton'>Rare Find</button>
          <Card className='card'/>
          <Card className='card'/>
          <Card className='card'/>
        </div> 
        </div>
        <img className='chatimg' src='https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/134-512.png'></img>
      </div>      
    </div>
  );
};

export default App;
