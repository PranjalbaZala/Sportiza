import react, { useState, useEffect } from 'react';
import './Homepage.css';
import Navbar from '../Navbar';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getTournament } from '../adminpage/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
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
    }
})

    const Homepage = ({ setLoginUser }) => {
    const [tournament, setTournament] = useState([]);
    const classes = useStyles();

        useEffect(() => {
            getAllTournament();
        }, []);

        const getAllTournament = async () => {
            let response = await getTournament();
            setTournament(response.data);
        }
        return (
            <div className="">
                <Navbar />
                <h1>WELCOME</h1><br /><br />
                <h2>Available Tournaments You can Participate</h2>
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
                            <TableCell>Participate</TableCell>
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
                                    <div className="button" onClick={()=>alert('You have Successfully Paticipated')}>Participate</div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <br /><br /><br /><br /><br /><br />
                &nbsp;&nbsp;&nbsp;<div className="button" style={{width:70}} onClick={() => setLoginUser({})} >Logout</div>
            </div>
        )
    }

export default Homepage