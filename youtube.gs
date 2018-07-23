function searchVideoByObject(o) {
  var results = YouTube.Search.list('id,snippet', {q: o.String, maxResults: 25,chart: 'mostPopular'});
  var r = []
  
  for(var i in results.items) {
    var item = results.items[i];
    var titre = item.snippet.title.toLowerCase()
    var desc = item.snippet.description.toLowerCase()
    
    
    if (titre.indexOf("live") == -1
        && titre.indexOf("full album") == -1 
       && titre.indexOf("cover") == -1 
         && titre.indexOf("en vivo") == -1 
    && titre.indexOf("instrumental") == -1 
    && titre.indexOf(o.Artist) != -1
    ){
      return item.id.videoId
    }
  }
  //statistics seems to bug 
    var like_bfr=0;
    var video_bfr=null;
    for(var i in r){
      if (i.statistics.likeCount > like_bfr){
        like_bfr = i.statistics.likeCount 
        video_bfr = i.id.videoId;
      }
    }
  
    return video_bfr;
  
}

function createPlayList() {
 var i = playlistsInsert('snippet,status',
      {'onBehalfOfContentOwner': ''},
      {'snippet.title': makeid(),
       'snippet.description': 'exported',
       'status.privacyStatus': 'unlisted'
      });
 return i
}

function playlistsInsert(part, params, properties) {
  var resource = createResource(properties); // See full sample for function
  params = removeEmptyParams(params); // See full sample for function

  var response = YouTube.Playlists.insert(resource, part);
  return response
}


 function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function playlistItemsInsert(part, params, properties) {
  var resource = createResource(properties); // See full sample for function
  params = removeEmptyParams(params); // See full sample for function

  var response = YouTube.PlaylistItems.insert(resource,
      part,
      params);
  printResults(response);
}

function insert(video,playlist) {
  playlistItemsInsert('snippet',
      {'onBehalfOfContentOwner': ''},
      {'snippet.playlistId': ''+playlist+'',
       'snippet.resourceId.kind': 'youtube#video',
       'snippet.resourceId.videoId': ''+(video.id)+'',
       'snippet.position': ''
      });
}

