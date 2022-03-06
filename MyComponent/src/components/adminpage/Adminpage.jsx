import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, Typography, FormGroup, FormControl } from '@material-ui/core'
import { getTournament, deleteTournament } from './api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '50%',
        '& > *': {
            marginTop: 20
        }
    },
    table: {
        width: '90%',
        margin: '10px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    },
    button: {
        '& > *': {
            fontSize: 18

        }
    }
})


const Adminpage = ({ setAdminUser }) => {
    const [tournament, setTournament] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllTournament();
    }, []);

    const deleteTournamentData = async (id) => {
        await deleteTournament(id);
        getAllTournament();
    }

    const getAllTournament = async () => {
        let response = await getTournament();
        setTournament(response.data);
    }


    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">WELCOME ADMIN</Typography>
            <FormControl>
                <Button color="primary" variant="contained" style={{ marginRight: 10, width: 400, height: 80, fontSize: 20 }} component={Link} to={`/AddTournament/`}>Add Tournament</Button> {/* change it to user.id to use JSON Server */}
            </FormControl>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>Id</TableCell>
                        <TableCell>GameName</TableCell>
                        <TableCell>Gametype</TableCell>
                        <TableCell>Player Participate</TableCell>
                        <TableCell>Total Player</TableCell>
                        <TableCell>Place</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Entry Fees</TableCell>
                        <TableCell>Win Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tournament.map((tournament) => (
                        <TableRow className={classes.row} key={tournament.id}>
                            <TableCell>{tournament._id}</TableCell> {/* change it to user.id to use JSON Server */}
                            <TableCell>{tournament.gamename}</TableCell>
                            <TableCell>{tournament.gametype}</TableCell>
                            <TableCell>{tournament.playerparticipate}</TableCell>
                            <TableCell>{tournament.totalplayer}</TableCell>
                            <TableCell>{tournament.place}</TableCell>
                            <TableCell>{tournament.startdate}</TableCell>
                            <TableCell>{tournament.enddate}</TableCell>
                            <TableCell>{tournament.entryfees}</TableCell>
                            <TableCell>{tournament.winprice}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{ marginRight: 10 }} component={Link} to={`/EditTournament/${tournament._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                                <Button color="secondary" variant="contained" onClick={() => deleteTournamentData(tournament._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br /><br /><br /><br /><br /><br />
            &nbsp;&nbsp;&nbsp;<div className="button" style={{ marginRight: 10, width: 100, height: 30,fontSize: 20,alignItems:'center' }} onClick={() => setAdminUser({})} >Logout</div>
                </FormGroup >
    )
}

export default Adminpage;