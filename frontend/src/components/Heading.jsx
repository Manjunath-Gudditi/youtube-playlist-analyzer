import { Paper, Typography } from '@mui/material'

function Heading(){
    return (
        <Paper sx={{padding : '32px'}} elevation={4}>
            <Typography variant='h4' align='center'>
                Youtube Playlist Analyzer
            </Typography>
        </Paper>
    );
}

export default Heading;