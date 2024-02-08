import { Paper, Typography, Stack } from '@mui/material'

function Statistics(props){
    return (
        <Paper sx={{padding : '32px'}} elevation={4}>   
            <Stack spacing={2} >
                <Typography variant='h5' align='center'>
                    Number of Videos : {props.stats.numOfVideos}
                </Typography>
                <Typography variant='h5' align='center'>
                    Number of Available Videos : {props.stats.numOfVideosAvailable}
                </Typography>
                <Typography variant='h5' align='center'>
                    Total Duration : {props.stats.totalDuration}
                </Typography>
                <Typography variant='h5' align='center'>
                    Average Duration : {props.stats.avgDuration}
                </Typography>           
            </Stack>
        </Paper>
    );
}

export default Statistics;