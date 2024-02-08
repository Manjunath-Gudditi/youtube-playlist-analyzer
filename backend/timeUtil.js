function secToTime(seconds){
    /**
     * 1 min = 60 sec
     * 1 hour = 60 min = 3600 sec
     * 1 day = 24 hours = 86400 sec
     * 1 year = 365 days = 8760 hours = 525600 mins = 31,536,000 secs
     */

    let years = Math.floor(seconds/31536000);
    seconds -= years*31536000;

    let days = Math.floor(seconds/86400);
    seconds -= days*86400;

    let hours = Math.floor(seconds/3600);
    seconds -= hours*3600;

    let mins = Math.floor(seconds/60);
    seconds -= mins*60;


    let time = "";
    (years > 0) && (time = `${years} year${(years>1?"s":"")}`);
    (days > 0) && (time = `${time} ${days} day${(days>1?"s":"")}`);
    (hours > 0) && (time = `${time} ${hours} hour${(hours>1?"s":"")}`);
    (mins > 0) && (time = `${time} ${mins} min${(mins>1?"s":"")}`);
    (seconds > 0) && (time = `${time} ${seconds} sec${(seconds>1?"s":"")}`);

    return time;
}

export default secToTime;