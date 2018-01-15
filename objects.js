var playlist = { artist: 'songtitles'};
//console.log(playlist)

function updatePlaylist (playlist, artist, songtitle) {
  
 // var pandoralist = {};
  return  Object.assign({},playlist,{[artist]: songtitle});
	//return pandoralist;
  //console.log(playlist);
    
}
