var textInput, button, result;

function setup() {
  noCanvas();

  textInput = createElement("textarea");
  textInput.position(20, 20);
  textInput.style("width", "600px");
  textInput.style("height", "200px");
  textInput.style("font-family", "Verdana");
  textInput.style("font-size:25px");
  textInput.style("resize", "none");

  button = createButton("Bionify!");
  button.position(textInput.x, textInput.y + textInput.height + 10);
  button.style("font-size:25px");
  button.style("font-family", "Lucida Handwriting");

  button.mousePressed(bionify);
}

function bionify() {
  var text = textInput.value();
  var bionicText = convertToBionic(text);
  
  if (result){
    result.remove();
  }

  result = createP(bionicText).position(
    20,
    textInput.y + textInput.height + button.height + 20
  );

  result.style("font-family", "Verdana");
  result.style("max-width", "600px");
  
  
}

function convertToBionic(text) {
  var words = text.split(/(\W+)/);

  var bionicWords = words.map((word) => {
    if (word.match(/\w{3,}/)) { 
      
      var firstLetters = word.substring(0, Math.ceil(word.length / 3));
      var remainingLetters = word.substring(firstLetters.length);

      return `<b>${firstLetters}</b>${remainingLetters}`;
    } else {
      return word; 
    }
  });

  return bionicWords.join(""); 
}
