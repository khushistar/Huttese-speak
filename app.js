var inputText = document.querySelector("#input");
var button = document.querySelector("#translate-button");
var outputText = document.querySelector("#translated-output");

function getUrl(input) {
  return (
    "https://api.funtranslations.com/translate/huttese.json" +
    "?" +
    "text=" +
    input
  );
}
function handleError(error) {
  alert("Something went wrong with server, please wait and try again");
}
function handleclick() {
  var input = inputText.value;
  fetch(getUrl(input))
    .then((response) => response.json())
    .then((result) => {
      var output = result.contents.translated;
      outputText.innerText = output;
    })
    .catch(handleError);
}

button.addEventListener("click", handleclick);
