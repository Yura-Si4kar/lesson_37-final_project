import React, { useState } from 'react';
import { Avatar, Badge, Box, Button, ButtonGroup, IconButton, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { overwriteOrderListItem, removeOrderItem } from '../../../../store/actions/actions';

export default function OrderListItem({ item }) {
    const dispatch = useDispatch();
    const [count, setCount] = useState(item.numbers);
    const [price, setPrice] = useState(item.price * item.numbers);

    function deleteItem(e) {
        e.stopPropagation();
        dispatch(removeOrderItem(item.id));
    }

    const remove = () => {
        setCount(count - 1);
        setPrice(price - item.price);
        dispatch(overwriteOrderListItem({...item, numbers: count - 1}))
    }
    
    const add = () => {
        setCount(count + 1);
        setPrice(item.price * (item.numbers + 1));
        dispatch(overwriteOrderListItem({...item, numbers: count + 1}))
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
                primary={item.title}
            />
            <ListItemText
                primary={`${price} $`}
            />
            <Box style={{ display: 'flex', justifyContent: 'space-between' }}>   
                <ButtonGroup>      
                    <Button
                        aria-label="reduce"
                        onClick={remove}
                        >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={add}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                </ButtonGroup>
            </Box>    
        </ListItem>
    </>
  )
}
