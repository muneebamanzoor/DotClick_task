import React from 'react';
import ReactDOM from 'react-dom';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const MainWhite = () => {

    return (
        <>
        <div className="upper-subsection">
        <ListItemText className="hospital-name"
          primary="St Jude's Hospital"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

              </Typography>
              {'Sarasota, FL. 33178'}
            </React.Fragment>
          }
        />
        <Divider className='vertical-divider' orientation="vertical" variant="middle" flexItem />
        <ListItemText className="date"
          primary="10"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'October'}
            </React.Fragment>
          }
        />
        
        <ListItemText className="date"
          primary="17"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'December'}
            </React.Fragment>
          }
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <ListItemText className="rooms"
          primary="20 Rooms"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'10 singles, 10 doubles'}
            </React.Fragment>
          }
        />
        </div>

        </>
    );

}

export default MainWhite;