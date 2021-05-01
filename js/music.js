var songName; 
var songArtist; 
var accessToken; 

const getActivity = async () => {
    const data = { grant_type:'authorization_code',  code:'AQD5t5FVfcvg41CdlcIGEKrteYN4YsQHNWGhAtaQlLLVRPwFGR04s5_b8vhWqpoxXMYIJjMZeHtyjt0dnLnFBqx3coNG8YCk1zu4clr9cuARIp0W4s77Ch4b_rLQ5fDZ_yTnQLkAmKZDjK72iBHNG3OZfOGKGCINTJNdw0ihWPf_eMNYG0HoB9_juHtsvgRDTs13i_qA', redirect_uri:'https%3A%2F%2Fthomaspngo.com%2F'};

    const tokenRequest = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization' : "Basic " + 'OWNlZTAyYTgwZTJmNDM0YzgwY2I2ZDA2MTA2MjUxNjA6NDliMmZlYWQ0M2M1NDZhZmIzNTkwZjgwZjE5NjUyYTg='
        },
        body: JSON.stringify(data),
    }); 
    console.log(tokenRequest);
    const tokenObject = await tokenRequest.json(); 
    token = tokenObject.access_token; 
    
    const result = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        method: 'GET', 
        headers: { 'Authorization' : 'Bearer ' + token}
    });

    const info = await result.json(); 
    console.log(info);
        songName = info.items[0].track.name;
        console.log(songName)
        songArtist = info.items[0].track.artists[0].name;
        console.log(songArtist)
        var messasge = "i'm currently listening to &quot;" + songName + "&quot; by " + songArtist + " on spotify!"; 
        document.getElementById('spotify-activity').innerHTML = messasge; 
        return info; 
}
const object = getActivity(); 

/*
clientId = '9cee02a80e2f434c80cb6d0610625160';
clientSecret = '49b2fead43c546afb3590f80f19652a8';

https://accounts.spotify.com/authorize?client_id=9cee02a80e2f434c80cb6d0610625160&scope=user-read-recently-played&response_type=code&redirect_uri=https%3A%2F%2Fthomaspngo.com%2F

curl -H "Authorization: Basic OWNlZTAyYTgwZTJmNDM0YzgwY2I2ZDA2MTA2MjUxNjA6NDliMmZlYWQ0M2M1NDZhZmIzNTkwZjgwZjE5NjUyYTg=" -d grant_type=authorization_code -d code=AQD5t5FVfcvg41CdlcIGEKrteYN4YsQHNWGhAtaQlLLVRPwFGR04s5_b8vhWqpoxXMYIJjMZeHtyjt0dnLnFBqx3coNG8YCk1zu4clr9cuARIp0W4s77Ch4b_rLQ5fDZ_yTnQLkAmKZDjK72iBHNG3OZfOGKGCINTJNdw0ihWPf_eMNYG0HoB9_juHtsvgRDTs13i_qA -d redirect_uri=https%3A%2F%2Fthomaspngo.com%2F https://accounts.spotify.com/api/token
*/

