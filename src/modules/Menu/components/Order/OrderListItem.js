import React, { useState } from 'react';
import { Avatar, Badge, Box, Button, ButtonGroup, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function OrderListItem({ item, deleteItem, overwriteElement }) {
    const [count, setCount] = useState(item.numbers);
    const [price, setPrice] = useState(item.price * item.numbers);

    const decrease = () => {
        setCount(count - 1);
        setPrice(price - item.price);
        overwriteElement(item.id, count - 1)
    }
    
    const increase = () => {
        setCount(count + 1);
        setPrice(item.price * (item.numbers + 1));
        overwriteElement(item.id, count + 1)
    }

    return (
    <>        
        <ListItem
            secondaryAction={
                <IconButton onClick={() => deleteItem(item.id)} edge="end" aria-label="delete">
                <DeleteIcon />
                </IconButton>
            }
            >
            <ListItemAvatar>
                <Avatar>
                    <Badge color="secondary" badgeContent={count}></Badge>    
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.name}
            />
            <ListItemText
                primary={`${price} $`}
            />
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>   
                <ButtonGroup>      
                    <Button
                        aria-label="reduce"
                        onClick={decrease}
                        >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={increase}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </Box>    
        </ListItem>
    </>
  )
}
