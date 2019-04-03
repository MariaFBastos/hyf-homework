var songDatabase = [];

function addSongToDatabase (song) {
  var newSong = new Object;
  newSong.songId = songDatabase.length + 1
  newSong.title = song.title
  newSong.artist = song.artist
  
  songDatabase.push(newSong)
}
var songA = {title:"My baby", artist: "Soggy socks"};
var songB = {title:"3 nails in wood", artist: "The carpenters"};
var songC = {title:"Blacker than black", artist: "Instant coffee"};
var songD = {title:"When is enough too little", artist: "The spies girls"};

    addSongToDatabase(songA);
    addSongToDatabase(songB);
    addSongToDatabase(songC);
    addSongToDatabase(songD);

console.log(songDatabase)


function getSongByTitle(title){
    for (var i=0; i < songDatabase.length; i++){
        if (songDatabase[i].title === title){
           return songDatabase[i];
           console.log(songDatabase[i]);
        }
    }
}
getSongByTitle("Blacker than black")

var myPlaylist = [];

function addSongToMyPlaylist(title){
    var songsWanted = getSongByTitle(title)
    myPlaylist.push(songsWanted)
}
