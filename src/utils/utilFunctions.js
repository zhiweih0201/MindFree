export default function msToPostTime( ms , timestamp = null) {
    let seconds = ms / 1000;
    const hours = parseInt( seconds / 3600 ); 
    seconds = seconds % 3600; 
    const minutes = parseInt( seconds / 60 ); 
    seconds = seconds % 60;
    if (hours === 0 && minutes === 0) {
        return seconds === 1 ? `${seconds} second ago` : `${seconds} seconds ago`;
    } else if (hours === 0) {
        return minutes === 1 ? `${minutes} minute ago` : `${minutes} minutes ago`;
    }

    if(hours > 24 && timestamp !== null){
        let date = new Date(timestamp);
        date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
        return date;
    } else {
        return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    }

}