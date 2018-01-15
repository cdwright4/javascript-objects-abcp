var playlist = { artist: 'songtitles'};
//console.log(playlist)

function updatePlaylist (playlist, artist, songtitle) {
  
  var pandoralist = {};
  pandoralist = Object.assign(playlist,{[artist]: songtitle});
	return pandoralist;
  
    
}

function