var poemDiv = document.getElementById("poem");
poemDiv.innerHTML += "<div class='poetry2 poetryBlock'></div><div class='poetry4 poetryBlock'></div><div class='poetry3 poetryBlock'></div><div class='poetry1 poetryBlock'></div><button type='button' id='play' class='poetryBlock'>Click to Shuffle! (Or Press or Hold Spacebar)</button>"



// This creates the JS elements for the holder divs for the four elements
var poetry1 = document.getElementsByClassName("poetry1")[0]
var poetry2 = document.getElementsByClassName("poetry2")[0]
var poetry3 = document.getElementsByClassName("poetry3")[0]
var poetry4 = document.getElementsByClassName("poetry4")[0]



//POEM 1
var frost1 = { // Storing these lines as objects
      text:"The woods are lovely, dark and deep,",
      id:10
    }

var frost2 = { // Storing these three attributes (text, id) in "object"
      text:"But I have promises to keep,",
      id:11
    }

var frost3 = {
      text:"And miles to go before I sleep,",
      id:12
    }

var frost4 = {
      text:"And miles to go before I sleep.",
      id:13
    }

        var frostStopping = [
          frost1, frost2, frost3, frost4
        ]


//POEM 2
var eliot1 = {
    text: "There is shadow under this red rock,",
    id:20
  }

var eliot2 = {
    text: "(Come in under the shadow of this red rock),",
    id:21
  }

var eliot3 = {
    text: "And I will show you something different from either",
    id:22
  }

var eliot4 = {
    text: "Your shadow at morning striding behind you",
    id:23
}

var eliot5 = {
    text: "Or your shadow at evening rising to meet you;",
    id:24
}

var eliot6 = {
    text: "I will show you fear in a handful of dust.",
    id:25
}

        var eliotWasteLand = [
          eliot1, eliot2, eliot3, eliot4, eliot5, eliot6
        ]


//POEM 3
var williams1 = {
      text:"You may tell that German College that their honor comes too late,",
      id:30
    }

var williams2 = {
      text:"But they must not waste repentance on the grizzly savant's fate.",
      id:31
    }

var williams3 = {
      text:"Though my soul may set in darkness, it will rise in perfect light;",
      id:32
    }

var williams4 = {
      text:"I have loved the stars too fondly to be fearful of the night.",
      id:33
    }

    var williamsOld = [
      williams1, williams2, williams3, williams4
    ]


//POEM 4
var whitman1 = {
      text:"In our sun-down perambulations, of late, through the outer parts of Brooklyn,",
      id:40
    }

var whitman2 = {
      text:"We have observed several parties of youngsters playing \"base\", a certain game of ball",
      id:41
    }

var whitman3 = {
      text:"Let us go forth awhile, and get better air in our lungs.",
      id:42
    }

var whitman4 = {
      text:"Let us leave our close rooms — the game of ball is glorious",
      id:43
    }

    var whitmanBall = [
      whitman1, whitman2, whitman3, whitman4
    ]



// These vars store the shuffled versions of the poems
// and generate the displayed versions of the shuffled poems at the end.


var shufflePoem1 = [];
var shufflePoem2 = [];
var shufflePoem3 = [];
var shufflePoem4 = [];

var printPoem1= [];
var printPoem2= [];
var printPoem3= [];
var printPoem4= [];



//The following functions swap the four poem contents around.
function swappy1() {
  shufflePoem1 = frostStopping.slice();

  // This sets up the variables we'll mlove around...
  var currentIndex = shufflePoem1.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shufflePoem1[currentIndex];
    shufflePoem1[currentIndex] = shufflePoem1[randomIndex];
    shufflePoem1[randomIndex] = temporaryValue;

  }
    return shufflePoem1;
}

function swappy2() {
  shufflePoem2 = eliotWasteLand.slice();
  var currentIndex = shufflePoem2.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shufflePoem2[currentIndex];
    shufflePoem2[currentIndex] = shufflePoem2[randomIndex];
    shufflePoem2[randomIndex] = temporaryValue;
  }
    return shufflePoem2;
}

function swappy3() {
  shufflePoem3 = williamsOld.slice();
  var currentIndex = shufflePoem3.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shufflePoem3[currentIndex];
    shufflePoem3[currentIndex] = shufflePoem3[randomIndex];
    shufflePoem3[randomIndex] = temporaryValue;

  }
    return shufflePoem3;
}

