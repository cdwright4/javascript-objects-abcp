var playlist = { artist: 'songtitles'};
//console.log(playlist)

function updatePlaylist (playlist, artist, songtitle) {
  
  Object.assign(playlist,{artist: songtitle});
  console.log(playlist);
  return playlist;
  
}

