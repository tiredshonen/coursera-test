var songName; 
var songArtist; 

const getActivity = async () => {
    const token = 'BQAykoQB1rt8y75HwZ2hRjqN8Tsd_693xJ8I3OVxgjQMf50o9cVs6bFa1IbX2NmtFMLssJdIVZGERbKpew3iyE8yLqu-dZyK7Ey3b4rnOVUYaLQ7o0dQPY9QI6iMxd_HBXJjK-ntrB3cNOLqZI0oFGA72ga1';
    const result = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        method: 'GET', 
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const data = await result.json(); 
    console.log(data);
        songName = data.items[0].track.name;
        console.log(songName)
        songArtist = data.items[0].track.artists[0].name;
        console.log(songArtist)
        var messasge = "i'm currently listening to &quot;" + songName + "&quot; by " + songArtist + " on spotify!"; 
        document.getElementById('spotify-activity').innerHTML = messasge; 
        return data; 
}
const object = getActivity(); 