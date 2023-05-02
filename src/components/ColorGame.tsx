import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Confetti from 'react-dom-confetti';
import Button from '@mui/material/Button';

const config = {
    angle: "350",
    spread: "360",
    startVelocity: "100",
    elementCount: "200",
    dragFriction: "0.13",
    duration: "3160",
    stagger: "13",
    width: "12px",
    height: "13px",
    perspective: "54px",
    colors: ["#000", "#f00"]
};

export default function ColorGame() {
    const [time, setTime] = React.useState(10);

    React.useEffect(() => {
        setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);
    }, []);

    React.useEffect(() => {
        if (time <= 0) {
            setTime('...');
            setTimeout(() => {
                setTime(10);
            }, 4000)

        }
    }, [time]);

    return (
        <Paper sx={{ padding: 1 }}>
            <Grid container>
                <Grid md={12} xs={12} mb={2} style={{ textAlign: 'center' }}>
                    <Typography component="span" className='inGameRoomName'>SALA 233</Typography>
                </Grid>
                {/* <Grid md={12} xs={12} mb={2} style={{ textAlign: 'center' }}>
                    <AvatarGroup >
                        <Avatar sx={{ width: 20, height: 20 }} alt="Karol" src="/static/images/avatar/1.jpg" />
                        <Avatar sx={{ width: 20, height: 20 }} alt="Raphael" src="/static/images/avatar/2.jpg" />
                        <Avatar sx={{ width: 20, height: 20 }} alt="Jao" src="/static/images/avatar/3.jpg" />
                    </AvatarGroup>
                </Grid> */}

                <Grid md={12} mb={2} container justifyContent="space-between">
                    <Grid item md={6} style={{ textAlign: 'center' }}>
                        <Button>
                            <Paper sx={{ backgroundColor: 'black', width: 70, height: 70 }} />
                        </Button>
                    </Grid>
                    <Grid item md={4} style={{ textAlign: 'center' }}>
                        <Typography variant="h4" component="div" className='stopwatch'>
                            {time}
                            <Confetti active={time === 0} config={config} />
                        </Typography>
                    </Grid>
                    <Grid item md={6} style={{ textAlign: 'center' }}>
                        <Button>
                            <Paper sx={{ backgroundColor: 'red', width: 70, height: 70 }} />
                        </Button>
                    </Grid>
                </Grid>

                <Grid item md={12} mb={2}  >
                    <List>
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

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Karol" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                                primary="Karol"
                                secondaryTypographyProps={{ variant: 'caption' }}
                                secondary="escolheu"
                            />
                        </ListItem>

                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Joao" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primaryTypographyProps={{ variant: 'subtitle1' }}
                                primary="Joao"
                                secondaryTypographyProps={{ variant: 'caption' }}
                                secondary="escolheu"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Paper>
    );
}
