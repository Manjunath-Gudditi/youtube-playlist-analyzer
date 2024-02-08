import express from 'express';
import cors from 'cors';
import axios from 'axios';
import * as cheerio from 'cheerio';
import secToTime from './timeUtil.js';

const app = express();
const port = 4000;
app.use(cors());

app.get("/",  async(req, res) => {
    const result = await axios.get(req.query.url);
    const $ = cheerio.load(result.data);
    const $script = $('html > body > script:contains("var ytInitialData")');
    const ytInitialData = JSON.parse($script.text().match(/{.*}/)[0]);

    let numOfytVideos = ytInitialData.header.playlistHeaderRenderer.numVideosText.runs[0].text;
    let ytVideos = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].playlistVideoListRenderer.contents;
    let numOfytVideosAvailable = ytVideos.length;

    let totalDurationOfytVideosInSec = ytVideos.reduce((totalDuration, currytVideo) => (totalDuration + parseInt(currytVideo.playlistVideoRenderer.lengthSeconds)), 0);
    let avgDurationOfytVideosInSec = Math.floor(totalDurationOfytVideosInSec / ytVideos.length);
    
    res.send({numOfVideos: numOfytVideos, 
        numOfVideosAvailable: numOfytVideosAvailable,
        totalDuration: secToTime(totalDurationOfytVideosInSec), 
        avgDuration: secToTime(avgDurationOfytVideosInSec)});

});

app.listen(port, () => {console.log(`Server Listening on Port : ${port}`)});