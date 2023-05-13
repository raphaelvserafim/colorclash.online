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
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import LoopIcon from '@mui/icons-material/Loop';
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
    const [startGame, setStartGame] = React.useState(1);
    const [checkingOut, setCheckingOut] = React.useState(0);
    const [myChoice, setMyChoice] = React.useState(0);
    const [youWon, setYouWon] = React.useState(false);

    React.useEffect(() => {

        if (startGame === 1) {
            const intervalId = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 1) {
                        setStartGame(0);
                        setCheckingOut(1);
                        clearInterval(intervalId);
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

    }, [startGame]);

    React.useEffect(() => {
        if (checkingOut === 1) {
            setTime(10);
            setTimeout(() => {
                setStartGame(1);
                setCheckingOut(0);
            }, 4000)
        }

        const numeroAleatorio = Math.floor(Math.random() * 2) + 1;

        console.log("numeroAleatorio", numeroAleatorio);

        if (myChoice === numeroAleatorio) {
            console.log("voce ganhou");
            setYouWon(true)
        }

    }, [checkingOut]);


    const choosingNumber = (number: number) => {
        console.log("number", number);
        setMyChoice(number)
    }

    return (
        <Paper sx={{ padding: 1 }} className='card-sala'>
            <IconButton color="primary" aria-label="go back" component="label">
                <ArrowBackIosIcon />
            </IconButton>

            <Grid container >
                <Grid md={12} xs={12} mb={2} style={{ textAlign: 'center' }}>
                    <Typography component="span" className='inGameRoomName'>SALA 233</Typography>
                </Grid>
                <Grid md={12} mb={2} container justifyContent="space-between">
                    <Grid item md={6} style={{ textAlign: 'center' }}>
                        <Button onClick={() => { choosingNumber(2) }}>
                            <Paper sx={{ backgroundColor: 'black', width: 70, height: 70 }} >
                                <span className='number-game'>2</span>
                            </Paper>
                        </Button>
                    </Grid>
                    <Grid item md={4} style={{ textAlign: 'center' }}>
                        <Typography variant="h4" component="div" className='stopwatch'>
                            {checkingOut ? <LoopIcon /> : time}
                            <Confetti
                                active={youWon}
                                config={config} />
                        </Typography>
                    </Grid>
                    <Grid item md={6} style={{ textAlign: 'center' }}>
                        <Button onClick={() => { choosingNumber(1) }}>
                            <Paper sx={{ backgroundColor: 'red', width: 70, height: 70 }} >
                                <span className='number-game'>1</span>
                            </Paper>
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
                                secondary={`esoclheu ${myChoice}`}
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
