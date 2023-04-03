import React, { useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function TablesItem({table}) {
    const [expanded, setExpanded] = useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
    <React.Fragment>    
        <Grid item xs={4}>            
            <Card>
                <CardMedia
                    component='img'
                    height='200'
                    image={table.img}
                    alt={`table` + table.id}
                    />
                <CardContent>
                    <Typography>
                        {table.name}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Typography>
                        Info        
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
                    <Typography paragraph>Вага:  грам</Typography>
                    <Box>
                        <Box style={{marginBottom: 20}}>
                        <Typography variant='span'>Сума:</Typography>

                        </Box>
                        <Box  style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Button variant='contained'>Видалити</Button>
                            <Button variant='contained'>Розрахувати</Button>
                        </Box>
                    </Box>
                    </CardContent>
                </Collapse>    
            </Card>
        </Grid>
    </React.Fragment>
  )
}
