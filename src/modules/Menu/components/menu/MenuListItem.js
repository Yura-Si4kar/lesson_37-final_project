import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Badge, Box, Button, ButtonGroup, CardHeader, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:1
  },
  rating: {
    marginLeft: 30 + 'px',
  },
  addButton: {
    fontSize: '16px',
  }
}))

export default function MenuListItem({ type, handleAddClick }) {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(type.rate);
  const [count, setCount] = useState(1);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  return (
    <>
      <div className='dishes-list-box'>
        <Card className='dishes-list-item' sx={{ width: '100%' }}>
          <CardHeader></CardHeader>
          <CardMedia
            component="img"
            height="194"
            image={type.img}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              {type.name}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Typography variant='p' color='yellowgreen'>
              Ціна: {type.price} $
            </Typography>
            <Typography variant='span' className={classes.rating}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {type.dsc && 
                <Typography paragraph>
                  Опис: {type.dsc}
                </Typography>
              }              
              <Box>
                <Box style={{marginBottom: 20}}>
                  <Typography variant='span'>Кількість:</Typography>
                  <Badge style={{left: 20}} color="secondary" badgeContent={count}></Badge>
                </Box>
                <Box  style={{display: 'flex', justifyContent: 'space-between'}}>
                  <ButtonGroup>
                    <Button
                      aria-label="reduce"
                      onClick={() => {
                        setCount(Math.max(count - 1, 0));
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                      aria-label="increase"
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                  <Button variant='contained' onClick={() => handleAddClick({ ...type, numbers: count })}>Add</Button>
                </Box>
              </Box>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}