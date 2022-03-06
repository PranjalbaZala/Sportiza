import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addTournament } from './api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    gamename: '',
    gametype: '',
    playerparticipate: '',
    totalplayer: '',
    place: '',
    startdate: '',
    enddate: '',
    entryfees: '',
    winprice: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddTournament = () => {
    const [tour, setTournament] = useState(initialValue);
    const { gamename,gametype,playerparticipate,totalplayer,place,startdate,enddate,entryfees,winprice } = tour;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setTournament({...tour, [e.target.name]: e.target.value})
    }

    const addTournamentDetails = async() => {
        await addTournament(tour);
        history.push('/adminpage');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Tournament</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Game Name</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='gamename' value={gamename} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Game Type</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='gametype' value={gametype} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Player Participate</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='playerparticipate' value={playerparticipate} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Total Player</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='totalplayer' value={totalplayer} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Place</InputLabel>
                <Input type="text" onChange={(e) => onValueChange(e)} name='place' value={place} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Start Date</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='startdate' value={startdate} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">End Date</InputLabel>
                <Input type="date" onChange={(e) => onValueChange(e)} name='enddate' value={enddate} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Entry Fees</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='entryfees' value={entryfees} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Win Price</InputLabel>
                <Input type="number" onChange={(e) => onValueChange(e)} name='winprice' value={winprice} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addTournamentDetails()}>Add Tournament</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddTournament;