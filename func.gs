function doList(e){
  var r = listing(e.split(spacing))
  var playlist = createPlayList();
  var id = playlist.id
  r.forEach(
    function(e,i,a){
      insert(e,id)
    }
  )
  return "done";
}


function listing(array){
  var r= []
  array.forEach( function(e,i,a){
    e = e.substr(prefixe.length)
    var art = e.substr(0, e.indexOf(separator) )
    var nam = e.substring(e.lastIndexOf(separator) +1, e.length-4 )
   var bfr = new Song(nam,art)
   if (bfr.id != null)  r[r.length] =bfr
  })
  return r
}


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};