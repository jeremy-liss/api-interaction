

var quoteObject = "";
function quotePaste() {
  document.getElementById("source").innerHTML = quoteObject.source;
  document.getElementById("translation").innerHTML = quoteObject.translation;
}

document.getElementById('quoteButton').addEventListener('click', function(){
  $.ajax({
    type: 'GET',
    url: 'https://eda-te-reo.herokuapp.com/api/proverbs',
    success: function (quote){
      quoteObject = quote;
      quotePaste()
    }

  });
})
