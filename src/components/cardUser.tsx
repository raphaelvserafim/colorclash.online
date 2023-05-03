import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';

export default function cardUserGame() {

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Raphael" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primaryTypographyProps={{ variant: 'subtitle1' }}
                primary="Raphael"
                secondaryTypographyProps={{ variant: 'caption' }}
                secondary="escolheu"
            />
        </ListItem>
    );
}