const chuckNorrisJoke = document.getElementById("chuckNorrisJoke");


fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    
    chuckNorrisJoke.innerHTML = `<p>Chiste: ${data.value}</p>`;
  })
  .catch(error => {
    console.error("Error, no hay chiste ):", error);
  });