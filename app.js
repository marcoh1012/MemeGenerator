const memesContainer = document.querySelector(".memes");
const memeData = document.querySelector(".memeData");
let deleteButton;

//listens for for to be submitted and checks if there is a url input. turns input outline red if there is no url input.
//passes the input info to createMeme function
memeData.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  let img = memeData.querySelector('input[name="picture"]');
  let topText = memeData.querySelector('input[name="top"]');
  let bottomText = memeData.querySelector('input[name="bottom"]');
  if (img.value === "") {
    img.className = "noInput";
  } else {
    img.classList.remove("noInput");
    let newMeme = createMeme(img.value, topText.value, bottomText.value);

    //adds the meme to the page container and resets the input values
    memesContainer.append(newMeme);
    e.target.reset();
  }
});

//creates a new element div whre the picture will be loaded
//also adds two more divs with the top and bottom text
//creates the remove button and ads it as well
//return the new element
function createMeme(pic, top, bottom) {
  let meme = document.createElement("div");
  meme.className = "memePic";

  let memePic = document.createElement("img");
  memePic.setAttribute("src", pic);
  meme.append(memePic);

  let topDiv = document.createElement("div");
  topDiv.className = "topText";
  topDiv.innerText = top.toUpperCase();
  meme.append(topDiv);

  let bottomDiv = document.createElement("div");
  bottomDiv.className = "bottomText";
  bottomDiv.innerText = bottom.toUpperCase();
  meme.append(bottomDiv);

  deleteButton = document.createElement("button");
  deleteButton.className = "deleteButton";
  deleteButton.setAttribute("name", "delete");
  deleteButton.innerText = "X";
  //adds listener to the button to run the delete function when clicked
  deleteButton.addEventListener("click", deleteMeme);
  meme.append(deleteButton);

  return meme;
}

//deletes the meme from the page
function deleteMeme(e) {
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}
