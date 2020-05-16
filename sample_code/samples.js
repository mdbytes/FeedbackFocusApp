// write a function to reetrieve a blob of jason
// make an ajax request!  Use 'fetch' function

// https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   // fetch returns a promise
//   fetch("https://rallycoding.herokuapp.com/api/music_albums").then((res) =>
//     res.json().then((json) => console.log(json))
//   );
// }

const fetchAlbums = async () => {
  // fetch returns a promise
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
};

fetchAlbums();
