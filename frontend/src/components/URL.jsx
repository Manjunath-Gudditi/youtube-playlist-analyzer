import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react';

function URL(props){
    const [playlistUrl, setPlaylistUrl] = useState("");

    return (
        <Paper sx={{padding : '32px'}} elevation={4}>   
            <Stack spacing={2} >
                <Typography variant='h5' align='center'>
                    Playlist URL
                </Typography>
                <TextField 
                    label = 'Enter Playlist URL Here'
                    value={playlistUrl}
                    onChange={(event) => {setPlaylistUrl(event.target.value)}}
                    required
                />
                <Button variant='contained' onClick={() => { props.getStats(playlistUrl);}}>
                    Analyze
                </Button>
            </Stack>
        </Paper>
    );
}

export default URL;