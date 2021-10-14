export function fetchArtwork(action) {
    let url = 'http://localhost:3000/'

    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))

}