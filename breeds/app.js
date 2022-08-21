const display = document.querySelector("#app");
const searchBlock = document.querySelector("#breedSearch");
const breed = document.querySelector("#breed");

function turnResponseIntoJS(res) {
  return res.json();
}

function printData(data) {
  console.log(data);
  const catBreed = data[0].name;
  const origin = data[0].origin;
  const imageURL = data[0].image_link;
  const bodyWeight = `${data[0].min_weight} - ${data[0].max_weight} pounds`;
  const lifeExpectancy = `${data[0].min_life_expectancy} - ${data[0].max_life_expectancy} years`;
  const shedding = data[0].shedding;
  const affectionate = data[0].family_friendly;
  const playfulness = data[0].playfulness;
  const grooming = data[0].grooming;
  const childFriendly = data[0].children_friendly;

  const catInfo = `<h3>${catBreed}</h3>
<p>
  ${catBreed} are a wonderful breed originally from ${origin}. Weighing between
  ${bodyWeight}, ${catBreed} have a life expectancy of ${lifeExpectancy}. On a scale of 0-5 this how they rate in the following categories.
</p>

<ul>
  <li><b>Shedding: </b>${shedding}</li>
  <li><b>Affectionate: </b>${affectionate}</li>
  <li><b>Playfulness: </b>${playfulness}</li>
  <li><b>Grooming Needed: </b>${grooming}</li>
  <li><b>Friendly with Children: </b> ${childFriendly}</li>
</ul>`;
  const searchResult = document.createElement("div");
  const img = document.createElement("img");
  searchResult.innerHTML = catInfo;
  img.src = imageURL;
  display.appendChild(searchResult);
  display.appendChild(img);
}

function findBreed(e) {
  e.preventDefault();
  const displayMessage = document.createElement("h2");
  //displayMessage.innerText = `Loading...`;
  display.appendChild(displayMessage);

  // 1. Base URL (+ Path)
  const baseURL = "https://api.api-ninjas.com";
  const path = "/v1/cats?name=";
  //const apiKey = "jk8POg2JZg7aeAk9+yAdZA==KlU5iC7SSW8URpDF"
  const breedName = breed.value;
  const myHeaders = new Headers();
  myHeaders.append("X-Api-Key", "jk8POg2JZg7aeAk9+yAdZA==KlU5iC7SSW8URpDF");

  const endPoint = baseURL + path + breedName;
  // 2. Method (None - GET)
  // 3. Query String / Parameters (None)
  // 4. Headers (None)
  //headers: { 'X-Api-Key': 'YOUR_API_KEY'}
  console.log(`Sending request to ${endPoint}`);

  fetch(endPoint, { headers: myHeaders })
    .then(turnResponseIntoJS)
    .then(printData)
    .catch((error) => {
      console.log("Error:", error);
    });
}

//EVENT LISTENER:
//Target + Event Type + Callback
searchBlock.addEventListener("submit", findBreed);
