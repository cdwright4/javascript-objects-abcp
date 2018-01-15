var playlist = { artist: 'songtitles'};
console.log(playlist)

function updatePlaylist (playlist, artist, songtitle) {
  
  playlist.assign(playlist,{artist: songtitle});
  return playlist;
  
}

