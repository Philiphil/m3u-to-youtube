var Song = function (name,artiste) {
  this.Name =name
   this.Artist = artiste

  	var str = ""
    if( this.Name.toLowerCase().indexOf( this.Artist.toLowerCase() ) > -1){
      str= name
    }else{
      str= this.Artist+" "+this.Name
    }
    this.String = str.replace(/\(.*?\)/,"")
    this.id = searchVideoByObject(this)
}