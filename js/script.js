/* const searchInput = document.querySelector("#search-input"); 
const resultArtists = document.querySelector("#result-artist"); 
const resultPlaylist = document.querySelector("#result-playlists"); 

function requestApi(searchTerm){
    const url  = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response)=> response.json())
        .then((result)=> displayResults(result))

}

function displayResults(results){
    hidePlaylists();
    const artistName = document.querySelector("#artist-name"); 
    const artistImage = document.querySelector("#artist-img");

    results.forEach(element => {
        artistName.innerText = element.name; 
        artistImage.src = element.urlImg; 
        
    });

    resultArtists.classList.remove('hidden'); 
}

function hidePlaylists(){
    resultPlaylist.classList.add("hidden"); 
}

searchInput.addEventListener('input', () => {
    const searchTerm  = searchInput.value.toLowerCase();
    if(searchTerm ===  ''){
        resultPlaylist.classList.add('hidden'); 
        resultArtists.classList.classList.remove('hidden');

        return; 

    }
    requestApi(searchTerm)
})
 */

const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach((element) => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});

