import React, { useState } from 'react';
import { Avatar, Badge, Box, Button, ButtonGroup, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { overwriteOrderItem, removeOrderElement } from '../../../../store/actions/servicesActions';

export default function OrderListItem({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.numbers);
    const [price, setPrice] = useState(item.price * item.numbers);

    const decrease = () => {
        setCount(count - 1);
        setPrice(price - item.price);
        dispatch(overwriteOrderItem(item.id, count - 1))
    }
    
    const increase = () => {
        setCount(count + 1);
        setPrice(item.price * (item.numbers + 1));
        dispatch(overwriteOrderItem(item.id, count + 1))
    }

    const deleteItem = () => {
        dispatch(removeOrderElement(item.id))
    }

    return (
    <>        
        <ListItem
            secondaryAction={
                <IconButton onClick={deleteItem} edge="end" aria-label="delete">
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
                primary={`${price.toFixed(2)} $`}
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