function swappy4() {
  shufflePoem4 = whitmanBall.slice();
  var currentIndex = shufflePoem4.length;
  var temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = shufflePoem4[currentIndex];
    shufflePoem4[currentIndex] = shufflePoem4[randomIndex];
    shufflePoem4[randomIndex] = temporaryValue;

  }
    return shufflePoem4;
}



// This calls all the functions to pull at the beginning when the page is loaded.
swappy1();
swappy2();
swappy3();
swappy4();

printy();
printPoem1.length = 0;
printPoem2.length = 0;
printPoem3.length = 0;
printPoem4.length = 0;

//This controls the spacebar control
window.onkeydown = function(e){
if(e.keyCode === 32){

  swappy1();
  swappy2();
  swappy3();
  swappy4();

  printy();
  printPoem1.length = 0;
  printPoem2.length = 0;
  printPoem3.length = 0;
  printPoem4.length = 0;

  }

}


//This runs the same functions as above just on click.
document.getElementById('play').onclick = function(){ // ALL the action happens upon the click


  // Runs the swappy function
  swappy1();
  swappy2();
  swappy3();
  swappy4();

  printy();
  printPoem1.length = 0;
  printPoem2.length = 0;
  printPoem3.length = 0;
  printPoem4.length = 0;

  }



//This displays the shuffled poems
function printy()
{
      document.getElementById("poem1BG").style.opacity = 0;

      var counter1 = 0;
      var counter2 = 0;
      var counter3 = 0;
      var counter4 = 0;


  poetry1.innerHTML = " ";
  for(var i=0;i<shufflePoem1.length;i++){

    // This prints the text
    poetry1.innerHTML += "<p id=id_" + shufflePoem1[i].id + ">" + shufflePoem1[i].text + "</p>";

    // This checks to see if the shuffled matches the original
    if(frostStopping[i] == shufflePoem1[i]){

      console.log("SnowMatch");

      // This highlights the correct poem matching lines
      document.getElementById("id_" + shufflePoem1[i].id).className = "rightPlace";
      counter1++;

      }
    }
    // This adjusts the opacity of the background images
    document.getElementById("poem1BG").style.opacity = counter1 / (frostStopping.length+1);






  poetry2.innerHTML = " ";
  document.getElementById("poem2BG").style.opacity = 0;

  for(var i=0;i<shufflePoem2.length;i++){

    poetry2.innerHTML += "<p id=id_" + shufflePoem2[i].id + ">" + shufflePoem2[i].text + "</p>";

    if(eliotWasteLand[i] == shufflePoem2[i]){
      console.log("WasteMatch")
      document.getElementById("id_" + shufflePoem2[i].id).className = "rightPlace"
      counter2++;


    }
  }

  document.getElementById("poem2BG").style.opacity = counter2 / eliotWasteLand.length;


  poetry3.innerHTML = " ";
  document.getElementById("poem3BG").style.opacity = 0;

  for(var i=0;i<shufflePoem3.length;i++){

    poetry3.innerHTML += "<p id=id_" + shufflePoem3[i].id + ">" + shufflePoem3[i].text + "</p>";

    if(williamsOld[i] == shufflePoem3[i]){
      console.log("AstronomerMatch")
      document.getElementById("id_" + shufflePoem3[i].id).className = "rightPlace"
      counter3++;


    }
  }

  document.getElementById("poem3BG").style.opacity = counter3 / williamsOld.length;


  poetry4.innerHTML = " ";
  document.getElementById("poem4BG").style.opacity = 0;

  for(var i=0;i<shufflePoem4.length;i++){

    poetry4.innerHTML += "<p id=id_" + shufflePoem4[i].id + ">" + shufflePoem4[i].text + "</p>";

    if(whitmanBall[i] == shufflePoem4[i]){
      console.log("WhitmanMatch")
      document.getElementById("id_" + shufflePoem4[i].id).className = "rightPlace"
      counter4++;


    }
  }

  document.getElementById("poem4BG").style.opacity = counter4 / (whitmanBall.length+2);


  //TITLES / SOURCES
  poetry1.innerHTML += "<h4> Excerpted from <i>Stopping by Woods on a Snowy Evening</i> by Robert Frost</h4>"
  poetry2.innerHTML += "<h4> Excerpted From <i>The Waste Land</i> by T.S. Eliot</h4>"
  poetry3.innerHTML += "<h4> Excerpted From <i>The Old Astronomer</i> by Sarah Williams</h4>"
  poetry4.innerHTML += "<h4> Excerpted From the July 23, 1846 edition of the <i>Brooklyn Daily Eagle</i> by Walt Whitman</h4>"





}
