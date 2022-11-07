//fetch API1
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6284002c8fmsh48893274fe01f22p15ad42jsn3a0672bc756e",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const getPinkfloyd = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink floyd", options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};

getPinkfloyd();
const renderPinkfloyd = () => {
  let data = response;
  const unlist = document.getElementById("l1");
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${data.cover}" class="mr-3" alt="...">
<div class="media-body">
  <h5 class="mt-0 mb-1">List-based media object</h5>
  <p>All my girls vintage Chanel baby. So you can have your cake. Tonight, tonight, tonight, I'm walking on air. Slowly swallowing down my fear, yeah yeah. Growing fast into a bolt of lightning. So hot and heavy, 'Til dawn. That fairy tale ending with a knight in shining armor. Heavy is the head that wears the crown.</p>
</div>`;
    unlist.appendChild(li);
  }
};
renderPinkfloyd();
//fetch 2
/*const daftpunklist = fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//fetch 3
const metallicalist = fetch(
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));*/

//get objects
/*const mainbox = document.getElementById("main");
const unlist = document.createElement("div");

unlist.innerHTML = `<ul class="list-unstyled">
<li class="media">
  <img src="${}" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0 mb-1">List-based media object</h5>
    <p>All my girls vintage Chanel baby. So you can have your cake. Tonight, tonight, tonight, I'm walking on air. Slowly swallowing down my fear, yeah yeah. Growing fast into a bolt of lightning. So hot and heavy, 'Til dawn. That fairy tale ending with a knight in shining armor. Heavy is the head that wears the crown.</p>
  </div>
</ul>`;

mainbox.appendChild(unlist);*/
