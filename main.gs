function doGet(e){;
  switch(e.parameter.page){
    default : return HtmlService.createTemplateFromFile('index').evaluate()
  }
}