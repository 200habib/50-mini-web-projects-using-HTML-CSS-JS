$('#button').click(function(){translate();});

function translate(){
  
  var sourceText = $('textarea#sourceText').val();
  console.log(sourceText)
  var sourceLang = 'fr';
  var targetLang = 'zh';
  console.log(sourceText);
  
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  console.log(url);
  
  $.getJSON(url, function(data) {
    console.log(data);
      $('textarea#resultText').val(data[0][0][0]);
    });

}