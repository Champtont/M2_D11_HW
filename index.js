//fetch API1
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6284002c8fmsh48893274fe01f22p15ad42jsn3a0672bc756e",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=pink%20floyd", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

//fetch 2
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=daft%20punk", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
//fetch 3
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
