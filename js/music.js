var songName; 
var songArtist; 
var accessToken = 'BQDF_cwWOz9FSKKcQHm6esMYJxxKLkr6H5B03jdkqnno1-px6xl4EJDSn0cMhoZy9zbLLx640xxBW0sPptMu0zKBlO2pisdGHrcun0J2cpF2x5P7936TQ66tf8fGpcB_E3ky8H7IeYryEUax4Ye2gJ2cCuX4'; 

const getActivity = async () => {
    //Get authorization code

   // var authRequest = await fetch('https://accounts.spotify.com/authorize?client_id=9cee02a80e2f434c80cb6d0610625160&scope=user-read-recently-played&response_type=code&redirect_uri=https%3A%2F%2Fthomaspngo.com%2F'); 


    //Use authorization code to get access token 

    //Use access token to get recently-played track
    const result = await fetch('https://api.spotify.com/v1/me/player/recently-played', {
        method: 'GET', 
        headers: { 'Authorization' : 'Bearer ' + accessToken}
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

curl -H "Authorization: Basic OWNlZTAyYTgwZTJmNDM0YzgwY2I2ZDA2MTA2MjUxNjA6NDliMmZlYWQ0M2M1NDZhZmIzNTkwZjgwZjE5NjUyYTg=" -d grant_type=authorization_code -d code=AQBqtEREPq5J5hLijgOSraDVa1ikcAIAmyixMf2fHWn_wcg3RCRw579TU2FK-yvDAfZYaViYPKI3ccawFy2fpYbUVroa84X7mE-hhFAYnQpRMa3IqmOy7AzDtywLIcEuHpbkTPEEkt9j0XNMgvKff5cJl0pBbxNG_Cq9HRxwXIuj8BCNkdhTW_1DlyO1ZqCAoVlD0hmf -d redirect_uri=https%3A%2F%2Fthomaspngo.com%2F https://accounts.spotify.com/api/token
*/
