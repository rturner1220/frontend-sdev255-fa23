// we are going to make an event listener.. it will trigger with the DOM is loaded
addEventListener("DOMContentLoaded", async function () {
  const response = await fetch(
    "https://backend-255-fa23-b2ev.onrender.com/api/songs"
  );
  const songs = await response.json();

  let html = "";
  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }
  document.querySelector("#addedsong").innerHTML = html;
});
