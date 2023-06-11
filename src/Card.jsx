import React from 'react';
import ReactDOM from 'react-dom';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Card = () => {

    return (
        <>
        <div className="card">
          <div className="image-container">
            <center><img className='image-h' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Holiday_Inn_Logo.svg/1200px-Holiday_Inn_Logo.svg.png" alt="Green Image" /></center>
          </div>
          <div className="sub-card">
            <p className="grey-paragraph">1.5 miles away from job location</p>
            <div className="columns">
              <div className="column">
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
                    {'Singles: 100$'}<br/>
                    {'Doubles: 150$'}
                  </React.Fragment>
                }
              />
              </div>
              <div className="column">
              <Button variant="contained" color="success">Book Now</Button>
              </div>
            </div>
          </div>
        </div>

        </>
    );

}

export default Card;