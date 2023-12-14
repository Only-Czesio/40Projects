// Connected DOM with a variables
  const simple = document.querySelector(".simple");
  const hex = document.querySelector(".hex");
  const answer = document.querySelector(".here");
// Created two arrays for choosing color at random
  const colors = ['black', 'silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal','aqua'];
  const hexValues = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
// Random function from 0 until last index
  function randomize(myArray : (string | number)[]) {
    console.log("Random function is working now...")
    return Math.floor(Math.random() * myArray.length);
  }
// Creating a random hex color
  function getRandomHexColor() {
    let hexColor ='#';
    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[randomize(hexValues)];
    }
    return hexColor;
  }

// A Listener for buttons
  hex?.addEventListener("click", () => {
    console.log("WORK!!");
    let hexColor = getRandomHexColor();
    if(answer) {
      answer.textContent = hexColor.toUpperCase();
    }
    document.body.style.backgroundColor = hexColor;
  })

  simple?.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("It's working the button i mean")
    let myColor = colors[randomize(colors)];
    if(answer) {
      answer.textContent = myColor.toUpperCase();
    }
    document.body.style.backgroundColor = myColor;
  });


// First JS Project will be Color Flipper once more
// On the top there will be two buttons which will be anchor to simple colors and hex colors
// On the middle i will set a single button to press to change colors in a random order. Under the button will be the exact name of a color or rgb
// 1. I need to set a template with HTML/CSS
// 1a. 3 boxes ---> 1 box is two buttons , 2 box is a button and paragraph, 3 box is a footer.
// 1b. I will style in a moment, i'm not sure the size and colors yet.
// 2. I need to write a javascript which will set a button to do the job i need it to do.
// 2a. To randomly pick a color i will set a array of colors and with Math.random choose the arrays index to display color.
// 2b. To randomly pick a hex color i will set an array of symbols 0-9 a-f and in a loop each time choose random index with prefex of #
// 2c.
